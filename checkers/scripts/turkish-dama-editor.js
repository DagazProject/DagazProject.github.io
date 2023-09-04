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

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("You", [1, 0, 3, 2]);

    design.addPosition("a8", [0, 1, 8, 0]);
    design.addPosition("b8", [-1, 1, 8, 0]);
    design.addPosition("c8", [-1, 1, 8, 0]);
    design.addPosition("d8", [-1, 1, 8, 0]);
    design.addPosition("e8", [-1, 1, 8, 0]);
    design.addPosition("f8", [-1, 1, 8, 0]);
    design.addPosition("g8", [-1, 1, 8, 0]);
    design.addPosition("h8", [-1, 0, 8, 0]);
    design.addPosition("a7", [0, 1, 8, -8]);
    design.addPosition("b7", [-1, 1, 8, -8]);
    design.addPosition("c7", [-1, 1, 8, -8]);
    design.addPosition("d7", [-1, 1, 8, -8]);
    design.addPosition("e7", [-1, 1, 8, -8]);
    design.addPosition("f7", [-1, 1, 8, -8]);
    design.addPosition("g7", [-1, 1, 8, -8]);
    design.addPosition("h7", [-1, 0, 8, -8]);
    design.addPosition("a6", [0, 1, 8, -8]);
    design.addPosition("b6", [-1, 1, 8, -8]);
    design.addPosition("c6", [-1, 1, 8, -8]);
    design.addPosition("d6", [-1, 1, 8, -8]);
    design.addPosition("e6", [-1, 1, 8, -8]);
    design.addPosition("f6", [-1, 1, 8, -8]);
    design.addPosition("g6", [-1, 1, 8, -8]);
    design.addPosition("h6", [-1, 0, 8, -8]);
    design.addPosition("a5", [0, 1, 8, -8]);
    design.addPosition("b5", [-1, 1, 8, -8]);
    design.addPosition("c5", [-1, 1, 8, -8]);
    design.addPosition("d5", [-1, 1, 8, -8]);
    design.addPosition("e5", [-1, 1, 8, -8]);
    design.addPosition("f5", [-1, 1, 8, -8]);
    design.addPosition("g5", [-1, 1, 8, -8]);
    design.addPosition("h5", [-1, 0, 8, -8]);
    design.addPosition("a4", [0, 1, 8, -8]);
    design.addPosition("b4", [-1, 1, 8, -8]);
    design.addPosition("c4", [-1, 1, 8, -8]);
    design.addPosition("d4", [-1, 1, 8, -8]);
    design.addPosition("e4", [-1, 1, 8, -8]);
    design.addPosition("f4", [-1, 1, 8, -8]);
    design.addPosition("g4", [-1, 1, 8, -8]);
    design.addPosition("h4", [-1, 0, 8, -8]);
    design.addPosition("a3", [0, 1, 8, -8]);
    design.addPosition("b3", [-1, 1, 8, -8]);
    design.addPosition("c3", [-1, 1, 8, -8]);
    design.addPosition("d3", [-1, 1, 8, -8]);
    design.addPosition("e3", [-1, 1, 8, -8]);
    design.addPosition("f3", [-1, 1, 8, -8]);
    design.addPosition("g3", [-1, 1, 8, -8]);
    design.addPosition("h3", [-1, 0, 8, -8]);
    design.addPosition("a2", [0, 1, 8, -8]);
    design.addPosition("b2", [-1, 1, 8, -8]);
    design.addPosition("c2", [-1, 1, 8, -8]);
    design.addPosition("d2", [-1, 1, 8, -8]);
    design.addPosition("e2", [-1, 1, 8, -8]);
    design.addPosition("f2", [-1, 1, 8, -8]);
    design.addPosition("g2", [-1, 1, 8, -8]);
    design.addPosition("h2", [-1, 0, 8, -8]);
    design.addPosition("a1", [0, 1, 0, -8]);
    design.addPosition("b1", [-1, 1, 0, -8]);
    design.addPosition("c1", [-1, 1, 0, -8]);
    design.addPosition("d1", [-1, 1, 0, -8]);
    design.addPosition("e1", [-1, 1, 0, -8]);
    design.addPosition("f1", [-1, 1, 0, -8]);
    design.addPosition("g1", [-1, 1, 0, -8]);
    design.addPosition("h1", [-1, 0, 0, -8]);

    design.addZone("promotion", 1, [0, 1, 2, 3, 4, 5, 6, 7, 56, 57, 58, 59, 60, 61, 62, 63]);

    design.addCommand(0, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPiece("WhiteMan", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 2, [], 0);

    design.addPiece("BlackMan", 1);
    design.addDrop(1, 0, [], 0);
    design.addMove(1, 2, [], 0);

    design.addPiece("WhiteKing", 2);
    design.addDrop(2, 1, [], 0);
    design.addMove(2, 2, [], 0);

    design.addPiece("BlackKing", 3);
    design.addDrop(3, 1, [], 0);
    design.addMove(3, 2, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "You WhiteMan");
    view.defPiece("BlackMan", "You BlackMan");
    view.defPiece("WhiteKing", "You WhiteKing");
    view.defPiece("BlackKing", "You BlackKing");
 
    view.defPosition("a8", 2, 2, 50, 50);
    view.defPosition("b8", 52, 2, 50, 50);
    view.defPosition("c8", 102, 2, 50, 50);
    view.defPosition("d8", 152, 2, 50, 50);
    view.defPosition("e8", 202, 2, 50, 50);
    view.defPosition("f8", 252, 2, 50, 50);
    view.defPosition("g8", 302, 2, 50, 50);
    view.defPosition("h8", 352, 2, 50, 50);
    view.defPosition("a7", 2, 52, 50, 50);
    view.defPosition("b7", 52, 52, 50, 50);
    view.defPosition("c7", 102, 52, 50, 50);
    view.defPosition("d7", 152, 52, 50, 50);
    view.defPosition("e7", 202, 52, 50, 50);
    view.defPosition("f7", 252, 52, 50, 50);
    view.defPosition("g7", 302, 52, 50, 50);
    view.defPosition("h7", 352, 52, 50, 50);
    view.defPosition("a6", 2, 102, 50, 50);
    view.defPosition("b6", 52, 102, 50, 50);
    view.defPosition("c6", 102, 102, 50, 50);
    view.defPosition("d6", 152, 102, 50, 50);
    view.defPosition("e6", 202, 102, 50, 50);
    view.defPosition("f6", 252, 102, 50, 50);
    view.defPosition("g6", 302, 102, 50, 50);
    view.defPosition("h6", 352, 102, 50, 50);
    view.defPosition("a5", 2, 152, 50, 50);
    view.defPosition("b5", 52, 152, 50, 50);
    view.defPosition("c5", 102, 152, 50, 50);
    view.defPosition("d5", 152, 152, 50, 50);
    view.defPosition("e5", 202, 152, 50, 50);
    view.defPosition("f5", 252, 152, 50, 50);
    view.defPosition("g5", 302, 152, 50, 50);
    view.defPosition("h5", 352, 152, 50, 50);
    view.defPosition("a4", 2, 202, 50, 50);
    view.defPosition("b4", 52, 202, 50, 50);
    view.defPosition("c4", 102, 202, 50, 50);
    view.defPosition("d4", 152, 202, 50, 50);
    view.defPosition("e4", 202, 202, 50, 50);
    view.defPosition("f4", 252, 202, 50, 50);
    view.defPosition("g4", 302, 202, 50, 50);
    view.defPosition("h4", 352, 202, 50, 50);
    view.defPosition("a3", 2, 252, 50, 50);
    view.defPosition("b3", 52, 252, 50, 50);
    view.defPosition("c3", 102, 252, 50, 50);
    view.defPosition("d3", 152, 252, 50, 50);
    view.defPosition("e3", 202, 252, 50, 50);
    view.defPosition("f3", 252, 252, 50, 50);
    view.defPosition("g3", 302, 252, 50, 50);
    view.defPosition("h3", 352, 252, 50, 50);
    view.defPosition("a2", 2, 302, 50, 50);
    view.defPosition("b2", 52, 302, 50, 50);
    view.defPosition("c2", 102, 302, 50, 50);
    view.defPosition("d2", 152, 302, 50, 50);
    view.defPosition("e2", 202, 302, 50, 50);
    view.defPosition("f2", 252, 302, 50, 50);
    view.defPosition("g2", 302, 302, 50, 50);
    view.defPosition("h2", 352, 302, 50, 50);
    view.defPosition("a1", 2, 352, 50, 50);
    view.defPosition("b1", 52, 352, 50, 50);
    view.defPosition("c1", 102, 352, 50, 50);
    view.defPosition("d1", 152, 352, 50, 50);
    view.defPosition("e1", 202, 352, 50, 50);
    view.defPosition("f1", 252, 352, 50, 50);
    view.defPosition("g1", 302, 352, 50, 50);
    view.defPosition("h1", 352, 352, 50, 50);
}
