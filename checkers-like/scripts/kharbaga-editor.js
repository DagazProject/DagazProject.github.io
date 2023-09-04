Dagaz.Controller.noDropIndex = true;

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
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "true");

    design.addDirection("n");  // 0
    design.addDirection("s");  // 1
    design.addDirection("e");  // 2
    design.addDirection("w");  // 3
    design.addDirection("ne"); // 4
    design.addDirection("sw"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("se"); // 7

    design.addPlayer("You", [1, 0, 3, 2, 5, 4, 7, 6]);

    design.addPosition("a9", [0, 18, 2, 0, 0, 0, 0, 10]);
    design.addPosition("b9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c9", [0, 18, 2, -2, 0, 8, 0, 10]);
    design.addPosition("d9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e9", [0, 18, 2, -2, 0, 8, 0, 10]);
    design.addPosition("f9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g9", [0, 18, 2, -2, 0, 8, 0, 10]);
    design.addPosition("h9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i9", [0, 18, 0, -2, 0, 8, 0, 0]);
    design.addPosition("a8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b8", [0, 0, 0, 0, -8, 8, -10, 10]);
    design.addPosition("c8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d8", [0, 0, 0, 0, -8, 8, -10, 10]);
    design.addPosition("e8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f8", [0, 0, 0, 0, -8, 8, -10, 10]);
    design.addPosition("g8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h8", [0, 0, 0, 0, -8, 8, -10, 10]);
    design.addPosition("i8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [-18, 18, 2, 0, -8, 0, 0, 10]);
    design.addPosition("b7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c7", [-18, 18, 2, -2, -8, 8, -10, 10]);
    design.addPosition("d7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e7", [-18, 18, 2, -2, -8, 8, -10, 10]);
    design.addPosition("f7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g7", [-18, 18, 2, -2, -8, 8, -10, 10]);
    design.addPosition("h7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i7", [-18, 18, 0, -2, 0, 8, -10, 0]);
    design.addPosition("a6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [0, 0, 0, 0, -8, 8, -10, 10]);
    design.addPosition("c6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d6", [0, 0, 0, 0, -8, 8, -10, 10]);
    design.addPosition("e6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f6", [0, 0, 0, 0, -8, 8, -10, 10]);
    design.addPosition("g6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h6", [0, 0, 0, 0, -8, 8, -10, 10]);
    design.addPosition("i6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [-18, 18, 2, 0, -8, 0, 0, 10]);
    design.addPosition("b5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [-18, 18, 2, -2, -8, 8, -10, 10]);
    design.addPosition("d5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e5", [-18, 18, 2, -2, -8, 8, -10, 10]);
    design.addPosition("f5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g5", [-18, 18, 2, -2, -8, 8, -10, 10]);
    design.addPosition("h5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i5", [-18, 18, 0, -2, 0, 8, -10, 0]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [0, 0, 0, 0, -8, 8, -10, 10]);
    design.addPosition("c4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d4", [0, 0, 0, 0, -8, 8, -10, 10]);
    design.addPosition("e4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f4", [0, 0, 0, 0, -8, 8, -10, 10]);
    design.addPosition("g4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h4", [0, 0, 0, 0, -8, 8, -10, 10]);
    design.addPosition("i4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [-18, 18, 2, 0, -8, 0, 0, 10]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [-18, 18, 2, -2, -8, 8, -10, 10]);
    design.addPosition("d3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e3", [-18, 18, 2, -2, -8, 8, -10, 10]);
    design.addPosition("f3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g3", [-18, 18, 2, -2, -8, 8, -10, 10]);
    design.addPosition("h3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i3", [-18, 18, 0, -2, 0, 8, -10, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, -8, 8, -10, 10]);
    design.addPosition("c2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2", [0, 0, 0, 0, -8, 8, -10, 10]);
    design.addPosition("e2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2", [0, 0, 0, 0, -8, 8, -10, 10]);
    design.addPosition("g2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2", [0, 0, 0, 0, -8, 8, -10, 10]);
    design.addPosition("i2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [-18, 0, 2, 0, -8, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [-18, 0, 2, -2, -8, 0, -10, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [-18, 0, 2, -2, -8, 0, -10, 0]);
    design.addPosition("f1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1", [-18, 0, 2, -2, -8, 0, -10, 0]);
    design.addPosition("h1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i1", [-18, 0, 0, -2, 0, 0, -10, 0]);

    design.addZone("forbidden", 1, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79]);
    design.addZone("white-promotion", 1, [0, 2, 4, 6, 8]);
    design.addZone("black-promotion", 1, [72, 74, 76, 78, 80]);

    design.addCommand(0, ZRF.IN_ZONE,	0);	// forbidden
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.IN_ZONE,	0);	// forbidden
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	1);	// white-promotion
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.IN_ZONE,	0);	// forbidden
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
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
 
    view.defPosition("a9", 6, 6, 59, 59);
    view.defPosition("b9", 50, 6, 59, 59);
    view.defPosition("c9", 94, 6, 59, 59);
    view.defPosition("d9", 138, 6, 59, 59);
    view.defPosition("e9", 182, 6, 59, 59);
    view.defPosition("f9", 226, 6, 59, 59);
    view.defPosition("g9", 270, 6, 59, 59);
    view.defPosition("h9", 314, 6, 59, 59);
    view.defPosition("i9", 358, 6, 59, 59);
    view.defPosition("a8", 6, 50, 59, 59);
    view.defPosition("b8", 50, 50, 59, 59);
    view.defPosition("c8", 94, 50, 59, 59);
    view.defPosition("d8", 138, 50, 59, 59);
    view.defPosition("e8", 182, 50, 59, 59);
    view.defPosition("f8", 226, 50, 59, 59);
    view.defPosition("g8", 270, 50, 59, 59);
    view.defPosition("h8", 314, 50, 59, 59);
    view.defPosition("i8", 358, 50, 59, 59);
    view.defPosition("a7", 6, 94, 59, 59);
    view.defPosition("b7", 50, 94, 59, 59);
    view.defPosition("c7", 94, 94, 59, 59);
    view.defPosition("d7", 138, 94, 59, 59);
    view.defPosition("e7", 182, 94, 59, 59);
    view.defPosition("f7", 226, 94, 59, 59);
    view.defPosition("g7", 270, 94, 59, 59);
    view.defPosition("h7", 314, 94, 59, 59);
    view.defPosition("i7", 358, 94, 59, 59);
    view.defPosition("a6", 6, 138, 59, 59);
    view.defPosition("b6", 50, 138, 59, 59);
    view.defPosition("c6", 94, 138, 59, 59);
    view.defPosition("d6", 138, 138, 59, 59);
    view.defPosition("e6", 182, 138, 59, 59);
    view.defPosition("f6", 226, 138, 59, 59);
    view.defPosition("g6", 270, 138, 59, 59);
    view.defPosition("h6", 314, 138, 59, 59);
    view.defPosition("i6", 358, 138, 59, 59);
    view.defPosition("a5", 6, 182, 59, 59);
    view.defPosition("b5", 50, 182, 59, 59);
    view.defPosition("c5", 94, 182, 59, 59);
    view.defPosition("d5", 138, 182, 59, 59);
    view.defPosition("e5", 182, 182, 59, 59);
    view.defPosition("f5", 226, 182, 59, 59);
    view.defPosition("g5", 270, 182, 59, 59);
    view.defPosition("h5", 314, 182, 59, 59);
    view.defPosition("i5", 358, 182, 59, 59);
    view.defPosition("a4", 6, 226, 59, 59);
    view.defPosition("b4", 50, 226, 59, 59);
    view.defPosition("c4", 94, 226, 59, 59);
    view.defPosition("d4", 138, 226, 59, 59);
    view.defPosition("e4", 182, 226, 59, 59);
    view.defPosition("f4", 226, 226, 59, 59);
    view.defPosition("g4", 270, 226, 59, 59);
    view.defPosition("h4", 314, 226, 59, 59);
    view.defPosition("i4", 358, 226, 59, 59);
    view.defPosition("a3", 6, 270, 59, 59);
    view.defPosition("b3", 50, 270, 59, 59);
    view.defPosition("c3", 94, 270, 59, 59);
    view.defPosition("d3", 138, 270, 59, 59);
    view.defPosition("e3", 182, 270, 59, 59);
    view.defPosition("f3", 226, 270, 59, 59);
    view.defPosition("g3", 270, 270, 59, 59);
    view.defPosition("h3", 314, 270, 59, 59);
    view.defPosition("i3", 358, 270, 59, 59);
    view.defPosition("a2", 6, 314, 59, 59);
    view.defPosition("b2", 50, 314, 59, 59);
    view.defPosition("c2", 94, 314, 59, 59);
    view.defPosition("d2", 138, 314, 59, 59);
    view.defPosition("e2", 182, 314, 59, 59);
    view.defPosition("f2", 226, 314, 59, 59);
    view.defPosition("g2", 270, 314, 59, 59);
    view.defPosition("h2", 314, 314, 59, 59);
    view.defPosition("i2", 358, 314, 59, 59);
    view.defPosition("a1", 6, 358, 59, 59);
    view.defPosition("b1", 50, 358, 59, 59);
    view.defPosition("c1", 94, 358, 59, 59);
    view.defPosition("d1", 138, 358, 59, 59);
    view.defPosition("e1", 182, 358, 59, 59);
    view.defPosition("f1", 226, 358, 59, 59);
    view.defPosition("g1", 270, 358, 59, 59);
    view.defPosition("h1", 314, 358, 59, 59);
    view.defPosition("i1", 358, 358, 59, 59);
}
