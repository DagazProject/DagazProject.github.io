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

    design.addDirection("z0");
    design.addDirection("z1");
    design.addDirection("z2");
    design.addDirection("z3");
    design.addDirection("z4");
    design.addDirection("z5");
    design.addDirection("z6");
    design.addDirection("z7");
    design.addDirection("z8");
    design.addDirection("z9");
    design.addDirection("zx");
    design.addDirection("zy");

    design.addPlayer("White", [6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5]);
    design.addPlayer("Black", [6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5]);

    design.addPosition("a3", [1, 10, 9, 18, 8, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [1, 10, 9, 18, 8, 7, -1, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [1, 10, 9, 18, 8, 7, -1, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [1, 10, 9, 18, 8, 7, -1, 0, 0, 0, 0, 0]);
    design.addPosition("a11", [1, 10, 9, 18, 8, 7, -1, 0, 0, 0, 0, 0]);
    design.addPosition("a13", [1, 10, 9, 18, 8, 7, -1, 0, 0, 0, 0, 0]);
    design.addPosition("a15", [1, 10, 9, 18, 8, 7, -1, 0, 0, 0, 0, 0]);
    design.addPosition("a17", [0, 0, 9, 18, 8, 7, -1, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [1, 11, 10, 19, 9, 0, 0, 0, 0, 0, -8, -7]);
    design.addPosition("b4", [1, 11, 10, 19, 9, 8, -1, 0, -9, 0, -8, -7]);
    design.addPosition("b6", [1, 11, 10, 19, 9, 8, -1, -10, -9, 0, -8, -7]);
    design.addPosition("b8", [1, 11, 10, 19, 9, 8, -1, -10, -9, 0, -8, -7]);
    design.addPosition("b10", [1, 11, 10, 19, 9, 8, -1, -10, -9, 0, -8, -7]);
    design.addPosition("b12", [1, 11, 10, 19, 9, 8, -1, -10, -9, 0, -8, -7]);
    design.addPosition("b14", [1, 11, 10, 19, 9, 8, -1, -10, -9, 0, -8, -7]);
    design.addPosition("b16", [1, 11, 10, 19, 9, 8, -1, -10, -9, 0, -8, 0]);
    design.addPosition("b18", [0, 0, 10, 19, 9, 8, -1, -10, -9, 0, 0, 0]);
    design.addPosition("c1", [1, 11, 10, 0, 0, 0, 0, 0, 0, 0, -9, -8]);
    design.addPosition("c3", [1, 11, 10, 19, 9, 0, -1, 0, -10, -18, -9, -8]);
    design.addPosition("c5", [1, 11, 10, 19, 9, 8, -1, -11, -10, -18, -9, -8]);
    design.addPosition("c7", [1, 11, 10, 19, 9, 8, -1, -11, -10, -18, -9, -8]);
    design.addPosition("c9", [1, 11, 10, 19, 9, 8, -1, -11, -10, -18, -9, -8]);
    design.addPosition("c11", [1, 11, 10, 19, 9, 8, -1, -11, -10, -18, -9, -8]);
    design.addPosition("c13", [1, 11, 10, 19, 9, 8, -1, -11, -10, -18, -9, -8]);
    design.addPosition("c15", [1, 11, 10, 19, 9, 8, -1, -11, -10, -18, -9, -8]);
    design.addPosition("c17", [1, 11, 10, 19, 9, 8, -1, -11, -10, -18, -9, 0]);
    design.addPosition("c19", [0, 0, 10, 19, 9, 8, -1, -11, -10, 0, 0, 0]);
    design.addPosition("d2", [1, 11, 10, 0, 0, 0, 0, 0, -10, -19, -9, -8]);
    design.addPosition("d4", [1, 11, 10, 18, 9, 0, -1, -11, -10, -19, -9, -8]);
    design.addPosition("d6", [1, 11, 10, 18, 9, 8, -1, -11, -10, -19, -9, -8]);
    design.addPosition("d8", [1, 11, 10, 18, 9, 8, -1, -11, -10, -19, -9, -8]);
    design.addPosition("d10", [1, 11, 10, 18, 9, 8, -1, -11, -10, -19, -9, -8]);
    design.addPosition("d12", [1, 11, 10, 18, 9, 8, -1, -11, -10, -19, -9, -8]);
    design.addPosition("d14", [1, 11, 10, 18, 9, 8, -1, -11, -10, -19, -9, -8]);
    design.addPosition("d16", [1, 11, 10, 18, 9, 8, -1, -11, -10, -19, -9, -8]);
    design.addPosition("d18", [1, 0, 10, 18, 9, 8, -1, -11, -10, -19, -9, 0]);
    design.addPosition("d20", [0, 0, 0, 0, 9, 8, -1, -11, -10, 0, 0, 0]);
    design.addPosition("e3", [1, 10, 9, 0, 0, 0, 0, 0, -10, -19, -9, -8]);
    design.addPosition("e5", [1, 10, 9, 0, 8, 0, -1, -11, -10, -19, -9, -8]);
    design.addPosition("e7", [1, 10, 9, 0, 8, 7, -1, -11, -10, -19, -9, -8]);
    design.addPosition("e9", [1, 10, 9, 0, 8, 7, -1, -11, -10, -19, -9, -8]);
    design.addPosition("e11", [1, 10, 9, 0, 8, 7, -1, -11, -10, -19, -9, -8]);
    design.addPosition("e13", [1, 10, 9, 0, 8, 7, -1, -11, -10, -19, -9, -8]);
    design.addPosition("e15", [1, 10, 9, 0, 8, 7, -1, -11, -10, -19, -9, -8]);
    design.addPosition("e17", [1, 0, 9, 0, 8, 7, -1, -11, -10, -19, -9, -8]);
    design.addPosition("e19", [0, 0, 0, 0, 8, 7, -1, -11, -10, -19, -9, 0]);
    design.addPosition("f4", [1, 0, 0, 0, 0, 0, 0, 0, -9, -18, -8, -7]);
    design.addPosition("f6", [1, 0, 0, 0, 0, 0, -1, -10, -9, -18, -8, -7]);
    design.addPosition("f8", [1, 0, 0, 0, 0, 0, -1, -10, -9, -18, -8, -7]);
    design.addPosition("f10", [1, 0, 0, 0, 0, 0, -1, -10, -9, -18, -8, -7]);
    design.addPosition("f12", [1, 0, 0, 0, 0, 0, -1, -10, -9, -18, -8, -7]);
    design.addPosition("f14", [1, 0, 0, 0, 0, 0, -1, -10, -9, -18, -8, -7]);
    design.addPosition("f16", [1, 0, 0, 0, 0, 0, -1, -10, -9, -18, -8, -7]);
    design.addPosition("f18", [0, 0, 0, 0, 0, 0, -1, -10, -9, -18, -8, 0]);

    design.addZone("promotion-zone", 1, [7, 16, 26, 36, 45, 53]);
    design.addZone("promotion-zone", 2, [0, 8, 17, 27, 37, 46]);
    design.addZone("fast-through", 1, [2, 11, 20, 30, 39, 48]);
    design.addZone("fast-through", 2, [5, 14, 23, 33, 42, 51]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// promotion-zone
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	7);
    design.addCommand(0, ZRF.PROMOTE,	1);	// Bishop
    design.addCommand(0, ZRF.PROMOTE,	2);	// Knight
    design.addCommand(0, ZRF.PROMOTE,	3);	// Rook
    design.addCommand(0, ZRF.PROMOTE,	4);	// Queen
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// promotion-zone
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	7);
    design.addCommand(1, ZRF.PROMOTE,	1);	// Bishop
    design.addCommand(1, ZRF.PROMOTE,	2);	// Knight
    design.addCommand(1, ZRF.PROMOTE,	3);	// Rook
    design.addCommand(1, ZRF.PROMOTE,	4);	// Queen
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.IN_ZONE,	1);	// fast-through
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	0);	// promotion-zone
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	7);
    design.addCommand(2, ZRF.PROMOTE,	1);	// Bishop
    design.addCommand(2, ZRF.PROMOTE,	2);	// Knight
    design.addCommand(2, ZRF.PROMOTE,	3);	// Rook
    design.addCommand(2, ZRF.PROMOTE,	4);	// Queen
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	5);	// last-to?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	0);	// Pawn
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	7);
    design.addCommand(7, ZRF.LITERAL,	3);	// Rook
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	3);
    design.addCommand(7, ZRF.LITERAL,	1);	// true
    design.addCommand(7, ZRF.JUMP,	2);
    design.addCommand(7, ZRF.LITERAL,	0);	// false
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.PARAM,	3);	// $4
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	4);	// $5
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	7);
    design.addCommand(8, ZRF.LITERAL,	3);	// Rook
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	3);
    design.addCommand(8, ZRF.LITERAL,	1);	// true
    design.addCommand(8, ZRF.JUMP,	2);
    design.addCommand(8, ZRF.LITERAL,	0);	// false
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.FUNCTION,	7);	// back
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0, 100);
    design.addMove(0, 0, [10], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 1, [0, 0], 0);
    design.addMove(0, 2, [11], 0);
    design.addMove(0, 2, [1], 0);
    design.addMove(0, 3, [4, 0, 0], 0);
    design.addMove(0, 3, [8, 0, 0], 0);

    design.addPiece("Bishop", 1, 330);
    design.addMove(1, 4, [1, 1], 0);
    design.addMove(1, 4, [3, 3], 0);
    design.addMove(1, 4, [5, 5], 0);
    design.addMove(1, 4, [7, 7], 0);
    design.addMove(1, 4, [9, 9], 0);
    design.addMove(1, 4, [11, 11], 0);

    design.addPiece("Knight", 2, 320);
    design.addMove(2, 5, [0, 11], 0);
    design.addMove(2, 5, [0, 1], 0);
    design.addMove(2, 5, [2, 1], 0);
    design.addMove(2, 5, [2, 3], 0);
    design.addMove(2, 5, [4, 3], 0);
    design.addMove(2, 5, [4, 5], 0);
    design.addMove(2, 5, [6, 5], 0);
    design.addMove(2, 5, [6, 7], 0);
    design.addMove(2, 5, [8, 7], 0);
    design.addMove(2, 5, [8, 9], 0);
    design.addMove(2, 5, [10, 9], 0);
    design.addMove(2, 5, [10, 11], 0);

    design.addPiece("Rook", 3, 500);
    design.addMove(3, 4, [0, 0], 0);
    design.addMove(3, 4, [2, 2], 0);
    design.addMove(3, 4, [4, 4], 0);
    design.addMove(3, 4, [6, 6], 0);
    design.addMove(3, 4, [8, 8], 0);
    design.addMove(3, 4, [10, 10], 0);

    design.addPiece("Queen", 4, 900);
    design.addMove(4, 4, [0, 0], 0);
    design.addMove(4, 4, [2, 2], 0);
    design.addMove(4, 4, [4, 4], 0);
    design.addMove(4, 4, [6, 6], 0);
    design.addMove(4, 4, [8, 8], 0);
    design.addMove(4, 4, [10, 10], 0);
    design.addMove(4, 4, [1, 1], 0);
    design.addMove(4, 4, [3, 3], 0);
    design.addMove(4, 4, [5, 5], 0);
    design.addMove(4, 4, [7, 7], 0);
    design.addMove(4, 4, [9, 9], 0);
    design.addMove(4, 4, [11, 11], 0);

    design.addPiece("King", 5, 20000);
    design.addMove(5, 6, [0], 0);
    design.addMove(5, 6, [1], 0);
    design.addMove(5, 6, [2], 0);
    design.addMove(5, 6, [3], 0);
    design.addMove(5, 6, [4], 0);
    design.addMove(5, 6, [5], 0);
    design.addMove(5, 6, [6], 0);
    design.addMove(5, 6, [7], 0);
    design.addMove(5, 6, [8], 0);
    design.addMove(5, 6, [9], 0);
    design.addMove(5, 6, [10], 0);
    design.addMove(5, 6, [11], 0);
    design.addMove(5, 7, [2, 2, 9, 3, 2], 0);
    design.addMove(5, 8, [10, 9], 0);

    design.setup("White", "Pawn", 1);
    design.setup("White", "Pawn", 10);
    design.setup("White", "Pawn", 19);
    design.setup("White", "Pawn", 29);
    design.setup("White", "Pawn", 38);
    design.setup("White", "Pawn", 47);
    design.setup("White", "Bishop", 8);
    design.setup("White", "Bishop", 17);
    design.setup("White", "Bishop", 18);
    design.setup("White", "Knight", 9);
    design.setup("White", "Knight", 28);
    design.setup("White", "Rook", 46);
    design.setup("White", "Rook", 0);
    design.setup("White", "Queen", 37);
    design.setup("White", "King", 27);
    design.setup("Black", "Pawn", 6);
    design.setup("Black", "Pawn", 15);
    design.setup("Black", "Pawn", 24);
    design.setup("Black", "Pawn", 34);
    design.setup("Black", "Pawn", 43);
    design.setup("Black", "Pawn", 52);
    design.setup("Black", "Bishop", 35);
    design.setup("Black", "Bishop", 45);
    design.setup("Black", "Bishop", 36);
    design.setup("Black", "Knight", 25);
    design.setup("Black", "Knight", 44);
    design.setup("Black", "Rook", 7);
    design.setup("Black", "Rook", 53);
    design.setup("Black", "Queen", 16);
    design.setup("Black", "King", 26);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a3", 52, 502, 56, 50);
    view.defPosition("a5", 52, 448, 56, 50);
    view.defPosition("a7", 52, 394, 56, 50);
    view.defPosition("a9", 52, 340, 56, 50);
    view.defPosition("a11", 52, 286, 56, 50);
    view.defPosition("a13", 52, 232, 56, 50);
    view.defPosition("a15", 52, 178, 56, 50);
    view.defPosition("a17", 52, 124, 56, 50);
    view.defPosition("b2", 97, 529, 56, 50);
    view.defPosition("b4", 97, 475, 56, 50);
    view.defPosition("b6", 97, 421, 56, 50);
    view.defPosition("b8", 97, 367, 56, 50);
    view.defPosition("b10", 97, 313, 56, 50);
    view.defPosition("b12", 97, 259, 56, 50);
    view.defPosition("b14", 97, 205, 56, 50);
    view.defPosition("b16", 97, 151, 56, 50);
    view.defPosition("b18", 97, 97, 56, 50);
    view.defPosition("c1", 143, 556, 54, 50);
    view.defPosition("c3", 143, 502, 54, 50);
    view.defPosition("c5", 143, 448, 54, 50);
    view.defPosition("c7", 143, 394, 54, 50);
    view.defPosition("c9", 143, 340, 54, 50);
    view.defPosition("c11", 143, 286, 54, 50);
    view.defPosition("c13", 143, 232, 54, 50);
    view.defPosition("c15", 143, 178, 54, 50);
    view.defPosition("c17", 143, 124, 54, 50);
    view.defPosition("c19", 143, 70, 54, 50);
    view.defPosition("d2", 188, 529, 54, 50);
    view.defPosition("d4", 188, 475, 54, 50);
    view.defPosition("d6", 188, 421, 54, 50);
    view.defPosition("d8", 188, 367, 54, 50);
    view.defPosition("d10", 188, 313, 54, 50);
    view.defPosition("d12", 188, 259, 54, 50);
    view.defPosition("d14", 188, 205, 54, 50);
    view.defPosition("d16", 188, 151, 54, 50);
    view.defPosition("d18", 188, 97, 54, 50);
    view.defPosition("d20", 188, 43, 54, 50);
    view.defPosition("e3", 232, 502, 56, 50);
    view.defPosition("e5", 232, 448, 56, 50);
    view.defPosition("e7", 232, 394, 56, 50);
    view.defPosition("e9", 232, 340, 56, 50);
    view.defPosition("e11", 232, 286, 56, 50);
    view.defPosition("e13", 232, 232, 56, 50);
    view.defPosition("e15", 232, 178, 56, 50);
    view.defPosition("e17", 232, 124, 56, 50);
    view.defPosition("e19", 232, 70, 56, 50);
    view.defPosition("f4", 277, 475, 56, 50);
    view.defPosition("f6", 277, 421, 56, 50);
    view.defPosition("f8", 277, 367, 56, 50);
    view.defPosition("f10", 277, 313, 56, 50);
    view.defPosition("f12", 277, 259, 56, 50);
    view.defPosition("f14", 277, 205, 56, 50);
    view.defPosition("f16", 277, 151, 56, 50);
    view.defPosition("f18", 277, 97, 56, 50);
}
