Dagaz.Model.WIDTH  = 9;
Dagaz.Model.HEIGHT = 5;

Dagaz.AI.SPEC_POSITIONS  = [
   0x22, 0x24, 0x26, 0x28, 0x2A,
   0x33, 0x35, 0x37, 0x39,
   0x42, 0x44, 0x46, 0x48, 0x4A,
   0x53, 0x55, 0x57, 0x59,
   0x62, 0x64, 0x66, 0x68, 0x6A
];

Dagaz.AI.pieceAdj = [
[   0,   0,   0,   0,   0,   0,   0,   0,   0, // pieceEmpty
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0
], 
[ -20, -10,  10, -10,  10, -10,  10, -10, -20, // pieceMan
  -10,  20,   0,  20,   0,  20,   0,  20, -10,
   10,   0,  20,   0,  20,   0,  20,   0,  10,
  -10,  20,   0,  20,   0,  20,   0,  20, -10,
  -20, -10,  10, -10,  10, -10,  10, -10, -20
], 
[   0,   0,   0,   0,   0,   0,   0,   0,   0, // pieceKing
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0
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
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "true");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("se");

    design.addPlayer("White", [1, 0, 3, 2, 5, 4, 7, 6]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a5", [0, 1, 9, 0, 0, 0, 0, 10]);
    design.addPosition("b5", [-1, 1, 9, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [-1, 1, 9, 0, 0, 8, 0, 10]);
    design.addPosition("d5", [-1, 1, 9, 0, 0, 0, 0, 0]);
    design.addPosition("e5", [-1, 1, 9, 0, 0, 8, 0, 10]);
    design.addPosition("f5", [-1, 1, 9, 0, 0, 0, 0, 0]);
    design.addPosition("g5", [-1, 1, 9, 0, 0, 8, 0, 10]);
    design.addPosition("h5", [-1, 1, 9, 0, 0, 0, 0, 0]);
    design.addPosition("i5", [-1, 0, 9, 0, 0, 8, 0, 0]);
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

    design.addPriority(0);			// jump-type
    design.addPriority(1);			// normal-type

    design.addPiece("Man", 0);
    design.addMove(0, 0, [3], 1);
    design.addMove(0, 0, [0], 1);
    design.addMove(0, 0, [2], 1);
    design.addMove(0, 0, [1], 1);
    design.addMove(0, 0, [6], 1);
    design.addMove(0, 0, [5], 1);
    design.addMove(0, 0, [7], 1);
    design.addMove(0, 0, [4], 1);
    design.addMove(0, 1, [3, 3], 0);
    design.addMove(0, 1, [0, 0], 0);
    design.addMove(0, 1, [2, 2], 0);
    design.addMove(0, 1, [1, 1], 0);
    design.addMove(0, 1, [6, 6], 0);
    design.addMove(0, 1, [5, 5], 0);
    design.addMove(0, 1, [7, 7], 0);
    design.addMove(0, 1, [4, 4], 0);

    design.setup("White", "Man", 36);
    design.setup("White", "Man", 37);
    design.setup("White", "Man", 38);
    design.setup("White", "Man", 39);
    design.setup("White", "Man", 40);
    design.setup("White", "Man", 41);
    design.setup("White", "Man", 42);
    design.setup("White", "Man", 43);
    design.setup("White", "Man", 44);
    design.setup("White", "Man", 27);
    design.setup("White", "Man", 28);
    design.setup("White", "Man", 29);
    design.setup("White", "Man", 30);
    design.setup("White", "Man", 31);
    design.setup("White", "Man", 32);
    design.setup("White", "Man", 33);
    design.setup("White", "Man", 34);
    design.setup("White", "Man", 35);
    design.setup("White", "Man", 23);
    design.setup("White", "Man", 24);
    design.setup("White", "Man", 25);
    design.setup("White", "Man", 26);
    design.setup("Black", "Man", 0);
    design.setup("Black", "Man", 1);
    design.setup("Black", "Man", 2);
    design.setup("Black", "Man", 3);
    design.setup("Black", "Man", 4);
    design.setup("Black", "Man", 5);
    design.setup("Black", "Man", 6);
    design.setup("Black", "Man", 7);
    design.setup("Black", "Man", 8);
    design.setup("Black", "Man", 9);
    design.setup("Black", "Man", 10);
    design.setup("Black", "Man", 11);
    design.setup("Black", "Man", 12);
    design.setup("Black", "Man", 13);
    design.setup("Black", "Man", 14);
    design.setup("Black", "Man", 15);
    design.setup("Black", "Man", 16);
    design.setup("Black", "Man", 17);
    design.setup("Black", "Man", 18);
    design.setup("Black", "Man", 19);
    design.setup("Black", "Man", 20);
    design.setup("Black", "Man", 21);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
 
    view.defPosition("a5", 5, 5, 59, 59);
    view.defPosition("b5", 93, 5, 59, 59);
    view.defPosition("c5", 181, 5, 59, 59);
    view.defPosition("d5", 269, 5, 59, 59);
    view.defPosition("e5", 357, 5, 59, 59);
    view.defPosition("f5", 445, 5, 59, 59);
    view.defPosition("g5", 533, 5, 59, 59);
    view.defPosition("h5", 621, 5, 59, 59);
    view.defPosition("i5", 709, 5, 59, 59);
    view.defPosition("a4", 5, 93, 59, 59);
    view.defPosition("b4", 93, 93, 59, 59);
    view.defPosition("c4", 181, 93, 59, 59);
    view.defPosition("d4", 269, 93, 59, 59);
    view.defPosition("e4", 357, 93, 59, 59);
    view.defPosition("f4", 445, 93, 59, 59);
    view.defPosition("g4", 533, 93, 59, 59);
    view.defPosition("h4", 621, 93, 59, 59);
    view.defPosition("i4", 709, 93, 59, 59);
    view.defPosition("a3", 5, 181, 59, 59);
    view.defPosition("b3", 93, 181, 59, 59);
    view.defPosition("c3", 181, 181, 59, 59);
    view.defPosition("d3", 269, 181, 59, 59);
    view.defPosition("e3", 357, 181, 59, 59);
    view.defPosition("f3", 445, 181, 59, 59);
    view.defPosition("g3", 533, 181, 59, 59);
    view.defPosition("h3", 621, 181, 59, 59);
    view.defPosition("i3", 709, 181, 59, 59);
    view.defPosition("a2", 5, 269, 59, 59);
    view.defPosition("b2", 93, 269, 59, 59);
    view.defPosition("c2", 181, 269, 59, 59);
    view.defPosition("d2", 269, 269, 59, 59);
    view.defPosition("e2", 357, 269, 59, 59);
    view.defPosition("f2", 445, 269, 59, 59);
    view.defPosition("g2", 533, 269, 59, 59);
    view.defPosition("h2", 621, 269, 59, 59);
    view.defPosition("i2", 709, 269, 59, 59);
    view.defPosition("a1", 5, 357, 59, 59);
    view.defPosition("b1", 93, 357, 59, 59);
    view.defPosition("c1", 181, 357, 59, 59);
    view.defPosition("d1", 269, 357, 59, 59);
    view.defPosition("e1", 357, 357, 59, 59);
    view.defPosition("f1", 445, 357, 59, 59);
    view.defPosition("g1", 533, 357, 59, 59);
    view.defPosition("h1", 621, 357, 59, 59);
    view.defPosition("i1", 709, 357, 59, 59);
}
