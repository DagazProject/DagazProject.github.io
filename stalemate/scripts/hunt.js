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

    design.addDirection("nne");
    design.addDirection("e");
    design.addDirection("sse");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("nw");
    design.addDirection("w");
    design.addDirection("ssw");
    design.addDirection("nnw");
    design.addDirection("see");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("sww");
    design.addDirection("nee");
    design.addDirection("sw");
    design.addDirection("nww");

    design.addPlayer("Black", [7, 6, 8, 10, 5, 4, 1, 0, 2, 15, 3, 14, 13, 12, 11, 9]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

    design.addPosition("a8", [0, 1, 17, 0, 9, 0, 0, 0, 0, 10, 8, 0, 0, 0, 0, 0]);
    design.addPosition("b8", [0, 1, 17, 0, 9, 0, -1, 15, 0, 10, 8, 0, 0, 0, 7, 0]);
    design.addPosition("c8", [0, 1, 17, 0, 9, 0, -1, 15, 0, 10, 8, 0, 6, 0, 7, 0]);
    design.addPosition("d8", [0, 1, 17, 0, 9, 0, -1, 15, 0, 10, 8, 0, 6, 0, 7, 0]);
    design.addPosition("e8", [0, 1, 17, 0, 9, 0, -1, 15, 0, 10, 8, 0, 6, 0, 7, 0]);
    design.addPosition("f8", [0, 1, 17, 0, 9, 0, -1, 15, 0, 10, 8, 0, 6, 0, 7, 0]);
    design.addPosition("g8", [0, 1, 17, 0, 9, 0, -1, 15, 0, 0, 8, 0, 6, 0, 7, 0]);
    design.addPosition("h8", [0, 0, 0, 0, 0, 0, -1, 15, 0, 0, 8, 0, 6, 0, 7, 0]);
    design.addPosition("a7", [0, 1, 17, -8, 9, 0, 0, 0, 0, 10, 8, -7, 0, -6, 0, 0]);
    design.addPosition("b7", [0, 1, 17, -8, 9, -9, -1, 15, 0, 10, 8, -7, 0, -6, 7, 0]);
    design.addPosition("c7", [0, 1, 17, -8, 9, -9, -1, 15, 0, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("d7", [0, 1, 17, -8, 9, -9, -1, 15, 0, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("e7", [0, 1, 17, -8, 9, -9, -1, 15, 0, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("f7", [0, 1, 17, -8, 9, -9, -1, 15, 0, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("g7", [0, 1, 17, -8, 9, -9, -1, 15, 0, 0, 8, -7, 6, 0, 7, -10]);
    design.addPosition("h7", [0, 0, 0, -8, 0, -9, -1, 15, 0, 0, 8, 0, 6, 0, 7, -10]);
    design.addPosition("a6", [-15, 1, 17, -8, 9, 0, 0, 0, 0, 10, 8, -7, 0, -6, 0, 0]);
    design.addPosition("b6", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 0, -6, 7, 0]);
    design.addPosition("c6", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("d6", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("e6", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("f6", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("g6", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 0, 8, -7, 6, 0, 7, -10]);
    design.addPosition("h6", [0, 0, 0, -8, 0, -9, -1, 15, -17, 0, 8, 0, 6, 0, 7, -10]);
    design.addPosition("a5", [-15, 1, 17, -8, 9, 0, 0, 0, 0, 10, 8, -7, 0, -6, 0, 0]);
    design.addPosition("b5", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 0, -6, 7, 0]);
    design.addPosition("c5", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("d5", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("e5", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("f5", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("g5", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 0, 8, -7, 6, 0, 7, -10]);
    design.addPosition("h5", [0, 0, 0, -8, 0, -9, -1, 15, -17, 0, 8, 0, 6, 0, 7, -10]);
    design.addPosition("a4", [-15, 1, 17, -8, 9, 0, 0, 0, 0, 10, 8, -7, 0, -6, 0, 0]);
    design.addPosition("b4", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 0, -6, 7, 0]);
    design.addPosition("c4", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("d4", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("e4", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("f4", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("g4", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 0, 8, -7, 6, 0, 7, -10]);
    design.addPosition("h4", [0, 0, 0, -8, 0, -9, -1, 15, -17, 0, 8, 0, 6, 0, 7, -10]);
    design.addPosition("a3", [-15, 1, 17, -8, 9, 0, 0, 0, 0, 10, 8, -7, 0, -6, 0, 0]);
    design.addPosition("b3", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 0, -6, 7, 0]);
    design.addPosition("c3", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("d3", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("e3", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("f3", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("g3", [-15, 1, 17, -8, 9, -9, -1, 15, -17, 0, 8, -7, 6, 0, 7, -10]);
    design.addPosition("h3", [0, 0, 0, -8, 0, -9, -1, 15, -17, 0, 8, 0, 6, 0, 7, -10]);
    design.addPosition("a2", [-15, 1, 0, -8, 9, 0, 0, 0, 0, 10, 8, -7, 0, -6, 0, 0]);
    design.addPosition("b2", [-15, 1, 0, -8, 9, -9, -1, 0, -17, 10, 8, -7, 0, -6, 7, 0]);
    design.addPosition("c2", [-15, 1, 0, -8, 9, -9, -1, 0, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("d2", [-15, 1, 0, -8, 9, -9, -1, 0, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("e2", [-15, 1, 0, -8, 9, -9, -1, 0, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("f2", [-15, 1, 0, -8, 9, -9, -1, 0, -17, 10, 8, -7, 6, -6, 7, -10]);
    design.addPosition("g2", [-15, 1, 0, -8, 9, -9, -1, 0, -17, 0, 8, -7, 6, 0, 7, -10]);
    design.addPosition("h2", [0, 0, 0, -8, 0, -9, -1, 0, -17, 0, 8, 0, 6, 0, 7, -10]);
    design.addPosition("a1", [-15, 1, 0, -8, 0, 0, 0, 0, 0, 0, 0, -7, 0, -6, 0, 0]);
    design.addPosition("b1", [-15, 1, 0, -8, 0, -9, -1, 0, -17, 0, 0, -7, 0, -6, 0, 0]);
    design.addPosition("c1", [-15, 1, 0, -8, 0, -9, -1, 0, -17, 0, 0, -7, 0, -6, 0, -10]);
    design.addPosition("d1", [-15, 1, 0, -8, 0, -9, -1, 0, -17, 0, 0, -7, 0, -6, 0, -10]);
    design.addPosition("e1", [-15, 1, 0, -8, 0, -9, -1, 0, -17, 0, 0, -7, 0, -6, 0, -10]);
    design.addPosition("f1", [-15, 1, 0, -8, 0, -9, -1, 0, -17, 0, 0, -7, 0, -6, 0, -10]);
    design.addPosition("g1", [-15, 1, 0, -8, 0, -9, -1, 0, -17, 0, 0, -7, 0, 0, 0, -10]);
    design.addPosition("h1", [0, 0, 0, -8, 0, -9, -1, 0, -17, 0, 0, 0, 0, 0, 0, -10]);


    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	7);
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-8);
    design.addCommand(0, ZRF.FUNCTION,	28);	// end


    design.addPiece("Knight", 0);
    design.addMove(0, 0, [8, 8], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [7, 7], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [15, 15], 0);
    design.addMove(0, 0, [13, 13], 0);
    design.addMove(0, 0, [12, 12], 0);
    design.addMove(0, 0, [9, 9], 0);

    design.addPiece("Bishop", 1);
    design.addMove(1, 0, [5, 5], 0);
    design.addMove(1, 0, [11, 11], 0);
    design.addMove(1, 0, [14, 14], 0);
    design.addMove(1, 0, [4, 4], 0);

    design.setup("Black", "Bishop", 56);
    design.setup("Black", "Bishop", 57);
    design.setup("Black", "Bishop", 58);
    design.setup("Black", "Bishop", 59);
    design.setup("Black", "Bishop", 60);
    design.setup("Black", "Bishop", 61);
    design.setup("Black", "Bishop", 62);
    design.setup("Black", "Bishop", 63);
    design.setup("Black", "Bishop", 48);
    design.setup("Black", "Bishop", 49);
    design.setup("Black", "Bishop", 50);
    design.setup("Black", "Bishop", 51);
    design.setup("Black", "Bishop", 52);
    design.setup("Black", "Bishop", 53);
    design.setup("Black", "Bishop", 54);
    design.setup("Black", "Bishop", 55);
    design.setup("Black", "Bishop", 8);
    design.setup("Black", "Bishop", 9);
    design.setup("Black", "Bishop", 10);
    design.setup("Black", "Bishop", 11);
    design.setup("Black", "Bishop", 12);
    design.setup("Black", "Bishop", 13);
    design.setup("Black", "Bishop", 14);
    design.setup("Black", "Bishop", 15);
    design.setup("Black", "Bishop", 0);
    design.setup("Black", "Bishop", 1);
    design.setup("Black", "Bishop", 2);
    design.setup("Black", "Bishop", 3);
    design.setup("Black", "Bishop", 4);
    design.setup("Black", "Bishop", 5);
    design.setup("Black", "Bishop", 6);
    design.setup("Black", "Bishop", 7);
    design.setup("White", "Knight", 35);

}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackBishop", "Black Bishop");
 
    view.defPosition("a8", 2, 2, 68, 68);
    view.defPosition("b8", 70, 2, 68, 68);
    view.defPosition("c8", 138, 2, 68, 68);
    view.defPosition("d8", 206, 2, 68, 68);
    view.defPosition("e8", 274, 2, 68, 68);
    view.defPosition("f8", 342, 2, 68, 68);
    view.defPosition("g8", 410, 2, 68, 68);
    view.defPosition("h8", 478, 2, 68, 68);
    view.defPosition("a7", 2, 70, 68, 68);
    view.defPosition("b7", 70, 70, 68, 68);
    view.defPosition("c7", 138, 70, 68, 68);
    view.defPosition("d7", 206, 70, 68, 68);
    view.defPosition("e7", 274, 70, 68, 68);
    view.defPosition("f7", 342, 70, 68, 68);
    view.defPosition("g7", 410, 70, 68, 68);
    view.defPosition("h7", 478, 70, 68, 68);
    view.defPosition("a6", 2, 138, 68, 68);
    view.defPosition("b6", 70, 138, 68, 68);
    view.defPosition("c6", 138, 138, 68, 68);
    view.defPosition("d6", 206, 138, 68, 68);
    view.defPosition("e6", 274, 138, 68, 68);
    view.defPosition("f6", 342, 138, 68, 68);
    view.defPosition("g6", 410, 138, 68, 68);
    view.defPosition("h6", 478, 138, 68, 68);
    view.defPosition("a5", 2, 206, 68, 68);
    view.defPosition("b5", 70, 206, 68, 68);
    view.defPosition("c5", 138, 206, 68, 68);
    view.defPosition("d5", 206, 206, 68, 68);
    view.defPosition("e5", 274, 206, 68, 68);
    view.defPosition("f5", 342, 206, 68, 68);
    view.defPosition("g5", 410, 206, 68, 68);
    view.defPosition("h5", 478, 206, 68, 68);
    view.defPosition("a4", 2, 274, 68, 68);
    view.defPosition("b4", 70, 274, 68, 68);
    view.defPosition("c4", 138, 274, 68, 68);
    view.defPosition("d4", 206, 274, 68, 68);
    view.defPosition("e4", 274, 274, 68, 68);
    view.defPosition("f4", 342, 274, 68, 68);
    view.defPosition("g4", 410, 274, 68, 68);
    view.defPosition("h4", 478, 274, 68, 68);
    view.defPosition("a3", 2, 342, 68, 68);
    view.defPosition("b3", 70, 342, 68, 68);
    view.defPosition("c3", 138, 342, 68, 68);
    view.defPosition("d3", 206, 342, 68, 68);
    view.defPosition("e3", 274, 342, 68, 68);
    view.defPosition("f3", 342, 342, 68, 68);
    view.defPosition("g3", 410, 342, 68, 68);
    view.defPosition("h3", 478, 342, 68, 68);
    view.defPosition("a2", 2, 410, 68, 68);
    view.defPosition("b2", 70, 410, 68, 68);
    view.defPosition("c2", 138, 410, 68, 68);
    view.defPosition("d2", 206, 410, 68, 68);
    view.defPosition("e2", 274, 410, 68, 68);
    view.defPosition("f2", 342, 410, 68, 68);
    view.defPosition("g2", 410, 410, 68, 68);
    view.defPosition("h2", 478, 410, 68, 68);
    view.defPosition("a1", 2, 478, 68, 68);
    view.defPosition("b1", 70, 478, 68, 68);
    view.defPosition("c1", 138, 478, 68, 68);
    view.defPosition("d1", 206, 478, 68, 68);
    view.defPosition("e1", 274, 478, 68, 68);
    view.defPosition("f1", 342, 478, 68, 68);
    view.defPosition("g1", 410, 478, 68, 68);
    view.defPosition("h1", 478, 478, 68, 68);
}
