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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("tafl-extension", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("Black", [1, 0, 3, 2]);
    design.addPlayer("White", [0, 1, 2, 3]);

    design.addPosition("a9", [0, 1, 9, 0]);
    design.addPosition("b9", [-1, 1, 9, 0]);
    design.addPosition("c9", [-1, 1, 9, 0]);
    design.addPosition("d9", [-1, 1, 9, 0]);
    design.addPosition("e9", [-1, 1, 9, 0]);
    design.addPosition("f9", [-1, 1, 9, 0]);
    design.addPosition("g9", [-1, 1, 9, 0]);
    design.addPosition("h9", [-1, 1, 9, 0]);
    design.addPosition("i9", [-1, 0, 9, 0]);
    design.addPosition("a8", [0, 1, 9, -9]);
    design.addPosition("b8", [-1, 1, 9, -9]);
    design.addPosition("c8", [-1, 1, 9, -9]);
    design.addPosition("d8", [-1, 1, 9, -9]);
    design.addPosition("e8", [-1, 1, 9, -9]);
    design.addPosition("f8", [-1, 1, 9, -9]);
    design.addPosition("g8", [-1, 1, 9, -9]);
    design.addPosition("h8", [-1, 1, 9, -9]);
    design.addPosition("i8", [-1, 0, 9, -9]);
    design.addPosition("a7", [0, 1, 9, -9]);
    design.addPosition("b7", [-1, 1, 9, -9]);
    design.addPosition("c7", [-1, 1, 9, -9]);
    design.addPosition("d7", [-1, 1, 9, -9]);
    design.addPosition("e7", [-1, 1, 9, -9]);
    design.addPosition("f7", [-1, 1, 9, -9]);
    design.addPosition("g7", [-1, 1, 9, -9]);
    design.addPosition("h7", [-1, 1, 9, -9]);
    design.addPosition("i7", [-1, 0, 9, -9]);
    design.addPosition("a6", [0, 1, 9, -9]);
    design.addPosition("b6", [-1, 1, 9, -9]);
    design.addPosition("c6", [-1, 1, 9, -9]);
    design.addPosition("d6", [-1, 1, 9, -9]);
    design.addPosition("e6", [-1, 1, 9, -9]);
    design.addPosition("f6", [-1, 1, 9, -9]);
    design.addPosition("g6", [-1, 1, 9, -9]);
    design.addPosition("h6", [-1, 1, 9, -9]);
    design.addPosition("i6", [-1, 0, 9, -9]);
    design.addPosition("a5", [0, 1, 9, -9]);
    design.addPosition("b5", [-1, 1, 9, -9]);
    design.addPosition("c5", [-1, 1, 9, -9]);
    design.addPosition("d5", [-1, 1, 9, -9]);
    design.addPosition("e5", [-1, 1, 9, -9]);
    design.addPosition("f5", [-1, 1, 9, -9]);
    design.addPosition("g5", [-1, 1, 9, -9]);
    design.addPosition("h5", [-1, 1, 9, -9]);
    design.addPosition("i5", [-1, 0, 9, -9]);
    design.addPosition("a4", [0, 1, 9, -9]);
    design.addPosition("b4", [-1, 1, 9, -9]);
    design.addPosition("c4", [-1, 1, 9, -9]);
    design.addPosition("d4", [-1, 1, 9, -9]);
    design.addPosition("e4", [-1, 1, 9, -9]);
    design.addPosition("f4", [-1, 1, 9, -9]);
    design.addPosition("g4", [-1, 1, 9, -9]);
    design.addPosition("h4", [-1, 1, 9, -9]);
    design.addPosition("i4", [-1, 0, 9, -9]);
    design.addPosition("a3", [0, 1, 9, -9]);
    design.addPosition("b3", [-1, 1, 9, -9]);
    design.addPosition("c3", [-1, 1, 9, -9]);
    design.addPosition("d3", [-1, 1, 9, -9]);
    design.addPosition("e3", [-1, 1, 9, -9]);
    design.addPosition("f3", [-1, 1, 9, -9]);
    design.addPosition("g3", [-1, 1, 9, -9]);
    design.addPosition("h3", [-1, 1, 9, -9]);
    design.addPosition("i3", [-1, 0, 9, -9]);
    design.addPosition("a2", [0, 1, 9, -9]);
    design.addPosition("b2", [-1, 1, 9, -9]);
    design.addPosition("c2", [-1, 1, 9, -9]);
    design.addPosition("d2", [-1, 1, 9, -9]);
    design.addPosition("e2", [-1, 1, 9, -9]);
    design.addPosition("f2", [-1, 1, 9, -9]);
    design.addPosition("g2", [-1, 1, 9, -9]);
    design.addPosition("h2", [-1, 1, 9, -9]);
    design.addPosition("i2", [-1, 0, 9, -9]);
    design.addPosition("a1", [0, 1, 0, -9]);
    design.addPosition("b1", [-1, 1, 0, -9]);
    design.addPosition("c1", [-1, 1, 0, -9]);
    design.addPosition("d1", [-1, 1, 0, -9]);
    design.addPosition("e1", [-1, 1, 0, -9]);
    design.addPosition("f1", [-1, 1, 0, -9]);
    design.addPosition("g1", [-1, 1, 0, -9]);
    design.addPosition("h1", [-1, 1, 0, -9]);
    design.addPosition("i1", [-1, 0, 0, -9]);

    design.addZone("throne", 2, [40]);
    design.addZone("throne", 1, [40]);
    design.addZone("enemies", 2, [45, 36, 27, 37, 75, 3, 76, 67, 13, 4, 77, 5, 43, 53, 44, 35]);
    design.addZone("enemies", 1, [45, 36, 27, 37, 75, 3, 76, 67, 13, 4, 77, 5, 43, 53, 44, 35]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	9);
    design.addCommand(0, ZRF.IN_ZONE,	0);	// throne
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-10);
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// throne
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end


    design.addPiece("Man", 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [1, 1], 0);

    design.addPiece("King", 1);
    design.addMove(1, 1, [3], 0);
    design.addMove(1, 1, [2], 0);
    design.addMove(1, 1, [0], 0);
    design.addMove(1, 1, [1], 0);

    design.setup("Black", "Man", 45);
    design.setup("Black", "Man", 36);
    design.setup("Black", "Man", 27);
    design.setup("Black", "Man", 37);
    design.setup("Black", "Man", 75);
    design.setup("Black", "Man", 3);
    design.setup("Black", "Man", 76);
    design.setup("Black", "Man", 67);
    design.setup("Black", "Man", 13);
    design.setup("Black", "Man", 4);
    design.setup("Black", "Man", 77);
    design.setup("Black", "Man", 5);
    design.setup("Black", "Man", 43);
    design.setup("Black", "Man", 53);
    design.setup("Black", "Man", 44);
    design.setup("Black", "Man", 35);
    design.setup("White", "King", 40);
    design.setup("White", "Man", 48);
    design.setup("White", "Man", 39);
    design.setup("White", "Man", 30);
    design.setup("White", "Man", 49);
    design.setup("White", "Man", 31);
    design.setup("White", "Man", 50);
    design.setup("White", "Man", 41);
    design.setup("White", "Man", 32);

    design.goal(0, "White", "King", [72, 63, 54, 45, 36, 27, 18, 9, 0, 73, 1, 74, 2, 75, 3, 76, 4, 77, 5, 78, 6, 79, 7, 80, 71, 62, 53, 44, 35, 26, 17, 8]);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
 
    view.defPosition("a9", 12, 12, 34, 34);
    view.defPosition("b9", 47, 12, 34, 34);
    view.defPosition("c9", 82, 12, 34, 34);
    view.defPosition("d9", 117, 12, 34, 34);
    view.defPosition("e9", 152, 12, 34, 34);
    view.defPosition("f9", 187, 12, 34, 34);
    view.defPosition("g9", 222, 12, 34, 34);
    view.defPosition("h9", 257, 12, 34, 34);
    view.defPosition("i9", 292, 12, 34, 34);
    view.defPosition("a8", 12, 47, 34, 34);
    view.defPosition("b8", 47, 47, 34, 34);
    view.defPosition("c8", 82, 47, 34, 34);
    view.defPosition("d8", 117, 47, 34, 34);
    view.defPosition("e8", 152, 47, 34, 34);
    view.defPosition("f8", 187, 47, 34, 34);
    view.defPosition("g8", 222, 47, 34, 34);
    view.defPosition("h8", 257, 47, 34, 34);
    view.defPosition("i8", 292, 47, 34, 34);
    view.defPosition("a7", 12, 82, 34, 34);
    view.defPosition("b7", 47, 82, 34, 34);
    view.defPosition("c7", 82, 82, 34, 34);
    view.defPosition("d7", 117, 82, 34, 34);
    view.defPosition("e7", 152, 82, 34, 34);
    view.defPosition("f7", 187, 82, 34, 34);
    view.defPosition("g7", 222, 82, 34, 34);
    view.defPosition("h7", 257, 82, 34, 34);
    view.defPosition("i7", 292, 82, 34, 34);
    view.defPosition("a6", 12, 117, 34, 34);
    view.defPosition("b6", 47, 117, 34, 34);
    view.defPosition("c6", 82, 117, 34, 34);
    view.defPosition("d6", 117, 117, 34, 34);
    view.defPosition("e6", 152, 117, 34, 34);
    view.defPosition("f6", 187, 117, 34, 34);
    view.defPosition("g6", 222, 117, 34, 34);
    view.defPosition("h6", 257, 117, 34, 34);
    view.defPosition("i6", 292, 117, 34, 34);
    view.defPosition("a5", 12, 152, 34, 34);
    view.defPosition("b5", 47, 152, 34, 34);
    view.defPosition("c5", 82, 152, 34, 34);
    view.defPosition("d5", 117, 152, 34, 34);
    view.defPosition("e5", 152, 152, 34, 34);
    view.defPosition("f5", 187, 152, 34, 34);
    view.defPosition("g5", 222, 152, 34, 34);
    view.defPosition("h5", 257, 152, 34, 34);
    view.defPosition("i5", 292, 152, 34, 34);
    view.defPosition("a4", 12, 187, 34, 34);
    view.defPosition("b4", 47, 187, 34, 34);
    view.defPosition("c4", 82, 187, 34, 34);
    view.defPosition("d4", 117, 187, 34, 34);
    view.defPosition("e4", 152, 187, 34, 34);
    view.defPosition("f4", 187, 187, 34, 34);
    view.defPosition("g4", 222, 187, 34, 34);
    view.defPosition("h4", 257, 187, 34, 34);
    view.defPosition("i4", 292, 187, 34, 34);
    view.defPosition("a3", 12, 222, 34, 34);
    view.defPosition("b3", 47, 222, 34, 34);
    view.defPosition("c3", 82, 222, 34, 34);
    view.defPosition("d3", 117, 222, 34, 34);
    view.defPosition("e3", 152, 222, 34, 34);
    view.defPosition("f3", 187, 222, 34, 34);
    view.defPosition("g3", 222, 222, 34, 34);
    view.defPosition("h3", 257, 222, 34, 34);
    view.defPosition("i3", 292, 222, 34, 34);
    view.defPosition("a2", 12, 257, 34, 34);
    view.defPosition("b2", 47, 257, 34, 34);
    view.defPosition("c2", 82, 257, 34, 34);
    view.defPosition("d2", 117, 257, 34, 34);
    view.defPosition("e2", 152, 257, 34, 34);
    view.defPosition("f2", 187, 257, 34, 34);
    view.defPosition("g2", 222, 257, 34, 34);
    view.defPosition("h2", 257, 257, 34, 34);
    view.defPosition("i2", 292, 257, 34, 34);
    view.defPosition("a1", 12, 292, 34, 34);
    view.defPosition("b1", 47, 292, 34, 34);
    view.defPosition("c1", 82, 292, 34, 34);
    view.defPosition("d1", 117, 292, 34, 34);
    view.defPosition("e1", 152, 292, 34, 34);
    view.defPosition("f1", 187, 292, 34, 34);
    view.defPosition("g1", 222, 292, 34, 34);
    view.defPosition("h1", 257, 292, 34, 34);
    view.defPosition("i1", 292, 292, 34, 34);
}
