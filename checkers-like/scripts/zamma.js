Dagaz.Model.WIDTH  = 9;
Dagaz.Model.HEIGHT = 9;

Dagaz.AI.SPEC_POSITIONS = [
   0x22, 0x24, 0x26, 0x28, 0x2A,
   0x33, 0x35, 0x37, 0x39,
   0x42, 0x44, 0x46, 0x48, 0x4A,
   0x53, 0x55, 0x57, 0x59,
   0x62, 0x64, 0x66, 0x68, 0x6A,
   0x73, 0x75, 0x77, 0x79,
   0x82, 0x84, 0x86, 0x88, 0x8A,
   0x93, 0x95, 0x97, 0x99,
   0xA2, 0xA4, 0xA6, 0xA8, 0xAA
];

Dagaz.AI.pieceAdj = [
[   0,   0,   0,   0,   0,   0,   0,   0,   0, // pieceEmpty
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0
], 
[   0,   0,   0,   0,   0,   0,   0,   0,   0, // pieceMan
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0
],
[ -20, -10,   0, -10,   0, -10,   0, -10, -20, // pieceMan
  -10,   0,   0,   0,   0,   0,   0,   0, -10,
    0,   0,   0,   0,   0,   0,   0,   0,   0,
  -10,   0,   0,   0,   0,   0,   0,   0, -10,
    0,   0,   0,   0,   0,   0,   0,   0,   0,
  -10,   0,   0,   0,   0,   0,   0,   0, -10,
    0,   0,   0,   0,   0,   0,   0,   0,   0,
  -10,   0,   0,   0,   0,   0,   0,   0, -10,
  -20, -10,   0, -10,   0, -10,   0, -10, -20
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
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "true");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("maximal-captures", "true");
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("deferred-captures", "true");

    design.addDirection("w");  // 0
    design.addDirection("e");  // 1
    design.addDirection("s");  // 2
    design.addDirection("n");  // 3
    design.addDirection("ne"); // 4
    design.addDirection("sw"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("se"); // 7

    design.addPlayer("Black", [1, 0, 3, 2, 5, 4, 7, 6]);
    design.addPlayer("White", [1, 0, 3, 2, 5, 4, 7, 6]);

    design.addPosition("a9", [0, 1, 9, 0, 0, 0, 0, 10]);
    design.addPosition("b9", [-1, 1, 9, 0, 0, 0, 0, 0]);
    design.addPosition("c9", [-1, 1, 9, 0, 0, 8, 0, 10]);
    design.addPosition("d9", [-1, 1, 9, 0, 0, 0, 0, 0]);
    design.addPosition("e9", [-1, 1, 9, 0, 0, 8, 0, 10]);
    design.addPosition("f9", [-1, 1, 9, 0, 0, 0, 0, 0]);
    design.addPosition("g9", [-1, 1, 9, 0, 0, 8, 0, 10]);
    design.addPosition("h9", [-1, 1, 9, 0, 0, 0, 0, 0]);
    design.addPosition("i9", [-1, 0, 9, 0, 0, 8, 0, 0]);
    design.addPosition("a8", [0, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("b8", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("c8", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("d8", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("e8", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("f8", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("g8", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("h8", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("i8", [-1, 0, 9, -9, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 1, 9, -9, -8, 0, 0, 10]);
    design.addPosition("b7", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("c7", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("d7", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("e7", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("f7", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("g7", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("h7", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("i7", [-1, 0, 9, -9, 0, 8, -10, 0]);
    design.addPosition("a6", [0, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("b6", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("c6", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("d6", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("e6", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("f6", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("g6", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("h6", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("i6", [-1, 0, 9, -9, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 1, 9, -9, -8, 0, 0, 10]);
    design.addPosition("b5", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("c5", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("d5", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("e5", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("f5", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("g5", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("h5", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("i5", [-1, 0, 9, -9, 0, 8, -10, 0]);
    design.addPosition("a4", [0, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("b4", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("c4", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("d4", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("e4", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("f4", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("g4", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("h4", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("i4", [-1, 0, 9, -9, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 1, 9, -9, -8, 0, 0, 10]);
    design.addPosition("b3", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("c3", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("d3", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("e3", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("f3", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("g3", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("h3", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("i3", [-1, 0, 9, -9, 0, 8, -10, 0]);
    design.addPosition("a2", [0, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("b2", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("c2", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("d2", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("e2", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("f2", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("g2", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("h2", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("i2", [-1, 0, 9, -9, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, -9, -8, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -9, 0, 0, 0, 0]);
    design.addPosition("c1", [-1, 1, 0, -9, -8, 0, -10, 0]);
    design.addPosition("d1", [-1, 1, 0, -9, 0, 0, 0, 0]);
    design.addPosition("e1", [-1, 1, 0, -9, -8, 0, -10, 0]);
    design.addPosition("f1", [-1, 1, 0, -9, 0, 0, 0, 0]);
    design.addPosition("g1", [-1, 1, 0, -9, -8, 0, -10, 0]);
    design.addPosition("h1", [-1, 1, 0, -9, 0, 0, 0, 0]);
    design.addPosition("i1", [-1, 0, 0, -9, 0, 0, -10, 0]);

    design.addZone("promotion", 2, [72, 73, 74, 75, 76, 77, 78, 79, 80]);
    design.addZone("promotion", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	1);	// King
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.MODE,	0);	// jump-type
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

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-5);
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	18);
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	5);
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-6);
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.FORK,	4);
    design.addCommand(3, ZRF.MODE,	2);	// continue-type
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	4);	// $5
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-19);
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	7);
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.JUMP,	-8);
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	18);
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
    design.addCommand(4, ZRF.FORK,	4);
    design.addCommand(4, ZRF.MODE,	2);	// continue-type
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	4);	// $5
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-19);
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// jump-type
    design.addPriority(1);			// normal-type

    design.addPiece("Man", 0, 20);
    design.addMove(0, 0, [3], 1);
    design.addMove(0, 0, [6], 1);
    design.addMove(0, 0, [4], 1);
    design.addMove(0, 1, [3, 3], 0);
    design.addMove(0, 1, [0, 0], 0);
    design.addMove(0, 1, [2, 2], 0);
    design.addMove(0, 1, [1, 1], 0);
    design.addMove(0, 1, [6, 6], 0);
    design.addMove(0, 1, [5, 5], 0);
    design.addMove(0, 1, [7, 7], 0);
    design.addMove(0, 1, [4, 4], 0);

    design.addPiece("King", 1, 100);
    design.addMove(1, 2, [3, 3], 1);
    design.addMove(1, 2, [2, 2], 1);
    design.addMove(1, 2, [0, 0], 1);
    design.addMove(1, 2, [1, 1], 1);
    design.addMove(1, 2, [6, 6], 1);
    design.addMove(1, 2, [4, 4], 1);
    design.addMove(1, 2, [5, 5], 1);
    design.addMove(1, 2, [7, 7], 1);
    design.addMove(1, 3, [3, 3, 3, 3, 3], 0);
    design.addMove(1, 3, [0, 0, 0, 0, 0], 0);
    design.addMove(1, 3, [2, 2, 2, 2, 2], 0);
    design.addMove(1, 3, [1, 1, 1, 1, 1], 0);
    design.addMove(1, 3, [6, 6, 6, 6, 6], 0);
    design.addMove(1, 3, [5, 5, 5, 5, 5], 0);
    design.addMove(1, 3, [7, 7, 7, 7, 7], 0);
    design.addMove(1, 3, [4, 4, 4, 4, 4], 0);
    design.addMove(1, 4, [3, 3, 3, 3, 3], 2);
    design.addMove(1, 4, [0, 0, 0, 0, 0], 2);
    design.addMove(1, 4, [2, 2, 2, 2, 2], 2);
    design.addMove(1, 4, [1, 1, 1, 1, 1], 2);
    design.addMove(1, 4, [6, 6, 6, 6, 6], 2);
    design.addMove(1, 4, [5, 5, 5, 5, 5], 2);
    design.addMove(1, 4, [7, 7, 7, 7, 7], 2);
    design.addMove(1, 4, [4, 4, 4, 4, 4], 2);

    design.setup("Black", "Man", 72);
    design.setup("Black", "Man", 73);
    design.setup("Black", "Man", 74);
    design.setup("Black", "Man", 75);
    design.setup("Black", "Man", 76);
    design.setup("Black", "Man", 77);
    design.setup("Black", "Man", 78);
    design.setup("Black", "Man", 79);
    design.setup("Black", "Man", 80);
    design.setup("Black", "Man", 63);
    design.setup("Black", "Man", 64);
    design.setup("Black", "Man", 65);
    design.setup("Black", "Man", 66);
    design.setup("Black", "Man", 67);
    design.setup("Black", "Man", 68);
    design.setup("Black", "Man", 69);
    design.setup("Black", "Man", 70);
    design.setup("Black", "Man", 71);
    design.setup("Black", "Man", 54);
    design.setup("Black", "Man", 55);
    design.setup("Black", "Man", 56);
    design.setup("Black", "Man", 57);
    design.setup("Black", "Man", 58);
    design.setup("Black", "Man", 59);
    design.setup("Black", "Man", 60);
    design.setup("Black", "Man", 61);
    design.setup("Black", "Man", 62);
    design.setup("Black", "Man", 45);
    design.setup("Black", "Man", 46);
    design.setup("Black", "Man", 47);
    design.setup("Black", "Man", 48);
    design.setup("Black", "Man", 49);
    design.setup("Black", "Man", 50);
    design.setup("Black", "Man", 51);
    design.setup("Black", "Man", 52);
    design.setup("Black", "Man", 53);
    design.setup("Black", "Man", 41);
    design.setup("Black", "Man", 42);
    design.setup("Black", "Man", 43);
    design.setup("Black", "Man", 44);
    design.setup("White", "Man", 0);
    design.setup("White", "Man", 1);
    design.setup("White", "Man", 2);
    design.setup("White", "Man", 3);
    design.setup("White", "Man", 4);
    design.setup("White", "Man", 5);
    design.setup("White", "Man", 6);
    design.setup("White", "Man", 7);
    design.setup("White", "Man", 8);
    design.setup("White", "Man", 9);
    design.setup("White", "Man", 10);
    design.setup("White", "Man", 11);
    design.setup("White", "Man", 12);
    design.setup("White", "Man", 13);
    design.setup("White", "Man", 14);
    design.setup("White", "Man", 15);
    design.setup("White", "Man", 16);
    design.setup("White", "Man", 17);
    design.setup("White", "Man", 18);
    design.setup("White", "Man", 19);
    design.setup("White", "Man", 20);
    design.setup("White", "Man", 21);
    design.setup("White", "Man", 22);
    design.setup("White", "Man", 23);
    design.setup("White", "Man", 24);
    design.setup("White", "Man", 25);
    design.setup("White", "Man", 26);
    design.setup("White", "Man", 27);
    design.setup("White", "Man", 28);
    design.setup("White", "Man", 29);
    design.setup("White", "Man", 30);
    design.setup("White", "Man", 31);
    design.setup("White", "Man", 32);
    design.setup("White", "Man", 33);
    design.setup("White", "Man", 34);
    design.setup("White", "Man", 35);
    design.setup("White", "Man", 36);
    design.setup("White", "Man", 37);
    design.setup("White", "Man", 38);
    design.setup("White", "Man", 39);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a9", 6, 6, 59, 59);
    view.defPosition("b9", 94, 6, 59, 59);
    view.defPosition("c9", 182, 6, 59, 59);
    view.defPosition("d9", 270, 6, 59, 59);
    view.defPosition("e9", 358, 6, 59, 59);
    view.defPosition("f9", 446, 6, 59, 59);
    view.defPosition("g9", 534, 6, 59, 59);
    view.defPosition("h9", 622, 6, 59, 59);
    view.defPosition("i9", 710, 6, 59, 59);
    view.defPosition("a8", 6, 94, 59, 59);
    view.defPosition("b8", 94, 94, 59, 59);
    view.defPosition("c8", 182, 94, 59, 59);
    view.defPosition("d8", 270, 94, 59, 59);
    view.defPosition("e8", 358, 94, 59, 59);
    view.defPosition("f8", 446, 94, 59, 59);
    view.defPosition("g8", 534, 94, 59, 59);
    view.defPosition("h8", 622, 94, 59, 59);
    view.defPosition("i8", 710, 94, 59, 59);
    view.defPosition("a7", 6, 182, 59, 59);
    view.defPosition("b7", 94, 182, 59, 59);
    view.defPosition("c7", 182, 182, 59, 59);
    view.defPosition("d7", 270, 182, 59, 59);
    view.defPosition("e7", 358, 182, 59, 59);
    view.defPosition("f7", 446, 182, 59, 59);
    view.defPosition("g7", 534, 182, 59, 59);
    view.defPosition("h7", 622, 182, 59, 59);
    view.defPosition("i7", 710, 182, 59, 59);
    view.defPosition("a6", 6, 270, 59, 59);
    view.defPosition("b6", 94, 270, 59, 59);
    view.defPosition("c6", 182, 270, 59, 59);
    view.defPosition("d6", 270, 270, 59, 59);
    view.defPosition("e6", 358, 270, 59, 59);
    view.defPosition("f6", 446, 270, 59, 59);
    view.defPosition("g6", 534, 270, 59, 59);
    view.defPosition("h6", 622, 270, 59, 59);
    view.defPosition("i6", 710, 270, 59, 59);
    view.defPosition("a5", 6, 358, 59, 59);
    view.defPosition("b5", 94, 358, 59, 59);
    view.defPosition("c5", 182, 358, 59, 59);
    view.defPosition("d5", 270, 358, 59, 59);
    view.defPosition("e5", 358, 358, 59, 59);
    view.defPosition("f5", 446, 358, 59, 59);
    view.defPosition("g5", 534, 358, 59, 59);
    view.defPosition("h5", 622, 358, 59, 59);
    view.defPosition("i5", 710, 358, 59, 59);
    view.defPosition("a4", 6, 446, 59, 59);
    view.defPosition("b4", 94, 446, 59, 59);
    view.defPosition("c4", 182, 446, 59, 59);
    view.defPosition("d4", 270, 446, 59, 59);
    view.defPosition("e4", 358, 446, 59, 59);
    view.defPosition("f4", 446, 446, 59, 59);
    view.defPosition("g4", 534, 446, 59, 59);
    view.defPosition("h4", 622, 446, 59, 59);
    view.defPosition("i4", 710, 446, 59, 59);
    view.defPosition("a3", 6, 534, 59, 59);
    view.defPosition("b3", 94, 534, 59, 59);
    view.defPosition("c3", 182, 534, 59, 59);
    view.defPosition("d3", 270, 534, 59, 59);
    view.defPosition("e3", 358, 534, 59, 59);
    view.defPosition("f3", 446, 534, 59, 59);
    view.defPosition("g3", 534, 534, 59, 59);
    view.defPosition("h3", 622, 534, 59, 59);
    view.defPosition("i3", 710, 534, 59, 59);
    view.defPosition("a2", 6, 622, 59, 59);
    view.defPosition("b2", 94, 622, 59, 59);
    view.defPosition("c2", 182, 622, 59, 59);
    view.defPosition("d2", 270, 622, 59, 59);
    view.defPosition("e2", 358, 622, 59, 59);
    view.defPosition("f2", 446, 622, 59, 59);
    view.defPosition("g2", 534, 622, 59, 59);
    view.defPosition("h2", 622, 622, 59, 59);
    view.defPosition("i2", 710, 622, 59, 59);
    view.defPosition("a1", 6, 710, 59, 59);
    view.defPosition("b1", 94, 710, 59, 59);
    view.defPosition("c1", 182, 710, 59, 59);
    view.defPosition("d1", 270, 710, 59, 59);
    view.defPosition("e1", 358, 710, 59, 59);
    view.defPosition("f1", 446, 710, 59, 59);
    view.defPosition("g1", 534, 710, 59, 59);
    view.defPosition("h1", 622, 710, 59, 59);
    view.defPosition("i1", 710, 710, 59, 59);
}
