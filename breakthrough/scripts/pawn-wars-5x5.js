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

    design.addPosition("a5", [6, 5, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b5", [6, 5, 4, 1, -1, 0, 0, 0]);
    design.addPosition("c5", [6, 5, 4, 1, -1, 0, 0, 0]);
    design.addPosition("d5", [6, 5, 4, 1, -1, 0, 0, 0]);
    design.addPosition("e5", [0, 5, 4, 0, -1, 0, 0, 0]);
    design.addPosition("a4", [6, 5, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b4", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("c4", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("d4", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("e4", [0, 5, 4, 0, -1, 0, -6, -5]);
    design.addPosition("a3", [6, 5, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b3", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("c3", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("d3", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("e3", [0, 5, 4, 0, -1, 0, -6, -5]);
    design.addPosition("a2", [6, 5, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b2", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("c2", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("d2", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("e2", [0, 5, 4, 0, -1, 0, -6, -5]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -4, -6, -5]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -4, -6, -5]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -4, -6, -5]);
    design.addPosition("e1", [0, 0, 0, 0, -1, 0, -6, -5]);

    design.addZone("last-rank", 1, [0, 1, 2, 3, 4]);
    design.addZone("last-rank", 2, [20, 21, 22, 23, 24]);

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

    design.setup("White", "Pawn", 20);
    design.setup("White", "Pawn", 21);
    design.setup("White", "Pawn", 22);
    design.setup("White", "Pawn", 23);
    design.setup("White", "Pawn", 24);
    design.setup("Black", "Pawn", 0);
    design.setup("Black", "Pawn", 1);
    design.setup("Black", "Pawn", 2);
    design.setup("Black", "Pawn", 3);
    design.setup("Black", "Pawn", 4);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
 
    view.defPosition("a5", 2, 2, 68, 68);
    view.defPosition("b5", 70, 2, 68, 68);
    view.defPosition("c5", 138, 2, 68, 68);
    view.defPosition("d5", 206, 2, 68, 68);
    view.defPosition("e5", 274, 2, 68, 68);
    view.defPosition("a4", 2, 70, 68, 68);
    view.defPosition("b4", 70, 70, 68, 68);
    view.defPosition("c4", 138, 70, 68, 68);
    view.defPosition("d4", 206, 70, 68, 68);
    view.defPosition("e4", 274, 70, 68, 68);
    view.defPosition("a3", 2, 138, 68, 68);
    view.defPosition("b3", 70, 138, 68, 68);
    view.defPosition("c3", 138, 138, 68, 68);
    view.defPosition("d3", 206, 138, 68, 68);
    view.defPosition("e3", 274, 138, 68, 68);
    view.defPosition("a2", 2, 206, 68, 68);
    view.defPosition("b2", 70, 206, 68, 68);
    view.defPosition("c2", 138, 206, 68, 68);
    view.defPosition("d2", 206, 206, 68, 68);
    view.defPosition("e2", 274, 206, 68, 68);
    view.defPosition("a1", 2, 274, 68, 68);
    view.defPosition("b1", 70, 274, 68, 68);
    view.defPosition("c1", 138, 274, 68, 68);
    view.defPosition("d1", 206, 274, 68, 68);
    view.defPosition("e1", 274, 274, 68, 68);
}
