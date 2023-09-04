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

    design.addPosition("a4", [0, 1, 6, 0]);
    design.addPosition("b4", [-1, 1, 6, 0]);
    design.addPosition("c4", [-1, 1, 6, 0]);
    design.addPosition("d4", [-1, 1, 6, 0]);
    design.addPosition("e4", [-1, 1, 6, 0]);
    design.addPosition("f4", [-1, 0, 6, 0]);
    design.addPosition("a3", [0, 1, 6, -6]);
    design.addPosition("b3", [-1, 1, 6, -6]);
    design.addPosition("c3", [-1, 1, 6, -6]);
    design.addPosition("d3", [-1, 1, 6, -6]);
    design.addPosition("e3", [-1, 1, 6, -6]);
    design.addPosition("f3", [-1, 0, 6, -6]);
    design.addPosition("a2", [0, 1, 6, -6]);
    design.addPosition("b2", [-1, 1, 6, -6]);
    design.addPosition("c2", [-1, 1, 6, -6]);
    design.addPosition("d2", [-1, 1, 6, -6]);
    design.addPosition("e2", [-1, 1, 6, -6]);
    design.addPosition("f2", [-1, 0, 6, -6]);
    design.addPosition("a1", [0, 1, 0, -6]);
    design.addPosition("b1", [-1, 1, 0, -6]);
    design.addPosition("c1", [-1, 1, 0, -6]);
    design.addPosition("d1", [-1, 1, 0, -6]);
    design.addPosition("e1", [-1, 1, 0, -6]);
    design.addPosition("f1", [-1, 0, 0, -6]);


    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end


    design.addPiece("R0110F1", 0);
    design.addAttribute(0, 0, 1);
    design.addAttribute(0, 1, 'R0110F');
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [1], 0);

    design.addPiece("R1010F1", 1);
    design.addAttribute(1, 0, 1);
    design.addAttribute(1, 1, 'R1010F');
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [1], 0);

    design.addPiece("R0101F1", 2);
    design.addAttribute(2, 0, 1);
    design.addAttribute(2, 1, 'R0101F');
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 0, [1], 0);

    design.addPiece("R1001F1", 3);
    design.addAttribute(3, 0, 1);
    design.addAttribute(3, 1, 'R1001F');
    design.addMove(3, 0, [3], 0);
    design.addMove(3, 0, [2], 0);
    design.addMove(3, 0, [0], 0);
    design.addMove(3, 0, [1], 0);

    design.addPiece("B00102", 4);
    design.addAttribute(4, 0, 2);
    design.addAttribute(4, 1, 'B0010');
    design.addMove(4, 0, [3], 0);
    design.addMove(4, 0, [2], 0);
    design.addMove(4, 0, [0], 0);
    design.addMove(4, 0, [1], 0);

    design.addPiece("B00012", 5);
    design.addAttribute(5, 0, 2);
    design.addAttribute(5, 1, 'B0001');
    design.addMove(5, 0, [3], 0);
    design.addMove(5, 0, [2], 0);
    design.addMove(5, 0, [0], 0);
    design.addMove(5, 0, [1], 0);

    design.addPiece("B00103", 6);
    design.addAttribute(6, 0, 3);
    design.addAttribute(6, 1, 'B0010');
    design.addMove(6, 0, [3], 0);
    design.addMove(6, 0, [2], 0);
    design.addMove(6, 0, [0], 0);
    design.addMove(6, 0, [1], 0);

    design.addPiece("B00013", 7);
    design.addAttribute(7, 0, 3);
    design.addAttribute(7, 1, 'B0001');
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

    design.addPiece("B01005", 10);
    design.addAttribute(10, 0, 5);
    design.addAttribute(10, 1, 'B0100');
    design.addMove(10, 0, [3], 0);
    design.addMove(10, 0, [2], 0);
    design.addMove(10, 0, [0], 0);
    design.addMove(10, 0, [1], 0);

    design.addPiece("B10005", 11);
    design.addAttribute(11, 0, 5);
    design.addAttribute(11, 1, 'B1000');
    design.addMove(11, 0, [3], 0);
    design.addMove(11, 0, [2], 0);
    design.addMove(11, 0, [0], 0);
    design.addMove(11, 0, [1], 0);

    design.addPiece("B00006", 12);
    design.addAttribute(12, 0, 6);
    design.addAttribute(12, 1, 'B0000');
    design.addMove(12, 0, [3], 0);
    design.addMove(12, 0, [2], 0);
    design.addMove(12, 0, [0], 0);
    design.addMove(12, 0, [1], 0);

    design.addPiece("B01007", 13);
    design.addAttribute(13, 0, 7);
    design.addAttribute(13, 1, 'B0100');
    design.addMove(13, 0, [3], 0);
    design.addMove(13, 0, [2], 0);
    design.addMove(13, 0, [0], 0);
    design.addMove(13, 0, [1], 0);

    design.addPiece("B10007", 14);
    design.addAttribute(14, 0, 7);
    design.addAttribute(14, 1, 'B1000');
    design.addMove(14, 0, [3], 0);
    design.addMove(14, 0, [2], 0);
    design.addMove(14, 0, [0], 0);
    design.addMove(14, 0, [1], 0);

    design.addPiece("B00108", 15);
    design.addAttribute(15, 0, 8);
    design.addAttribute(15, 1, 'B0010');
    design.addMove(15, 0, [3], 0);
    design.addMove(15, 0, [2], 0);
    design.addMove(15, 0, [0], 0);
    design.addMove(15, 0, [1], 0);

    design.addPiece("B00018", 16);
    design.addAttribute(16, 0, 8);
    design.addAttribute(16, 1, 'B0001');
    design.addMove(16, 0, [3], 0);
    design.addMove(16, 0, [2], 0);
    design.addMove(16, 0, [0], 0);
    design.addMove(16, 0, [1], 0);

    design.addPiece("B00109", 17);
    design.addAttribute(17, 0, 9);
    design.addAttribute(17, 1, 'B0010');
    design.addMove(17, 0, [3], 0);
    design.addMove(17, 0, [2], 0);
    design.addMove(17, 0, [0], 0);
    design.addMove(17, 0, [1], 0);

    design.addPiece("B00019", 18);
    design.addAttribute(18, 0, 9);
    design.addAttribute(18, 1, 'B0001');
    design.addMove(18, 0, [3], 0);
    design.addMove(18, 0, [2], 0);
    design.addMove(18, 0, [0], 0);
    design.addMove(18, 0, [1], 0);

    design.addPiece("B000010", 19);
    design.addAttribute(19, 0, 10);
    design.addAttribute(19, 1, 'B0000');
    design.addMove(19, 0, [3], 0);
    design.addMove(19, 0, [2], 0);
    design.addMove(19, 0, [0], 0);
    design.addMove(19, 0, [1], 0);

    design.addPiece("B010011", 20);
    design.addAttribute(20, 0, 11);
    design.addAttribute(20, 1, 'B0100');
    design.addMove(20, 0, [3], 0);
    design.addMove(20, 0, [2], 0);
    design.addMove(20, 0, [0], 0);
    design.addMove(20, 0, [1], 0);

    design.addPiece("B100011", 21);
    design.addAttribute(21, 0, 11);
    design.addAttribute(21, 1, 'B1000');
    design.addMove(21, 0, [3], 0);
    design.addMove(21, 0, [2], 0);
    design.addMove(21, 0, [0], 0);
    design.addMove(21, 0, [1], 0);

    design.setup("You", "R0110F1", 0);
    design.setup("You", "R1010F1", 1);
    design.setup("You", "R0101F1", 6);
    design.setup("You", "R1001F1", 7);
    design.setup("You", "B00102", 2);
    design.setup("You", "B00012", 8);
    design.setup("You", "B00103", 3);
    design.setup("You", "B00013", 9);
    design.setup("You", "B01004", 4);
    design.setup("You", "B10004", 5);
    design.setup("You", "B01005", 10);
    design.setup("You", "B10005", 11);
    design.setup("You", "B00006", 13);
    design.setup("You", "B01007", 14);
    design.setup("You", "B10007", 15);
    design.setup("You", "B00108", 16);
    design.setup("You", "B00018", 22);
    design.setup("You", "B00109", 17);
    design.setup("You", "B00019", 23);
    design.setup("You", "B000010", 19);
    design.setup("You", "B010011", 20);
    design.setup("You", "B100011", 21);

    design.goal(0, "You", "R0110F1", [16]);
    design.goal(0, "You", "R1010F1", [17]);
    design.goal(0, "You", "R0101F1", [22]);
    design.goal(0, "You", "R1001F1", [23]);
}

Dagaz.View.configure = function(view) {
    view.defPiece("YouR0110F1", "You R0110F1");
    view.defPiece("YouR1010F1", "You R1010F1");
    view.defPiece("YouR0101F1", "You R0101F1");
    view.defPiece("YouR1001F1", "You R1001F1");
    view.defPiece("YouB00102", "You B00102");
    view.defPiece("YouB00012", "You B00012");
    view.defPiece("YouB00103", "You B00103");
    view.defPiece("YouB00013", "You B00013");
    view.defPiece("YouB01004", "You B01004");
    view.defPiece("YouB10004", "You B10004");
    view.defPiece("YouB01005", "You B01005");
    view.defPiece("YouB10005", "You B10005");
    view.defPiece("YouB00006", "You B00006");
    view.defPiece("YouB01007", "You B01007");
    view.defPiece("YouB10007", "You B10007");
    view.defPiece("YouB00108", "You B00108");
    view.defPiece("YouB00018", "You B00018");
    view.defPiece("YouB00109", "You B00109");
    view.defPiece("YouB00019", "You B00019");
    view.defPiece("YouB000010", "You B000010");
    view.defPiece("YouB010011", "You B010011");
    view.defPiece("YouB100011", "You B100011");
 
    view.defPosition("a4", 0, 0, 100, 100);
    view.defPosition("b4", 100, 0, 100, 100);
    view.defPosition("c4", 200, 0, 100, 100);
    view.defPosition("d4", 300, 0, 100, 100);
    view.defPosition("e4", 400, 0, 100, 100);
    view.defPosition("f4", 500, 0, 100, 100);
    view.defPosition("a3", 0, 100, 100, 100);
    view.defPosition("b3", 100, 100, 100, 100);
    view.defPosition("c3", 200, 100, 100, 100);
    view.defPosition("d3", 300, 100, 100, 100);
    view.defPosition("e3", 400, 100, 100, 100);
    view.defPosition("f3", 500, 100, 100, 100);
    view.defPosition("a2", 0, 200, 100, 100);
    view.defPosition("b2", 100, 200, 100, 100);
    view.defPosition("c2", 200, 200, 100, 100);
    view.defPosition("d2", 300, 200, 100, 100);
    view.defPosition("e2", 400, 200, 100, 100);
    view.defPosition("f2", 500, 200, 100, 100);
    view.defPosition("a1", 0, 300, 100, 100);
    view.defPosition("b1", 100, 300, 100, 100);
    view.defPosition("c1", 200, 300, 100, 100);
    view.defPosition("d1", 300, 300, 100, 100);
    view.defPosition("e1", 400, 300, 100, 100);
    view.defPosition("f1", 500, 300, 100, 100);
}
