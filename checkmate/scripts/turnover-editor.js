Dagaz.Controller.noDropIndex = true;

Dagaz.View.MARK_R = 15;

Dagaz.View.showHint = function(view) {}

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

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("You", [1, 0, 4, 6, 2, 7, 3, 5]);

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

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("WhiteKing", 0);
    design.addDrop(10, 0, [], 0);
    design.addMove(10, 1, [], 0);

    design.addPiece("BlackKing", 1);
    design.addDrop(11, 0, [], 0);
    design.addMove(11, 1, [], 0);

    design.addPiece("WhitePawn", 2);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [], 0);

    design.addPiece("BlackPawn", 3);
    design.addDrop(1, 0, [], 0);
    design.addMove(1, 1, [], 0);

    design.addPiece("WhiteKnight", 4);
    design.addDrop(4, 0, [], 0);
    design.addMove(4, 1, [], 0);

    design.addPiece("BlackKnight", 5);
    design.addDrop(5, 0, [], 0);
    design.addMove(5, 1, [], 0);

    design.addPiece("WhiteBishop", 6);
    design.addDrop(6, 0, [], 0);
    design.addMove(6, 1, [], 0);

    design.addPiece("BlackBishop", 7);
    design.addDrop(7, 0, [], 0);
    design.addMove(7, 1, [], 0);

    design.addPiece("WhiteQueen", 8);
    design.addDrop(8, 0, [], 0);
    design.addMove(8, 1, [], 0);

    design.addPiece("BlackQueen", 9);
    design.addDrop(9, 0, [], 0);
    design.addMove(9, 1, [], 0);

    design.addPiece("WhiteRook", 10);
    design.addDrop(2, 0, [], 0);
    design.addMove(2, 1, [], 0);

    design.addPiece("BlackRook", 11);
    design.addDrop(3, 0, [], 0);
    design.addMove(3, 1, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "You WhitePawn");
    view.defPiece("BlackPawn", "You BlackPawn");
    view.defPiece("WhiteRook", "You WhiteRook");
    view.defPiece("BlackRook", "You BlackRook");
    view.defPiece("WhiteKnight", "You WhiteKnight");
    view.defPiece("BlackKnight", "You BlackKnight");
    view.defPiece("WhiteBishop", "You WhiteBishop");
    view.defPiece("BlackBishop", "You BlackBishop");
    view.defPiece("WhiteQueen", "You WhiteQueen");
    view.defPiece("BlackQueen", "You BlackQueen");
    view.defPiece("WhiteKing", "You WhiteKing");
    view.defPiece("BlackKing", "You BlackKing");

    view.defPosition("a8", 24, 26, 62, 62);
    view.defPosition("b8", 93, 26, 62, 62);
    view.defPosition("c8", 162, 26, 62, 62);
    view.defPosition("d8", 231, 26, 62, 62);
    view.defPosition("e8", 300, 26, 62, 62);
    view.defPosition("f8", 369, 26, 62, 62);
    view.defPosition("g8", 438, 26, 62, 62);
    view.defPosition("h8", 507, 26, 62, 62);
    view.defPosition("a7", 24, 95, 62, 62);
    view.defPosition("b7", 93, 95, 62, 62);
    view.defPosition("c7", 162, 95, 62, 62);
    view.defPosition("d7", 231, 95, 62, 62);
    view.defPosition("e7", 300, 95, 62, 62);
    view.defPosition("f7", 369, 95, 62, 62);
    view.defPosition("g7", 438, 95, 62, 62);
    view.defPosition("h7", 507, 95, 62, 62);
    view.defPosition("a6", 24, 164, 62, 62);
    view.defPosition("b6", 93, 164, 62, 62);
    view.defPosition("c6", 162, 164, 62, 62);
    view.defPosition("d6", 231, 164, 62, 62);
    view.defPosition("e6", 300, 164, 62, 62);
    view.defPosition("f6", 369, 164, 62, 62);
    view.defPosition("g6", 438, 164, 62, 62);
    view.defPosition("h6", 507, 164, 62, 62);
    view.defPosition("a5", 24, 233, 62, 62);
    view.defPosition("b5", 93, 233, 62, 62);
    view.defPosition("c5", 162, 233, 62, 62);
    view.defPosition("d5", 231, 233, 62, 62);
    view.defPosition("e5", 300, 233, 62, 62);
    view.defPosition("f5", 369, 233, 62, 62);
    view.defPosition("g5", 438, 233, 62, 62);
    view.defPosition("h5", 507, 233, 62, 62);
    view.defPosition("a4", 24, 302, 62, 62);
    view.defPosition("b4", 93, 302, 62, 62);
    view.defPosition("c4", 162, 302, 62, 62);
    view.defPosition("d4", 231, 302, 62, 62);
    view.defPosition("e4", 300, 302, 62, 62);
    view.defPosition("f4", 369, 302, 62, 62);
    view.defPosition("g4", 438, 302, 62, 62);
    view.defPosition("h4", 507, 302, 62, 62);
    view.defPosition("a3", 24, 371, 62, 62);
    view.defPosition("b3", 93, 371, 62, 62);
    view.defPosition("c3", 162, 371, 62, 62);
    view.defPosition("d3", 231, 371, 62, 62);
    view.defPosition("e3", 300, 371, 62, 62);
    view.defPosition("f3", 369, 371, 62, 62);
    view.defPosition("g3", 438, 371, 62, 62);
    view.defPosition("h3", 507, 371, 62, 62);
    view.defPosition("a2", 24, 440, 62, 62);
    view.defPosition("b2", 93, 440, 62, 62);
    view.defPosition("c2", 162, 440, 62, 62);
    view.defPosition("d2", 231, 440, 62, 62);
    view.defPosition("e2", 300, 440, 62, 62);
    view.defPosition("f2", 369, 440, 62, 62);
    view.defPosition("g2", 438, 440, 62, 62);
    view.defPosition("h2", 507, 440, 62, 62);
    view.defPosition("a1", 24, 509, 62, 62);
    view.defPosition("b1", 93, 509, 62, 62);
    view.defPosition("c1", 162, 509, 62, 62);
    view.defPosition("d1", 231, 509, 62, 62);
    view.defPosition("e1", 300, 509, 62, 62);
    view.defPosition("f1", 369, 509, 62, 62);
    view.defPosition("g1", 438, 509, 62, 62);
    view.defPosition("h1", 507, 509, 62, 62);
}
