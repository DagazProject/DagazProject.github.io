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
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("caissa-extension", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a7", [0, 1, 7, 0, 0, 8, 0, 0]);
    design.addPosition("b7", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("c7", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("d7", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("e7", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("f7", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("g7", [-1, 0, 7, 0, 0, 0, 6, 0]);
    design.addPosition("a6", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b6", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c6", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d6", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e6", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f6", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g6", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a5", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g5", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a4", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g4", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a3", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g3", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a2", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g2", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a1", [0, 1, 0, -6, -7, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("c1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("d1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("e1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("f1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("g1", [-1, 0, 0, 0, -7, 0, 0, -8]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.LITERAL,	0);	// Hole
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.IF,	6);
    design.addCommand(1, ZRF.LITERAL,	0);	// Hole
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	3);
    design.addCommand(1, ZRF.LITERAL,	0);	// false
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.LITERAL,	1);	// true
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.IF,	6);
    design.addCommand(1, ZRF.LITERAL,	0);	// Hole
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	3);
    design.addCommand(1, ZRF.LITERAL,	0);	// false
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.LITERAL,	1);	// true
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	10);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	2);	// $3
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-18);
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.IF,	6);
    design.addCommand(2, ZRF.LITERAL,	0);	// Hole
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.IF,	3);
    design.addCommand(2, ZRF.LITERAL,	0);	// false
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.LITERAL,	1);	// true
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	7);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-15);
    design.addCommand(2, ZRF.LITERAL,	1);	// Queen
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.LITERAL,	1);	// Queen
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPiece("Hole", 0, -1);

    design.addPiece("Queen", 1, 1000);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [6], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 1, [4, 4, 4], 1);
    design.addMove(1, 1, [2, 2, 2], 1);
    design.addMove(1, 1, [0, 0, 0], 1);
    design.addMove(1, 1, [1, 1, 1], 1);
    design.addMove(1, 1, [7, 7, 7], 1);
    design.addMove(1, 1, [6, 6, 6], 1);
    design.addMove(1, 1, [3, 3, 3], 1);
    design.addMove(1, 1, [5, 5, 5], 1);

    design.addPiece("Rook", 2, 10);
    design.addMove(2, 2, [4, 4], 0);
    design.addMove(2, 2, [2, 2], 0);
    design.addMove(2, 2, [0, 0], 0);
    design.addMove(2, 2, [1, 1], 0);

    design.addPiece("Knight", 3, 4);
    design.addMove(3, 3, [4, 7], 0);
    design.addMove(3, 3, [4, 3], 0);
    design.addMove(3, 3, [2, 6], 0);
    design.addMove(3, 3, [2, 5], 0);
    design.addMove(3, 3, [0, 7], 0);
    design.addMove(3, 3, [0, 6], 0);
    design.addMove(3, 3, [1, 3], 0);
    design.addMove(3, 3, [1, 5], 0);

    design.addPiece("Bishop", 4, 5);
    design.addMove(4, 2, [7, 7], 0);
    design.addMove(4, 2, [6, 6], 0);
    design.addMove(4, 2, [3, 3], 0);
    design.addMove(4, 2, [5, 5], 0);

    design.setup("White", "Knight", 36);
    design.setup("White", "Rook", 30);
    design.setup("White", "Bishop", 38);
    design.setup("White", "Queen", 37);
    design.setup("Black", "Knight", 12);
    design.setup("Black", "Rook", 18);
    design.setup("Black", "Bishop", 10);
    design.setup("Black", "Queen", 11);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteHole", "White Hole");
    view.defPiece("BlackHole", "Black Hole");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
 
    view.defPosition("a7", 2, 2, 50, 50);
    view.defPosition("b7", 52, 2, 50, 50);
    view.defPosition("c7", 102, 2, 50, 50);
    view.defPosition("d7", 152, 2, 50, 50);
    view.defPosition("e7", 202, 2, 50, 50);
    view.defPosition("f7", 252, 2, 50, 50);
    view.defPosition("g7", 302, 2, 50, 50);
    view.defPosition("a6", 2, 52, 50, 50);
    view.defPosition("b6", 52, 52, 50, 50);
    view.defPosition("c6", 102, 52, 50, 50);
    view.defPosition("d6", 152, 52, 50, 50);
    view.defPosition("e6", 202, 52, 50, 50);
    view.defPosition("f6", 252, 52, 50, 50);
    view.defPosition("g6", 302, 52, 50, 50);
    view.defPosition("a5", 2, 102, 50, 50);
    view.defPosition("b5", 52, 102, 50, 50);
    view.defPosition("c5", 102, 102, 50, 50);
    view.defPosition("d5", 152, 102, 50, 50);
    view.defPosition("e5", 202, 102, 50, 50);
    view.defPosition("f5", 252, 102, 50, 50);
    view.defPosition("g5", 302, 102, 50, 50);
    view.defPosition("a4", 2, 152, 50, 50);
    view.defPosition("b4", 52, 152, 50, 50);
    view.defPosition("c4", 102, 152, 50, 50);
    view.defPosition("d4", 152, 152, 50, 50);
    view.defPosition("e4", 202, 152, 50, 50);
    view.defPosition("f4", 252, 152, 50, 50);
    view.defPosition("g4", 302, 152, 50, 50);
    view.defPosition("a3", 2, 202, 50, 50);
    view.defPosition("b3", 52, 202, 50, 50);
    view.defPosition("c3", 102, 202, 50, 50);
    view.defPosition("d3", 152, 202, 50, 50);
    view.defPosition("e3", 202, 202, 50, 50);
    view.defPosition("f3", 252, 202, 50, 50);
    view.defPosition("g3", 302, 202, 50, 50);
    view.defPosition("a2", 2, 252, 50, 50);
    view.defPosition("b2", 52, 252, 50, 50);
    view.defPosition("c2", 102, 252, 50, 50);
    view.defPosition("d2", 152, 252, 50, 50);
    view.defPosition("e2", 202, 252, 50, 50);
    view.defPosition("f2", 252, 252, 50, 50);
    view.defPosition("g2", 302, 252, 50, 50);
    view.defPosition("a1", 2, 302, 50, 50);
    view.defPosition("b1", 52, 302, 50, 50);
    view.defPosition("c1", 102, 302, 50, 50);
    view.defPosition("d1", 152, 302, 50, 50);
    view.defPosition("e1", 202, 302, 50, 50);
    view.defPosition("f1", 252, 302, 50, 50);
    view.defPosition("g1", 302, 302, 50, 50);
}
