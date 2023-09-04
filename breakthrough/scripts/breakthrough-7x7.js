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

Dagaz.AI.AI_FRAME = 2000;
Dagaz.AI.isForced = Dagaz.AI.isChessForced;

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("highlight-goals", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [1, 0, 4, 6, 2, 7, 3, 5]);

    design.addPosition("a7", [0, 1, 7, 0, 0, 8, 0, 0]);
    design.addPosition("b7", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("c7", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("d7", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("e7", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("f7", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("g7", [-1, 0, 7, 0, 0, 0, 6, 0]);
    design.addPosition("a6", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b6", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c6", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d6", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e6", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f6", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g6", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a5", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g5", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a4", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g4", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a3", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g3", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a2", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g2", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a1", [0, 1, 0, -6, -7, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("c1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("d1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("e1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("f1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("g1", [-1, 0, 0, 0, -7, 0, 0, -8]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [3], 0);

    design.setup("White", "Pawn", 35);
    design.setup("White", "Pawn", 36);
    design.setup("White", "Pawn", 37);
    design.setup("White", "Pawn", 38);
    design.setup("White", "Pawn", 39);
    design.setup("White", "Pawn", 40);
    design.setup("White", "Pawn", 41);
    design.setup("White", "Pawn", 42);
    design.setup("White", "Pawn", 43);
    design.setup("White", "Pawn", 44);
    design.setup("White", "Pawn", 45);
    design.setup("White", "Pawn", 46);
    design.setup("White", "Pawn", 47);
    design.setup("White", "Pawn", 48);
    design.setup("Black", "Pawn", 7);
    design.setup("Black", "Pawn", 8);
    design.setup("Black", "Pawn", 9);
    design.setup("Black", "Pawn", 10);
    design.setup("Black", "Pawn", 11);
    design.setup("Black", "Pawn", 12);
    design.setup("Black", "Pawn", 13);
    design.setup("Black", "Pawn", 0);
    design.setup("Black", "Pawn", 1);
    design.setup("Black", "Pawn", 2);
    design.setup("Black", "Pawn", 3);
    design.setup("Black", "Pawn", 4);
    design.setup("Black", "Pawn", 5);
    design.setup("Black", "Pawn", 6);

    design.goal(0, "White", "Pawn", [0, 1, 2, 3, 4, 5, 6]);
    design.goal(1, "Black", "Pawn", [42, 43, 44, 45, 46, 47, 48]);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
 
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
