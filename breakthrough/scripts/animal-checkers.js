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
    design.checkVersion("zrf", "3.0");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("jungle-extension", "strict");
    design.checkVersion("ko", "situation");
    design.checkVersion("advisor-wait", "15");

    design.addDirection("s"); // 0
    design.addDirection("e"); // 1
    design.addDirection("w"); // 2
    design.addDirection("n"); // 3

    design.addPlayer("Red", [3, 2, 1, 0]);
    design.addPlayer("Green", [0, 1, 2, 3]);

    design.addPosition("N4", [4, 2, 3, 1]);
    design.addPosition("a4", [6, 1, 0, 0]);
    design.addPosition("b4", [6, 1, -1, 0]);
    design.addPosition("c4", [6, 1, -1, 0]);
    design.addPosition("d4", [6, 0, -1, 0]);
    design.addPosition("M4", [17, 15, 16, 14]);
    design.addPosition("N3", [-2, -4, -3, -5]);
    design.addPosition("a3", [6, 1, 0, -6]);
    design.addPosition("b3", [6, 1, -1, -6]);
    design.addPosition("c3", [6, 1, -1, -6]);
    design.addPosition("d3", [6, 0, -1, -6]);
    design.addPosition("M3", [11, 9, 10, 8]);
    design.addPosition("N2", [-8, -10, -9, -11]);
    design.addPosition("a2", [6, 1, 0, -6]);
    design.addPosition("b2", [6, 1, -1, -6]);
    design.addPosition("c2", [6, 1, -1, -6]);
    design.addPosition("d2", [6, 0, -1, -6]);
    design.addPosition("M2", [5, 3, 4, 2]);
    design.addPosition("N1", [-14, -16, -15, -17]);
    design.addPosition("a1", [0, 1, 0, -6]);
    design.addPosition("b1", [0, 1, -1, -6]);
    design.addPosition("c1", [0, 1, -1, -6]);
    design.addPosition("d1", [0, 0, -1, -6]);
    design.addPosition("M1", [-1, -3, -2, -4]);
    design.addPosition("X1", [0, 0, 0, 0]);

    design.addZone("home", 1, [23, 17, 11, 5]);
    design.addZone("home", 2, [18, 12, 6, 0]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	2);	// home
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	1);	// water
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	2);	// home
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.IN_ZONE,	1);	// water
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	1);	// water
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	6);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-7);
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPiece("Rat", 0, 2000);
    design.addAttribute(0, 0, 1);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [1], 0);

    design.addPiece("Cat", 1, 800);
    design.addAttribute(1, 0, 2);
    design.addMove(1, 1, [3], 0);
    design.addMove(1, 1, [0], 0);
    design.addMove(1, 1, [2], 0);
    design.addMove(1, 1, [1], 0);

    design.addPiece("Dog", 2, 900);
    design.addAttribute(2, 0, 3);
    design.addMove(2, 1, [3], 0);
    design.addMove(2, 1, [0], 0);
    design.addMove(2, 1, [2], 0);
    design.addMove(2, 1, [1], 0);

    design.addPiece("Fox", 3, 1000);
    design.addAttribute(3, 0, 4);
    design.addMove(3, 1, [3], 0);
    design.addMove(3, 1, [0], 0);
    design.addMove(3, 1, [2], 0);
    design.addMove(3, 1, [1], 0);

    design.addPiece("Panther", 4, 1100);
    design.addAttribute(4, 0, 5);
    design.addMove(4, 1, [3], 0);
    design.addMove(4, 1, [0], 0);
    design.addMove(4, 1, [2], 0);
    design.addMove(4, 1, [1], 0);
    design.addMove(4, 2, [2, 2], 0);
    design.addMove(4, 2, [1, 1], 0);

    design.addPiece("Tiger", 5, 1200);
    design.addAttribute(5, 0, 7);
    design.addMove(5, 1, [3], 0);
    design.addMove(5, 1, [0], 0);
    design.addMove(5, 1, [2], 0);
    design.addMove(5, 1, [1], 0);
    design.addMove(5, 2, [3, 3], 0);
    design.addMove(5, 2, [0, 0], 0);
    design.addMove(5, 2, [2, 2], 0);
    design.addMove(5, 2, [1, 1], 0);

    design.addPiece("Lion", 6, 1300);
    design.addAttribute(6, 0, 7);
    design.addMove(6, 1, [3], 0);
    design.addMove(6, 1, [0], 0);
    design.addMove(6, 1, [2], 0);
    design.addMove(6, 1, [1], 0);
    design.addMove(6, 2, [3, 3], 0);
    design.addMove(6, 2, [0, 0], 0);
    design.addMove(6, 2, [2, 2], 0);
    design.addMove(6, 2, [1, 1], 0);

    design.addPiece("Elephant", 7, 10000);
    design.addAttribute(7, 0, 8);
    design.addMove(7, 1, [3], 0);
    design.addMove(7, 1, [0], 0);
    design.addMove(7, 1, [2], 0);
    design.addMove(7, 1, [1], 0);

    design.setup("Red", "Elephant", 5);
    design.setup("Red", "Tiger", 11);
    design.setup("Red", "Dog", 17);
    design.setup("Red", "Rat", 23);
    design.setup("Green", "Elephant", 18);
    design.setup("Green", "Tiger", 12);
    design.setup("Green", "Dog", 6);
    design.setup("Green", "Rat", 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedRat", "Red Rat");
    view.defPiece("GreenRat", "Green Rat");
    view.defPiece("RedCat", "Red Cat");
    view.defPiece("GreenCat", "Green Cat");
    view.defPiece("RedDog", "Red Dog");
    view.defPiece("GreenDog", "Green Dog");
    view.defPiece("RedFox", "Red Fox");
    view.defPiece("GreenFox", "Green Fox");
    view.defPiece("RedPanther", "Red Panther");
    view.defPiece("GreenPanther", "Green Panther");
    view.defPiece("RedTiger", "Red Tiger");
    view.defPiece("GreenTiger", "Green Tiger");
    view.defPiece("RedLion", "Red Lion");
    view.defPiece("GreenLion", "Green Lion");
    view.defPiece("RedElephant", "Red Elephant");
    view.defPiece("GreenElephant", "Green Elephant");
 
    view.defPiece("RedRatH", "Red Rat Hint");
    view.defPiece("GreenRatH", "Green Rat Hint");
    view.defPiece("RedDogH", "Red Dog Hint");
    view.defPiece("GreenDogH", "Green Dog Hint");
    view.defPiece("RedTigerH", "Red Tiger Hint");
    view.defPiece("GreenTigerH", "Green Tiger Hint");
    view.defPiece("RedElephantH", "Red Elephant Hint");
    view.defPiece("GreenElephantH", "Green Elephant Hint");

    view.defPosition("N4", 4, 3, 66, 66);
    view.defPosition("a4", 70, 3, 66, 66);
    view.defPosition("b4", 136, 3, 66, 66);
    view.defPosition("c4", 202, 3, 66, 66);
    view.defPosition("d4", 268, 3, 66, 66);
    view.defPosition("M4", 334, 3, 66, 66);
    view.defPosition("N3", 4, 69, 66, 66);
    view.defPosition("a3", 70, 69, 66, 66);
    view.defPosition("b3", 136, 69, 66, 66);
    view.defPosition("c3", 202, 69, 66, 66);
    view.defPosition("d3", 268, 69, 66, 66);
    view.defPosition("M3", 334, 69, 66, 66);
    view.defPosition("N2", 4, 135, 66, 66);
    view.defPosition("a2", 70, 135, 66, 66);
    view.defPosition("b2", 136, 135, 66, 66);
    view.defPosition("c2", 202, 135, 66, 66);
    view.defPosition("d2", 268, 135, 66, 66);
    view.defPosition("M2", 334, 135, 66, 66);
    view.defPosition("N1", 4, 201, 66, 66);
    view.defPosition("a1", 70, 201, 66, 66);
    view.defPosition("b1", 136, 201, 66, 66);
    view.defPosition("c1", 202, 201, 66, 66);
    view.defPosition("d1", 268, 201, 66, 66);
    view.defPosition("M1", 334, 201, 66, 66);
    view.defPosition("X1", 70, 270, 470, 60);
}
