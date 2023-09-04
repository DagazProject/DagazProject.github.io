Dagaz.Model.WIDTH         = 5;
Dagaz.Model.HEIGHT        = 7;

Dagaz.AI.WHITE_PROM       = 0x30;
Dagaz.AI.BLACK_PROM       = 0x70;

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
[    0,     0,     0,     0,     0, // pieceEmpty
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
],
[    0,     0,     0,     0,     0, // piecePawn
     0,     0,     0,     0,     0,
   -50,    30,    50,    30,   -50,
   -20,    20,    40,    20,   -20,
   -10,    10,    20,    10,   -10,
     0,     0,    10,     0,     0,
     0,     0,     0,     0,     0
],
[    0,     0,     0,     0,     0, // pieceKnight
     0,     0,     0,     0,     0,
   -50,    10,   -50,    10,   -50,
     5,    30,    40,    30,     5,
    10,    20,    30,    20,    10,
     0,    10,    10,    10,     0,
     0,     0,     0,     0,     0
],
[    0,     0,     0,     0,     0, // pieceSilver
     0,     5,     5,     5,     0,
     0,     5,    15,     5,     0,
     0,    15,    20,    15,     0,
     0,    10,    10,    10,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
],
[    0,     0,     0,     0,     0, // piecePawnP
     0,     5,     5,     5,     0,
     0,     5,    15,     5,     0,
     0,    15,    20,    15,     0,
     0,    10,    10,    10,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
],
[    0,     0,     0,     0,     0, // pieceKnightP
     0,     5,     5,     5,     0,
     0,     5,    15,     5,     0,
     0,    15,    20,    15,     0,
     0,    10,    10,    10,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
],
[    0,     0,     0,     0,     0, // pieceSilverP
     0,     5,     5,     5,     0,
     0,     5,    15,     5,     0,
     0,    15,    20,    15,     0,
     0,    10,    10,    10,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
],
[    0,     0,     0,     0,     0, // pieceLanceP
     0,     5,     5,     5,     0,
     0,     5,    15,     5,     0,
     0,    15,    20,    15,     0,
     0,    10,    10,    10,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
],
[    0,     0,     0,     0,     0, // pieceGold
     0,     5,     5,     5,     0,
     0,     5,    15,     5,     0,
     0,    15,    20,    15,     0,
     0,    10,    10,    10,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
],
[    0,     0,     0,     0,     0, // pieceLance
     0,     0,     5,     0,     0,
   -50,     5,    10,     5,   -50,
   -10,    10,    30,    10,   -10,
     0,    20,    50,    20,     0,
     0,     0,    40,     0,     0,
     0,     0,     0,     0,     0
],
[    0,     0,     0,     0,     0, // pieceBishop
     0,     5,     0,     5,     0,
    40,    10,     5,    10,    40,
    10,    10,     0,    10,    10,
    20,    10,    10,    10,    20,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
],
[    0,     0,     0,     0,     0, // pieceRook
     0,     0,     0,     0,     0,
   -20,     0,    10,     0,   -20,
   -10,     5,    20,     5,   -10,
   -10,    10,    50,    10,   -10,
     0,    20,    40,    20,     0,
     0,     0,     0,     0,     0
],
[    0,     0,     0,     0,     0, // pieceBishopP
     0,    10,     5,    15,     0,
    40,    15,    10,    15,    40,
    10,    10,     0,    10,    10,
    20,    10,    10,    10,    20,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
],
[    0,     0,     0,     0,     0, // pieceRookP
     0,    10,     0,    10,     0,
    20,    10,    10,    10,    20,
     0,    15,    20,    15,     0,
   -10,    10,    50,    10,   -10,
     0,    20,    40,    20,     0,
     0,     0,     0,     0,     0
],
[    0,     0,     0,     0,     0, // pieceKing
     0,     0,     0,     0,     0,
    -5,     5,    30,     5,    -5,
    -5,    20,    10,    20,    -5,
    -5,    15,     0,    15,    -5,
     0,    20,    10,    20,     0,
     0,     0,     0,     0,     0
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

    design.addPosition("X7", [12, 11, 0, 1, 0, 0, 0, 0, 0, 0, 12]);
    design.addPosition("Y7", [0, 11, 10, 0, -1, 0, 0, 0, 0, 0, -1]);
    design.addPosition("I7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c7", [12, 11, 10, 0, 0, 0, 0, 56, 0, 70, -4]);
    design.addPosition("d7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("J7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z7", [12, 11, 0, 1, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("T7", [0, 11, 10, 0, -1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X6", [12, 11, 0, 1, 0, -10, 0, -11, -11, 0, 12]);
    design.addPosition("Y6", [0, 11, 10, 0, -1, 0, -12, -11, -11, 0, -1]);
    design.addPosition("I6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [12, 11, 10, 1, 0, -10, 0, 56, 0, 60, -14]);
    design.addPosition("c6", [12, 11, 10, 1, -1, 0, 0, -11, -11, 59, -15]);
    design.addPosition("d6", [12, 11, 10, 0, -1, 0, -12, 34, 0, 58, -16]);
    design.addPosition("e6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("J6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z6", [12, 11, 0, 1, 0, -10, 0, -11, -11, 1, 0]);
    design.addPosition("T6", [0, 11, 10, 0, -1, 0, -12, -11, -11, -12, 0]);
    design.addPosition("X5", [12, 11, 0, 1, 0, -10, 0, -11, -11, 0, 12]);
    design.addPosition("Y5", [0, 11, 10, 0, -1, 0, -12, -11, -11, 0, -1]);
    design.addPosition("I5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [12, 11, 0, 1, 0, -10, 0, 34, 0, 50, -24]);
    design.addPosition("b5", [12, 11, 10, 1, -1, -10, 0, -11, -11, 49, -25]);
    design.addPosition("c5", [12, 11, 10, 1, -1, -10, -12, -11, -11, 48, -26]);
    design.addPosition("d5", [12, 11, 10, 1, -1, 0, -12, -11, -11, 47, -27]);
    design.addPosition("e5", [0, 11, 10, 0, -1, 0, -12, 0, 0, 46, -28]);
    design.addPosition("J5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z5", [12, 11, 0, 1, 0, -10, 0, -11, -11, 1, 0]);
    design.addPosition("T5", [0, 11, 10, 0, -1, 0, -12, -11, -11, -12, 0]);
    design.addPosition("X4", [12, 11, 0, 1, 0, -10, 0, -11, -11, 0, 12]);
    design.addPosition("Y4", [0, 11, 10, 0, -1, 0, -12, -11, -11, 0, -1]);
    design.addPosition("I4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [12, 11, 0, 1, 0, -10, 0, -11, -11, 39, -35]);
    design.addPosition("b4", [12, 11, 10, 1, -1, -10, -12, -11, -11, 38, -36]);
    design.addPosition("c4", [12, 11, 10, 1, -1, -10, -12, -11, -11, 37, -37]);
    design.addPosition("d4", [12, 11, 10, 1, -1, -10, -12, -11, -11, 36, -38]);
    design.addPosition("e4", [0, 11, 10, 0, -1, 0, -12, -11, -11, 35, -39]);
    design.addPosition("J4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z4", [12, 11, 0, 1, 0, -10, 0, -11, -11, 1, 0]);
    design.addPosition("T4", [0, 11, 10, 0, -1, 0, -12, -11, -11, -12, 0]);
    design.addPosition("X3", [12, 11, 0, 1, 0, -10, 0, -11, -11, 0, 12]);
    design.addPosition("Y3", [0, 11, 10, 0, -1, 0, -12, -11, -11, 0, -1]);
    design.addPosition("I3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [12, 0, 0, 1, 0, -10, 0, -11, -11, 28, -46]);
    design.addPosition("b3", [12, 11, 0, 1, -1, -10, -12, -11, -11, 27, -47]);
    design.addPosition("c3", [12, 11, 10, 1, -1, -10, -12, -11, -11, 26, -48]);
    design.addPosition("d3", [0, 11, 10, 1, -1, -10, -12, -11, -11, 25, -49]);
    design.addPosition("e3", [0, 0, 10, 0, -1, 0, -12, -11, -11, 24, -50]);
    design.addPosition("J3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z3", [12, 11, 0, 1, 0, -10, 0, -11, -11, 1, 0]);
    design.addPosition("T3", [0, 11, 10, 0, -1, 0, -12, -11, -11, -12, 0]);
    design.addPosition("X2", [12, 11, 0, 1, 0, -10, 0, -11, -11, 0, 12]);
    design.addPosition("Y2", [0, 11, 10, 0, -1, 0, -12, -11, -11, 0, -1]);
    design.addPosition("I2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [12, 0, 0, 1, 0, -10, -12, -11, -11, 16, -58]);
    design.addPosition("c2", [0, 11, 0, 1, -1, -10, -12, -11, -11, 15, -59]);
    design.addPosition("d2", [0, 0, 10, 0, -1, -10, -12, -11, -11, 14, -60]);
    design.addPosition("e2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("J2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z2", [12, 11, 0, 1, 0, -10, 0, -11, -11, 1, 0]);
    design.addPosition("T2", [0, 11, 10, 0, -1, 0, -12, -11, -11, -12, 0]);
    design.addPosition("X1", [0, 0, 0, 1, 0, -10, 0, -11, -11, 0, 0]);
    design.addPosition("Y1", [0, 0, 0, 0, -1, 0, -12, -11, -11, 0, -1]);
    design.addPosition("I1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 0, 0, -10, -12, -11, -11, 4, -70]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("J1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z1", [0, 0, 0, 1, 0, -10, 0, -11, -11, 1, 0]);
    design.addPosition("T1", [0, 0, 0, 0, -1, 0, -12, -11, -11, -12, 0]);
    design.addPosition("W1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("board-zone", 1, [71, 59, 60, 61, 47, 48, 49, 50, 51, 36, 37, 38, 39, 40, 25, 26, 27, 28, 29, 15, 16, 17, 5]);
    design.addZone("board-zone", 2, [71, 59, 60, 61, 47, 48, 49, 50, 51, 36, 37, 38, 39, 40, 25, 26, 27, 28, 29, 15, 16, 17, 5]);
    design.addZone("promotion-zone", 1, [15, 16, 5, 17]);
    design.addZone("promotion-zone", 2, [59, 71, 60, 61]);
    design.addZone("goal-zone", 1, [5]);
    design.addZone("goal-zone", 2, [71]);
    design.addZone("knight-zone", 1, [47, 36, 59, 48, 37, 26, 71, 60, 49, 38, 61, 50, 39, 28, 51, 40]);
    design.addZone("knight-zone", 2, [25, 36, 15, 26, 37, 48, 5, 16, 27, 38, 17, 28, 39, 50, 29, 40]);

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
    design.addMove(1, 1, [47, 7], 0);

    design.addPiece("Silver", 2, 5);
    design.addMove(2, 0, [6], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 0, [5], 0);
    design.addMove(2, 0, [8], 0);
    design.addMove(2, 1, [47, 7], 0);

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
    design.addMove(4, 1, [47, 7], 0);

    design.addPiece("KnightP", 5, 6);
    design.addMove(5, 0, [8], 0);
    design.addMove(5, 0, [6], 0);
    design.addMove(5, 0, [1], 0);
    design.addMove(5, 0, [5], 0);
    design.addMove(5, 0, [4], 0);
    design.addMove(5, 0, [3], 0);

    design.addPiece("Lance", 6, 5);
    design.addMove(6, 3, [8, 8], 0);
    design.addMove(6, 1, [47, 7], 0);

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
    design.addMove(8, 1, [47, 7], 0);

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
    design.addMove(10, 1, [47, 7], 0);

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
    design.addMove(12, 1, [47, 7], 0);

    design.addPiece("PawnP", 13, 6);
    design.addMove(13, 0, [8], 0);
    design.addMove(13, 0, [6], 0);
    design.addMove(13, 0, [1], 0);
    design.addMove(13, 0, [5], 0);
    design.addMove(13, 0, [4], 0);
    design.addMove(13, 0, [3], 0);

    design.setup("South", "King", 71);
    design.setup("South", "Gold", 59);
    design.setup("South", "Silver", 61);
    design.setup("South", "Pawn", 60);
    design.setup("South", "Lance", 75);
    design.setup("South", "Knight", 76);
    design.setup("South", "Bishop", 64);
    design.setup("South", "Rook", 65);
    design.setup("North", "King", 5);
    design.setup("North", "Gold", 17);
    design.setup("North", "Silver", 15);
    design.setup("North", "Pawn", 16);
    design.setup("North", "Lance", 1);
    design.setup("North", "Knight", 0);
    design.setup("North", "Bishop", 12);
    design.setup("North", "Rook", 11);
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
 
    view.defPosition("X7", 9, 15, 41, 46);
    view.defPosition("Y7", 50, 15, 41, 46);
    view.defPosition("I7", 91, 15, 41, 46);
    view.defPosition("a7", 132, 15, 41, 46);
    view.defPosition("b7", 173, 15, 41, 46);
    view.defPosition("c7", 214, 15, 41, 46);
    view.defPosition("d7", 255, 15, 41, 46);
    view.defPosition("e7", 296, 15, 41, 46);
    view.defPosition("J7", 337, 15, 41, 46);
    view.defPosition("Z7", 378, 15, 41, 46);
    view.defPosition("T7", 419, 15, 41, 46);
    view.defPosition("X6", 9, 61, 41, 46);
    view.defPosition("Y6", 50, 61, 41, 46);
    view.defPosition("I6", 91, 61, 41, 46);
    view.defPosition("a6", 132, 61, 41, 46);
    view.defPosition("b6", 173, 61, 41, 46);
    view.defPosition("c6", 214, 61, 41, 46);
    view.defPosition("d6", 255, 61, 41, 46);
    view.defPosition("e6", 296, 61, 41, 46);
    view.defPosition("J6", 337, 61, 41, 46);
    view.defPosition("Z6", 378, 61, 41, 46);
    view.defPosition("T6", 419, 61, 41, 46);
    view.defPosition("X5", 9, 107, 41, 46);
    view.defPosition("Y5", 50, 107, 41, 46);
    view.defPosition("I5", 91, 107, 41, 46);
    view.defPosition("a5", 132, 107, 41, 46);
    view.defPosition("b5", 173, 107, 41, 46);
    view.defPosition("c5", 214, 107, 41, 46);
    view.defPosition("d5", 255, 107, 41, 46);
    view.defPosition("e5", 296, 107, 41, 46);
    view.defPosition("J5", 337, 107, 41, 46);
    view.defPosition("Z5", 378, 107, 41, 46);
    view.defPosition("T5", 419, 107, 41, 46);
    view.defPosition("X4", 9, 153, 41, 46);
    view.defPosition("Y4", 50, 153, 41, 46);
    view.defPosition("I4", 91, 153, 41, 46);
    view.defPosition("a4", 132, 153, 41, 46);
    view.defPosition("b4", 173, 153, 41, 46);
    view.defPosition("c4", 214, 153, 41, 46);
    view.defPosition("d4", 255, 153, 41, 46);
    view.defPosition("e4", 296, 153, 41, 46);
    view.defPosition("J4", 337, 153, 41, 46);
    view.defPosition("Z4", 378, 153, 41, 46);
    view.defPosition("T4", 419, 153, 41, 46);
    view.defPosition("X3", 9, 199, 41, 46);
    view.defPosition("Y3", 50, 199, 41, 46);
    view.defPosition("I3", 91, 199, 41, 46);
    view.defPosition("a3", 132, 199, 41, 46);
    view.defPosition("b3", 173, 199, 41, 46);
    view.defPosition("c3", 214, 199, 41, 46);
    view.defPosition("d3", 255, 199, 41, 46);
    view.defPosition("e3", 296, 199, 41, 46);
    view.defPosition("J3", 337, 199, 41, 46);
    view.defPosition("Z3", 378, 199, 41, 46);
    view.defPosition("T3", 419, 199, 41, 46);
    view.defPosition("X2", 9, 245, 41, 46);
    view.defPosition("Y2", 50, 245, 41, 46);
    view.defPosition("I2", 91, 245, 41, 46);
    view.defPosition("a2", 132, 245, 41, 46);
    view.defPosition("b2", 173, 245, 41, 46);
    view.defPosition("c2", 214, 245, 41, 46);
    view.defPosition("d2", 255, 245, 41, 46);
    view.defPosition("e2", 296, 245, 41, 46);
    view.defPosition("J2", 337, 245, 41, 46);
    view.defPosition("Z2", 378, 245, 41, 46);
    view.defPosition("T2", 419, 245, 41, 46);
    view.defPosition("X1", 9, 291, 41, 46);
    view.defPosition("Y1", 50, 291, 41, 46);
    view.defPosition("I1", 91, 291, 41, 46);
    view.defPosition("a1", 132, 291, 41, 46);
    view.defPosition("b1", 173, 291, 41, 46);
    view.defPosition("c1", 214, 291, 41, 46);
    view.defPosition("d1", 255, 291, 41, 46);
    view.defPosition("e1", 296, 291, 41, 46);
    view.defPosition("J1", 337, 291, 41, 46);
    view.defPosition("Z1", 378, 291, 41, 46);
    view.defPosition("T1", 419, 291, 41, 46);

    view.defPopup("Promote", 183, 70);
    view.defPopupPosition("W1", 12, 15, 39, 39);
    view.defPopupPosition("W2", 52, 15, 39, 39);
}
