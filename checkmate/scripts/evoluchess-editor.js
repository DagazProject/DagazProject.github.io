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
    design.addDirection("n");  // 7

    design.addPlayer("You", [6, 7, 5, 4, 3, 2, 0, 1]);

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
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("WhiteKing", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [], 0);

    design.addPiece("BlackKing", 1);
    design.addDrop(1, 0, [], 0);
    design.addMove(1, 1, [], 0);

    design.addPiece("WhitePawn", 2);
    design.addDrop(2, 0, [], 0);
    design.addMove(2, 1, [], 0);

    design.addPiece("BlackPawn", 3);
    design.addDrop(3, 0, [], 0);
    design.addMove(3, 1, [], 0);

    design.addPiece("WhiteRook", 4);
    design.addDrop(4, 0, [], 0);
    design.addMove(4, 1, [], 0);

    design.addPiece("BlackRook", 5);
    design.addDrop(5, 0, [], 0);
    design.addMove(5, 1, [], 0);

    design.addPiece("WhiteKnight", 6);
    design.addDrop(6, 0, [], 0);
    design.addMove(6, 1, [], 0);

    design.addPiece("BlackKnight", 7);
    design.addDrop(7, 0, [], 0);
    design.addMove(7, 1, [], 0);

    design.addPiece("WhiteBishop", 8);
    design.addDrop(8, 0, [], 0);
    design.addMove(8, 1, [], 0);

    design.addPiece("BlackBishop", 9);
    design.addDrop(9, 0, [], 0);
    design.addMove(9, 1, [], 0);

    design.addPiece("WhiteQueen", 10);
    design.addDrop(10, 0, [], 0);
    design.addMove(10, 1, [], 0);

    design.addPiece("BlackQueen", 11);
    design.addDrop(11, 0, [], 0);
    design.addMove(11, 1, [], 0);

    design.addPiece("WhiteWall", 12);
    design.addDrop(12, 0, [], 0);
    design.addMove(12, 1, [], 0);

    design.addPiece("BlackWall", 13);
    design.addDrop(13, 0, [], 0);
    design.addMove(13, 1, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteKing", "You WhiteKing");
    view.defPiece("BlackKing", "You BlackKing");
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
    view.defPiece("WhiteWall", "You WhiteWall");
    view.defPiece("BlackWall", "You BlackWall");
 
    view.defPosition("a8", 5, 5, 62, 62);
    view.defPosition("b8", 72, 5, 62, 62);
    view.defPosition("c8", 139, 5, 62, 62);
    view.defPosition("d8", 206, 5, 62, 62);
    view.defPosition("e8", 273, 5, 62, 62);
    view.defPosition("f8", 340, 5, 62, 62);
    view.defPosition("g8", 407, 5, 62, 62);
    view.defPosition("h8", 474, 5, 62, 62);
    view.defPosition("a7", 5, 72, 62, 62);
    view.defPosition("b7", 72, 72, 62, 62);
    view.defPosition("c7", 139, 72, 62, 62);
    view.defPosition("d7", 206, 72, 62, 62);
    view.defPosition("e7", 273, 72, 62, 62);
    view.defPosition("f7", 340, 72, 62, 62);
    view.defPosition("g7", 407, 72, 62, 62);
    view.defPosition("h7", 474, 72, 62, 62);
    view.defPosition("a6", 5, 139, 62, 62);
    view.defPosition("b6", 72, 139, 62, 62);
    view.defPosition("c6", 139, 139, 62, 62);
    view.defPosition("d6", 206, 139, 62, 62);
    view.defPosition("e6", 273, 139, 62, 62);
    view.defPosition("f6", 340, 139, 62, 62);
    view.defPosition("g6", 407, 139, 62, 62);
    view.defPosition("h6", 474, 139, 62, 62);
    view.defPosition("a5", 5, 206, 62, 62);
    view.defPosition("b5", 72, 206, 62, 62);
    view.defPosition("c5", 139, 206, 62, 62);
    view.defPosition("d5", 206, 206, 62, 62);
    view.defPosition("e5", 273, 206, 62, 62);
    view.defPosition("f5", 340, 206, 62, 62);
    view.defPosition("g5", 407, 206, 62, 62);
    view.defPosition("h5", 474, 206, 62, 62);
    view.defPosition("a4", 5, 273, 62, 62);
    view.defPosition("b4", 72, 273, 62, 62);
    view.defPosition("c4", 139, 273, 62, 62);
    view.defPosition("d4", 206, 273, 62, 62);
    view.defPosition("e4", 273, 273, 62, 62);
    view.defPosition("f4", 340, 273, 62, 62);
    view.defPosition("g4", 407, 273, 62, 62);
    view.defPosition("h4", 474, 273, 62, 62);
    view.defPosition("a3", 5, 340, 62, 62);
    view.defPosition("b3", 72, 340, 62, 62);
    view.defPosition("c3", 139, 340, 62, 62);
    view.defPosition("d3", 206, 340, 62, 62);
    view.defPosition("e3", 273, 340, 62, 62);
    view.defPosition("f3", 340, 340, 62, 62);
    view.defPosition("g3", 407, 340, 62, 62);
    view.defPosition("h3", 474, 340, 62, 62);
    view.defPosition("a2", 5, 407, 62, 62);
    view.defPosition("b2", 72, 407, 62, 62);
    view.defPosition("c2", 139, 407, 62, 62);
    view.defPosition("d2", 206, 407, 62, 62);
    view.defPosition("e2", 273, 407, 62, 62);
    view.defPosition("f2", 340, 407, 62, 62);
    view.defPosition("g2", 407, 407, 62, 62);
    view.defPosition("h2", 474, 407, 62, 62);
    view.defPosition("a1", 5, 474, 62, 62);
    view.defPosition("b1", 72, 474, 62, 62);
    view.defPosition("c1", 139, 474, 62, 62);
    view.defPosition("d1", 206, 474, 62, 62);
    view.defPosition("e1", 273, 474, 62, 62);
    view.defPosition("f1", 340, 474, 62, 62);
    view.defPosition("g1", 407, 474, 62, 62);
    view.defPosition("h1", 474, 474, 62, 62);
}
