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
    design.checkVersion("show-lose", "false");
//  design.checkVersion("advisor-wait", "25");

    design.addDirection("fw");  // 0
    design.addDirection("fn");  // 1
    design.addDirection("fse"); // 2
    design.addDirection("fsw"); // 3
    design.addDirection("fne"); // 4
    design.addDirection("fs");  // 5
    design.addDirection("fnw"); // 6
    design.addDirection("fe");  // 7
    design.addDirection("e");   // 8
    design.addDirection("s");   // 9
    design.addDirection("nw");  // 10
    design.addDirection("ne");  // 11
    design.addDirection("sw");  // 12
    design.addDirection("n");   // 13
    design.addDirection("se");  // 14
    design.addDirection("w");   // 15

    design.addPlayer("Red", [7, 5, 6, 4, 3, 1, 2, 0, 0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Blue", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

    design.addPosition("a8", [0, 0, 8, 0, 0, 7, 0, 1, 1, 7, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b8", [-1, 0, 8, 6, 0, 7, 0, 1, 1, 7, 0, 0, 0, 0, 0, -1]);
    design.addPosition("c8", [-1, 0, 8, 6, 0, 7, 0, 1, 1, 7, 0, 0, 0, 0, 0, -1]);
    design.addPosition("d8", [-1, 0, 8, 6, 0, 7, 0, 1, 1, 7, 0, 0, 0, 0, 0, -1]);
    design.addPosition("e8", [-1, 0, 8, 6, 0, 7, 0, 1, 1, 7, 0, 0, 0, 0, 0, -1]);
    design.addPosition("f8", [-1, 0, 8, 6, 0, 7, 0, 1, 1, 7, 0, 0, 0, 0, 0, -1]);
    design.addPosition("g8", [-1, 0, 0, 6, 0, 7, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, -7, 8, 0, -6, 7, 0, 1, 0, 7, 0, 0, 0, -7, 0, 0]);
    design.addPosition("b7", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 7, -8, 0, 0, 0, 0, 0]);
    design.addPosition("c7", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 7, 0, 0, 0, -7, 0, -1]);
    design.addPosition("d7", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 7, 0, 0, 0, 0, 0, -1]);
    design.addPosition("e7", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 7, 0, 0, 0, -7, 0, -1]);
    design.addPosition("f7", [-1, -7, 8, 6, -6, 7, -8, 1, 0, 7, 0, 0, 0, 0, 0, -1]);
    design.addPosition("g7", [-1, -7, 0, 6, 0, 7, -8, 0, 0, 7, 0, 0, 0, -7, 0, 0]);
    design.addPosition("a6", [0, -7, 8, 0, -6, 7, 0, 1, 1, 7, 0, 0, 0, -7, 0, 0]);
    design.addPosition("b6", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 7, 0, 0, 0, -7, 0, -1]);
    design.addPosition("c6", [-1, -7, 8, 6, -6, 7, -8, 1, 0, 0, -8, -6, 6, 0, 8, 0]);
    design.addPosition("d6", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("e6", [-1, -7, 8, 6, -6, 7, -8, 1, 0, 0, -8, -6, 6, 0, 8, 0]);
    design.addPosition("f6", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 0, 0, 0, 0, -7, 0, -1]);
    design.addPosition("g6", [-1, -7, 0, 6, 0, 7, -8, 0, 0, 7, 0, 0, 0, -7, 0, -1]);
    design.addPosition("a5", [0, -7, 8, 0, -6, 7, 0, 1, 1, 0, 0, -6, 0, 0, 8, 0]);
    design.addPosition("b5", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 7, 0, 0, 0, -7, 0, 0]);
    design.addPosition("d5", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 7, -8, -6, 6, -7, 8, -1]);
    design.addPosition("e5", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 7, 0, 0, 0, -7, 0, 0]);
    design.addPosition("f5", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 7, 0, 0, 0, -7, 0, -1]);
    design.addPosition("g5", [-1, -7, 0, 6, 0, 7, -8, 0, 0, 7, 0, 0, 0, -7, 0, 0]);
    design.addPosition("a4", [0, -7, 8, 0, -6, 7, 0, 1, 0, 7, 0, 0, 0, -7, 0, 0]);
    design.addPosition("b4", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 7, 0, 0, 0, -7, 0, -1]);
    design.addPosition("c4", [-1, -7, 8, 6, -6, 7, -8, 1, 0, 7, 0, 0, 0, -7, 0, -1]);
    design.addPosition("d4", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 7, -8, -6, 6, -7, 8, -1]);
    design.addPosition("e4", [-1, -7, 8, 6, -6, 7, -8, 1, 0, 7, 0, 0, 0, -7, 0, -1]);
    design.addPosition("f4", [-1, -7, 8, 6, -6, 7, -8, 1, 0, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("g4", [-1, -7, 0, 6, 0, 7, -8, 0, 0, 0, -8, 0, 6, 0, 0, -1]);
    design.addPosition("a3", [0, -7, 8, 0, -6, 7, 0, 1, 1, 7, 0, 0, 0, -7, 0, 0]);
    design.addPosition("b3", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 7, 0, 0, 0, 0, 0, -1]);
    design.addPosition("c3", [-1, -7, 8, 6, -6, 7, -8, 1, 0, 0, -8, -6, 6, 0, 8, 0]);
    design.addPosition("d3", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("e3", [-1, -7, 8, 6, -6, 7, -8, 1, 0, 0, -8, -6, 6, 0, 8, 0]);
    design.addPosition("f3", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 7, 0, 0, 0, -7, 0, -1]);
    design.addPosition("g3", [-1, -7, 0, 6, 0, 7, -8, 0, 0, 7, 0, 0, 0, -7, 0, -1]);
    design.addPosition("a2", [0, -7, 8, 0, -6, 7, 0, 1, 0, 7, 0, 0, 0, -7, 0, 0]);
    design.addPosition("b2", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 0, 0, 0, 0, -7, 0, 0]);
    design.addPosition("c2", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 7, 0, 0, 0, -7, 0, -1]);
    design.addPosition("d2", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 0, 0, 0, 0, -7, 0, -1]);
    design.addPosition("e2", [-1, -7, 8, 6, -6, 7, -8, 1, 1, 7, 0, 0, 0, -7, 0, -1]);
    design.addPosition("f2", [-1, -7, 8, 6, -6, 7, -8, 1, 0, 0, 0, 0, 0, -7, 8, -1]);
    design.addPosition("g2", [-1, -7, 0, 6, 0, 7, -8, 0, 0, 7, 0, 0, 0, -7, 0, 0]);
    design.addPosition("a1", [0, -7, 0, 0, -6, 0, 0, 1, 0, 0, 0, 0, 0, -7, 0, 0]);
    design.addPosition("b1", [-1, -7, 0, 0, -6, 0, -8, 1, 1, 0, 0, 0, 0, -7, 0, -1]);
    design.addPosition("c1", [-1, -7, 0, 0, -6, 0, -8, 1, 1, 0, 0, 0, 0, -7, 0, -1]);
    design.addPosition("d1", [-1, -7, 0, 0, -6, 0, -8, 1, 1, 0, 0, 0, 0, -7, 0, -1]);
    design.addPosition("e1", [-1, -7, 0, 0, -6, 0, -8, 1, 1, 0, 0, 0, 0, -7, 0, -1]);
    design.addPosition("f1", [-1, -7, 0, 0, -6, 0, -8, 1, 1, 0, 0, 0, 0, -7, 0, -1]);
    design.addPosition("g1", [-1, -7, 0, 0, 0, 0, -8, 0, 0, 0, 0, 0, 0, -7, 0, -1]);

    design.addZone("promotion-zone", 1, [1, 2, 4, 5]);
    design.addZone("promotion-zone", 2, [50, 51, 53, 54]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// promotion-zone
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	1);	// Numskull
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	7);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-8);
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPiece("Ninny", 0, 100);
    design.addMove(0, 0, [13], 0);
    design.addMove(0, 0, [8], 0);
    design.addMove(0, 0, [15], 0);
    design.addMove(0, 0, [9], 0);
    design.addMove(0, 0, [10], 0);
    design.addMove(0, 0, [11], 0);
    design.addMove(0, 0, [12], 0);
    design.addMove(0, 0, [14], 0);

    design.addPiece("Numskull", 1, 1000);
    design.addMove(1, 1, [13, 1], 0);
    design.addMove(1, 1, [8, 7], 0);
    design.addMove(1, 1, [15, 0], 0);
    design.addMove(1, 1, [9, 5], 0);
    design.addMove(1, 1, [10, 6], 0);
    design.addMove(1, 1, [11, 4], 0);
    design.addMove(1, 1, [12, 3], 0);
    design.addMove(1, 1, [14, 2], 0);

    design.addPiece("Brain", 2, 20000);
    design.addMove(2, 2, [13], 0);
    design.addMove(2, 2, [8], 0);
    design.addMove(2, 2, [15], 0);
    design.addMove(2, 2, [9], 0);
    design.addMove(2, 2, [10], 0);
    design.addMove(2, 2, [11], 0);
    design.addMove(2, 2, [12], 0);
    design.addMove(2, 2, [14], 0);

    design.setup("Red", "Ninny", 42);
    design.setup("Red", "Ninny", 43);
    design.setup("Red", "Ninny", 44);
    design.setup("Red", "Ninny", 45);
    design.setup("Red", "Ninny", 46);
    design.setup("Red", "Ninny", 47);
    design.setup("Red", "Ninny", 48);
    design.setup("Red", "Numskull", 50);
    design.setup("Red", "Numskull", 51);
    design.setup("Red", "Numskull", 53);
    design.setup("Red", "Numskull", 54);
    design.setup("Red", "Brain", 52);
    design.setup("Blue", "Ninny", 7);
    design.setup("Blue", "Ninny", 8);
    design.setup("Blue", "Ninny", 9);
    design.setup("Blue", "Ninny", 10);
    design.setup("Blue", "Ninny", 11);
    design.setup("Blue", "Ninny", 12);
    design.setup("Blue", "Ninny", 13);
    design.setup("Blue", "Numskull", 1);
    design.setup("Blue", "Numskull", 2);
    design.setup("Blue", "Numskull", 4);
    design.setup("Blue", "Numskull", 5);
    design.setup("Blue", "Brain", 3);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedNinny", "Red Ninny");
    view.defPiece("BlueNinny", "Blue Ninny");
    view.defPiece("RedNumskull", "Red Numskull");
    view.defPiece("BlueNumskull", "Blue Numskull");
    view.defPiece("RedBrain", "Red Brain");
    view.defPiece("BlueBrain", "Blue Brain");
 
    view.defPosition("a8", 2, 2, 59, 59);
    view.defPosition("b8", 62, 2, 59, 59);
    view.defPosition("c8", 122, 2, 59, 59);
    view.defPosition("d8", 182, 2, 59, 59);
    view.defPosition("e8", 242, 2, 59, 59);
    view.defPosition("f8", 302, 2, 59, 59);
    view.defPosition("g8", 362, 2, 59, 59);
    view.defPosition("a7", 2, 62, 59, 59);
    view.defPosition("b7", 62, 62, 59, 59);
    view.defPosition("c7", 122, 62, 59, 59);
    view.defPosition("d7", 182, 62, 59, 59);
    view.defPosition("e7", 242, 62, 59, 59);
    view.defPosition("f7", 302, 62, 59, 59);
    view.defPosition("g7", 362, 62, 59, 59);
    view.defPosition("a6", 2, 122, 59, 59);
    view.defPosition("b6", 62, 122, 59, 59);
    view.defPosition("c6", 122, 122, 59, 59);
    view.defPosition("d6", 182, 122, 59, 59);
    view.defPosition("e6", 242, 122, 59, 59);
    view.defPosition("f6", 302, 122, 59, 59);
    view.defPosition("g6", 362, 122, 59, 59);
    view.defPosition("a5", 2, 182, 59, 59);
    view.defPosition("b5", 62, 182, 59, 59);
    view.defPosition("c5", 122, 182, 59, 59);
    view.defPosition("d5", 182, 182, 59, 59);
    view.defPosition("e5", 242, 182, 59, 59);
    view.defPosition("f5", 302, 182, 59, 59);
    view.defPosition("g5", 362, 182, 59, 59);
    view.defPosition("a4", 2, 242, 59, 59);
    view.defPosition("b4", 62, 242, 59, 59);
    view.defPosition("c4", 122, 242, 59, 59);
    view.defPosition("d4", 182, 242, 59, 59);
    view.defPosition("e4", 242, 242, 59, 59);
    view.defPosition("f4", 302, 242, 59, 59);
    view.defPosition("g4", 362, 242, 59, 59);
    view.defPosition("a3", 2, 302, 59, 59);
    view.defPosition("b3", 62, 302, 59, 59);
    view.defPosition("c3", 122, 302, 59, 59);
    view.defPosition("d3", 182, 302, 59, 59);
    view.defPosition("e3", 242, 302, 59, 59);
    view.defPosition("f3", 302, 302, 59, 59);
    view.defPosition("g3", 362, 302, 59, 59);
    view.defPosition("a2", 2, 362, 59, 59);
    view.defPosition("b2", 62, 362, 59, 59);
    view.defPosition("c2", 122, 362, 59, 59);
    view.defPosition("d2", 182, 362, 59, 59);
    view.defPosition("e2", 242, 362, 59, 59);
    view.defPosition("f2", 302, 362, 59, 59);
    view.defPosition("g2", 362, 362, 59, 59);
    view.defPosition("a1", 2, 422, 59, 59);
    view.defPosition("b1", 62, 422, 59, 59);
    view.defPosition("c1", 122, 422, 59, 59);
    view.defPosition("d1", 182, 422, 59, 59);
    view.defPosition("e1", 242, 422, 59, 59);
    view.defPosition("f1", 302, 422, 59, 59);
    view.defPosition("g1", 362, 422, 59, 59);
}
