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

    design.addPosition("a5", [0, 1, 4, 0]);
    design.addPosition("b5", [-1, 1, 4, 0]);
    design.addPosition("c5", [-1, 1, 4, 0]);
    design.addPosition("d5", [-1, 0, 4, 0]);
    design.addPosition("a4", [0, 1, 4, -4]);
    design.addPosition("b4", [-1, 1, 4, -4]);
    design.addPosition("c4", [-1, 1, 4, -4]);
    design.addPosition("d4", [-1, 0, 4, -4]);
    design.addPosition("a3", [0, 1, 4, -4]);
    design.addPosition("b3", [-1, 1, 4, -4]);
    design.addPosition("c3", [-1, 1, 4, -4]);
    design.addPosition("d3", [-1, 0, 4, -4]);
    design.addPosition("a2", [0, 1, 4, -4]);
    design.addPosition("b2", [-1, 1, 4, -4]);
    design.addPosition("c2", [-1, 1, 4, -4]);
    design.addPosition("d2", [-1, 0, 4, -4]);
    design.addPosition("a1", [0, 1, 0, -4]);
    design.addPosition("b1", [-1, 1, 0, -4]);
    design.addPosition("c1", [-1, 1, 0, -4]);
    design.addPosition("d1", [-1, 0, 0, -4]);


    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end


    design.addPiece("B00001", 0);
    design.addAttribute(0, 0, 1);
    design.addAttribute(0, 1, 'B0000');
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [1], 0);

    design.addPiece("B00002", 1);
    design.addAttribute(1, 0, 2);
    design.addAttribute(1, 1, 'B0000');
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [1], 0);

    design.addPiece("B00003", 2);
    design.addAttribute(2, 0, 3);
    design.addAttribute(2, 1, 'B0000');
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 0, [1], 0);

    design.addPiece("B00104", 3);
    design.addAttribute(3, 0, 4);
    design.addAttribute(3, 1, 'B0010');
    design.addMove(3, 0, [3], 0);
    design.addMove(3, 0, [2], 0);
    design.addMove(3, 0, [0], 0);
    design.addMove(3, 0, [1], 0);

    design.addPiece("B00014", 4);
    design.addAttribute(4, 0, 4);
    design.addAttribute(4, 1, 'B0001');
    design.addMove(4, 0, [3], 0);
    design.addMove(4, 0, [2], 0);
    design.addMove(4, 0, [0], 0);
    design.addMove(4, 0, [1], 0);

    design.addPiece("R0110F5", 5);
    design.addAttribute(5, 0, 5);
    design.addAttribute(5, 1, 'R0110F');
    design.addMove(5, 0, [3], 0);
    design.addMove(5, 0, [2], 0);
    design.addMove(5, 0, [0], 0);
    design.addMove(5, 0, [1], 0);

    design.addPiece("R1010F5", 6);
    design.addAttribute(6, 0, 5);
    design.addAttribute(6, 1, 'R1010F');
    design.addMove(6, 0, [3], 0);
    design.addMove(6, 0, [2], 0);
    design.addMove(6, 0, [0], 0);
    design.addMove(6, 0, [1], 0);

    design.addPiece("R0101F5", 7);
    design.addAttribute(7, 0, 5);
    design.addAttribute(7, 1, 'R0101F');
    design.addMove(7, 0, [3], 0);
    design.addMove(7, 0, [2], 0);
    design.addMove(7, 0, [0], 0);
    design.addMove(7, 0, [1], 0);

    design.addPiece("R1001F5", 8);
    design.addAttribute(8, 0, 5);
    design.addAttribute(8, 1, 'R1001F');
    design.addMove(8, 0, [3], 0);
    design.addMove(8, 0, [2], 0);
    design.addMove(8, 0, [0], 0);
    design.addMove(8, 0, [1], 0);

    design.addPiece("B00106", 9);
    design.addAttribute(9, 0, 6);
    design.addAttribute(9, 1, 'B0010');
    design.addMove(9, 0, [3], 0);
    design.addMove(9, 0, [2], 0);
    design.addMove(9, 0, [0], 0);
    design.addMove(9, 0, [1], 0);

    design.addPiece("B00016", 10);
    design.addAttribute(10, 0, 6);
    design.addAttribute(10, 1, 'B0001');
    design.addMove(10, 0, [3], 0);
    design.addMove(10, 0, [2], 0);
    design.addMove(10, 0, [0], 0);
    design.addMove(10, 0, [1], 0);

    design.addPiece("B00107", 11);
    design.addAttribute(11, 0, 7);
    design.addAttribute(11, 1, 'B0010');
    design.addMove(11, 0, [3], 0);
    design.addMove(11, 0, [2], 0);
    design.addMove(11, 0, [0], 0);
    design.addMove(11, 0, [1], 0);

    design.addPiece("B00017", 12);
    design.addAttribute(12, 0, 7);
    design.addAttribute(12, 1, 'B0001');
    design.addMove(12, 0, [3], 0);
    design.addMove(12, 0, [2], 0);
    design.addMove(12, 0, [0], 0);
    design.addMove(12, 0, [1], 0);

    design.addPiece("B00008", 13);
    design.addAttribute(13, 0, 8);
    design.addAttribute(13, 1, 'B0000');
    design.addMove(13, 0, [3], 0);
    design.addMove(13, 0, [2], 0);
    design.addMove(13, 0, [0], 0);
    design.addMove(13, 0, [1], 0);

    design.addPiece("B01009", 14);
    design.addAttribute(14, 0, 9);
    design.addAttribute(14, 1, 'B0100');
    design.addMove(14, 0, [3], 0);
    design.addMove(14, 0, [2], 0);
    design.addMove(14, 0, [0], 0);
    design.addMove(14, 0, [1], 0);

    design.addPiece("B10009", 15);
    design.addAttribute(15, 0, 9);
    design.addAttribute(15, 1, 'B1000');
    design.addMove(15, 0, [3], 0);
    design.addMove(15, 0, [2], 0);
    design.addMove(15, 0, [0], 0);
    design.addMove(15, 0, [1], 0);

    design.addPiece("B010010", 16);
    design.addAttribute(16, 0, 10);
    design.addAttribute(16, 1, 'B0100');
    design.addMove(16, 0, [3], 0);
    design.addMove(16, 0, [2], 0);
    design.addMove(16, 0, [0], 0);
    design.addMove(16, 0, [1], 0);

    design.addPiece("B100010", 17);
    design.addAttribute(17, 0, 10);
    design.addAttribute(17, 1, 'B1000');
    design.addMove(17, 0, [3], 0);
    design.addMove(17, 0, [2], 0);
    design.addMove(17, 0, [0], 0);
    design.addMove(17, 0, [1], 0);

    design.setup("You", "B00001", 0);
    design.setup("You", "B00002", 1);
    design.setup("You", "B00003", 2);
    design.setup("You", "B00104", 3);
    design.setup("You", "B00014", 7);
    design.setup("You", "R0110F5", 4);
    design.setup("You", "R1010F5", 5);
    design.setup("You", "R0101F5", 8);
    design.setup("You", "R1001F5", 9);
    design.setup("You", "B00106", 6);
    design.setup("You", "B00016", 10);
    design.setup("You", "B00107", 11);
    design.setup("You", "B00017", 15);
    design.setup("You", "B00008", 12);
    design.setup("You", "B01009", 13);
    design.setup("You", "B10009", 14);
    design.setup("You", "B010010", 18);
    design.setup("You", "B100010", 19);

    design.goal(0, "You", "R0110F5", [13]);
    design.goal(0, "You", "R1010F5", [14]);
    design.goal(0, "You", "R0101F5", [17]);
    design.goal(0, "You", "R1001F5", [18]);
}

Dagaz.View.configure = function(view) {
    view.defPiece("YouB00001", "You B00001");
    view.defPiece("YouB00002", "You B00002");
    view.defPiece("YouB00003", "You B00003");
    view.defPiece("YouB00104", "You B00104");
    view.defPiece("YouB00014", "You B00014");
    view.defPiece("YouR0110F5", "You R0110F5");
    view.defPiece("YouR1010F5", "You R1010F5");
    view.defPiece("YouR0101F5", "You R0101F5");
    view.defPiece("YouR1001F5", "You R1001F5");
    view.defPiece("YouB00106", "You B00106");
    view.defPiece("YouB00016", "You B00016");
    view.defPiece("YouB00107", "You B00107");
    view.defPiece("YouB00017", "You B00017");
    view.defPiece("YouB00008", "You B00008");
    view.defPiece("YouB01009", "You B01009");
    view.defPiece("YouB10009", "You B10009");
    view.defPiece("YouB010010", "You B010010");
    view.defPiece("YouB100010", "You B100010");
 
    view.defPosition("a5", 0, 0, 100, 100);
    view.defPosition("b5", 100, 0, 100, 100);
    view.defPosition("c5", 200, 0, 100, 100);
    view.defPosition("d5", 300, 0, 100, 100);
    view.defPosition("a4", 0, 100, 100, 100);
    view.defPosition("b4", 100, 100, 100, 100);
    view.defPosition("c4", 200, 100, 100, 100);
    view.defPosition("d4", 300, 100, 100, 100);
    view.defPosition("a3", 0, 200, 100, 100);
    view.defPosition("b3", 100, 200, 100, 100);
    view.defPosition("c3", 200, 200, 100, 100);
    view.defPosition("d3", 300, 200, 100, 100);
    view.defPosition("a2", 0, 300, 100, 100);
    view.defPosition("b2", 100, 300, 100, 100);
    view.defPosition("c2", 200, 300, 100, 100);
    view.defPosition("d2", 300, 300, 100, 100);
    view.defPosition("a1", 0, 400, 100, 100);
    view.defPosition("b1", 100, 400, 100, 100);
    view.defPosition("c1", 200, 400, 100, 100);
    view.defPosition("d1", 300, 400, 100, 100);
}
