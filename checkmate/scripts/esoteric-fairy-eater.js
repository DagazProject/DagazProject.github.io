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

Dagaz.Model.WIDTH  = 9;
Dagaz.Model.HEIGHT = 9;

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-drops", "false");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("shared-pieces", "true");

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("n");

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [5, 7, 6, 3, 4, 0, 2, 1]);

    design.addPosition("a9", [10, 9, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("c9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("d9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("e9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("f9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("g9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("h9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("i9", [0, 9, 8, 0, -1, 0, 0, 0]);
    design.addPosition("a8", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i8", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a7", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i7", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a6", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i6", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a5", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i5", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a4", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i4", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a3", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i3", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a2", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i2", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("i1", [0, 0, 0, 0, -1, 0, -10, -9]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("promotion-rank", 1, [27, 28, 29, 30, 31, 32, 33, 34, 35, 18, 19, 20, 21, 22, 23, 24, 25, 26, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
    design.addZone("promotion-rank", 2, [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80]);
    design.addZone("home-zone", 1, [27, 28, 29, 30, 31, 32, 33, 34, 35, 18, 19, 20, 21, 22, 23, 24, 25, 26, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 1, 2, 3, 4, 5, 6, 7, 8, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80]);
    design.addZone("home-zone", 2, [27, 28, 29, 30, 31, 32, 33, 34, 35, 18, 19, 20, 21, 22, 23, 24, 25, 26, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 1, 2, 3, 4, 5, 6, 7, 8, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// promotion-rank
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	4);	// Ghost
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	1);	// UnknownPawn
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	3);	// UnknownShield
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	5);	// UnknownGhost
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	7);	// UnknownChaos
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	9);	// UnknownReaper
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	11);	// UnknownKnightrider
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	13);	// UnknownKing
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// promotion-rank
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	4);	// Ghost
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// promotion-rank
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PROMOTE,	4);	// Ghost
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	3);
    design.addCommand(2, ZRF.PROMOTE,	0);	// Pawn
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	1);	// UnknownPawn
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	3);	// UnknownShield
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	5);	// UnknownGhost
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	7);	// UnknownChaos
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	9);	// UnknownReaper
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	11);	// UnknownKnightrider
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	13);	// UnknownKing
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(4, ZRF.LITERAL,	1);	// UnknownPawn
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	3);	// UnknownShield
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	5);	// UnknownGhost
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	7);	// UnknownChaos
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	9);	// UnknownReaper
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	11);	// UnknownKnightrider
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	13);	// UnknownKing
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PROMOTE,	2);	// Shield
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	9);
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	3);	// $4
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-10);
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	1);	// UnknownPawn
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	3);	// UnknownShield
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	5);	// UnknownGhost
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	7);	// UnknownChaos
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	9);	// UnknownReaper
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	11);	// UnknownKnightrider
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	13);	// UnknownKing
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PROMOTE,	4);	// Ghost
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	1);	// UnknownPawn
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	3);	// UnknownShield
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	5);	// UnknownGhost
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	7);	// UnknownChaos
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	9);	// UnknownReaper
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	11);	// UnknownKnightrider
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	13);	// UnknownKing
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PROMOTE,	6);	// Chaos
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PROMOTE,	8);	// Reaper
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.PROMOTE,	10);	// Knightrider
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.PARAM,	0);	// $1
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.IF,	29);
    design.addCommand(12, ZRF.LITERAL,	0);	// Pawn
    design.addCommand(12, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.LITERAL,	2);	// Shield
    design.addCommand(12, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.LITERAL,	4);	// Ghost
    design.addCommand(12, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.LITERAL,	6);	// Chaos
    design.addCommand(12, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.LITERAL,	8);	// Reaper
    design.addCommand(12, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.LITERAL,	10);	// Knightrider
    design.addCommand(12, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.LITERAL,	12);	// King
    design.addCommand(12, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.PROMOTE,	12);	// King
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0, 800);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [5], 0);

    design.addPiece("UnknownPawn", 1, 0);
    design.addMove(1, 2, [], 0);

    design.addPiece("Shield", 2, 4500);
    design.addMove(2, 3, [7], 0);
    design.addMove(2, 3, [1], 0);
    design.addMove(2, 4, [4, 4], 0);
    design.addMove(2, 4, [3, 3], 0);

    design.addPiece("UnknownShield", 3, 0);
    design.addMove(3, 5, [], 0);

    design.addPiece("Ghost", 4, 3200);
    design.addMove(4, 6, [7, 7, 7, 7], 0);
    design.addMove(4, 6, [6, 6, 6, 6], 0);
    design.addMove(4, 6, [3, 3, 3, 3], 0);
    design.addMove(4, 6, [5, 5, 5, 5], 0);
    design.addMove(4, 6, [4, 4, 4, 4], 0);
    design.addMove(4, 6, [2, 2, 2, 2], 0);
    design.addMove(4, 6, [1, 1, 1, 1], 0);
    design.addMove(4, 6, [0, 0, 0, 0], 0);

    design.addPiece("UnknownGhost", 5, 0);
    design.addMove(5, 7, [], 0);

    design.addPiece("Chaos", 6, 6800);
    design.addMove(6, 8, [7, 6], 0);
    design.addMove(6, 8, [7, 5], 0);
    design.addMove(6, 8, [1, 2], 0);
    design.addMove(6, 8, [1, 0], 0);
    design.addMove(6, 8, [4, 6], 0);
    design.addMove(6, 8, [4, 2], 0);
    design.addMove(6, 8, [3, 5], 0);
    design.addMove(6, 8, [3, 0], 0);
    design.addMove(6, 4, [6, 6], 0);
    design.addMove(6, 4, [5, 5], 0);
    design.addMove(6, 4, [2, 2], 0);
    design.addMove(6, 4, [0, 0], 0);

    design.addPiece("UnknownChaos", 7, 0);
    design.addMove(7, 9, [], 0);

    design.addPiece("Reaper", 8, 8450);
    design.addMove(8, 8, [7, 6], 0);
    design.addMove(8, 8, [7, 5], 0);
    design.addMove(8, 8, [1, 2], 0);
    design.addMove(8, 8, [1, 0], 0);
    design.addMove(8, 8, [4, 6], 0);
    design.addMove(8, 8, [4, 2], 0);
    design.addMove(8, 8, [3, 5], 0);
    design.addMove(8, 8, [3, 0], 0);
    design.addMove(8, 4, [7, 7], 0);
    design.addMove(8, 4, [3, 3], 0);
    design.addMove(8, 4, [4, 4], 0);
    design.addMove(8, 4, [1, 1], 0);

    design.addPiece("UnknownReaper", 9, 0);
    design.addMove(9, 10, [], 0);

    design.addPiece("Knightrider", 10, 3500);
    design.addMove(10, 6, [7, 6, 7, 6], 0);
    design.addMove(10, 6, [7, 5, 7, 5], 0);
    design.addMove(10, 6, [1, 2, 1, 2], 0);
    design.addMove(10, 6, [1, 0, 1, 0], 0);
    design.addMove(10, 6, [4, 6, 4, 6], 0);
    design.addMove(10, 6, [4, 2, 4, 2], 0);
    design.addMove(10, 6, [3, 5, 3, 5], 0);
    design.addMove(10, 6, [3, 0, 3, 0], 0);

    design.addPiece("UnknownKnightrider", 11, 0);
    design.addMove(11, 11, [], 0);

    design.addPiece("King", 12, 600000);
    design.addMove(12, 12, [7], 0);
    design.addMove(12, 12, [1], 0);
    design.addMove(12, 12, [4], 0);
    design.addMove(12, 12, [3], 0);
    design.addMove(12, 12, [6], 0);
    design.addMove(12, 12, [2], 0);
    design.addMove(12, 12, [5], 0);
    design.addMove(12, 12, [0], 0);

    design.addPiece("UnknownKing", 13, 0);
    design.addMove(13, 13, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("WhiteBoard", 0, 0, undefined, [0]);
    view.defBoard("BlackBoard", 0, 0, undefined, [1]);
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteUnknownPawn", "White UnknownPawn");
    view.defPiece("BlackUnknownPawn", "Black UnknownPawn");
    view.defPiece("WhiteShield", "White Shield");
    view.defPiece("BlackShield", "Black Shield");
    view.defPiece("WhiteUnknownShield", "White UnknownShield");
    view.defPiece("BlackUnknownShield", "Black UnknownShield");
    view.defPiece("WhiteGhost", "White Ghost");
    view.defPiece("BlackGhost", "Black Ghost");
    view.defPiece("WhiteUnknownGhost", "White UnknownGhost");
    view.defPiece("BlackUnknownGhost", "Black UnknownGhost");
    view.defPiece("WhiteChaos", "White Chaos");
    view.defPiece("BlackChaos", "Black Chaos");
    view.defPiece("WhiteUnknownChaos", "White UnknownChaos");
    view.defPiece("BlackUnknownChaos", "Black UnknownChaos");
    view.defPiece("WhiteReaper", "White Reaper");
    view.defPiece("BlackReaper", "Black Reaper");
    view.defPiece("WhiteUnknownReaper", "White UnknownReaper");
    view.defPiece("BlackUnknownReaper", "Black UnknownReaper");
    view.defPiece("WhiteKnightrider", "White Knightrider");
    view.defPiece("BlackKnightrider", "Black Knightrider");
    view.defPiece("WhiteUnknownKnightrider", "White UnknownKnightrider");
    view.defPiece("BlackUnknownKnightrider", "Black UnknownKnightrider");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("WhiteUnknownKing", "White UnknownKing");
    view.defPiece("BlackUnknownKing", "Black UnknownKing");
 
    view.defPosition("a9", 17, 17, 65, 65);
    view.defPosition("b9", 82, 17, 65, 65);
    view.defPosition("c9", 147, 17, 65, 65);
    view.defPosition("d9", 212, 17, 65, 65);
    view.defPosition("e9", 277, 17, 65, 65);
    view.defPosition("f9", 342, 17, 65, 65);
    view.defPosition("g9", 407, 17, 65, 65);
    view.defPosition("h9", 472, 17, 65, 65);
    view.defPosition("i9", 537, 17, 65, 65);
    view.defPosition("a8", 17, 82, 65, 65);
    view.defPosition("b8", 82, 82, 65, 65);
    view.defPosition("c8", 147, 82, 65, 65);
    view.defPosition("d8", 212, 82, 65, 65);
    view.defPosition("e8", 277, 82, 65, 65);
    view.defPosition("f8", 342, 82, 65, 65);
    view.defPosition("g8", 407, 82, 65, 65);
    view.defPosition("h8", 472, 82, 65, 65);
    view.defPosition("i8", 537, 82, 65, 65);
    view.defPosition("a7", 17, 147, 65, 65);
    view.defPosition("b7", 82, 147, 65, 65);
    view.defPosition("c7", 147, 147, 65, 65);
    view.defPosition("d7", 212, 147, 65, 65);
    view.defPosition("e7", 277, 147, 65, 65);
    view.defPosition("f7", 342, 147, 65, 65);
    view.defPosition("g7", 407, 147, 65, 65);
    view.defPosition("h7", 472, 147, 65, 65);
    view.defPosition("i7", 537, 147, 65, 65);
    view.defPosition("a6", 17, 212, 65, 65);
    view.defPosition("b6", 82, 212, 65, 65);
    view.defPosition("c6", 147, 212, 65, 65);
    view.defPosition("d6", 212, 212, 65, 65);
    view.defPosition("e6", 277, 212, 65, 65);
    view.defPosition("f6", 342, 212, 65, 65);
    view.defPosition("g6", 407, 212, 65, 65);
    view.defPosition("h6", 472, 212, 65, 65);
    view.defPosition("i6", 537, 212, 65, 65);
    view.defPosition("a5", 17, 277, 65, 65);
    view.defPosition("b5", 82, 277, 65, 65);
    view.defPosition("c5", 147, 277, 65, 65);
    view.defPosition("d5", 212, 277, 65, 65);
    view.defPosition("e5", 277, 277, 65, 65);
    view.defPosition("f5", 342, 277, 65, 65);
    view.defPosition("g5", 407, 277, 65, 65);
    view.defPosition("h5", 472, 277, 65, 65);
    view.defPosition("i5", 537, 277, 65, 65);
    view.defPosition("a4", 17, 342, 65, 65);
    view.defPosition("b4", 82, 342, 65, 65);
    view.defPosition("c4", 147, 342, 65, 65);
    view.defPosition("d4", 212, 342, 65, 65);
    view.defPosition("e4", 277, 342, 65, 65);
    view.defPosition("f4", 342, 342, 65, 65);
    view.defPosition("g4", 407, 342, 65, 65);
    view.defPosition("h4", 472, 342, 65, 65);
    view.defPosition("i4", 537, 342, 65, 65);
    view.defPosition("a3", 17, 407, 65, 65);
    view.defPosition("b3", 82, 407, 65, 65);
    view.defPosition("c3", 147, 407, 65, 65);
    view.defPosition("d3", 212, 407, 65, 65);
    view.defPosition("e3", 277, 407, 65, 65);
    view.defPosition("f3", 342, 407, 65, 65);
    view.defPosition("g3", 407, 407, 65, 65);
    view.defPosition("h3", 472, 407, 65, 65);
    view.defPosition("i3", 537, 407, 65, 65);
    view.defPosition("a2", 17, 472, 65, 65);
    view.defPosition("b2", 82, 472, 65, 65);
    view.defPosition("c2", 147, 472, 65, 65);
    view.defPosition("d2", 212, 472, 65, 65);
    view.defPosition("e2", 277, 472, 65, 65);
    view.defPosition("f2", 342, 472, 65, 65);
    view.defPosition("g2", 407, 472, 65, 65);
    view.defPosition("h2", 472, 472, 65, 65);
    view.defPosition("i2", 537, 472, 65, 65);
    view.defPosition("a1", 17, 537, 65, 65);
    view.defPosition("b1", 82, 537, 65, 65);
    view.defPosition("c1", 147, 537, 65, 65);
    view.defPosition("d1", 212, 537, 65, 65);
    view.defPosition("e1", 277, 537, 65, 65);
    view.defPosition("f1", 342, 537, 65, 65);
    view.defPosition("g1", 407, 537, 65, 65);
    view.defPosition("h1", 472, 537, 65, 65);
    view.defPosition("i1", 537, 537, 65, 65);

    view.defPopup("Promote", 125, 100);
    view.defPopupPosition("X1", 10, 7, 68, 68);
    view.defPopupPosition("X2", 80, 7, 68, 68);
    view.defPopupPosition("X3", 150, 7, 68, 68);
    view.defPopupPosition("X4", 220, 7, 68, 68);
    view.defPopupPosition("X5", 290, 7, 68, 68);
}
