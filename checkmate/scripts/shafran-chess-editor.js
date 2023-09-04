Dagaz.Controller.noDropIndex = true;

Dagaz.View.SHIFT_X = 1;
Dagaz.View.SHIFT_Y = 4;

Dagaz.Model.WIDTH  = 9;
Dagaz.Model.HEIGHT = 10;

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

    design.addDirection("se");  // 0
    design.addDirection("s");   // 1
    design.addDirection("sw");  // 2
    design.addDirection("sse"); // 3
    design.addDirection("nne"); // 4
    design.addDirection("e");   // 5
    design.addDirection("nnw"); // 6 
    design.addDirection("ssw"); // 7
    design.addDirection("w");   // 8
    design.addDirection("ne");  // 9
    design.addDirection("nw");  // 10
    design.addDirection("n");   // 11

    design.addPlayer("You", [10, 11, 9, 6, 7, 8, 3, 4, 5, 2, 0, 1]);

    design.addPosition("a10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e10", [1, 9, 8, 10, 0, 0, 0, 17, 0, 0, 0, 0]);
    design.addPosition("f10", [1, 9, 8, 10, 0, 0, 0, 17, 7, 0, -1, 0]);
    design.addPosition("g10", [1, 9, 8, 10, 0, 0, 0, 17, 7, 0, -1, 0]);
    design.addPosition("h10", [1, 9, 8, 10, 0, 0, 0, 17, 7, 0, -1, 0]);
    design.addPosition("i10", [0, 9, 8, 0, 0, 0, 0, 17, 7, 0, -1, 0]);
    design.addPosition("a9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d9", [1, 9, 8, 10, 0, -7, 0, 17, 0, -8, 0, 0]);
    design.addPosition("e9", [1, 9, 8, 10, 0, -7, 0, 17, 7, -8, -1, -9]);
    design.addPosition("f9", [1, 9, 8, 10, 0, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("g9", [1, 9, 8, 10, 0, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("h9", [1, 9, 8, 10, 0, 0, -10, 17, 7, -8, -1, -9]);
    design.addPosition("i9", [0, 9, 8, 0, 0, 0, -10, 17, 7, 0, -1, -9]);
    design.addPosition("a8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c8", [1, 9, 8, 10, 0, -7, 0, 17, 0, -8, 0, 0]);
    design.addPosition("d8", [1, 9, 8, 10, -17, -7, 0, 17, 7, -8, -1, -9]);
    design.addPosition("e8", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("f8", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("g8", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("h8", [1, 9, 8, 10, -17, 0, -10, 17, 7, -8, -1, -9]);
    design.addPosition("i8", [0, 9, 8, 0, 0, 0, -10, 17, 7, 0, -1, -9]);
    design.addPosition("a7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b7", [1, 9, 8, 10, 0, -7, 0, 17, 0, -8, 0, 0]);
    design.addPosition("c7", [1, 9, 8, 10, -17, -7, 0, 17, 7, -8, -1, -9]);
    design.addPosition("d7", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("e7", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("f7", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("g7", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("h7", [1, 9, 8, 10, -17, 0, -10, 17, 7, -8, -1, -9]);
    design.addPosition("i7", [0, 9, 8, 0, 0, 0, -10, 17, 7, 0, -1, -9]);
    design.addPosition("a6", [1, 9, 0, 10, 0, -7, 0, 0, 0, -8, 0, 0]);
    design.addPosition("b6", [1, 9, 8, 10, -17, -7, 0, 17, 0, -8, -1, -9]);
    design.addPosition("c6", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("d6", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("e6", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("f6", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("g6", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("h6", [1, 9, 8, 10, -17, 0, -10, 17, 7, -8, -1, -9]);
    design.addPosition("i6", [0, 9, 8, 0, 0, 0, -10, 17, 7, 0, -1, -9]);
    design.addPosition("a5", [1, 9, 0, 10, -17, -7, 0, 0, 0, -8, 0, -9]);
    design.addPosition("b5", [1, 9, 8, 10, -17, -7, -10, 17, 0, -8, -1, -9]);
    design.addPosition("c5", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("d5", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("e5", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("f5", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("g5", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("h5", [1, 9, 8, 0, -17, 0, -10, 17, 7, -8, -1, -9]);
    design.addPosition("i5", [0, 0, 8, 0, 0, 0, -10, 0, 7, 0, -1, -9]);
    design.addPosition("a4", [1, 9, 0, 10, -17, -7, 0, 0, 0, -8, 0, -9]);
    design.addPosition("b4", [1, 9, 8, 10, -17, -7, -10, 17, 0, -8, -1, -9]);
    design.addPosition("c4", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("d4", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("e4", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("f4", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("g4", [1, 9, 8, 0, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("h4", [0, 0, 8, 0, -17, 0, -10, 0, 7, -8, -1, -9]);
    design.addPosition("i4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [1, 9, 0, 10, -17, -7, 0, 0, 0, -8, 0, -9]);
    design.addPosition("b3", [1, 9, 8, 10, -17, -7, -10, 17, 0, -8, -1, -9]);
    design.addPosition("c3", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("d3", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("e3", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("f3", [1, 9, 8, 0, -17, -7, -10, 17, 7, -8, -1, -9]);
    design.addPosition("g3", [0, 0, 8, 0, -17, 0, -10, 0, 7, -8, -1, -9]);
    design.addPosition("h3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [1, 9, 0, 10, -17, -7, 0, 0, 0, -8, 0, -9]);
    design.addPosition("b2", [1, 9, 8, 10, -17, -7, -10, 0, 0, -8, -1, -9]);
    design.addPosition("c2", [1, 9, 8, 10, -17, -7, -10, 0, 7, -8, -1, -9]);
    design.addPosition("d2", [1, 9, 8, 10, -17, -7, -10, 0, 7, -8, -1, -9]);
    design.addPosition("e2", [1, 9, 8, 0, -17, -7, -10, 0, 7, -8, -1, -9]);
    design.addPosition("f2", [0, 0, 8, 0, -17, 0, -10, 0, 7, -8, -1, -9]);
    design.addPosition("g2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [1, 0, 0, 0, -17, -7, 0, 0, 0, -8, 0, -9]);
    design.addPosition("b1", [1, 0, 0, 0, -17, -7, -10, 0, 0, -8, -1, -9]);
    design.addPosition("c1", [1, 0, 0, 0, -17, -7, -10, 0, 0, -8, -1, -9]);
    design.addPosition("d1", [1, 0, 0, 0, -17, -7, -10, 0, 0, -8, -1, -9]);
    design.addPosition("e1", [0, 0, 0, 0, -17, 0, -10, 0, 0, -8, -1, -9]);
    design.addPosition("f1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
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

    design.addPiece("WhiteRook", 2);
    design.addDrop(2, 0, [], 0);
    design.addMove(2, 1, [], 0);

    design.addPiece("BlackRook", 3);
    design.addDrop(3, 0, [], 0);
    design.addMove(3, 1, [], 0);

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
 
    view.defPosition("a10", 48, -120, 49, 49);
    view.defPosition("b10", 108, -85, 49, 49);
    view.defPosition("c10", 168, -50, 49, 49);
    view.defPosition("d10", 228, -15, 49, 49);
    view.defPosition("e10", 288, 20, 49, 49);
    view.defPosition("f10", 348, 55, 49, 49);
    view.defPosition("g10", 408, 90, 49, 49);
    view.defPosition("h10", 468, 125, 49, 49);
    view.defPosition("i10", 528, 160, 49, 49);
    view.defPosition("a9", 48, -50, 49, 49);
    view.defPosition("b9", 108, -15, 49, 49);
    view.defPosition("c9", 168, 20, 49, 49);
    view.defPosition("d9", 228, 55, 49, 49);
    view.defPosition("e9", 288, 90, 49, 49);
    view.defPosition("f9", 348, 125, 49, 49);
    view.defPosition("g9", 408, 160, 49, 49);
    view.defPosition("h9", 468, 195, 49, 49);
    view.defPosition("i9", 528, 230, 49, 49);
    view.defPosition("a8", 48, 20, 49, 49);
    view.defPosition("b8", 108, 55, 49, 49);
    view.defPosition("c8", 168, 90, 49, 49);
    view.defPosition("d8", 228, 125, 49, 49);
    view.defPosition("e8", 288, 160, 49, 49);
    view.defPosition("f8", 348, 195, 49, 49);
    view.defPosition("g8", 408, 230, 49, 49);
    view.defPosition("h8", 468, 265, 49, 49);
    view.defPosition("i8", 528, 300, 49, 49);
    view.defPosition("a7", 48, 90, 49, 49);
    view.defPosition("b7", 108, 125, 49, 49);
    view.defPosition("c7", 168, 160, 49, 49);
    view.defPosition("d7", 228, 195, 49, 49);
    view.defPosition("e7", 288, 230, 49, 49);
    view.defPosition("f7", 348, 265, 49, 49);
    view.defPosition("g7", 408, 300, 49, 49);
    view.defPosition("h7", 468, 335, 49, 49);
    view.defPosition("i7", 528, 370, 49, 49);
    view.defPosition("a6", 48, 160, 49, 49);
    view.defPosition("b6", 108, 195, 49, 49);
    view.defPosition("c6", 168, 230, 49, 49);
    view.defPosition("d6", 228, 265, 49, 49);
    view.defPosition("e6", 288, 300, 49, 49);
    view.defPosition("f6", 348, 335, 49, 49);
    view.defPosition("g6", 408, 370, 49, 49);
    view.defPosition("h6", 468, 405, 49, 49);
    view.defPosition("i6", 528, 440, 49, 49);
    view.defPosition("a5", 48, 230, 49, 49);
    view.defPosition("b5", 108, 265, 49, 49);
    view.defPosition("c5", 168, 300, 49, 49);
    view.defPosition("d5", 228, 335, 49, 49);
    view.defPosition("e5", 288, 370, 49, 49);
    view.defPosition("f5", 348, 405, 49, 49);
    view.defPosition("g5", 408, 440, 49, 49);
    view.defPosition("h5", 468, 475, 49, 49);
    view.defPosition("i5", 528, 510, 49, 49);
    view.defPosition("a4", 48, 300, 49, 49);
    view.defPosition("b4", 108, 335, 49, 49);
    view.defPosition("c4", 168, 370, 49, 49);
    view.defPosition("d4", 228, 405, 49, 49);
    view.defPosition("e4", 288, 440, 49, 49);
    view.defPosition("f4", 348, 475, 49, 49);
    view.defPosition("g4", 408, 510, 49, 49);
    view.defPosition("h4", 468, 545, 49, 49);
    view.defPosition("i4", 528, 580, 49, 49);
    view.defPosition("a3", 48, 370, 49, 49);
    view.defPosition("b3", 108, 405, 49, 49);
    view.defPosition("c3", 168, 440, 49, 49);
    view.defPosition("d3", 228, 475, 49, 49);
    view.defPosition("e3", 288, 510, 49, 49);
    view.defPosition("f3", 348, 545, 49, 49);
    view.defPosition("g3", 408, 580, 49, 49);
    view.defPosition("h3", 468, 615, 49, 49);
    view.defPosition("i3", 528, 650, 49, 49);
    view.defPosition("a2", 48, 440, 49, 49);
    view.defPosition("b2", 108, 475, 49, 49);
    view.defPosition("c2", 168, 510, 49, 49);
    view.defPosition("d2", 228, 545, 49, 49);
    view.defPosition("e2", 288, 580, 49, 49);
    view.defPosition("f2", 348, 615, 49, 49);
    view.defPosition("g2", 408, 650, 49, 49);
    view.defPosition("h2", 468, 685, 49, 49);
    view.defPosition("i2", 528, 720, 49, 49);
    view.defPosition("a1", 48, 510, 49, 49);
    view.defPosition("b1", 108, 545, 49, 49);
    view.defPosition("c1", 168, 580, 49, 49);
    view.defPosition("d1", 228, 615, 49, 49);
    view.defPosition("e1", 288, 650, 49, 49);
    view.defPosition("f1", 348, 685, 49, 49);
    view.defPosition("g1", 408, 720, 49, 49);
    view.defPosition("h1", 468, 755, 49, 49);
    view.defPosition("i1", 528, 790, 49, 49);
}
