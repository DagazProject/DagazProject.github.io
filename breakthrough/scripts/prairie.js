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
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("prairie-extension", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addTurn(2);
    design.addTurn(1);

    design.addPosition("a7", [0, 1, 11, 0, 0, 12, 0, 0]);
    design.addPosition("b7", [-1, 1, 11, 0, 0, 12, 10, 0]);
    design.addPosition("c7", [-1, 1, 11, 0, 0, 12, 10, 0]);
    design.addPosition("d7", [-1, 1, 11, 0, 0, 12, 10, 0]);
    design.addPosition("e7", [-1, 1, 11, 0, 0, 12, 10, 0]);
    design.addPosition("f7", [-1, 1, 11, 0, 0, 12, 10, 0]);
    design.addPosition("g7", [-1, 1, 11, 0, 0, 12, 10, 0]);
    design.addPosition("h7", [-1, 1, 11, 0, 0, 12, 10, 0]);
    design.addPosition("i7", [-1, 1, 11, 0, 0, 12, 10, 0]);
    design.addPosition("l7", [-1, 1, 11, 0, 0, 12, 10, 0]);
    design.addPosition("m7", [-1, 0, 11, 0, 0, 0, 10, 0]);
    design.addPosition("a6", [0, 1, 11, -10, -11, 12, 0, 0]);
    design.addPosition("b6", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("c6", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("d6", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("e6", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("f6", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("g6", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("h6", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("i6", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("l6", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("m6", [-1, 0, 11, 0, -11, 0, 10, -12]);
    design.addPosition("a5", [0, 1, 11, -10, -11, 12, 0, 0]);
    design.addPosition("b5", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("c5", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("d5", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("e5", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("f5", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("g5", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("h5", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("i5", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("l5", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("m5", [-1, 0, 11, 0, -11, 0, 10, -12]);
    design.addPosition("a4", [0, 1, 11, -10, -11, 12, 0, 0]);
    design.addPosition("b4", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("c4", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("d4", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("e4", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("f4", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("g4", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("h4", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("i4", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("l4", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("m4", [-1, 0, 11, 0, -11, 0, 10, -12]);
    design.addPosition("a3", [0, 1, 11, -10, -11, 12, 0, 0]);
    design.addPosition("b3", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("c3", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("d3", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("e3", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("f3", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("g3", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("h3", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("i3", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("l3", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("m3", [-1, 0, 11, 0, -11, 0, 10, -12]);
    design.addPosition("a2", [0, 1, 11, -10, -11, 12, 0, 0]);
    design.addPosition("b2", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("c2", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("d2", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("e2", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("f2", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("g2", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("h2", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("i2", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("l2", [-1, 1, 11, -10, -11, 12, 10, -12]);
    design.addPosition("m2", [-1, 0, 11, 0, -11, 0, 10, -12]);
    design.addPosition("a1", [0, 1, 0, -10, -11, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -10, -11, 0, 0, -12]);
    design.addPosition("c1", [-1, 1, 0, -10, -11, 0, 0, -12]);
    design.addPosition("d1", [-1, 1, 0, -10, -11, 0, 0, -12]);
    design.addPosition("e1", [-1, 1, 0, -10, -11, 0, 0, -12]);
    design.addPosition("f1", [-1, 1, 0, -10, -11, 0, 0, -12]);
    design.addPosition("g1", [-1, 1, 0, -10, -11, 0, 0, -12]);
    design.addPosition("h1", [-1, 1, 0, -10, -11, 0, 0, -12]);
    design.addPosition("i1", [-1, 1, 0, -10, -11, 0, 0, -12]);
    design.addPosition("l1", [-1, 1, 0, -10, -11, 0, 0, -12]);
    design.addPosition("m1", [-1, 0, 0, 0, -11, 0, 0, -12]);

    design.addZone("first", 1, [66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76]);
    design.addZone("first", 2, [66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76]);
    design.addZone("last", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    design.addZone("last", 2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

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
    design.addCommand(1, ZRF.IF,	13);
    design.addCommand(1, ZRF.IN_ZONE,	0);	// first
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	1);	// last
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-14);
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	0);	// first
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	1);	// last
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end


    design.addPiece("Buffalo", 0);
    design.addMove(0, 0, [2], 0);

    design.addPiece("Dog", 1);
    design.addMove(1, 1, [4, 4], 0);
    design.addMove(1, 1, [7, 7], 0);
    design.addMove(1, 1, [2, 2], 0);
    design.addMove(1, 1, [5, 5], 0);
    design.addMove(1, 1, [0, 0], 0);
    design.addMove(1, 1, [6, 6], 0);
    design.addMove(1, 1, [1, 1], 0);
    design.addMove(1, 1, [3, 3], 0);

    design.addPiece("Cowboy", 2);
    design.addMove(2, 2, [4], 0);
    design.addMove(2, 2, [7], 0);
    design.addMove(2, 2, [2], 0);
    design.addMove(2, 2, [5], 0);
    design.addMove(2, 2, [0], 0);
    design.addMove(2, 2, [6], 0);
    design.addMove(2, 2, [1], 0);
    design.addMove(2, 2, [3], 0);

    design.setup("Black", "Buffalo", 0);
    design.setup("Black", "Buffalo", 1);
    design.setup("Black", "Buffalo", 2);
    design.setup("Black", "Buffalo", 3);
    design.setup("Black", "Buffalo", 4);
    design.setup("Black", "Buffalo", 5);
    design.setup("Black", "Buffalo", 6);
    design.setup("Black", "Buffalo", 7);
    design.setup("Black", "Buffalo", 8);
    design.setup("Black", "Buffalo", 9);
    design.setup("Black", "Buffalo", 10);
    design.setup("White", "Cowboy", 60);
    design.setup("White", "Dog", 57);
    design.setup("White", "Dog", 59);
    design.setup("White", "Dog", 61);
    design.setup("White", "Dog", 63);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackBuffalo", "Black Buffalo");
    view.defPiece("WhiteDog", "White Dog");
    view.defPiece("WhiteCowboy", "White Cowboy");
 
    view.defPosition("a7", 2, 2, 50, 50);
    view.defPosition("b7", 52, 2, 50, 50);
    view.defPosition("c7", 102, 2, 50, 50);
    view.defPosition("d7", 152, 2, 50, 50);
    view.defPosition("e7", 202, 2, 50, 50);
    view.defPosition("f7", 252, 2, 50, 50);
    view.defPosition("g7", 302, 2, 50, 50);
    view.defPosition("h7", 352, 2, 50, 50);
    view.defPosition("i7", 402, 2, 50, 50);
    view.defPosition("l7", 452, 2, 50, 50);
    view.defPosition("m7", 502, 2, 50, 50);
    view.defPosition("a6", 2, 52, 50, 50);
    view.defPosition("b6", 52, 52, 50, 50);
    view.defPosition("c6", 102, 52, 50, 50);
    view.defPosition("d6", 152, 52, 50, 50);
    view.defPosition("e6", 202, 52, 50, 50);
    view.defPosition("f6", 252, 52, 50, 50);
    view.defPosition("g6", 302, 52, 50, 50);
    view.defPosition("h6", 352, 52, 50, 50);
    view.defPosition("i6", 402, 52, 50, 50);
    view.defPosition("l6", 452, 52, 50, 50);
    view.defPosition("m6", 502, 52, 50, 50);
    view.defPosition("a5", 2, 102, 50, 50);
    view.defPosition("b5", 52, 102, 50, 50);
    view.defPosition("c5", 102, 102, 50, 50);
    view.defPosition("d5", 152, 102, 50, 50);
    view.defPosition("e5", 202, 102, 50, 50);
    view.defPosition("f5", 252, 102, 50, 50);
    view.defPosition("g5", 302, 102, 50, 50);
    view.defPosition("h5", 352, 102, 50, 50);
    view.defPosition("i5", 402, 102, 50, 50);
    view.defPosition("l5", 452, 102, 50, 50);
    view.defPosition("m5", 502, 102, 50, 50);
    view.defPosition("a4", 2, 152, 50, 50);
    view.defPosition("b4", 52, 152, 50, 50);
    view.defPosition("c4", 102, 152, 50, 50);
    view.defPosition("d4", 152, 152, 50, 50);
    view.defPosition("e4", 202, 152, 50, 50);
    view.defPosition("f4", 252, 152, 50, 50);
    view.defPosition("g4", 302, 152, 50, 50);
    view.defPosition("h4", 352, 152, 50, 50);
    view.defPosition("i4", 402, 152, 50, 50);
    view.defPosition("l4", 452, 152, 50, 50);
    view.defPosition("m4", 502, 152, 50, 50);
    view.defPosition("a3", 2, 202, 50, 50);
    view.defPosition("b3", 52, 202, 50, 50);
    view.defPosition("c3", 102, 202, 50, 50);
    view.defPosition("d3", 152, 202, 50, 50);
    view.defPosition("e3", 202, 202, 50, 50);
    view.defPosition("f3", 252, 202, 50, 50);
    view.defPosition("g3", 302, 202, 50, 50);
    view.defPosition("h3", 352, 202, 50, 50);
    view.defPosition("i3", 402, 202, 50, 50);
    view.defPosition("l3", 452, 202, 50, 50);
    view.defPosition("m3", 502, 202, 50, 50);
    view.defPosition("a2", 2, 252, 50, 50);
    view.defPosition("b2", 52, 252, 50, 50);
    view.defPosition("c2", 102, 252, 50, 50);
    view.defPosition("d2", 152, 252, 50, 50);
    view.defPosition("e2", 202, 252, 50, 50);
    view.defPosition("f2", 252, 252, 50, 50);
    view.defPosition("g2", 302, 252, 50, 50);
    view.defPosition("h2", 352, 252, 50, 50);
    view.defPosition("i2", 402, 252, 50, 50);
    view.defPosition("l2", 452, 252, 50, 50);
    view.defPosition("m2", 502, 252, 50, 50);
    view.defPosition("a1", 2, 302, 50, 50);
    view.defPosition("b1", 52, 302, 50, 50);
    view.defPosition("c1", 102, 302, 50, 50);
    view.defPosition("d1", 152, 302, 50, 50);
    view.defPosition("e1", 202, 302, 50, 50);
    view.defPosition("f1", 252, 302, 50, 50);
    view.defPosition("g1", 302, 302, 50, 50);
    view.defPosition("h1", 352, 302, 50, 50);
    view.defPosition("i1", 402, 302, 50, 50);
    view.defPosition("l1", 452, 302, 50, 50);
    view.defPosition("m1", 502, 302, 50, 50);
}
