Dagaz.AI.Q_SEARCH_LIMIT = -4;
Dagaz.AI.ALL_CUT_LIMIT  = 5;
Dagaz.AI.INC_CHECK_PLY  = false;

Dagaz.Model.WIDTH  = 9;
Dagaz.Model.HEIGHT = 10;

Dagaz.AI.pieceAdj = [
[   0,    0,    0,    0,    0,    0,    0,    0,    0, // pieceEmpty
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0
],
[  10,   20,   30,  100,  100,  100,   30,   20,   10, // piecePawn
   10,   40,   60,  200,  200,  200,   60,   40,   10, 
   20,   40,   50,  100,  100,  100,   50,   40,   20, 
   20,   30,   40,   50,   50,   50,   40,   30,   20, 
   10,   20,   30,   40,   40,   40,   30,   20,   10, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0
],
[   5,   10,   10,   10,   10,   10,   10,   10,    5, // pieceAdvisor
   10,   15,   15,   15,   15,   15,   15,   15,   10, 
   10,   15,   15,   15,   15,   15,   15,   15,   10, 
   10,   15,   15,   15,   15,   15,   15,   15,   10, 
   10,   15,   15,   15,   15,   15,   15,   15,   10, 
   10,   15,   15,   15,   15,   15,   15,   15,   10, 
   10,   15,   15,   15,   15,   15,   15,   15,   10, 
   10,   15,   15,   15,   15,   15,   15,   15,   10, 
   10,   15,   15,   15,   15,   15,   15,   15,   10, 
    5,   10,   10,   10,   10,   10,   10,   10,    5
],
[   5,   10,   10,   10,   10,   10,   10,   10,    5, // pieceBishop
   10,   10,   10,   10,   10,   10,   10,   10,   10, 
   10,   10,   15,   15,   15,   15,   15,   10,   10, 
   10,   10,   15,   15,   15,   15,   15,   10,   10, 
   10,   10,   15,   15,   15,   15,   15,   10,   10, 
   10,   10,   15,   15,   15,   15,   15,   10,   10, 
   10,   10,   15,   15,   15,   15,   15,   10,   10, 
   10,   10,   15,   15,   15,   15,   15,   10,   10, 
   10,   10,   10,   10,   10,   10,   10,   10,   10, 
    5,   10,   10,   10,   10,   10,   10,   10,    5
],
[-200, -100,  -50,  -50,  -50,  -50,  -50, -100, -200, // pieceKnight
 -100,    0,    0,    0,    0,    0,    0,    0, -100,
  -50,    0,   60,   60,   60,   60,   60,    0,  -50,
  -50,    0,   30,   60,   60,   60,   30,    0,  -50,
  -50,    0,   30,   60,   60,   60,   30,    0,  -50,
  -50,    0,   30,   60,   60,   60,   30,    0,  -50,
  -50,    0,   30,   60,   60,   60,   30,    0,  -50,
  -50,    0,   30,   30,   30,   30,   30,    0,  -50,
 -100,    0,    0,    0,    0,    0,    0,    0,  -100,
 -200,  -50,  -25,  -25,  -25,  -25,  -25,  -50,  -200
],
[   0,    0,    0,    0,    0,    0,    0,    0,    0, // pieceCannon
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0
],
[ -60,  -30,  -10,   20,   20,   20,  -10,  -30,   -60, // pieceRook
   40,   70,   90,  120,  120,  120,   90,   70,    40,
  -60,  -30,  -10,   20,   20,   20,  -10,  -30,   -60,
  -60,  -30,  -10,   20,   20,   20,  -10,  -30,   -60,
  -60,  -30,  -10,   20,   20,   20,  -10,  -30,   -60,
  -60,  -30,  -10,   20,   20,   20,  -10,  -30,   -60,
  -60,  -30,  -10,   20,   20,   20,  -10,  -30,   -60,
  -60,  -30,  -10,   20,   20,   20,  -10,  -30,   -60,
  -60,  -30,  -10,   20,   20,   20,  -10,  -30,   -60,
  -60,  -30,  -10,   20,   20,   20,  -10,  -30,   -60
],
[   0,    0,    0,    0,    0,    0,    0,    0,    0, // pieceKing
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    5,   10,    5,    0,    0,    0, 
    0,    0,    0,   10,   10,   10,    0,    0,    0, 
    0,    0,    0,    5,   10,    5,    0,    0,    0
]];

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
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("advisor-wait", "15");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("Red", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1]);

    design.addPosition("a10", [10, 9, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b10", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("c10", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("d10", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("e10", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("f10", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("g10", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("h10", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("i10", [0, 9, 8, 0, -1, 0, 0, 0]);
    design.addPosition("a9", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b9", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c9", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d9", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e9", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f9", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g9", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h9", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i9", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a8", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i8", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a7", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i7", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a6", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i6", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a5", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i5", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a4", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i4", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a3", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i3", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a2", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i2", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("i1", [0, 0, 0, 0, -1, 0, -10, -9]);

    design.addZone("fortress", 1, [84, 85, 86, 75, 76, 77, 66, 67, 68]);
    design.addZone("fortress", 2, [3, 4, 5, 12, 13, 14, 21, 22, 23]);
    design.addZone("enemy", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]);
    design.addZone("enemy", 2, [81, 82, 83, 84, 85, 86, 87, 88, 89, 72, 73, 74, 75, 76, 77, 78, 79, 80, 63, 64, 65, 66, 67, 68, 69, 70, 71, 54, 55, 56, 57, 58, 59, 60, 61, 62, 45, 46, 47, 48, 49, 50, 51, 52, 53]);
    design.addZone("mandarin-zone", 1, [84, 86, 3, 5]);
    design.addZone("mandarin-zone", 2, [84, 86, 3, 5]);
    design.addZone("horse-zone", 1, [82, 88, 1, 7]);
    design.addZone("horse-zone", 2, [82, 88, 1, 7]);
    design.addZone("elephant-zone", 1, [83, 87, 2, 6]);
    design.addZone("elephant-zone", 2, [83, 87, 2, 6]);
    design.addZone("chariot-zone", 1, [81, 89, 0, 8]);
    design.addZone("chariot-zone", 2, [81, 89, 0, 8]);
    design.addZone("cannon-zone", 1, [64, 70, 19, 25]);
    design.addZone("cannon-zone", 2, [64, 70, 19, 25]);
    design.addZone("soldier-zone", 1, [54, 56, 58, 60, 62, 27, 29, 31, 33, 35]);
    design.addZone("soldier-zone", 2, [54, 56, 58, 60, 62, 27, 29, 31, 33, 35]);
    design.addZone("setup-zone", 1, [54, 56, 58, 60, 62, 82, 88, 83, 87, 81, 89, 84, 86, 64, 70]);
    design.addZone("setup-zone", 2, [27, 29, 31, 33, 35, 1, 7, 2, 6, 0, 8, 3, 5, 19, 25]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	1);	// enemy
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
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
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	7);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-8);
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-5);
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.IN_ZONE,	0);	// fortress
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.IN_ZONE,	7);	// soldier-zone
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PROMOTE,	0);	// Soldier
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.IN_ZONE,	3);	// horse-zone
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PROMOTE,	0);	// Soldier
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.IN_ZONE,	4);	// elephant-zone
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PROMOTE,	0);	// Soldier
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.IN_ZONE,	5);	// chariot-zone
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	8);
    design.addCommand(9, ZRF.FORK,	4);
    design.addCommand(9, ZRF.PROMOTE,	0);	// Soldier
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.JUMP,	-9);
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.IN_ZONE,	6);	// cannon-zone
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.IF,	8);
    design.addCommand(10, ZRF.FORK,	4);
    design.addCommand(10, ZRF.PROMOTE,	0);	// Soldier
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end
    design.addCommand(10, ZRF.PARAM,	1);	// $2
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.JUMP,	-9);
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.IN_ZONE,	2);	// mandarin-zone
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.PROMOTE,	0);	// Soldier
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.IN_ZONE,	7);	// soldier-zone
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.PARAM,	0);	// $1
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.PROMOTE,	1);	// Horse
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.IN_ZONE,	3);	// horse-zone
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.PARAM,	0);	// $1
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.PARAM,	1);	// $2
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.PROMOTE,	1);	// Horse
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.IN_ZONE,	4);	// elephant-zone
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.PARAM,	0);	// $1
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.PARAM,	1);	// $2
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.PROMOTE,	1);	// Horse
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end

    design.addCommand(15, ZRF.FUNCTION,	24);	// from
    design.addCommand(15, ZRF.IN_ZONE,	5);	// chariot-zone
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.PARAM,	0);	// $1
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.IF,	8);
    design.addCommand(15, ZRF.FORK,	4);
    design.addCommand(15, ZRF.PROMOTE,	1);	// Horse
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	28);	// end
    design.addCommand(15, ZRF.PARAM,	1);	// $2
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.JUMP,	-9);
    design.addCommand(15, ZRF.FUNCTION,	28);	// end

    design.addCommand(16, ZRF.FUNCTION,	24);	// from
    design.addCommand(16, ZRF.IN_ZONE,	6);	// cannon-zone
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.PARAM,	0);	// $1
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.IF,	8);
    design.addCommand(16, ZRF.FORK,	4);
    design.addCommand(16, ZRF.PROMOTE,	1);	// Horse
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.FUNCTION,	28);	// end
    design.addCommand(16, ZRF.PARAM,	1);	// $2
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.JUMP,	-9);
    design.addCommand(16, ZRF.FUNCTION,	28);	// end

    design.addCommand(17, ZRF.FUNCTION,	24);	// from
    design.addCommand(17, ZRF.IN_ZONE,	2);	// mandarin-zone
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PARAM,	0);	// $1
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PROMOTE,	1);	// Horse
    design.addCommand(17, ZRF.FUNCTION,	25);	// to
    design.addCommand(17, ZRF.FUNCTION,	28);	// end

    design.addCommand(18, ZRF.FUNCTION,	24);	// from
    design.addCommand(18, ZRF.IN_ZONE,	7);	// soldier-zone
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PARAM,	0);	// $1
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PROMOTE,	2);	// Elephant
    design.addCommand(18, ZRF.FUNCTION,	25);	// to
    design.addCommand(18, ZRF.FUNCTION,	28);	// end

    design.addCommand(19, ZRF.FUNCTION,	24);	// from
    design.addCommand(19, ZRF.IN_ZONE,	3);	// horse-zone
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.PARAM,	0);	// $1
    design.addCommand(19, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(19, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.PARAM,	1);	// $2
    design.addCommand(19, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(19, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.PROMOTE,	2);	// Elephant
    design.addCommand(19, ZRF.FUNCTION,	25);	// to
    design.addCommand(19, ZRF.FUNCTION,	28);	// end

    design.addCommand(20, ZRF.FUNCTION,	24);	// from
    design.addCommand(20, ZRF.IN_ZONE,	4);	// elephant-zone
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.PARAM,	0);	// $1
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.PARAM,	1);	// $2
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.PROMOTE,	2);	// Elephant
    design.addCommand(20, ZRF.FUNCTION,	25);	// to
    design.addCommand(20, ZRF.FUNCTION,	28);	// end

    design.addCommand(21, ZRF.FUNCTION,	24);	// from
    design.addCommand(21, ZRF.IN_ZONE,	5);	// chariot-zone
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.PARAM,	0);	// $1
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(21, ZRF.FUNCTION,	0);	// not
    design.addCommand(21, ZRF.IF,	8);
    design.addCommand(21, ZRF.FORK,	4);
    design.addCommand(21, ZRF.PROMOTE,	2);	// Elephant
    design.addCommand(21, ZRF.FUNCTION,	25);	// to
    design.addCommand(21, ZRF.FUNCTION,	28);	// end
    design.addCommand(21, ZRF.PARAM,	1);	// $2
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.JUMP,	-9);
    design.addCommand(21, ZRF.FUNCTION,	28);	// end

    design.addCommand(22, ZRF.FUNCTION,	24);	// from
    design.addCommand(22, ZRF.IN_ZONE,	6);	// cannon-zone
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.PARAM,	0);	// $1
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(22, ZRF.FUNCTION,	0);	// not
    design.addCommand(22, ZRF.IF,	8);
    design.addCommand(22, ZRF.FORK,	4);
    design.addCommand(22, ZRF.PROMOTE,	2);	// Elephant
    design.addCommand(22, ZRF.FUNCTION,	25);	// to
    design.addCommand(22, ZRF.FUNCTION,	28);	// end
    design.addCommand(22, ZRF.PARAM,	1);	// $2
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.JUMP,	-9);
    design.addCommand(22, ZRF.FUNCTION,	28);	// end

    design.addCommand(23, ZRF.FUNCTION,	24);	// from
    design.addCommand(23, ZRF.IN_ZONE,	2);	// mandarin-zone
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PARAM,	0);	// $1
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PROMOTE,	2);	// Elephant
    design.addCommand(23, ZRF.FUNCTION,	25);	// to
    design.addCommand(23, ZRF.FUNCTION,	28);	// end

    design.addCommand(24, ZRF.FUNCTION,	24);	// from
    design.addCommand(24, ZRF.IN_ZONE,	7);	// soldier-zone
    design.addCommand(24, ZRF.FUNCTION,	20);	// verify
    design.addCommand(24, ZRF.PARAM,	0);	// $1
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(24, ZRF.FUNCTION,	20);	// verify
    design.addCommand(24, ZRF.PROMOTE,	3);	// Chariot
    design.addCommand(24, ZRF.FUNCTION,	25);	// to
    design.addCommand(24, ZRF.FUNCTION,	28);	// end

    design.addCommand(25, ZRF.FUNCTION,	24);	// from
    design.addCommand(25, ZRF.IN_ZONE,	3);	// horse-zone
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.PARAM,	0);	// $1
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.PARAM,	1);	// $2
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.PROMOTE,	3);	// Chariot
    design.addCommand(25, ZRF.FUNCTION,	25);	// to
    design.addCommand(25, ZRF.FUNCTION,	28);	// end

    design.addCommand(26, ZRF.FUNCTION,	24);	// from
    design.addCommand(26, ZRF.IN_ZONE,	4);	// elephant-zone
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.PARAM,	0);	// $1
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.PARAM,	1);	// $2
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.PROMOTE,	3);	// Chariot
    design.addCommand(26, ZRF.FUNCTION,	25);	// to
    design.addCommand(26, ZRF.FUNCTION,	28);	// end

    design.addCommand(27, ZRF.FUNCTION,	24);	// from
    design.addCommand(27, ZRF.IN_ZONE,	5);	// chariot-zone
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.PARAM,	0);	// $1
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	0);	// not
    design.addCommand(27, ZRF.IF,	8);
    design.addCommand(27, ZRF.FORK,	4);
    design.addCommand(27, ZRF.PROMOTE,	3);	// Chariot
    design.addCommand(27, ZRF.FUNCTION,	25);	// to
    design.addCommand(27, ZRF.FUNCTION,	28);	// end
    design.addCommand(27, ZRF.PARAM,	1);	// $2
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.JUMP,	-9);
    design.addCommand(27, ZRF.FUNCTION,	28);	// end

    design.addCommand(28, ZRF.FUNCTION,	24);	// from
    design.addCommand(28, ZRF.IN_ZONE,	6);	// cannon-zone
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	0);	// $1
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	0);	// not
    design.addCommand(28, ZRF.IF,	8);
    design.addCommand(28, ZRF.FORK,	4);
    design.addCommand(28, ZRF.PROMOTE,	3);	// Chariot
    design.addCommand(28, ZRF.FUNCTION,	25);	// to
    design.addCommand(28, ZRF.FUNCTION,	28);	// end
    design.addCommand(28, ZRF.PARAM,	1);	// $2
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.JUMP,	-9);
    design.addCommand(28, ZRF.FUNCTION,	28);	// end

    design.addCommand(29, ZRF.FUNCTION,	24);	// from
    design.addCommand(29, ZRF.IN_ZONE,	2);	// mandarin-zone
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.PARAM,	0);	// $1
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.PROMOTE,	3);	// Chariot
    design.addCommand(29, ZRF.FUNCTION,	25);	// to
    design.addCommand(29, ZRF.FUNCTION,	28);	// end

    design.addCommand(30, ZRF.FUNCTION,	24);	// from
    design.addCommand(30, ZRF.IN_ZONE,	7);	// soldier-zone
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.PARAM,	0);	// $1
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.PROMOTE,	4);	// Cannon
    design.addCommand(30, ZRF.FUNCTION,	25);	// to
    design.addCommand(30, ZRF.FUNCTION,	28);	// end

    design.addCommand(31, ZRF.FUNCTION,	24);	// from
    design.addCommand(31, ZRF.IN_ZONE,	3);	// horse-zone
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.PARAM,	0);	// $1
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.PARAM,	1);	// $2
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.PROMOTE,	4);	// Cannon
    design.addCommand(31, ZRF.FUNCTION,	25);	// to
    design.addCommand(31, ZRF.FUNCTION,	28);	// end

    design.addCommand(32, ZRF.FUNCTION,	24);	// from
    design.addCommand(32, ZRF.IN_ZONE,	4);	// elephant-zone
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	0);	// $1
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	1);	// $2
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PROMOTE,	4);	// Cannon
    design.addCommand(32, ZRF.FUNCTION,	25);	// to
    design.addCommand(32, ZRF.FUNCTION,	28);	// end

    design.addCommand(33, ZRF.FUNCTION,	24);	// from
    design.addCommand(33, ZRF.IN_ZONE,	5);	// chariot-zone
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	0);	// $1
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	0);	// not
    design.addCommand(33, ZRF.IF,	8);
    design.addCommand(33, ZRF.FORK,	4);
    design.addCommand(33, ZRF.PROMOTE,	4);	// Cannon
    design.addCommand(33, ZRF.FUNCTION,	25);	// to
    design.addCommand(33, ZRF.FUNCTION,	28);	// end
    design.addCommand(33, ZRF.PARAM,	1);	// $2
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.JUMP,	-9);
    design.addCommand(33, ZRF.FUNCTION,	28);	// end

    design.addCommand(34, ZRF.FUNCTION,	24);	// from
    design.addCommand(34, ZRF.IN_ZONE,	6);	// cannon-zone
    design.addCommand(34, ZRF.FUNCTION,	20);	// verify
    design.addCommand(34, ZRF.PARAM,	0);	// $1
    design.addCommand(34, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(34, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(34, ZRF.FUNCTION,	0);	// not
    design.addCommand(34, ZRF.IF,	8);
    design.addCommand(34, ZRF.FORK,	4);
    design.addCommand(34, ZRF.PROMOTE,	4);	// Cannon
    design.addCommand(34, ZRF.FUNCTION,	25);	// to
    design.addCommand(34, ZRF.FUNCTION,	28);	// end
    design.addCommand(34, ZRF.PARAM,	1);	// $2
    design.addCommand(34, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(34, ZRF.JUMP,	-9);
    design.addCommand(34, ZRF.FUNCTION,	28);	// end

    design.addCommand(35, ZRF.FUNCTION,	24);	// from
    design.addCommand(35, ZRF.IN_ZONE,	2);	// mandarin-zone
    design.addCommand(35, ZRF.FUNCTION,	20);	// verify
    design.addCommand(35, ZRF.PARAM,	0);	// $1
    design.addCommand(35, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(35, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(35, ZRF.FUNCTION,	20);	// verify
    design.addCommand(35, ZRF.PROMOTE,	4);	// Cannon
    design.addCommand(35, ZRF.FUNCTION,	25);	// to
    design.addCommand(35, ZRF.FUNCTION,	28);	// end

    design.addCommand(36, ZRF.FUNCTION,	24);	// from
    design.addCommand(36, ZRF.IN_ZONE,	7);	// soldier-zone
    design.addCommand(36, ZRF.FUNCTION,	20);	// verify
    design.addCommand(36, ZRF.PARAM,	0);	// $1
    design.addCommand(36, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(36, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(36, ZRF.FUNCTION,	20);	// verify
    design.addCommand(36, ZRF.PROMOTE,	5);	// Mandarin
    design.addCommand(36, ZRF.FUNCTION,	25);	// to
    design.addCommand(36, ZRF.FUNCTION,	28);	// end

    design.addCommand(37, ZRF.FUNCTION,	24);	// from
    design.addCommand(37, ZRF.IN_ZONE,	3);	// horse-zone
    design.addCommand(37, ZRF.FUNCTION,	20);	// verify
    design.addCommand(37, ZRF.PARAM,	0);	// $1
    design.addCommand(37, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(37, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(37, ZRF.FUNCTION,	20);	// verify
    design.addCommand(37, ZRF.PARAM,	1);	// $2
    design.addCommand(37, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(37, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(37, ZRF.FUNCTION,	20);	// verify
    design.addCommand(37, ZRF.PROMOTE,	5);	// Mandarin
    design.addCommand(37, ZRF.FUNCTION,	25);	// to
    design.addCommand(37, ZRF.FUNCTION,	28);	// end

    design.addCommand(38, ZRF.FUNCTION,	24);	// from
    design.addCommand(38, ZRF.IN_ZONE,	4);	// elephant-zone
    design.addCommand(38, ZRF.FUNCTION,	20);	// verify
    design.addCommand(38, ZRF.PARAM,	0);	// $1
    design.addCommand(38, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(38, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(38, ZRF.FUNCTION,	20);	// verify
    design.addCommand(38, ZRF.PARAM,	1);	// $2
    design.addCommand(38, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(38, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(38, ZRF.FUNCTION,	20);	// verify
    design.addCommand(38, ZRF.PROMOTE,	5);	// Mandarin
    design.addCommand(38, ZRF.FUNCTION,	25);	// to
    design.addCommand(38, ZRF.FUNCTION,	28);	// end

    design.addCommand(39, ZRF.FUNCTION,	24);	// from
    design.addCommand(39, ZRF.IN_ZONE,	5);	// chariot-zone
    design.addCommand(39, ZRF.FUNCTION,	20);	// verify
    design.addCommand(39, ZRF.PARAM,	0);	// $1
    design.addCommand(39, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(39, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(39, ZRF.FUNCTION,	0);	// not
    design.addCommand(39, ZRF.IF,	8);
    design.addCommand(39, ZRF.FORK,	4);
    design.addCommand(39, ZRF.PROMOTE,	5);	// Mandarin
    design.addCommand(39, ZRF.FUNCTION,	25);	// to
    design.addCommand(39, ZRF.FUNCTION,	28);	// end
    design.addCommand(39, ZRF.PARAM,	1);	// $2
    design.addCommand(39, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(39, ZRF.JUMP,	-9);
    design.addCommand(39, ZRF.FUNCTION,	28);	// end

    design.addCommand(40, ZRF.FUNCTION,	24);	// from
    design.addCommand(40, ZRF.IN_ZONE,	6);	// cannon-zone
    design.addCommand(40, ZRF.FUNCTION,	20);	// verify
    design.addCommand(40, ZRF.PARAM,	0);	// $1
    design.addCommand(40, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(40, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(40, ZRF.FUNCTION,	0);	// not
    design.addCommand(40, ZRF.IF,	8);
    design.addCommand(40, ZRF.FORK,	4);
    design.addCommand(40, ZRF.PROMOTE,	5);	// Mandarin
    design.addCommand(40, ZRF.FUNCTION,	25);	// to
    design.addCommand(40, ZRF.FUNCTION,	28);	// end
    design.addCommand(40, ZRF.PARAM,	1);	// $2
    design.addCommand(40, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(40, ZRF.JUMP,	-9);
    design.addCommand(40, ZRF.FUNCTION,	28);	// end

    design.addCommand(41, ZRF.FUNCTION,	24);	// from
    design.addCommand(41, ZRF.IN_ZONE,	2);	// mandarin-zone
    design.addCommand(41, ZRF.FUNCTION,	20);	// verify
    design.addCommand(41, ZRF.PARAM,	0);	// $1
    design.addCommand(41, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(41, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(41, ZRF.FUNCTION,	20);	// verify
    design.addCommand(41, ZRF.PROMOTE,	5);	// Mandarin
    design.addCommand(41, ZRF.FUNCTION,	25);	// to
    design.addCommand(41, ZRF.FUNCTION,	28);	// end

    design.addPiece("Soldier", 0, 100);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 1, [4], 0);
    design.addMove(0, 1, [3], 0);

    design.addPiece("Horse", 1, 400);
    design.addMove(1, 2, [7, 6], 0);
    design.addMove(1, 2, [7, 5], 0);
    design.addMove(1, 2, [1, 2], 0);
    design.addMove(1, 2, [1, 0], 0);
    design.addMove(1, 2, [4, 6], 0);
    design.addMove(1, 2, [3, 5], 0);
    design.addMove(1, 2, [4, 2], 0);
    design.addMove(1, 2, [3, 0], 0);

    design.addPiece("Elephant", 2, 200);
    design.addMove(2, 2, [6, 6], 0);
    design.addMove(2, 2, [2, 2], 0);
    design.addMove(2, 2, [5, 5], 0);
    design.addMove(2, 2, [0, 0], 0);

    design.addPiece("Chariot", 3, 1000);
    design.addMove(3, 3, [7, 7], 0);
    design.addMove(3, 3, [1, 1], 0);
    design.addMove(3, 3, [4, 4], 0);
    design.addMove(3, 3, [3, 3], 0);

    design.addPiece("Cannon", 4, 500);
    design.addMove(4, 4, [7, 7, 7, 7], 0);
    design.addMove(4, 4, [1, 1, 1, 1], 0);
    design.addMove(4, 4, [4, 4, 4, 4], 0);
    design.addMove(4, 4, [3, 3, 3, 3], 0);

    design.addPiece("Mandarin", 5, 200);
    design.addMove(5, 0, [6], 0);
    design.addMove(5, 0, [2], 0);
    design.addMove(5, 0, [5], 0);
    design.addMove(5, 0, [0], 0);

    design.addPiece("General", 6, 20000);
    design.addMove(6, 5, [7], 0);
    design.addMove(6, 5, [1], 0);
    design.addMove(6, 5, [4], 0);
    design.addMove(6, 5, [3], 0);

    design.addPiece("UnknownSoldier", 7, 100);
    design.addMove(7, 6, [7], 0);
    design.addMove(7, 7, [7, 6], 0);
    design.addMove(7, 7, [7, 5], 0);
    design.addMove(7, 7, [1, 2], 0);
    design.addMove(7, 7, [1, 0], 0);
    design.addMove(7, 7, [4, 6], 0);
    design.addMove(7, 7, [3, 5], 0);
    design.addMove(7, 7, [4, 2], 0);
    design.addMove(7, 7, [3, 0], 0);
    design.addMove(7, 8, [6, 6], 0);
    design.addMove(7, 8, [2, 2], 0);
    design.addMove(7, 8, [5, 5], 0);
    design.addMove(7, 8, [0, 0], 0);
    design.addMove(7, 9, [7, 7], 0);
    design.addMove(7, 9, [1, 1], 0);
    design.addMove(7, 9, [4, 4], 0);
    design.addMove(7, 9, [3, 3], 0);
    design.addMove(7, 10, [7, 7], 0);
    design.addMove(7, 10, [1, 1], 0);
    design.addMove(7, 10, [4, 4], 0);
    design.addMove(7, 10, [3, 3], 0);
    design.addMove(7, 11, [6], 0);
    design.addMove(7, 11, [2], 0);
    design.addMove(7, 11, [5], 0);
    design.addMove(7, 11, [0], 0);

    design.addPiece("UnknownHorse", 8, 400);
    design.addMove(8, 12, [7], 0);
    design.addMove(8, 13, [7, 6], 0);
    design.addMove(8, 13, [7, 5], 0);
    design.addMove(8, 13, [1, 2], 0);
    design.addMove(8, 13, [1, 0], 0);
    design.addMove(8, 13, [4, 6], 0);
    design.addMove(8, 13, [3, 5], 0);
    design.addMove(8, 13, [4, 2], 0);
    design.addMove(8, 13, [3, 0], 0);
    design.addMove(8, 14, [6, 6], 0);
    design.addMove(8, 14, [2, 2], 0);
    design.addMove(8, 14, [5, 5], 0);
    design.addMove(8, 14, [0, 0], 0);
    design.addMove(8, 15, [7, 7], 0);
    design.addMove(8, 15, [1, 1], 0);
    design.addMove(8, 15, [4, 4], 0);
    design.addMove(8, 15, [3, 3], 0);
    design.addMove(8, 16, [7, 7], 0);
    design.addMove(8, 16, [1, 1], 0);
    design.addMove(8, 16, [4, 4], 0);
    design.addMove(8, 16, [3, 3], 0);
    design.addMove(8, 17, [6], 0);
    design.addMove(8, 17, [2], 0);
    design.addMove(8, 17, [5], 0);
    design.addMove(8, 17, [0], 0);

    design.addPiece("UnknownElephant", 9, 200);
    design.addMove(9, 18, [7], 0);
    design.addMove(9, 19, [7, 6], 0);
    design.addMove(9, 19, [7, 5], 0);
    design.addMove(9, 19, [1, 2], 0);
    design.addMove(9, 19, [1, 0], 0);
    design.addMove(9, 19, [4, 6], 0);
    design.addMove(9, 19, [3, 5], 0);
    design.addMove(9, 19, [4, 2], 0);
    design.addMove(9, 19, [3, 0], 0);
    design.addMove(9, 20, [6, 6], 0);
    design.addMove(9, 20, [2, 2], 0);
    design.addMove(9, 20, [5, 5], 0);
    design.addMove(9, 20, [0, 0], 0);
    design.addMove(9, 21, [7, 7], 0);
    design.addMove(9, 21, [1, 1], 0);
    design.addMove(9, 21, [4, 4], 0);
    design.addMove(9, 21, [3, 3], 0);
    design.addMove(9, 22, [7, 7], 0);
    design.addMove(9, 22, [1, 1], 0);
    design.addMove(9, 22, [4, 4], 0);
    design.addMove(9, 22, [3, 3], 0);
    design.addMove(9, 23, [6], 0);
    design.addMove(9, 23, [2], 0);
    design.addMove(9, 23, [5], 0);
    design.addMove(9, 23, [0], 0);

    design.addPiece("UnknownChariot", 10, 1000);
    design.addMove(10, 24, [7], 0);
    design.addMove(10, 25, [7, 6], 0);
    design.addMove(10, 25, [7, 5], 0);
    design.addMove(10, 25, [1, 2], 0);
    design.addMove(10, 25, [1, 0], 0);
    design.addMove(10, 25, [4, 6], 0);
    design.addMove(10, 25, [3, 5], 0);
    design.addMove(10, 25, [4, 2], 0);
    design.addMove(10, 25, [3, 0], 0);
    design.addMove(10, 26, [6, 6], 0);
    design.addMove(10, 26, [2, 2], 0);
    design.addMove(10, 26, [5, 5], 0);
    design.addMove(10, 26, [0, 0], 0);
    design.addMove(10, 27, [7, 7], 0);
    design.addMove(10, 27, [1, 1], 0);
    design.addMove(10, 27, [4, 4], 0);
    design.addMove(10, 27, [3, 3], 0);
    design.addMove(10, 28, [7, 7], 0);
    design.addMove(10, 28, [1, 1], 0);
    design.addMove(10, 28, [4, 4], 0);
    design.addMove(10, 28, [3, 3], 0);
    design.addMove(10, 29, [6], 0);
    design.addMove(10, 29, [2], 0);
    design.addMove(10, 29, [5], 0);
    design.addMove(10, 29, [0], 0);

    design.addPiece("UnknownCannon", 11, 500);
    design.addMove(11, 30, [7], 0);
    design.addMove(11, 31, [7, 6], 0);
    design.addMove(11, 31, [7, 5], 0);
    design.addMove(11, 31, [1, 2], 0);
    design.addMove(11, 31, [1, 0], 0);
    design.addMove(11, 31, [4, 6], 0);
    design.addMove(11, 31, [3, 5], 0);
    design.addMove(11, 31, [4, 2], 0);
    design.addMove(11, 31, [3, 0], 0);
    design.addMove(11, 32, [6, 6], 0);
    design.addMove(11, 32, [2, 2], 0);
    design.addMove(11, 32, [5, 5], 0);
    design.addMove(11, 32, [0, 0], 0);
    design.addMove(11, 33, [7, 7], 0);
    design.addMove(11, 33, [1, 1], 0);
    design.addMove(11, 33, [4, 4], 0);
    design.addMove(11, 33, [3, 3], 0);
    design.addMove(11, 34, [7, 7], 0);
    design.addMove(11, 34, [1, 1], 0);
    design.addMove(11, 34, [4, 4], 0);
    design.addMove(11, 34, [3, 3], 0);
    design.addMove(11, 35, [6], 0);
    design.addMove(11, 35, [2], 0);
    design.addMove(11, 35, [5], 0);
    design.addMove(11, 35, [0], 0);

    design.addPiece("UnknownMandarin", 12, 200);
    design.addMove(12, 36, [7], 0);
    design.addMove(12, 37, [7, 6], 0);
    design.addMove(12, 37, [7, 5], 0);
    design.addMove(12, 37, [1, 2], 0);
    design.addMove(12, 37, [1, 0], 0);
    design.addMove(12, 37, [4, 6], 0);
    design.addMove(12, 37, [3, 5], 0);
    design.addMove(12, 37, [4, 2], 0);
    design.addMove(12, 37, [3, 0], 0);
    design.addMove(12, 38, [6, 6], 0);
    design.addMove(12, 38, [2, 2], 0);
    design.addMove(12, 38, [5, 5], 0);
    design.addMove(12, 38, [0, 0], 0);
    design.addMove(12, 39, [7, 7], 0);
    design.addMove(12, 39, [1, 1], 0);
    design.addMove(12, 39, [4, 4], 0);
    design.addMove(12, 39, [3, 3], 0);
    design.addMove(12, 40, [7, 7], 0);
    design.addMove(12, 40, [1, 1], 0);
    design.addMove(12, 40, [4, 4], 0);
    design.addMove(12, 40, [3, 3], 0);
    design.addMove(12, 41, [6], 0);
    design.addMove(12, 41, [2], 0);
    design.addMove(12, 41, [5], 0);
    design.addMove(12, 41, [0], 0);

    design.setup("Red", "General", 85);
    design.setup("Black", "General", 4);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedSoldier", "Red Soldier");
    view.defPiece("BlackSoldier", "Black Soldier");
    view.defPiece("RedHorse", "Red Horse");
    view.defPiece("BlackHorse", "Black Horse");
    view.defPiece("RedElephant", "Red Elephant");
    view.defPiece("BlackElephant", "Black Elephant");
    view.defPiece("RedChariot", "Red Chariot");
    view.defPiece("BlackChariot", "Black Chariot");
    view.defPiece("RedCannon", "Red Cannon");
    view.defPiece("BlackCannon", "Black Cannon");
    view.defPiece("RedMandarin", "Red Mandarin");
    view.defPiece("BlackMandarin", "Black Mandarin");
    view.defPiece("RedGeneral", "Red General");
    view.defPiece("BlackGeneral", "Black General");
    view.defPiece("RedUnknownSoldier", "Red UnknownSoldier");
    view.defPiece("BlackUnknownSoldier", "Black UnknownSoldier");
    view.defPiece("RedUnknownHorse", "Red UnknownHorse");
    view.defPiece("BlackUnknownHorse", "Black UnknownHorse");
    view.defPiece("RedUnknownElephant", "Red UnknownElephant");
    view.defPiece("BlackUnknownElephant", "Black UnknownElephant");
    view.defPiece("RedUnknownChariot", "Red UnknownChariot");
    view.defPiece("BlackUnknownChariot", "Black UnknownChariot");
    view.defPiece("RedUnknownCannon", "Red UnknownCannon");
    view.defPiece("BlackUnknownCannon", "Black UnknownCannon");
    view.defPiece("RedUnknownMandarin", "Red UnknownMandarin");
    view.defPiece("BlackUnknownMandarin", "Black UnknownMandarin");
 
    view.defPosition("a10", 4, 5, 42, 42);
    view.defPosition("b10", 49, 5, 42, 42);
    view.defPosition("c10", 94, 5, 42, 42);
    view.defPosition("d10", 139, 5, 42, 42);
    view.defPosition("e10", 184, 5, 42, 42);
    view.defPosition("f10", 229, 5, 42, 42);
    view.defPosition("g10", 274, 5, 42, 42);
    view.defPosition("h10", 319, 5, 42, 42);
    view.defPosition("i10", 364, 5, 42, 42);
    view.defPosition("a9", 4, 50, 42, 42);
    view.defPosition("b9", 49, 50, 42, 42);
    view.defPosition("c9", 94, 50, 42, 42);
    view.defPosition("d9", 139, 50, 42, 42);
    view.defPosition("e9", 184, 50, 42, 42);
    view.defPosition("f9", 229, 50, 42, 42);
    view.defPosition("g9", 274, 50, 42, 42);
    view.defPosition("h9", 319, 50, 42, 42);
    view.defPosition("i9", 364, 50, 42, 42);
    view.defPosition("a8", 4, 95, 42, 42);
    view.defPosition("b8", 49, 95, 42, 42);
    view.defPosition("c8", 94, 95, 42, 42);
    view.defPosition("d8", 139, 95, 42, 42);
    view.defPosition("e8", 184, 95, 42, 42);
    view.defPosition("f8", 229, 95, 42, 42);
    view.defPosition("g8", 274, 95, 42, 42);
    view.defPosition("h8", 319, 95, 42, 42);
    view.defPosition("i8", 364, 95, 42, 42);
    view.defPosition("a7", 4, 140, 42, 42);
    view.defPosition("b7", 49, 140, 42, 42);
    view.defPosition("c7", 94, 140, 42, 42);
    view.defPosition("d7", 139, 140, 42, 42);
    view.defPosition("e7", 184, 140, 42, 42);
    view.defPosition("f7", 229, 140, 42, 42);
    view.defPosition("g7", 274, 140, 42, 42);
    view.defPosition("h7", 319, 140, 42, 42);
    view.defPosition("i7", 364, 140, 42, 42);
    view.defPosition("a6", 4, 185, 42, 42);
    view.defPosition("b6", 49, 185, 42, 42);
    view.defPosition("c6", 94, 185, 42, 42);
    view.defPosition("d6", 139, 185, 42, 42);
    view.defPosition("e6", 184, 185, 42, 42);
    view.defPosition("f6", 229, 185, 42, 42);
    view.defPosition("g6", 274, 185, 42, 42);
    view.defPosition("h6", 319, 185, 42, 42);
    view.defPosition("i6", 364, 185, 42, 42);
    view.defPosition("a5", 4, 230, 42, 42);
    view.defPosition("b5", 49, 230, 42, 42);
    view.defPosition("c5", 94, 230, 42, 42);
    view.defPosition("d5", 139, 230, 42, 42);
    view.defPosition("e5", 184, 230, 42, 42);
    view.defPosition("f5", 229, 230, 42, 42);
    view.defPosition("g5", 274, 230, 42, 42);
    view.defPosition("h5", 319, 230, 42, 42);
    view.defPosition("i5", 364, 230, 42, 42);
    view.defPosition("a4", 4, 275, 42, 42);
    view.defPosition("b4", 49, 275, 42, 42);
    view.defPosition("c4", 94, 275, 42, 42);
    view.defPosition("d4", 139, 275, 42, 42);
    view.defPosition("e4", 184, 275, 42, 42);
    view.defPosition("f4", 229, 275, 42, 42);
    view.defPosition("g4", 274, 275, 42, 42);
    view.defPosition("h4", 319, 275, 42, 42);
    view.defPosition("i4", 364, 275, 42, 42);
    view.defPosition("a3", 4, 320, 42, 42);
    view.defPosition("b3", 49, 320, 42, 42);
    view.defPosition("c3", 94, 320, 42, 42);
    view.defPosition("d3", 139, 320, 42, 42);
    view.defPosition("e3", 184, 320, 42, 42);
    view.defPosition("f3", 229, 320, 42, 42);
    view.defPosition("g3", 274, 320, 42, 42);
    view.defPosition("h3", 319, 320, 42, 42);
    view.defPosition("i3", 364, 320, 42, 42);
    view.defPosition("a2", 4, 365, 42, 42);
    view.defPosition("b2", 49, 365, 42, 42);
    view.defPosition("c2", 94, 365, 42, 42);
    view.defPosition("d2", 139, 365, 42, 42);
    view.defPosition("e2", 184, 365, 42, 42);
    view.defPosition("f2", 229, 365, 42, 42);
    view.defPosition("g2", 274, 365, 42, 42);
    view.defPosition("h2", 319, 365, 42, 42);
    view.defPosition("i2", 364, 365, 42, 42);
    view.defPosition("a1", 4, 410, 42, 42);
    view.defPosition("b1", 49, 410, 42, 42);
    view.defPosition("c1", 94, 410, 42, 42);
    view.defPosition("d1", 139, 410, 42, 42);
    view.defPosition("e1", 184, 410, 42, 42);
    view.defPosition("f1", 229, 410, 42, 42);
    view.defPosition("g1", 274, 410, 42, 42);
    view.defPosition("h1", 319, 410, 42, 42);
    view.defPosition("i1", 364, 410, 42, 42);
}
