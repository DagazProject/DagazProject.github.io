Dagaz.Model.WIDTH  = 8;
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
[   0,    0,    0,    0,    0,    0,    0,    0, // pieceEmpty
    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0,    0
],
[   0, 9000, 9000, 9000, 9000, 9000, 9000,    0, // pieceMan
    0,  120,   60,  120,  120,   60,  120,    0, 
    0,  100,   50,  100,  100,   50,  100,    0, 
    0,   80,   40,   80,   80,   40,   80,    0, 
    0,   60,   30,   60,   60,   30,   60,    0, 
    0,   40,   20,   40,   40,   20,   40,    0, 
    0,   20,   10,   20,   20,   10,   20,    0, 
    0,    0,    0,    0,    0,    0,    0,    0
],
[   0,    0,    0,    0,    0,    0,    0,    0, // pieceLeft
   70,   60,   50,   40,   30,   20,   10,    0, 
   70,   60,   50,   40,   30,   20,   10,    0, 
   70,   60,   50,   40,   30,   20,   10,    0, 
   70,   60,   50,   40,   30,   20,   10,    0, 
   70,   60,   50,   40,   30,   20,   10,    0, 
   70,   60,   50,   40,   30,   20,   10,    0, 
    0,    0,    0,    0,    0,    0,    0,    0
],
[   0,    0,    0,    0,    0,    0,    0,    0, // pieceRight
    0,   10,   20,   30,   40,   50,   60,   70, 
    0,   10,   20,   30,   40,   50,   60,   70, 
    0,   10,   20,   30,   40,   50,   60,   70, 
    0,   10,   20,   30,   40,   50,   60,   70, 
    0,   10,   20,   30,   40,   50,   60,   70, 
    0,   10,   20,   30,   40,   50,   60,   70, 
    0,    0,    0,    0,    0,    0,    0,    0
]];

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("highlight-goals", "false");
    design.checkVersion("smart-moves", "true");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("Blue", [1, 0, 3, 2]);
    design.addPlayer("Red", [0, 1, 2, 3]);

    design.addPosition("a8", [0, 1, 8, 0]);
    design.addPosition("b8", [-1, 1, 8, 0]);
    design.addPosition("c8", [-1, 1, 8, 0]);
    design.addPosition("d8", [-1, 1, 8, 0]);
    design.addPosition("e8", [-1, 1, 8, 0]);
    design.addPosition("f8", [-1, 1, 8, 0]);
    design.addPosition("g8", [-1, 1, 8, 0]);
    design.addPosition("h8", [-1, 0, 8, 0]);
    design.addPosition("a7", [0, 1, 8, -8]);
    design.addPosition("b7", [-1, 1, 8, -8]);
    design.addPosition("c7", [-1, 1, 8, -8]);
    design.addPosition("d7", [-1, 1, 8, -8]);
    design.addPosition("e7", [-1, 1, 8, -8]);
    design.addPosition("f7", [-1, 1, 8, -8]);
    design.addPosition("g7", [-1, 1, 8, -8]);
    design.addPosition("h7", [-1, 0, 8, -8]);
    design.addPosition("a6", [0, 1, 8, -8]);
    design.addPosition("b6", [-1, 1, 8, -8]);
    design.addPosition("c6", [-1, 1, 8, -8]);
    design.addPosition("d6", [-1, 1, 8, -8]);
    design.addPosition("e6", [-1, 1, 8, -8]);
    design.addPosition("f6", [-1, 1, 8, -8]);
    design.addPosition("g6", [-1, 1, 8, -8]);
    design.addPosition("h6", [-1, 0, 8, -8]);
    design.addPosition("a5", [0, 1, 8, -8]);
    design.addPosition("b5", [-1, 1, 8, -8]);
    design.addPosition("c5", [-1, 1, 8, -8]);
    design.addPosition("d5", [-1, 1, 8, -8]);
    design.addPosition("e5", [-1, 1, 8, -8]);
    design.addPosition("f5", [-1, 1, 8, -8]);
    design.addPosition("g5", [-1, 1, 8, -8]);
    design.addPosition("h5", [-1, 0, 8, -8]);
    design.addPosition("a4", [0, 1, 8, -8]);
    design.addPosition("b4", [-1, 1, 8, -8]);
    design.addPosition("c4", [-1, 1, 8, -8]);
    design.addPosition("d4", [-1, 1, 8, -8]);
    design.addPosition("e4", [-1, 1, 8, -8]);
    design.addPosition("f4", [-1, 1, 8, -8]);
    design.addPosition("g4", [-1, 1, 8, -8]);
    design.addPosition("h4", [-1, 0, 8, -8]);
    design.addPosition("a3", [0, 1, 8, -8]);
    design.addPosition("b3", [-1, 1, 8, -8]);
    design.addPosition("c3", [-1, 1, 8, -8]);
    design.addPosition("d3", [-1, 1, 8, -8]);
    design.addPosition("e3", [-1, 1, 8, -8]);
    design.addPosition("f3", [-1, 1, 8, -8]);
    design.addPosition("g3", [-1, 1, 8, -8]);
    design.addPosition("h3", [-1, 0, 8, -8]);
    design.addPosition("a2", [0, 1, 8, -8]);
    design.addPosition("b2", [-1, 1, 8, -8]);
    design.addPosition("c2", [-1, 1, 8, -8]);
    design.addPosition("d2", [-1, 1, 8, -8]);
    design.addPosition("e2", [-1, 1, 8, -8]);
    design.addPosition("f2", [-1, 1, 8, -8]);
    design.addPosition("g2", [-1, 1, 8, -8]);
    design.addPosition("h2", [-1, 0, 8, -8]);
    design.addPosition("a1", [0, 1, 0, -8]);
    design.addPosition("b1", [-1, 1, 0, -8]);
    design.addPosition("c1", [-1, 1, 0, -8]);
    design.addPosition("d1", [-1, 1, 0, -8]);
    design.addPosition("e1", [-1, 1, 0, -8]);
    design.addPosition("f1", [-1, 1, 0, -8]);
    design.addPosition("g1", [-1, 1, 0, -8]);
    design.addPosition("h1", [-1, 0, 0, -8]);

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
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	4);	// $5
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.PARAM,	5);	// $6
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// jump-type
    design.addPriority(1);			// shift-type

    design.addPiece("Runner", 0);
    design.addMove(0, 0, [3], 1);
    design.addMove(0, 1, [3, 3], 0);
    design.addMove(0, 2, [3, 3, 3, 3], 0);
    design.addMove(0, 3, [3, 3, 3, 3, 3, 3], 0);

    design.addPiece("Left", 1);
    design.addMove(1, 0, [1], 1);
    design.addMove(1, 1, [1, 1], 0);
    design.addMove(1, 2, [1, 1, 1, 1], 0);
    design.addMove(1, 3, [1, 1, 1, 1, 1, 1], 0);

    design.addPiece("Right", 2);
    design.addMove(2, 0, [0], 1);
    design.addMove(2, 1, [0, 0], 0);
    design.addMove(2, 2, [0, 0, 0, 0], 0);
    design.addMove(2, 3, [0, 0, 0, 0, 0, 0], 0);

    design.setup("Blue", "Runner", 57);
    design.setup("Blue", "Runner", 58);
    design.setup("Blue", "Runner", 59);
    design.setup("Blue", "Runner", 60);
    design.setup("Blue", "Runner", 61);
    design.setup("Blue", "Runner", 62);
    design.setup("Red", "Left", 48);
    design.setup("Red", "Left", 40);
    design.setup("Red", "Left", 32);
    design.setup("Red", "Left", 24);
    design.setup("Red", "Left", 16);
    design.setup("Red", "Left", 8);
    design.setup("Red", "Right", 55);
    design.setup("Red", "Right", 47);
    design.setup("Red", "Right", 39);
    design.setup("Red", "Right", 31);
    design.setup("Red", "Right", 23);
    design.setup("Red", "Right", 15);

    design.goal(0, "Blue", "Runner", [1]);
    design.goal(1, "Blue", "Runner", [2]);
    design.goal(2, "Blue", "Runner", [3]);
    design.goal(3, "Blue", "Runner", [4]);
    design.goal(4, "Blue", "Runner", [5]);
    design.goal(5, "Blue", "Runner", [6]);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlueRunner", "Blue Runner");
    view.defPiece("RedLeft", "Red Left");
    view.defPiece("RedRight", "Red Right");
 
    view.defPosition("a8", 2, 2, 60, 60);
    view.defPosition("b8", 64, 2, 60, 60);
    view.defPosition("c8", 126, 2, 60, 60);
    view.defPosition("d8", 188, 2, 60, 60);
    view.defPosition("e8", 250, 2, 60, 60);
    view.defPosition("f8", 312, 2, 60, 60);
    view.defPosition("g8", 374, 2, 60, 60);
    view.defPosition("h8", 436, 2, 60, 60);
    view.defPosition("a7", 2, 64, 60, 60);
    view.defPosition("b7", 64, 64, 60, 60);
    view.defPosition("c7", 126, 64, 60, 60);
    view.defPosition("d7", 188, 64, 60, 60);
    view.defPosition("e7", 250, 64, 60, 60);
    view.defPosition("f7", 312, 64, 60, 60);
    view.defPosition("g7", 374, 64, 60, 60);
    view.defPosition("h7", 436, 64, 60, 60);
    view.defPosition("a6", 2, 126, 60, 60);
    view.defPosition("b6", 64, 126, 60, 60);
    view.defPosition("c6", 126, 126, 60, 60);
    view.defPosition("d6", 188, 126, 60, 60);
    view.defPosition("e6", 250, 126, 60, 60);
    view.defPosition("f6", 312, 126, 60, 60);
    view.defPosition("g6", 374, 126, 60, 60);
    view.defPosition("h6", 436, 126, 60, 60);
    view.defPosition("a5", 2, 188, 60, 60);
    view.defPosition("b5", 64, 188, 60, 60);
    view.defPosition("c5", 126, 188, 60, 60);
    view.defPosition("d5", 188, 188, 60, 60);
    view.defPosition("e5", 250, 188, 60, 60);
    view.defPosition("f5", 312, 188, 60, 60);
    view.defPosition("g5", 374, 188, 60, 60);
    view.defPosition("h5", 436, 188, 60, 60);
    view.defPosition("a4", 2, 250, 60, 60);
    view.defPosition("b4", 64, 250, 60, 60);
    view.defPosition("c4", 126, 250, 60, 60);
    view.defPosition("d4", 188, 250, 60, 60);
    view.defPosition("e4", 250, 250, 60, 60);
    view.defPosition("f4", 312, 250, 60, 60);
    view.defPosition("g4", 374, 250, 60, 60);
    view.defPosition("h4", 436, 250, 60, 60);
    view.defPosition("a3", 2, 312, 60, 60);
    view.defPosition("b3", 64, 312, 60, 60);
    view.defPosition("c3", 126, 312, 60, 60);
    view.defPosition("d3", 188, 312, 60, 60);
    view.defPosition("e3", 250, 312, 60, 60);
    view.defPosition("f3", 312, 312, 60, 60);
    view.defPosition("g3", 374, 312, 60, 60);
    view.defPosition("h3", 436, 312, 60, 60);
    view.defPosition("a2", 2, 374, 60, 60);
    view.defPosition("b2", 64, 374, 60, 60);
    view.defPosition("c2", 126, 374, 60, 60);
    view.defPosition("d2", 188, 374, 60, 60);
    view.defPosition("e2", 250, 374, 60, 60);
    view.defPosition("f2", 312, 374, 60, 60);
    view.defPosition("g2", 374, 374, 60, 60);
    view.defPosition("h2", 436, 374, 60, 60);
    view.defPosition("a1", 2, 436, 60, 60);
    view.defPosition("b1", 64, 436, 60, 60);
    view.defPosition("c1", 126, 436, 60, 60);
    view.defPosition("d1", 188, 436, 60, 60);
    view.defPosition("e1", 250, 436, 60, 60);
    view.defPosition("f1", 312, 436, 60, 60);
    view.defPosition("g1", 374, 436, 60, 60);
    view.defPosition("h1", 436, 436, 60, 60);
}
