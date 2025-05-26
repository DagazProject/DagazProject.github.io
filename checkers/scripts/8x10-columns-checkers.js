Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH  = 8;
Dagaz.Model.HEIGHT = 10;

Dagaz.AI.pieceAdj = [  
[   0,    0,   0,   0,   0,   0,    0,    0,    0,    0, // pieceMan
    0,    0,   0,   0,   0,   0,    0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0,    0 
],
[   0,    0,   0,   0,   0,   0,    0,    0,    0,    0, // pieceKing
    0,    0,   0,   0,   0,   0,    0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0,    0, 
    0,    0,   0,   0,   0,   0,    0,    0,    0,    0 
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
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "true");
//  design.checkVersion("advisor-wait", "25");

    design.addDirection("se"); // 0
    design.addDirection("sw"); // 1
    design.addDirection("ne"); // 2
    design.addDirection("nw"); // 3

    design.addPlayer("White", [3, 2, 1, 0]);
    design.addPlayer("Black", [3, 2, 1, 0]);

    design.addPosition("a10", [9, 0, 0, 0]);
    design.addPosition("b10", [9, 7, 0, 0]);
    design.addPosition("c10", [9, 7, 0, 0]);
    design.addPosition("d10", [9, 7, 0, 0]);
    design.addPosition("e10", [9, 7, 0, 0]);
    design.addPosition("f10", [9, 7, 0, 0]);
    design.addPosition("g10", [9, 7, 0, 0]);
    design.addPosition("h10", [0, 7, 0, 0]);
    design.addPosition("a9", [9, 0, -7, 0]);
    design.addPosition("b9", [9, 7, -7, -9]);
    design.addPosition("c9", [9, 7, -7, -9]);
    design.addPosition("d9", [9, 7, -7, -9]);
    design.addPosition("e9", [9, 7, -7, -9]);
    design.addPosition("f9", [9, 7, -7, -9]);
    design.addPosition("g9", [9, 7, -7, -9]);
    design.addPosition("h9", [0, 7, 0, -9]);
    design.addPosition("a8", [9, 0, -7, 0]);
    design.addPosition("b8", [9, 7, -7, -9]);
    design.addPosition("c8", [9, 7, -7, -9]);
    design.addPosition("d8", [9, 7, -7, -9]);
    design.addPosition("e8", [9, 7, -7, -9]);
    design.addPosition("f8", [9, 7, -7, -9]);
    design.addPosition("g8", [9, 7, -7, -9]);
    design.addPosition("h8", [0, 7, 0, -9]);
    design.addPosition("a7", [9, 0, -7, 0]);
    design.addPosition("b7", [9, 7, -7, -9]);
    design.addPosition("c7", [9, 7, -7, -9]);
    design.addPosition("d7", [9, 7, -7, -9]);
    design.addPosition("e7", [9, 7, -7, -9]);
    design.addPosition("f7", [9, 7, -7, -9]);
    design.addPosition("g7", [9, 7, -7, -9]);
    design.addPosition("h7", [0, 7, 0, -9]);
    design.addPosition("a6", [9, 0, -7, 0]);
    design.addPosition("b6", [9, 7, -7, -9]);
    design.addPosition("c6", [9, 7, -7, -9]);
    design.addPosition("d6", [9, 7, -7, -9]);
    design.addPosition("e6", [9, 7, -7, -9]);
    design.addPosition("f6", [9, 7, -7, -9]);
    design.addPosition("g6", [9, 7, -7, -9]);
    design.addPosition("h6", [0, 7, 0, -9]);
    design.addPosition("a5", [9, 0, -7, 0]);
    design.addPosition("b5", [9, 7, -7, -9]);
    design.addPosition("c5", [9, 7, -7, -9]);
    design.addPosition("d5", [9, 7, -7, -9]);
    design.addPosition("e5", [9, 7, -7, -9]);
    design.addPosition("f5", [9, 7, -7, -9]);
    design.addPosition("g5", [9, 7, -7, -9]);
    design.addPosition("h5", [0, 7, 0, -9]);
    design.addPosition("a4", [9, 0, -7, 0]);
    design.addPosition("b4", [9, 7, -7, -9]);
    design.addPosition("c4", [9, 7, -7, -9]);
    design.addPosition("d4", [9, 7, -7, -9]);
    design.addPosition("e4", [9, 7, -7, -9]);
    design.addPosition("f4", [9, 7, -7, -9]);
    design.addPosition("g4", [9, 7, -7, -9]);
    design.addPosition("h4", [0, 7, 0, -9]);
    design.addPosition("a3", [9, 0, -7, 0]);
    design.addPosition("b3", [9, 7, -7, -9]);
    design.addPosition("c3", [9, 7, -7, -9]);
    design.addPosition("d3", [9, 7, -7, -9]);
    design.addPosition("e3", [9, 7, -7, -9]);
    design.addPosition("f3", [9, 7, -7, -9]);
    design.addPosition("g3", [9, 7, -7, -9]);
    design.addPosition("h3", [0, 7, 0, -9]);
    design.addPosition("a2", [9, 0, -7, 0]);
    design.addPosition("b2", [9, 7, -7, -9]);
    design.addPosition("c2", [9, 7, -7, -9]);
    design.addPosition("d2", [9, 7, -7, -9]);
    design.addPosition("e2", [9, 7, -7, -9]);
    design.addPosition("f2", [9, 7, -7, -9]);
    design.addPosition("g2", [9, 7, -7, -9]);
    design.addPosition("h2", [0, 7, 0, -9]);
    design.addPosition("a1", [0, 0, -7, 0]);
    design.addPosition("b1", [0, 0, -7, -9]);
    design.addPosition("c1", [0, 0, -7, -9]);
    design.addPosition("d1", [0, 0, -7, -9]);
    design.addPosition("e1", [0, 0, -7, -9]);
    design.addPosition("f1", [0, 0, -7, -9]);
    design.addPosition("g1", [0, 0, -7, -9]);
    design.addPosition("h1", [0, 0, 0, -9]);

    design.addZone("promotion", 1, [1, 3, 5, 7]);
    design.addZone("promotion", 2, [72, 74, 76, 78]);

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
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.PROMOTE,	1);	// King
    design.addCommand(0, ZRF.MODE,	2);	// continue-type
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	3);
    design.addCommand(0, ZRF.MODE,	0);	// jump-type
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
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-5);
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	18);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-6);
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.FORK,	4);
    design.addCommand(2, ZRF.MODE,	2);	// continue-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	4);	// $5
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-19);
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	7);
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.JUMP,	-8);
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
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-8);
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// jump-type
    design.addPriority(1);			// normal-type

    design.addPiece("Man", 0, 20);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 1, [2], 1);
    design.addMove(0, 1, [3], 1);

    design.addPiece("King", 1, 100);
    design.addMove(1, 2, [3, 3, 3, 3, 3], 0, 10);
    design.addMove(1, 2, [0, 0, 0, 0, 0], 0, 10);
    design.addMove(1, 2, [2, 2, 2, 2, 2], 0, 10);
    design.addMove(1, 2, [1, 1, 1, 1, 1], 0, 10);
    design.addMove(1, 3, [3, 3, 3, 3, 3], 2, 10);
    design.addMove(1, 3, [0, 0, 0, 0, 0], 2, 10);
    design.addMove(1, 3, [2, 2, 2, 2, 2], 2, 10);
    design.addMove(1, 3, [1, 1, 1, 1, 1], 2, 10);
    design.addMove(1, 4, [3, 3], 1, 10);
    design.addMove(1, 4, [0, 0], 1, 10);
    design.addMove(1, 4, [2, 2], 1, 10);
    design.addMove(1, 4, [1, 1], 1, 10);

    design.setup("White", "Man", 72);
    design.setup("White", "Man", 74);
    design.setup("White", "Man", 76);
    design.setup("White", "Man", 78);
    design.setup("White", "Man", 65);
    design.setup("White", "Man", 67);
    design.setup("White", "Man", 69);
    design.setup("White", "Man", 71);
    design.setup("White", "Man", 56);
    design.setup("White", "Man", 58);
    design.setup("White", "Man", 60);
    design.setup("White", "Man", 62);
    design.setup("White", "Man", 49);
    design.setup("White", "Man", 51);
    design.setup("White", "Man", 53);
    design.setup("White", "Man", 55);
    design.setup("Black", "Man", 1);
    design.setup("Black", "Man", 3);
    design.setup("Black", "Man", 5);
    design.setup("Black", "Man", 7);
    design.setup("Black", "Man", 8);
    design.setup("Black", "Man", 10);
    design.setup("Black", "Man", 12);
    design.setup("Black", "Man", 14);
    design.setup("Black", "Man", 17);
    design.setup("Black", "Man", 19);
    design.setup("Black", "Man", 21);
    design.setup("Black", "Man", 23);
    design.setup("Black", "Man", 24);
    design.setup("Black", "Man", 26);
    design.setup("Black", "Man", 28);
    design.setup("Black", "Man", 30);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a10", 2, 44, 68, 68);
    view.defPosition("b10", 70, 44, 68, 68);
    view.defPosition("c10", 138, 44, 68, 68);
    view.defPosition("d10", 206, 44, 68, 68);
    view.defPosition("e10", 274, 44, 68, 68);
    view.defPosition("f10", 342, 44, 68, 68);
    view.defPosition("g10", 410, 44, 68, 68);
    view.defPosition("h10", 478, 44, 68, 68);
    view.defPosition("a9", 2, 112, 68, 68);
    view.defPosition("b9", 70, 112, 68, 68);
    view.defPosition("c9", 138, 112, 68, 68);
    view.defPosition("d9", 206, 112, 68, 68);
    view.defPosition("e9", 274, 112, 68, 68);
    view.defPosition("f9", 342, 112, 68, 68);
    view.defPosition("g9", 410, 112, 68, 68);
    view.defPosition("h9", 478, 112, 68, 68);
    view.defPosition("a8", 2, 180, 68, 68);
    view.defPosition("b8", 70, 180, 68, 68);
    view.defPosition("c8", 138, 180, 68, 68);
    view.defPosition("d8", 206, 180, 68, 68);
    view.defPosition("e8", 274, 180, 68, 68);
    view.defPosition("f8", 342, 180, 68, 68);
    view.defPosition("g8", 410, 180, 68, 68);
    view.defPosition("h8", 478, 180, 68, 68);
    view.defPosition("a7", 2, 248, 68, 68);
    view.defPosition("b7", 70, 248, 68, 68);
    view.defPosition("c7", 138, 248, 68, 68);
    view.defPosition("d7", 206, 248, 68, 68);
    view.defPosition("e7", 274, 248, 68, 68);
    view.defPosition("f7", 342, 248, 68, 68);
    view.defPosition("g7", 410, 248, 68, 68);
    view.defPosition("h7", 478, 248, 68, 68);
    view.defPosition("a6", 2, 316, 68, 68);
    view.defPosition("b6", 70, 316, 68, 68);
    view.defPosition("c6", 138, 316, 68, 68);
    view.defPosition("d6", 206, 316, 68, 68);
    view.defPosition("e6", 274, 316, 68, 68);
    view.defPosition("f6", 342, 316, 68, 68);
    view.defPosition("g6", 410, 316, 68, 68);
    view.defPosition("h6", 478, 316, 68, 68);
    view.defPosition("a5", 2, 384, 68, 68);
    view.defPosition("b5", 70, 384, 68, 68);
    view.defPosition("c5", 138, 384, 68, 68);
    view.defPosition("d5", 206, 384, 68, 68);
    view.defPosition("e5", 274, 384, 68, 68);
    view.defPosition("f5", 342, 384, 68, 68);
    view.defPosition("g5", 410, 384, 68, 68);
    view.defPosition("h5", 478, 384, 68, 68);
    view.defPosition("a4", 2, 452, 68, 68);
    view.defPosition("b4", 70, 452, 68, 68);
    view.defPosition("c4", 138, 452, 68, 68);
    view.defPosition("d4", 206, 452, 68, 68);
    view.defPosition("e4", 274, 452, 68, 68);
    view.defPosition("f4", 342, 452, 68, 68);
    view.defPosition("g4", 410, 452, 68, 68);
    view.defPosition("h4", 478, 452, 68, 68);
    view.defPosition("a3", 2, 520, 68, 68);
    view.defPosition("b3", 70, 520, 68, 68);
    view.defPosition("c3", 138, 520, 68, 68);
    view.defPosition("d3", 206, 520, 68, 68);
    view.defPosition("e3", 274, 520, 68, 68);
    view.defPosition("f3", 342, 520, 68, 68);
    view.defPosition("g3", 410, 520, 68, 68);
    view.defPosition("h3", 478, 520, 68, 68);
    view.defPosition("a2", 2, 588, 68, 68);
    view.defPosition("b2", 70, 588, 68, 68);
    view.defPosition("c2", 138, 588, 68, 68);
    view.defPosition("d2", 206, 588, 68, 68);
    view.defPosition("e2", 274, 588, 68, 68);
    view.defPosition("f2", 342, 588, 68, 68);
    view.defPosition("g2", 410, 588, 68, 68);
    view.defPosition("h2", 478, 588, 68, 68);
    view.defPosition("a1", 2, 656, 68, 68);
    view.defPosition("b1", 70, 656, 68, 68);
    view.defPosition("c1", 138, 656, 68, 68);
    view.defPosition("d1", 206, 656, 68, 68);
    view.defPosition("e1", 274, 656, 68, 68);
    view.defPosition("f1", 342, 656, 68, 68);
    view.defPosition("g1", 410, 656, 68, 68);
    view.defPosition("h1", 478, 656, 68, 68);
}
