Dagaz.Model.WIDTH  = 9;
Dagaz.Model.HEIGHT = 9;

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
    design.checkVersion("animate-drops", "false");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "true");
    design.checkVersion("show-captures", "false");
    design.checkVersion("ko", "situation");
    design.checkVersion("chess-go-drops-mobile", "once");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a9", [10, 9, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("c9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("d9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("e9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("f9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("g9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("h9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("i9", [0, 9, 8, 0, -1, 0, 0, 0]);
    design.addPosition("a8", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i8", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a7", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i7", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a6", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i6", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a5", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i5", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a4", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i4", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a3", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i3", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a2", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i2", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("i1", [0, 0, 0, 0, -1, 0, -10, -9]);
    design.addPosition("X9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y1", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.IF,	6);
    design.addCommand(2, ZRF.LITERAL,	0);	// Stone
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.IF,	3);
    design.addCommand(2, ZRF.LITERAL,	0);	// false
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.LITERAL,	1);	// true
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.IF,	6);
    design.addCommand(3, ZRF.LITERAL,	0);	// Stone
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.IF,	3);
    design.addCommand(3, ZRF.LITERAL,	0);	// false
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.LITERAL,	1);	// true
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	7);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-15);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.IF,	6);
    design.addCommand(4, ZRF.LITERAL,	0);	// Stone
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.LITERAL,	0);	// false
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.LITERAL,	1);	// true
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	7);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-15);
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.IF,	6);
    design.addCommand(4, ZRF.LITERAL,	0);	// Stone
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.LITERAL,	0);	// false
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.LITERAL,	1);	// true
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-12);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	0);	// Stone
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	0);	// Stone
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);

    design.addPiece("Soldier", 1);
    design.addMove(1, 1, [7], 2);
    design.addMove(1, 1, [3], 2);
    design.addMove(1, 1, [4], 2);
    design.addMove(1, 1, [1], 2);

    design.addPiece("Horse", 2);
    design.addMove(2, 2, [7, 6], 2);
    design.addMove(2, 2, [7, 5], 2);
    design.addMove(2, 2, [1, 2], 2);
    design.addMove(2, 2, [1, 0], 2);
    design.addMove(2, 2, [4, 6], 2);
    design.addMove(2, 2, [3, 5], 2);
    design.addMove(2, 2, [4, 2], 2);
    design.addMove(2, 2, [3, 0], 2);

    design.addPiece("Elephant", 3);
    design.addMove(3, 2, [6, 6], 2);
    design.addMove(3, 2, [5, 5], 2);
    design.addMove(3, 2, [2, 2], 2);
    design.addMove(3, 2, [0, 0], 2);

    design.addPiece("Chariot", 4);
    design.addMove(4, 3, [7, 7], 2);
    design.addMove(4, 3, [3, 3], 2);
    design.addMove(4, 3, [4, 4], 2);
    design.addMove(4, 3, [1, 1], 2);

    design.addPiece("Cannon", 5);
    design.addMove(5, 4, [7, 7, 7, 7], 2);
    design.addMove(5, 4, [3, 3, 3, 3], 2);
    design.addMove(5, 4, [4, 4, 4, 4], 2);
    design.addMove(5, 4, [1, 1, 1, 1], 2);

    design.addPiece("Mandarin", 6);
    design.addMove(6, 5, [6], 2);
    design.addMove(6, 5, [5], 2);
    design.addMove(6, 5, [2], 2);
    design.addMove(6, 5, [0], 2);

    design.addPiece("General", 7);
    design.addMove(7, 6, [7], 2);
    design.addMove(7, 6, [3], 2);
    design.addMove(7, 6, [4], 2);
    design.addMove(7, 6, [1], 2);

    design.setup("White", "Soldier", 87);
    design.setup("White", "Soldier", 89);
    design.setup("White", "Horse", 91);
    design.setup("White", "Elephant", 93);
    design.setup("White", "Chariot", 95);
    design.setup("White", "Mandarin", 83);
    design.setup("White", "Mandarin", 85);
    design.setup("White", "Cannon", 97);
    design.setup("White", "General", 81);
    design.setup("Black", "Soldier", 88);
    design.setup("Black", "Soldier", 90);
    design.setup("Black", "Horse", 92);
    design.setup("Black", "Elephant", 94);
    design.setup("Black", "Chariot", 96);
    design.setup("Black", "Mandarin", 84);
    design.setup("Black", "Mandarin", 86);
    design.setup("Black", "Cannon", 98);
    design.setup("Black", "General", 82);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackSoldier", "Black Soldier");
    view.defPiece("WhiteSoldier", "White Soldier");
    view.defPiece("BlackHorse", "Black Horse");
    view.defPiece("WhiteHorse", "White Horse");
    view.defPiece("BlackElephant", "Black Elephant");
    view.defPiece("WhiteElephant", "White Elephant");
    view.defPiece("BlackChariot", "Black Chariot");
    view.defPiece("WhiteChariot", "White Chariot");
    view.defPiece("BlackCannon", "Black Cannon");
    view.defPiece("WhiteCannon", "White Cannon");
    view.defPiece("BlackMandarin", "Black Mandarin");
    view.defPiece("WhiteMandarin", "White Mandarin");
    view.defPiece("BlackGeneral", "Black General");
    view.defPiece("WhiteGeneral", "White General");
 
    view.defPosition("a9", 59, 5, 42, 42);
    view.defPosition("b9", 104, 5, 42, 42);
    view.defPosition("c9", 149, 5, 42, 42);
    view.defPosition("d9", 194, 5, 42, 42);
    view.defPosition("e9", 239, 5, 42, 42);
    view.defPosition("f9", 284, 5, 42, 42);
    view.defPosition("g9", 329, 5, 42, 42);
    view.defPosition("h9", 374, 5, 42, 42);
    view.defPosition("i9", 419, 5, 42, 42);
    view.defPosition("a8", 59, 50, 42, 42);
    view.defPosition("b8", 104, 50, 42, 42);
    view.defPosition("c8", 149, 50, 42, 42);
    view.defPosition("d8", 194, 50, 42, 42);
    view.defPosition("e8", 239, 50, 42, 42);
    view.defPosition("f8", 284, 50, 42, 42);
    view.defPosition("g8", 329, 50, 42, 42);
    view.defPosition("h8", 374, 50, 42, 42);
    view.defPosition("i8", 419, 50, 42, 42);
    view.defPosition("a7", 59, 95, 42, 42);
    view.defPosition("b7", 104, 95, 42, 42);
    view.defPosition("c7", 149, 95, 42, 42);
    view.defPosition("d7", 194, 95, 42, 42);
    view.defPosition("e7", 239, 95, 42, 42);
    view.defPosition("f7", 284, 95, 42, 42);
    view.defPosition("g7", 329, 95, 42, 42);
    view.defPosition("h7", 374, 95, 42, 42);
    view.defPosition("i7", 419, 95, 42, 42);
    view.defPosition("a6", 59, 140, 42, 42);
    view.defPosition("b6", 104, 140, 42, 42);
    view.defPosition("c6", 149, 140, 42, 42);
    view.defPosition("d6", 194, 140, 42, 42);
    view.defPosition("e6", 239, 140, 42, 42);
    view.defPosition("f6", 284, 140, 42, 42);
    view.defPosition("g6", 329, 140, 42, 42);
    view.defPosition("h6", 374, 140, 42, 42);
    view.defPosition("i6", 419, 140, 42, 42);
    view.defPosition("a5", 59, 185, 42, 42);
    view.defPosition("b5", 104, 185, 42, 42);
    view.defPosition("c5", 149, 185, 42, 42);
    view.defPosition("d5", 194, 185, 42, 42);
    view.defPosition("e5", 239, 185, 42, 42);
    view.defPosition("f5", 284, 185, 42, 42);
    view.defPosition("g5", 329, 185, 42, 42);
    view.defPosition("h5", 374, 185, 42, 42);
    view.defPosition("i5", 419, 185, 42, 42);
    view.defPosition("a4", 59, 230, 42, 42);
    view.defPosition("b4", 104, 230, 42, 42);
    view.defPosition("c4", 149, 230, 42, 42);
    view.defPosition("d4", 194, 230, 42, 42);
    view.defPosition("e4", 239, 230, 42, 42);
    view.defPosition("f4", 284, 230, 42, 42);
    view.defPosition("g4", 329, 230, 42, 42);
    view.defPosition("h4", 374, 230, 42, 42);
    view.defPosition("i4", 419, 230, 42, 42);
    view.defPosition("a3", 59, 275, 42, 42);
    view.defPosition("b3", 104, 275, 42, 42);
    view.defPosition("c3", 149, 275, 42, 42);
    view.defPosition("d3", 194, 275, 42, 42);
    view.defPosition("e3", 239, 275, 42, 42);
    view.defPosition("f3", 284, 275, 42, 42);
    view.defPosition("g3", 329, 275, 42, 42);
    view.defPosition("h3", 374, 275, 42, 42);
    view.defPosition("i3", 419, 275, 42, 42);
    view.defPosition("a2", 59, 320, 42, 42);
    view.defPosition("b2", 104, 320, 42, 42);
    view.defPosition("c2", 149, 320, 42, 42);
    view.defPosition("d2", 194, 320, 42, 42);
    view.defPosition("e2", 239, 320, 42, 42);
    view.defPosition("f2", 284, 320, 42, 42);
    view.defPosition("g2", 329, 320, 42, 42);
    view.defPosition("h2", 374, 320, 42, 42);
    view.defPosition("i2", 419, 320, 42, 42);
    view.defPosition("a1", 59, 365, 42, 42);
    view.defPosition("b1", 104, 365, 42, 42);
    view.defPosition("c1", 149, 365, 42, 42);
    view.defPosition("d1", 194, 365, 42, 42);
    view.defPosition("e1", 239, 365, 42, 42);
    view.defPosition("f1", 284, 365, 42, 42);
    view.defPosition("g1", 329, 365, 42, 42);
    view.defPosition("h1", 374, 365, 42, 42);
    view.defPosition("i1", 419, 365, 42, 42);
    view.defPosition("X9", 5, 2, 45, 48);
    view.defPosition("Y9", 471, 2, 45, 48);
    view.defPosition("X8", 5, 47, 45, 48);
    view.defPosition("Y8", 471, 47, 45, 48);
    view.defPosition("X7", 5, 92, 45, 48);
    view.defPosition("Y7", 471, 92, 45, 48);
    view.defPosition("X6", 5, 137, 45, 48);
    view.defPosition("Y6", 471, 137, 45, 48);
    view.defPosition("X5", 5, 182, 45, 48);
    view.defPosition("Y5", 471, 182, 45, 48);
    view.defPosition("X4", 5, 227, 45, 48);
    view.defPosition("Y4", 471, 227, 45, 48);
    view.defPosition("X3", 5, 272, 45, 48);
    view.defPosition("Y3", 471, 272, 45, 48);
    view.defPosition("X2", 5, 317, 45, 48);
    view.defPosition("Y2", 471, 317, 45, 48);
    view.defPosition("X1", 5, 362, 45, 48);
    view.defPosition("Y1", 471, 362, 45, 48); 
}
