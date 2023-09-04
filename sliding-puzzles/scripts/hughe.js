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
    design.checkVersion("z2j", "1");
    design.checkVersion("zrf", "3.0");
    design.checkVersion("smart-moves", "from");
    design.checkVersion("sliding-puzzle", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("You", [1, 0, 3, 2]);

    design.addPosition("a4", [0, 1, 3, 0]);
    design.addPosition("b4", [-1, 1, 3, 0]);
    design.addPosition("c4", [-1, 0, 3, 0]);
    design.addPosition("a3", [0, 1, 3, -3]);
    design.addPosition("b3", [-1, 1, 3, -3]);
    design.addPosition("c3", [-1, 0, 3, -3]);
    design.addPosition("a2", [0, 1, 3, -3]);
    design.addPosition("b2", [-1, 1, 3, -3]);
    design.addPosition("c2", [-1, 0, 3, -3]);
    design.addPosition("a1", [0, 1, 0, -3]);
    design.addPosition("b1", [-1, 1, 0, -3]);
    design.addPosition("c1", [-1, 0, 0, -3]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("R00101", 0);
    design.addAttribute(0, 0, 1);
    design.addAttribute(0, 1, 'R0010');
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [1], 0);

    design.addPiece("R00011", 1);
    design.addAttribute(1, 0, 1);
    design.addAttribute(1, 1, 'R0001');
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [1], 0);

    design.addPiece("B00002", 2);
    design.addAttribute(2, 0, 2);
    design.addAttribute(2, 1, 'B0000');
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 0, [1], 0);

    design.addPiece("B00003", 3);
    design.addAttribute(3, 0, 3);
    design.addAttribute(3, 1, 'B0000');
    design.addMove(3, 0, [3], 0);
    design.addMove(3, 0, [2], 0);
    design.addMove(3, 0, [0], 0);
    design.addMove(3, 0, [1], 0);

    design.addPiece("B00004", 4);
    design.addAttribute(4, 0, 4);
    design.addAttribute(4, 1, 'B0000');
    design.addMove(4, 0, [3], 0);
    design.addMove(4, 0, [2], 0);
    design.addMove(4, 0, [0], 0);
    design.addMove(4, 0, [1], 0);

    design.addPiece("B01005", 5);
    design.addAttribute(5, 0, 5);
    design.addAttribute(5, 1, 'B0100');
    design.addMove(5, 0, [3], 0);
    design.addMove(5, 0, [2], 0);
    design.addMove(5, 0, [0], 0);
    design.addMove(5, 0, [1], 0);

    design.addPiece("B10005", 6);
    design.addAttribute(6, 0, 5);
    design.addAttribute(6, 1, 'B1000');
    design.addMove(6, 0, [3], 0);
    design.addMove(6, 0, [2], 0);
    design.addMove(6, 0, [0], 0);
    design.addMove(6, 0, [1], 0);

    design.addPiece("B01006", 7);
    design.addAttribute(7, 0, 6);
    design.addAttribute(7, 1, 'B0100');
    design.addMove(7, 0, [3], 0);
    design.addMove(7, 0, [2], 0);
    design.addMove(7, 0, [0], 0);
    design.addMove(7, 0, [1], 0);

    design.addPiece("B10006", 8);
    design.addAttribute(8, 0, 6);
    design.addAttribute(8, 1, 'B1000');
    design.addMove(8, 0, [3], 0);
    design.addMove(8, 0, [2], 0);
    design.addMove(8, 0, [0], 0);
    design.addMove(8, 0, [1], 0);

    design.addPiece("B00007", 9);
    design.addAttribute(9, 0, 7);
    design.addAttribute(9, 1, 'B0000');
    design.addMove(9, 0, [3], 0);
    design.addMove(9, 0, [2], 0);
    design.addMove(9, 0, [0], 0);
    design.addMove(9, 0, [1], 0);

    design.setup("You", "R00101", 0);
    design.setup("You", "R00011", 3);
    design.setup("You", "B00002", 2);
    design.setup("You", "B00003", 5);
    design.setup("You", "B00004", 6);
    design.setup("You", "B01005", 7);
    design.setup("You", "B10005", 8);
    design.setup("You", "B01006", 9);
    design.setup("You", "B10006", 10);
    design.setup("You", "B00007", 11);

    design.goal(0, "You", "R00101", [8]);
    design.goal(0, "You", "R00011", [11]);
}

Dagaz.View.configure = function(view) {
    view.defPiece("YouR00101", "You R00101");
    view.defPiece("YouR00011", "You R00011");
    view.defPiece("YouB00002", "You B00002");
    view.defPiece("YouB00003", "You B00003");
    view.defPiece("YouB00004", "You B00004");
    view.defPiece("YouB01005", "You B01005");
    view.defPiece("YouB10005", "You B10005");
    view.defPiece("YouB01006", "You B01006");
    view.defPiece("YouB10006", "You B10006");
    view.defPiece("YouB00007", "You B00007"); 

    view.defPosition("a4", 0, 0, 100, 100);
    view.defPosition("b4", 100, 0, 100, 100);
    view.defPosition("c4", 200, 0, 100, 100);
    view.defPosition("a3", 0, 100, 100, 100);
    view.defPosition("b3", 100, 100, 100, 100);
    view.defPosition("c3", 200, 100, 100, 100);
    view.defPosition("a2", 0, 200, 100, 100);
    view.defPosition("b2", 100, 200, 100, 100);
    view.defPosition("c2", 200, 200, 100, 100);
    view.defPosition("a1", 0, 300, 100, 100);
    view.defPosition("b1", 100, 300, 100, 100);
    view.defPosition("c1", 200, 300, 100, 100);
}
