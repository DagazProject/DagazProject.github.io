Dagaz.Model.WIDTH  = 5;
Dagaz.Model.HEIGHT = 8;

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
[   0,   0,   0,   0,   0, // pieceEmpty
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0
], 
[   0,   0,   0,   0,    0, // pieceMan
   70,  60,  60,  60,   70, 
   60,  50,  50,  50,   60, 
   50,  40,  40,  40,   40, 
   40,  30,  30,  30,   40, 
   30,  20,  20,  20,   30, 
   20,  10,  10,  10,   20, 
    0,   0,   0,   0,    0
], 
[   0,   0,   0,   0,   0, // pieceKing
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0, 
    0,   0,   0,   0,   0
]];

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("maximal-captures", "true");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("s"); // 0
    design.addDirection("e"); // 1
    design.addDirection("w"); // 2
    design.addDirection("n"); // 3

    design.addPlayer("White", [3, 2, 1, 0]);
    design.addPlayer("Black", [3, 1, 2, 0]);

    design.addPosition("a8", [5, 1, 0, 0]);
    design.addPosition("b8", [5, 1, -1, 0]);
    design.addPosition("c8", [5, 1, -1, 0]);
    design.addPosition("d8", [5, 1, -1, 0]);
    design.addPosition("e8", [5, 0, -1, 0]);
    design.addPosition("a7", [5, 1, 0, -5]);
    design.addPosition("b7", [5, 1, -1, -5]);
    design.addPosition("c7", [5, 1, -1, -5]);
    design.addPosition("d7", [5, 1, -1, -5]);
    design.addPosition("e7", [5, 0, -1, -5]);
    design.addPosition("a6", [5, 1, 0, -5]);
    design.addPosition("b6", [5, 1, -1, -5]);
    design.addPosition("c6", [5, 1, -1, -5]);
    design.addPosition("d6", [5, 1, -1, -5]);
    design.addPosition("e6", [5, 0, -1, -5]);
    design.addPosition("a5", [5, 1, 0, -5]);
    design.addPosition("b5", [5, 1, -1, -5]);
    design.addPosition("c5", [5, 1, -1, -5]);
    design.addPosition("d5", [5, 1, -1, -5]);
    design.addPosition("e5", [5, 0, -1, -5]);
    design.addPosition("a4", [5, 1, 0, -5]);
    design.addPosition("b4", [5, 1, -1, -5]);
    design.addPosition("c4", [5, 1, -1, -5]);
    design.addPosition("d4", [5, 1, -1, -5]);
    design.addPosition("e4", [5, 0, -1, -5]);
    design.addPosition("a3", [5, 1, 0, -5]);
    design.addPosition("b3", [5, 1, -1, -5]);
    design.addPosition("c3", [5, 1, -1, -5]);
    design.addPosition("d3", [5, 1, -1, -5]);
    design.addPosition("e3", [5, 0, -1, -5]);
    design.addPosition("a2", [5, 1, 0, -5]);
    design.addPosition("b2", [5, 1, -1, -5]);
    design.addPosition("c2", [5, 1, -1, -5]);
    design.addPosition("d2", [5, 1, -1, -5]);
    design.addPosition("e2", [5, 0, -1, -5]);
    design.addPosition("a1", [0, 1, 0, -5]);
    design.addPosition("b1", [0, 1, -1, -5]);
    design.addPosition("c1", [0, 1, -1, -5]);
    design.addPosition("d1", [0, 1, -1, -5]);
    design.addPosition("e1", [0, 0, -1, -5]);

    design.addZone("promotion", 1, [0, 1, 2, 3, 4]);
    design.addZone("promotion", 2, [35, 36, 37, 38, 39]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	26);	// capture
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.MODE,	0);	// jump-type
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	3);
    design.addCommand(0, ZRF.PROMOTE,	1);	// King
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	1);	// King
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.MODE,	0);	// jump-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// jump-type
    design.addPriority(1);			// normal-type

    design.addPiece("Man", 0, 20);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 1, [2], 1);
    design.addMove(0, 1, [1], 1);

    design.addPiece("King", 1, 100);
    design.addMove(1, 2, [3, 3], 0);
    design.addMove(1, 2, [2, 2], 0);
    design.addMove(1, 2, [1, 1], 0);
    design.addMove(1, 2, [0, 0], 0);
    design.addMove(1, 3, [3], 1);
    design.addMove(1, 3, [2], 1);
    design.addMove(1, 3, [1], 1);
    design.addMove(1, 3, [0], 1);

    design.setup("White", "Man", 30);
    design.setup("White", "Man", 31);
    design.setup("White", "Man", 32);
    design.setup("White", "Man", 33);
    design.setup("White", "Man", 34);
    design.setup("White", "Man", 25);
    design.setup("White", "Man", 26);
    design.setup("White", "Man", 27);
    design.setup("White", "Man", 28);
    design.setup("White", "Man", 29);
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
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a8", 2, 2, 50, 50);
    view.defPosition("b8", 52, 2, 50, 50);
    view.defPosition("c8", 102, 2, 50, 50);
    view.defPosition("d8", 152, 2, 50, 50);
    view.defPosition("e8", 202, 2, 50, 50);
    view.defPosition("a7", 2, 52, 50, 50);
    view.defPosition("b7", 52, 52, 50, 50);
    view.defPosition("c7", 102, 52, 50, 50);
    view.defPosition("d7", 152, 52, 50, 50);
    view.defPosition("e7", 202, 52, 50, 50);
    view.defPosition("a6", 2, 102, 50, 50);
    view.defPosition("b6", 52, 102, 50, 50);
    view.defPosition("c6", 102, 102, 50, 50);
    view.defPosition("d6", 152, 102, 50, 50);
    view.defPosition("e6", 202, 102, 50, 50);
    view.defPosition("a5", 2, 152, 50, 50);
    view.defPosition("b5", 52, 152, 50, 50);
    view.defPosition("c5", 102, 152, 50, 50);
    view.defPosition("d5", 152, 152, 50, 50);
    view.defPosition("e5", 202, 152, 50, 50);
    view.defPosition("a4", 2, 202, 50, 50);
    view.defPosition("b4", 52, 202, 50, 50);
    view.defPosition("c4", 102, 202, 50, 50);
    view.defPosition("d4", 152, 202, 50, 50);
    view.defPosition("e4", 202, 202, 50, 50);
    view.defPosition("a3", 2, 252, 50, 50);
    view.defPosition("b3", 52, 252, 50, 50);
    view.defPosition("c3", 102, 252, 50, 50);
    view.defPosition("d3", 152, 252, 50, 50);
    view.defPosition("e3", 202, 252, 50, 50);
    view.defPosition("a2", 2, 302, 50, 50);
    view.defPosition("b2", 52, 302, 50, 50);
    view.defPosition("c2", 102, 302, 50, 50);
    view.defPosition("d2", 152, 302, 50, 50);
    view.defPosition("e2", 202, 302, 50, 50);
    view.defPosition("a1", 2, 352, 50, 50);
    view.defPosition("b1", 52, 352, 50, 50);
    view.defPosition("c1", 102, 352, 50, 50);
    view.defPosition("d1", 152, 352, 50, 50);
    view.defPosition("e1", 202, 352, 50, 50);
}
