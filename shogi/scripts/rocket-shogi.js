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
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("promote-dialog", "remap");

    design.addDirection("w");  // 0
    design.addDirection("e");  // 1
    design.addDirection("s");  // 2
    design.addDirection("ne"); // 3
    design.addDirection("n");  // 4
    design.addDirection("se"); // 5
    design.addDirection("nx"); // 6
    design.addDirection("sw"); // 7
    design.addDirection("nw"); // 8
    design.addDirection("sr"); // 9
    design.addDirection("nr"); // 10

    design.addPlayer("South", [1, 0, 4, 7, 2, 8, 6, 3, 5, 9, 10]);
    design.addPlayer("North", [1, 0, 4, 7, 2, 8, 6, 3, 5, 10, 9]);

    design.addPosition("X7", [0, 1, 11, 0, 0, 12, 0, 0, 0, 0, 12]);
    design.addPosition("Y7", [-1, 0, 11, 0, 0, 0, 0, 10, 0, 0, -1]);
    design.addPosition("I7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 1, 11, 0, 0, 12, 67, 0, 0, 72, -2]);
    design.addPosition("b7", [-1, 1, 11, 0, 0, 12, 67, 10, 0, 71, -3]);
    design.addPosition("c7", [-1, 1, 11, 0, 0, 12, 67, 10, 0, 70, -4]);
    design.addPosition("d7", [-1, 1, 11, 0, 0, 12, 67, 10, 0, 69, -5]);
    design.addPosition("e7", [-1, 0, 11, 0, 0, 0, 0, 10, 0, 68, -6]);
    design.addPosition("J7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z7", [0, 1, 11, 0, 0, 12, 0, 0, 0, 1, 0]);
    design.addPosition("T7", [-1, 0, 11, 0, 0, 0, 0, 10, 0, 0, 0]);
    design.addPosition("X6", [0, 1, 11, -10, -11, 12, -11, 0, 0, 0, 12]);
    design.addPosition("Y6", [-1, 0, 11, 0, -11, 0, -11, 10, -12, 0, -1]);
    design.addPosition("I6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 1, 11, -10, -11, 12, -11, 0, 0, 61, -13]);
    design.addPosition("b6", [-1, 1, 11, -10, -11, 12, -11, 10, -12, 60, -14]);
    design.addPosition("c6", [-1, 1, 11, -10, -11, 12, -11, 10, -12, 59, -15]);
    design.addPosition("d6", [-1, 1, 11, -10, -11, 12, -11, 10, -12, 58, -16]);
    design.addPosition("e6", [-1, 0, 11, 0, -11, 0, -11, 10, -12, 57, -17]);
    design.addPosition("J6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z6", [0, 1, 11, -10, -11, 12, -11, 0, 0, 1, 0]);
    design.addPosition("T6", [-1, 0, 11, 0, -11, 0, -11, 10, -12, -12, 0]);
    design.addPosition("X5", [0, 1, 11, -10, -11, 12, -11, 0, 0, 0, 12]);
    design.addPosition("Y5", [-1, 0, 11, 0, -11, 0, -11, 10, -12, 0, -1]);
    design.addPosition("I5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 1, 11, -10, -11, 12, -11, 0, 0, 50, -24]);
    design.addPosition("b5", [-1, 1, 11, -10, -11, 12, -11, 10, -12, 49, -25]);
    design.addPosition("c5", [-1, 1, 11, -10, -11, 12, -11, 10, -12, 48, -26]);
    design.addPosition("d5", [-1, 1, 11, -10, -11, 12, -11, 10, -12, 47, -27]);
    design.addPosition("e5", [-1, 0, 11, 0, -11, 0, -11, 10, -12, 46, -28]);
    design.addPosition("J5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z5", [0, 1, 11, -10, -11, 12, -11, 0, 0, 1, 0]);
    design.addPosition("T5", [-1, 0, 11, 0, -11, 0, -11, 10, -12, -12, 0]);
    design.addPosition("X4", [0, 1, 11, -10, -11, 12, -11, 0, 0, 0, 12]);
    design.addPosition("Y4", [-1, 0, 11, 0, -11, 0, -11, 10, -12, 0, -1]);
    design.addPosition("I4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 1, 11, -10, -11, 12, -11, 0, 0, 39, -35]);
    design.addPosition("b4", [-1, 1, 11, -10, -11, 12, -11, 10, -12, 38, -36]);
    design.addPosition("c4", [-1, 1, 11, -10, -11, 12, -11, 10, -12, 37, -37]);
    design.addPosition("d4", [-1, 1, 11, -10, -11, 12, -11, 10, -12, 36, -38]);
    design.addPosition("e4", [-1, 0, 11, 0, -11, 0, -11, 10, -12, 35, -39]);
    design.addPosition("J4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z4", [0, 1, 11, -10, -11, 12, -11, 0, 0, 1, 0]);
    design.addPosition("T4", [-1, 0, 11, 0, -11, 0, -11, 10, -12, -12, 0]);
    design.addPosition("X3", [0, 1, 11, -10, -11, 12, -11, 0, 0, 0, 12]);
    design.addPosition("Y3", [-1, 0, 11, 0, -11, 0, -11, 10, -12, 0, -1]);
    design.addPosition("I3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 1, 11, -10, -11, 12, -11, 0, 0, 28, -46]);
    design.addPosition("b3", [-1, 1, 11, -10, -11, 12, -11, 10, -12, 27, -47]);
    design.addPosition("c3", [-1, 1, 11, -10, -11, 12, -11, 10, -12, 26, -48]);
    design.addPosition("d3", [-1, 1, 11, -10, -11, 12, -11, 10, -12, 25, -49]);
    design.addPosition("e3", [-1, 0, 11, 0, -11, 0, -11, 10, -12, 24, -50]);
    design.addPosition("J3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z3", [0, 1, 11, -10, -11, 12, -11, 0, 0, 1, 0]);
    design.addPosition("T3", [-1, 0, 11, 0, -11, 0, -11, 10, -12, -12, 0]);
    design.addPosition("X2", [0, 1, 11, -10, -11, 12, -11, 0, 0, 0, 12]);
    design.addPosition("Y2", [-1, 0, 11, 0, -11, 0, -11, 10, -12, 0, -1]);
    design.addPosition("I2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 1, 11, -10, -11, 12, -11, 0, 0, 17, -57]);
    design.addPosition("b2", [-1, 1, 11, -10, -11, 12, -11, 10, -12, 16, -58]);
    design.addPosition("c2", [-1, 1, 11, -10, -11, 12, -11, 10, -12, 15, -59]);
    design.addPosition("d2", [-1, 1, 11, -10, -11, 12, -11, 10, -12, 14, -60]);
    design.addPosition("e2", [-1, 0, 11, 0, -11, 0, -11, 10, -12, 13, -61]);
    design.addPosition("J2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z2", [0, 1, 11, -10, -11, 12, -11, 0, 0, 1, 0]);
    design.addPosition("T2", [-1, 0, 11, 0, -11, 0, -11, 10, -12, -12, 0]);
    design.addPosition("X1", [0, 1, 0, -10, -11, 0, -11, 0, 0, 0, 0]);
    design.addPosition("Y1", [-1, 0, 0, 0, -11, 0, -11, 0, -12, 0, -1]);
    design.addPosition("I1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, -10, -11, 0, -11, 0, 0, 6, -68]);
    design.addPosition("b1", [-1, 1, 0, -10, -11, 0, -11, 0, -12, 5, -69]);
    design.addPosition("c1", [-1, 1, 0, -10, -11, 0, -11, 0, -12, 4, -70]);
    design.addPosition("d1", [-1, 1, 0, -10, -11, 0, -11, 0, -12, 3, -71]);
    design.addPosition("e1", [-1, 0, 0, 0, -11, 0, -11, 0, -12, 2, -72]);
    design.addPosition("J1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z1", [0, 1, 0, -10, -11, 0, -11, 0, 0, 1, 0]);
    design.addPosition("T1", [-1, 0, 0, 0, -11, 0, -11, 0, -12, -12, 0]);
    design.addPosition("W1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("board-zone", 2, [69, 70, 71, 72, 73, 58, 59, 60, 61, 62, 47, 48, 49, 50, 51, 36, 37, 38, 39, 40, 25, 26, 27, 28, 29, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7]);
    design.addZone("board-zone", 1, [69, 70, 71, 72, 73, 58, 59, 60, 61, 62, 47, 48, 49, 50, 51, 36, 37, 38, 39, 40, 25, 26, 27, 28, 29, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7]);
    design.addZone("promotion-zone", 2, [69, 70, 71, 72, 73, 58, 59, 60, 61, 62, 47, 48, 49, 50, 51]);
    design.addZone("promotion-zone", 1, [3, 4, 5, 6, 7, 14, 15, 16, 17, 18, 25, 26, 27, 28, 29]);

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
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	21);	// position
    design.addCommand(1, ZRF.ON_BOARD_DIR,	6);	// name
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
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	7);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-8);
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPiece("King", 0, 100);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [8], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [3], 0);

    design.addPiece("Gold", 1, 6);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [8], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 1, [69, 6], 0);

    design.addPiece("Silver", 2, 5);
    design.addMove(2, 0, [8], 0);
    design.addMove(2, 0, [7], 0);
    design.addMove(2, 0, [5], 0);
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [4], 0);
    design.addMove(2, 1, [69, 6], 0);

    design.addPiece("SilverP", 3, 6);
    design.addMove(3, 0, [4], 0);
    design.addMove(3, 0, [8], 0);
    design.addMove(3, 0, [2], 0);
    design.addMove(3, 0, [3], 0);
    design.addMove(3, 0, [0], 0);
    design.addMove(3, 0, [1], 0);

    design.addPiece("Knight", 4, 2);
    design.addMove(4, 2, [4, 8], 0);
    design.addMove(4, 2, [4, 3], 0);
    design.addMove(4, 1, [69, 6], 0);

    design.addPiece("KnightP", 5, 6);
    design.addMove(5, 0, [4], 0);
    design.addMove(5, 0, [8], 0);
    design.addMove(5, 0, [2], 0);
    design.addMove(5, 0, [3], 0);
    design.addMove(5, 0, [0], 0);
    design.addMove(5, 0, [1], 0);

    design.addPiece("Lance", 6, 5);
    design.addMove(6, 3, [4, 4], 0);
    design.addMove(6, 1, [69, 6], 0);

    design.addPiece("LanceP", 7, 6);
    design.addMove(7, 0, [4], 0);
    design.addMove(7, 0, [8], 0);
    design.addMove(7, 0, [2], 0);
    design.addMove(7, 0, [3], 0);
    design.addMove(7, 0, [0], 0);
    design.addMove(7, 0, [1], 0);

    design.addPiece("Bishop", 8, 10);
    design.addMove(8, 3, [8, 8], 0);
    design.addMove(8, 3, [5, 5], 0);
    design.addMove(8, 3, [7, 7], 0);
    design.addMove(8, 3, [3, 3], 0);
    design.addMove(8, 1, [69, 6], 0);

    design.addPiece("BishopP", 9, 11);
    design.addMove(9, 3, [8, 8], 0);
    design.addMove(9, 0, [4], 0);
    design.addMove(9, 3, [5, 5], 0);
    design.addMove(9, 0, [2], 0);
    design.addMove(9, 3, [7, 7], 0);
    design.addMove(9, 0, [0], 0);
    design.addMove(9, 3, [3, 3], 0);
    design.addMove(9, 0, [1], 0);

    design.addPiece("Rook", 10, 15);
    design.addMove(10, 3, [4, 4], 0);
    design.addMove(10, 3, [1, 1], 0);
    design.addMove(10, 3, [0, 0], 0);
    design.addMove(10, 3, [2, 2], 0);
    design.addMove(10, 1, [69, 6], 0);

    design.addPiece("RookP", 11, 16);
    design.addMove(11, 3, [4, 4], 0);
    design.addMove(11, 0, [8], 0);
    design.addMove(11, 3, [1, 1], 0);
    design.addMove(11, 0, [3], 0);
    design.addMove(11, 3, [0, 0], 0);
    design.addMove(11, 0, [7], 0);
    design.addMove(11, 3, [2, 2], 0);
    design.addMove(11, 0, [5], 0);

    design.setup("South", "King", 71);
    design.setup("South", "Gold", 61);
    design.setup("South", "Lance", 49);
    design.setup("South", "Knight", 69);
    design.setup("South", "Knight", 73);
    design.setup("South", "Silver", 59);
    design.setup("South", "Bishop", 70);
    design.setup("South", "Rook", 72);
    design.setup("North", "King", 5);
    design.setup("North", "Gold", 15);
    design.setup("North", "Lance", 27);
    design.setup("North", "Knight", 3);
    design.setup("North", "Knight", 7);
    design.setup("North", "Silver", 17);
    design.setup("North", "Bishop", 6);
    design.setup("North", "Rook", 4);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("SouthKing", "South King");
    view.defPiece("NorthKing", "North King");
    view.defPiece("SouthGold", "South Gold");
    view.defPiece("NorthGold", "North Gold");
    view.defPiece("SouthSilver", "South Silver");
    view.defPiece("NorthSilver", "North Silver");
    view.defPiece("SouthSilverP", "South SilverP");
    view.defPiece("NorthSilverP", "North SilverP");
    view.defPiece("SouthKnight", "South Knight");
    view.defPiece("NorthKnight", "North Knight");
    view.defPiece("SouthKnightP", "South KnightP");
    view.defPiece("NorthKnightP", "North KnightP");
    view.defPiece("SouthLance", "South Lance");
    view.defPiece("NorthLance", "North Lance");
    view.defPiece("SouthLanceP", "South LanceP");
    view.defPiece("NorthLanceP", "North LanceP");
    view.defPiece("SouthBishop", "South Bishop");
    view.defPiece("NorthBishop", "North Bishop");
    view.defPiece("SouthBishopP", "South BishopP");
    view.defPiece("NorthBishopP", "North BishopP");
    view.defPiece("SouthRook", "South Rook");
    view.defPiece("NorthRook", "North Rook");
    view.defPiece("SouthRookP", "South RookP");
    view.defPiece("NorthRookP", "North RookP");
 
    view.defPosition("X7", 9, 15, 41, 46);
    view.defPosition("Y7", 50, 15, 41, 46);
    view.defPosition("I7", 91, 15, 41, 46);
    view.defPosition("a7", 132, 15, 41, 46);
    view.defPosition("b7", 173, 15, 41, 46);
    view.defPosition("c7", 214, 15, 41, 46);
    view.defPosition("d7", 255, 15, 41, 46);
    view.defPosition("e7", 296, 15, 41, 46);
    view.defPosition("J7", 337, 15, 41, 46);
    view.defPosition("Z7", 378, 15, 41, 46);
    view.defPosition("T7", 419, 15, 41, 46);
    view.defPosition("X6", 9, 61, 41, 46);
    view.defPosition("Y6", 50, 61, 41, 46);
    view.defPosition("I6", 91, 61, 41, 46);
    view.defPosition("a6", 132, 61, 41, 46);
    view.defPosition("b6", 173, 61, 41, 46);
    view.defPosition("c6", 214, 61, 41, 46);
    view.defPosition("d6", 255, 61, 41, 46);
    view.defPosition("e6", 296, 61, 41, 46);
    view.defPosition("J6", 337, 61, 41, 46);
    view.defPosition("Z6", 378, 61, 41, 46);
    view.defPosition("T6", 419, 61, 41, 46);
    view.defPosition("X5", 9, 107, 41, 46);
    view.defPosition("Y5", 50, 107, 41, 46);
    view.defPosition("I5", 91, 107, 41, 46);
    view.defPosition("a5", 132, 107, 41, 46);
    view.defPosition("b5", 173, 107, 41, 46);
    view.defPosition("c5", 214, 107, 41, 46);
    view.defPosition("d5", 255, 107, 41, 46);
    view.defPosition("e5", 296, 107, 41, 46);
    view.defPosition("J5", 337, 107, 41, 46);
    view.defPosition("Z5", 378, 107, 41, 46);
    view.defPosition("T5", 419, 107, 41, 46);
    view.defPosition("X4", 9, 153, 41, 46);
    view.defPosition("Y4", 50, 153, 41, 46);
    view.defPosition("I4", 91, 153, 41, 46);
    view.defPosition("a4", 132, 153, 41, 46);
    view.defPosition("b4", 173, 153, 41, 46);
    view.defPosition("c4", 214, 153, 41, 46);
    view.defPosition("d4", 255, 153, 41, 46);
    view.defPosition("e4", 296, 153, 41, 46);
    view.defPosition("J4", 337, 153, 41, 46);
    view.defPosition("Z4", 378, 153, 41, 46);
    view.defPosition("T4", 419, 153, 41, 46);
    view.defPosition("X3", 9, 199, 41, 46);
    view.defPosition("Y3", 50, 199, 41, 46);
    view.defPosition("I3", 91, 199, 41, 46);
    view.defPosition("a3", 132, 199, 41, 46);
    view.defPosition("b3", 173, 199, 41, 46);
    view.defPosition("c3", 214, 199, 41, 46);
    view.defPosition("d3", 255, 199, 41, 46);
    view.defPosition("e3", 296, 199, 41, 46);
    view.defPosition("J3", 337, 199, 41, 46);
    view.defPosition("Z3", 378, 199, 41, 46);
    view.defPosition("T3", 419, 199, 41, 46);
    view.defPosition("X2", 9, 245, 41, 46);
    view.defPosition("Y2", 50, 245, 41, 46);
    view.defPosition("I2", 91, 245, 41, 46);
    view.defPosition("a2", 132, 245, 41, 46);
    view.defPosition("b2", 173, 245, 41, 46);
    view.defPosition("c2", 214, 245, 41, 46);
    view.defPosition("d2", 255, 245, 41, 46);
    view.defPosition("e2", 296, 245, 41, 46);
    view.defPosition("J2", 337, 245, 41, 46);
    view.defPosition("Z2", 378, 245, 41, 46);
    view.defPosition("T2", 419, 245, 41, 46);
    view.defPosition("X1", 9, 291, 41, 46);
    view.defPosition("Y1", 50, 291, 41, 46);
    view.defPosition("I1", 91, 291, 41, 46);
    view.defPosition("a1", 132, 291, 41, 46);
    view.defPosition("b1", 173, 291, 41, 46);
    view.defPosition("c1", 214, 291, 41, 46);
    view.defPosition("d1", 255, 291, 41, 46);
    view.defPosition("e1", 296, 291, 41, 46);
    view.defPosition("J1", 337, 291, 41, 46);
    view.defPosition("Z1", 378, 291, 41, 46);
    view.defPosition("T1", 419, 291, 41, 46);

    view.defPopup("Promote", 183, 50);
    view.defPopupPosition("W1", 12, 15, 39, 39);
    view.defPopupPosition("W2", 52, 15, 39, 39);
}
