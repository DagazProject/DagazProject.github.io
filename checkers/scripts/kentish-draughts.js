Dagaz.Model.WIDTH  = 8;
Dagaz.Model.HEIGHT = 8;

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
    design.checkVersion("deferred-captures", "true");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("ne"); // 4
    design.addDirection("w");  // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("Black", [6, 7, 4, 5, 2, 3, 0, 1]);
    design.addPlayer("White", [6, 7, 4, 5, 2, 3, 0, 1]);

    design.addPosition("a8", [9, 8, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b8", [9, 8, 7, 1, 0, -1, 0, 0]);
    design.addPosition("c8", [9, 8, 7, 1, 0, -1, 0, 0]);
    design.addPosition("d8", [9, 8, 7, 1, 0, -1, 0, 0]);
    design.addPosition("e8", [9, 8, 7, 1, 0, -1, 0, 0]);
    design.addPosition("f8", [9, 8, 7, 1, 0, -1, 0, 0]);
    design.addPosition("g8", [9, 8, 7, 1, 0, -1, 0, 0]);
    design.addPosition("h8", [0, 8, 7, 0, 0, -1, 0, 0]);
    design.addPosition("a7", [9, 8, 0, 1, -7, 0, 0, -8]);
    design.addPosition("b7", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("c7", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("d7", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("e7", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("f7", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("g7", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("h7", [0, 8, 7, 0, 0, -1, -9, -8]);
    design.addPosition("a6", [9, 8, 0, 1, -7, 0, 0, -8]);
    design.addPosition("b6", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("c6", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("d6", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("e6", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("f6", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("g6", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("h6", [0, 8, 7, 0, 0, -1, -9, -8]);
    design.addPosition("a5", [9, 8, 0, 1, -7, 0, 0, -8]);
    design.addPosition("b5", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("c5", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("d5", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("e5", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("f5", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("g5", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("h5", [0, 8, 7, 0, 0, -1, -9, -8]);
    design.addPosition("a4", [9, 8, 0, 1, -7, 0, 0, -8]);
    design.addPosition("b4", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("c4", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("d4", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("e4", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("f4", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("g4", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("h4", [0, 8, 7, 0, 0, -1, -9, -8]);
    design.addPosition("a3", [9, 8, 0, 1, -7, 0, 0, -8]);
    design.addPosition("b3", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("c3", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("d3", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("e3", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("f3", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("g3", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("h3", [0, 8, 7, 0, 0, -1, -9, -8]);
    design.addPosition("a2", [9, 8, 0, 1, -7, 0, 0, -8]);
    design.addPosition("b2", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("c2", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("d2", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("e2", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("f2", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("g2", [9, 8, 7, 1, -7, -1, -9, -8]);
    design.addPosition("h2", [0, 8, 7, 0, 0, -1, -9, -8]);
    design.addPosition("a1", [0, 0, 0, 1, -7, 0, 0, -8]);
    design.addPosition("b1", [0, 0, 0, 1, -7, -1, -9, -8]);
    design.addPosition("c1", [0, 0, 0, 1, -7, -1, -9, -8]);
    design.addPosition("d1", [0, 0, 0, 1, -7, -1, -9, -8]);
    design.addPosition("e1", [0, 0, 0, 1, -7, -1, -9, -8]);
    design.addPosition("f1", [0, 0, 0, 1, -7, -1, -9, -8]);
    design.addPosition("g1", [0, 0, 0, 1, -7, -1, -9, -8]);
    design.addPosition("h1", [0, 0, 0, 0, 0, -1, -9, -8]);

    design.addZone("promotion", 2, [56, 57, 58, 59, 60, 61, 62, 63]);
    design.addZone("promotion", 1, [0, 1, 2, 3, 4, 5, 6, 7]);

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
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.PROMOTE,	1);	// King
    design.addCommand(0, ZRF.MODE,	2);	// continue-type
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	3);
    design.addCommand(0, ZRF.MODE,	0);	// jump-type
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
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.MODE,	2);	// continue-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
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
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.MODE,	2);	// continue-type
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
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

    design.addPiece("Man", 0, 20);
    design.addMove(0, 0, [6, 6], 0);
    design.addMove(0, 0, [4, 4], 0);
    design.addMove(0, 0, [5, 5], 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 1, [6], 1);
    design.addMove(0, 1, [4], 1);

    design.addPiece("King", 1, 100);
    design.addMove(1, 2, [6, 6, 6], 0);
    design.addMove(1, 2, [4, 4, 4], 0);
    design.addMove(1, 2, [2, 2, 2], 0);
    design.addMove(1, 2, [0, 0, 0], 0);
    design.addMove(1, 2, [7, 7, 7], 0);
    design.addMove(1, 2, [3, 3, 3], 0);
    design.addMove(1, 2, [5, 5, 5], 0);
    design.addMove(1, 2, [1, 1, 1], 0);
    design.addMove(1, 3, [6, 6, 6], 2);
    design.addMove(1, 3, [4, 4, 4], 2);
    design.addMove(1, 3, [2, 2, 2], 2);
    design.addMove(1, 3, [0, 0, 0], 2);
    design.addMove(1, 3, [7, 7, 7], 2);
    design.addMove(1, 3, [3, 3, 3], 2);
    design.addMove(1, 3, [5, 5, 5], 2);
    design.addMove(1, 3, [1, 1, 1], 2);
    design.addMove(1, 4, [6, 6], 1);
    design.addMove(1, 4, [4, 4], 1);
    design.addMove(1, 4, [2, 2], 1);
    design.addMove(1, 4, [0, 0], 1);
    design.addMove(1, 4, [7, 7], 1);
    design.addMove(1, 4, [3, 3], 1);
    design.addMove(1, 4, [5, 5], 1);
    design.addMove(1, 4, [1, 1], 1);

    design.setup("Black", "Man", 56);
    design.setup("Black", "Man", 57);
    design.setup("Black", "Man", 58);
    design.setup("Black", "Man", 59);
    design.setup("Black", "Man", 60);
    design.setup("Black", "Man", 61);
    design.setup("Black", "Man", 62);
    design.setup("Black", "Man", 63);
    design.setup("Black", "Man", 48);
    design.setup("Black", "Man", 49);
    design.setup("Black", "Man", 50);
    design.setup("Black", "Man", 51);
    design.setup("Black", "Man", 52);
    design.setup("Black", "Man", 53);
    design.setup("Black", "Man", 54);
    design.setup("Black", "Man", 55);
    design.setup("Black", "Man", 40);
    design.setup("Black", "Man", 41);
    design.setup("Black", "Man", 42);
    design.setup("Black", "Man", 43);
    design.setup("Black", "Man", 44);
    design.setup("Black", "Man", 45);
    design.setup("Black", "Man", 46);
    design.setup("Black", "Man", 47);
    design.setup("White", "Man", 16);
    design.setup("White", "Man", 17);
    design.setup("White", "Man", 18);
    design.setup("White", "Man", 19);
    design.setup("White", "Man", 20);
    design.setup("White", "Man", 21);
    design.setup("White", "Man", 22);
    design.setup("White", "Man", 23);
    design.setup("White", "Man", 8);
    design.setup("White", "Man", 9);
    design.setup("White", "Man", 10);
    design.setup("White", "Man", 11);
    design.setup("White", "Man", 12);
    design.setup("White", "Man", 13);
    design.setup("White", "Man", 14);
    design.setup("White", "Man", 15);
    design.setup("White", "Man", 0);
    design.setup("White", "Man", 1);
    design.setup("White", "Man", 2);
    design.setup("White", "Man", 3);
    design.setup("White", "Man", 4);
    design.setup("White", "Man", 5);
    design.setup("White", "Man", 6);
    design.setup("White", "Man", 7);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a8", 2, 2, 50, 50);
    view.defPosition("b8", 52, 2, 50, 50);
    view.defPosition("c8", 102, 2, 50, 50);
    view.defPosition("d8", 152, 2, 50, 50);
    view.defPosition("e8", 202, 2, 50, 50);
    view.defPosition("f8", 252, 2, 50, 50);
    view.defPosition("g8", 302, 2, 50, 50);
    view.defPosition("h8", 352, 2, 50, 50);
    view.defPosition("a7", 2, 52, 50, 50);
    view.defPosition("b7", 52, 52, 50, 50);
    view.defPosition("c7", 102, 52, 50, 50);
    view.defPosition("d7", 152, 52, 50, 50);
    view.defPosition("e7", 202, 52, 50, 50);
    view.defPosition("f7", 252, 52, 50, 50);
    view.defPosition("g7", 302, 52, 50, 50);
    view.defPosition("h7", 352, 52, 50, 50);
    view.defPosition("a6", 2, 102, 50, 50);
    view.defPosition("b6", 52, 102, 50, 50);
    view.defPosition("c6", 102, 102, 50, 50);
    view.defPosition("d6", 152, 102, 50, 50);
    view.defPosition("e6", 202, 102, 50, 50);
    view.defPosition("f6", 252, 102, 50, 50);
    view.defPosition("g6", 302, 102, 50, 50);
    view.defPosition("h6", 352, 102, 50, 50);
    view.defPosition("a5", 2, 152, 50, 50);
    view.defPosition("b5", 52, 152, 50, 50);
    view.defPosition("c5", 102, 152, 50, 50);
    view.defPosition("d5", 152, 152, 50, 50);
    view.defPosition("e5", 202, 152, 50, 50);
    view.defPosition("f5", 252, 152, 50, 50);
    view.defPosition("g5", 302, 152, 50, 50);
    view.defPosition("h5", 352, 152, 50, 50);
    view.defPosition("a4", 2, 202, 50, 50);
    view.defPosition("b4", 52, 202, 50, 50);
    view.defPosition("c4", 102, 202, 50, 50);
    view.defPosition("d4", 152, 202, 50, 50);
    view.defPosition("e4", 202, 202, 50, 50);
    view.defPosition("f4", 252, 202, 50, 50);
    view.defPosition("g4", 302, 202, 50, 50);
    view.defPosition("h4", 352, 202, 50, 50);
    view.defPosition("a3", 2, 252, 50, 50);
    view.defPosition("b3", 52, 252, 50, 50);
    view.defPosition("c3", 102, 252, 50, 50);
    view.defPosition("d3", 152, 252, 50, 50);
    view.defPosition("e3", 202, 252, 50, 50);
    view.defPosition("f3", 252, 252, 50, 50);
    view.defPosition("g3", 302, 252, 50, 50);
    view.defPosition("h3", 352, 252, 50, 50);
    view.defPosition("a2", 2, 302, 50, 50);
    view.defPosition("b2", 52, 302, 50, 50);
    view.defPosition("c2", 102, 302, 50, 50);
    view.defPosition("d2", 152, 302, 50, 50);
    view.defPosition("e2", 202, 302, 50, 50);
    view.defPosition("f2", 252, 302, 50, 50);
    view.defPosition("g2", 302, 302, 50, 50);
    view.defPosition("h2", 352, 302, 50, 50);
    view.defPosition("a1", 2, 352, 50, 50);
    view.defPosition("b1", 52, 352, 50, 50);
    view.defPosition("c1", 102, 352, 50, 50);
    view.defPosition("d1", 152, 352, 50, 50);
    view.defPosition("e1", 202, 352, 50, 50);
    view.defPosition("f1", 252, 352, 50, 50);
    view.defPosition("g1", 302, 352, 50, 50);
    view.defPosition("h1", 352, 352, 50, 50);
}
