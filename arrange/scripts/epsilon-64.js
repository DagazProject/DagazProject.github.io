Dagaz.Controller.persistense = "setup";

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
    design.checkVersion("animate-drops", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a8", [9, 8, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("c8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("d8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("e8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("f8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("g8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("h8", [0, 8, 7, 0, -1, 0, 0, 0]);
    design.addPosition("a7", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h7", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a6", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h6", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a5", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h5", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a4", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h4", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a3", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h3", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a2", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h2", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("h1", [0, 0, 0, 0, -1, 0, -9, -8]);
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

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [1], 0);

    design.setup("White", "Stone", 79);
    design.setup("White", "Stone", 77);
    design.setup("White", "Stone", 75);
    design.setup("White", "Stone", 73);
    design.setup("White", "Stone", 71);
    design.setup("White", "Stone", 69);
    design.setup("White", "Stone", 67);
    design.setup("Black", "Stone", 64);
    design.setup("Black", "Stone", 66);
    design.setup("Black", "Stone", 68);
    design.setup("Black", "Stone", 70);
    design.setup("Black", "Stone", 72);
    design.setup("Black", "Stone", 74);
    design.setup("Black", "Stone", 76);
}

Dagaz.View.configure = function(view) {
    view.defBoard("WhiteBoard", 0, 0, undefined, [0]);
    view.defBoard("BlackBoard", 0, 0, undefined, [1]);
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackStone", "Black Stone");
 
    view.defPosition("a8", 99, 32, 69, 69);
    view.defPosition("b8", 170, 32, 69, 69);
    view.defPosition("c8", 241, 32, 69, 69);
    view.defPosition("d8", 312, 32, 69, 69);
    view.defPosition("e8", 383, 32, 69, 69);
    view.defPosition("f8", 454, 32, 69, 69);
    view.defPosition("g8", 525, 32, 69, 69);
    view.defPosition("h8", 596, 32, 69, 69);
    view.defPosition("a7", 99, 103, 69, 69);
    view.defPosition("b7", 170, 103, 69, 69);
    view.defPosition("c7", 241, 103, 69, 69);
    view.defPosition("d7", 312, 103, 69, 69);
    view.defPosition("e7", 383, 103, 69, 69);
    view.defPosition("f7", 454, 103, 69, 69);
    view.defPosition("g7", 525, 103, 69, 69);
    view.defPosition("h7", 596, 103, 69, 69);
    view.defPosition("a6", 99, 174, 69, 69);
    view.defPosition("b6", 170, 174, 69, 69);
    view.defPosition("c6", 241, 174, 69, 69);
    view.defPosition("d6", 312, 174, 69, 69);
    view.defPosition("e6", 383, 174, 69, 69);
    view.defPosition("f6", 454, 174, 69, 69);
    view.defPosition("g6", 525, 174, 69, 69);
    view.defPosition("h6", 596, 174, 69, 69);
    view.defPosition("a5", 99, 245, 69, 69);
    view.defPosition("b5", 170, 245, 69, 69);
    view.defPosition("c5", 241, 245, 69, 69);
    view.defPosition("d5", 312, 245, 69, 69);
    view.defPosition("e5", 383, 245, 69, 69);
    view.defPosition("f5", 454, 245, 69, 69);
    view.defPosition("g5", 525, 245, 69, 69);
    view.defPosition("h5", 596, 245, 69, 69);
    view.defPosition("a4", 99, 316, 69, 69);
    view.defPosition("b4", 170, 316, 69, 69);
    view.defPosition("c4", 241, 316, 69, 69);
    view.defPosition("d4", 312, 316, 69, 69);
    view.defPosition("e4", 383, 316, 69, 69);
    view.defPosition("f4", 454, 316, 69, 69);
    view.defPosition("g4", 525, 316, 69, 69);
    view.defPosition("h4", 596, 316, 69, 69);
    view.defPosition("a3", 99, 387, 69, 69);
    view.defPosition("b3", 170, 387, 69, 69);
    view.defPosition("c3", 241, 387, 69, 69);
    view.defPosition("d3", 312, 387, 69, 69);
    view.defPosition("e3", 383, 387, 69, 69);
    view.defPosition("f3", 454, 387, 69, 69);
    view.defPosition("g3", 525, 387, 69, 69);
    view.defPosition("h3", 596, 387, 69, 69);
    view.defPosition("a2", 99, 458, 69, 69);
    view.defPosition("b2", 170, 458, 69, 69);
    view.defPosition("c2", 241, 458, 69, 69);
    view.defPosition("d2", 312, 458, 69, 69);
    view.defPosition("e2", 383, 458, 69, 69);
    view.defPosition("f2", 454, 458, 69, 69);
    view.defPosition("g2", 525, 458, 69, 69);
    view.defPosition("h2", 596, 458, 69, 69);
    view.defPosition("a1", 99, 529, 69, 69);
    view.defPosition("b1", 170, 529, 69, 69);
    view.defPosition("c1", 241, 529, 69, 69);
    view.defPosition("d1", 312, 529, 69, 69);
    view.defPosition("e1", 383, 529, 69, 69);
    view.defPosition("f1", 454, 529, 69, 69);
    view.defPosition("g1", 525, 529, 69, 69);
    view.defPosition("h1", 596, 529, 69, 69);
    view.defPosition("X8", 1, 0, 69, 69);
    view.defPosition("Y8", 696, 66, 69, 69);
    view.defPosition("X7", 1, 71, 69, 69);
    view.defPosition("Y7", 696, 137, 69, 69);
    view.defPosition("X6", 1, 142, 69, 69);
    view.defPosition("Y6", 696, 208, 69, 69);
    view.defPosition("X5", 1, 213, 69, 69);
    view.defPosition("Y5", 696, 279, 69, 69);
    view.defPosition("X4", 1, 284, 69, 69);
    view.defPosition("Y4", 696, 350, 69, 69);
    view.defPosition("X3", 1, 355, 69, 69);
    view.defPosition("Y3", 696, 421, 69, 69);
    view.defPosition("X2", 1, 426, 69, 69);
    view.defPosition("Y2", 696, 492, 69, 69);
    view.defPosition("X1", 1, 497, 69, 69);
    view.defPosition("Y1", 696, 563, 69, 69);
}
