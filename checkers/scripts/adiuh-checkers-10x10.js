Dagaz.View.TARGET_COLOR = "#FFC44E";
Dagaz.Model.BOARD_SIZE = 100;
Dagaz.Model.WIDTH = 10;
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
    design.checkVersion("smart-moves", "from");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("se"); // 0
    design.addDirection("sw"); // 1
    design.addDirection("ne"); // 2
    design.addDirection("nw"); // 3

    design.addPlayer("White", [3, 2, 1, 0]);
    design.addPlayer("Black", [3, 2, 1, 0]);

    design.addPosition("a10", [11, 0, 0, 0]);
    design.addPosition("b10", [11, 9, 0, 0]);
    design.addPosition("c10", [11, 9, 0, 0]);
    design.addPosition("d10", [11, 9, 0, 0]);
    design.addPosition("e10", [11, 9, 0, 0]);
    design.addPosition("f10", [11, 9, 0, 0]);
    design.addPosition("g10", [11, 9, 0, 0]);
    design.addPosition("h10", [11, 9, 0, 0]);
    design.addPosition("i10", [11, 9, 0, 0]);
    design.addPosition("j10", [0, 9, 0, 0]);
    design.addPosition("a9", [11, 0, -9, 0]);
    design.addPosition("b9", [11, 9, -9, -11]);
    design.addPosition("c9", [11, 9, -9, -11]);
    design.addPosition("d9", [11, 9, -9, -11]);
    design.addPosition("e9", [11, 9, -9, -11]);
    design.addPosition("f9", [11, 9, -9, -11]);
    design.addPosition("g9", [11, 9, -9, -11]);
    design.addPosition("h9", [11, 9, -9, -11]);
    design.addPosition("i9", [11, 9, -9, -11]);
    design.addPosition("j9", [0, 9, 0, -11]);
    design.addPosition("a8", [11, 0, -9, 0]);
    design.addPosition("b8", [11, 9, -9, -11]);
    design.addPosition("c8", [11, 9, -9, -11]);
    design.addPosition("d8", [11, 9, -9, -11]);
    design.addPosition("e8", [11, 9, -9, -11]);
    design.addPosition("f8", [11, 9, -9, -11]);
    design.addPosition("g8", [11, 9, -9, -11]);
    design.addPosition("h8", [11, 9, -9, -11]);
    design.addPosition("i8", [11, 9, -9, -11]);
    design.addPosition("j8", [0, 9, 0, -11]);
    design.addPosition("a7", [11, 0, -9, 0]);
    design.addPosition("b7", [11, 9, -9, -11]);
    design.addPosition("c7", [11, 9, -9, -11]);
    design.addPosition("d7", [11, 9, -9, -11]);
    design.addPosition("e7", [11, 9, -9, -11]);
    design.addPosition("f7", [11, 9, -9, -11]);
    design.addPosition("g7", [11, 9, -9, -11]);
    design.addPosition("h7", [11, 9, -9, -11]);
    design.addPosition("i7", [11, 9, -9, -11]);
    design.addPosition("j7", [0, 9, 0, -11]);
    design.addPosition("a6", [11, 0, -9, 0]);
    design.addPosition("b6", [11, 9, -9, -11]);
    design.addPosition("c6", [11, 9, -9, -11]);
    design.addPosition("d6", [11, 9, -9, -11]);
    design.addPosition("e6", [11, 9, -9, -11]);
    design.addPosition("f6", [11, 9, -9, -11]);
    design.addPosition("g6", [11, 9, -9, -11]);
    design.addPosition("h6", [11, 9, -9, -11]);
    design.addPosition("i6", [11, 9, -9, -11]);
    design.addPosition("j6", [0, 9, 0, -11]);
    design.addPosition("a5", [11, 0, -9, 0]);
    design.addPosition("b5", [11, 9, -9, -11]);
    design.addPosition("c5", [11, 9, -9, -11]);
    design.addPosition("d5", [11, 9, -9, -11]);
    design.addPosition("e5", [11, 9, -9, -11]);
    design.addPosition("f5", [11, 9, -9, -11]);
    design.addPosition("g5", [11, 9, -9, -11]);
    design.addPosition("h5", [11, 9, -9, -11]);
    design.addPosition("i5", [11, 9, -9, -11]);
    design.addPosition("j5", [0, 9, 0, -11]);
    design.addPosition("a4", [11, 0, -9, 0]);
    design.addPosition("b4", [11, 9, -9, -11]);
    design.addPosition("c4", [11, 9, -9, -11]);
    design.addPosition("d4", [11, 9, -9, -11]);
    design.addPosition("e4", [11, 9, -9, -11]);
    design.addPosition("f4", [11, 9, -9, -11]);
    design.addPosition("g4", [11, 9, -9, -11]);
    design.addPosition("h4", [11, 9, -9, -11]);
    design.addPosition("i4", [11, 9, -9, -11]);
    design.addPosition("j4", [0, 9, 0, -11]);
    design.addPosition("a3", [11, 0, -9, 0]);
    design.addPosition("b3", [11, 9, -9, -11]);
    design.addPosition("c3", [11, 9, -9, -11]);
    design.addPosition("d3", [11, 9, -9, -11]);
    design.addPosition("e3", [11, 9, -9, -11]);
    design.addPosition("f3", [11, 9, -9, -11]);
    design.addPosition("g3", [11, 9, -9, -11]);
    design.addPosition("h3", [11, 9, -9, -11]);
    design.addPosition("i3", [11, 9, -9, -11]);
    design.addPosition("j3", [0, 9, 0, -11]);
    design.addPosition("a2", [11, 0, -9, 0]);
    design.addPosition("b2", [11, 9, -9, -11]);
    design.addPosition("c2", [11, 9, -9, -11]);
    design.addPosition("d2", [11, 9, -9, -11]);
    design.addPosition("e2", [11, 9, -9, -11]);
    design.addPosition("f2", [11, 9, -9, -11]);
    design.addPosition("g2", [11, 9, -9, -11]);
    design.addPosition("h2", [11, 9, -9, -11]);
    design.addPosition("i2", [11, 9, -9, -11]);
    design.addPosition("j2", [0, 9, 0, -11]);
    design.addPosition("a1", [0, 0, -9, 0]);
    design.addPosition("b1", [0, 0, -9, -11]);
    design.addPosition("c1", [0, 0, -9, -11]);
    design.addPosition("d1", [0, 0, -9, -11]);
    design.addPosition("e1", [0, 0, -9, -11]);
    design.addPosition("f1", [0, 0, -9, -11]);
    design.addPosition("g1", [0, 0, -9, -11]);
    design.addPosition("h1", [0, 0, -9, -11]);
    design.addPosition("i1", [0, 0, -9, -11]);
    design.addPosition("j1", [0, 0, 0, -11]);

    design.addZone("promotion", 1, [1, 3, 5, 7, 9]);
    design.addZone("promotion", 2, [90, 92, 94, 96, 98]);

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
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	1);	// King
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
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
    design.addCommand(2, ZRF.IF,	17);
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
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	4);	// $5
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-18);
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// jump-type
    design.addPriority(1);			// normal-type

    design.addPiece("Man", 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 1, [2], 1);

    design.addPiece("King", 1);
    design.addMove(1, 2, [3, 3, 3, 3, 3], 0);
    design.addMove(1, 2, [2, 2, 2, 2, 2], 0);
    design.addMove(1, 2, [1, 1, 1, 1, 1], 0);
    design.addMove(1, 2, [0, 0, 0, 0, 0], 0);

    design.setup("White", "Man", 90);
    design.setup("White", "Man", 92);
    design.setup("White", "Man", 94);
    design.setup("White", "Man", 96);
    design.setup("White", "Man", 98);
    design.setup("White", "Man", 81);
    design.setup("White", "Man", 83);
    design.setup("White", "Man", 85);
    design.setup("White", "Man", 87);
    design.setup("White", "Man", 89);
    design.setup("White", "Man", 70);
    design.setup("White", "Man", 72);
    design.setup("White", "Man", 74);
    design.setup("White", "Man", 76);
    design.setup("White", "Man", 78);
    design.setup("White", "Man", 61);
    design.setup("White", "Man", 63);
    design.setup("White", "Man", 65);
    design.setup("White", "Man", 67);
    design.setup("White", "Man", 69);
    design.setup("Black", "Man", 1);
    design.setup("Black", "Man", 3);
    design.setup("Black", "Man", 5);
    design.setup("Black", "Man", 7);
    design.setup("Black", "Man", 9);
    design.setup("Black", "Man", 10);
    design.setup("Black", "Man", 12);
    design.setup("Black", "Man", 14);
    design.setup("Black", "Man", 16);
    design.setup("Black", "Man", 18);
    design.setup("Black", "Man", 21);
    design.setup("Black", "Man", 23);
    design.setup("Black", "Man", 25);
    design.setup("Black", "Man", 27);
    design.setup("Black", "Man", 29);
    design.setup("Black", "Man", 30);
    design.setup("Black", "Man", 32);
    design.setup("Black", "Man", 34);
    design.setup("Black", "Man", 36);
    design.setup("Black", "Man", 38);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a10", 2, 44, 68, 68);
    view.defPosition("b10", 70, 44, 68, 68);
    view.defPosition("c10", 138, 44, 68, 68);
    view.defPosition("d10", 206, 44, 68, 68);
    view.defPosition("e10", 274, 44, 68, 68);
    view.defPosition("f10", 342, 44, 68, 68);
    view.defPosition("g10", 410, 44, 68, 68);
    view.defPosition("h10", 478, 44, 68, 68);
    view.defPosition("i10", 546, 44, 68, 68);
    view.defPosition("j10", 614, 44, 68, 68);
    view.defPosition("a9", 2, 112, 68, 68);
    view.defPosition("b9", 70, 112, 68, 68);
    view.defPosition("c9", 138, 112, 68, 68);
    view.defPosition("d9", 206, 112, 68, 68);
    view.defPosition("e9", 274, 112, 68, 68);
    view.defPosition("f9", 342, 112, 68, 68);
    view.defPosition("g9", 410, 112, 68, 68);
    view.defPosition("h9", 478, 112, 68, 68);
    view.defPosition("i9", 546, 112, 68, 68);
    view.defPosition("j9", 614, 112, 68, 68);
    view.defPosition("a8", 2, 180, 68, 68);
    view.defPosition("b8", 70, 180, 68, 68);
    view.defPosition("c8", 138, 180, 68, 68);
    view.defPosition("d8", 206, 180, 68, 68);
    view.defPosition("e8", 274, 180, 68, 68);
    view.defPosition("f8", 342, 180, 68, 68);
    view.defPosition("g8", 410, 180, 68, 68);
    view.defPosition("h8", 478, 180, 68, 68);
    view.defPosition("i8", 546, 180, 68, 68);
    view.defPosition("j8", 614, 180, 68, 68);
    view.defPosition("a7", 2, 248, 68, 68);
    view.defPosition("b7", 70, 248, 68, 68);
    view.defPosition("c7", 138, 248, 68, 68);
    view.defPosition("d7", 206, 248, 68, 68);
    view.defPosition("e7", 274, 248, 68, 68);
    view.defPosition("f7", 342, 248, 68, 68);
    view.defPosition("g7", 410, 248, 68, 68);
    view.defPosition("h7", 478, 248, 68, 68);
    view.defPosition("i7", 546, 248, 68, 68);
    view.defPosition("j7", 614, 248, 68, 68);
    view.defPosition("a6", 2, 316, 68, 68);
    view.defPosition("b6", 70, 316, 68, 68);
    view.defPosition("c6", 138, 316, 68, 68);
    view.defPosition("d6", 206, 316, 68, 68);
    view.defPosition("e6", 274, 316, 68, 68);
    view.defPosition("f6", 342, 316, 68, 68);
    view.defPosition("g6", 410, 316, 68, 68);
    view.defPosition("h6", 478, 316, 68, 68);
    view.defPosition("i6", 546, 316, 68, 68);
    view.defPosition("j6", 614, 316, 68, 68);
    view.defPosition("a5", 2, 384, 68, 68);
    view.defPosition("b5", 70, 384, 68, 68);
    view.defPosition("c5", 138, 384, 68, 68);
    view.defPosition("d5", 206, 384, 68, 68);
    view.defPosition("e5", 274, 384, 68, 68);
    view.defPosition("f5", 342, 384, 68, 68);
    view.defPosition("g5", 410, 384, 68, 68);
    view.defPosition("h5", 478, 384, 68, 68);
    view.defPosition("i5", 546, 384, 68, 68);
    view.defPosition("j5", 614, 384, 68, 68);
    view.defPosition("a4", 2, 452, 68, 68);
    view.defPosition("b4", 70, 452, 68, 68);
    view.defPosition("c4", 138, 452, 68, 68);
    view.defPosition("d4", 206, 452, 68, 68);
    view.defPosition("e4", 274, 452, 68, 68);
    view.defPosition("f4", 342, 452, 68, 68);
    view.defPosition("g4", 410, 452, 68, 68);
    view.defPosition("h4", 478, 452, 68, 68);
    view.defPosition("i4", 546, 452, 68, 68);
    view.defPosition("j4", 614, 452, 68, 68);
    view.defPosition("a3", 2, 520, 68, 68);
    view.defPosition("b3", 70, 520, 68, 68);
    view.defPosition("c3", 138, 520, 68, 68);
    view.defPosition("d3", 206, 520, 68, 68);
    view.defPosition("e3", 274, 520, 68, 68);
    view.defPosition("f3", 342, 520, 68, 68);
    view.defPosition("g3", 410, 520, 68, 68);
    view.defPosition("h3", 478, 520, 68, 68);
    view.defPosition("i3", 546, 520, 68, 68);
    view.defPosition("j3", 614, 520, 68, 68);
    view.defPosition("a2", 2, 588, 68, 68);
    view.defPosition("b2", 70, 588, 68, 68);
    view.defPosition("c2", 138, 588, 68, 68);
    view.defPosition("d2", 206, 588, 68, 68);
    view.defPosition("e2", 274, 588, 68, 68);
    view.defPosition("f2", 342, 588, 68, 68);
    view.defPosition("g2", 410, 588, 68, 68);
    view.defPosition("h2", 478, 588, 68, 68);
    view.defPosition("i2", 546, 588, 68, 68);
    view.defPosition("j2", 614, 588, 68, 68);
    view.defPosition("a1", 2, 656, 68, 68);
    view.defPosition("b1", 70, 656, 68, 68);
    view.defPosition("c1", 138, 656, 68, 68);
    view.defPosition("d1", 206, 656, 68, 68);
    view.defPosition("e1", 274, 656, 68, 68);
    view.defPosition("f1", 342, 656, 68, 68);
    view.defPosition("g1", 410, 656, 68, 68);
    view.defPosition("h1", 478, 656, 68, 68);
    view.defPosition("i1", 546, 656, 68, 68);
    view.defPosition("j1", 614, 656, 68, 68);
}
