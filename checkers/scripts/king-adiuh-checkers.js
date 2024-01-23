Dagaz.Controller.persistense = "setup";
Dagaz.View.TARGET_COLOR      = "#FFC44E";
Dagaz.Model.BOARD_SIZE       = 64;

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
    design.checkVersion("smart-moves", "from");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("shared-pieces", "true");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("se"); // 0
    design.addDirection("sw"); // 1
    design.addDirection("ne"); // 2
    design.addDirection("nw"); // 3

    design.addPlayer("White", [3, 2, 1, 0]);
    design.addPlayer("Black", [0, 1, 2, 3]);

    design.addPosition("a8", [9, 0, 0, 0]);
    design.addPosition("b8", [9, 7, 0, 0]);
    design.addPosition("c8", [9, 7, 0, 0]);
    design.addPosition("d8", [9, 7, 0, 0]);
    design.addPosition("e8", [9, 7, 0, 0]);
    design.addPosition("f8", [9, 7, 0, 0]);
    design.addPosition("g8", [9, 7, 0, 0]);
    design.addPosition("h8", [0, 7, 0, 0]);
    design.addPosition("a7", [9, 0, -7, 0]);
    design.addPosition("b7", [9, 7, -7, -9]);
    design.addPosition("c7", [9, 7, -7, -9]);
    design.addPosition("d7", [9, 7, -7, -9]);
    design.addPosition("e7", [9, 7, -7, -9]);
    design.addPosition("f7", [9, 7, -7, -9]);
    design.addPosition("g7", [9, 7, -7, -9]);
    design.addPosition("h7", [0, 7, 0, -9]);
    design.addPosition("a6", [9, 0, -7, 0]);
    design.addPosition("b6", [9, 7, -7, -9]);
    design.addPosition("c6", [9, 7, -7, -9]);
    design.addPosition("d6", [9, 7, -7, -9]);
    design.addPosition("e6", [9, 7, -7, -9]);
    design.addPosition("f6", [9, 7, -7, -9]);
    design.addPosition("g6", [9, 7, -7, -9]);
    design.addPosition("h6", [0, 7, 0, -9]);
    design.addPosition("a5", [9, 0, -7, 0]);
    design.addPosition("b5", [9, 7, -7, -9]);
    design.addPosition("c5", [9, 7, -7, -9]);
    design.addPosition("d5", [9, 7, -7, -9]);
    design.addPosition("e5", [9, 7, -7, -9]);
    design.addPosition("f5", [9, 7, -7, -9]);
    design.addPosition("g5", [9, 7, -7, -9]);
    design.addPosition("h5", [0, 7, 0, -9]);
    design.addPosition("a4", [9, 0, -7, 0]);
    design.addPosition("b4", [9, 7, -7, -9]);
    design.addPosition("c4", [9, 7, -7, -9]);
    design.addPosition("d4", [9, 7, -7, -9]);
    design.addPosition("e4", [9, 7, -7, -9]);
    design.addPosition("f4", [9, 7, -7, -9]);
    design.addPosition("g4", [9, 7, -7, -9]);
    design.addPosition("h4", [0, 7, 0, -9]);
    design.addPosition("a3", [9, 0, -7, 0]);
    design.addPosition("b3", [9, 7, -7, -9]);
    design.addPosition("c3", [9, 7, -7, -9]);
    design.addPosition("d3", [9, 7, -7, -9]);
    design.addPosition("e3", [9, 7, -7, -9]);
    design.addPosition("f3", [9, 7, -7, -9]);
    design.addPosition("g3", [9, 7, -7, -9]);
    design.addPosition("h3", [0, 7, 0, -9]);
    design.addPosition("a2", [9, 0, -7, 0]);
    design.addPosition("b2", [9, 7, -7, -9]);
    design.addPosition("c2", [9, 7, -7, -9]);
    design.addPosition("d2", [9, 7, -7, -9]);
    design.addPosition("e2", [9, 7, -7, -9]);
    design.addPosition("f2", [9, 7, -7, -9]);
    design.addPosition("g2", [9, 7, -7, -9]);
    design.addPosition("h2", [0, 7, 0, -9]);
    design.addPosition("a1", [0, 0, -7, 0]);
    design.addPosition("b1", [0, 0, -7, -9]);
    design.addPosition("c1", [0, 0, -7, -9]);
    design.addPosition("d1", [0, 0, -7, -9]);
    design.addPosition("e1", [0, 0, -7, -9]);
    design.addPosition("f1", [0, 0, -7, -9]);
    design.addPosition("g1", [0, 0, -7, -9]);
    design.addPosition("h1", [0, 0, 0, -9]);

    design.addZone("WhitePromotion", 1, [1, 3, 5, 7]);
    design.addZone("WhitePromotion", 2, [1, 3, 5, 7]);
    design.addZone("BlackPromotion", 1, [56, 58, 60, 62]);
    design.addZone("BlackPromotion", 2, [56, 58, 60, 62]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.LITERAL,	1);	// BlackMan
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	6);
    design.addCommand(0, ZRF.LITERAL,	3);	// BlackKing
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.LITERAL,	0);	// false
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.LITERAL,	1);	// true
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	26);	// capture
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// WhitePromotion
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	2);	// WhiteKing
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// WhitePromotion
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	2);	// WhiteKing
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.LITERAL,	0);	// WhiteMan
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.IF,	6);
    design.addCommand(2, ZRF.LITERAL,	2);	// WhiteKing
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.IF,	3);
    design.addCommand(2, ZRF.LITERAL,	0);	// false
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.LITERAL,	1);	// true
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	1);	// BlackPromotion
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PROMOTE,	3);	// BlackKing
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.IN_ZONE,	1);	// BlackPromotion
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PROMOTE,	3);	// BlackKing
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
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
    design.addCommand(4, ZRF.LITERAL,	1);	// BlackMan
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.IF,	6);
    design.addCommand(4, ZRF.LITERAL,	3);	// BlackKing
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.LITERAL,	0);	// false
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.LITERAL,	1);	// true
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	17);
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
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	4);	// $5
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-18);
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
    design.addCommand(5, ZRF.LITERAL,	0);	// WhiteMan
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.IF,	6);
    design.addCommand(5, ZRF.LITERAL,	2);	// WhiteKing
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.IF,	3);
    design.addCommand(5, ZRF.LITERAL,	0);	// false
    design.addCommand(5, ZRF.JUMP,	2);
    design.addCommand(5, ZRF.LITERAL,	1);	// true
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	17);
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
    design.addCommand(5, ZRF.FORK,	3);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	4);	// $5
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-18);
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	4);	// King
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	26);	// capture
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.MODE,	0);	// jump-type
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// jump-type
    design.addPriority(1);			// normal-type

    design.addPiece("WhiteMan", 0, 100);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 1, [2], 1);

    design.addPiece("BlackMan", 1, 100);
    design.addMove(1, 2, [3, 3], 0);
    design.addMove(1, 2, [2, 2], 0);
    design.addMove(1, 2, [1, 1], 0);
    design.addMove(1, 2, [0, 0], 0);
    design.addMove(1, 3, [1], 1);
    design.addMove(1, 3, [0], 1);

    design.addPiece("WhiteKing", 2, 200);
    design.addMove(2, 4, [3, 3, 3, 3, 3], 0);
    design.addMove(2, 4, [2, 2, 2, 2, 2], 0);
    design.addMove(2, 4, [1, 1, 1, 1, 1], 0);
    design.addMove(2, 4, [0, 0, 0, 0, 0], 0);

    design.addPiece("BlackKing", 3, 200);
    design.addMove(3, 5, [3, 3, 3, 3, 3], 0);
    design.addMove(3, 5, [2, 2, 2, 2, 2], 0);
    design.addMove(3, 5, [1, 1, 1, 1, 1], 0);
    design.addMove(3, 5, [0, 0, 0, 0, 0], 0);

    design.addPiece("King", 4, 0);
    design.addMove(4, 6, [3], 1);
    design.addMove(4, 6, [2], 1);
    design.addMove(4, 6, [1], 1);
    design.addMove(4, 6, [0], 1);
    design.addMove(4, 7, [3, 3], 0);
    design.addMove(4, 7, [2, 2], 0);
    design.addMove(4, 7, [1, 1], 0);
    design.addMove(4, 7, [0, 0], 0);

    design.setup("White", "WhiteMan", 56);
    design.setup("White", "WhiteMan", 58);
    design.setup("White", "WhiteMan", 60);
    design.setup("White", "WhiteMan", 62);
    design.setup("White", "WhiteMan", 49);
    design.setup("White", "WhiteMan", 51);
    design.setup("White", "WhiteMan", 53);
    design.setup("White", "WhiteMan", 55);
    design.setup("White", "WhiteMan", 40);
    design.setup("White", "WhiteMan", 42);
    design.setup("White", "WhiteMan", 44);
    design.setup("White", "WhiteMan", 46);
    design.setup("White", "King", 60);
    design.setup("Black", "BlackMan", 1);
    design.setup("Black", "BlackMan", 3);
    design.setup("Black", "BlackMan", 5);
    design.setup("Black", "BlackMan", 7);
    design.setup("Black", "BlackMan", 8);
    design.setup("Black", "BlackMan", 10);
    design.setup("Black", "BlackMan", 12);
    design.setup("Black", "BlackMan", 14);
    design.setup("Black", "BlackMan", 17);
    design.setup("Black", "BlackMan", 19);
    design.setup("Black", "BlackMan", 21);
    design.setup("Black", "BlackMan", 23);
    design.setup("Black", "King", 3);
}

Dagaz.View.configure = function(view) {
    view.defBoard("WhiteBoard", 0, 0, undefined, [0]);
    view.defBoard("BlackBoard", 0, 0, undefined, [1]);
    view.defPiece("WhiteWhiteMan", "White WhiteMan");
    view.defPiece("BlackBlackMan", "Black BlackMan");
    view.defPiece("WhiteWhiteKing", "White WhiteKing");
    view.defPiece("BlackBlackKing", "Black BlackKing");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("0", "0");
    view.defPiece("1", "1");
    view.defPiece("2", "2");
    view.defPiece("3", "3");
    view.defPiece("4", "4");
    view.defPiece("5", "5");
    view.defPiece("6", "6");
    view.defPiece("7", "7");
    view.defPiece("8", "8");
    view.defPiece("9", "9");
 
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
