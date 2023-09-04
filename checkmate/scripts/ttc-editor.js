Dagaz.Controller.noDropIndex = true;

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

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("nx"); // 7
    design.addDirection("n");  // 8
    design.addDirection("wr"); // 9
    design.addDirection("br"); // 10

    design.addPlayer("You", [6, 8, 5, 4, 3, 2, 0, 7, 1, 9, 10]);

    design.addPosition("a8", [9, 8, 0, 1, 0, 0, 0, 1, 0, 72, 64]);
    design.addPosition("b8", [9, 8, 7, 1, -1, 0, 0, 1, 0, 0, 0]);
    design.addPosition("c8", [9, 8, 7, 1, -1, 0, 0, 1, 0, 0, 0]);
    design.addPosition("d8", [9, 8, 7, 1, -1, 0, 0, 1, 0, 0, 0]);
    design.addPosition("e8", [9, 8, 7, 1, -1, 0, 0, 1, 0, 0, 0]);
    design.addPosition("f8", [9, 8, 7, 1, -1, 0, 0, 1, 0, 0, 0]);
    design.addPosition("g8", [9, 8, 7, 1, -1, 0, 0, 1, 0, 0, 0]);
    design.addPosition("h8", [0, 8, 7, 0, -1, 0, 0, 1, 0, 0, 0]);
    design.addPosition("a7", [9, 8, 0, 1, 0, -7, 0, 1, -8, 0, 0]);
    design.addPosition("b7", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("c7", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("d7", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("e7", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("f7", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("g7", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("h7", [0, 8, 7, 0, -1, 0, -9, 1, -8, 0, 0]);
    design.addPosition("a6", [9, 8, 0, 1, 0, -7, 0, 1, -8, 0, 0]);
    design.addPosition("b6", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("c6", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("d6", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("e6", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("f6", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("g6", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("h6", [0, 8, 7, 0, -1, 0, -9, 1, -8, 0, 0]);
    design.addPosition("a5", [9, 8, 0, 1, 0, -7, 0, 1, -8, 0, 0]);
    design.addPosition("b5", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("c5", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("d5", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("e5", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("f5", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("g5", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("h5", [0, 8, 7, 0, -1, 0, -9, 1, -8, 0, 0]);
    design.addPosition("a4", [9, 8, 0, 1, 0, -7, 0, 1, -8, 0, 0]);
    design.addPosition("b4", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("c4", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("d4", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("e4", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("f4", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("g4", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("h4", [0, 8, 7, 0, -1, 0, -9, 1, -8, 0, 0]);
    design.addPosition("a3", [9, 8, 0, 1, 0, -7, 0, 1, -8, 0, 0]);
    design.addPosition("b3", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("c3", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("d3", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("e3", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("f3", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("g3", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("h3", [0, 8, 7, 0, -1, 0, -9, 1, -8, 0, 0]);
    design.addPosition("a2", [9, 8, 0, 1, 0, -7, 0, 1, -8, 0, 0]);
    design.addPosition("b2", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("c2", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("d2", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("e2", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("f2", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("g2", [9, 8, 7, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("h2", [0, 8, 7, 0, -1, 0, -9, 1, -8, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -7, 0, 1, -8, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -7, -9, 1, -8, 0, 0]);
    design.addPosition("h1", [0, 0, 0, 0, -1, 0, -9, 0, -8, 0, 0]);
    design.addPosition("a9", [0, 0, 0, 0, 0, 0, 0, -64, 0, 0, 1]);
    design.addPosition("b9", [0, 0, 0, 0, 0, 0, 0, -65, 0, 0, 1]);
    design.addPosition("c9", [0, 0, 0, 0, 0, 0, 0, -66, 0, 0, 1]);
    design.addPosition("d9", [0, 0, 0, 0, 0, 0, 0, -67, 0, 0, 1]);
    design.addPosition("e9", [0, 0, 0, 0, 0, 0, 0, -68, 0, 0, 1]);
    design.addPosition("f9", [0, 0, 0, 0, 0, 0, 0, -69, 0, 0, 1]);
    design.addPosition("g9", [0, 0, 0, 0, 0, 0, 0, -70, 0, 0, 1]);
    design.addPosition("h9", [0, 0, 0, 0, 0, 0, 0, -71, 0, 0, 0]);
    design.addPosition("a0", [0, 0, 0, 0, 0, 0, 0, -72, 0, 1, 0]);
    design.addPosition("b0", [0, 0, 0, 0, 0, 0, 0, -73, 0, 1, 0]);
    design.addPosition("c0", [0, 0, 0, 0, 0, 0, 0, -74, 0, 1, 0]);
    design.addPosition("d0", [0, 0, 0, 0, 0, 0, 0, -75, 0, 1, 0]);
    design.addPosition("e0", [0, 0, 0, 0, 0, 0, 0, -76, 0, 1, 0]);
    design.addPosition("f0", [0, 0, 0, 0, 0, 0, 0, -77, 0, 1, 0]);
    design.addPosition("g0", [0, 0, 0, 0, 0, 0, 0, -78, 0, 1, 0]);
    design.addPosition("h0", [0, 0, 0, 0, 0, 0, 0, -79, 0, 0, 0]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("WhitePawn", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [], 0);

    design.addPiece("BlackPawn", 1);
    design.addDrop(1, 0, [], 0);
    design.addMove(1, 1, [], 0);

    design.addPiece("WhiteKnight", 2);
    design.addDrop(2, 0, [], 0);
    design.addMove(2, 1, [], 0);

    design.addPiece("BlackKnight", 3);
    design.addDrop(3, 0, [], 0);
    design.addMove(3, 1, [], 0);

    design.addPiece("WhiteBishop", 4);
    design.addDrop(4, 0, [], 0);
    design.addMove(4, 1, [], 0);

    design.addPiece("BlackBishop", 5);
    design.addDrop(5, 0, [], 0);
    design.addMove(5, 1, [], 0);

    design.addPiece("WhiteRook", 6);
    design.addDrop(6, 0, [], 0);
    design.addMove(6, 1, [], 0);

    design.addPiece("BlackRook", 7);
    design.addDrop(7, 0, [], 0);
    design.addMove(7, 1, [], 0);

    design.addPiece("WhiteQueen", 8);
    design.addDrop(8, 0, [], 0);
    design.addMove(8, 1, [], 0);

    design.addPiece("BlackQueen", 9);
    design.addDrop(9, 0, [], 0);
    design.addMove(9, 1, [], 0);

    design.addPiece("WhiteKing", 10);
    design.addDrop(10, 0, [], 0);
    design.addMove(10, 1, [], 0);

    design.addPiece("BlackKing", 11);
    design.addDrop(11, 0, [], 0);
    design.addMove(11, 1, [], 0);
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
 
    view.defPosition("a8", 25, 99, 60, 60);
    view.defPosition("b8", 85, 99, 60, 60);
    view.defPosition("c8", 145, 99, 60, 60);
    view.defPosition("d8", 205, 99, 60, 60);
    view.defPosition("e8", 265, 99, 60, 60);
    view.defPosition("f8", 325, 99, 60, 60);
    view.defPosition("g8", 385, 99, 60, 60);
    view.defPosition("h8", 445, 99, 60, 60);
    view.defPosition("a7", 25, 159, 60, 60);
    view.defPosition("b7", 85, 159, 60, 60);
    view.defPosition("c7", 145, 159, 60, 60);
    view.defPosition("d7", 205, 159, 60, 60);
    view.defPosition("e7", 265, 159, 60, 60);
    view.defPosition("f7", 325, 159, 60, 60);
    view.defPosition("g7", 385, 159, 60, 60);
    view.defPosition("h7", 445, 159, 60, 60);
    view.defPosition("a6", 25, 219, 60, 60);
    view.defPosition("b6", 85, 219, 60, 60);
    view.defPosition("c6", 145, 219, 60, 60);
    view.defPosition("d6", 205, 219, 60, 60);
    view.defPosition("e6", 265, 219, 60, 60);
    view.defPosition("f6", 325, 219, 60, 60);
    view.defPosition("g6", 385, 219, 60, 60);
    view.defPosition("h6", 445, 219, 60, 60);
    view.defPosition("a5", 25, 279, 60, 60);
    view.defPosition("b5", 85, 279, 60, 60);
    view.defPosition("c5", 145, 279, 60, 60);
    view.defPosition("d5", 205, 279, 60, 60);
    view.defPosition("e5", 265, 279, 60, 60);
    view.defPosition("f5", 325, 279, 60, 60);
    view.defPosition("g5", 385, 279, 60, 60);
    view.defPosition("h5", 445, 279, 60, 60);
    view.defPosition("a4", 25, 339, 60, 60);
    view.defPosition("b4", 85, 339, 60, 60);
    view.defPosition("c4", 145, 339, 60, 60);
    view.defPosition("d4", 205, 339, 60, 60);
    view.defPosition("e4", 265, 339, 60, 60);
    view.defPosition("f4", 325, 339, 60, 60);
    view.defPosition("g4", 385, 339, 60, 60);
    view.defPosition("h4", 445, 339, 60, 60);
    view.defPosition("a3", 25, 399, 60, 60);
    view.defPosition("b3", 85, 399, 60, 60);
    view.defPosition("c3", 145, 399, 60, 60);
    view.defPosition("d3", 205, 399, 60, 60);
    view.defPosition("e3", 265, 399, 60, 60);
    view.defPosition("f3", 325, 399, 60, 60);
    view.defPosition("g3", 385, 399, 60, 60);
    view.defPosition("h3", 445, 399, 60, 60);
    view.defPosition("a2", 25, 459, 60, 60);
    view.defPosition("b2", 85, 459, 60, 60);
    view.defPosition("c2", 145, 459, 60, 60);
    view.defPosition("d2", 205, 459, 60, 60);
    view.defPosition("e2", 265, 459, 60, 60);
    view.defPosition("f2", 325, 459, 60, 60);
    view.defPosition("g2", 385, 459, 60, 60);
    view.defPosition("h2", 445, 459, 60, 60);
    view.defPosition("a1", 25, 519, 60, 60);
    view.defPosition("b1", 85, 519, 60, 60);
    view.defPosition("c1", 145, 519, 60, 60);
    view.defPosition("d1", 205, 519, 60, 60);
    view.defPosition("e1", 265, 519, 60, 60);
    view.defPosition("f1", 325, 519, 60, 60);
    view.defPosition("g1", 385, 519, 60, 60);
    view.defPosition("h1", 445, 519, 60, 60);
    view.defPosition("a9", 25, 4, 60, 60);
    view.defPosition("b9", 85, 4, 60, 60);
    view.defPosition("c9", 145, 4, 60, 60);
    view.defPosition("d9", 205, 4, 60, 60);
    view.defPosition("e9", 265, 4, 60, 60);
    view.defPosition("f9", 325, 4, 60, 60);
    view.defPosition("g9", 385, 4, 60, 60);
    view.defPosition("h9", 445, 4, 60, 60);
    view.defPosition("a0", 25, 614, 60, 60);
    view.defPosition("b0", 85, 614, 60, 60);
    view.defPosition("c0", 145, 614, 60, 60);
    view.defPosition("d0", 205, 614, 60, 60);
    view.defPosition("e0", 265, 614, 60, 60);
    view.defPosition("f0", 325, 614, 60, 60);
    view.defPosition("g0", 385, 614, 60, 60);
    view.defPosition("h0", 445, 614, 60, 60);
}
