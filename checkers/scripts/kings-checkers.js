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

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(10, "../sounds/wind.wav");
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("pass-partial", "true");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("columns-checkers-extension", "unpromote");

    design.addDirection("ne");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("White", [2, 3, 0, 1]);
    design.addPlayer("Black", [2, 3, 0, 1]);

    design.addPosition("a8", [0, 9, 0, 0]);
    design.addPosition("b8", [0, 9, 7, 0]);
    design.addPosition("c8", [0, 9, 7, 0]);
    design.addPosition("d8", [0, 9, 7, 0]);
    design.addPosition("e8", [0, 9, 7, 0]);
    design.addPosition("f8", [0, 9, 7, 0]);
    design.addPosition("g8", [0, 9, 7, 0]);
    design.addPosition("h8", [0, 0, 7, 0]);
    design.addPosition("a7", [-7, 9, 0, 0]);
    design.addPosition("b7", [-7, 9, 7, -9]);
    design.addPosition("c7", [-7, 9, 7, -9]);
    design.addPosition("d7", [-7, 9, 7, -9]);
    design.addPosition("e7", [-7, 9, 7, -9]);
    design.addPosition("f7", [-7, 9, 7, -9]);
    design.addPosition("g7", [-7, 9, 7, -9]);
    design.addPosition("h7", [0, 0, 7, -9]);
    design.addPosition("a6", [-7, 9, 0, 0]);
    design.addPosition("b6", [-7, 9, 7, -9]);
    design.addPosition("c6", [-7, 9, 7, -9]);
    design.addPosition("d6", [-7, 9, 7, -9]);
    design.addPosition("e6", [-7, 9, 7, -9]);
    design.addPosition("f6", [-7, 9, 7, -9]);
    design.addPosition("g6", [-7, 9, 7, -9]);
    design.addPosition("h6", [0, 0, 7, -9]);
    design.addPosition("a5", [-7, 9, 0, 0]);
    design.addPosition("b5", [-7, 9, 7, -9]);
    design.addPosition("c5", [-7, 9, 7, -9]);
    design.addPosition("d5", [-7, 9, 7, -9]);
    design.addPosition("e5", [-7, 9, 7, -9]);
    design.addPosition("f5", [-7, 9, 7, -9]);
    design.addPosition("g5", [-7, 9, 7, -9]);
    design.addPosition("h5", [0, 0, 7, -9]);
    design.addPosition("a4", [-7, 9, 0, 0]);
    design.addPosition("b4", [-7, 9, 7, -9]);
    design.addPosition("c4", [-7, 9, 7, -9]);
    design.addPosition("d4", [-7, 9, 7, -9]);
    design.addPosition("e4", [-7, 9, 7, -9]);
    design.addPosition("f4", [-7, 9, 7, -9]);
    design.addPosition("g4", [-7, 9, 7, -9]);
    design.addPosition("h4", [0, 0, 7, -9]);
    design.addPosition("a3", [-7, 9, 0, 0]);
    design.addPosition("b3", [-7, 9, 7, -9]);
    design.addPosition("c3", [-7, 9, 7, -9]);
    design.addPosition("d3", [-7, 9, 7, -9]);
    design.addPosition("e3", [-7, 9, 7, -9]);
    design.addPosition("f3", [-7, 9, 7, -9]);
    design.addPosition("g3", [-7, 9, 7, -9]);
    design.addPosition("h3", [0, 0, 7, -9]);
    design.addPosition("a2", [-7, 9, 0, 0]);
    design.addPosition("b2", [-7, 9, 7, -9]);
    design.addPosition("c2", [-7, 9, 7, -9]);
    design.addPosition("d2", [-7, 9, 7, -9]);
    design.addPosition("e2", [-7, 9, 7, -9]);
    design.addPosition("f2", [-7, 9, 7, -9]);
    design.addPosition("g2", [-7, 9, 7, -9]);
    design.addPosition("h2", [0, 0, 7, -9]);
    design.addPosition("a1", [-7, 0, 0, 0]);
    design.addPosition("b1", [-7, 0, 0, -9]);
    design.addPosition("c1", [-7, 0, 0, -9]);
    design.addPosition("d1", [-7, 0, 0, -9]);
    design.addPosition("e1", [-7, 0, 0, -9]);
    design.addPosition("f1", [-7, 0, 0, -9]);
    design.addPosition("g1", [-7, 0, 0, -9]);
    design.addPosition("h1", [0, 0, 0, -9]);

    design.addZone("promotion", 1, [1, 3, 5, 7]);
    design.addZone("promotion", 2, [56, 58, 60, 62]);

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
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.MODE,	0);	// jump-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

//  design.addPriority(0);			// jump-type
//  design.addPriority(1);			// normal-type

    design.addPiece("Man", 0, 20);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 1, [0], 1);
    design.addMove(0, 1, [2], 1);
    design.addMove(0, 1, [1], 1);

    design.addPiece("King", 1, 100);
    design.addMove(1, 2, [3, 3], 0, 10);
    design.addMove(1, 2, [0, 0], 0, 10);
    design.addMove(1, 2, [2, 2], 0, 10);
    design.addMove(1, 2, [1, 1], 0, 10);
    design.addMove(1, 3, [3], 1, 10);
    design.addMove(1, 3, [0], 1, 10);
    design.addMove(1, 3, [2], 1, 10);
    design.addMove(1, 3, [1], 1, 10);

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
 
    view.defPosition("a8", 2, 44, 68, 68);
    view.defPosition("b8", 70, 44, 68, 68);
    view.defPosition("c8", 138, 44, 68, 68);
    view.defPosition("d8", 206, 44, 68, 68);
    view.defPosition("e8", 274, 44, 68, 68);
    view.defPosition("f8", 342, 44, 68, 68);
    view.defPosition("g8", 410, 44, 68, 68);
    view.defPosition("h8", 478, 44, 68, 68);
    view.defPosition("a7", 2, 112, 68, 68);
    view.defPosition("b7", 70, 112, 68, 68);
    view.defPosition("c7", 138, 112, 68, 68);
    view.defPosition("d7", 206, 112, 68, 68);
    view.defPosition("e7", 274, 112, 68, 68);
    view.defPosition("f7", 342, 112, 68, 68);
    view.defPosition("g7", 410, 112, 68, 68);
    view.defPosition("h7", 478, 112, 68, 68);
    view.defPosition("a6", 2, 180, 68, 68);
    view.defPosition("b6", 70, 180, 68, 68);
    view.defPosition("c6", 138, 180, 68, 68);
    view.defPosition("d6", 206, 180, 68, 68);
    view.defPosition("e6", 274, 180, 68, 68);
    view.defPosition("f6", 342, 180, 68, 68);
    view.defPosition("g6", 410, 180, 68, 68);
    view.defPosition("h6", 478, 180, 68, 68);
    view.defPosition("a5", 2, 248, 68, 68);
    view.defPosition("b5", 70, 248, 68, 68);
    view.defPosition("c5", 138, 248, 68, 68);
    view.defPosition("d5", 206, 248, 68, 68);
    view.defPosition("e5", 274, 248, 68, 68);
    view.defPosition("f5", 342, 248, 68, 68);
    view.defPosition("g5", 410, 248, 68, 68);
    view.defPosition("h5", 478, 248, 68, 68);
    view.defPosition("a4", 2, 316, 68, 68);
    view.defPosition("b4", 70, 316, 68, 68);
    view.defPosition("c4", 138, 316, 68, 68);
    view.defPosition("d4", 206, 316, 68, 68);
    view.defPosition("e4", 274, 316, 68, 68);
    view.defPosition("f4", 342, 316, 68, 68);
    view.defPosition("g4", 410, 316, 68, 68);
    view.defPosition("h4", 478, 316, 68, 68);
    view.defPosition("a3", 2, 384, 68, 68);
    view.defPosition("b3", 70, 384, 68, 68);
    view.defPosition("c3", 138, 384, 68, 68);
    view.defPosition("d3", 206, 384, 68, 68);
    view.defPosition("e3", 274, 384, 68, 68);
    view.defPosition("f3", 342, 384, 68, 68);
    view.defPosition("g3", 410, 384, 68, 68);
    view.defPosition("h3", 478, 384, 68, 68);
    view.defPosition("a2", 2, 452, 68, 68);
    view.defPosition("b2", 70, 452, 68, 68);
    view.defPosition("c2", 138, 452, 68, 68);
    view.defPosition("d2", 206, 452, 68, 68);
    view.defPosition("e2", 274, 452, 68, 68);
    view.defPosition("f2", 342, 452, 68, 68);
    view.defPosition("g2", 410, 452, 68, 68);
    view.defPosition("h2", 478, 452, 68, 68);
    view.defPosition("a1", 2, 520, 68, 68);
    view.defPosition("b1", 70, 520, 68, 68);
    view.defPosition("c1", 138, 520, 68, 68);
    view.defPosition("d1", 206, 520, 68, 68);
    view.defPosition("e1", 274, 520, 68, 68);
    view.defPosition("f1", 342, 520, 68, 68);
    view.defPosition("g1", 410, 520, 68, 68);
    view.defPosition("h1", 478, 520, 68, 68);
}
