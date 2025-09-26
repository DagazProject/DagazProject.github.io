Dagaz.View.TARGET_FLAT       =  true;
Dagaz.View.TARGET_RADIUS     =  2.5;
Dagaz.View.TARGET_SZ         =  0.5;
Dagaz.Controller.persistense = "none";

Dagaz.Model.WIDTH            = 5;
Dagaz.Model.HEIGHT           = 6;

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
    design.checkVersion("hidari-shogi-captures", "true");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7
    design.addDirection("nx"); // 8

    design.addPlayer("South", [6, 7, 5, 4, 3, 2, 0, 1, 8]);
    design.addPlayer("North", [6, 7, 5, 4, 3, 2, 0, 1, 8]);

    design.addPosition("a6", [6, 5, 0, 1, 0, 0, 0, 0, 5]);
    design.addPosition("b6", [6, 5, 4, 1, -1, 0, 0, 0, 5]);
    design.addPosition("c6", [6, 5, 4, 1, -1, 0, 0, 0, 5]);
    design.addPosition("d6", [6, 5, 4, 1, -1, 0, 0, 0, 5]);
    design.addPosition("e6", [0, 5, 4, 0, -1, 0, 0, 0, 5]);
    design.addPosition("a5", [6, 5, 0, 1, 0, -4, 0, -5, 5]);
    design.addPosition("b5", [6, 5, 4, 1, -1, -4, -6, -5, 5]);
    design.addPosition("c5", [6, 5, 4, 1, -1, -4, -6, -5, 15]);
    design.addPosition("d5", [6, 5, 4, 1, -1, -4, -6, -5, 5]);
    design.addPosition("e5", [0, 5, 4, 0, -1, 0, -6, -5, 5]);
    design.addPosition("a4", [6, 5, 0, 1, 0, -4, 0, -5, 5]);
    design.addPosition("b4", [6, 5, 4, 1, -1, -4, -6, -5, 5]);
    design.addPosition("c4", [6, 5, 4, 1, -1, -4, -6, -5, 0]);
    design.addPosition("d4", [6, 5, 4, 1, -1, -4, -6, -5, 5]);
    design.addPosition("e4", [0, 5, 4, 0, -1, 0, -6, -5, 5]);
    design.addPosition("a3", [6, 5, 0, 1, 0, -4, 0, -5, 5]);
    design.addPosition("b3", [6, 5, 4, 1, -1, -4, -6, -5, 5]);
    design.addPosition("c3", [6, 5, 4, 1, -1, -4, -6, -5, 0]);
    design.addPosition("d3", [6, 5, 4, 1, -1, -4, -6, -5, 5]);
    design.addPosition("e3", [0, 5, 4, 0, -1, 0, -6, -5, 5]);
    design.addPosition("a2", [6, 5, 0, 1, 0, -4, 0, -5, 5]);
    design.addPosition("b2", [6, 5, 4, 1, -1, -4, -6, -5, 5]);
    design.addPosition("c2", [6, 5, 4, 1, -1, -4, -6, -5, 5]);
    design.addPosition("d2", [6, 5, 4, 1, -1, -4, -6, -5, 5]);
    design.addPosition("e2", [0, 5, 4, 0, -1, 0, -6, -5, 5]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -4, 0, -5, -24]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -4, -6, -5, -24]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -4, -6, -5, -24]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -4, -6, -5, -24]);
    design.addPosition("e1", [0, 0, 0, 0, -1, 0, -6, -5, 0]);
    design.addPosition("A6", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("B6", [0, 0, 0, -1, 0, 0, 0, 0, 0]);
    design.addPosition("A5", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("B5", [0, 0, 0, -1, 0, 0, 0, 0, -2]);
    design.addPosition("A4", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("B4", [0, 0, 0, -1, 0, 0, 0, 0, -2]);
    design.addPosition("A3", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("B3", [0, 0, 0, -1, 0, 0, 0, 0, -2]);
    design.addPosition("A2", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("B2", [0, 0, 0, -1, 0, 0, 0, 0, -2]);
    design.addPosition("A1", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("B1", [0, 0, 0, -1, 0, 0, 0, 0, -2]);
    design.addPosition("C6", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("D6", [0, 0, 0, -1, 0, 0, 0, 0, -2]);
    design.addPosition("C5", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("D5", [0, 0, 0, -1, 0, 0, 0, 0, -2]);
    design.addPosition("C4", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("D4", [0, 0, 0, -1, 0, 0, 0, 0, -2]);
    design.addPosition("C3", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("D3", [0, 0, 0, -1, 0, 0, 0, 0, -2]);
    design.addPosition("C2", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("D2", [0, 0, 0, -1, 0, 0, 0, 0, -2]);
    design.addPosition("C1", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("D1", [0, 0, 0, -1, 0, 0, 0, 0, -2]);
    design.addPosition("E6", [0, 0, 0, 1, 0, 0, 0, 0, 2]);
    design.addPosition("F6", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("E5", [0, 0, 0, 1, 0, 0, 0, 0, 2]);
    design.addPosition("F5", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("E4", [0, 0, 0, 1, 0, 0, 0, 0, 2]);
    design.addPosition("F4", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("E3", [0, 0, 0, 1, 0, 0, 0, 0, 2]);
    design.addPosition("F3", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("E2", [0, 0, 0, 1, 0, 0, 0, 0, 2]);
    design.addPosition("F2", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("E1", [0, 0, 0, 1, 0, 0, 0, 0, 2]);
    design.addPosition("F1", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("G6", [0, 0, 0, 1, 0, 0, 0, 0, 2]);
    design.addPosition("H6", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("G5", [0, 0, 0, 1, 0, 0, 0, 0, 2]);
    design.addPosition("H5", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("G4", [0, 0, 0, 1, 0, 0, 0, 0, 2]);
    design.addPosition("H4", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("G3", [0, 0, 0, 1, 0, 0, 0, 0, 2]);
    design.addPosition("H3", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("G2", [0, 0, 0, 1, 0, 0, 0, 0, 2]);
    design.addPosition("H2", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("G1", [0, 0, 0, 1, 0, 0, 0, 0, 2]);
    design.addPosition("H1", [0, 0, 0, 0, -1, 0, 0, 0, 0]);

    design.addZone("board-zone", 1, [25, 26, 27, 28, 29, 20, 21, 22, 23, 24, 15, 16, 17, 18, 19, 10, 11, 12, 13, 14, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4]);
    design.addZone("board-zone", 2, [25, 26, 27, 28, 29, 20, 21, 22, 23, 24, 15, 16, 17, 18, 19, 10, 11, 12, 13, 14, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	0);	// King
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	21);	// position
    design.addCommand(1, ZRF.ON_BOARD_DIR,	8);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	10);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-11);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PROMOTE,	4);	// Knight
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PROMOTE,	5);	// Lance
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.PROMOTE,	6);	// Bishop
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.PROMOTE,	1);	// Gold
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.JUMP,	2);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PROMOTE,	2);	// Silver
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	7);
    design.addCommand(7, ZRF.FORK,	3);
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-8);
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PROMOTE,	3);	// Copper
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	7);
    design.addCommand(8, ZRF.FORK,	3);
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.JUMP,	-8);
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PROMOTE,	8);	// Pawn
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	4);
    design.addCommand(9, ZRF.PROMOTE,	7);	// Rook
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.JUMP,	2);
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addPiece("King", 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 1, [0, 8], 1);

    design.addPiece("Gold", 1);
    design.addMove(1, 2, [7], 0);
    design.addMove(1, 2, [6], 0);
    design.addMove(1, 2, [1], 0);
    design.addMove(1, 2, [5], 0);
    design.addMove(1, 2, [4], 0);
    design.addMove(1, 2, [3], 0);
    design.addMove(1, 1, [0, 8], 1);

    design.addPiece("Silver", 2);
    design.addMove(2, 3, [6], 0);
    design.addMove(2, 3, [2], 0);
    design.addMove(2, 3, [0], 0);
    design.addMove(2, 3, [5], 0);
    design.addMove(2, 3, [7], 0);
    design.addMove(2, 1, [0, 8], 1);

    design.addPiece("Copper", 3);
    design.addMove(3, 4, [7], 0);
    design.addMove(3, 4, [6], 0);
    design.addMove(3, 4, [1], 0);
    design.addMove(3, 4, [5], 0);
    design.addMove(3, 1, [0, 8], 1);

    design.addPiece("Knight", 4);
    design.addMove(4, 5, [7, 6], 0);
    design.addMove(4, 5, [7, 5], 0);
    design.addMove(4, 1, [0, 8], 1);

    design.addPiece("Lance", 5);
    design.addMove(5, 6, [7, 7], 0);
    design.addMove(5, 1, [0, 8], 1);

    design.addPiece("Bishop", 6);
    design.addMove(6, 7, [6, 6], 0);
    design.addMove(6, 7, [0, 0], 0);
    design.addMove(6, 7, [2, 2], 0);
    design.addMove(6, 7, [5, 5], 0);
    design.addMove(6, 1, [0, 8], 1);

    design.addPiece("Rook", 7);
    design.addMove(7, 8, [7, 7], 0);
    design.addMove(7, 8, [3, 3], 0);
    design.addMove(7, 8, [4, 4], 0);
    design.addMove(7, 8, [1, 1], 0);
    design.addMove(7, 1, [0, 8], 1);

    design.addPiece("Pawn", 8);
    design.addMove(8, 9, [7], 0);
    design.addMove(8, 1, [0, 8], 1);

    design.setup("South", "King", 54);
    design.setup("South", "Rook", 56);
    design.setup("South", "Pawn", 57);
    design.setup("South", "Bishop", 58);
    design.setup("South", "Copper", 59);
    design.setup("South", "Gold", 60);
    design.setup("South", "Knight", 61);
    design.setup("South", "Silver", 62);
    design.setup("South", "Lance", 63);
    design.setup("North", "King", 53);
    design.setup("North", "Rook", 51);
    design.setup("North", "Pawn", 50);
    design.setup("North", "Bishop", 49);
    design.setup("North", "Copper", 48);
    design.setup("North", "Gold", 47);
    design.setup("North", "Knight", 46);
    design.setup("North", "Silver", 45);
    design.setup("North", "Lance", 44);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(730, 870, 1, -10, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    view.defPiecePlatform(0, 1, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKing");
    view.defPiecePlatform(0, 2, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthKing");
    view.defPiecePlatform(1, 1, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthGold");
    view.defPiecePlatform(1, 2, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthGold");
    view.defPiecePlatform(2, 1, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthSilver");
    view.defPiecePlatform(2, 2, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthSilver");
    view.defPiecePlatform(3, 1, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthCopper");
    view.defPiecePlatform(3, 2, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthCopper");
    view.defPiecePlatform(4, 1, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKnight");
    view.defPiecePlatform(4, 2, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthKnight");
    view.defPiecePlatform(5, 1, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthLance");
    view.defPiecePlatform(5, 2, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthLance");
    view.defPiecePlatform(6, 1, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthBishop");
    view.defPiecePlatform(6, 2, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthBishop");
    view.defPiecePlatform(7, 1, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthRook");
    view.defPiecePlatform(7, 2, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthRook");
    view.defPiecePlatform(8, 1, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthPawn");
    view.defPiecePlatform(8, 2, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthPawn");

    view.setCamera(0, 0, 0, -109, 215, 155);
 
    view.defControl("InfoControl", "2025 Oleg Makarenko", true);
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);

    view.defPosition("a6", -242, -352, 102, 102, 0);
    view.defPosition("b6", -110, -352, 102, 102, 0);
    view.defPosition("c6", 22, -352, 102, 102, 0);
    view.defPosition("d6", 154, -352, 102, 102, 0);
    view.defPosition("e6", 286, -352, 102, 102, 0);
    view.defPosition("a5", -242, -220, 102, 102, 0);
    view.defPosition("b5", -110, -220, 102, 102, 0);
    view.defPosition("c5", 22, -220, 102, 102, 0);
    view.defPosition("d5", 154, -220, 102, 102, 0);
    view.defPosition("e5", 286, -220, 102, 102, 0);
    view.defPosition("a4", -242, -88, 102, 102, 0);
    view.defPosition("b4", -110, -88, 102, 102, 0);
    view.defPosition("c4", 22, -88, 102, 102, 0);
    view.defPosition("d4", 154, -88, 102, 102, 0);
    view.defPosition("e4", 286, -88, 102, 102, 0);
    view.defPosition("a3", -242, 44, 102, 102, 0);
    view.defPosition("b3", -110, 44, 102, 102, 0);
    view.defPosition("c3", 22, 44, 102, 102, 0);
    view.defPosition("d3", 154, 44, 102, 102, 0);
    view.defPosition("e3", 286, 44, 102, 102, 0);
    view.defPosition("a2", -242, 176, 102, 102, 0);
    view.defPosition("b2", -110, 176, 102, 102, 0);
    view.defPosition("c2", 22, 176, 102, 102, 0);
    view.defPosition("d2", 154, 176, 102, 102, 0);
    view.defPosition("e2", 286, 176, 102, 102, 0);
    view.defPosition("a1", -242, 308, 102, 102, 0);
    view.defPosition("b1", -110, 308, 102, 102, 0);
    view.defPosition("c1", 22, 308, 102, 102, 0);
    view.defPosition("d1", 154, 308, 102, 102, 0);
    view.defPosition("e1", 286, 308, 102, 102, 0);

    view.defPosition("A6", -885, -352, 102, 102, 0);
    view.defPosition("B6", -753, -352, 102, 102, 0);
    view.defPosition("A5", -885, -220, 102, 102, 0);
    view.defPosition("B5", -753, -220, 102, 102, 0);
    view.defPosition("A4", -885, -88, 102, 102, 0);
    view.defPosition("B4", -753, -88, 102, 102, 0);
    view.defPosition("A3", -885, 44, 102, 102, 0);
    view.defPosition("B3", -753, 44, 102, 102, 0);
    view.defPosition("A2", -885, 176, 102, 102, 0);
    view.defPosition("B2", -753, 176, 102, 102, 0);
    view.defPosition("A1", -885, 308, 102, 102, 0);
    view.defPosition("B1", -753, 308, 102, 102, 0);
    view.defPosition("C6", -597, -352, 102, 102, 0);
    view.defPosition("D6", -465, -352, 102, 102, 0);
    view.defPosition("C5", -597, -220, 102, 102, 0);
    view.defPosition("D5", -465, -220, 102, 102, 0);
    view.defPosition("C4", -597, -88, 102, 102, 0);
    view.defPosition("D4", -465, -88, 102, 102, 0);
    view.defPosition("C3", -597, 44, 102, 102, 0);
    view.defPosition("D3", -465, 44, 102, 102, 0);
    view.defPosition("C2", -597, 176, 102, 102, 0);
    view.defPosition("D2", -465, 176, 102, 102, 0);
    view.defPosition("C1", -597, 308, 102, 102, 0);
    view.defPosition("D1", -465, 308, 102, 102, 0);
    view.defPosition("E6", 461, -352, 102, 102, 0);
    view.defPosition("F6", 593, -352, 102, 102, 0);
    view.defPosition("E5", 461, -220, 102, 102, 0);
    view.defPosition("F5", 593, -220, 102, 102, 0);
    view.defPosition("E4", 461, -88, 102, 102, 0);
    view.defPosition("F4", 593, -88, 102, 102, 0);
    view.defPosition("E3", 461, 44, 102, 102, 0);
    view.defPosition("F3", 593, 44, 102, 102, 0);
    view.defPosition("E2", 461, 176, 102, 102, 0);
    view.defPosition("F2", 593, 176, 102, 102, 0);
    view.defPosition("E1", 461, 308, 102, 102, 0);
    view.defPosition("F1", 593, 308, 102, 102, 0);
    view.defPosition("G6", 749, -352, 102, 102, 0);
    view.defPosition("H6", 881, -352, 102, 102, 0);
    view.defPosition("G5", 749, -220, 102, 102, 0);
    view.defPosition("H5", 881, -220, 102, 102, 0);
    view.defPosition("G4", 749, -88, 102, 102, 0);
    view.defPosition("H4", 881, -88, 102, 102, 0);
    view.defPosition("G3", 749, 44, 102, 102, 0);
    view.defPosition("H3", 881, 44, 102, 102, 0);
    view.defPosition("G2", 749, 176, 102, 102, 0);
    view.defPosition("H2", 881, 176, 102, 102, 0);
    view.defPosition("G1", 749, 308, 102, 102, 0);
    view.defPosition("H1", 881, 308, 102, 102, 0);
}
