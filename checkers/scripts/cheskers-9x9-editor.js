Dagaz.Controller.noDropIndex = true;

Dagaz.Model.TO_CHAR = 'BbNnDdQqPpKk';
Dagaz.Model.GO_TO   = 'cheskers-9x9-board.htm';

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

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("You", [1, 0, 4, 6, 2, 7, 3, 5]);

    design.addPosition("a9", [0, 1, 9, 0, 0, 10, 0, 0]);
    design.addPosition("b9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("c9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("d9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("e9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("f9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("g9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("h9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("i9", [-1, 0, 9, 0, 0, 0, 8, 0]);
    design.addPosition("a8", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i8", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a7", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i7", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a6", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i6", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a5", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i5", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a4", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i4", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a3", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i3", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a2", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i2", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a1", [0, 1, 0, -8, -9, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("c1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("d1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("e1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("f1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("g1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("h1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("i1", [-1, 0, 0, 0, -9, 0, 0, -10]);

    design.addZone("black", 1, [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80]);
    design.addZone("white-promotion", 1, [0, 2, 4, 6, 8]);
    design.addZone("black-promotion", 1, [72, 74, 76, 78, 80]);

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

    design.addPiece("WhiteBishop", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 3, [], 0);

    design.addPiece("BlackBishop", 1);
    design.addDrop(1, 0, [], 0);
    design.addMove(1, 3, [], 0);

    design.addPiece("WhiteCamel", 2);
    design.addDrop(2, 0, [], 0);
    design.addMove(2, 3, [], 0);

    design.addPiece("BlackCamel", 3);
    design.addDrop(3, 0, [], 0);
    design.addMove(3, 3, [], 0);

    design.addPiece("WhiteDragon", 4);
    design.addDrop(4, 0, [], 0);
    design.addMove(4, 3, [], 0);

    design.addPiece("BlackDragon", 5);
    design.addDrop(5, 0, [], 0);
    design.addMove(5, 3, [], 0);

    design.addPiece("WhiteQueen", 6);
    design.addDrop(6, 0, [], 0);
    design.addMove(6, 3, [], 0);

    design.addPiece("BlackQueen", 7);
    design.addDrop(7, 0, [], 0);
    design.addMove(7, 3, [], 0);

    design.addPiece("WhiteMan", 8);
    design.addDrop(8, 1, [], 0);
    design.addMove(8, 3, [], 0);

    design.addPiece("BlackMan", 9);
    design.addDrop(9, 2, [], 0);
    design.addMove(9, 3, [], 0);

    design.addPiece("WhiteKing", 10);
    design.addDrop(10, 0, [], 0);
    design.addMove(10, 3, [], 0);

    design.addPiece("BlackKing", 11);
    design.addDrop(11, 0, [], 0);
    design.addMove(11, 3, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "You WhiteMan");
    view.defPiece("BlackMan", "You BlackMan");
    view.defPiece("WhiteKing", "You WhiteKing");
    view.defPiece("BlackKing", "You BlackKing");
    view.defPiece("WhiteBishop", "You WhiteBishop");
    view.defPiece("BlackBishop", "You BlackBishop");
    view.defPiece("WhiteCamel", "You WhiteCamel");
    view.defPiece("BlackCamel", "You BlackCamel");
    view.defPiece("WhiteDragon", "You WhiteDragon");
    view.defPiece("BlackDragon", "You BlackDragon");
    view.defPiece("WhiteQueen", "You WhiteQueen");
    view.defPiece("BlackQueen", "You BlackQueen");
 
    view.defPosition("a9", 2, 2, 50, 50);
    view.defPosition("b9", 52, 2, 50, 50);
    view.defPosition("c9", 102, 2, 50, 50);
    view.defPosition("d9", 152, 2, 50, 50);
    view.defPosition("e9", 202, 2, 50, 50);
    view.defPosition("f9", 252, 2, 50, 50);
    view.defPosition("g9", 302, 2, 50, 50);
    view.defPosition("h9", 352, 2, 50, 50);
    view.defPosition("i9", 402, 2, 50, 50);
    view.defPosition("a8", 2, 52, 50, 50);
    view.defPosition("b8", 52, 52, 50, 50);
    view.defPosition("c8", 102, 52, 50, 50);
    view.defPosition("d8", 152, 52, 50, 50);
    view.defPosition("e8", 202, 52, 50, 50);
    view.defPosition("f8", 252, 52, 50, 50);
    view.defPosition("g8", 302, 52, 50, 50);
    view.defPosition("h8", 352, 52, 50, 50);
    view.defPosition("i8", 402, 52, 50, 50);
    view.defPosition("a7", 2, 102, 50, 50);
    view.defPosition("b7", 52, 102, 50, 50);
    view.defPosition("c7", 102, 102, 50, 50);
    view.defPosition("d7", 152, 102, 50, 50);
    view.defPosition("e7", 202, 102, 50, 50);
    view.defPosition("f7", 252, 102, 50, 50);
    view.defPosition("g7", 302, 102, 50, 50);
    view.defPosition("h7", 352, 102, 50, 50);
    view.defPosition("i7", 402, 102, 50, 50);
    view.defPosition("a6", 2, 152, 50, 50);
    view.defPosition("b6", 52, 152, 50, 50);
    view.defPosition("c6", 102, 152, 50, 50);
    view.defPosition("d6", 152, 152, 50, 50);
    view.defPosition("e6", 202, 152, 50, 50);
    view.defPosition("f6", 252, 152, 50, 50);
    view.defPosition("g6", 302, 152, 50, 50);
    view.defPosition("h6", 352, 152, 50, 50);
    view.defPosition("i6", 402, 152, 50, 50);
    view.defPosition("a5", 2, 202, 50, 50);
    view.defPosition("b5", 52, 202, 50, 50);
    view.defPosition("c5", 102, 202, 50, 50);
    view.defPosition("d5", 152, 202, 50, 50);
    view.defPosition("e5", 202, 202, 50, 50);
    view.defPosition("f5", 252, 202, 50, 50);
    view.defPosition("g5", 302, 202, 50, 50);
    view.defPosition("h5", 352, 202, 50, 50);
    view.defPosition("i5", 402, 202, 50, 50);
    view.defPosition("a4", 2, 252, 50, 50);
    view.defPosition("b4", 52, 252, 50, 50);
    view.defPosition("c4", 102, 252, 50, 50);
    view.defPosition("d4", 152, 252, 50, 50);
    view.defPosition("e4", 202, 252, 50, 50);
    view.defPosition("f4", 252, 252, 50, 50);
    view.defPosition("g4", 302, 252, 50, 50);
    view.defPosition("h4", 352, 252, 50, 50);
    view.defPosition("i4", 402, 252, 50, 50);
    view.defPosition("a3", 2, 302, 50, 50);
    view.defPosition("b3", 52, 302, 50, 50);
    view.defPosition("c3", 102, 302, 50, 50);
    view.defPosition("d3", 152, 302, 50, 50);
    view.defPosition("e3", 202, 302, 50, 50);
    view.defPosition("f3", 252, 302, 50, 50);
    view.defPosition("g3", 302, 302, 50, 50);
    view.defPosition("h3", 352, 302, 50, 50);
    view.defPosition("i3", 402, 302, 50, 50);
    view.defPosition("a2", 2, 352, 50, 50);
    view.defPosition("b2", 52, 352, 50, 50);
    view.defPosition("c2", 102, 352, 50, 50);
    view.defPosition("d2", 152, 352, 50, 50);
    view.defPosition("e2", 202, 352, 50, 50);
    view.defPosition("f2", 252, 352, 50, 50);
    view.defPosition("g2", 302, 352, 50, 50);
    view.defPosition("h2", 352, 352, 50, 50);
    view.defPosition("i2", 402, 352, 50, 50);
    view.defPosition("a1", 2, 402, 50, 50);
    view.defPosition("b1", 52, 402, 50, 50);
    view.defPosition("c1", 102, 402, 50, 50);
    view.defPosition("d1", 152, 402, 50, 50);
    view.defPosition("e1", 202, 402, 50, 50);
    view.defPosition("f1", 252, 402, 50, 50);
    view.defPosition("g1", 302, 402, 50, 50);
    view.defPosition("h1", 352, 402, 50, 50);
    view.defPosition("i1", 402, 402, 50, 50);
}
