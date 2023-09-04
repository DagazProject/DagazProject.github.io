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
    design.checkVersion("animate-drops", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("South", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("North", [6, 7, 5, 4, 3, 2, 0, 1]);

    design.addPosition("a9", [8, 7, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b9", [8, 7, 6, 1, -1, 0, 0, 0]);
    design.addPosition("c9", [8, 7, 6, 1, -1, 0, 0, 0]);
    design.addPosition("d9", [8, 7, 6, 1, -1, 0, 0, 0]);
    design.addPosition("e9", [8, 7, 6, 1, -1, 0, 0, 0]);
    design.addPosition("f9", [8, 7, 6, 1, -1, 0, 0, 0]);
    design.addPosition("g9", [0, 7, 6, 0, -1, 0, 0, 0]);
    design.addPosition("a8", [8, 7, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b8", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("c8", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("d8", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("e8", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("f8", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("g8", [0, 7, 6, 0, -1, 0, -8, -7]);
    design.addPosition("a7", [8, 7, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b7", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("c7", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("d7", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("e7", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("f7", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("g7", [0, 7, 6, 0, -1, 0, -8, -7]);
    design.addPosition("a6", [8, 7, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b6", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("c6", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("d6", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("e6", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("f6", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("g6", [0, 7, 6, 0, -1, 0, -8, -7]);
    design.addPosition("a5", [8, 7, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b5", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("c5", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("d5", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("e5", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("f5", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("g5", [0, 7, 6, 0, -1, 0, -8, -7]);
    design.addPosition("a4", [8, 7, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b4", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("c4", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("d4", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("e4", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("f4", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("g4", [0, 7, 6, 0, -1, 0, -8, -7]);
    design.addPosition("a3", [8, 7, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b3", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("c3", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("d3", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("e3", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("f3", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("g3", [0, 7, 6, 0, -1, 0, -8, -7]);
    design.addPosition("a2", [8, 7, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b2", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("c2", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("d2", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("e2", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("f2", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("g2", [0, 7, 6, 0, -1, 0, -8, -7]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -6, -8, -7]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -6, -8, -7]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -6, -8, -7]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -6, -8, -7]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -6, -8, -7]);
    design.addPosition("g1", [0, 0, 0, 0, -1, 0, -8, -7]);

    design.addZone("promotion-zone", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    design.addZone("promotion-zone", 2, [56, 57, 58, 59, 60, 61, 62, 49, 50, 51, 52, 53, 54, 55, 42, 43, 44, 45, 46, 47, 48]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// promotion-zone
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	0);	// King
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// promotion-zone
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	0);	// King
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	0);	// promotion-zone
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PROMOTE,	2);	// Gold
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.IN_ZONE,	0);	// promotion-zone
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PROMOTE,	2);	// Gold
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	15);
    design.addCommand(4, ZRF.IN_ZONE,	0);	// promotion-zone
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	6);
    design.addCommand(4, ZRF.FORK,	4);
    design.addCommand(4, ZRF.PROMOTE,	4);	// Rook
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.JUMP,	4);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-16);
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-5);
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.IN_ZONE,	0);	// promotion-zone
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.PROMOTE,	4);	// Rook
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.JUMP,	2);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.IN_ZONE,	0);	// promotion-zone
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	4);
    design.addCommand(6, ZRF.PROMOTE,	6);	// Knight
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.JUMP,	2);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.IN_ZONE,	0);	// promotion-zone
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	4);
    design.addCommand(7, ZRF.PROMOTE,	6);	// Knight
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.JUMP,	2);
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	15);
    design.addCommand(8, ZRF.IN_ZONE,	0);	// promotion-zone
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	6);
    design.addCommand(8, ZRF.FORK,	4);
    design.addCommand(8, ZRF.PROMOTE,	8);	// Bishop
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end
    design.addCommand(8, ZRF.JUMP,	4);
    design.addCommand(8, ZRF.FORK,	3);
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.JUMP,	-16);
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	4);
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.JUMP,	-5);
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.IN_ZONE,	0);	// promotion-zone
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	4);
    design.addCommand(9, ZRF.PROMOTE,	8);	// Bishop
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.JUMP,	2);
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// capture-type
    design.addPriority(1);			// normal-type

    design.addPiece("King", 0, 1000);
    design.addMove(0, 0, [7], 1);
    design.addMove(0, 0, [6], 1);
    design.addMove(0, 0, [1], 1);
    design.addMove(0, 0, [0], 1);
    design.addMove(0, 0, [4], 1);
    design.addMove(0, 0, [2], 1);
    design.addMove(0, 0, [3], 1);
    design.addMove(0, 0, [5], 1);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 1, [0], 0);
    design.addMove(0, 1, [4], 0);
    design.addMove(0, 1, [2], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 1, [5], 0);

    design.addPiece("Pawn", 1, 2);
    design.addMove(1, 2, [7], 1);
    design.addMove(1, 3, [6], 0);
    design.addMove(1, 3, [5], 0);

    design.addPiece("Gold", 2, 14);
    design.addMove(2, 2, [7], 1);
    design.addMove(2, 2, [6], 1);
    design.addMove(2, 2, [1], 1);
    design.addMove(2, 2, [5], 1);
    design.addMove(2, 2, [4], 1);
    design.addMove(2, 2, [3], 1);
    design.addMove(2, 3, [7], 0);
    design.addMove(2, 3, [6], 0);
    design.addMove(2, 3, [1], 0);
    design.addMove(2, 3, [5], 0);
    design.addMove(2, 3, [4], 0);
    design.addMove(2, 3, [3], 0);

    design.addPiece("Raven", 3, 30);
    design.addMove(3, 4, [7, 7], 1);
    design.addMove(3, 4, [3, 3], 1);
    design.addMove(3, 4, [4, 4], 1);
    design.addMove(3, 5, [7, 7], 0);
    design.addMove(3, 5, [3, 3], 0);
    design.addMove(3, 5, [4, 4], 0);

    design.addPiece("Rook", 4, 40);
    design.addMove(4, 4, [7, 7], 1);
    design.addMove(4, 4, [3, 3], 1);
    design.addMove(4, 4, [4, 4], 1);
    design.addMove(4, 4, [1, 1], 1);
    design.addMove(4, 5, [7, 7], 0);
    design.addMove(4, 5, [3, 3], 0);
    design.addMove(4, 5, [4, 4], 0);
    design.addMove(4, 5, [1, 1], 0);

    design.addPiece("Squire", 5, 8);
    design.addMove(5, 6, [7, 6], 1);
    design.addMove(5, 6, [4, 6], 1);
    design.addMove(5, 6, [7, 5], 1);
    design.addMove(5, 6, [3, 5], 1);
    design.addMove(5, 7, [7, 6], 0);
    design.addMove(5, 7, [4, 6], 0);
    design.addMove(5, 7, [7, 5], 0);
    design.addMove(5, 7, [3, 5], 0);

    design.addPiece("Knight", 6, 16);
    design.addMove(6, 6, [7, 6], 1);
    design.addMove(6, 6, [4, 6], 1);
    design.addMove(6, 6, [7, 5], 1);
    design.addMove(6, 6, [4, 2], 1);
    design.addMove(6, 6, [1, 2], 1);
    design.addMove(6, 6, [3, 5], 1);
    design.addMove(6, 6, [1, 0], 1);
    design.addMove(6, 6, [3, 0], 1);
    design.addMove(6, 7, [7, 6], 0);
    design.addMove(6, 7, [4, 6], 0);
    design.addMove(6, 7, [7, 5], 0);
    design.addMove(6, 7, [4, 2], 0);
    design.addMove(6, 7, [1, 2], 0);
    design.addMove(6, 7, [3, 5], 0);
    design.addMove(6, 7, [1, 0], 0);
    design.addMove(6, 7, [3, 0], 0);

    design.addPiece("Priest", 7, 20);
    design.addMove(7, 8, [6, 6], 1);
    design.addMove(7, 8, [5, 5], 1);
    design.addMove(7, 9, [6, 6], 0);
    design.addMove(7, 9, [5, 5], 0);

    design.addPiece("Bishop", 8, 30);
    design.addMove(8, 8, [6, 6], 1);
    design.addMove(8, 8, [0, 0], 1);
    design.addMove(8, 8, [5, 5], 1);
    design.addMove(8, 8, [2, 2], 1);
    design.addMove(8, 9, [6, 6], 0);
    design.addMove(8, 9, [0, 0], 0);
    design.addMove(8, 9, [5, 5], 0);
    design.addMove(8, 9, [2, 2], 0);

    design.setup("South", "Pawn", 49);
    design.setup("South", "Pawn", 50);
    design.setup("South", "Pawn", 51);
    design.setup("South", "Pawn", 52);
    design.setup("South", "Pawn", 53);
    design.setup("South", "Pawn", 54);
    design.setup("South", "Pawn", 55);
    design.setup("South", "Squire", 58);
    design.setup("South", "Squire", 61);
    design.setup("South", "Priest", 57);
    design.setup("South", "Priest", 60);
    design.setup("South", "Raven", 56);
    design.setup("South", "Raven", 62);
    design.setup("South", "King", 59);
    design.setup("North", "Pawn", 7);
    design.setup("North", "Pawn", 8);
    design.setup("North", "Pawn", 9);
    design.setup("North", "Pawn", 10);
    design.setup("North", "Pawn", 11);
    design.setup("North", "Pawn", 12);
    design.setup("North", "Pawn", 13);
    design.setup("North", "Squire", 2);
    design.setup("North", "Squire", 5);
    design.setup("North", "Priest", 1);
    design.setup("North", "Priest", 4);
    design.setup("North", "Raven", 0);
    design.setup("North", "Raven", 6);
    design.setup("North", "King", 3);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("SouthKing", "South King");
    view.defPiece("NorthKing", "North King");
    view.defPiece("SouthPawn", "South Pawn");
    view.defPiece("NorthPawn", "North Pawn");
    view.defPiece("SouthGold", "South Gold");
    view.defPiece("NorthGold", "North Gold");
    view.defPiece("SouthRaven", "South Raven");
    view.defPiece("NorthRaven", "North Raven");
    view.defPiece("SouthRook", "South Rook");
    view.defPiece("NorthRook", "North Rook");
    view.defPiece("SouthSquire", "South Squire");
    view.defPiece("NorthSquire", "North Squire");
    view.defPiece("SouthKnight", "South Knight");
    view.defPiece("NorthKnight", "North Knight");
    view.defPiece("SouthPriest", "South Priest");
    view.defPiece("NorthPriest", "North Priest");
    view.defPiece("SouthBishop", "South Bishop");
    view.defPiece("NorthBishop", "North Bishop");
 
    view.defPosition("a9", 9, 15, 41, 46);
    view.defPosition("b9", 50, 15, 41, 46);
    view.defPosition("c9", 91, 15, 41, 46);
    view.defPosition("d9", 132, 15, 41, 46);
    view.defPosition("e9", 173, 15, 41, 46);
    view.defPosition("f9", 214, 15, 41, 46);
    view.defPosition("g9", 255, 15, 41, 46);
    view.defPosition("a8", 9, 61, 41, 46);
    view.defPosition("b8", 50, 61, 41, 46);
    view.defPosition("c8", 91, 61, 41, 46);
    view.defPosition("d8", 132, 61, 41, 46);
    view.defPosition("e8", 173, 61, 41, 46);
    view.defPosition("f8", 214, 61, 41, 46);
    view.defPosition("g8", 255, 61, 41, 46);
    view.defPosition("a7", 9, 107, 41, 46);
    view.defPosition("b7", 50, 107, 41, 46);
    view.defPosition("c7", 91, 107, 41, 46);
    view.defPosition("d7", 132, 107, 41, 46);
    view.defPosition("e7", 173, 107, 41, 46);
    view.defPosition("f7", 214, 107, 41, 46);
    view.defPosition("g7", 255, 107, 41, 46);
    view.defPosition("a6", 9, 153, 41, 46);
    view.defPosition("b6", 50, 153, 41, 46);
    view.defPosition("c6", 91, 153, 41, 46);
    view.defPosition("d6", 132, 153, 41, 46);
    view.defPosition("e6", 173, 153, 41, 46);
    view.defPosition("f6", 214, 153, 41, 46);
    view.defPosition("g6", 255, 153, 41, 46);
    view.defPosition("a5", 9, 199, 41, 46);
    view.defPosition("b5", 50, 199, 41, 46);
    view.defPosition("c5", 91, 199, 41, 46);
    view.defPosition("d5", 132, 199, 41, 46);
    view.defPosition("e5", 173, 199, 41, 46);
    view.defPosition("f5", 214, 199, 41, 46);
    view.defPosition("g5", 255, 199, 41, 46);
    view.defPosition("a4", 9, 245, 41, 46);
    view.defPosition("b4", 50, 245, 41, 46);
    view.defPosition("c4", 91, 245, 41, 46);
    view.defPosition("d4", 132, 245, 41, 46);
    view.defPosition("e4", 173, 245, 41, 46);
    view.defPosition("f4", 214, 245, 41, 46);
    view.defPosition("g4", 255, 245, 41, 46);
    view.defPosition("a3", 9, 291, 41, 46);
    view.defPosition("b3", 50, 291, 41, 46);
    view.defPosition("c3", 91, 291, 41, 46);
    view.defPosition("d3", 132, 291, 41, 46);
    view.defPosition("e3", 173, 291, 41, 46);
    view.defPosition("f3", 214, 291, 41, 46);
    view.defPosition("g3", 255, 291, 41, 46);
    view.defPosition("a2", 9, 337, 41, 46);
    view.defPosition("b2", 50, 337, 41, 46);
    view.defPosition("c2", 91, 337, 41, 46);
    view.defPosition("d2", 132, 337, 41, 46);
    view.defPosition("e2", 173, 337, 41, 46);
    view.defPosition("f2", 214, 337, 41, 46);
    view.defPosition("g2", 255, 337, 41, 46);
    view.defPosition("a1", 9, 383, 41, 46);
    view.defPosition("b1", 50, 383, 41, 46);
    view.defPosition("c1", 91, 383, 41, 46);
    view.defPosition("d1", 132, 383, 41, 46);
    view.defPosition("e1", 173, 383, 41, 46);
    view.defPosition("f1", 214, 383, 41, 46);
    view.defPosition("g1", 255, 383, 41, 46);
}
