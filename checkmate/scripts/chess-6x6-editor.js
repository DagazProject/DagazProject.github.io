Dagaz.Model.DETAIL_MOVE_DESCRIPTION = true;

Dagaz.Model.TO_CHAR = 'PpKkRrNnQq';

Dagaz.Model.WIDTH  = 6;
Dagaz.Model.HEIGHT = 6;

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

    design.addPosition("a6", [0, 1, 6, 0, 0, 7, 0, 0]);
    design.addPosition("b6", [-1, 1, 6, 0, 0, 7, 5, 0]);
    design.addPosition("c6", [-1, 1, 6, 0, 0, 7, 5, 0]);
    design.addPosition("d6", [-1, 1, 6, 0, 0, 7, 5, 0]);
    design.addPosition("e6", [-1, 1, 6, 0, 0, 7, 5, 0]);
    design.addPosition("f6", [-1, 0, 6, 0, 0, 0, 5, 0]);
    design.addPosition("a5", [0, 1, 6, -5, -6, 7, 0, 0]);
    design.addPosition("b5", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("c5", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("d5", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("e5", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("f5", [-1, 0, 6, 0, -6, 0, 5, -7]);
    design.addPosition("a4", [0, 1, 6, -5, -6, 7, 0, 0]);
    design.addPosition("b4", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("c4", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("d4", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("e4", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("f4", [-1, 0, 6, 0, -6, 0, 5, -7]);
    design.addPosition("a3", [0, 1, 6, -5, -6, 7, 0, 0]);
    design.addPosition("b3", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("c3", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("d3", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("e3", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("f3", [-1, 0, 6, 0, -6, 0, 5, -7]);
    design.addPosition("a2", [0, 1, 6, -5, -6, 7, 0, 0]);
    design.addPosition("b2", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("c2", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("d2", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("e2", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("f2", [-1, 0, 6, 0, -6, 0, 5, -7]);
    design.addPosition("a1", [0, 1, 0, -5, -6, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -5, -6, 0, 0, -7]);
    design.addPosition("c1", [-1, 1, 0, -5, -6, 0, 0, -7]);
    design.addPosition("d1", [-1, 1, 0, -5, -6, 0, 0, -7]);
    design.addPosition("e1", [-1, 1, 0, -5, -6, 0, 0, -7]);
    design.addPosition("f1", [-1, 0, 0, 0, -6, 0, 0, -7]);
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

    design.addPiece("WhiteKing", 2);
    design.addDrop(2, 0, [], 0);
    design.addMove(2, 1, [], 0);

    design.addPiece("BlackKing", 3);
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

    design.addPiece("WhiteQueen", 8);
    design.addDrop(8, 0, [], 0);
    design.addMove(8, 1, [], 0);

    design.addPiece("BlackQueen", 9);
    design.addDrop(9, 0, [], 0);
    design.addMove(9, 1, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "You WhitePawn");
    view.defPiece("BlackPawn", "You BlackPawn");
    view.defPiece("WhiteRook", "You WhiteRook");
    view.defPiece("BlackRook", "You BlackRook");
    view.defPiece("WhiteKnight", "You WhiteKnight");
    view.defPiece("BlackKnight", "You BlackKnight");
    view.defPiece("WhiteQueen", "You WhiteQueen");
    view.defPiece("BlackQueen", "You BlackQueen");
    view.defPiece("WhiteKing", "You WhiteKing");
    view.defPiece("BlackKing", "You BlackKing");
 
    view.defPosition("a6", 2, 2, 68, 68);
    view.defPosition("b6", 70, 2, 68, 68);
    view.defPosition("c6", 138, 2, 68, 68);
    view.defPosition("d6", 206, 2, 68, 68);
    view.defPosition("e6", 274, 2, 68, 68);
    view.defPosition("f6", 342, 2, 68, 68);
    view.defPosition("a5", 2, 70, 68, 68);
    view.defPosition("b5", 70, 70, 68, 68);
    view.defPosition("c5", 138, 70, 68, 68);
    view.defPosition("d5", 206, 70, 68, 68);
    view.defPosition("e5", 274, 70, 68, 68);
    view.defPosition("f5", 342, 70, 68, 68);
    view.defPosition("a4", 2, 138, 68, 68);
    view.defPosition("b4", 70, 138, 68, 68);
    view.defPosition("c4", 138, 138, 68, 68);
    view.defPosition("d4", 206, 138, 68, 68);
    view.defPosition("e4", 274, 138, 68, 68);
    view.defPosition("f4", 342, 138, 68, 68);
    view.defPosition("a3", 2, 206, 68, 68);
    view.defPosition("b3", 70, 206, 68, 68);
    view.defPosition("c3", 138, 206, 68, 68);
    view.defPosition("d3", 206, 206, 68, 68);
    view.defPosition("e3", 274, 206, 68, 68);
    view.defPosition("f3", 342, 206, 68, 68);
    view.defPosition("a2", 2, 274, 68, 68);
    view.defPosition("b2", 70, 274, 68, 68);
    view.defPosition("c2", 138, 274, 68, 68);
    view.defPosition("d2", 206, 274, 68, 68);
    view.defPosition("e2", 274, 274, 68, 68);
    view.defPosition("f2", 342, 274, 68, 68);
    view.defPosition("a1", 2, 342, 68, 68);
    view.defPosition("b1", 70, 342, 68, 68);
    view.defPosition("c1", 138, 342, 68, 68);
    view.defPosition("d1", 206, 342, 68, 68);
    view.defPosition("e1", 274, 342, 68, 68);
    view.defPosition("f1", 342, 342, 68, 68);
}
