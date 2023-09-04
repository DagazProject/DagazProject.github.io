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
    design.checkVersion("shared-pieces", "true");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("focus-extension", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");
    design.addDirection("wr");
    design.addDirection("br");
    design.addDirection("nx");
    design.addDirection("sm");

    design.addPlayer("White", [1, 0, 3, 2, 4, 5, 6, 7]);
    design.addPlayer("Black", [0, 1, 2, 3, 5, 0, 6, 7]);

    design.addPosition("x8", [0, 1, 14, 0, 0, 14, 0, 0]);
    design.addPosition("y8", [-1, 0, 14, 0, 0, 14, 0, 0]);
    design.addPosition("I8", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("a8", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("b8", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("c8", [0, 1, 14, 0, 0, 0, 99, 0]);
    design.addPosition("d8", [-1, 1, 14, 0, 0, 0, 99, 0]);
    design.addPosition("e8", [-1, 1, 14, 0, 0, 0, 99, 0]);
    design.addPosition("f8", [-1, 0, 14, 0, 0, 0, 85, 0]);
    design.addPosition("g8", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("h8", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("J8", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("z8", [0, 1, 14, 0, 14, 0, 0, 0]);
    design.addPosition("t8", [-1, 0, 14, 0, 14, 0, 0, 0]);
    design.addPosition("x7", [0, 1, 14, -14, 0, 14, 0, 0]);
    design.addPosition("y7", [-1, 0, 14, -14, 0, 14, 0, 0]);
    design.addPosition("I7", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("a7", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("b7", [0, 1, 14, 0, 0, 0, 85, 75]);
    design.addPosition("c7", [-1, 1, 14, -14, 0, 0, -14, 73]);
    design.addPosition("d7", [-1, 1, 14, -14, 0, 0, -14, 71]);
    design.addPosition("e7", [-1, 1, 14, -14, 0, 0, -14, 69]);
    design.addPosition("f7", [-1, 1, 14, -14, 0, 0, -14, 67]);
    design.addPosition("g7", [-1, 0, 14, 0, 0, 0, 57, 65]);
    design.addPosition("h7", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("J7", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("z7", [0, 1, 14, -14, 14, 0, 0, 0]);
    design.addPosition("t7", [-1, 0, 14, -14, 14, 0, 0, 0]);
    design.addPosition("x6", [0, 1, 14, -14, 0, 14, 0, 0]);
    design.addPosition("y6", [-1, 0, 14, -14, 0, 14, 0, 0]);
    design.addPosition("I6", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("a6", [0, 1, 14, 0, 0, 0, 57, 0]);
    design.addPosition("b6", [-1, 1, 14, -14, 0, 0, -14, 47]);
    design.addPosition("c6", [-1, 1, 14, -14, 0, 0, -14, 45]);
    design.addPosition("d6", [-1, 1, 14, -14, 0, 0, -14, 43]);
    design.addPosition("e6", [-1, 1, 14, -14, 0, 0, -14, 41]);
    design.addPosition("f6", [-1, 1, 14, -14, 0, 0, -14, 39]);
    design.addPosition("g6", [-1, 1, 14, -14, 0, 0, -14, 37]);
    design.addPosition("h6", [-1, 0, 14, 0, 0, 0, 0, 0]);
    design.addPosition("J6", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("z6", [0, 1, 14, -14, 14, 0, 0, 0]);
    design.addPosition("t6", [-1, 0, 14, -14, 14, 0, 0, 0]);
    design.addPosition("x5", [0, 1, 14, -14, 0, 14, 0, 0]);
    design.addPosition("y5", [-1, 0, 14, -14, 0, 14, 0, 0]);
    design.addPosition("I5", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("a5", [0, 1, 14, -14, 0, 0, -14, 0]);
    design.addPosition("b5", [-1, 1, 14, -14, 0, 0, -14, 19]);
    design.addPosition("c5", [-1, 1, 14, -14, 0, 0, -14, 17]);
    design.addPosition("d5", [-1, 1, 14, -14, 0, 0, -14, 15]);
    design.addPosition("e5", [-1, 1, 14, -14, 0, 0, -14, 13]);
    design.addPosition("f5", [-1, 1, 14, -14, 0, 0, -14, 11]);
    design.addPosition("g5", [-1, 1, 14, -14, 0, 0, -14, 9]);
    design.addPosition("h5", [-1, 0, 14, -14, 0, 0, -14, 0]);
    design.addPosition("J5", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("z5", [0, 1, 14, -14, 14, 0, 0, 0]);
    design.addPosition("t5", [-1, 0, 14, -14, 14, 0, 0, 0]);
    design.addPosition("x4", [0, 1, 14, -14, 0, 14, 0, 0]);
    design.addPosition("y4", [-1, 0, 14, -14, 0, 14, 0, 0]);
    design.addPosition("I4", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("a4", [0, 1, 14, -14, 0, 0, -14, 0]);
    design.addPosition("b4", [-1, 1, 14, -14, 0, 0, -14, -9]);
    design.addPosition("c4", [-1, 1, 14, -14, 0, 0, -14, -11]);
    design.addPosition("d4", [-1, 1, 14, -14, 0, 0, -14, -13]);
    design.addPosition("e4", [-1, 1, 14, -14, 0, 0, -14, -15]);
    design.addPosition("f4", [-1, 1, 14, -14, 0, 0, -14, -17]);
    design.addPosition("g4", [-1, 1, 14, -14, 0, 0, -14, -19]);
    design.addPosition("h4", [-1, 0, 14, -14, 0, 0, -14, 0]);
    design.addPosition("J4", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("z4", [0, 1, 14, -14, 14, 0, 0, 0]);
    design.addPosition("t4", [-1, 0, 14, -14, 14, 0, 0, 0]);
    design.addPosition("x3", [0, 1, 14, -14, 0, 14, 0, 0]);
    design.addPosition("y3", [-1, 0, 14, -14, 0, 14, 0, 0]);
    design.addPosition("I3", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("a3", [0, 1, 0, -14, 0, 0, -14, 0]);
    design.addPosition("b3", [-1, 1, 14, -14, 0, 0, -14, -37]);
    design.addPosition("c3", [-1, 1, 14, -14, 0, 0, -14, -39]);
    design.addPosition("d3", [-1, 1, 14, -14, 0, 0, -14, -41]);
    design.addPosition("e3", [-1, 1, 14, -14, 0, 0, -14, -43]);
    design.addPosition("f3", [-1, 1, 14, -14, 0, 0, -14, -45]);
    design.addPosition("g3", [-1, 1, 14, -14, 0, 0, -14, -47]);
    design.addPosition("h3", [-1, 0, 0, -14, 0, 0, -14, 0]);
    design.addPosition("J3", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("z3", [0, 1, 14, -14, 14, 0, 0, 0]);
    design.addPosition("t3", [-1, 0, 14, -14, 14, 0, 0, 0]);
    design.addPosition("x2", [0, 1, 14, -14, 0, 14, 0, 0]);
    design.addPosition("y2", [-1, 0, 14, -14, 0, 14, 0, 0]);
    design.addPosition("I2", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("a2", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("b2", [0, 1, 0, -14, 0, 0, -14, -65]);
    design.addPosition("c2", [-1, 1, 14, -14, 0, 0, -14, -67]);
    design.addPosition("d2", [-1, 1, 14, -14, 0, 0, -14, -69]);
    design.addPosition("e2", [-1, 1, 14, -14, 0, 0, -14, -71]);
    design.addPosition("f2", [-1, 1, 14, -14, 0, 0, -14, -73]);
    design.addPosition("g2", [-1, 0, 0, -14, 0, 0, -14, -75]);
    design.addPosition("h2", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("J2", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("z2", [0, 1, 14, -14, 14, 0, 0, 0]);
    design.addPosition("t2", [-1, 0, 14, -14, 14, 0, 0, 0]);
    design.addPosition("x1", [0, 1, 0, -14, 0, -97, 0, 0]);
    design.addPosition("y1", [-1, 0, 0, -14, 0, 0, 0, 0]);
    design.addPosition("I1", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("a1", [0, 0, 0, 0, -89, -101, -28, 0]);
    design.addPosition("b1", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("c1", [0, 1, 0, -14, 0, 0, -14, 0]);
    design.addPosition("d1", [-1, 1, 0, -14, 0, 0, -14, 0]);
    design.addPosition("e1", [-1, 1, 0, -14, 0, 0, -14, 0]);
    design.addPosition("f1", [-1, 0, 0, -14, 0, 0, -14, 0]);
    design.addPosition("g1", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("h1", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("J1", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("z1", [0, 1, 0, -14, -97, 0, 0, 0]);
    design.addPosition("t1", [-1, 0, 0, -14, 0, 0, 0, 0]);

    design.addZone("board-zone", 1, [73, 59, 45, 31, 88, 74, 60, 46, 32, 18, 103, 89, 75, 61, 47, 33, 19, 5, 104, 90, 76, 62, 48, 34, 20, 6, 105, 91, 77, 63, 49, 35, 21, 7, 106, 92, 78, 64, 50, 36, 22, 8, 93, 79, 65, 51, 37, 23, 80, 66, 52, 38]);
    design.addZone("board-zone", 2, [73, 59, 45, 31, 88, 74, 60, 46, 32, 18, 103, 89, 75, 61, 47, 33, 19, 5, 104, 90, 76, 62, 48, 34, 20, 6, 105, 91, 77, 63, 49, 35, 21, 7, 106, 92, 78, 64, 50, 36, 22, 8, 93, 79, 65, 51, 37, 23, 80, 66, 52, 38]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	7);
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-8);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	7);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-8);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	7);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-8);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	7);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-8);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	21);	// position
    design.addCommand(4, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	10);
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.JUMP,	-11);
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	6);	// mark
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	7);	// back
    design.addCommand(5, ZRF.FUNCTION,	26);	// capture
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

//  design.addPriority(1);			// init-type
//  design.addPriority(0);			// normal-type

    design.addPiece("Man", 0, 2);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 1, [0, 0], 0);
    design.addMove(0, 2, [2, 2], 0);
    design.addMove(0, 3, [1, 1], 0);
    design.addMove(0, 4, [101, 6], 0);
    design.addMove(0, 5, [7], 1);

    design.setup("White", "Man", 88);
    design.setup("White", "Man", 89);
    design.setup("White", "Man", 60);
    design.setup("White", "Man", 61);
    design.setup("White", "Man", 32);
    design.setup("White", "Man", 33);
    design.setup("White", "Man", 76);
    design.setup("White", "Man", 77);
    design.setup("White", "Man", 48);
    design.setup("White", "Man", 49);
    design.setup("White", "Man", 20);
    design.setup("White", "Man", 21);
    design.setup("White", "Man", 92);
    design.setup("White", "Man", 93);
    design.setup("White", "Man", 64);
    design.setup("White", "Man", 65);
    design.setup("White", "Man", 36);
    design.setup("White", "Man", 37);
    design.setup("Black", "Man", 74);
    design.setup("Black", "Man", 75);
    design.setup("Black", "Man", 46);
    design.setup("Black", "Man", 47);
    design.setup("Black", "Man", 18);
    design.setup("Black", "Man", 19);
    design.setup("Black", "Man", 90);
    design.setup("Black", "Man", 91);
    design.setup("Black", "Man", 62);
    design.setup("Black", "Man", 63);
    design.setup("Black", "Man", 34);
    design.setup("Black", "Man", 35);
    design.setup("Black", "Man", 78);
    design.setup("Black", "Man", 79);
    design.setup("Black", "Man", 50);
    design.setup("Black", "Man", 51);
    design.setup("Black", "Man", 22);
    design.setup("Black", "Man", 23);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
 
    view.defPosition("x8", 5, 5, 49, 49);
    view.defPosition("y8", 54, 5, 49, 49);
    view.defPosition("I8", 103, 5, 49, 49);
    view.defPosition("a8", 152, 5, 49, 49);
    view.defPosition("b8", 201, 5, 49, 49);
    view.defPosition("c8", 250, 5, 49, 49);
    view.defPosition("d8", 299, 5, 49, 49);
    view.defPosition("e8", 348, 5, 49, 49);
    view.defPosition("f8", 397, 5, 49, 49);
    view.defPosition("g8", 446, 5, 49, 49);
    view.defPosition("h8", 495, 5, 49, 49);
    view.defPosition("J8", 544, 5, 49, 49);
    view.defPosition("z8", 593, 5, 49, 49);
    view.defPosition("t8", 642, 5, 49, 49);
    view.defPosition("x7", 5, 54, 49, 49);
    view.defPosition("y7", 54, 54, 49, 49);
    view.defPosition("I7", 103, 54, 49, 49);
    view.defPosition("a7", 152, 54, 49, 49);
    view.defPosition("b7", 201, 54, 49, 49);
    view.defPosition("c7", 250, 54, 49, 49);
    view.defPosition("d7", 299, 54, 49, 49);
    view.defPosition("e7", 348, 54, 49, 49);
    view.defPosition("f7", 397, 54, 49, 49);
    view.defPosition("g7", 446, 54, 49, 49);
    view.defPosition("h7", 495, 54, 49, 49);
    view.defPosition("J7", 544, 54, 49, 49);
    view.defPosition("z7", 593, 54, 49, 49);
    view.defPosition("t7", 642, 54, 49, 49);
    view.defPosition("x6", 5, 103, 49, 49);
    view.defPosition("y6", 54, 103, 49, 49);
    view.defPosition("I6", 103, 103, 49, 49);
    view.defPosition("a6", 152, 103, 49, 49);
    view.defPosition("b6", 201, 103, 49, 49);
    view.defPosition("c6", 250, 103, 49, 49);
    view.defPosition("d6", 299, 103, 49, 49);
    view.defPosition("e6", 348, 103, 49, 49);
    view.defPosition("f6", 397, 103, 49, 49);
    view.defPosition("g6", 446, 103, 49, 49);
    view.defPosition("h6", 495, 103, 49, 49);
    view.defPosition("J6", 544, 103, 49, 49);
    view.defPosition("z6", 593, 103, 49, 49);
    view.defPosition("t6", 642, 103, 49, 49);
    view.defPosition("x5", 5, 152, 49, 49);
    view.defPosition("y5", 54, 152, 49, 49);
    view.defPosition("I5", 103, 152, 49, 49);
    view.defPosition("a5", 152, 152, 49, 49);
    view.defPosition("b5", 201, 152, 49, 49);
    view.defPosition("c5", 250, 152, 49, 49);
    view.defPosition("d5", 299, 152, 49, 49);
    view.defPosition("e5", 348, 152, 49, 49);
    view.defPosition("f5", 397, 152, 49, 49);
    view.defPosition("g5", 446, 152, 49, 49);
    view.defPosition("h5", 495, 152, 49, 49);
    view.defPosition("J5", 544, 152, 49, 49);
    view.defPosition("z5", 593, 152, 49, 49);
    view.defPosition("t5", 642, 152, 49, 49);
    view.defPosition("x4", 5, 201, 49, 49);
    view.defPosition("y4", 54, 201, 49, 49);
    view.defPosition("I4", 103, 201, 49, 49);
    view.defPosition("a4", 152, 201, 49, 49);
    view.defPosition("b4", 201, 201, 49, 49);
    view.defPosition("c4", 250, 201, 49, 49);
    view.defPosition("d4", 299, 201, 49, 49);
    view.defPosition("e4", 348, 201, 49, 49);
    view.defPosition("f4", 397, 201, 49, 49);
    view.defPosition("g4", 446, 201, 49, 49);
    view.defPosition("h4", 495, 201, 49, 49);
    view.defPosition("J4", 544, 201, 49, 49);
    view.defPosition("z4", 593, 201, 49, 49);
    view.defPosition("t4", 642, 201, 49, 49);
    view.defPosition("x3", 5, 250, 49, 49);
    view.defPosition("y3", 54, 250, 49, 49);
    view.defPosition("I3", 103, 250, 49, 49);
    view.defPosition("a3", 152, 250, 49, 49);
    view.defPosition("b3", 201, 250, 49, 49);
    view.defPosition("c3", 250, 250, 49, 49);
    view.defPosition("d3", 299, 250, 49, 49);
    view.defPosition("e3", 348, 250, 49, 49);
    view.defPosition("f3", 397, 250, 49, 49);
    view.defPosition("g3", 446, 250, 49, 49);
    view.defPosition("h3", 495, 250, 49, 49);
    view.defPosition("J3", 544, 250, 49, 49);
    view.defPosition("z3", 593, 250, 49, 49);
    view.defPosition("t3", 642, 250, 49, 49);
    view.defPosition("x2", 5, 299, 49, 49);
    view.defPosition("y2", 54, 299, 49, 49);
    view.defPosition("I2", 103, 299, 49, 49);
    view.defPosition("a2", 152, 299, 49, 49);
    view.defPosition("b2", 201, 299, 49, 49);
    view.defPosition("c2", 250, 299, 49, 49);
    view.defPosition("d2", 299, 299, 49, 49);
    view.defPosition("e2", 348, 299, 49, 49);
    view.defPosition("f2", 397, 299, 49, 49);
    view.defPosition("g2", 446, 299, 49, 49);
    view.defPosition("h2", 495, 299, 49, 49);
    view.defPosition("J2", 544, 299, 49, 49);
    view.defPosition("z2", 593, 299, 49, 49);
    view.defPosition("t2", 642, 299, 49, 49);
    view.defPosition("x1", 5, 348, 49, 49);
    view.defPosition("y1", 54, 348, 49, 49);
    view.defPosition("I1", 103, 348, 49, 49);
    view.defPosition("a1", 152, 348, 49, 49);
    view.defPosition("b1", 201, 348, 49, 49);
    view.defPosition("c1", 250, 348, 49, 49);
    view.defPosition("d1", 299, 348, 49, 49);
    view.defPosition("e1", 348, 348, 49, 49);
    view.defPosition("f1", 397, 348, 49, 49);
    view.defPosition("g1", 446, 348, 49, 49);
    view.defPosition("h1", 495, 348, 49, 49);
    view.defPosition("J1", 544, 348, 49, 49);
    view.defPosition("z1", 593, 348, 49, 49);
    view.defPosition("t1", 642, 348, 49, 49);
}
