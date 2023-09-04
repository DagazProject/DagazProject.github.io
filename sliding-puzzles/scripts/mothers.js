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

    design.addPosition("a5", [0, 1, 5, 0]);
    design.addPosition("b5", [-1, 1, 5, 0]);
    design.addPosition("c5", [-1, 1, 5, 0]);
    design.addPosition("d5", [-1, 1, 5, 0]);
    design.addPosition("e5", [-1, 0, 5, 0]);
    design.addPosition("a4", [0, 1, 5, -5]);
    design.addPosition("b4", [-1, 1, 5, -5]);
    design.addPosition("c4", [-1, 1, 5, -5]);
    design.addPosition("d4", [-1, 1, 5, -5]);
    design.addPosition("e4", [-1, 0, 5, -5]);
    design.addPosition("a3", [0, 1, 5, -5]);
    design.addPosition("b3", [-1, 1, 5, -5]);
    design.addPosition("c3", [-1, 1, 5, -5]);
    design.addPosition("d3", [-1, 1, 5, -5]);
    design.addPosition("e3", [-1, 0, 5, -5]);
    design.addPosition("a2", [0, 1, 5, -5]);
    design.addPosition("b2", [-1, 1, 5, -5]);
    design.addPosition("c2", [-1, 1, 5, -5]);
    design.addPosition("d2", [-1, 1, 5, -5]);
    design.addPosition("e2", [-1, 0, 5, -5]);
    design.addPosition("a1", [0, 1, 0, -5]);
    design.addPosition("b1", [-1, 1, 0, -5]);
    design.addPosition("c1", [-1, 1, 0, -5]);
    design.addPosition("d1", [-1, 1, 0, -5]);
    design.addPosition("e1", [-1, 0, 0, -5]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("B01001", 0);
    design.addAttribute(0, 0, 1);
    design.addAttribute(0, 1, 'B0100');
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [1], 0);

    design.addPiece("B00111", 1);
    design.addAttribute(1, 0, 1);
    design.addAttribute(1, 1, 'B0011');
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [1], 0);

    design.addPiece("B10001", 2);
    design.addAttribute(2, 0, 1);
    design.addAttribute(2, 1, 'B1000');
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 0, [1], 0);

    design.addPiece("R01002", 3);
    design.addAttribute(3, 0, 2);
    design.addAttribute(3, 1, 'R0100');
    design.addMove(3, 0, [3], 0);
    design.addMove(3, 0, [2], 0);
    design.addMove(3, 0, [0], 0);
    design.addMove(3, 0, [1], 0);

    design.addPiece("R10102", 4);
    design.addAttribute(4, 0, 2);
    design.addAttribute(4, 1, 'R1010');
    design.addMove(4, 0, [3], 0);
    design.addMove(4, 0, [2], 0);
    design.addMove(4, 0, [0], 0);
    design.addMove(4, 0, [1], 0);

    design.addPiece("R00012", 5);
    design.addAttribute(5, 0, 2);
    design.addAttribute(5, 1, 'R0001');
    design.addMove(5, 0, [3], 0);
    design.addMove(5, 0, [2], 0);
    design.addMove(5, 0, [0], 0);
    design.addMove(5, 0, [1], 0);

    design.addPiece("B01003", 6);
    design.addAttribute(6, 0, 3);
    design.addAttribute(6, 1, 'B0100');
    design.addMove(6, 0, [3], 0);
    design.addMove(6, 0, [2], 0);
    design.addMove(6, 0, [0], 0);
    design.addMove(6, 0, [1], 0);

    design.addPiece("B10003", 7);
    design.addAttribute(7, 0, 3);
    design.addAttribute(7, 1, 'B1000');
    design.addMove(7, 0, [3], 0);
    design.addMove(7, 0, [2], 0);
    design.addMove(7, 0, [0], 0);
    design.addMove(7, 0, [1], 0);

    design.addPiece("B01004", 8);
    design.addAttribute(8, 0, 4);
    design.addAttribute(8, 1, 'B0100');
    design.addMove(8, 0, [3], 0);
    design.addMove(8, 0, [2], 0);
    design.addMove(8, 0, [0], 0);
    design.addMove(8, 0, [1], 0);

    design.addPiece("B10004", 9);
    design.addAttribute(9, 0, 4);
    design.addAttribute(9, 1, 'B1000');
    design.addMove(9, 0, [3], 0);
    design.addMove(9, 0, [2], 0);
    design.addMove(9, 0, [0], 0);
    design.addMove(9, 0, [1], 0);

    design.addPiece("R00105", 10);
    design.addAttribute(10, 0, 5);
    design.addAttribute(10, 1, 'R0010');
    design.addMove(10, 0, [3], 0);
    design.addMove(10, 0, [2], 0);
    design.addMove(10, 0, [0], 0);
    design.addMove(10, 0, [1], 0);

    design.addPiece("R01015", 11);
    design.addAttribute(11, 0, 5);
    design.addAttribute(11, 1, 'R0101');
    design.addMove(11, 0, [3], 0);
    design.addMove(11, 0, [2], 0);
    design.addMove(11, 0, [0], 0);
    design.addMove(11, 0, [1], 0);

    design.addPiece("R10005", 12);
    design.addAttribute(12, 0, 5);
    design.addAttribute(12, 1, 'R1000');
    design.addMove(12, 0, [3], 0);
    design.addMove(12, 0, [2], 0);
    design.addMove(12, 0, [0], 0);
    design.addMove(12, 0, [1], 0);

    design.addPiece("B01006", 13);
    design.addAttribute(13, 0, 6);
    design.addAttribute(13, 1, 'B0100');
    design.addMove(13, 0, [3], 0);
    design.addMove(13, 0, [2], 0);
    design.addMove(13, 0, [0], 0);
    design.addMove(13, 0, [1], 0);

    design.addPiece("B10006", 14);
    design.addAttribute(14, 0, 6);
    design.addAttribute(14, 1, 'B1000');
    design.addMove(14, 0, [3], 0);
    design.addMove(14, 0, [2], 0);
    design.addMove(14, 0, [0], 0);
    design.addMove(14, 0, [1], 0);

    design.addPiece("B01007", 15);
    design.addAttribute(15, 0, 7);
    design.addAttribute(15, 1, 'B0100');
    design.addMove(15, 0, [3], 0);
    design.addMove(15, 0, [2], 0);
    design.addMove(15, 0, [0], 0);
    design.addMove(15, 0, [1], 0);

    design.addPiece("B10007", 16);
    design.addAttribute(16, 0, 7);
    design.addAttribute(16, 1, 'B1000');
    design.addMove(16, 0, [3], 0);
    design.addMove(16, 0, [2], 0);
    design.addMove(16, 0, [0], 0);
    design.addMove(16, 0, [1], 0);

    design.addPiece("B01008", 17);
    design.addAttribute(17, 0, 8);
    design.addAttribute(17, 1, 'B0100');
    design.addMove(17, 0, [3], 0);
    design.addMove(17, 0, [2], 0);
    design.addMove(17, 0, [0], 0);
    design.addMove(17, 0, [1], 0);

    design.addPiece("B00118", 18);
    design.addAttribute(18, 0, 8);
    design.addAttribute(18, 1, 'B0011');
    design.addMove(18, 0, [3], 0);
    design.addMove(18, 0, [2], 0);
    design.addMove(18, 0, [0], 0);
    design.addMove(18, 0, [1], 0);

    design.addPiece("B10008", 19);
    design.addAttribute(19, 0, 8);
    design.addAttribute(19, 1, 'B1000');
    design.addMove(19, 0, [3], 0);
    design.addMove(19, 0, [2], 0);
    design.addMove(19, 0, [0], 0);
    design.addMove(19, 0, [1], 0);

    design.addPiece("B00009", 20);
    design.addAttribute(20, 0, 9);
    design.addAttribute(20, 1, 'B0000');
    design.addMove(20, 0, [3], 0);
    design.addMove(20, 0, [2], 0);
    design.addMove(20, 0, [0], 0);
    design.addMove(20, 0, [1], 0);

    design.addPiece("B0000A", 21);
    design.addAttribute(21, 0, 10);
    design.addAttribute(21, 1, 'B0000');
    design.addMove(21, 0, [3], 0);
    design.addMove(21, 0, [2], 0);
    design.addMove(21, 0, [0], 0);
    design.addMove(21, 0, [1], 0);

    design.setup("You", "B01001", 0);
    design.setup("You", "B00111", 1);
    design.setup("You", "B10001", 2);
    design.setup("You", "R01002", 3);
    design.setup("You", "R10102", 4);
    design.setup("You", "R00012", 9);
    design.setup("You", "B01003", 5);
    design.setup("You", "B10003", 6);
    design.setup("You", "B01004", 7);
    design.setup("You", "B10004", 8);
    design.setup("You", "R00105", 10);
    design.setup("You", "R01015", 15);
    design.setup("You", "R10005", 16);
    design.setup("You", "B01006", 11);
    design.setup("You", "B10006", 12);
    design.setup("You", "B01007", 13);
    design.setup("You", "B10007", 14);
    design.setup("You", "B01008", 17);
    design.setup("You", "B00118", 18);
    design.setup("You", "B10008", 19);
    design.setup("You", "B00009", 20);
    design.setup("You", "B0000A", 24);

    design.goal(0, "You", "R01002", [3]);
    design.goal(0, "You", "R10102", [4]);
    design.goal(0, "You", "R00012", [9]);
    design.goal(0, "You", "R00105", [2]);
    design.goal(0, "You", "R01015", [7]);
    design.goal(0, "You", "R10005", [8]);
    design.goal(1, "You", "R01002", [3]);
    design.goal(1, "You", "R10102", [4]);
    design.goal(1, "You", "R00012", [9]);
    design.goal(1, "You", "R00105", [8]);
    design.goal(1, "You", "R01015", [13]);
    design.goal(1, "You", "R10005", [14]);
}

Dagaz.View.configure = function(view) {
    view.defPiece("YouB01001", "You B01001");
    view.defPiece("YouB00111", "You B00111");
    view.defPiece("YouB10001", "You B10001");
    view.defPiece("YouR01002", "You R01002");
    view.defPiece("YouR10102", "You R10102");
    view.defPiece("YouR00012", "You R00012");
    view.defPiece("YouB01003", "You B01003");
    view.defPiece("YouB10003", "You B10003");
    view.defPiece("YouB01004", "You B01004");
    view.defPiece("YouB10004", "You B10004");
    view.defPiece("YouR00105", "You R00105");
    view.defPiece("YouR01015", "You R01015");
    view.defPiece("YouR10005", "You R10005");
    view.defPiece("YouB01006", "You B01006");
    view.defPiece("YouB10006", "You B10006");
    view.defPiece("YouB01007", "You B01007");
    view.defPiece("YouB10007", "You B10007");
    view.defPiece("YouB01008", "You B01008");
    view.defPiece("YouB00118", "You B00118");
    view.defPiece("YouB10008", "You B10008");
    view.defPiece("YouB00009", "You B00009");
    view.defPiece("YouB0000A", "You B0000A");
 
    view.defPosition("a5", 0, 0, 100, 100);
    view.defPosition("b5", 100, 0, 100, 100);
    view.defPosition("c5", 200, 0, 100, 100);
    view.defPosition("d5", 300, 0, 100, 100);
    view.defPosition("e5", 400, 0, 100, 100);
    view.defPosition("a4", 0, 100, 100, 100);
    view.defPosition("b4", 100, 100, 100, 100);
    view.defPosition("c4", 200, 100, 100, 100);
    view.defPosition("d4", 300, 100, 100, 100);
    view.defPosition("e4", 400, 100, 100, 100);
    view.defPosition("a3", 0, 200, 100, 100);
    view.defPosition("b3", 100, 200, 100, 100);
    view.defPosition("c3", 200, 200, 100, 100);
    view.defPosition("d3", 300, 200, 100, 100);
    view.defPosition("e3", 400, 200, 100, 100);
    view.defPosition("a2", 0, 300, 100, 100);
    view.defPosition("b2", 100, 300, 100, 100);
    view.defPosition("c2", 200, 300, 100, 100);
    view.defPosition("d2", 300, 300, 100, 100);
    view.defPosition("e2", 400, 300, 100, 100);
    view.defPosition("a1", 0, 400, 100, 100);
    view.defPosition("b1", 100, 400, 100, 100);
    view.defPosition("c1", 200, 400, 100, 100);
    view.defPosition("d1", 300, 400, 100, 100);
    view.defPosition("e1", 400, 400, 100, 100);
}
