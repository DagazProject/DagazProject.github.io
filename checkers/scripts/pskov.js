Dagaz.Model.WIDTH  = 7;
Dagaz.Model.HEIGHT = 13;

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

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("n");

    design.addPlayer("White", [4, 5, 3, 2, 0, 1]);
    design.addPlayer("Black", [4, 5, 3, 2, 0, 1]);

    design.addPosition("a13", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b13", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c13", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d13", [0, 0, 0, 0, 0, 0]);
    design.addPosition("e13", [0, 0, 0, 0, 0, 0]);
    design.addPosition("f13", [0, 0, 0, 0, 0, 0]);
    design.addPosition("g13", [7, 13, 6, 0, 0, 0]);
    design.addPosition("a12", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b12", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c12", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d12", [0, 0, 0, 0, 0, 0]);
    design.addPosition("e12", [0, 0, 0, 0, 0, 0]);
    design.addPosition("f12", [7, 13, 6, -6, 0, 0]);
    design.addPosition("g12", [7, 13, 6, 0, -7, 0]);
    design.addPosition("a11", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b11", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c11", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d11", [0, 0, 0, 0, 0, 0]);
    design.addPosition("e11", [7, 13, 6, -6, 0, 0]);
    design.addPosition("f11", [7, 13, 6, -6, -7, -13]);
    design.addPosition("g11", [7, 13, 6, 0, -7, 0]);
    design.addPosition("a10", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b10", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c10", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d10", [7, 13, 0, -6, 0, 0]);
    design.addPosition("e10", [7, 13, 6, -6, -7, -13]);
    design.addPosition("f10", [7, 13, 6, -6, -7, -13]);
    design.addPosition("g10", [0, 13, 6, 0, -7, 0]);
    design.addPosition("a9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d9", [7, 13, 6, -6, -7, -13]);
    design.addPosition("e9", [7, 13, 6, -6, -7, -13]);
    design.addPosition("f9", [7, 13, 6, -6, -7, -13]);
    design.addPosition("g9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c8", [7, 13, 0, -6, 0, -13]);
    design.addPosition("d8", [7, 13, 6, -6, -7, -13]);
    design.addPosition("e8", [7, 13, 6, -6, -7, -13]);
    design.addPosition("f8", [0, 13, 6, 0, -7, -13]);
    design.addPosition("g8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c7", [7, 13, 6, -6, -7, -13]);
    design.addPosition("d7", [7, 13, 6, -6, -7, -13]);
    design.addPosition("e7", [7, 13, 6, -6, -7, -13]);
    design.addPosition("f7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("g7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [7, 13, 0, -6, 0, -13]);
    design.addPosition("c6", [7, 13, 6, -6, -7, -13]);
    design.addPosition("d6", [7, 13, 6, -6, -7, -13]);
    design.addPosition("e6", [0, 13, 6, 0, -7, -13]);
    design.addPosition("f6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("g6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b5", [7, 13, 6, -6, -7, -13]);
    design.addPosition("c5", [7, 13, 6, -6, -7, -13]);
    design.addPosition("d5", [7, 13, 6, -6, -7, -13]);
    design.addPosition("e5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("f5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("g5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [7, 0, 0, -6, 0, -13]);
    design.addPosition("b4", [7, 13, 6, -6, -7, -13]);
    design.addPosition("c4", [7, 13, 6, -6, -7, -13]);
    design.addPosition("d4", [0, 0, 6, 0, -7, -13]);
    design.addPosition("e4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("f4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("g4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [7, 0, 0, -6, -7, -13]);
    design.addPosition("b3", [7, 13, 6, -6, -7, -13]);
    design.addPosition("c3", [0, 0, 6, -6, -7, -13]);
    design.addPosition("d3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("e3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("f3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("g3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [7, 0, 0, -6, -7, -13]);
    design.addPosition("b2", [0, 0, 6, -6, -7, -13]);
    design.addPosition("c2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("e2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("f2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("g2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, -6, -7, -13]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("f1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("g1", [0, 0, 0, 0, 0, 0]);

    design.addZone("promotion", 1, [6]);
    design.addZone("promotion", 2, [84]);

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
    design.addCommand(0, ZRF.MODE,	1);	// King
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

    design.addPiece("Man", 0, 20);
    design.addMove(0, 0, [4, 4], 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [5, 5], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 1, [4], 1);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 1, [5], 1);

    design.addPiece("King", 1, 100);
    design.addMove(1, 2, [4, 4, 4, 4, 4], 0);
    design.addMove(1, 2, [3, 3, 3, 3, 3], 0);
    design.addMove(1, 2, [2, 2, 2, 2, 2], 0);
    design.addMove(1, 2, [0, 0, 0, 0, 0], 0);
    design.addMove(1, 2, [5, 5, 5, 5, 5], 0);
    design.addMove(1, 2, [1, 1, 1, 1, 1], 0);
    design.addMove(1, 3, [4, 4, 4, 4, 4], 2);
    design.addMove(1, 3, [3, 3, 3, 3, 3], 2);
    design.addMove(1, 3, [2, 2, 2, 2, 2], 2);
    design.addMove(1, 3, [0, 0, 0, 0, 0], 2);
    design.addMove(1, 3, [5, 5, 5, 5, 5], 2);
    design.addMove(1, 3, [1, 1, 1, 1, 1], 2);
    design.addMove(1, 4, [4, 4], 1);
    design.addMove(1, 4, [3, 3], 1);
    design.addMove(1, 4, [2, 2], 1);
    design.addMove(1, 4, [0, 0], 1);
    design.addMove(1, 4, [5, 5], 1);
    design.addMove(1, 4, [1, 1], 1);

    design.setup("White", "Man", 57);
    design.setup("White", "Man", 58);
    design.setup("White", "Man", 59);
    design.setup("White", "Man", 63);
    design.setup("White", "Man", 64);
    design.setup("White", "Man", 65);
    design.setup("White", "Man", 66);
    design.setup("White", "Man", 70);
    design.setup("White", "Man", 71);
    design.setup("White", "Man", 72);
    design.setup("White", "Man", 77);
    design.setup("White", "Man", 78);
    design.setup("White", "Man", 84);
    design.setup("Black", "Man", 31);
    design.setup("Black", "Man", 32);
    design.setup("Black", "Man", 33);
    design.setup("Black", "Man", 24);
    design.setup("Black", "Man", 25);
    design.setup("Black", "Man", 26);
    design.setup("Black", "Man", 27);
    design.setup("Black", "Man", 18);
    design.setup("Black", "Man", 19);
    design.setup("Black", "Man", 20);
    design.setup("Black", "Man", 12);
    design.setup("Black", "Man", 13);
    design.setup("Black", "Man", 6);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a13", -417, 10, 42, 42);
    view.defPosition("b13", -321, 10, 42, 42);
    view.defPosition("c13", -225, 10, 42, 42);
    view.defPosition("d13", -129, 10, 42, 42);
    view.defPosition("e13", -33, 10, 42, 42);
    view.defPosition("f13", 63, 10, 42, 42);
    view.defPosition("g13", 159, 10, 42, 42);
    view.defPosition("a12", -369, 38, 42, 42);
    view.defPosition("b12", -273, 38, 42, 42);
    view.defPosition("c12", -177, 38, 42, 42);
    view.defPosition("d12", -81, 38, 42, 42);
    view.defPosition("e12", 15, 38, 42, 42);
    view.defPosition("f12", 111, 38, 42, 42);
    view.defPosition("g12", 207, 38, 42, 42);
    view.defPosition("a11", -321, 66, 42, 42);
    view.defPosition("b11", -225, 66, 42, 42);
    view.defPosition("c11", -129, 66, 42, 42);
    view.defPosition("d11", -33, 66, 42, 42);
    view.defPosition("e11", 63, 66, 42, 42);
    view.defPosition("f11", 159, 66, 42, 42);
    view.defPosition("g11", 255, 66, 42, 42);
    view.defPosition("a10", -273, 94, 42, 42);
    view.defPosition("b10", -177, 94, 42, 42);
    view.defPosition("c10", -81, 94, 42, 42);
    view.defPosition("d10", 15, 94, 42, 42);
    view.defPosition("e10", 111, 94, 42, 42);
    view.defPosition("f10", 207, 94, 42, 42);
    view.defPosition("g10", 303, 94, 42, 42);
    view.defPosition("a9", -225, 122, 42, 42);
    view.defPosition("b9", -129, 122, 42, 42);
    view.defPosition("c9", -33, 122, 42, 42);
    view.defPosition("d9", 63, 122, 42, 42);
    view.defPosition("e9", 159, 122, 42, 42);
    view.defPosition("f9", 255, 122, 42, 42);
    view.defPosition("g9", 351, 122, 42, 42);
    view.defPosition("a8", -177, 150, 42, 42);
    view.defPosition("b8", -81, 150, 42, 42);
    view.defPosition("c8", 15, 150, 42, 42);
    view.defPosition("d8", 111, 150, 42, 42);
    view.defPosition("e8", 207, 150, 42, 42);
    view.defPosition("f8", 303, 150, 42, 42);
    view.defPosition("g8", 399, 150, 42, 42);
    view.defPosition("a7", -129, 178, 42, 42);
    view.defPosition("b7", -33, 178, 42, 42);
    view.defPosition("c7", 63, 178, 42, 42);
    view.defPosition("d7", 159, 178, 42, 42);
    view.defPosition("e7", 255, 178, 42, 42);
    view.defPosition("f7", 351, 178, 42, 42);
    view.defPosition("g7", 447, 178, 42, 42);
    view.defPosition("a6", -81, 206, 42, 42);
    view.defPosition("b6", 15, 206, 42, 42);
    view.defPosition("c6", 111, 206, 42, 42);
    view.defPosition("d6", 207, 206, 42, 42);
    view.defPosition("e6", 303, 206, 42, 42);
    view.defPosition("f6", 399, 206, 42, 42);
    view.defPosition("g6", 495, 206, 42, 42);
    view.defPosition("a5", -33, 234, 42, 42);
    view.defPosition("b5", 63, 234, 42, 42);
    view.defPosition("c5", 159, 234, 42, 42);
    view.defPosition("d5", 255, 234, 42, 42);
    view.defPosition("e5", 351, 234, 42, 42);
    view.defPosition("f5", 447, 234, 42, 42);
    view.defPosition("g5", 543, 234, 42, 42);
    view.defPosition("a4", 15, 262, 42, 42);
    view.defPosition("b4", 111, 262, 42, 42);
    view.defPosition("c4", 207, 262, 42, 42);
    view.defPosition("d4", 303, 262, 42, 42);
    view.defPosition("e4", 399, 262, 42, 42);
    view.defPosition("f4", 495, 262, 42, 42);
    view.defPosition("g4", 591, 262, 42, 42);
    view.defPosition("a3", 63, 290, 42, 42);
    view.defPosition("b3", 159, 290, 42, 42);
    view.defPosition("c3", 255, 290, 42, 42);
    view.defPosition("d3", 351, 290, 42, 42);
    view.defPosition("e3", 447, 290, 42, 42);
    view.defPosition("f3", 543, 290, 42, 42);
    view.defPosition("g3", 639, 290, 42, 42);
    view.defPosition("a2", 111, 318, 42, 42);
    view.defPosition("b2", 207, 318, 42, 42);
    view.defPosition("c2", 303, 318, 42, 42);
    view.defPosition("d2", 399, 318, 42, 42);
    view.defPosition("e2", 495, 318, 42, 42);
    view.defPosition("f2", 591, 318, 42, 42);
    view.defPosition("g2", 687, 318, 42, 42);
    view.defPosition("a1", 159, 346, 42, 42);
    view.defPosition("b1", 255, 346, 42, 42);
    view.defPosition("c1", 351, 346, 42, 42);
    view.defPosition("d1", 447, 346, 42, 42);
    view.defPosition("e1", 543, 346, 42, 42);
    view.defPosition("f1", 639, 346, 42, 42);
    view.defPosition("g1", 735, 346, 42, 42);
}
