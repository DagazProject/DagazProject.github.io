Dagaz.Model.WIDTH  = 9;
Dagaz.Model.HEIGHT = 9;

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
[   0,    0,   0,   0,   0,   0,    0,    0,    0, // pieceEmpty
    0,    0,   0,   0,   0,   0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0
],
[   0,    0,   0,   0,   0,   0,    0,    0,    0, // pieceMan
   50,   60,  60,  60,  60,  60,   60,   60,   50, 
   40,   50,  50,  50,  50,  50,   50,   50,   40, 
   30,   40,  40,  40,  40,  40,   40,   40,   30, 
   20,   30,  30,  30,  30,  30,   30,   30,   20, 
   10,   20,  20,  20,  20,  20,   20,   20,   10, 
  -10,   10,  10,  10,  10,  10,   10,   10,  -10, 
  -10,    0,   0,   0,   0,   0,    0,    0,  -10, 
    0,   30,  30,  30,  30,  30,   30,   30,    0
], 
[-200, -100, -50, -50, -50, -50, -50, -100, -200, // pieceKnight
 -100,    0,   0,   0,   0,   0,   0,    0, -100,
  -50,    0,  60,  60,  60,  60,  60,    0,  -50,
  -50,    0,  30,  60,  60,  60,  30,    0,  -50,
  -50,    0,  30,  60,  60,  60,  30,    0,  -50,
  -50,    0,  30,  60,  60,  60,  30,    0,  -50,
  -50,    0,  30,  30,  30,  30,  30,    0,  -50,
 -100,    0,   0,   0,   0,   0,   0,    0, -100,
 -200,  -50, -25, -25, -25, -25, -25,  -50, -200
],
[ -50,  -50, -25, -10, -10, -10, -25,  -50,  -50, // pieceBishop
  -50,  -25, -10,   0,   0,   0, -10,  -25,  -50,
  -25,  -10,   0,  25,  25,  25,   0,  -10,  -25,
  -10,    0,  25,  40,  40,  40,  25,    0,  -10,
  -10,    0,  25,  40,  40,  40,  25,    0,  -10,
  -10,    0,  25,  40,  40,  40,  25,    0,  -10,
  -25,  -10,   0,  25,  25,  25,   0,  -10,  -25,
  -50,  -25, -10,   0,   0,   0, -10,  -25,  -50,
  -50,  -50, -25, -10, -10, -10, -25,  -50,  -50
],
[   0,    0,   0,   0,   0,   0,    0,    0,   0, // pieceDragon
    0,    0,   0,   0,   0,   0,    0,    0,   0, 
    0,    0,   0,   0,   0,   0,    0,    0,   0, 
    0,    0,   0,   0,   0,   0,    0,    0,   0, 
    0,    0,   0,   0,   0,   0,    0,    0,   0, 
    0,    0,   0,   0,   0,   0,    0,    0,   0, 
    0,    0,   0,   0,   0,   0,    0,    0,   0, 
    0,    0,   0,   0,   0,   0,    0,    0,   0, 
    0,    0,   0,   0,   0,   0,    0,    0,   0
],
[   0,    0,   0,   0,   0,   0,    0,    0,   0, // pieceQueen
    0,    0,   0,   0,   0,   0,    0,    0,   0, 
    0,    0,   0,   0,   0,   0,    0,    0,   0, 
    0,    0,   0,   0,   0,   0,    0,    0,   0, 
    0,    0,   0,   0,   0,   0,    0,    0,   0, 
    0,    0,   0,   0,   0,   0,    0,    0,   0, 
    0,    0,   0,   0,   0,   0,    0,    0,   0, 
    0,    0,   0,   0,   0,   0,    0,    0,   0, 
    0,    0,   0,   0,   0,   0,    0,    0,   0
],
[ -50,  -10, -10, -10, -10, -10,  -10,  -10,  -50, // pieceKing
  -10,    0,   0,   0,   0,   0,    0,    0,  -10, 
  -10,    0,   0,   0,   0,   0,    0,    0,  -10, 
  -10,    0,   0,   0,   0,   0,    0,    0,  -10, 
  -10,    0,   0,   0,   0,   0,    0,    0,  -10, 
  -10,    0,   0,   0,   0,   0,    0,    0,  -10, 
  -10,    0,   0,   0,   0,   0,    0,    0,  -10, 
  -10,    0,   0,   0,   0,   0,    0,    0,  -10, 
  -50,  -10, -10, -10, -10, -10,  -10,  -10,  -50
]];

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("Black", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5]);

    design.addPosition("a9", [0, 1, 9, 0, 0, 10, 0, 0]);
    design.addPosition("b9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("c9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("d9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("e9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("f9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("g9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("h9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("i9", [-1, 0, 9, 0, 0, 0, 8, 0]);
    design.addPosition("a8", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i8", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a7", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i7", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a6", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i6", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a5", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i5", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a4", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i4", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a3", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i3", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a2", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i2", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a1", [0, 1, 0, -8, -9, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("c1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("d1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("e1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("f1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("g1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("h1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("i1", [-1, 0, 0, 0, -9, 0, 0, -10]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("promotion", 2, [72, 74, 76, 78, 80]);
    design.addZone("promotion", 1, [0, 2, 4, 6, 8]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-5);
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	7);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-8);
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-5);
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	27);
    design.addCommand(4, ZRF.FUNCTION,	6);	// mark
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	5);
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-6);
    design.addCommand(4, ZRF.FUNCTION,	26);	// capture
    design.addCommand(4, ZRF.FUNCTION,	7);	// back
    design.addCommand(4, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	7);
    design.addCommand(4, ZRF.FORK,	5);
    design.addCommand(4, ZRF.PROMOTE,	3);	// Queen
    design.addCommand(4, ZRF.MODE,	2);	// cont-type
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.JUMP,	5);
    design.addCommand(4, ZRF.FORK,	4);
    design.addCommand(4, ZRF.MODE,	0);	// jump-type
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	4);	// $5
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-28);
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	15);
    design.addCommand(5, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	6);
    design.addCommand(5, ZRF.FORK,	4);
    design.addCommand(5, ZRF.PROMOTE,	3);	// Queen
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.JUMP,	4);
    design.addCommand(5, ZRF.FORK,	3);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-16);
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	4);
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-5);
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	18);
    design.addCommand(6, ZRF.FUNCTION,	6);	// mark
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	5);
    design.addCommand(6, ZRF.PARAM,	3);	// $4
    design.addCommand(6, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-6);
    design.addCommand(6, ZRF.FUNCTION,	26);	// capture
    design.addCommand(6, ZRF.FUNCTION,	7);	// back
    design.addCommand(6, ZRF.FORK,	4);
    design.addCommand(6, ZRF.MODE,	2);	// cont-type
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.PARAM,	4);	// $5
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-19);
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	7);
    design.addCommand(7, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-8);
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	18);
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	5);
    design.addCommand(7, ZRF.PARAM,	3);	// $4
    design.addCommand(7, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-6);
    design.addCommand(7, ZRF.FUNCTION,	26);	// capture
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.FORK,	4);
    design.addCommand(7, ZRF.MODE,	2);	// cont-type
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end
    design.addCommand(7, ZRF.PARAM,	4);	// $5
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-19);
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	26);	// capture
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	4);
    design.addCommand(8, ZRF.PROMOTE,	5);	// King
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.JUMP,	3);
    design.addCommand(8, ZRF.MODE,	0);	// jump-type
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	4);
    design.addCommand(9, ZRF.PROMOTE,	5);	// King
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.JUMP,	2);
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	26);	// capture
    design.addCommand(10, ZRF.PARAM,	1);	// $2
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.MODE,	0);	// jump-type
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

//  design.addPriority(0);			// jump-type
//  design.addPriority(1);			// normal-type

    design.addPiece("Bishop", 0, 15);
    design.addMove(0, 0, [7, 7], 1);
    design.addMove(0, 0, [3, 3], 1);
    design.addMove(0, 0, [6, 6], 1);
    design.addMove(0, 0, [5, 5], 1);
    design.addMove(0, 1, [7, 7], 1);
    design.addMove(0, 1, [3, 3], 1);
    design.addMove(0, 1, [6, 6], 1);
    design.addMove(0, 1, [5, 5], 1);

    design.addPiece("Camel", 1, 20);
    design.addMove(1, 2, [4, 4, 7], 1);
    design.addMove(1, 2, [4, 4, 3], 1);
    design.addMove(1, 2, [2, 2, 6], 1);
    design.addMove(1, 2, [2, 2, 5], 1);
    design.addMove(1, 2, [0, 0, 6], 1);
    design.addMove(1, 2, [0, 0, 7], 1);
    design.addMove(1, 2, [1, 1, 5], 1);
    design.addMove(1, 2, [1, 1, 3], 1);
    design.addMove(1, 3, [4, 4, 7], 1);
    design.addMove(1, 3, [4, 4, 3], 1);
    design.addMove(1, 3, [2, 2, 6], 1);
    design.addMove(1, 3, [2, 2, 5], 1);
    design.addMove(1, 3, [0, 0, 6], 1);
    design.addMove(1, 3, [0, 0, 7], 1);
    design.addMove(1, 3, [1, 1, 5], 1);
    design.addMove(1, 3, [1, 1, 3], 1);

    design.addPiece("Dragon", 2, 5);
    design.addMove(2, 4, [7, 7, 7, 7, 7], 0);
    design.addMove(2, 4, [3, 3, 3, 3, 3], 0);
    design.addMove(2, 5, [7, 7], 1);
    design.addMove(2, 5, [3, 3], 1);

    design.addPiece("Queen", 3, 10);
    design.addMove(3, 6, [7, 7, 7, 7, 7], 0);
    design.addMove(3, 6, [3, 3, 3, 3, 3], 0);
    design.addMove(3, 6, [6, 6, 6, 6, 6], 0);
    design.addMove(3, 6, [5, 5, 5, 5, 5], 0);
    design.addMove(3, 7, [7, 7, 7, 7, 7], 2);
    design.addMove(3, 7, [3, 3, 3, 3, 3], 2);
    design.addMove(3, 7, [6, 6, 6, 6, 6], 2);
    design.addMove(3, 7, [5, 5, 5, 5, 5], 2);
    design.addMove(3, 1, [7, 7], 1);
    design.addMove(3, 1, [3, 3], 1);
    design.addMove(3, 1, [6, 6], 1);
    design.addMove(3, 1, [5, 5], 1);

    design.addPiece("Man", 4, 1);
    design.addMove(4, 8, [7, 7], 0);
    design.addMove(4, 8, [3, 3], 0);
    design.addMove(4, 9, [7], 1);
    design.addMove(4, 9, [3], 1);

    design.addPiece("King", 5, 100);
    design.addMove(5, 10, [7, 7], 0);
    design.addMove(5, 10, [3, 3], 0);
    design.addMove(5, 10, [6, 6], 0);
    design.addMove(5, 10, [5, 5], 0);
    design.addMove(5, 11, [7], 1);
    design.addMove(5, 11, [3], 1);
    design.addMove(5, 11, [6], 1);
    design.addMove(5, 11, [5], 1);

    design.setup("Black", "Man", 54);
    design.setup("Black", "Man", 56);
    design.setup("Black", "Man", 58);
    design.setup("Black", "Man", 60);
    design.setup("Black", "Man", 62);
    design.setup("Black", "Man", 64);
    design.setup("Black", "Man", 70);
    design.setup("Black", "Bishop", 72);
    design.setup("Black", "King", 74);
    design.setup("Black", "King", 78);
    design.setup("Black", "Camel", 80);
    design.setup("Black", "Queen", 76);
    design.setup("Black", "Dragon", 66);
    design.setup("Black", "Dragon", 68);
    design.setup("White", "Man", 18);
    design.setup("White", "Man", 20);
    design.setup("White", "Man", 22);
    design.setup("White", "Man", 24);
    design.setup("White", "Man", 26);
    design.setup("White", "Man", 10);
    design.setup("White", "Man", 16);
    design.setup("White", "Bishop", 8);
    design.setup("White", "King", 2);
    design.setup("White", "King", 6);
    design.setup("White", "Camel", 0);
    design.setup("White", "Queen", 4);
    design.setup("White", "Dragon", 12);
    design.setup("White", "Dragon", 14);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("WhiteCamel", "White Camel");
    view.defPiece("BlackCamel", "Black Camel");
    view.defPiece("WhiteDragon", "White Dragon");
    view.defPiece("BlackDragon", "Black Dragon");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a9", 2, 2, 50, 50);
    view.defPosition("b9", 52, 2, 50, 50);
    view.defPosition("c9", 102, 2, 50, 50);
    view.defPosition("d9", 152, 2, 50, 50);
    view.defPosition("e9", 202, 2, 50, 50);
    view.defPosition("f9", 252, 2, 50, 50);
    view.defPosition("g9", 302, 2, 50, 50);
    view.defPosition("h9", 352, 2, 50, 50);
    view.defPosition("i9", 402, 2, 50, 50);
    view.defPosition("a8", 2, 52, 50, 50);
    view.defPosition("b8", 52, 52, 50, 50);
    view.defPosition("c8", 102, 52, 50, 50);
    view.defPosition("d8", 152, 52, 50, 50);
    view.defPosition("e8", 202, 52, 50, 50);
    view.defPosition("f8", 252, 52, 50, 50);
    view.defPosition("g8", 302, 52, 50, 50);
    view.defPosition("h8", 352, 52, 50, 50);
    view.defPosition("i8", 402, 52, 50, 50);
    view.defPosition("a7", 2, 102, 50, 50);
    view.defPosition("b7", 52, 102, 50, 50);
    view.defPosition("c7", 102, 102, 50, 50);
    view.defPosition("d7", 152, 102, 50, 50);
    view.defPosition("e7", 202, 102, 50, 50);
    view.defPosition("f7", 252, 102, 50, 50);
    view.defPosition("g7", 302, 102, 50, 50);
    view.defPosition("h7", 352, 102, 50, 50);
    view.defPosition("i7", 402, 102, 50, 50);
    view.defPosition("a6", 2, 152, 50, 50);
    view.defPosition("b6", 52, 152, 50, 50);
    view.defPosition("c6", 102, 152, 50, 50);
    view.defPosition("d6", 152, 152, 50, 50);
    view.defPosition("e6", 202, 152, 50, 50);
    view.defPosition("f6", 252, 152, 50, 50);
    view.defPosition("g6", 302, 152, 50, 50);
    view.defPosition("h6", 352, 152, 50, 50);
    view.defPosition("i6", 402, 152, 50, 50);
    view.defPosition("a5", 2, 202, 50, 50);
    view.defPosition("b5", 52, 202, 50, 50);
    view.defPosition("c5", 102, 202, 50, 50);
    view.defPosition("d5", 152, 202, 50, 50);
    view.defPosition("e5", 202, 202, 50, 50);
    view.defPosition("f5", 252, 202, 50, 50);
    view.defPosition("g5", 302, 202, 50, 50);
    view.defPosition("h5", 352, 202, 50, 50);
    view.defPosition("i5", 402, 202, 50, 50);
    view.defPosition("a4", 2, 252, 50, 50);
    view.defPosition("b4", 52, 252, 50, 50);
    view.defPosition("c4", 102, 252, 50, 50);
    view.defPosition("d4", 152, 252, 50, 50);
    view.defPosition("e4", 202, 252, 50, 50);
    view.defPosition("f4", 252, 252, 50, 50);
    view.defPosition("g4", 302, 252, 50, 50);
    view.defPosition("h4", 352, 252, 50, 50);
    view.defPosition("i4", 402, 252, 50, 50);
    view.defPosition("a3", 2, 302, 50, 50);
    view.defPosition("b3", 52, 302, 50, 50);
    view.defPosition("c3", 102, 302, 50, 50);
    view.defPosition("d3", 152, 302, 50, 50);
    view.defPosition("e3", 202, 302, 50, 50);
    view.defPosition("f3", 252, 302, 50, 50);
    view.defPosition("g3", 302, 302, 50, 50);
    view.defPosition("h3", 352, 302, 50, 50);
    view.defPosition("i3", 402, 302, 50, 50);
    view.defPosition("a2", 2, 352, 50, 50);
    view.defPosition("b2", 52, 352, 50, 50);
    view.defPosition("c2", 102, 352, 50, 50);
    view.defPosition("d2", 152, 352, 50, 50);
    view.defPosition("e2", 202, 352, 50, 50);
    view.defPosition("f2", 252, 352, 50, 50);
    view.defPosition("g2", 302, 352, 50, 50);
    view.defPosition("h2", 352, 352, 50, 50);
    view.defPosition("i2", 402, 352, 50, 50);
    view.defPosition("a1", 2, 402, 50, 50);
    view.defPosition("b1", 52, 402, 50, 50);
    view.defPosition("c1", 102, 402, 50, 50);
    view.defPosition("d1", 152, 402, 50, 50);
    view.defPosition("e1", 202, 402, 50, 50);
    view.defPosition("f1", 252, 402, 50, 50);
    view.defPosition("g1", 302, 402, 50, 50);
    view.defPosition("h1", 352, 402, 50, 50);
    view.defPosition("i1", 402, 402, 50, 50);

    view.defPopup("Promote", 139, 70);
    view.defPopupPosition("X1", 10, 7, 50, 50);
    view.defPopupPosition("X2", 62, 7, 50, 50);
    view.defPopupPosition("X3", 115, 7, 50, 50);
}
