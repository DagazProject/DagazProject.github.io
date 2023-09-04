Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH  = 10;
Dagaz.Model.HEIGHT = 10;

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
    design.checkVersion("maximal-captures", "2");
    design.checkVersion("deferred-captures", "true");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("ne");
    design.addDirection("w");
    design.addDirection("nw");
    design.addDirection("n");

    design.addPlayer("White", [6, 7, 4, 5, 2, 3, 0, 1]);
    design.addPlayer("Black", [6, 7, 4, 5, 2, 3, 0, 1]);

    design.addPosition("a10", [11, 10, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b10", [11, 10, 9, 1, 0, -1, 0, 0]);
    design.addPosition("c10", [11, 10, 9, 1, 0, -1, 0, 0]);
    design.addPosition("d10", [11, 10, 9, 1, 0, -1, 0, 0]);
    design.addPosition("e10", [11, 10, 9, 1, 0, -1, 0, 0]);
    design.addPosition("f10", [11, 10, 9, 1, 0, -1, 0, 0]);
    design.addPosition("g10", [11, 10, 9, 1, 0, -1, 0, 0]);
    design.addPosition("h10", [11, 10, 9, 1, 0, -1, 0, 0]);
    design.addPosition("i10", [11, 10, 9, 1, 0, -1, 0, 0]);
    design.addPosition("j10", [0, 10, 9, 0, 0, -1, 0, 0]);
    design.addPosition("a9", [11, 10, 0, 1, -9, 0, 0, -10]);
    design.addPosition("b9", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("c9", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("d9", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("e9", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("f9", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("g9", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("h9", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("i9", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("j9", [0, 10, 9, 0, 0, -1, -11, -10]);
    design.addPosition("a8", [11, 10, 0, 1, -9, 0, 0, -10]);
    design.addPosition("b8", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("c8", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("d8", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("e8", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("f8", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("g8", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("h8", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("i8", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("j8", [0, 10, 9, 0, 0, -1, -11, -10]);
    design.addPosition("a7", [11, 10, 0, 1, -9, 0, 0, -10]);
    design.addPosition("b7", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("c7", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("d7", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("e7", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("f7", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("g7", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("h7", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("i7", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("j7", [0, 10, 9, 0, 0, -1, -11, -10]);
    design.addPosition("a6", [11, 10, 0, 1, -9, 0, 0, -10]);
    design.addPosition("b6", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("c6", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("d6", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("e6", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("f6", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("g6", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("h6", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("i6", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("j6", [0, 10, 9, 0, 0, -1, -11, -10]);
    design.addPosition("a5", [11, 10, 0, 1, -9, 0, 0, -10]);
    design.addPosition("b5", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("c5", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("d5", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("e5", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("f5", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("g5", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("h5", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("i5", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("j5", [0, 10, 9, 0, 0, -1, -11, -10]);
    design.addPosition("a4", [11, 10, 0, 1, -9, 0, 0, -10]);
    design.addPosition("b4", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("c4", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("d4", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("e4", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("f4", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("g4", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("h4", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("i4", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("j4", [0, 10, 9, 0, 0, -1, -11, -10]);
    design.addPosition("a3", [11, 10, 0, 1, -9, 0, 0, -10]);
    design.addPosition("b3", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("c3", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("d3", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("e3", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("f3", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("g3", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("h3", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("i3", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("j3", [0, 10, 9, 0, 0, -1, -11, -10]);
    design.addPosition("a2", [11, 10, 0, 1, -9, 0, 0, -10]);
    design.addPosition("b2", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("c2", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("d2", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("e2", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("f2", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("g2", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("h2", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("i2", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("j2", [0, 10, 9, 0, 0, -1, -11, -10]);
    design.addPosition("a1", [0, 0, 0, 1, -9, 0, 0, -10]);
    design.addPosition("b1", [0, 0, 0, 1, -9, -1, -11, -10]);
    design.addPosition("c1", [0, 0, 0, 1, -9, -1, -11, -10]);
    design.addPosition("d1", [0, 0, 0, 1, -9, -1, -11, -10]);
    design.addPosition("e1", [0, 0, 0, 1, -9, -1, -11, -10]);
    design.addPosition("f1", [0, 0, 0, 1, -9, -1, -11, -10]);
    design.addPosition("g1", [0, 0, 0, 1, -9, -1, -11, -10]);
    design.addPosition("h1", [0, 0, 0, 1, -9, -1, -11, -10]);
    design.addPosition("i1", [0, 0, 0, 1, -9, -1, -11, -10]);
    design.addPosition("j1", [0, 0, 0, 0, 0, -1, -11, -10]);

    design.addZone("promotion", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    design.addZone("promotion", 2, [90, 91, 92, 93, 94, 95, 96, 97, 98, 99]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	26);	// capture
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.MODE,	0);	// jump-type
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-5);
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	18);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-6);
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.FORK,	4);
    design.addCommand(2, ZRF.MODE,	2);	// cont-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	4);	// $5
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-19);
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	7);
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.JUMP,	-8);
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	18);
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	5);
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-6);
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.FORK,	4);
    design.addCommand(3, ZRF.MODE,	2);	// cont-type
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	4);	// $5
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-19);
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
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// jump-type
    design.addPriority(1);			// normal-type

    design.addPiece("Man", 0);
    design.addMove(0, 0, [6, 6], 0);
    design.addMove(0, 0, [4, 4], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [7, 7], 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [5, 5], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 1, [6], 1);
    design.addMove(0, 1, [4], 1);
    design.addMove(0, 1, [2], 1);
    design.addMove(0, 1, [0], 1);
    design.addMove(0, 1, [7], 1);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 1, [5], 1);
    design.addMove(0, 1, [1], 1);

    design.addPiece("King", 1);
    design.addMove(1, 2, [6, 6, 6, 6, 6], 0);
    design.addMove(1, 2, [4, 4, 4, 4, 4], 0);
    design.addMove(1, 2, [2, 2, 2, 2, 2], 0);
    design.addMove(1, 2, [0, 0, 0, 0, 0], 0);
    design.addMove(1, 2, [7, 7, 7, 7, 7], 0);
    design.addMove(1, 2, [3, 3, 3, 3, 3], 0);
    design.addMove(1, 2, [5, 5, 5, 5, 5], 0);
    design.addMove(1, 2, [1, 1, 1, 1, 1], 0);
    design.addMove(1, 3, [6, 6, 6, 6, 6], 2);
    design.addMove(1, 3, [4, 4, 4, 4, 4], 2);
    design.addMove(1, 3, [2, 2, 2, 2, 2], 2);
    design.addMove(1, 3, [0, 0, 0, 0, 0], 2);
    design.addMove(1, 3, [7, 7, 7, 7, 7], 2);
    design.addMove(1, 3, [3, 3, 3, 3, 3], 2);
    design.addMove(1, 3, [5, 5, 5, 5, 5], 2);
    design.addMove(1, 3, [1, 1, 1, 1, 1], 2);
    design.addMove(1, 4, [6, 6], 1);
    design.addMove(1, 4, [4, 4], 1);
    design.addMove(1, 4, [2, 2], 1);
    design.addMove(1, 4, [0, 0], 1);
    design.addMove(1, 4, [7, 7], 1);
    design.addMove(1, 4, [3, 3], 1);
    design.addMove(1, 4, [5, 5], 1);
    design.addMove(1, 4, [1, 1], 1);

    design.setup("White", "Man", 90);
    design.setup("White", "Man", 91);
    design.setup("White", "Man", 92);
    design.setup("White", "Man", 93);
    design.setup("White", "Man", 94);
    design.setup("White", "Man", 95);
    design.setup("White", "Man", 96);
    design.setup("White", "Man", 97);
    design.setup("White", "Man", 98);
    design.setup("White", "Man", 99);
    design.setup("White", "Man", 80);
    design.setup("White", "Man", 81);
    design.setup("White", "Man", 82);
    design.setup("White", "Man", 83);
    design.setup("White", "Man", 84);
    design.setup("White", "Man", 85);
    design.setup("White", "Man", 86);
    design.setup("White", "Man", 87);
    design.setup("White", "Man", 88);
    design.setup("White", "Man", 89);
    design.setup("Black", "Man", 10);
    design.setup("Black", "Man", 11);
    design.setup("Black", "Man", 12);
    design.setup("Black", "Man", 13);
    design.setup("Black", "Man", 14);
    design.setup("Black", "Man", 15);
    design.setup("Black", "Man", 16);
    design.setup("Black", "Man", 17);
    design.setup("Black", "Man", 18);
    design.setup("Black", "Man", 19);
    design.setup("Black", "Man", 0);
    design.setup("Black", "Man", 1);
    design.setup("Black", "Man", 2);
    design.setup("Black", "Man", 3);
    design.setup("Black", "Man", 4);
    design.setup("Black", "Man", 5);
    design.setup("Black", "Man", 6);
    design.setup("Black", "Man", 7);
    design.setup("Black", "Man", 8);
    design.setup("Black", "Man", 9);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a10", 2, 2, 50, 50);
    view.defPosition("b10", 52, 2, 50, 50);
    view.defPosition("c10", 102, 2, 50, 50);
    view.defPosition("d10", 152, 2, 50, 50);
    view.defPosition("e10", 202, 2, 50, 50);
    view.defPosition("f10", 252, 2, 50, 50);
    view.defPosition("g10", 302, 2, 50, 50);
    view.defPosition("h10", 352, 2, 50, 50);
    view.defPosition("i10", 402, 2, 50, 50);
    view.defPosition("j10", 452, 2, 50, 50);
    view.defPosition("a9", 2, 52, 50, 50);
    view.defPosition("b9", 52, 52, 50, 50);
    view.defPosition("c9", 102, 52, 50, 50);
    view.defPosition("d9", 152, 52, 50, 50);
    view.defPosition("e9", 202, 52, 50, 50);
    view.defPosition("f9", 252, 52, 50, 50);
    view.defPosition("g9", 302, 52, 50, 50);
    view.defPosition("h9", 352, 52, 50, 50);
    view.defPosition("i9", 402, 52, 50, 50);
    view.defPosition("j9", 452, 52, 50, 50);
    view.defPosition("a8", 2, 102, 50, 50);
    view.defPosition("b8", 52, 102, 50, 50);
    view.defPosition("c8", 102, 102, 50, 50);
    view.defPosition("d8", 152, 102, 50, 50);
    view.defPosition("e8", 202, 102, 50, 50);
    view.defPosition("f8", 252, 102, 50, 50);
    view.defPosition("g8", 302, 102, 50, 50);
    view.defPosition("h8", 352, 102, 50, 50);
    view.defPosition("i8", 402, 102, 50, 50);
    view.defPosition("j8", 452, 102, 50, 50);
    view.defPosition("a7", 2, 152, 50, 50);
    view.defPosition("b7", 52, 152, 50, 50);
    view.defPosition("c7", 102, 152, 50, 50);
    view.defPosition("d7", 152, 152, 50, 50);
    view.defPosition("e7", 202, 152, 50, 50);
    view.defPosition("f7", 252, 152, 50, 50);
    view.defPosition("g7", 302, 152, 50, 50);
    view.defPosition("h7", 352, 152, 50, 50);
    view.defPosition("i7", 402, 152, 50, 50);
    view.defPosition("j7", 452, 152, 50, 50);
    view.defPosition("a6", 2, 202, 50, 50);
    view.defPosition("b6", 52, 202, 50, 50);
    view.defPosition("c6", 102, 202, 50, 50);
    view.defPosition("d6", 152, 202, 50, 50);
    view.defPosition("e6", 202, 202, 50, 50);
    view.defPosition("f6", 252, 202, 50, 50);
    view.defPosition("g6", 302, 202, 50, 50);
    view.defPosition("h6", 352, 202, 50, 50);
    view.defPosition("i6", 402, 202, 50, 50);
    view.defPosition("j6", 452, 202, 50, 50);
    view.defPosition("a5", 2, 252, 50, 50);
    view.defPosition("b5", 52, 252, 50, 50);
    view.defPosition("c5", 102, 252, 50, 50);
    view.defPosition("d5", 152, 252, 50, 50);
    view.defPosition("e5", 202, 252, 50, 50);
    view.defPosition("f5", 252, 252, 50, 50);
    view.defPosition("g5", 302, 252, 50, 50);
    view.defPosition("h5", 352, 252, 50, 50);
    view.defPosition("i5", 402, 252, 50, 50);
    view.defPosition("j5", 452, 252, 50, 50);
    view.defPosition("a4", 2, 302, 50, 50);
    view.defPosition("b4", 52, 302, 50, 50);
    view.defPosition("c4", 102, 302, 50, 50);
    view.defPosition("d4", 152, 302, 50, 50);
    view.defPosition("e4", 202, 302, 50, 50);
    view.defPosition("f4", 252, 302, 50, 50);
    view.defPosition("g4", 302, 302, 50, 50);
    view.defPosition("h4", 352, 302, 50, 50);
    view.defPosition("i4", 402, 302, 50, 50);
    view.defPosition("j4", 452, 302, 50, 50);
    view.defPosition("a3", 2, 352, 50, 50);
    view.defPosition("b3", 52, 352, 50, 50);
    view.defPosition("c3", 102, 352, 50, 50);
    view.defPosition("d3", 152, 352, 50, 50);
    view.defPosition("e3", 202, 352, 50, 50);
    view.defPosition("f3", 252, 352, 50, 50);
    view.defPosition("g3", 302, 352, 50, 50);
    view.defPosition("h3", 352, 352, 50, 50);
    view.defPosition("i3", 402, 352, 50, 50);
    view.defPosition("j3", 452, 352, 50, 50);
    view.defPosition("a2", 2, 402, 50, 50);
    view.defPosition("b2", 52, 402, 50, 50);
    view.defPosition("c2", 102, 402, 50, 50);
    view.defPosition("d2", 152, 402, 50, 50);
    view.defPosition("e2", 202, 402, 50, 50);
    view.defPosition("f2", 252, 402, 50, 50);
    view.defPosition("g2", 302, 402, 50, 50);
    view.defPosition("h2", 352, 402, 50, 50);
    view.defPosition("i2", 402, 402, 50, 50);
    view.defPosition("j2", 452, 402, 50, 50);
    view.defPosition("a1", 2, 452, 50, 50);
    view.defPosition("b1", 52, 452, 50, 50);
    view.defPosition("c1", 102, 452, 50, 50);
    view.defPosition("d1", 152, 452, 50, 50);
    view.defPosition("e1", 202, 452, 50, 50);
    view.defPosition("f1", 252, 452, 50, 50);
    view.defPosition("g1", 302, 452, 50, 50);
    view.defPosition("h1", 352, 452, 50, 50);
    view.defPosition("i1", 402, 452, 50, 50);
    view.defPosition("j1", 452, 452, 50, 50);
}
