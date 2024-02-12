Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH  = 12;
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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("s"); // 0
    design.addDirection("e"); // 1
    design.addDirection("w"); // 2
    design.addDirection("n"); // 3

    design.addPlayer("Black", [3, 2, 1, 0]);
    design.addPlayer("White", [0, 1, 2, 3]);

    design.addPosition("a8", [12, 1, 0, 0]);
    design.addPosition("b8", [12, 1, -1, 0]);
    design.addPosition("c8", [12, 1, -1, 0]);
    design.addPosition("d8", [12, 1, -1, 0]);
    design.addPosition("e8", [12, 1, -1, 0]);
    design.addPosition("f8", [12, 1, -1, 0]);
    design.addPosition("g8", [12, 1, -1, 0]);
    design.addPosition("h8", [12, 1, -1, 0]);
    design.addPosition("i8", [12, 1, -1, 0]);
    design.addPosition("j8", [12, 1, -1, 0]);
    design.addPosition("k8", [12, 1, -1, 0]);
    design.addPosition("l8", [12, 0, -1, 0]);
    design.addPosition("a7", [12, 1, 0, -12]);
    design.addPosition("b7", [12, 1, -1, -12]);
    design.addPosition("c7", [12, 1, -1, -12]);
    design.addPosition("d7", [12, 1, -1, -12]);
    design.addPosition("e7", [12, 1, -1, -12]);
    design.addPosition("f7", [12, 1, -1, -12]);
    design.addPosition("g7", [12, 1, -1, -12]);
    design.addPosition("h7", [12, 1, -1, -12]);
    design.addPosition("i7", [12, 1, -1, -12]);
    design.addPosition("j7", [12, 1, -1, -12]);
    design.addPosition("k7", [12, 1, -1, -12]);
    design.addPosition("l7", [12, 0, -1, -12]);
    design.addPosition("a6", [12, 1, 0, -12]);
    design.addPosition("b6", [12, 1, -1, -12]);
    design.addPosition("c6", [12, 1, -1, -12]);
    design.addPosition("d6", [12, 1, -1, -12]);
    design.addPosition("e6", [12, 1, -1, -12]);
    design.addPosition("f6", [12, 1, -1, -12]);
    design.addPosition("g6", [12, 1, -1, -12]);
    design.addPosition("h6", [12, 1, -1, -12]);
    design.addPosition("i6", [12, 1, -1, -12]);
    design.addPosition("j6", [12, 1, -1, -12]);
    design.addPosition("k6", [12, 1, -1, -12]);
    design.addPosition("l6", [12, 0, -1, -12]);
    design.addPosition("a5", [12, 1, 0, -12]);
    design.addPosition("b5", [12, 1, -1, -12]);
    design.addPosition("c5", [12, 1, -1, -12]);
    design.addPosition("d5", [12, 1, -1, -12]);
    design.addPosition("e5", [12, 1, -1, -12]);
    design.addPosition("f5", [12, 1, -1, -12]);
    design.addPosition("g5", [12, 1, -1, -12]);
    design.addPosition("h5", [12, 1, -1, -12]);
    design.addPosition("i5", [12, 1, -1, -12]);
    design.addPosition("j5", [12, 1, -1, -12]);
    design.addPosition("k5", [12, 1, -1, -12]);
    design.addPosition("l5", [12, 0, -1, -12]);
    design.addPosition("a4", [12, 1, 0, -12]);
    design.addPosition("b4", [12, 1, -1, -12]);
    design.addPosition("c4", [12, 1, -1, -12]);
    design.addPosition("d4", [12, 1, -1, -12]);
    design.addPosition("e4", [12, 1, -1, -12]);
    design.addPosition("f4", [12, 1, -1, -12]);
    design.addPosition("g4", [12, 1, -1, -12]);
    design.addPosition("h4", [12, 1, -1, -12]);
    design.addPosition("i4", [12, 1, -1, -12]);
    design.addPosition("j4", [12, 1, -1, -12]);
    design.addPosition("k4", [12, 1, -1, -12]);
    design.addPosition("l4", [12, 0, -1, -12]);
    design.addPosition("a3", [12, 1, 0, -12]);
    design.addPosition("b3", [12, 1, -1, -12]);
    design.addPosition("c3", [12, 1, -1, -12]);
    design.addPosition("d3", [12, 1, -1, -12]);
    design.addPosition("e3", [12, 1, -1, -12]);
    design.addPosition("f3", [12, 1, -1, -12]);
    design.addPosition("g3", [12, 1, -1, -12]);
    design.addPosition("h3", [12, 1, -1, -12]);
    design.addPosition("i3", [12, 1, -1, -12]);
    design.addPosition("j3", [12, 1, -1, -12]);
    design.addPosition("k3", [12, 1, -1, -12]);
    design.addPosition("l3", [12, 0, -1, -12]);
    design.addPosition("a2", [12, 1, 0, -12]);
    design.addPosition("b2", [12, 1, -1, -12]);
    design.addPosition("c2", [12, 1, -1, -12]);
    design.addPosition("d2", [12, 1, -1, -12]);
    design.addPosition("e2", [12, 1, -1, -12]);
    design.addPosition("f2", [12, 1, -1, -12]);
    design.addPosition("g2", [12, 1, -1, -12]);
    design.addPosition("h2", [12, 1, -1, -12]);
    design.addPosition("i2", [12, 1, -1, -12]);
    design.addPosition("j2", [12, 1, -1, -12]);
    design.addPosition("k2", [12, 1, -1, -12]);
    design.addPosition("l2", [12, 0, -1, -12]);
    design.addPosition("a1", [0, 1, 0, -12]);
    design.addPosition("b1", [0, 1, -1, -12]);
    design.addPosition("c1", [0, 1, -1, -12]);
    design.addPosition("d1", [0, 1, -1, -12]);
    design.addPosition("e1", [0, 1, -1, -12]);
    design.addPosition("f1", [0, 1, -1, -12]);
    design.addPosition("g1", [0, 1, -1, -12]);
    design.addPosition("h1", [0, 1, -1, -12]);
    design.addPosition("i1", [0, 1, -1, -12]);
    design.addPosition("j1", [0, 1, -1, -12]);
    design.addPosition("k1", [0, 1, -1, -12]);
    design.addPosition("l1", [0, 0, -1, -12]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	7);
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-8);
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [1, 1], 0);

    design.addPiece("King", 1);
    design.addMove(1, 0, [3, 3], 0);
    design.addMove(1, 0, [0, 0], 0);
    design.addMove(1, 0, [2, 2], 0);
    design.addMove(1, 0, [1, 1], 0);

    design.addPiece("CapturedKing", 2);

    design.setup("Black", "King", 78);
    design.setup("Black", "Man", 84);
    design.setup("Black", "Man", 85);
    design.setup("Black", "Man", 86);
    design.setup("Black", "Man", 87);
    design.setup("Black", "Man", 88);
    design.setup("Black", "Man", 89);
    design.setup("Black", "Man", 90);
    design.setup("Black", "Man", 91);
    design.setup("Black", "Man", 92);
    design.setup("Black", "Man", 93);
    design.setup("Black", "Man", 94);
    design.setup("Black", "Man", 95);
    design.setup("White", "King", 17);
    design.setup("White", "Man", 0);
    design.setup("White", "Man", 1);
    design.setup("White", "Man", 2);
    design.setup("White", "Man", 3);
    design.setup("White", "Man", 4);
    design.setup("White", "Man", 5);
    design.setup("White", "Man", 6);
    design.setup("White", "Man", 7);
    design.setup("White", "Man", 8);
    design.setup("White", "Man", 9);
    design.setup("White", "Man", 10);
    design.setup("White", "Man", 11);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPieceSvg("WhiteMan", "White Man", 49, 49);
    view.defPieceSvg("BlackMan", "Black Man", 49, 49);
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("WhiteKing", "White CapturedKing");
    view.defPiece("BlackKing", "Black CapturedKing");
 
    view.defPosition("a8", 5, 5, 69, 69);
    view.defPosition("b8", 74, 5, 69, 69);
    view.defPosition("c8", 143, 5, 69, 69);
    view.defPosition("d8", 212, 5, 69, 69);
    view.defPosition("e8", 281, 5, 69, 69);
    view.defPosition("f8", 350, 5, 69, 69);
    view.defPosition("g8", 419, 5, 69, 69);
    view.defPosition("h8", 488, 5, 69, 69);
    view.defPosition("i8", 557, 5, 69, 69);
    view.defPosition("j8", 626, 5, 69, 69);
    view.defPosition("k8", 695, 5, 69, 69);
    view.defPosition("l8", 764, 5, 69, 69);
    view.defPosition("a7", 5, 74, 69, 69);
    view.defPosition("b7", 74, 74, 69, 69);
    view.defPosition("c7", 143, 74, 69, 69);
    view.defPosition("d7", 212, 74, 69, 69);
    view.defPosition("e7", 281, 74, 69, 69);
    view.defPosition("f7", 350, 74, 69, 69);
    view.defPosition("g7", 419, 74, 69, 69);
    view.defPosition("h7", 488, 74, 69, 69);
    view.defPosition("i7", 557, 74, 69, 69);
    view.defPosition("j7", 626, 74, 69, 69);
    view.defPosition("k7", 695, 74, 69, 69);
    view.defPosition("l7", 764, 74, 69, 69);
    view.defPosition("a6", 5, 143, 69, 69);
    view.defPosition("b6", 74, 143, 69, 69);
    view.defPosition("c6", 143, 143, 69, 69);
    view.defPosition("d6", 212, 143, 69, 69);
    view.defPosition("e6", 281, 143, 69, 69);
    view.defPosition("f6", 350, 143, 69, 69);
    view.defPosition("g6", 419, 143, 69, 69);
    view.defPosition("h6", 488, 143, 69, 69);
    view.defPosition("i6", 557, 143, 69, 69);
    view.defPosition("j6", 626, 143, 69, 69);
    view.defPosition("k6", 695, 143, 69, 69);
    view.defPosition("l6", 764, 143, 69, 69);
    view.defPosition("a5", 5, 212, 69, 69);
    view.defPosition("b5", 74, 212, 69, 69);
    view.defPosition("c5", 143, 212, 69, 69);
    view.defPosition("d5", 212, 212, 69, 69);
    view.defPosition("e5", 281, 212, 69, 69);
    view.defPosition("f5", 350, 212, 69, 69);
    view.defPosition("g5", 419, 212, 69, 69);
    view.defPosition("h5", 488, 212, 69, 69);
    view.defPosition("i5", 557, 212, 69, 69);
    view.defPosition("j5", 626, 212, 69, 69);
    view.defPosition("k5", 695, 212, 69, 69);
    view.defPosition("l5", 764, 212, 69, 69);
    view.defPosition("a4", 5, 281, 69, 69);
    view.defPosition("b4", 74, 281, 69, 69);
    view.defPosition("c4", 143, 281, 69, 69);
    view.defPosition("d4", 212, 281, 69, 69);
    view.defPosition("e4", 281, 281, 69, 69);
    view.defPosition("f4", 350, 281, 69, 69);
    view.defPosition("g4", 419, 281, 69, 69);
    view.defPosition("h4", 488, 281, 69, 69);
    view.defPosition("i4", 557, 281, 69, 69);
    view.defPosition("j4", 626, 281, 69, 69);
    view.defPosition("k4", 695, 281, 69, 69);
    view.defPosition("l4", 764, 281, 69, 69);
    view.defPosition("a3", 5, 350, 69, 69);
    view.defPosition("b3", 74, 350, 69, 69);
    view.defPosition("c3", 143, 350, 69, 69);
    view.defPosition("d3", 212, 350, 69, 69);
    view.defPosition("e3", 281, 350, 69, 69);
    view.defPosition("f3", 350, 350, 69, 69);
    view.defPosition("g3", 419, 350, 69, 69);
    view.defPosition("h3", 488, 350, 69, 69);
    view.defPosition("i3", 557, 350, 69, 69);
    view.defPosition("j3", 626, 350, 69, 69);
    view.defPosition("k3", 695, 350, 69, 69);
    view.defPosition("l3", 764, 350, 69, 69);
    view.defPosition("a2", 5, 419, 69, 69);
    view.defPosition("b2", 74, 419, 69, 69);
    view.defPosition("c2", 143, 419, 69, 69);
    view.defPosition("d2", 212, 419, 69, 69);
    view.defPosition("e2", 281, 419, 69, 69);
    view.defPosition("f2", 350, 419, 69, 69);
    view.defPosition("g2", 419, 419, 69, 69);
    view.defPosition("h2", 488, 419, 69, 69);
    view.defPosition("i2", 557, 419, 69, 69);
    view.defPosition("j2", 626, 419, 69, 69);
    view.defPosition("k2", 695, 419, 69, 69);
    view.defPosition("l2", 764, 419, 69, 69);
    view.defPosition("a1", 5, 488, 69, 69);
    view.defPosition("b1", 74, 488, 69, 69);
    view.defPosition("c1", 143, 488, 69, 69);
    view.defPosition("d1", 212, 488, 69, 69);
    view.defPosition("e1", 281, 488, 69, 69);
    view.defPosition("f1", 350, 488, 69, 69);
    view.defPosition("g1", 419, 488, 69, 69);
    view.defPosition("h1", 488, 488, 69, 69);
    view.defPosition("i1", 557, 488, 69, 69);
    view.defPosition("j1", 626, 488, 69, 69);
    view.defPosition("k1", 695, 488, 69, 69);
    view.defPosition("l1", 764, 488, 69, 69);
}
