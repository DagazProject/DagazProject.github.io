Dagaz.Model.WIDTH         = 5;
Dagaz.Model.HEIGHT        = 5;

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
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("micro-shogi-extension", "true");
    design.checkVersion("micro-shogi-invariant", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("sr");
    design.addDirection("nr");
    design.addDirection("nx");
    design.addDirection("pr");

    design.addPlayer("South", [1, 0, 4, 6, 2, 7, 3, 5, 8, 9, 10, 11]);
    design.addPlayer("North", [1, 0, 4, 6, 2, 7, 3, 5, 9, 8, 10, 11]);

    design.addPosition("X5", [0, 1, 11, 0, 0, 12, 0, 0, 0, 0, 0, 1]);
    design.addPosition("Y5", [-1, 0, 11, 0, 0, 0, 10, 0, 0, 11, 0, -1]);
    design.addPosition("I5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 1, 11, 0, 0, 12, 0, 0, 50, -2, 45, 0]);
    design.addPosition("b5", [-1, 1, 11, 0, 0, 12, 10, 0, 49, -3, 45, 0]);
    design.addPosition("c5", [-1, 1, 11, 0, 0, 12, 10, 0, 48, -4, 45, 0]);
    design.addPosition("d5", [-1, 1, 11, 0, 0, 12, 10, 0, 47, -5, 45, 0]);
    design.addPosition("e5", [-1, 0, 11, 0, 0, 0, 10, 0, 46, -6, 46, 0]);
    design.addPosition("J5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z5", [0, 1, 11, 0, 0, 12, 0, 0, 35, 0, 0, 1]);
    design.addPosition("T5", [-1, 0, 11, 0, 0, 0, 10, 0, 0, 11, 0, -1]);
    design.addPosition("X4", [0, 1, 11, -10, -11, 12, 0, 0, -11, 0, 0, 1]);
    design.addPosition("Y4", [-1, 0, 11, 0, -11, 0, 10, -12, 0, 11, 0, -1]);
    design.addPosition("I4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 1, 11, -10, -11, 12, 0, 0, 39, -13, -11, 0]);
    design.addPosition("b4", [-1, 1, 11, -10, -11, 12, 10, -12, 38, -14, -11, 0]);
    design.addPosition("c4", [-1, 1, 11, -10, -11, 12, 10, -12, 37, -15, -11, 0]);
    design.addPosition("d4", [-1, 1, 11, -10, -11, 12, 10, -12, 36, -16, -11, 0]);
    design.addPosition("e4", [-1, 0, 11, 0, -11, 0, 10, -12, 35, -17, -11, 0]);
    design.addPosition("J4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z4", [0, 1, 11, -10, -11, 12, 0, 0, -11, 0, 0, 1]);
    design.addPosition("T4", [-1, 0, 11, 0, -11, 0, 10, -12, 0, 11, 0, -1]);
    design.addPosition("X3", [0, 1, 11, -10, -11, 12, 0, 0, -11, 0, 0, 1]);
    design.addPosition("Y3", [-1, 0, 11, 0, -11, 0, 10, -12, 0, 11, 0, -1]);
    design.addPosition("I3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 1, 11, -10, -11, 12, 0, 0, 28, -24, -11, 0]);
    design.addPosition("b3", [-1, 1, 11, -10, -11, 12, 10, -12, 27, -25, -11, 0]);
    design.addPosition("c3", [-1, 1, 11, -10, -11, 12, 10, -12, 26, -26, -11, 0]);
    design.addPosition("d3", [-1, 1, 11, -10, -11, 12, 10, -12, 25, -27, -11, 0]);
    design.addPosition("e3", [-1, 0, 11, 0, -11, 0, 10, -12, 24, -28, -11, 0]);
    design.addPosition("J3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z3", [0, 1, 11, -10, -11, 12, 0, 0, -11, 0, 0, 1]);
    design.addPosition("T3", [-1, 0, 11, 0, -11, 0, 10, -12, 0, 11, 0, -1]);
    design.addPosition("X2", [0, 1, 11, -10, -11, 12, 0, 0, -11, 0, 0, 1]);
    design.addPosition("Y2", [-1, 0, 11, 0, -11, 0, 10, -12, 0, 11, 0, -1]);
    design.addPosition("I2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 1, 11, -10, -11, 12, 0, 0, 17, -35, -11, 0]);
    design.addPosition("b2", [-1, 1, 11, -10, -11, 12, 10, -12, 16, -36, -11, 0]);
    design.addPosition("c2", [-1, 1, 11, -10, -11, 12, 10, -12, 15, -37, -11, 0]);
    design.addPosition("d2", [-1, 1, 11, -10, -11, 12, 10, -12, 14, -38, -11, 0]);
    design.addPosition("e2", [-1, 0, 11, 0, -11, 0, 10, -12, 13, -39, -11, 0]);
    design.addPosition("J2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z2", [0, 1, 11, -10, -11, 12, 0, 0, -11, 0, 0, 1]);
    design.addPosition("T2", [-1, 0, 11, 0, -11, 0, 10, -12, 0, 11, 0, -1]);
    design.addPosition("X1", [0, 1, 0, -10, -11, 0, 0, 0, -11, 0, 0, 1]);
    design.addPosition("Y1", [-1, 0, 0, 0, -11, 0, 0, -12, 0, -35, 0, -1]);
    design.addPosition("I1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, -10, -11, 0, 0, 0, 6, -46, -11, 0]);
    design.addPosition("b1", [-1, 1, 0, -10, -11, 0, 0, -12, 5, -47, -11, 0]);
    design.addPosition("c1", [-1, 1, 0, -10, -11, 0, 0, -12, 4, -48, -11, 0]);
    design.addPosition("d1", [-1, 1, 0, -10, -11, 0, 0, -12, 3, -49, -11, 0]);
    design.addPosition("e1", [-1, 0, 0, 0, -11, 0, 0, -12, 2, -50, -11, 0]);
    design.addPosition("J1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z1", [0, 1, 0, -10, -11, 0, 0, 0, -11, 0, 0, 1]);
    design.addPosition("T1", [-1, 0, 0, 0, -11, 0, 0, -12, 0, 0, 0, -1]);

    design.addZone("board-zone", 2, [47, 48, 49, 50, 51, 36, 37, 38, 39, 40, 25, 26, 27, 28, 29, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7]);
    design.addZone("board-zone", 1, [47, 48, 49, 50, 51, 36, 37, 38, 39, 40, 25, 26, 27, 28, 29, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PROMOTE,	2);	// Knight
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	21);	// position
    design.addCommand(2, ZRF.ON_BOARD_DIR,	10);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	10);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-11);
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PROMOTE,	1);	// Gold
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
    design.addCommand(4, ZRF.PROMOTE,	4);	// Bishop
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	8);
    design.addCommand(5, ZRF.FORK,	4);
    design.addCommand(5, ZRF.PROMOTE,	3);	// Silver
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-9);
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PROMOTE,	3);	// Silver
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PROMOTE,	6);	// Rook
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	8);
    design.addCommand(7, ZRF.FORK,	4);
    design.addCommand(7, ZRF.PROMOTE,	5);	// Pawn
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-9);
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PROMOTE,	5);	// Pawn
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PROMOTE,	8);	// Lance
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	8);
    design.addCommand(9, ZRF.FORK,	4);
    design.addCommand(9, ZRF.PROMOTE,	7);	// Tokin
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.JUMP,	-9);
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PROMOTE,	7);	// Tokin
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addPiece("King", 0, 100);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [3], 0);

    design.addPiece("Gold", 1, 6);
    design.addMove(1, 1, [4], 0);
    design.addMove(1, 1, [7], 0);
    design.addMove(1, 1, [2], 0);
    design.addMove(1, 1, [3], 0);
    design.addMove(1, 1, [0], 0);
    design.addMove(1, 1, [1], 0);
    design.addMove(1, 2, [47, 10], 0);

    design.addPiece("Knight", 2, 2);
    design.addMove(2, 3, [4, 7], 0);
    design.addMove(2, 3, [4, 3], 0);
    design.addMove(2, 2, [47, 10], 0);

    design.addPiece("Silver", 3, 5);
    design.addMove(3, 4, [7], 0);
    design.addMove(3, 4, [6], 0);
    design.addMove(3, 4, [5], 0);
    design.addMove(3, 4, [3], 0);
    design.addMove(3, 4, [4], 0);
    design.addMove(3, 2, [47, 10], 0);

    design.addPiece("Bishop", 4, 10);
    design.addMove(4, 5, [7, 7], 0);
    design.addMove(4, 5, [5, 5], 0);
    design.addMove(4, 5, [6, 6], 0);
    design.addMove(4, 5, [3, 3], 0);
    design.addMove(4, 2, [47, 10], 0);

    design.addPiece("Pawn", 5, 1);
    design.addMove(5, 6, [4], 0);
    design.addMove(5, 2, [47, 10], 0);

    design.addPiece("Rook", 6, 15);
    design.addMove(6, 7, [4, 4], 0);
    design.addMove(6, 7, [1, 1], 0);
    design.addMove(6, 7, [0, 0], 0);
    design.addMove(6, 7, [2, 2], 0);
    design.addMove(6, 2, [47, 10], 0);

    design.addPiece("Tokin", 7, 6);
    design.addMove(7, 8, [4], 0);
    design.addMove(7, 8, [7], 0);
    design.addMove(7, 8, [2], 0);
    design.addMove(7, 8, [3], 0);
    design.addMove(7, 8, [0], 0);
    design.addMove(7, 8, [1], 0);
    design.addMove(7, 2, [47, 10], 0);

    design.addPiece("Lance", 8, 7);
    design.addMove(8, 9, [4, 4], 0);
    design.addMove(8, 2, [47, 10], 0);

    design.setup("South", "King", 49);
    design.setup("South", "Gold", 48);
    design.setup("South", "Silver", 50);
    design.setup("South", "Pawn", 47);
    design.setup("South", "Tokin", 51);
    design.setup("North", "King", 5);
    design.setup("North", "Gold", 6);
    design.setup("North", "Silver", 4);
    design.setup("North", "Pawn", 7);
    design.setup("North", "Tokin", 3);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("SouthKing", "South King");
    view.defPiece("NorthKing", "North King");
    view.defPiece("SouthGold", "South Gold");
    view.defPiece("NorthGold", "North Gold");
    view.defPiece("SouthKnight", "South Knight");
    view.defPiece("NorthKnight", "North Knight");
    view.defPiece("SouthSilver", "South Silver");
    view.defPiece("NorthSilver", "North Silver");
    view.defPiece("SouthBishop", "South Bishop");
    view.defPiece("NorthBishop", "North Bishop");
    view.defPiece("SouthPawn", "South Pawn");
    view.defPiece("NorthPawn", "North Pawn");
    view.defPiece("SouthRook", "South Rook");
    view.defPiece("NorthRook", "North Rook");
    view.defPiece("SouthTokin", "South Tokin");
    view.defPiece("NorthTokin", "North Tokin");
    view.defPiece("SouthLance", "South Lance");
    view.defPiece("NorthLance", "North Lance");
 
    view.defPosition("X5", 9, 15, 41, 46);
    view.defPosition("Y5", 50, 15, 41, 46);
    view.defPosition("I5", 91, 15, 41, 46);
    view.defPosition("a5", 132, 15, 41, 46);
    view.defPosition("b5", 173, 15, 41, 46);
    view.defPosition("c5", 214, 15, 41, 46);
    view.defPosition("d5", 255, 15, 41, 46);
    view.defPosition("e5", 296, 15, 41, 46);
    view.defPosition("J5", 337, 15, 41, 46);
    view.defPosition("Z5", 378, 15, 41, 46);
    view.defPosition("T5", 419, 15, 41, 46);
    view.defPosition("X4", 9, 61, 41, 46);
    view.defPosition("Y4", 50, 61, 41, 46);
    view.defPosition("I4", 91, 61, 41, 46);
    view.defPosition("a4", 132, 61, 41, 46);
    view.defPosition("b4", 173, 61, 41, 46);
    view.defPosition("c4", 214, 61, 41, 46);
    view.defPosition("d4", 255, 61, 41, 46);
    view.defPosition("e4", 296, 61, 41, 46);
    view.defPosition("J4", 337, 61, 41, 46);
    view.defPosition("Z4", 378, 61, 41, 46);
    view.defPosition("T4", 419, 61, 41, 46);
    view.defPosition("X3", 9, 107, 41, 46);
    view.defPosition("Y3", 50, 107, 41, 46);
    view.defPosition("I3", 91, 107, 41, 46);
    view.defPosition("a3", 132, 107, 41, 46);
    view.defPosition("b3", 173, 107, 41, 46);
    view.defPosition("c3", 214, 107, 41, 46);
    view.defPosition("d3", 255, 107, 41, 46);
    view.defPosition("e3", 296, 107, 41, 46);
    view.defPosition("J3", 337, 107, 41, 46);
    view.defPosition("Z3", 378, 107, 41, 46);
    view.defPosition("T3", 419, 107, 41, 46);
    view.defPosition("X2", 9, 153, 41, 46);
    view.defPosition("Y2", 50, 153, 41, 46);
    view.defPosition("I2", 91, 153, 41, 46);
    view.defPosition("a2", 132, 153, 41, 46);
    view.defPosition("b2", 173, 153, 41, 46);
    view.defPosition("c2", 214, 153, 41, 46);
    view.defPosition("d2", 255, 153, 41, 46);
    view.defPosition("e2", 296, 153, 41, 46);
    view.defPosition("J2", 337, 153, 41, 46);
    view.defPosition("Z2", 378, 153, 41, 46);
    view.defPosition("T2", 419, 153, 41, 46);
    view.defPosition("X1", 9, 199, 41, 46);
    view.defPosition("Y1", 50, 199, 41, 46);
    view.defPosition("I1", 91, 199, 41, 46);
    view.defPosition("a1", 132, 199, 41, 46);
    view.defPosition("b1", 173, 199, 41, 46);
    view.defPosition("c1", 214, 199, 41, 46);
    view.defPosition("d1", 255, 199, 41, 46);
    view.defPosition("e1", 296, 199, 41, 46);
    view.defPosition("J1", 337, 199, 41, 46);
    view.defPosition("Z1", 378, 199, 41, 46);
    view.defPosition("T1", 419, 199, 41, 46);
}
