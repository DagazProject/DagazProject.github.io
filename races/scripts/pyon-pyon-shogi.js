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
    design.checkVersion("show-blink", "true");
    design.checkVersion("show-hints", "false");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("South", [1, 0]);
    design.addPlayer("North", [1, 0]);

    design.addPosition("a9", [9, 0]);
    design.addPosition("b9", [9, 0]);
    design.addPosition("c9", [9, 0]);
    design.addPosition("d9", [9, 0]);
    design.addPosition("e9", [9, 0]);
    design.addPosition("f9", [9, 0]);
    design.addPosition("g9", [9, 0]);
    design.addPosition("h9", [9, 0]);
    design.addPosition("i9", [9, 0]);
    design.addPosition("a8", [9, -9]);
    design.addPosition("b8", [9, -9]);
    design.addPosition("c8", [9, -9]);
    design.addPosition("d8", [9, -9]);
    design.addPosition("e8", [9, -9]);
    design.addPosition("f8", [9, -9]);
    design.addPosition("g8", [9, -9]);
    design.addPosition("h8", [9, -9]);
    design.addPosition("i8", [9, -9]);
    design.addPosition("a7", [9, -9]);
    design.addPosition("b7", [9, -9]);
    design.addPosition("c7", [9, -9]);
    design.addPosition("d7", [9, -9]);
    design.addPosition("e7", [9, -9]);
    design.addPosition("f7", [9, -9]);
    design.addPosition("g7", [9, -9]);
    design.addPosition("h7", [9, -9]);
    design.addPosition("i7", [9, -9]);
    design.addPosition("a6", [9, -9]);
    design.addPosition("b6", [9, -9]);
    design.addPosition("c6", [9, -9]);
    design.addPosition("d6", [9, -9]);
    design.addPosition("e6", [9, -9]);
    design.addPosition("f6", [9, -9]);
    design.addPosition("g6", [9, -9]);
    design.addPosition("h6", [9, -9]);
    design.addPosition("i6", [9, -9]);
    design.addPosition("a5", [9, -9]);
    design.addPosition("b5", [9, -9]);
    design.addPosition("c5", [9, -9]);
    design.addPosition("d5", [9, -9]);
    design.addPosition("e5", [9, -9]);
    design.addPosition("f5", [9, -9]);
    design.addPosition("g5", [9, -9]);
    design.addPosition("h5", [9, -9]);
    design.addPosition("i5", [9, -9]);
    design.addPosition("a4", [9, -9]);
    design.addPosition("b4", [9, -9]);
    design.addPosition("c4", [9, -9]);
    design.addPosition("d4", [9, -9]);
    design.addPosition("e4", [9, -9]);
    design.addPosition("f4", [9, -9]);
    design.addPosition("g4", [9, -9]);
    design.addPosition("h4", [9, -9]);
    design.addPosition("i4", [9, -9]);
    design.addPosition("a3", [9, -9]);
    design.addPosition("b3", [9, -9]);
    design.addPosition("c3", [9, -9]);
    design.addPosition("d3", [9, -9]);
    design.addPosition("e3", [9, -9]);
    design.addPosition("f3", [9, -9]);
    design.addPosition("g3", [9, -9]);
    design.addPosition("h3", [9, -9]);
    design.addPosition("i3", [9, -9]);
    design.addPosition("a2", [9, -9]);
    design.addPosition("b2", [9, -9]);
    design.addPosition("c2", [9, -9]);
    design.addPosition("d2", [9, -9]);
    design.addPosition("e2", [9, -9]);
    design.addPosition("f2", [9, -9]);
    design.addPosition("g2", [9, -9]);
    design.addPosition("h2", [9, -9]);
    design.addPosition("i2", [9, -9]);
    design.addPosition("a1", [0, -9]);
    design.addPosition("b1", [0, -9]);
    design.addPosition("c1", [0, -9]);
    design.addPosition("d1", [0, -9]);
    design.addPosition("e1", [0, -9]);
    design.addPosition("f1", [0, -9]);
    design.addPosition("g1", [0, -9]);
    design.addPosition("h1", [0, -9]);
    design.addPosition("i1", [0, -9]);

    design.addZone("goal-zone", 2, [75, 76, 77, 66, 67, 68, 57, 58, 59]);
    design.addZone("goal-zone", 1, [3, 4, 5, 12, 13, 14, 21, 22, 23]);

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
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-4);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.MODE,	1);	// continue-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 1, [1, 1], 1);

    design.setup("South", "Pawn", 75);
    design.setup("South", "Pawn", 76);
    design.setup("South", "Pawn", 77);
    design.setup("South", "Pawn", 66);
    design.setup("South", "Pawn", 67);
    design.setup("South", "Pawn", 68);
    design.setup("South", "Pawn", 57);
    design.setup("South", "Pawn", 58);
    design.setup("South", "Pawn", 59);
    design.setup("North", "Pawn", 3);
    design.setup("North", "Pawn", 4);
    design.setup("North", "Pawn", 5);
    design.setup("North", "Pawn", 12);
    design.setup("North", "Pawn", 13);
    design.setup("North", "Pawn", 14);
    design.setup("North", "Pawn", 21);
    design.setup("North", "Pawn", 22);
    design.setup("North", "Pawn", 23);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("SouthPawn", "South Pawn");
    view.defPiece("NorthPawn", "North Pawn");
 
    view.defPosition("a9", 8, 9, 41, 46);
    view.defPosition("b9", 49, 9, 41, 46);
    view.defPosition("c9", 90, 9, 41, 46);
    view.defPosition("d9", 131, 9, 41, 46);
    view.defPosition("e9", 172, 9, 41, 46);
    view.defPosition("f9", 213, 9, 41, 46);
    view.defPosition("g9", 254, 9, 41, 46);
    view.defPosition("h9", 295, 9, 41, 46);
    view.defPosition("i9", 336, 9, 41, 46);
    view.defPosition("a8", 8, 55, 41, 46);
    view.defPosition("b8", 49, 55, 41, 46);
    view.defPosition("c8", 90, 55, 41, 46);
    view.defPosition("d8", 131, 55, 41, 46);
    view.defPosition("e8", 172, 55, 41, 46);
    view.defPosition("f8", 213, 55, 41, 46);
    view.defPosition("g8", 254, 55, 41, 46);
    view.defPosition("h8", 295, 55, 41, 46);
    view.defPosition("i8", 336, 55, 41, 46);
    view.defPosition("a7", 8, 101, 41, 46);
    view.defPosition("b7", 49, 101, 41, 46);
    view.defPosition("c7", 90, 101, 41, 46);
    view.defPosition("d7", 131, 101, 41, 46);
    view.defPosition("e7", 172, 101, 41, 46);
    view.defPosition("f7", 213, 101, 41, 46);
    view.defPosition("g7", 254, 101, 41, 46);
    view.defPosition("h7", 295, 101, 41, 46);
    view.defPosition("i7", 336, 101, 41, 46);
    view.defPosition("a6", 8, 147, 41, 46);
    view.defPosition("b6", 49, 147, 41, 46);
    view.defPosition("c6", 90, 147, 41, 46);
    view.defPosition("d6", 131, 147, 41, 46);
    view.defPosition("e6", 172, 147, 41, 46);
    view.defPosition("f6", 213, 147, 41, 46);
    view.defPosition("g6", 254, 147, 41, 46);
    view.defPosition("h6", 295, 147, 41, 46);
    view.defPosition("i6", 336, 147, 41, 46);
    view.defPosition("a5", 8, 193, 41, 46);
    view.defPosition("b5", 49, 193, 41, 46);
    view.defPosition("c5", 90, 193, 41, 46);
    view.defPosition("d5", 131, 193, 41, 46);
    view.defPosition("e5", 172, 193, 41, 46);
    view.defPosition("f5", 213, 193, 41, 46);
    view.defPosition("g5", 254, 193, 41, 46);
    view.defPosition("h5", 295, 193, 41, 46);
    view.defPosition("i5", 336, 193, 41, 46);
    view.defPosition("a4", 8, 239, 41, 46);
    view.defPosition("b4", 49, 239, 41, 46);
    view.defPosition("c4", 90, 239, 41, 46);
    view.defPosition("d4", 131, 239, 41, 46);
    view.defPosition("e4", 172, 239, 41, 46);
    view.defPosition("f4", 213, 239, 41, 46);
    view.defPosition("g4", 254, 239, 41, 46);
    view.defPosition("h4", 295, 239, 41, 46);
    view.defPosition("i4", 336, 239, 41, 46);
    view.defPosition("a3", 8, 285, 41, 46);
    view.defPosition("b3", 49, 285, 41, 46);
    view.defPosition("c3", 90, 285, 41, 46);
    view.defPosition("d3", 131, 285, 41, 46);
    view.defPosition("e3", 172, 285, 41, 46);
    view.defPosition("f3", 213, 285, 41, 46);
    view.defPosition("g3", 254, 285, 41, 46);
    view.defPosition("h3", 295, 285, 41, 46);
    view.defPosition("i3", 336, 285, 41, 46);
    view.defPosition("a2", 8, 331, 41, 46);
    view.defPosition("b2", 49, 331, 41, 46);
    view.defPosition("c2", 90, 331, 41, 46);
    view.defPosition("d2", 131, 331, 41, 46);
    view.defPosition("e2", 172, 331, 41, 46);
    view.defPosition("f2", 213, 331, 41, 46);
    view.defPosition("g2", 254, 331, 41, 46);
    view.defPosition("h2", 295, 331, 41, 46);
    view.defPosition("i2", 336, 331, 41, 46);
    view.defPosition("a1", 8, 377, 41, 46);
    view.defPosition("b1", 49, 377, 41, 46);
    view.defPosition("c1", 90, 377, 41, 46);
    view.defPosition("d1", 131, 377, 41, 46);
    view.defPosition("e1", 172, 377, 41, 46);
    view.defPosition("f1", 213, 377, 41, 46);
    view.defPosition("g1", 254, 377, 41, 46);
    view.defPosition("h1", 295, 377, 41, 46);
    view.defPosition("i1", 336, 377, 41, 46);
}
