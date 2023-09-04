Dagaz.Model.WIDTH       = 7;
Dagaz.Model.HEIGHT      = 9;

Dagaz.AI.SPEC_POSITIONS = [
    0x22, 0x24, 0x26, 0x28,
    0x42, 0x44, 0x46, 0x48,
    0x62, 0x64, 0x66, 0x68,
    0x82, 0x84, 0x86, 0x88,
    0xA2, 0xA4, 0xA6, 0xA8
];

Dagaz.AI.materialTable = [0, 100, 1000, 500];

Dagaz.AI.pieceAdj = [
[   0,   0,   0,   0,   0,   0,   0, // pieceEmpty
    0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0
], 
[   0,   0,   0,   0,   0,   0,   0, // pieceMan
    0,   5,   0,   5,   0,   5,   0,
   20,   0,  15,   0,  15,   0,  20,
    0,   0,   0,   0,   0,   0,   0,
   15,   0,  10,   0,  10,   0,  15,
    0,  -5,   0,  -5,   0,  -5,   0,
   10,   0,   5,   0,   5,   0,  10,
    0, -10,   0, -10,   0, -10,   0,
  -20,   0,   0,   0,   0,   0, -20
], 
[   0,   0,   0,   0,   0,   0,   0, // pieceKing
    0,   5,   0,   5,   0,   5,   0,
   20,   0,  15,   0,  15,   0,  20,
    0,   0,   0,   0,   0,   0,   0,
   15,   0,  10,   0,  10,   0,  15,
    0,  -5,   0,  -5,   0,  -5,   0,
   10,   0,   5,   0,   5,   0,  10,
    0, -10,   0, -10,   0, -10,   0,
  -20,   0,   0,   0,   0,   0, -20
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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("n");
    design.addDirection("s");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("se");

    design.addPlayer("Black", [1, 0, 3, 2, 5, 4, 7, 6]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a9", [0, 14, 2, 0, 0, 0, 0, 8]);
    design.addPosition("b9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c9", [0, 14, 2, -2, 0, 6, 0, 8]);
    design.addPosition("d9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e9", [0, 14, 2, -2, 0, 6, 0, 8]);
    design.addPosition("f9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g9", [0, 14, 0, -2, 0, 6, 0, 0]);
    design.addPosition("a8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b8", [0, 0, 0, 0, -6, 6, -8, 8]);
    design.addPosition("c8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d8", [0, 0, 0, 0, -6, 6, -8, 8]);
    design.addPosition("e8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f8", [0, 0, 0, 0, -6, 6, -8, 8]);
    design.addPosition("g8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [-14, 14, 2, 0, -6, 0, 0, 8]);
    design.addPosition("b7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c7", [-14, 14, 2, -2, -6, 6, -8, 8]);
    design.addPosition("d7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e7", [-14, 14, 2, -2, -6, 6, -8, 8]);
    design.addPosition("f7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g7", [-14, 14, 0, -2, 0, 6, -8, 0]);
    design.addPosition("a6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [0, 0, 0, 0, -6, 6, -8, 8]);
    design.addPosition("c6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d6", [0, 0, 0, 0, -6, 6, -8, 8]);
    design.addPosition("e6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f6", [0, 0, 0, 0, -6, 6, -8, 8]);
    design.addPosition("g6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [-14, 14, 2, 0, -6, 0, 0, 8]);
    design.addPosition("b5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [-14, 14, 2, -2, -6, 6, -8, 8]);
    design.addPosition("d5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e5", [-14, 14, 2, -2, -6, 6, -8, 8]);
    design.addPosition("f5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g5", [-14, 14, 0, -2, 0, 6, -8, 0]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [0, 0, 0, 0, -6, 6, -8, 8]);
    design.addPosition("c4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d4", [0, 0, 0, 0, -6, 6, -8, 8]);
    design.addPosition("e4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f4", [0, 0, 0, 0, -6, 6, -8, 8]);
    design.addPosition("g4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [-14, 14, 2, 0, -6, 0, 0, 8]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [-14, 14, 2, -2, -6, 6, -8, 8]);
    design.addPosition("d3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e3", [-14, 14, 2, -2, -6, 6, -8, 8]);
    design.addPosition("f3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g3", [-14, 14, 0, -2, 0, 6, -8, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, -6, 6, -8, 8]);
    design.addPosition("c2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2", [0, 0, 0, 0, -6, 6, -8, 8]);
    design.addPosition("e2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2", [0, 0, 0, 0, -6, 6, -8, 8]);
    design.addPosition("g2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [-14, 0, 2, 0, -6, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [-14, 0, 2, -2, -6, 0, -8, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [-14, 0, 2, -2, -6, 0, -8, 0]);
    design.addPosition("f1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1", [-14, 0, 0, -2, 0, 0, -8, 0]);

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
    design.addCommand(1, ZRF.MODE,	1);	// jump-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// normal-type

    design.addPiece("King", 0, 1000);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 1, [3, 3], 0);
    design.addMove(0, 1, [0, 0], 0);
    design.addMove(0, 1, [2, 2], 0);
    design.addMove(0, 1, [1, 1], 0);
    design.addMove(0, 1, [6, 6], 0);
    design.addMove(0, 1, [5, 5], 0);
    design.addMove(0, 1, [7, 7], 0);
    design.addMove(0, 1, [4, 4], 0);
    design.addMove(0, 1, [3, 3], 1);
    design.addMove(0, 1, [0, 0], 1);
    design.addMove(0, 1, [2, 2], 1);
    design.addMove(0, 1, [1, 1], 1);
    design.addMove(0, 1, [6, 6], 1);
    design.addMove(0, 1, [5, 5], 1);
    design.addMove(0, 1, [7, 7], 1);
    design.addMove(0, 1, [4, 4], 1);

    design.addPiece("Prince", 1, 100);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [6], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 1, [3, 3], 0);
    design.addMove(1, 1, [0, 0], 0);
    design.addMove(1, 1, [2, 2], 0);
    design.addMove(1, 1, [1, 1], 0);
    design.addMove(1, 1, [6, 6], 0);
    design.addMove(1, 1, [5, 5], 0);
    design.addMove(1, 1, [7, 7], 0);
    design.addMove(1, 1, [4, 4], 0);
    design.addMove(1, 1, [3, 3], 1);
    design.addMove(1, 1, [0, 0], 1);
    design.addMove(1, 1, [2, 2], 1);
    design.addMove(1, 1, [1, 1], 1);
    design.addMove(1, 1, [6, 6], 1);
    design.addMove(1, 1, [5, 5], 1);
    design.addMove(1, 1, [7, 7], 1);
    design.addMove(1, 1, [4, 4], 1);

    design.addPiece("Man", 2, 20);
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 0, [1], 0);
    design.addMove(2, 0, [6], 0);
    design.addMove(2, 0, [5], 0);
    design.addMove(2, 0, [7], 0);
    design.addMove(2, 0, [4], 0);
    design.addMove(2, 1, [3, 3], 0);
    design.addMove(2, 1, [0, 0], 0);
    design.addMove(2, 1, [2, 2], 0);
    design.addMove(2, 1, [1, 1], 0);
    design.addMove(2, 1, [6, 6], 0);
    design.addMove(2, 1, [5, 5], 0);
    design.addMove(2, 1, [7, 7], 0);
    design.addMove(2, 1, [4, 4], 0);
    design.addMove(2, 1, [3, 3], 1);
    design.addMove(2, 1, [0, 0], 1);
    design.addMove(2, 1, [2, 2], 1);
    design.addMove(2, 1, [1, 1], 1);
    design.addMove(2, 1, [6, 6], 1);
    design.addMove(2, 1, [5, 5], 1);
    design.addMove(2, 1, [7, 7], 1);
    design.addMove(2, 1, [4, 4], 1);

    design.setup("Black", "King", 34);
    design.setup("Black", "Man", 56);
    design.setup("Black", "Man", 58);
    design.setup("Black", "Man", 60);
    design.setup("Black", "Man", 62);
    design.setup("Black", "Man", 50);
    design.setup("Black", "Man", 52);
    design.setup("Black", "Man", 54);
    design.setup("Black", "Man", 42);
    design.setup("Black", "Man", 44);
    design.setup("Black", "Man", 46);
    design.setup("Black", "Man", 48);
    design.setup("Black", "Man", 36);
    design.setup("Black", "Man", 38);
    design.setup("Black", "Prince", 40);
    design.setup("White", "King", 28);
    design.setup("White", "Man", 0);
    design.setup("White", "Man", 2);
    design.setup("White", "Man", 4);
    design.setup("White", "Man", 6);
    design.setup("White", "Man", 8);
    design.setup("White", "Man", 10);
    design.setup("White", "Man", 12);
    design.setup("White", "Man", 14);
    design.setup("White", "Man", 16);
    design.setup("White", "Man", 18);
    design.setup("White", "Man", 20);
    design.setup("White", "Prince", 22);
    design.setup("White", "Man", 24);
    design.setup("White", "Man", 26);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("WhitePrince", "White Prince");
    view.defPiece("BlackPrince", "Black Prince");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
 
    view.defPosition("a9", 6, 6, 59, 59);
    view.defPosition("b9", 50, 6, 59, 59);
    view.defPosition("c9", 94, 6, 59, 59);
    view.defPosition("d9", 138, 6, 59, 59);
    view.defPosition("e9", 182, 6, 59, 59);
    view.defPosition("f9", 226, 6, 59, 59);
    view.defPosition("g9", 270, 6, 59, 59);
    view.defPosition("a8", 6, 50, 59, 59);
    view.defPosition("b8", 50, 50, 59, 59);
    view.defPosition("c8", 94, 50, 59, 59);
    view.defPosition("d8", 138, 50, 59, 59);
    view.defPosition("e8", 182, 50, 59, 59);
    view.defPosition("f8", 226, 50, 59, 59);
    view.defPosition("g8", 270, 50, 59, 59);
    view.defPosition("a7", 6, 94, 59, 59);
    view.defPosition("b7", 50, 94, 59, 59);
    view.defPosition("c7", 94, 94, 59, 59);
    view.defPosition("d7", 138, 94, 59, 59);
    view.defPosition("e7", 182, 94, 59, 59);
    view.defPosition("f7", 226, 94, 59, 59);
    view.defPosition("g7", 270, 94, 59, 59);
    view.defPosition("a6", 6, 138, 59, 59);
    view.defPosition("b6", 50, 138, 59, 59);
    view.defPosition("c6", 94, 138, 59, 59);
    view.defPosition("d6", 138, 138, 59, 59);
    view.defPosition("e6", 182, 138, 59, 59);
    view.defPosition("f6", 226, 138, 59, 59);
    view.defPosition("g6", 270, 138, 59, 59);
    view.defPosition("a5", 6, 182, 59, 59);
    view.defPosition("b5", 50, 182, 59, 59);
    view.defPosition("c5", 94, 182, 59, 59);
    view.defPosition("d5", 138, 182, 59, 59);
    view.defPosition("e5", 182, 182, 59, 59);
    view.defPosition("f5", 226, 182, 59, 59);
    view.defPosition("g5", 270, 182, 59, 59);
    view.defPosition("a4", 6, 226, 59, 59);
    view.defPosition("b4", 50, 226, 59, 59);
    view.defPosition("c4", 94, 226, 59, 59);
    view.defPosition("d4", 138, 226, 59, 59);
    view.defPosition("e4", 182, 226, 59, 59);
    view.defPosition("f4", 226, 226, 59, 59);
    view.defPosition("g4", 270, 226, 59, 59);
    view.defPosition("a3", 6, 270, 59, 59);
    view.defPosition("b3", 50, 270, 59, 59);
    view.defPosition("c3", 94, 270, 59, 59);
    view.defPosition("d3", 138, 270, 59, 59);
    view.defPosition("e3", 182, 270, 59, 59);
    view.defPosition("f3", 226, 270, 59, 59);
    view.defPosition("g3", 270, 270, 59, 59);
    view.defPosition("a2", 6, 314, 59, 59);
    view.defPosition("b2", 50, 314, 59, 59);
    view.defPosition("c2", 94, 314, 59, 59);
    view.defPosition("d2", 138, 314, 59, 59);
    view.defPosition("e2", 182, 314, 59, 59);
    view.defPosition("f2", 226, 314, 59, 59);
    view.defPosition("g2", 270, 314, 59, 59);
    view.defPosition("a1", 6, 358, 59, 59);
    view.defPosition("b1", 50, 358, 59, 59);
    view.defPosition("c1", 94, 358, 59, 59);
    view.defPosition("d1", 138, 358, 59, 59);
    view.defPosition("e1", 182, 358, 59, 59);
    view.defPosition("f1", 226, 358, 59, 59);
    view.defPosition("g1", 270, 358, 59, 59);
}
