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
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("three-crowns-extension", "strict");
    design.checkVersion("three-crowns-invariant", "strict");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a8", [0, 1, 8, 0, 0, 9, 0, 0]);
    design.addPosition("b8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("c8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("d8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("e8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("f8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("g8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("h8", [-1, 0, 8, 0, 0, 0, 7, 0]);
    design.addPosition("a7", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h7", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a6", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h6", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a5", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h5", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a4", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h4", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a3", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h3", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a2", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h2", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a1", [0, 1, 0, -7, -8, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("c1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("d1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("e1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("f1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("g1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("h1", [-1, 0, 0, 0, -8, 0, 0, -9]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	1);	// Crown
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.MODE,	1);	// left-1-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	1);	// Crown
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	0);	// Stone
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.MODE,	1);	// left-1-type
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	0);	// Stone
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	26);	// capture
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// normal-type

    design.addPiece("Stone", 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 1, [4, 4], 0);
    design.addMove(0, 1, [2, 2], 0);
    design.addMove(0, 1, [0, 0], 0);
    design.addMove(0, 1, [1, 1], 0);
    design.addMove(0, 1, [7, 7], 0);
    design.addMove(0, 1, [5, 5], 0);
    design.addMove(0, 1, [6, 6], 0);
    design.addMove(0, 1, [3, 3], 0);
    design.addMove(0, 2, [4, 4], 1);
    design.addMove(0, 2, [2, 2], 1);
    design.addMove(0, 2, [0, 0], 1);
    design.addMove(0, 2, [1, 1], 1);
    design.addMove(0, 2, [7, 7], 1);
    design.addMove(0, 2, [5, 5], 1);
    design.addMove(0, 2, [6, 6], 1);
    design.addMove(0, 2, [3, 3], 1);

    design.addPiece("Crown", 1);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [6], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 3, [4, 4], 0);
    design.addMove(1, 3, [2, 2], 0);
    design.addMove(1, 3, [0, 0], 0);
    design.addMove(1, 3, [1, 1], 0);
    design.addMove(1, 3, [7, 7], 0);
    design.addMove(1, 3, [5, 5], 0);
    design.addMove(1, 3, [6, 6], 0);
    design.addMove(1, 3, [3, 3], 0);
    design.addMove(1, 4, [4, 4], 1);
    design.addMove(1, 4, [2, 2], 1);
    design.addMove(1, 4, [0, 0], 1);
    design.addMove(1, 4, [1, 1], 1);
    design.addMove(1, 4, [7, 7], 1);
    design.addMove(1, 4, [5, 5], 1);
    design.addMove(1, 4, [6, 6], 1);
    design.addMove(1, 4, [3, 3], 1);

    design.setup("White", "Stone", 57);
    design.setup("White", "Stone", 62);
    design.setup("White", "Stone", 40);
    design.setup("White", "Stone", 47);
    design.setup("White", "Stone", 24);
    design.setup("White", "Stone", 31);
    design.setup("White", "Stone", 0);
    design.setup("White", "Stone", 2);
    design.setup("White", "Stone", 5);
    design.setup("White", "Stone", 7);
    design.setup("Black", "Stone", 56);
    design.setup("Black", "Stone", 58);
    design.setup("Black", "Stone", 61);
    design.setup("Black", "Stone", 63);
    design.setup("Black", "Stone", 32);
    design.setup("Black", "Stone", 39);
    design.setup("Black", "Stone", 16);
    design.setup("Black", "Stone", 23);
    design.setup("Black", "Stone", 1);
    design.setup("Black", "Stone", 6);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("WhiteCrown", "White Crown");
    view.defPiece("BlackCrown", "Black Crown");
 
    view.defPosition("a8", 4, 4, 50, 50);
    view.defPosition("b8", 54, 4, 50, 50);
    view.defPosition("c8", 104, 4, 50, 50);
    view.defPosition("d8", 154, 4, 50, 50);
    view.defPosition("e8", 204, 4, 50, 50);
    view.defPosition("f8", 254, 4, 50, 50);
    view.defPosition("g8", 304, 4, 50, 50);
    view.defPosition("h8", 354, 4, 50, 50);
    view.defPosition("a7", 4, 54, 50, 50);
    view.defPosition("b7", 54, 54, 50, 50);
    view.defPosition("c7", 104, 54, 50, 50);
    view.defPosition("d7", 154, 54, 50, 50);
    view.defPosition("e7", 204, 54, 50, 50);
    view.defPosition("f7", 254, 54, 50, 50);
    view.defPosition("g7", 304, 54, 50, 50);
    view.defPosition("h7", 354, 54, 50, 50);
    view.defPosition("a6", 4, 104, 50, 50);
    view.defPosition("b6", 54, 104, 50, 50);
    view.defPosition("c6", 104, 104, 50, 50);
    view.defPosition("d6", 154, 104, 50, 50);
    view.defPosition("e6", 204, 104, 50, 50);
    view.defPosition("f6", 254, 104, 50, 50);
    view.defPosition("g6", 304, 104, 50, 50);
    view.defPosition("h6", 354, 104, 50, 50);
    view.defPosition("a5", 4, 154, 50, 50);
    view.defPosition("b5", 54, 154, 50, 50);
    view.defPosition("c5", 104, 154, 50, 50);
    view.defPosition("d5", 154, 154, 50, 50);
    view.defPosition("e5", 204, 154, 50, 50);
    view.defPosition("f5", 254, 154, 50, 50);
    view.defPosition("g5", 304, 154, 50, 50);
    view.defPosition("h5", 354, 154, 50, 50);
    view.defPosition("a4", 4, 204, 50, 50);
    view.defPosition("b4", 54, 204, 50, 50);
    view.defPosition("c4", 104, 204, 50, 50);
    view.defPosition("d4", 154, 204, 50, 50);
    view.defPosition("e4", 204, 204, 50, 50);
    view.defPosition("f4", 254, 204, 50, 50);
    view.defPosition("g4", 304, 204, 50, 50);
    view.defPosition("h4", 354, 204, 50, 50);
    view.defPosition("a3", 4, 254, 50, 50);
    view.defPosition("b3", 54, 254, 50, 50);
    view.defPosition("c3", 104, 254, 50, 50);
    view.defPosition("d3", 154, 254, 50, 50);
    view.defPosition("e3", 204, 254, 50, 50);
    view.defPosition("f3", 254, 254, 50, 50);
    view.defPosition("g3", 304, 254, 50, 50);
    view.defPosition("h3", 354, 254, 50, 50);
    view.defPosition("a2", 4, 304, 50, 50);
    view.defPosition("b2", 54, 304, 50, 50);
    view.defPosition("c2", 104, 304, 50, 50);
    view.defPosition("d2", 154, 304, 50, 50);
    view.defPosition("e2", 204, 304, 50, 50);
    view.defPosition("f2", 254, 304, 50, 50);
    view.defPosition("g2", 304, 304, 50, 50);
    view.defPosition("h2", 354, 304, 50, 50);
    view.defPosition("a1", 4, 354, 50, 50);
    view.defPosition("b1", 54, 354, 50, 50);
    view.defPosition("c1", 104, 354, 50, 50);
    view.defPosition("d1", 154, 354, 50, 50);
    view.defPosition("e1", 204, 354, 50, 50);
    view.defPosition("f1", 254, 354, 50, 50);
    view.defPosition("g1", 304, 354, 50, 50);
    view.defPosition("h1", 354, 354, 50, 50);
}
