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

    design.addDirection("se");  // 0
    design.addDirection("s");   // 1
    design.addDirection("sw");  // 2
    design.addDirection("e");   // 3
    design.addDirection("w");   // 4
    design.addDirection("ne");  // 5
    design.addDirection("nw");  // 6
    design.addDirection("nx");  // 7
    design.addDirection("n");   // 8
    design.addDirection("sr");  // 9
    design.addDirection("nr");  // 10

    design.addPlayer("South", [6, 8, 5, 4, 3, 2, 0, 7, 1, 9, 10]);
    design.addPlayer("North", [6, 8, 5, 4, 3, 2, 0, 7, 1, 10, 9]);

    design.addPosition("X5", [10, 9, 0, 1, 0, 0, 0, 0, 0, 1, 10]);
    design.addPosition("Y5", [0, 9, 8, 0, -1, 0, 0, 0, 0, 0, -1]);
    design.addPosition("I5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [10, 9, 0, 1, 0, 0, 0, 37, 0, 40, -2]);
    design.addPosition("b5", [10, 9, 8, 1, -1, 0, 0, 37, 0, 39, -3]);
    design.addPosition("c5", [0, 9, 8, 0, -1, 0, 0, 0, 0, 38, -4]);
    design.addPosition("J5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z5", [10, 9, 0, 1, 0, 0, 0, 0, 0, 1, 10]);
    design.addPosition("T5", [0, 9, 8, 0, -1, 0, 0, 0, 0, 28, -1]);
    design.addPosition("X4", [10, 9, 0, 1, 0, -8, 0, -9, -9, 1, 10]);
    design.addPosition("Y4", [0, 9, 8, 0, -1, 0, -10, -9, -9, -10, -1]);
    design.addPosition("I4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [10, 9, 0, 1, 0, -8, 0, -9, -9, 31, -11]);
    design.addPosition("b4", [10, 9, 8, 1, -1, -8, -10, -9, -9, 30, -12]);
    design.addPosition("c4", [0, 9, 8, 0, -1, 0, -10, -9, -9, 29, -13]);
    design.addPosition("J4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z4", [10, 9, 0, 1, 0, -8, 0, -9, -9, 1, 10]);
    design.addPosition("T4", [0, 9, 8, 0, -1, 0, -10, -9, -9, -10, -1]);
    design.addPosition("X3", [10, 9, 0, 1, 0, -8, 0, -9, -9, 1, 10]);
    design.addPosition("Y3", [0, 9, 8, 0, -1, 0, -10, -9, -9, -10, -1]);
    design.addPosition("I3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [10, 9, 0, 1, 0, -8, 0, -9, -9, 22, -20]);
    design.addPosition("b3", [10, 9, 8, 1, -1, -8, -10, -9, -9, 21, -21]);
    design.addPosition("c3", [0, 9, 8, 0, -1, 0, -10, -9, -9, 20, -22]);
    design.addPosition("J3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z3", [10, 9, 0, 1, 0, -8, 0, -9, -9, 1, 10]);
    design.addPosition("T3", [0, 9, 8, 0, -1, 0, -10, -9, -9, -10, -1]);
    design.addPosition("X2", [10, 9, 0, 1, 0, -8, 0, -9, -9, 1, 10]);
    design.addPosition("Y2", [0, 9, 8, 0, -1, 0, -10, -9, -9, -10, -1]);
    design.addPosition("I2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [10, 9, 0, 1, 0, -8, 0, -9, -9, 13, -29]);
    design.addPosition("b2", [10, 9, 8, 1, -1, -8, -10, -9, -9, 12, -30]);
    design.addPosition("c2", [0, 9, 8, 0, -1, 0, -10, -9, -9, 11, -31]);
    design.addPosition("J2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z2", [10, 9, 0, 1, 0, -8, 0, -9, -9, 1, 10]);
    design.addPosition("T2", [0, 9, 8, 0, -1, 0, -10, -9, -9, -10, -1]);
    design.addPosition("X1", [0, 0, 0, 1, 0, -8, 0, -9, -9, 1, -28]);
    design.addPosition("Y1", [0, 0, 0, 0, -1, 0, -10, -9, -9, -10, -1]);
    design.addPosition("I1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -8, 0, -9, -9, 4, -38]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -8, -10, -9, -9, 3, -39]);
    design.addPosition("c1", [0, 0, 0, 0, -1, 0, -10, -9, -9, 2, -40]);
    design.addPosition("J1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z1", [0, 0, 0, 1, 0, -8, 0, -9, -9, 1, 0]);
    design.addPosition("T1", [0, 0, 0, 0, -1, 0, -10, -9, -9, -10, -1]);
    design.addPosition("W1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("board-zone", 1, [39, 40, 41, 30, 31, 32, 21, 22, 23, 12, 13, 14, 3, 4, 5]);
    design.addZone("board-zone", 2, [39, 40, 41, 30, 31, 32, 21, 22, 23, 12, 13, 14, 3, 4, 5]);
    design.addZone("promotion-zone", 1, [3, 4, 5, 12, 13, 14]);
    design.addZone("promotion-zone", 2, [39, 40, 41, 30, 31, 32]);
    design.addZone("goal-zone", 1, [3, 4, 5]);
    design.addZone("goal-zone", 2, [39, 40, 41]);

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
    design.addCommand(1, ZRF.ON_BOARD_DIR,	7);	// name
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
    design.addMove(0, 0, [8], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [5], 0);

    design.addPiece("Gold", 1, 6);
    design.addMove(1, 0, [8], 0);
    design.addMove(1, 0, [6], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 1, [39, 7], 0);

    design.addPiece("Silver", 2, 5);
    design.addMove(2, 0, [6], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 0, [5], 0);
    design.addMove(2, 0, [8], 0);
    design.addMove(2, 1, [39, 7], 0);

    design.addPiece("SilverP", 3, 6);
    design.addMove(3, 0, [8], 0);
    design.addMove(3, 0, [6], 0);
    design.addMove(3, 0, [1], 0);
    design.addMove(3, 0, [5], 0);
    design.addMove(3, 0, [4], 0);
    design.addMove(3, 0, [3], 0);

    design.addPiece("Knight", 4, 2);
    design.addMove(4, 2, [8, 6], 0);
    design.addMove(4, 2, [8, 5], 0);
    design.addMove(4, 1, [39, 7], 0);

    design.addPiece("KnightP", 5, 6);
    design.addMove(5, 0, [8], 0);
    design.addMove(5, 0, [6], 0);
    design.addMove(5, 0, [1], 0);
    design.addMove(5, 0, [5], 0);
    design.addMove(5, 0, [4], 0);
    design.addMove(5, 0, [3], 0);

    design.addPiece("Lance", 6, 5);
    design.addMove(6, 3, [8, 8], 0);
    design.addMove(6, 1, [39, 7], 0);

    design.addPiece("LanceP", 7, 6);
    design.addMove(7, 0, [8], 0);
    design.addMove(7, 0, [6], 0);
    design.addMove(7, 0, [1], 0);
    design.addMove(7, 0, [5], 0);
    design.addMove(7, 0, [4], 0);
    design.addMove(7, 0, [3], 0);

    design.setup("South", "King", 40);
    design.setup("South", "Gold", 39);
    design.setup("South", "Silver", 41);
    design.setup("South", "Knight", 43);
    design.setup("South", "Lance", 44);
    design.setup("North", "King", 4);
    design.setup("North", "Gold", 5);
    design.setup("North", "Silver", 3);
    design.setup("North", "Knight", 0);
    design.setup("North", "Lance", 1);
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
 
    view.defPosition("X5", 9, 15, 41, 46);
    view.defPosition("Y5", 50, 15, 41, 46);
    view.defPosition("I5", 91, 15, 41, 46);
    view.defPosition("a5", 132, 15, 41, 46);
    view.defPosition("b5", 173, 15, 41, 46);
    view.defPosition("c5", 214, 15, 41, 46);
    view.defPosition("J5", 255, 15, 41, 46);
    view.defPosition("Z5", 296, 15, 41, 46);
    view.defPosition("T5", 337, 15, 41, 46);
    view.defPosition("X4", 9, 61, 41, 46);
    view.defPosition("Y4", 50, 61, 41, 46);
    view.defPosition("I4", 91, 61, 41, 46);
    view.defPosition("a4", 132, 61, 41, 46);
    view.defPosition("b4", 173, 61, 41, 46);
    view.defPosition("c4", 214, 61, 41, 46);
    view.defPosition("J4", 255, 61, 41, 46);
    view.defPosition("Z4", 296, 61, 41, 46);
    view.defPosition("T4", 337, 61, 41, 46);
    view.defPosition("X3", 9, 107, 41, 46);
    view.defPosition("Y3", 50, 107, 41, 46);
    view.defPosition("I3", 91, 107, 41, 46);
    view.defPosition("a3", 132, 107, 41, 46);
    view.defPosition("b3", 173, 107, 41, 46);
    view.defPosition("c3", 214, 107, 41, 46);
    view.defPosition("J3", 255, 107, 41, 46);
    view.defPosition("Z3", 296, 107, 41, 46);
    view.defPosition("T3", 337, 107, 41, 46);
    view.defPosition("X2", 9, 153, 41, 46);
    view.defPosition("Y2", 50, 153, 41, 46);
    view.defPosition("I2", 91, 153, 41, 46);
    view.defPosition("a2", 132, 153, 41, 46);
    view.defPosition("b2", 173, 153, 41, 46);
    view.defPosition("c2", 214, 153, 41, 46);
    view.defPosition("J2", 255, 153, 41, 46);
    view.defPosition("Z2", 296, 153, 41, 46);
    view.defPosition("T2", 337, 153, 41, 46);
    view.defPosition("X1", 9, 199, 41, 46);
    view.defPosition("Y1", 50, 199, 41, 46);
    view.defPosition("I1", 91, 199, 41, 46);
    view.defPosition("a1", 132, 199, 41, 46);
    view.defPosition("b1", 173, 199, 41, 46);
    view.defPosition("c1", 214, 199, 41, 46);
    view.defPosition("J1", 255, 199, 41, 46);
    view.defPosition("Z1", 296, 199, 41, 46);
    view.defPosition("T1", 337, 199, 41, 46);

    view.defPopup("Promote", 142, 50);
    view.defPopupPosition("W1", 12, 15, 39, 39);
    view.defPopupPosition("W2", 52, 15, 39, 39);
}
