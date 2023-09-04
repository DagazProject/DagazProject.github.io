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
    design.checkVersion("show-captures", "false");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("nx"); // 7
    design.addDirection("n");  // 8
    design.addDirection("wr"); // 9
    design.addDirection("br"); // 10

    design.addPlayer("White", [6, 8, 5, 4, 3, 2, 0, 7, 1, 9, 10]);
    design.addPlayer("Black", [5, 8, 6, 3, 4, 0, 2, 7, 1, 10, 9]);

    design.addPosition("a8", [9, 8, 0, 1, 0, 0, 0, 1, 0, 72, 64]);
    design.addPosition("b8", [9, 8, 7, 1, -1, 0, 0, 1, 0, 0, 0]);
    design.addPosition("c8", [9, 8, 7, 1, -1, 0, 0, 1, 0, 0, 0]);
    design.addPosition("d8", [9, 8, 7, 1, -1, 0, 0, 1, 0, 0, 0]);
    design.addPosition("e8", [9, 8, 7, 1, -1, 0, 0, 1, 0, 0, 0]);
    design.addPosition("f8", [9, 8, 7, 1, -1, 0, 0, 1, 0, 0, 0]);
    design.addPosition("g8", [9, 8, 7, 1, -1, 0, 0, 1, 0, 0, 0]);
    design.addPosition("h8", [0, 8, 7, 0, -1, 0, 0, 1, 0, 0, 0]);
    design.addPosition("a7", [9, 8, 0, 1, 0, -7, 0, 1, -8, 0, 0]);
    design.addPosition("b7", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("c7", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("d7", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("e7", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("f7", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("g7", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("h7", [0, 8, 7, 0, -1, 0, -9, 1, -8, 0, 0]);
    design.addPosition("a6", [9, 8, 0, 1, 0, -7, 0, 1, -8, 0, 0]);
    design.addPosition("b6", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("c6", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("d6", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("e6", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("f6", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("g6", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("h6", [0, 8, 7, 0, -1, 0, -9, 1, -8, 0, 0]);
    design.addPosition("a5", [9, 8, 0, 1, 0, -7, 0, 1, -8, 0, 0]);
    design.addPosition("b5", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("c5", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("d5", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("e5", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("f5", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("g5", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("h5", [0, 8, 7, 0, -1, 0, -9, 1, -8, 0, 0]);
    design.addPosition("a4", [9, 8, 0, 1, 0, -7, 0, 1, -8, 0, 0]);
    design.addPosition("b4", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("c4", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("d4", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("e4", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("f4", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("g4", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("h4", [0, 8, 7, 0, -1, 0, -9, 1, -8, 0, 0]);
    design.addPosition("a3", [9, 8, 0, 1, 0, -7, 0, 1, -8, 0, 0]);
    design.addPosition("b3", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("c3", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("d3", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("e3", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("f3", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("g3", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("h3", [0, 8, 7, 0, -1, 0, -9, 1, -8, 0, 0]);
    design.addPosition("a2", [9, 8, 0, 1, 0, -7, 0, 1, -8, 0, 0]);
    design.addPosition("b2", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("c2", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("d2", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("e2", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("f2", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("g2", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("h2", [0, 8, 7, 0, -1, 0, -9, 1, -8, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -7, 0, 1, -8, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("h1", [0, 0, 0, 0, -1, 0, -9, 0, -8, 0, 0]);
    design.addPosition("a9", [0, 0, 0, 0, 0, 0, 0, -64, 0, 0, 1]);
    design.addPosition("b9", [0, 0, 0, 0, 0, 0, 0, -65, 0, 0, 1]);
    design.addPosition("c9", [0, 0, 0, 0, 0, 0, 0, -66, 0, 0, 1]);
    design.addPosition("d9", [0, 0, 0, 0, 0, 0, 0, -67, 0, 0, 1]);
    design.addPosition("e9", [0, 0, 0, 0, 0, 0, 0, -68, 0, 0, 1]);
    design.addPosition("f9", [0, 0, 0, 0, 0, 0, 0, -69, 0, 0, 1]);
    design.addPosition("g9", [0, 0, 0, 0, 0, 0, 0, -70, 0, 0, 1]);
    design.addPosition("h9", [0, 0, 0, 0, 0, 0, 0, -71, 0, 0, 0]);
    design.addPosition("a0", [0, 0, 0, 0, 0, 0, 0, -72, 0, 1, 0]);
    design.addPosition("b0", [0, 0, 0, 0, 0, 0, 0, -73, 0, 1, 0]);
    design.addPosition("c0", [0, 0, 0, 0, 0, 0, 0, -74, 0, 1, 0]);
    design.addPosition("d0", [0, 0, 0, 0, 0, 0, 0, -75, 0, 1, 0]);
    design.addPosition("e0", [0, 0, 0, 0, 0, 0, 0, -76, 0, 1, 0]);
    design.addPosition("f0", [0, 0, 0, 0, 0, 0, 0, -77, 0, 1, 0]);
    design.addPosition("g0", [0, 0, 0, 0, 0, 0, 0, -78, 0, 1, 0]);
    design.addPosition("h0", [0, 0, 0, 0, 0, 0, 0, -79, 0, 0, 0]);

    design.addZone("last-rank", 1, [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addZone("last-rank", 2, [56, 57, 58, 59, 60, 61, 62, 63]);
    design.addZone("third-rank", 1, [40, 41, 42, 43, 44, 45, 46, 47]);
    design.addZone("third-rank", 2, [16, 17, 18, 19, 20, 21, 22, 23]);
    design.addZone("reserve-rank", 1, [72, 73, 74, 75, 76, 77, 78, 79]);
    design.addZone("reserve-rank", 2, [64, 65, 66, 67, 68, 69, 70, 71]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.IN_ZONE,	1);	// third-rank
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	11);
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	5);	// last-to?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	0);	// Pawn
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	2);	// reserve-rank
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	10);
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-11);
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	21);	// position
    design.addCommand(4, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	9);
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-10);
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	7);
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-8);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	3);	// Rook
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	3);	// $4
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	4);	// $5
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.PARAM,	2);	// $3
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	3);	// $4
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	3);	// Rook
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	4);	// $5
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.PARAM,	5);	// $6
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.PARAM,	6);	// $7
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0);
    design.addMove(0, 0, [8, 8], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [5], 0);
    design.addMove(0, 2, [3, 8, 8], 0);
    design.addMove(0, 2, [4, 8, 8], 0);
    design.addMove(0, 3, [7, 7], 1);
    design.addMove(0, 4, [0, 7], 2);

    design.addPiece("Knight", 1);
    design.addMove(1, 5, [8, 6], 0);
    design.addMove(1, 5, [8, 5], 0);
    design.addMove(1, 5, [1, 2], 0);
    design.addMove(1, 5, [1, 0], 0);
    design.addMove(1, 5, [4, 6], 0);
    design.addMove(1, 5, [4, 2], 0);
    design.addMove(1, 5, [3, 5], 0);
    design.addMove(1, 5, [3, 0], 0);
    design.addMove(1, 3, [7, 7], 1);

    design.addPiece("Bishop", 2);
    design.addMove(2, 6, [6, 6], 0);
    design.addMove(2, 6, [2, 2], 0);
    design.addMove(2, 6, [5, 5], 0);
    design.addMove(2, 6, [0, 0], 0);
    design.addMove(2, 3, [7, 7], 1);

    design.addPiece("Rook", 3);
    design.addMove(3, 6, [8, 8], 0);
    design.addMove(3, 6, [1, 1], 0);
    design.addMove(3, 6, [4, 4], 0);
    design.addMove(3, 6, [3, 3], 0);
    design.addMove(3, 3, [7, 7], 1);

    design.addPiece("Queen", 4);
    design.addMove(4, 6, [8, 8], 0);
    design.addMove(4, 6, [1, 1], 0);
    design.addMove(4, 6, [4, 4], 0);
    design.addMove(4, 6, [3, 3], 0);
    design.addMove(4, 6, [6, 6], 0);
    design.addMove(4, 6, [2, 2], 0);
    design.addMove(4, 6, [5, 5], 0);
    design.addMove(4, 6, [0, 0], 0);
    design.addMove(4, 3, [7, 7], 1);

    design.addPiece("King", 5);
    design.addMove(5, 7, [8], 0);
    design.addMove(5, 7, [1], 0);
    design.addMove(5, 7, [4], 0);
    design.addMove(5, 7, [3], 0);
    design.addMove(5, 7, [6], 0);
    design.addMove(5, 7, [2], 0);
    design.addMove(5, 7, [5], 0);
    design.addMove(5, 7, [0], 0);
    design.addMove(5, 8, [3, 3, 3, 4, 4], 3);
    design.addMove(5, 9, [4, 4, 4, 4, 3, 3, 3], 3);

    design.addPiece("PawnP", 6);
    design.addMove(6, 0, [8, 8], 0);
    design.addMove(6, 1, [6], 0);
    design.addMove(6, 1, [5], 0);
    design.addMove(6, 4, [0, 7], 2);

    design.addPiece("KnightP", 7);
    design.addMove(7, 5, [8, 6], 0);
    design.addMove(7, 5, [8, 5], 0);
    design.addMove(7, 5, [1, 2], 0);
    design.addMove(7, 5, [1, 0], 0);
    design.addMove(7, 5, [4, 6], 0);
    design.addMove(7, 5, [4, 2], 0);
    design.addMove(7, 5, [3, 5], 0);
    design.addMove(7, 5, [3, 0], 0);

    design.addPiece("BishopP", 8);
    design.addMove(8, 6, [6, 6], 0);
    design.addMove(8, 6, [2, 2], 0);
    design.addMove(8, 6, [5, 5], 0);
    design.addMove(8, 6, [0, 0], 0);

    design.addPiece("RookP", 9);
    design.addMove(9, 6, [8, 8], 0);
    design.addMove(9, 6, [1, 1], 0);
    design.addMove(9, 6, [4, 4], 0);
    design.addMove(9, 6, [3, 3], 0);

    design.addPiece("QueenP", 10);
    design.addMove(10, 6, [8, 8], 0);
    design.addMove(10, 6, [1, 1], 0);
    design.addMove(10, 6, [4, 4], 0);
    design.addMove(10, 6, [3, 3], 0);
    design.addMove(10, 6, [6, 6], 0);
    design.addMove(10, 6, [2, 2], 0);
    design.addMove(10, 6, [5, 5], 0);
    design.addMove(10, 6, [0, 0], 0);

    design.addPiece("KingP", 11);
    design.addMove(11, 7, [8], 0);
    design.addMove(11, 7, [1], 0);
    design.addMove(11, 7, [4], 0);
    design.addMove(11, 7, [3], 0);
    design.addMove(11, 7, [6], 0);
    design.addMove(11, 7, [2], 0);
    design.addMove(11, 7, [5], 0);
    design.addMove(11, 7, [0], 0);

    design.setup("White", "Pawn", 48);
    design.setup("White", "Pawn", 49);
    design.setup("White", "Pawn", 50);
    design.setup("White", "Pawn", 51);
    design.setup("White", "Pawn", 52);
    design.setup("White", "Pawn", 53);
    design.setup("White", "Pawn", 54);
    design.setup("White", "Pawn", 55);
    design.setup("White", "Rook", 56);
    design.setup("White", "Rook", 63);
    design.setup("White", "Knight", 57);
    design.setup("White", "Knight", 62);
    design.setup("White", "Bishop", 58);
    design.setup("White", "Bishop", 61);
    design.setup("White", "Queen", 59);
    design.setup("White", "King", 60);
    design.setup("Black", "Pawn", 8);
    design.setup("Black", "Pawn", 9);
    design.setup("Black", "Pawn", 10);
    design.setup("Black", "Pawn", 11);
    design.setup("Black", "Pawn", 12);
    design.setup("Black", "Pawn", 13);
    design.setup("Black", "Pawn", 14);
    design.setup("Black", "Pawn", 15);
    design.setup("Black", "Rook", 0);
    design.setup("Black", "Rook", 7);
    design.setup("Black", "Knight", 1);
    design.setup("Black", "Knight", 6);
    design.setup("Black", "Bishop", 2);
    design.setup("Black", "Bishop", 5);
    design.setup("Black", "Queen", 3);
    design.setup("Black", "King", 4);
}

Dagaz.View.configure = function(view) {
    view.defBoard("WhiteBoard", 0, 0, undefined, [0]);
    view.defBoard("BlackBoard", 0, 0, undefined, [1]);
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("WhitePawnP", "White PawnP");
    view.defPiece("BlackPawnP", "Black PawnP");
    view.defPiece("WhiteRookP", "White RookP");
    view.defPiece("BlackRookP", "Black RookP");
    view.defPiece("WhiteKnightP", "White KnightP");
    view.defPiece("BlackKnightP", "Black KnightP");
    view.defPiece("WhiteBishopP", "White BishopP");
    view.defPiece("BlackBishopP", "Black BishopP");
    view.defPiece("WhiteQueenP", "White QueenP");
    view.defPiece("BlackQueenP", "Black QueenP");
    view.defPiece("WhiteKingP", "White KingP");
    view.defPiece("BlackKingP", "Black KingP");
 
    view.defPosition("a8", 25, 99, 60, 60);
    view.defPosition("b8", 85, 99, 60, 60);
    view.defPosition("c8", 145, 99, 60, 60);
    view.defPosition("d8", 205, 99, 60, 60);
    view.defPosition("e8", 265, 99, 60, 60);
    view.defPosition("f8", 325, 99, 60, 60);
    view.defPosition("g8", 385, 99, 60, 60);
    view.defPosition("h8", 445, 99, 60, 60);
    view.defPosition("a7", 25, 159, 60, 60);
    view.defPosition("b7", 85, 159, 60, 60);
    view.defPosition("c7", 145, 159, 60, 60);
    view.defPosition("d7", 205, 159, 60, 60);
    view.defPosition("e7", 265, 159, 60, 60);
    view.defPosition("f7", 325, 159, 60, 60);
    view.defPosition("g7", 385, 159, 60, 60);
    view.defPosition("h7", 445, 159, 60, 60);
    view.defPosition("a6", 25, 219, 60, 60);
    view.defPosition("b6", 85, 219, 60, 60);
    view.defPosition("c6", 145, 219, 60, 60);
    view.defPosition("d6", 205, 219, 60, 60);
    view.defPosition("e6", 265, 219, 60, 60);
    view.defPosition("f6", 325, 219, 60, 60);
    view.defPosition("g6", 385, 219, 60, 60);
    view.defPosition("h6", 445, 219, 60, 60);
    view.defPosition("a5", 25, 279, 60, 60);
    view.defPosition("b5", 85, 279, 60, 60);
    view.defPosition("c5", 145, 279, 60, 60);
    view.defPosition("d5", 205, 279, 60, 60);
    view.defPosition("e5", 265, 279, 60, 60);
    view.defPosition("f5", 325, 279, 60, 60);
    view.defPosition("g5", 385, 279, 60, 60);
    view.defPosition("h5", 445, 279, 60, 60);
    view.defPosition("a4", 25, 339, 60, 60);
    view.defPosition("b4", 85, 339, 60, 60);
    view.defPosition("c4", 145, 339, 60, 60);
    view.defPosition("d4", 205, 339, 60, 60);
    view.defPosition("e4", 265, 339, 60, 60);
    view.defPosition("f4", 325, 339, 60, 60);
    view.defPosition("g4", 385, 339, 60, 60);
    view.defPosition("h4", 445, 339, 60, 60);
    view.defPosition("a3", 25, 399, 60, 60);
    view.defPosition("b3", 85, 399, 60, 60);
    view.defPosition("c3", 145, 399, 60, 60);
    view.defPosition("d3", 205, 399, 60, 60);
    view.defPosition("e3", 265, 399, 60, 60);
    view.defPosition("f3", 325, 399, 60, 60);
    view.defPosition("g3", 385, 399, 60, 60);
    view.defPosition("h3", 445, 399, 60, 60);
    view.defPosition("a2", 25, 459, 60, 60);
    view.defPosition("b2", 85, 459, 60, 60);
    view.defPosition("c2", 145, 459, 60, 60);
    view.defPosition("d2", 205, 459, 60, 60);
    view.defPosition("e2", 265, 459, 60, 60);
    view.defPosition("f2", 325, 459, 60, 60);
    view.defPosition("g2", 385, 459, 60, 60);
    view.defPosition("h2", 445, 459, 60, 60);
    view.defPosition("a1", 25, 519, 60, 60);
    view.defPosition("b1", 85, 519, 60, 60);
    view.defPosition("c1", 145, 519, 60, 60);
    view.defPosition("d1", 205, 519, 60, 60);
    view.defPosition("e1", 265, 519, 60, 60);
    view.defPosition("f1", 325, 519, 60, 60);
    view.defPosition("g1", 385, 519, 60, 60);
    view.defPosition("h1", 445, 519, 60, 60);
    view.defPosition("a9", 25, 4, 60, 60);
    view.defPosition("b9", 85, 4, 60, 60);
    view.defPosition("c9", 145, 4, 60, 60);
    view.defPosition("d9", 205, 4, 60, 60);
    view.defPosition("e9", 265, 4, 60, 60);
    view.defPosition("f9", 325, 4, 60, 60);
    view.defPosition("g9", 385, 4, 60, 60);
    view.defPosition("h9", 445, 4, 60, 60);
    view.defPosition("a0", 25, 614, 60, 60);
    view.defPosition("b0", 85, 614, 60, 60);
    view.defPosition("c0", 145, 614, 60, 60);
    view.defPosition("d0", 205, 614, 60, 60);
    view.defPosition("e0", 265, 614, 60, 60);
    view.defPosition("f0", 325, 614, 60, 60);
    view.defPosition("g0", 385, 614, 60, 60);
    view.defPosition("h0", 445, 614, 60, 60);
}
