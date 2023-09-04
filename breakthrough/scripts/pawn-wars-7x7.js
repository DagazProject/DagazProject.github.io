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
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [5, 7, 6, 3, 4, 0, 2, 1]);

    design.addPosition("a7", [8, 7, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b7", [8, 7, 6, 1, -1, 0, 0, 0]);
    design.addPosition("c7", [8, 7, 6, 1, -1, 0, 0, 0]);
    design.addPosition("d7", [8, 7, 6, 1, -1, 0, 0, 0]);
    design.addPosition("e7", [8, 7, 6, 1, -1, 0, 0, 0]);
    design.addPosition("f7", [8, 7, 6, 1, -1, 0, 0, 0]);
    design.addPosition("g7", [0, 7, 6, 0, -1, 0, 0, 0]);
    design.addPosition("a6", [8, 7, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b6", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("c6", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("d6", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("e6", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("f6", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("g6", [0, 7, 6, 0, -1, 0, -8, -7]);
    design.addPosition("a5", [8, 7, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b5", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("c5", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("d5", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("e5", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("f5", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("g5", [0, 7, 6, 0, -1, 0, -8, -7]);
    design.addPosition("a4", [8, 7, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b4", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("c4", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("d4", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("e4", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("f4", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("g4", [0, 7, 6, 0, -1, 0, -8, -7]);
    design.addPosition("a3", [8, 7, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b3", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("c3", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("d3", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("e3", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("f3", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("g3", [0, 7, 6, 0, -1, 0, -8, -7]);
    design.addPosition("a2", [8, 7, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b2", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("c2", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("d2", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("e2", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("f2", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("g2", [0, 7, 6, 0, -1, 0, -8, -7]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -6, -8, -7]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -6, -8, -7]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -6, -8, -7]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -6, -8, -7]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -6, -8, -7]);
    design.addPosition("g1", [0, 0, 0, 0, -1, 0, -8, -7]);

    design.addZone("last-rank", 1, [0, 1, 2, 3, 4, 5, 6]);
    design.addZone("last-rank", 2, [42, 43, 44, 45, 46, 47, 48]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	1);	// Queen
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	1);	// Queen
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0, 800);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [5], 0);

    design.addPiece("Queen", 1, 20000);

    design.setup("White", "Pawn", 42);
    design.setup("White", "Pawn", 43);
    design.setup("White", "Pawn", 44);
    design.setup("White", "Pawn", 45);
    design.setup("White", "Pawn", 46);
    design.setup("White", "Pawn", 47);
    design.setup("White", "Pawn", 48);
    design.setup("Black", "Pawn", 0);
    design.setup("Black", "Pawn", 1);
    design.setup("Black", "Pawn", 2);
    design.setup("Black", "Pawn", 3);
    design.setup("Black", "Pawn", 4);
    design.setup("Black", "Pawn", 5);
    design.setup("Black", "Pawn", 6);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
 
    view.defPosition("a7", 2, 2, 68, 68);
    view.defPosition("b7", 70, 2, 68, 68);
    view.defPosition("c7", 138, 2, 68, 68);
    view.defPosition("d7", 206, 2, 68, 68);
    view.defPosition("e7", 274, 2, 68, 68);
    view.defPosition("f7", 342, 2, 68, 68);
    view.defPosition("g7", 410, 2, 68, 68);
    view.defPosition("a6", 2, 70, 68, 68);
    view.defPosition("b6", 70, 70, 68, 68);
    view.defPosition("c6", 138, 70, 68, 68);
    view.defPosition("d6", 206, 70, 68, 68);
    view.defPosition("e6", 274, 70, 68, 68);
    view.defPosition("f6", 342, 70, 68, 68);
    view.defPosition("g6", 410, 70, 68, 68);
    view.defPosition("a5", 2, 138, 68, 68);
    view.defPosition("b5", 70, 138, 68, 68);
    view.defPosition("c5", 138, 138, 68, 68);
    view.defPosition("d5", 206, 138, 68, 68);
    view.defPosition("e5", 274, 138, 68, 68);
    view.defPosition("f5", 342, 138, 68, 68);
    view.defPosition("g5", 410, 138, 68, 68);
    view.defPosition("a4", 2, 206, 68, 68);
    view.defPosition("b4", 70, 206, 68, 68);
    view.defPosition("c4", 138, 206, 68, 68);
    view.defPosition("d4", 206, 206, 68, 68);
    view.defPosition("e4", 274, 206, 68, 68);
    view.defPosition("f4", 342, 206, 68, 68);
    view.defPosition("g4", 410, 206, 68, 68);
    view.defPosition("a3", 2, 274, 68, 68);
    view.defPosition("b3", 70, 274, 68, 68);
    view.defPosition("c3", 138, 274, 68, 68);
    view.defPosition("d3", 206, 274, 68, 68);
    view.defPosition("e3", 274, 274, 68, 68);
    view.defPosition("f3", 342, 274, 68, 68);
    view.defPosition("g3", 410, 274, 68, 68);
    view.defPosition("a2", 2, 342, 68, 68);
    view.defPosition("b2", 70, 342, 68, 68);
    view.defPosition("c2", 138, 342, 68, 68);
    view.defPosition("d2", 206, 342, 68, 68);
    view.defPosition("e2", 274, 342, 68, 68);
    view.defPosition("f2", 342, 342, 68, 68);
    view.defPosition("g2", 410, 342, 68, 68);
    view.defPosition("a1", 2, 410, 68, 68);
    view.defPosition("b1", 70, 410, 68, 68);
    view.defPosition("c1", 138, 410, 68, 68);
    view.defPosition("d1", 206, 410, 68, 68);
    view.defPosition("e1", 274, 410, 68, 68);
    view.defPosition("f1", 342, 410, 68, 68);
    view.defPosition("g1", 410, 410, 68, 68);
}
