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
    design.checkVersion("ko", "3");
    design.checkVersion("advisor-wait", "15");
    design.checkVersion("knights-court-extension", "true");

    design.addDirection("wh");
    design.addDirection("wb");
    design.addDirection("n");
    design.addDirection("s");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("se");
    design.addDirection("nw");
    design.addDirection("nx");

    design.addPlayer("White", [0, 1, 3, 2, 5, 4, 7, 6, 9, 8, 10]);
    design.addPlayer("Black", [1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    design.addPosition("x3", [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11]);
    design.addPosition("a3", [0, 0, 0, 5, 1, 0, 0, 0, 6, 0, 11]);
    design.addPosition("b3", [0, 0, 0, 5, 1, -1, 0, 4, 6, 0, 11]);
    design.addPosition("c3", [0, 0, 0, 5, 0, -1, 0, 4, 0, 0, 0]);
    design.addPosition("y3", [0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 7]);
    design.addPosition("x2", [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6]);
    design.addPosition("a2", [0, 0, -5, 5, 1, 0, -4, 0, 6, 0, -5]);
    design.addPosition("b2", [0, 0, -5, 5, 1, -1, -4, 4, 6, -6, -5]);
    design.addPosition("c2", [0, 0, -5, 5, 0, -1, 0, 4, 0, -6, -5]);
    design.addPosition("y2", [0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 2]);
    design.addPosition("x1", [-6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("a1", [-11, -7, -5, 0, 1, 0, -4, 0, 0, 0, -5]);
    design.addPosition("b1", [0, 0, -5, 0, 1, -1, -4, 0, 0, -6, -5]);
    design.addPosition("c1", [0, 0, -5, 0, 0, -1, 0, 0, 0, -6, -5]);
    design.addPosition("y1", [0, -14, 0, 0, 0, 0, 0, 0, 0, 0, -3]);

    design.addZone("reserve", 1, [10, 5, 0, 14, 9, 4]);
    design.addZone("reserve", 2, [10, 5, 0, 14, 9, 4]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	6);
    design.addCommand(0, ZRF.LITERAL,	0);	// Knight
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.LITERAL,	1);	// true
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.LITERAL,	0);	// false
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	2);	// $3
    design.addCommand(0, ZRF.FUNCTION,	21);	// position
    design.addCommand(0, ZRF.PARAM,	3);	// $4
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PARAM,	4);	// $5
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-4);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	6);
    design.addCommand(1, ZRF.LITERAL,	0);	// Knight
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	3);
    design.addCommand(1, ZRF.LITERAL,	1);	// true
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.LITERAL,	0);	// false
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	21);	// position
    design.addCommand(1, ZRF.PARAM,	2);	// $3
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PARAM,	3);	// $4
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-4);
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
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	6);
    design.addCommand(2, ZRF.LITERAL,	0);	// Knight
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.IF,	3);
    design.addCommand(2, ZRF.LITERAL,	1);	// true
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.LITERAL,	0);	// false
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	21);	// position
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PARAM,	4);	// $5
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-4);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	0);	// reserve
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.ON_BOARD_DIR,	10);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	10);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-11);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	2);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end


    design.addPiece("Knight", 0);
    design.addMove(0, 0, [2, 9, 11, 0, 0], 0);
    design.addMove(0, 0, [2, 6, 11, 0, 0], 0);
    design.addMove(0, 0, [5, 9, 11, 0, 0], 0);
    design.addMove(0, 0, [5, 7, 11, 0, 0], 0);
    design.addMove(0, 0, [3, 7, 11, 0, 0], 0);
    design.addMove(0, 0, [3, 8, 11, 0, 0], 0);
    design.addMove(0, 0, [4, 6, 11, 0, 0], 0);
    design.addMove(0, 0, [4, 8, 11, 0, 0], 0);

    design.addPiece("Bishop", 1);
    design.addMove(1, 1, [9, 11, 0, 0], 0);
    design.addMove(1, 1, [7, 11, 0, 0], 0);
    design.addMove(1, 1, [8, 11, 0, 0], 0);
    design.addMove(1, 1, [6, 11, 0, 0], 0);
    design.addMove(1, 2, [9, 9, 11, 0, 0], 0);
    design.addMove(1, 2, [7, 7, 11, 0, 0], 0);
    design.addMove(1, 2, [8, 8, 11, 0, 0], 0);
    design.addMove(1, 2, [6, 6, 11, 0, 0], 0);
    design.addMove(1, 3, [10], 0);

    design.addPiece("Rook", 2);
    design.addMove(2, 1, [2, 11, 0, 0], 0);
    design.addMove(2, 1, [5, 11, 0, 0], 0);
    design.addMove(2, 1, [3, 11, 0, 0], 0);
    design.addMove(2, 1, [4, 11, 0, 0], 0);
    design.addMove(2, 2, [2, 2, 11, 0, 0], 0);
    design.addMove(2, 2, [5, 5, 11, 0, 0], 0);
    design.addMove(2, 2, [3, 3, 11, 0, 0], 0);
    design.addMove(2, 2, [4, 4, 11, 0, 0], 0);
    design.addMove(2, 3, [10], 0);

    design.setup("White", "Knight", 11);
    design.setup("White", "Bishop", 12);
    design.setup("White", "Rook", 13);
    design.setup("Black", "Knight", 1);
    design.setup("Black", "Bishop", 2);
    design.setup("Black", "Rook", 3);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
 
    view.defPosition("x3", 0, 0, 68, 68);
    view.defPosition("a3", 68, 0, 68, 68);
    view.defPosition("b3", 136, 0, 68, 68);
    view.defPosition("c3", 204, 0, 68, 68);
    view.defPosition("y3", 272, 0, 68, 68);
    view.defPosition("x2", 0, 68, 68, 68);
    view.defPosition("a2", 68, 68, 68, 68);
    view.defPosition("b2", 136, 68, 68, 68);
    view.defPosition("c2", 204, 68, 68, 68);
    view.defPosition("y2", 272, 68, 68, 68);
    view.defPosition("x1", 0, 136, 68, 68);
    view.defPosition("a1", 68, 136, 68, 68);
    view.defPosition("b1", 136, 136, 68, 68);
    view.defPosition("c1", 204, 136, 68, 68);
    view.defPosition("y1", 272, 136, 68, 68);
}
