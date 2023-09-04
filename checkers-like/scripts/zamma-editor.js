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

    design.addDirection("w");  // 0
    design.addDirection("e");  // 1
    design.addDirection("s");  // 2
    design.addDirection("n");  // 3
    design.addDirection("ne"); // 4
    design.addDirection("sw"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("se"); // 7

    design.addPlayer("You", [1, 0, 3, 2, 5, 4, 7, 6]);

    design.addPosition("a9", [0, 1, 9, 0, 0, 0, 0, 10]);
    design.addPosition("b9", [-1, 1, 9, 0, 0, 0, 0, 0]);
    design.addPosition("c9", [-1, 1, 9, 0, 0, 8, 0, 10]);
    design.addPosition("d9", [-1, 1, 9, 0, 0, 0, 0, 0]);
    design.addPosition("e9", [-1, 1, 9, 0, 0, 8, 0, 10]);
    design.addPosition("f9", [-1, 1, 9, 0, 0, 0, 0, 0]);
    design.addPosition("g9", [-1, 1, 9, 0, 0, 8, 0, 10]);
    design.addPosition("h9", [-1, 1, 9, 0, 0, 0, 0, 0]);
    design.addPosition("i9", [-1, 0, 9, 0, 0, 8, 0, 0]);
    design.addPosition("a8", [0, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("b8", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("c8", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("d8", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("e8", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("f8", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("g8", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("h8", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("i8", [-1, 0, 9, -9, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 1, 9, -9, -8, 0, 0, 10]);
    design.addPosition("b7", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("c7", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("d7", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("e7", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("f7", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("g7", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("h7", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("i7", [-1, 0, 9, -9, 0, 8, -10, 0]);
    design.addPosition("a6", [0, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("b6", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("c6", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("d6", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("e6", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("f6", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("g6", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("h6", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("i6", [-1, 0, 9, -9, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 1, 9, -9, -8, 0, 0, 10]);
    design.addPosition("b5", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("c5", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("d5", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("e5", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("f5", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("g5", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("h5", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("i5", [-1, 0, 9, -9, 0, 8, -10, 0]);
    design.addPosition("a4", [0, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("b4", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("c4", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("d4", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("e4", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("f4", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("g4", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("h4", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("i4", [-1, 0, 9, -9, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 1, 9, -9, -8, 0, 0, 10]);
    design.addPosition("b3", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("c3", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("d3", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("e3", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("f3", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("g3", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("h3", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("i3", [-1, 0, 9, -9, 0, 8, -10, 0]);
    design.addPosition("a2", [0, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("b2", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("c2", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("d2", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("e2", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("f2", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("g2", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("h2", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("i2", [-1, 0, 9, -9, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, -9, -8, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -9, 0, 0, 0, 0]);
    design.addPosition("c1", [-1, 1, 0, -9, -8, 0, -10, 0]);
    design.addPosition("d1", [-1, 1, 0, -9, 0, 0, 0, 0]);
    design.addPosition("e1", [-1, 1, 0, -9, -8, 0, -10, 0]);
    design.addPosition("f1", [-1, 1, 0, -9, 0, 0, 0, 0]);
    design.addPosition("g1", [-1, 1, 0, -9, -8, 0, -10, 0]);
    design.addPosition("h1", [-1, 1, 0, -9, 0, 0, 0, 0]);
    design.addPosition("i1", [-1, 0, 0, -9, 0, 0, -10, 0]);

    design.addZone("white-promotion", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8]);
    design.addZone("black-promotion", 1, [72, 73, 74, 75, 76, 77, 78, 79, 80]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.IN_ZONE,	0);	// white-promotion
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.IN_ZONE,	1);	// black-promotion
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
    view.defPosition("b9", 94, 6, 59, 59);
    view.defPosition("c9", 182, 6, 59, 59);
    view.defPosition("d9", 270, 6, 59, 59);
    view.defPosition("e9", 358, 6, 59, 59);
    view.defPosition("f9", 446, 6, 59, 59);
    view.defPosition("g9", 534, 6, 59, 59);
    view.defPosition("h9", 622, 6, 59, 59);
    view.defPosition("i9", 710, 6, 59, 59);
    view.defPosition("a8", 6, 94, 59, 59);
    view.defPosition("b8", 94, 94, 59, 59);
    view.defPosition("c8", 182, 94, 59, 59);
    view.defPosition("d8", 270, 94, 59, 59);
    view.defPosition("e8", 358, 94, 59, 59);
    view.defPosition("f8", 446, 94, 59, 59);
    view.defPosition("g8", 534, 94, 59, 59);
    view.defPosition("h8", 622, 94, 59, 59);
    view.defPosition("i8", 710, 94, 59, 59);
    view.defPosition("a7", 6, 182, 59, 59);
    view.defPosition("b7", 94, 182, 59, 59);
    view.defPosition("c7", 182, 182, 59, 59);
    view.defPosition("d7", 270, 182, 59, 59);
    view.defPosition("e7", 358, 182, 59, 59);
    view.defPosition("f7", 446, 182, 59, 59);
    view.defPosition("g7", 534, 182, 59, 59);
    view.defPosition("h7", 622, 182, 59, 59);
    view.defPosition("i7", 710, 182, 59, 59);
    view.defPosition("a6", 6, 270, 59, 59);
    view.defPosition("b6", 94, 270, 59, 59);
    view.defPosition("c6", 182, 270, 59, 59);
    view.defPosition("d6", 270, 270, 59, 59);
    view.defPosition("e6", 358, 270, 59, 59);
    view.defPosition("f6", 446, 270, 59, 59);
    view.defPosition("g6", 534, 270, 59, 59);
    view.defPosition("h6", 622, 270, 59, 59);
    view.defPosition("i6", 710, 270, 59, 59);
    view.defPosition("a5", 6, 358, 59, 59);
    view.defPosition("b5", 94, 358, 59, 59);
    view.defPosition("c5", 182, 358, 59, 59);
    view.defPosition("d5", 270, 358, 59, 59);
    view.defPosition("e5", 358, 358, 59, 59);
    view.defPosition("f5", 446, 358, 59, 59);
    view.defPosition("g5", 534, 358, 59, 59);
    view.defPosition("h5", 622, 358, 59, 59);
    view.defPosition("i5", 710, 358, 59, 59);
    view.defPosition("a4", 6, 446, 59, 59);
    view.defPosition("b4", 94, 446, 59, 59);
    view.defPosition("c4", 182, 446, 59, 59);
    view.defPosition("d4", 270, 446, 59, 59);
    view.defPosition("e4", 358, 446, 59, 59);
    view.defPosition("f4", 446, 446, 59, 59);
    view.defPosition("g4", 534, 446, 59, 59);
    view.defPosition("h4", 622, 446, 59, 59);
    view.defPosition("i4", 710, 446, 59, 59);
    view.defPosition("a3", 6, 534, 59, 59);
    view.defPosition("b3", 94, 534, 59, 59);
    view.defPosition("c3", 182, 534, 59, 59);
    view.defPosition("d3", 270, 534, 59, 59);
    view.defPosition("e3", 358, 534, 59, 59);
    view.defPosition("f3", 446, 534, 59, 59);
    view.defPosition("g3", 534, 534, 59, 59);
    view.defPosition("h3", 622, 534, 59, 59);
    view.defPosition("i3", 710, 534, 59, 59);
    view.defPosition("a2", 6, 622, 59, 59);
    view.defPosition("b2", 94, 622, 59, 59);
    view.defPosition("c2", 182, 622, 59, 59);
    view.defPosition("d2", 270, 622, 59, 59);
    view.defPosition("e2", 358, 622, 59, 59);
    view.defPosition("f2", 446, 622, 59, 59);
    view.defPosition("g2", 534, 622, 59, 59);
    view.defPosition("h2", 622, 622, 59, 59);
    view.defPosition("i2", 710, 622, 59, 59);
    view.defPosition("a1", 6, 710, 59, 59);
    view.defPosition("b1", 94, 710, 59, 59);
    view.defPosition("c1", 182, 710, 59, 59);
    view.defPosition("d1", 270, 710, 59, 59);
    view.defPosition("e1", 358, 710, 59, 59);
    view.defPosition("f1", 446, 710, 59, 59);
    view.defPosition("g1", 534, 710, 59, 59);
    view.defPosition("h1", 622, 710, 59, 59);
    view.defPosition("i1", 710, 710, 59, 59);
}
