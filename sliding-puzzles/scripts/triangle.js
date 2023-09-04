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
    design.checkVersion("smart-moves", "from");
    design.checkVersion("highlight-goals", "false");
    design.checkVersion("sliding-puzzle", "true");

    design.addDirection("w");  // 0
    design.addDirection("e");  // 1
    design.addDirection("ww"); // 2
    design.addDirection("ee"); // 3
    design.addDirection("s");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("n");  // 6
    design.addDirection("se"); // 7
    design.addDirection("sw"); // 8
    design.addDirection("nw"); // 9

    design.addPlayer("You", [1, 0, 3, 2, 6, 8, 4, 9, 5, 7]);

    design.addPosition("a4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d4", [0, 0, 0, 0, 7, 0, 0, 8, 6, 0]);
    design.addPosition("e4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [0, 1, 0, 2, 7, -6, 0, 8, 6, 0]);
    design.addPosition("d3", [-1, 1, 0, 0, 7, 0, -7, 8, 6, 0]);
    design.addPosition("e3", [-1, 0, -2, 0, 7, 0, 0, 8, 6, -8]);
    design.addPosition("f3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 1, 0, 2, 7, -6, 0, 8, 6, 0]);
    design.addPosition("c2", [-1, 1, 0, 2, 7, -6, -7, 8, 6, 0]);
    design.addPosition("d2", [-1, 1, -2, 2, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e2", [-1, 1, -2, 0, 7, 0, -7, 8, 6, -8]);
    design.addPosition("f2", [-1, 0, -2, 0, 7, 0, 0, 8, 6, -8]);
    design.addPosition("g2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, 2, 0, -6, 0, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, 2, 0, -6, -7, 0, 0, 0]);
    design.addPosition("c1", [-1, 1, -2, 2, 0, -6, -7, 0, 0, -8]);
    design.addPosition("d1", [-1, 1, -2, 2, 0, -6, -7, 0, 0, -8]);
    design.addPosition("e1", [-1, 1, -2, 2, 0, -6, -7, 0, 0, -8]);
    design.addPosition("f1", [-1, 1, -2, 0, 0, 0, -7, 0, 0, -8]);
    design.addPosition("g1", [-1, 0, -2, 0, 0, 0, 0, 0, 0, -8]);

    design.addZone("up", 1, [21, 23, 25, 27, 15, 17, 19, 9, 11, 3]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("bu1", 0);
    design.addAttribute(0, 0, 1);
    design.addAttribute(0, 1, 'bu');
    design.addMove(0, 0, [9], 0);
    design.addMove(0, 0, [8], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [2], 0);

    design.addPiece("bb2", 1);
    design.addAttribute(1, 0, 2);
    design.addAttribute(1, 1, 'bb');
    design.addMove(1, 0, [9], 0);
    design.addMove(1, 0, [8], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [2], 0);

    design.addPiece("bt2", 2);
    design.addAttribute(2, 0, 2);
    design.addAttribute(2, 1, 'bt');
    design.addMove(2, 0, [9], 0);
    design.addMove(2, 0, [8], 0);
    design.addMove(2, 0, [5], 0);
    design.addMove(2, 0, [7], 0);
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [2], 0);

    design.addPiece("bu3", 3);
    design.addAttribute(3, 0, 3);
    design.addAttribute(3, 1, 'bu');
    design.addMove(3, 0, [9], 0);
    design.addMove(3, 0, [8], 0);
    design.addMove(3, 0, [5], 0);
    design.addMove(3, 0, [7], 0);
    design.addMove(3, 0, [3], 0);
    design.addMove(3, 0, [2], 0);

    design.addPiece("bb4", 4);
    design.addAttribute(4, 0, 4);
    design.addAttribute(4, 1, 'bb');
    design.addMove(4, 0, [9], 0);
    design.addMove(4, 0, [8], 0);
    design.addMove(4, 0, [5], 0);
    design.addMove(4, 0, [7], 0);
    design.addMove(4, 0, [3], 0);
    design.addMove(4, 0, [2], 0);

    design.addPiece("bt4", 5);
    design.addAttribute(5, 0, 4);
    design.addAttribute(5, 1, 'bt');
    design.addMove(5, 0, [9], 0);
    design.addMove(5, 0, [8], 0);
    design.addMove(5, 0, [5], 0);
    design.addMove(5, 0, [7], 0);
    design.addMove(5, 0, [3], 0);
    design.addMove(5, 0, [2], 0);

    design.addPiece("gd5", 6);
    design.addAttribute(6, 0, 5);
    design.addAttribute(6, 1, 'gd');
    design.addMove(6, 0, [9], 0);
    design.addMove(6, 0, [8], 0);
    design.addMove(6, 0, [5], 0);
    design.addMove(6, 0, [7], 0);
    design.addMove(6, 0, [3], 0);
    design.addMove(6, 0, [2], 0);

    design.addPiece("gu6", 7);
    design.addAttribute(7, 0, 6);
    design.addAttribute(7, 1, 'gu');
    design.addMove(7, 0, [9], 0);
    design.addMove(7, 0, [8], 0);
    design.addMove(7, 0, [5], 0);
    design.addMove(7, 0, [7], 0);
    design.addMove(7, 0, [3], 0);
    design.addMove(7, 0, [2], 0);

    design.addPiece("ru7", 8);
    design.addAttribute(8, 0, 7);
    design.addAttribute(8, 1, 'ru');
    design.addMove(8, 0, [9], 0);
    design.addMove(8, 0, [8], 0);
    design.addMove(8, 0, [5], 0);
    design.addMove(8, 0, [7], 0);
    design.addMove(8, 0, [3], 0);
    design.addMove(8, 0, [2], 0);

    design.addPiece("rb8", 9);
    design.addAttribute(9, 0, 8);
    design.addAttribute(9, 1, 'rb');
    design.addMove(9, 0, [9], 0);
    design.addMove(9, 0, [8], 0);
    design.addMove(9, 0, [5], 0);
    design.addMove(9, 0, [7], 0);
    design.addMove(9, 0, [3], 0);
    design.addMove(9, 0, [2], 0);

    design.addPiece("rt8", 10);
    design.addAttribute(10, 0, 8);
    design.addAttribute(10, 1, 'rt');
    design.addMove(10, 0, [9], 0);
    design.addMove(10, 0, [8], 0);
    design.addMove(10, 0, [5], 0);
    design.addMove(10, 0, [7], 0);
    design.addMove(10, 0, [3], 0);
    design.addMove(10, 0, [2], 0);

    design.addPiece("rb9", 11);
    design.addAttribute(11, 0, 9);
    design.addAttribute(11, 1, 'rb');
    design.addMove(11, 0, [9], 0);
    design.addMove(11, 0, [8], 0);
    design.addMove(11, 0, [5], 0);
    design.addMove(11, 0, [7], 0);
    design.addMove(11, 0, [3], 0);
    design.addMove(11, 0, [2], 0);

    design.addPiece("rt9", 12);
    design.addAttribute(12, 0, 9);
    design.addAttribute(12, 1, 'rt');
    design.addMove(12, 0, [9], 0);
    design.addMove(12, 0, [8], 0);
    design.addMove(12, 0, [5], 0);
    design.addMove(12, 0, [7], 0);
    design.addMove(12, 0, [3], 0);
    design.addMove(12, 0, [2], 0);

    design.addPiece("ruA", 13);
    design.addAttribute(13, 0, 10);
    design.addAttribute(13, 1, 'ru');
    design.addMove(13, 0, [9], 0);
    design.addMove(13, 0, [8], 0);
    design.addMove(13, 0, [5], 0);
    design.addMove(13, 0, [7], 0);
    design.addMove(13, 0, [3], 0);
    design.addMove(13, 0, [2], 0);

    design.setup("You", "bu1", 21);
    design.setup("You", "bb2", 22);
    design.setup("You", "bt2", 15);
    design.setup("You", "bu3", 23);
    design.setup("You", "bb4", 16);
    design.setup("You", "bt4", 9);
    design.setup("You", "gd5", 10);
    design.setup("You", "gu6", 3);
    design.setup("You", "ru7", 25);
    design.setup("You", "rb8", 18);
    design.setup("You", "rt8", 11);
    design.setup("You", "rb9", 26);
    design.setup("You", "rt9", 19);
    design.setup("You", "ruA", 27);

    design.goal(0, "You", "bu1", [27]);
    design.goal(0, "You", "bb2", [26]);
    design.goal(0, "You", "bt2", [19]);
    design.goal(0, "You", "bu3", [25]);
    design.goal(0, "You", "bb4", [18]);
    design.goal(0, "You", "bt4", [11]);
    design.goal(0, "You", "gd5", [10]);
    design.goal(0, "You", "gu6", [3]);
    design.goal(0, "You", "ru7", [23]);
    design.goal(0, "You", "rb8", [16]);
    design.goal(0, "You", "rt8", [9]);
    design.goal(0, "You", "rb9", [22]);
    design.goal(0, "You", "rt9", [15]);
    design.goal(0, "You", "ruA", [21]);
}

Dagaz.View.configure = function(view) {
    view.defPiece("Youbu1", "You bu1");
    view.defPiece("Youbb2", "You bb2");
    view.defPiece("Youbt2", "You bt2");
    view.defPiece("Youbu3", "You bu3");
    view.defPiece("Youbb4", "You bb4");
    view.defPiece("Youbt4", "You bt4");
    view.defPiece("Yougd5", "You gd5");
    view.defPiece("Yougu6", "You gu6");
    view.defPiece("Youru7", "You ru7");
    view.defPiece("Yourb8", "You rb8");
    view.defPiece("Yourt8", "You rt8");
    view.defPiece("Yourb9", "You rb9");
    view.defPiece("Yourt9", "You rt9");
    view.defPiece("YouruA", "You ruA");
 
    view.defPosition("a4", 0, 0, 92, 90);
    view.defPosition("b4", 46, 0, 92, 90);
    view.defPosition("c4", 92, 0, 92, 90);
    view.defPosition("d4", 138, 0, 92, 90);
    view.defPosition("e4", 184, 0, 92, 90);
    view.defPosition("f4", 230, 0, 92, 90);
    view.defPosition("g4", 276, 0, 92, 90);
    view.defPosition("a3", 0, 90, 92, 90);
    view.defPosition("b3", 46, 90, 92, 90);
    view.defPosition("c3", 92, 90, 92, 90);
    view.defPosition("d3", 138, 90, 92, 90);
    view.defPosition("e3", 184, 90, 92, 90);
    view.defPosition("f3", 230, 90, 92, 90);
    view.defPosition("g3", 276, 90, 92, 90);
    view.defPosition("a2", 0, 180, 92, 90);
    view.defPosition("b2", 46, 180, 92, 90);
    view.defPosition("c2", 92, 180, 92, 90);
    view.defPosition("d2", 138, 180, 92, 90);
    view.defPosition("e2", 184, 180, 92, 90);
    view.defPosition("f2", 230, 180, 92, 90);
    view.defPosition("g2", 276, 180, 92, 90);
    view.defPosition("a1", 0, 270, 92, 90);
    view.defPosition("b1", 46, 270, 92, 90);
    view.defPosition("c1", 92, 270, 92, 90);
    view.defPosition("d1", 138, 270, 92, 90);
    view.defPosition("e1", 184, 270, 92, 90);
    view.defPosition("f1", 230, 270, 92, 90);
    view.defPosition("g1", 276, 270, 92, 90);
}
