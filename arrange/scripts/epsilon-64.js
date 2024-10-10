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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("pass-partial", "true");
    design.checkVersion("detect-loops", "true");

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("n");

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

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.MODE,	1);	// continue-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [5], 0);
    design.addMove(0, 1, [2], 0);
    design.addMove(0, 1, [0], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 1, [4], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 2, [6, 6], 1);
    design.addMove(0, 2, [5, 5], 1);
    design.addMove(0, 2, [2, 2], 1);
    design.addMove(0, 2, [0, 0], 1);
    design.addMove(0, 2, [3, 3], 1);
    design.addMove(0, 2, [4, 4], 1);
    design.addMove(0, 2, [7, 7], 1);
    design.addMove(0, 2, [1, 1], 1);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackStone", "Black Stone");
 
    view.defPosition("a8", 29, 32, 69, 69);
    view.defPosition("b8", 100, 32, 69, 69);
    view.defPosition("c8", 171, 32, 69, 69);
    view.defPosition("d8", 242, 32, 69, 69);
    view.defPosition("e8", 313, 32, 69, 69);
    view.defPosition("f8", 384, 32, 69, 69);
    view.defPosition("g8", 455, 32, 69, 69);
    view.defPosition("h8", 526, 32, 69, 69);
    view.defPosition("a7", 29, 103, 69, 69);
    view.defPosition("b7", 100, 103, 69, 69);
    view.defPosition("c7", 171, 103, 69, 69);
    view.defPosition("d7", 242, 103, 69, 69);
    view.defPosition("e7", 313, 103, 69, 69);
    view.defPosition("f7", 384, 103, 69, 69);
    view.defPosition("g7", 455, 103, 69, 69);
    view.defPosition("h7", 526, 103, 69, 69);
    view.defPosition("a6", 29, 174, 69, 69);
    view.defPosition("b6", 100, 174, 69, 69);
    view.defPosition("c6", 171, 174, 69, 69);
    view.defPosition("d6", 242, 174, 69, 69);
    view.defPosition("e6", 313, 174, 69, 69);
    view.defPosition("f6", 384, 174, 69, 69);
    view.defPosition("g6", 455, 174, 69, 69);
    view.defPosition("h6", 526, 174, 69, 69);
    view.defPosition("a5", 29, 245, 69, 69);
    view.defPosition("b5", 100, 245, 69, 69);
    view.defPosition("c5", 171, 245, 69, 69);
    view.defPosition("d5", 242, 245, 69, 69);
    view.defPosition("e5", 313, 245, 69, 69);
    view.defPosition("f5", 384, 245, 69, 69);
    view.defPosition("g5", 455, 245, 69, 69);
    view.defPosition("h5", 526, 245, 69, 69);
    view.defPosition("a4", 29, 316, 69, 69);
    view.defPosition("b4", 100, 316, 69, 69);
    view.defPosition("c4", 171, 316, 69, 69);
    view.defPosition("d4", 242, 316, 69, 69);
    view.defPosition("e4", 313, 316, 69, 69);
    view.defPosition("f4", 384, 316, 69, 69);
    view.defPosition("g4", 455, 316, 69, 69);
    view.defPosition("h4", 526, 316, 69, 69);
    view.defPosition("a3", 29, 387, 69, 69);
    view.defPosition("b3", 100, 387, 69, 69);
    view.defPosition("c3", 171, 387, 69, 69);
    view.defPosition("d3", 242, 387, 69, 69);
    view.defPosition("e3", 313, 387, 69, 69);
    view.defPosition("f3", 384, 387, 69, 69);
    view.defPosition("g3", 455, 387, 69, 69);
    view.defPosition("h3", 526, 387, 69, 69);
    view.defPosition("a2", 29, 458, 69, 69);
    view.defPosition("b2", 100, 458, 69, 69);
    view.defPosition("c2", 171, 458, 69, 69);
    view.defPosition("d2", 242, 458, 69, 69);
    view.defPosition("e2", 313, 458, 69, 69);
    view.defPosition("f2", 384, 458, 69, 69);
    view.defPosition("g2", 455, 458, 69, 69);
    view.defPosition("h2", 526, 458, 69, 69);
    view.defPosition("a1", 29, 529, 69, 69);
    view.defPosition("b1", 100, 529, 69, 69);
    view.defPosition("c1", 171, 529, 69, 69);
    view.defPosition("d1", 242, 529, 69, 69);
    view.defPosition("e1", 313, 529, 69, 69);
    view.defPosition("f1", 384, 529, 69, 69);
    view.defPosition("g1", 455, 529, 69, 69);
    view.defPosition("h1", 526, 529, 69, 69);
}
