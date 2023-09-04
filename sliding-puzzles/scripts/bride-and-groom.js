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
    design.checkVersion("smart-moves", "from");
    design.checkVersion("sliding-puzzle", "true");

    design.addDirection("s"); // 0
    design.addDirection("e"); // 1
    design.addDirection("w"); // 2
    design.addDirection("n"); // 3

    design.addPlayer("You", [3, 2, 1, 0]);

    design.addPosition("a5", [5, 1, 0, 0]);
    design.addPosition("b5", [5, 1, -1, 0]);
    design.addPosition("c5", [5, 1, -1, 0]);
    design.addPosition("d5", [5, 1, -1, 0]);
    design.addPosition("e5", [5, 0, -1, 0]);
    design.addPosition("a4", [5, 1, 0, -5]);
    design.addPosition("b4", [5, 1, -1, -5]);
    design.addPosition("c4", [5, 1, -1, -5]);
    design.addPosition("d4", [5, 1, -1, -5]);
    design.addPosition("e4", [5, 0, -1, -5]);
    design.addPosition("a3", [5, 1, 0, -5]);
    design.addPosition("b3", [5, 1, -1, -5]);
    design.addPosition("c3", [5, 1, -1, -5]);
    design.addPosition("d3", [5, 1, -1, -5]);
    design.addPosition("e3", [5, 0, -1, -5]);
    design.addPosition("a2", [5, 1, 0, -5]);
    design.addPosition("b2", [5, 1, -1, -5]);
    design.addPosition("c2", [5, 1, -1, -5]);
    design.addPosition("d2", [5, 1, -1, -5]);
    design.addPosition("e2", [5, 0, -1, -5]);
    design.addPosition("a1", [0, 1, 0, -5]);
    design.addPosition("b1", [0, 1, -1, -5]);
    design.addPosition("c1", [0, 1, -1, -5]);
    design.addPosition("d1", [0, 1, -1, -5]);
    design.addPosition("e1", [0, 0, -1, -5]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("R01101", 0);
    design.addAttribute(0, 0, 1);
    design.addAttribute(0, 1, 'R0110');
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [1], 0);

    design.addPiece("R10001", 1);
    design.addAttribute(1, 0, 1);
    design.addAttribute(1, 1, 'R1000');
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [1], 0);

    design.addPiece("R00011", 2);
    design.addAttribute(2, 0, 1);
    design.addAttribute(2, 1, 'R0001');
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 0, [1], 0);

    design.addPiece("B01002", 3);
    design.addAttribute(3, 0, 2);
    design.addAttribute(3, 1, 'B0100');
    design.addMove(3, 0, [3], 0);
    design.addMove(3, 0, [0], 0);
    design.addMove(3, 0, [2], 0);
    design.addMove(3, 0, [1], 0);

    design.addPiece("B10002", 4);
    design.addAttribute(4, 0, 2);
    design.addAttribute(4, 1, 'B1000');
    design.addMove(4, 0, [3], 0);
    design.addMove(4, 0, [0], 0);
    design.addMove(4, 0, [2], 0);
    design.addMove(4, 0, [1], 0);

    design.addPiece("B00103", 5);
    design.addAttribute(5, 0, 3);
    design.addAttribute(5, 1, 'B0010');
    design.addMove(5, 0, [3], 0);
    design.addMove(5, 0, [0], 0);
    design.addMove(5, 0, [2], 0);
    design.addMove(5, 0, [1], 0);

    design.addPiece("B00013", 6);
    design.addAttribute(6, 0, 3);
    design.addAttribute(6, 1, 'B0001');
    design.addMove(6, 0, [3], 0);
    design.addMove(6, 0, [0], 0);
    design.addMove(6, 0, [2], 0);
    design.addMove(6, 0, [1], 0);

    design.addPiece("B01004", 7);
    design.addAttribute(7, 0, 4);
    design.addAttribute(7, 1, 'B0100');
    design.addMove(7, 0, [3], 0);
    design.addMove(7, 0, [0], 0);
    design.addMove(7, 0, [2], 0);
    design.addMove(7, 0, [1], 0);

    design.addPiece("B10004", 8);
    design.addAttribute(8, 0, 4);
    design.addAttribute(8, 1, 'B1000');
    design.addMove(8, 0, [3], 0);
    design.addMove(8, 0, [0], 0);
    design.addMove(8, 0, [2], 0);
    design.addMove(8, 0, [1], 0);

    design.addPiece("B01005", 9);
    design.addAttribute(9, 0, 5);
    design.addAttribute(9, 1, 'B0100');
    design.addMove(9, 0, [3], 0);
    design.addMove(9, 0, [0], 0);
    design.addMove(9, 0, [2], 0);
    design.addMove(9, 0, [1], 0);

    design.addPiece("B10005", 10);
    design.addAttribute(10, 0, 5);
    design.addAttribute(10, 1, 'B1000');
    design.addMove(10, 0, [3], 0);
    design.addMove(10, 0, [0], 0);
    design.addMove(10, 0, [2], 0);
    design.addMove(10, 0, [1], 0);

    design.addPiece("B01006", 11);
    design.addAttribute(11, 0, 6);
    design.addAttribute(11, 1, 'B0100');
    design.addMove(11, 0, [3], 0);
    design.addMove(11, 0, [0], 0);
    design.addMove(11, 0, [2], 0);
    design.addMove(11, 0, [1], 0);

    design.addPiece("B10006", 12);
    design.addAttribute(12, 0, 6);
    design.addAttribute(12, 1, 'B1000');
    design.addMove(12, 0, [3], 0);
    design.addMove(12, 0, [0], 0);
    design.addMove(12, 0, [2], 0);
    design.addMove(12, 0, [1], 0);

    design.addPiece("B00107", 13);
    design.addAttribute(13, 0, 7);
    design.addAttribute(13, 1, 'B0010');
    design.addMove(13, 0, [3], 0);
    design.addMove(13, 0, [0], 0);
    design.addMove(13, 0, [2], 0);
    design.addMove(13, 0, [1], 0);

    design.addPiece("B00017", 14);
    design.addAttribute(14, 0, 7);
    design.addAttribute(14, 1, 'B0001');
    design.addMove(14, 0, [3], 0);
    design.addMove(14, 0, [0], 0);
    design.addMove(14, 0, [2], 0);
    design.addMove(14, 0, [1], 0);

    design.addPiece("B00008", 15);
    design.addAttribute(15, 0, 8);
    design.addAttribute(15, 1, 'B0000');
    design.addMove(15, 0, [3], 0);
    design.addMove(15, 0, [0], 0);
    design.addMove(15, 0, [2], 0);
    design.addMove(15, 0, [1], 0);

    design.addPiece("B00009", 16);
    design.addAttribute(16, 0, 9);
    design.addAttribute(16, 1, 'B0000');
    design.addMove(16, 0, [3], 0);
    design.addMove(16, 0, [0], 0);
    design.addMove(16, 0, [2], 0);
    design.addMove(16, 0, [1], 0);

    design.addPiece("R0010A", 17);
    design.addAttribute(17, 0, 10);
    design.addAttribute(17, 1, 'R0010');
    design.addMove(17, 0, [3], 0);
    design.addMove(17, 0, [0], 0);
    design.addMove(17, 0, [2], 0);
    design.addMove(17, 0, [1], 0);

    design.addPiece("R1001A", 18);
    design.addAttribute(18, 0, 10);
    design.addAttribute(18, 1, 'R1001');
    design.addMove(18, 0, [3], 0);
    design.addMove(18, 0, [0], 0);
    design.addMove(18, 0, [2], 0);
    design.addMove(18, 0, [1], 0);

    design.addPiece("R0100A", 19);
    design.addAttribute(19, 0, 10);
    design.addAttribute(19, 1, 'R0100');
    design.addMove(19, 0, [3], 0);
    design.addMove(19, 0, [0], 0);
    design.addMove(19, 0, [2], 0);
    design.addMove(19, 0, [1], 0);

    design.addPiece("B0100B", 20);
    design.addAttribute(20, 0, 11);
    design.addAttribute(20, 1, 'B0100');
    design.addMove(20, 0, [3], 0);
    design.addMove(20, 0, [0], 0);
    design.addMove(20, 0, [2], 0);
    design.addMove(20, 0, [1], 0);

    design.addPiece("B1000B", 21);
    design.addAttribute(21, 0, 11);
    design.addAttribute(21, 1, 'B1000');
    design.addMove(21, 0, [3], 0);
    design.addMove(21, 0, [0], 0);
    design.addMove(21, 0, [2], 0);
    design.addMove(21, 0, [1], 0);

    design.setup("You", "R01101", 0);
    design.setup("You", "R10001", 1);
    design.setup("You", "R00011", 5);
    design.setup("You", "B01002", 2);
    design.setup("You", "B10002", 3);
    design.setup("You", "B00103", 4);
    design.setup("You", "B00013", 9);
    design.setup("You", "B01004", 6);
    design.setup("You", "B10004", 7);
    design.setup("You", "B01005", 10);
    design.setup("You", "B10005", 11);
    design.setup("You", "B01006", 13);
    design.setup("You", "B10006", 14);
    design.setup("You", "B00107", 15);
    design.setup("You", "B00017", 20);
    design.setup("You", "B00008", 17);
    design.setup("You", "B00009", 18);
    design.setup("You", "R0010A", 19);
    design.setup("You", "R1001A", 24);
    design.setup("You", "R0100A", 23);
    design.setup("You", "B0100B", 21);
    design.setup("You", "B1000B", 22);
}

Dagaz.View.configure = function(view) {
    view.defPiece("YouR01101", "You R01101");
    view.defPiece("YouR10001", "You R10001");
    view.defPiece("YouR00011", "You R00011");
    view.defPiece("YouB01002", "You B01002");
    view.defPiece("YouB10002", "You B10002");
    view.defPiece("YouB00103", "You B00103");
    view.defPiece("YouB00013", "You B00013");
    view.defPiece("YouB01004", "You B01004");
    view.defPiece("YouB10004", "You B10004");
    view.defPiece("YouB01005", "You B01005");
    view.defPiece("YouB10005", "You B10005");
    view.defPiece("YouB01006", "You B01006");
    view.defPiece("YouB10006", "You B10006");
    view.defPiece("YouB00107", "You B00107");
    view.defPiece("YouB00017", "You B00017");
    view.defPiece("YouB00008", "You B00008");
    view.defPiece("YouB00009", "You B00009");
    view.defPiece("YouR0010A", "You R0010A");
    view.defPiece("YouR1001A", "You R1001A");
    view.defPiece("YouR0100A", "You R0100A");
    view.defPiece("YouB0100B", "You B0100B");
    view.defPiece("YouB1000B", "You B1000B");
 
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
