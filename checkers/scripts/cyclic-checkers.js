Dagaz.Controller.persistense = "session";

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
    design.checkVersion("smart-moves", "true");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "true");

    design.addDirection("se"); // 0
    design.addDirection("sw"); // 1
    design.addDirection("ne"); // 2
    design.addDirection("nw"); // 3
    design.addDirection("wr"); // 4
    design.addDirection("br"); // 5

    design.addPlayer("White", [3, 2, 1, 0, 4, 5]);
    design.addPlayer("Black", [3, 2, 1, 0, 5, 4]);

    design.addPosition("a8", [9, 0, 0, 0, 79, 64]);
    design.addPosition("b8", [9, 7, 0, 0, 0, 0]);
    design.addPosition("c8", [9, 7, 0, 0, 0, 0]);
    design.addPosition("d8", [9, 7, 0, 0, 0, 0]);
    design.addPosition("e8", [9, 7, 0, 0, 0, 0]);
    design.addPosition("f8", [9, 7, 0, 0, 0, 0]);
    design.addPosition("g8", [9, 7, 0, 0, 0, 0]);
    design.addPosition("h8", [0, 7, 0, 0, 0, 0]);
    design.addPosition("a7", [9, 0, -7, 0, 0, 0]);
    design.addPosition("b7", [9, 7, -7, -9, 0, 0]);
    design.addPosition("c7", [9, 7, -7, -9, 0, 0]);
    design.addPosition("d7", [9, 7, -7, -9, 0, 0]);
    design.addPosition("e7", [9, 7, -7, -9, 0, 0]);
    design.addPosition("f7", [9, 7, -7, -9, 0, 0]);
    design.addPosition("g7", [9, 7, -7, -9, 0, 0]);
    design.addPosition("h7", [0, 7, 0, -9, 0, 0]);
    design.addPosition("a6", [9, 0, -7, 0, 0, 0]);
    design.addPosition("b6", [9, 7, -7, -9, 0, 0]);
    design.addPosition("c6", [9, 7, -7, -9, 0, 0]);
    design.addPosition("d6", [9, 7, -7, -9, 0, 0]);
    design.addPosition("e6", [9, 7, -7, -9, 0, 0]);
    design.addPosition("f6", [9, 7, -7, -9, 0, 0]);
    design.addPosition("g6", [9, 7, -7, -9, 0, 0]);
    design.addPosition("h6", [0, 7, 0, -9, 0, 0]);
    design.addPosition("a5", [9, 0, -7, 0, 0, 0]);
    design.addPosition("b5", [9, 7, -7, -9, 0, 0]);
    design.addPosition("c5", [9, 7, -7, -9, 0, 0]);
    design.addPosition("d5", [9, 7, -7, -9, 0, 0]);
    design.addPosition("e5", [9, 7, -7, -9, 0, 0]);
    design.addPosition("f5", [9, 7, -7, -9, 0, 0]);
    design.addPosition("g5", [9, 7, -7, -9, 0, 0]);
    design.addPosition("h5", [0, 7, 0, -9, 0, 0]);
    design.addPosition("a4", [9, 0, -7, 0, 0, 0]);
    design.addPosition("b4", [9, 7, -7, -9, 0, 0]);
    design.addPosition("c4", [9, 7, -7, -9, 0, 0]);
    design.addPosition("d4", [9, 7, -7, -9, 0, 0]);
    design.addPosition("e4", [9, 7, -7, -9, 0, 0]);
    design.addPosition("f4", [9, 7, -7, -9, 0, 0]);
    design.addPosition("g4", [9, 7, -7, -9, 0, 0]);
    design.addPosition("h4", [0, 7, 0, -9, 0, 0]);
    design.addPosition("a3", [9, 0, -7, 0, 0, 0]);
    design.addPosition("b3", [9, 7, -7, -9, 0, 0]);
    design.addPosition("c3", [9, 7, -7, -9, 0, 0]);
    design.addPosition("d3", [9, 7, -7, -9, 0, 0]);
    design.addPosition("e3", [9, 7, -7, -9, 0, 0]);
    design.addPosition("f3", [9, 7, -7, -9, 0, 0]);
    design.addPosition("g3", [9, 7, -7, -9, 0, 0]);
    design.addPosition("h3", [0, 7, 0, -9, 0, 0]);
    design.addPosition("a2", [9, 0, -7, 0, 0, 0]);
    design.addPosition("b2", [9, 7, -7, -9, 0, 0]);
    design.addPosition("c2", [9, 7, -7, -9, 0, 0]);
    design.addPosition("d2", [9, 7, -7, -9, 0, 0]);
    design.addPosition("e2", [9, 7, -7, -9, 0, 0]);
    design.addPosition("f2", [9, 7, -7, -9, 0, 0]);
    design.addPosition("g2", [9, 7, -7, -9, 0, 0]);
    design.addPosition("h2", [0, 7, 0, -9, 0, 0]);
    design.addPosition("a1", [0, 0, -7, 0, 0, 0]);
    design.addPosition("b1", [0, 0, -7, -9, 0, 0]);
    design.addPosition("c1", [0, 0, -7, -9, 0, 0]);
    design.addPosition("d1", [0, 0, -7, -9, 0, 0]);
    design.addPosition("e1", [0, 0, -7, -9, 0, 0]);
    design.addPosition("f1", [0, 0, -7, -9, 0, 0]);
    design.addPosition("g1", [0, 0, -7, -9, 0, 0]);
    design.addPosition("h1", [0, 0, 0, -9, 0, 0]);
    design.addPosition("X8", [0, 0, 0, 0, 0, 2]);
    design.addPosition("Y8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("X7", [0, 0, 0, 0, 0, 2]);
    design.addPosition("Y7", [0, 0, 0, 0, -2, 0]);
    design.addPosition("X6", [0, 0, 0, 0, 0, 2]);
    design.addPosition("Y6", [0, 0, 0, 0, -2, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 2]);
    design.addPosition("Y5", [0, 0, 0, 0, -2, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 2]);
    design.addPosition("Y4", [0, 0, 0, 0, -2, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 2]);
    design.addPosition("Y3", [0, 0, 0, 0, -2, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 2]);
    design.addPosition("Y2", [0, 0, 0, 0, -2, 0]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y1", [0, 0, 0, 0, -2, 0]);

    design.addZone("promotion", 1, [1, 3, 5, 7]);
    design.addZone("promotion", 2, [56, 58, 60, 62]);
    design.addZone("home", 1, [56, 58, 60, 62, 49, 51, 53, 55, 40, 42, 44, 46, 33, 35, 37, 39]);
    design.addZone("home", 2, [24, 26, 28, 30, 17, 19, 21, 23, 8, 10, 12, 14, 1, 3, 5, 7]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	1);	// King
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.PROMOTE,	1);	// King
    design.addCommand(1, ZRF.MODE,	2);	// continue-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	3);
    design.addCommand(1, ZRF.MODE,	2);	// continue-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.PROMOTE,	1);	// King
    design.addCommand(2, ZRF.MODE,	2);	// continue-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	3);
    design.addCommand(2, ZRF.MODE,	2);	// continue-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
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
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-5);
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	18);
    design.addCommand(4, ZRF.FUNCTION,	6);	// mark
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	5);
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-6);
    design.addCommand(4, ZRF.FUNCTION,	26);	// capture
    design.addCommand(4, ZRF.FUNCTION,	7);	// back
    design.addCommand(4, ZRF.FORK,	4);
    design.addCommand(4, ZRF.MODE,	2);	// continue-type
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	4);	// $5
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-19);
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
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	18);
    design.addCommand(5, ZRF.FUNCTION,	6);	// mark
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	5);
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-6);
    design.addCommand(5, ZRF.FUNCTION,	26);	// capture
    design.addCommand(5, ZRF.FUNCTION,	7);	// back
    design.addCommand(5, ZRF.FORK,	4);
    design.addCommand(5, ZRF.MODE,	2);	// continue-type
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	4);	// $5
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-19);
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	7);
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.JUMP,	-8);
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	18);
    design.addCommand(6, ZRF.FUNCTION,	6);	// mark
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	5);
    design.addCommand(6, ZRF.PARAM,	3);	// $4
    design.addCommand(6, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-6);
    design.addCommand(6, ZRF.FUNCTION,	26);	// capture
    design.addCommand(6, ZRF.FUNCTION,	7);	// back
    design.addCommand(6, ZRF.FORK,	4);
    design.addCommand(6, ZRF.MODE,	2);	// continue-type
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.PARAM,	4);	// $5
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-19);
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// jump-type
    design.addPriority(1);			// normal-type

    design.addPiece("Man", 0);
    design.addMove(0, 0, [3], 1);
    design.addMove(0, 0, [2], 1);
    design.addMove(0, 1, [3, 3], 1);
    design.addMove(0, 1, [2, 2], 1);
    design.addMove(0, 1, [1, 1], 1);
    design.addMove(0, 1, [0, 0], 1);
    design.addMove(0, 2, [3, 3], 0);
    design.addMove(0, 2, [2, 2], 0);
    design.addMove(0, 2, [1, 1], 0);
    design.addMove(0, 2, [0, 0], 0);
    design.addMove(0, 2, [3, 3], 2);
    design.addMove(0, 2, [2, 2], 2);
    design.addMove(0, 2, [1, 1], 2);
    design.addMove(0, 2, [0, 0], 2);
    design.addMove(0, 1, [3, 3], 2);
    design.addMove(0, 1, [2, 2], 2);
    design.addMove(0, 1, [1, 1], 2);
    design.addMove(0, 1, [0, 0], 2);

    design.addPiece("King", 1);
    design.addMove(1, 3, [3, 3], 1);
    design.addMove(1, 3, [2, 2], 1);
    design.addMove(1, 3, [1, 1], 1);
    design.addMove(1, 3, [0, 0], 1);
    design.addMove(1, 4, [3, 3, 3, 3, 3], 1);
    design.addMove(1, 4, [2, 2, 2, 2, 2], 1);
    design.addMove(1, 4, [1, 1, 1, 1, 1], 1);
    design.addMove(1, 4, [0, 0, 0, 0, 0], 1);
    design.addMove(1, 5, [3, 3, 3, 3, 3], 0);
    design.addMove(1, 5, [2, 2, 2, 2, 2], 0);
    design.addMove(1, 5, [1, 1, 1, 1, 1], 0);
    design.addMove(1, 5, [0, 0, 0, 0, 0], 0);
    design.addMove(1, 6, [3, 3, 3, 3, 3], 2);
    design.addMove(1, 6, [2, 2, 2, 2, 2], 2);
    design.addMove(1, 6, [1, 1, 1, 1, 1], 2);
    design.addMove(1, 6, [0, 0, 0, 0, 0], 2);

    design.setup("White", "Man", 56);
    design.setup("White", "Man", 58);
    design.setup("White", "Man", 60);
    design.setup("White", "Man", 62);
    design.setup("White", "Man", 49);
    design.setup("White", "Man", 51);
    design.setup("White", "Man", 53);
    design.setup("White", "Man", 55);
    design.setup("White", "Man", 40);
    design.setup("White", "Man", 42);
    design.setup("White", "Man", 44);
    design.setup("White", "Man", 46);
    design.setup("Black", "Man", 1);
    design.setup("Black", "Man", 3);
    design.setup("Black", "Man", 5);
    design.setup("Black", "Man", 7);
    design.setup("Black", "Man", 8);
    design.setup("Black", "Man", 10);
    design.setup("Black", "Man", 12);
    design.setup("Black", "Man", 14);
    design.setup("Black", "Man", 17);
    design.setup("Black", "Man", 19);
    design.setup("Black", "Man", 21);
    design.setup("Black", "Man", 23);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a8", 62, 2, 50, 50);
    view.defPosition("b8", 112, 2, 50, 50);
    view.defPosition("c8", 162, 2, 50, 50);
    view.defPosition("d8", 212, 2, 50, 50);
    view.defPosition("e8", 262, 2, 50, 50);
    view.defPosition("f8", 312, 2, 50, 50);
    view.defPosition("g8", 362, 2, 50, 50);
    view.defPosition("h8", 412, 2, 50, 50);
    view.defPosition("a7", 62, 52, 50, 50);
    view.defPosition("b7", 112, 52, 50, 50);
    view.defPosition("c7", 162, 52, 50, 50);
    view.defPosition("d7", 212, 52, 50, 50);
    view.defPosition("e7", 262, 52, 50, 50);
    view.defPosition("f7", 312, 52, 50, 50);
    view.defPosition("g7", 362, 52, 50, 50);
    view.defPosition("h7", 412, 52, 50, 50);
    view.defPosition("a6", 62, 102, 50, 50);
    view.defPosition("b6", 112, 102, 50, 50);
    view.defPosition("c6", 162, 102, 50, 50);
    view.defPosition("d6", 212, 102, 50, 50);
    view.defPosition("e6", 262, 102, 50, 50);
    view.defPosition("f6", 312, 102, 50, 50);
    view.defPosition("g6", 362, 102, 50, 50);
    view.defPosition("h6", 412, 102, 50, 50);
    view.defPosition("a5", 62, 152, 50, 50);
    view.defPosition("b5", 112, 152, 50, 50);
    view.defPosition("c5", 162, 152, 50, 50);
    view.defPosition("d5", 212, 152, 50, 50);
    view.defPosition("e5", 262, 152, 50, 50);
    view.defPosition("f5", 312, 152, 50, 50);
    view.defPosition("g5", 362, 152, 50, 50);
    view.defPosition("h5", 412, 152, 50, 50);
    view.defPosition("a4", 62, 202, 50, 50);
    view.defPosition("b4", 112, 202, 50, 50);
    view.defPosition("c4", 162, 202, 50, 50);
    view.defPosition("d4", 212, 202, 50, 50);
    view.defPosition("e4", 262, 202, 50, 50);
    view.defPosition("f4", 312, 202, 50, 50);
    view.defPosition("g4", 362, 202, 50, 50);
    view.defPosition("h4", 412, 202, 50, 50);
    view.defPosition("a3", 62, 252, 50, 50);
    view.defPosition("b3", 112, 252, 50, 50);
    view.defPosition("c3", 162, 252, 50, 50);
    view.defPosition("d3", 212, 252, 50, 50);
    view.defPosition("e3", 262, 252, 50, 50);
    view.defPosition("f3", 312, 252, 50, 50);
    view.defPosition("g3", 362, 252, 50, 50);
    view.defPosition("h3", 412, 252, 50, 50);
    view.defPosition("a2", 62, 302, 50, 50);
    view.defPosition("b2", 112, 302, 50, 50);
    view.defPosition("c2", 162, 302, 50, 50);
    view.defPosition("d2", 212, 302, 50, 50);
    view.defPosition("e2", 262, 302, 50, 50);
    view.defPosition("f2", 312, 302, 50, 50);
    view.defPosition("g2", 362, 302, 50, 50);
    view.defPosition("h2", 412, 302, 50, 50);
    view.defPosition("a1", 62, 352, 50, 50);
    view.defPosition("b1", 112, 352, 50, 50);
    view.defPosition("c1", 162, 352, 50, 50);
    view.defPosition("d1", 212, 352, 50, 50);
    view.defPosition("e1", 262, 352, 50, 50);
    view.defPosition("f1", 312, 352, 50, 50);
    view.defPosition("g1", 362, 352, 50, 50);
    view.defPosition("h1", 412, 352, 50, 50);
    view.defPosition("X8", 2, 2, 50, 50);
    view.defPosition("Y8", 472, 2, 50, 50);
    view.defPosition("X7", 2, 52, 50, 50);
    view.defPosition("Y7", 472, 52, 50, 50);
    view.defPosition("X6", 2, 102, 50, 50);
    view.defPosition("Y6", 472, 102, 50, 50);
    view.defPosition("X5", 2, 152, 50, 50);
    view.defPosition("Y5", 472, 152, 50, 50);
    view.defPosition("X4", 2, 202, 50, 50);
    view.defPosition("Y4", 472, 202, 50, 50);
    view.defPosition("X3", 2, 252, 50, 50);
    view.defPosition("Y3", 472, 252, 50, 50);
    view.defPosition("X2", 2, 302, 50, 50);
    view.defPosition("Y2", 472, 302, 50, 50);
    view.defPosition("X1", 2, 352, 50, 50);
    view.defPosition("Y1", 472, 352, 50, 50);
}
