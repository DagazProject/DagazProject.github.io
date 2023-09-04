Dagaz.Controller.noDropIndex = true;

Dagaz.Model.WIDTH  = 10;
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
    design.checkVersion("animate-drops", "false");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "true");

    design.addDirection("ne");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("You", [2, 3, 0, 1]);

    design.addPosition("a8", [0, 11, 0, 0]);
    design.addPosition("b8", [0, 11, 9, 0]);
    design.addPosition("c8", [0, 11, 9, 0]);
    design.addPosition("d8", [0, 11, 9, 0]);
    design.addPosition("e8", [0, 11, 9, 0]);
    design.addPosition("f8", [0, 11, 9, 0]);
    design.addPosition("g8", [0, 11, 9, 0]);
    design.addPosition("h8", [0, 11, 9, 0]);
    design.addPosition("i8", [0, 11, 9, 0]);
    design.addPosition("j8", [0, 0, 9, 0]);
    design.addPosition("a7", [-9, 11, 0, 0]);
    design.addPosition("b7", [-9, 11, 9, -11]);
    design.addPosition("c7", [-9, 11, 9, -11]);
    design.addPosition("d7", [-9, 11, 9, -11]);
    design.addPosition("e7", [-9, 11, 9, -11]);
    design.addPosition("f7", [-9, 11, 9, -11]);
    design.addPosition("g7", [-9, 11, 9, -11]);
    design.addPosition("h7", [-9, 11, 9, -11]);
    design.addPosition("i7", [-9, 11, 9, -11]);
    design.addPosition("j7", [0, 0, 9, -11]);
    design.addPosition("a6", [-9, 11, 0, 0]);
    design.addPosition("b6", [-9, 11, 9, -11]);
    design.addPosition("c6", [-9, 11, 9, -11]);
    design.addPosition("d6", [-9, 11, 9, -11]);
    design.addPosition("e6", [-9, 11, 9, -11]);
    design.addPosition("f6", [-9, 11, 9, -11]);
    design.addPosition("g6", [-9, 11, 9, -11]);
    design.addPosition("h6", [-9, 11, 9, -11]);
    design.addPosition("i6", [-9, 11, 9, -11]);
    design.addPosition("j6", [0, 0, 9, -11]);
    design.addPosition("a5", [-9, 11, 0, 0]);
    design.addPosition("b5", [-9, 11, 9, -11]);
    design.addPosition("c5", [-9, 11, 9, -11]);
    design.addPosition("d5", [-9, 11, 9, -11]);
    design.addPosition("e5", [-9, 11, 9, -11]);
    design.addPosition("f5", [-9, 11, 9, -11]);
    design.addPosition("g5", [-9, 11, 9, -11]);
    design.addPosition("h5", [-9, 11, 9, -11]);
    design.addPosition("i5", [-9, 11, 9, -11]);
    design.addPosition("j5", [0, 0, 9, -11]);
    design.addPosition("a4", [-9, 11, 0, 0]);
    design.addPosition("b4", [-9, 11, 9, -11]);
    design.addPosition("c4", [-9, 11, 9, -11]);
    design.addPosition("d4", [-9, 11, 9, -11]);
    design.addPosition("e4", [-9, 11, 9, -11]);
    design.addPosition("f4", [-9, 11, 9, -11]);
    design.addPosition("g4", [-9, 11, 9, -11]);
    design.addPosition("h4", [-9, 11, 9, -11]);
    design.addPosition("i4", [-9, 11, 9, -11]);
    design.addPosition("j4", [0, 0, 9, -11]);
    design.addPosition("a3", [-9, 11, 0, 0]);
    design.addPosition("b3", [-9, 11, 9, -11]);
    design.addPosition("c3", [-9, 11, 9, -11]);
    design.addPosition("d3", [-9, 11, 9, -11]);
    design.addPosition("e3", [-9, 11, 9, -11]);
    design.addPosition("f3", [-9, 11, 9, -11]);
    design.addPosition("g3", [-9, 11, 9, -11]);
    design.addPosition("h3", [-9, 11, 9, -11]);
    design.addPosition("i3", [-9, 11, 9, -11]);
    design.addPosition("j3", [0, 0, 9, -11]);
    design.addPosition("a2", [-9, 11, 0, 0]);
    design.addPosition("b2", [-9, 11, 9, -11]);
    design.addPosition("c2", [-9, 11, 9, -11]);
    design.addPosition("d2", [-9, 11, 9, -11]);
    design.addPosition("e2", [-9, 11, 9, -11]);
    design.addPosition("f2", [-9, 11, 9, -11]);
    design.addPosition("g2", [-9, 11, 9, -11]);
    design.addPosition("h2", [-9, 11, 9, -11]);
    design.addPosition("i2", [-9, 11, 9, -11]);
    design.addPosition("j2", [0, 0, 9, -11]);
    design.addPosition("a1", [-9, 0, 0, 0]);
    design.addPosition("b1", [-9, 0, 0, -11]);
    design.addPosition("c1", [-9, 0, 0, -11]);
    design.addPosition("d1", [-9, 0, 0, -11]);
    design.addPosition("e1", [-9, 0, 0, -11]);
    design.addPosition("f1", [-9, 0, 0, -11]);
    design.addPosition("g1", [-9, 0, 0, -11]);
    design.addPosition("h1", [-9, 0, 0, -11]);
    design.addPosition("i1", [-9, 0, 0, -11]);
    design.addPosition("j1", [0, 0, 0, -11]);

    design.addZone("black", 1, [70, 72, 74, 76, 78, 61, 63, 65, 67, 69, 50, 52, 54, 56, 58, 41, 43, 45, 47, 49, 30, 32, 34, 36, 38, 21, 23, 25, 27, 29, 10, 12, 14, 16, 18, 1, 3, 5, 7, 9]);
    design.addZone("white-promotion", 1, [1, 3, 5, 7, 9]);
    design.addZone("black-promotion", 1, [70, 72, 74, 76, 78]);

    design.addCommand(0, ZRF.IN_ZONE,	0);	// black
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.IN_ZONE,	0);	// black
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	1);	// white-promotion
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.IN_ZONE,	0);	// black
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	2);	// black-promotion
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPiece("WhiteMan", 0);
    design.addDrop(0, 1, [], 0);
    design.addMove(0, 3, [], 0);

    design.addPiece("BlackMan", 1);
    design.addDrop(1, 2, [], 0);
    design.addMove(1, 3, [], 0);

    design.addPiece("WhiteKing", 2);
    design.addDrop(2, 0, [], 0);
    design.addMove(2, 3, [], 0);

    design.addPiece("BlackKing", 3);
    design.addDrop(3, 0, [], 0);
    design.addMove(3, 3, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "You WhiteMan");
    view.defPiece("BlackMan", "You BlackMan");
    view.defPiece("WhiteKing", "You WhiteKing");
    view.defPiece("BlackKing", "You BlackKing");
 
    view.defPosition("a8", 2, 2, 50, 50);
    view.defPosition("b8", 52, 2, 50, 50);
    view.defPosition("c8", 102, 2, 50, 50);
    view.defPosition("d8", 152, 2, 50, 50);
    view.defPosition("e8", 202, 2, 50, 50);
    view.defPosition("f8", 252, 2, 50, 50);
    view.defPosition("g8", 302, 2, 50, 50);
    view.defPosition("h8", 352, 2, 50, 50);
    view.defPosition("i8", 402, 2, 50, 50);
    view.defPosition("j8", 452, 2, 50, 50);
    view.defPosition("a7", 2, 52, 50, 50);
    view.defPosition("b7", 52, 52, 50, 50);
    view.defPosition("c7", 102, 52, 50, 50);
    view.defPosition("d7", 152, 52, 50, 50);
    view.defPosition("e7", 202, 52, 50, 50);
    view.defPosition("f7", 252, 52, 50, 50);
    view.defPosition("g7", 302, 52, 50, 50);
    view.defPosition("h7", 352, 52, 50, 50);
    view.defPosition("i7", 402, 52, 50, 50);
    view.defPosition("j7", 452, 52, 50, 50);
    view.defPosition("a6", 2, 102, 50, 50);
    view.defPosition("b6", 52, 102, 50, 50);
    view.defPosition("c6", 102, 102, 50, 50);
    view.defPosition("d6", 152, 102, 50, 50);
    view.defPosition("e6", 202, 102, 50, 50);
    view.defPosition("f6", 252, 102, 50, 50);
    view.defPosition("g6", 302, 102, 50, 50);
    view.defPosition("h6", 352, 102, 50, 50);
    view.defPosition("i6", 402, 102, 50, 50);
    view.defPosition("j6", 452, 102, 50, 50);
    view.defPosition("a5", 2, 152, 50, 50);
    view.defPosition("b5", 52, 152, 50, 50);
    view.defPosition("c5", 102, 152, 50, 50);
    view.defPosition("d5", 152, 152, 50, 50);
    view.defPosition("e5", 202, 152, 50, 50);
    view.defPosition("f5", 252, 152, 50, 50);
    view.defPosition("g5", 302, 152, 50, 50);
    view.defPosition("h5", 352, 152, 50, 50);
    view.defPosition("i5", 402, 152, 50, 50);
    view.defPosition("j5", 452, 152, 50, 50);
    view.defPosition("a4", 2, 202, 50, 50);
    view.defPosition("b4", 52, 202, 50, 50);
    view.defPosition("c4", 102, 202, 50, 50);
    view.defPosition("d4", 152, 202, 50, 50);
    view.defPosition("e4", 202, 202, 50, 50);
    view.defPosition("f4", 252, 202, 50, 50);
    view.defPosition("g4", 302, 202, 50, 50);
    view.defPosition("h4", 352, 202, 50, 50);
    view.defPosition("i4", 402, 202, 50, 50);
    view.defPosition("j4", 452, 202, 50, 50);
    view.defPosition("a3", 2, 252, 50, 50);
    view.defPosition("b3", 52, 252, 50, 50);
    view.defPosition("c3", 102, 252, 50, 50);
    view.defPosition("d3", 152, 252, 50, 50);
    view.defPosition("e3", 202, 252, 50, 50);
    view.defPosition("f3", 252, 252, 50, 50);
    view.defPosition("g3", 302, 252, 50, 50);
    view.defPosition("h3", 352, 252, 50, 50);
    view.defPosition("i3", 402, 252, 50, 50);
    view.defPosition("j3", 452, 252, 50, 50);
    view.defPosition("a2", 2, 302, 50, 50);
    view.defPosition("b2", 52, 302, 50, 50);
    view.defPosition("c2", 102, 302, 50, 50);
    view.defPosition("d2", 152, 302, 50, 50);
    view.defPosition("e2", 202, 302, 50, 50);
    view.defPosition("f2", 252, 302, 50, 50);
    view.defPosition("g2", 302, 302, 50, 50);
    view.defPosition("h2", 352, 302, 50, 50);
    view.defPosition("i2", 402, 302, 50, 50);
    view.defPosition("j2", 452, 302, 50, 50);
    view.defPosition("a1", 2, 352, 50, 50);
    view.defPosition("b1", 52, 352, 50, 50);
    view.defPosition("c1", 102, 352, 50, 50);
    view.defPosition("d1", 152, 352, 50, 50);
    view.defPosition("e1", 202, 352, 50, 50);
    view.defPosition("f1", 252, 352, 50, 50);
    view.defPosition("g1", 302, 352, 50, 50);
    view.defPosition("h1", 352, 352, 50, 50);
    view.defPosition("i1", 402, 352, 50, 50);
    view.defPosition("j1", 452, 352, 50, 50);
}
