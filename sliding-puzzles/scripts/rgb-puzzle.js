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

    design.addPosition("a6", [0, 1, 6, 0]);
    design.addPosition("b6", [-1, 1, 6, 0]);
    design.addPosition("c6", [-1, 1, 6, 0]);
    design.addPosition("d6", [-1, 1, 6, 0]);
    design.addPosition("e6", [-1, 1, 6, 0]);
    design.addPosition("f6", [-1, 0, 6, 0]);
    design.addPosition("a5", [0, 1, 6, -6]);
    design.addPosition("b5", [-1, 1, 6, -6]);
    design.addPosition("c5", [-1, 1, 6, -6]);
    design.addPosition("d5", [-1, 1, 6, -6]);
    design.addPosition("e5", [-1, 1, 6, -6]);
    design.addPosition("f5", [-1, 0, 6, -6]);
    design.addPosition("a4", [0, 1, 6, -6]);
    design.addPosition("b4", [-1, 1, 6, -6]);
    design.addPosition("c4", [-1, 1, 6, -6]);
    design.addPosition("d4", [-1, 1, 6, -6]);
    design.addPosition("e4", [-1, 1, 6, -6]);
    design.addPosition("f4", [-1, 0, 6, -6]);
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

    design.addPiece("B01002", 4);
    design.addAttribute(4, 0, 2);
    design.addAttribute(4, 1, 'B0100');
    design.addMove(4, 0, [3], 0);
    design.addMove(4, 0, [2], 0);
    design.addMove(4, 0, [0], 0);
    design.addMove(4, 0, [1], 0);

    design.addPiece("B10002", 5);
    design.addAttribute(5, 0, 2);
    design.addAttribute(5, 1, 'B1000');
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

    design.addPiece("B00104", 8);
    design.addAttribute(8, 0, 4);
    design.addAttribute(8, 1, 'B0010');
    design.addMove(8, 0, [3], 0);
    design.addMove(8, 0, [2], 0);
    design.addMove(8, 0, [0], 0);
    design.addMove(8, 0, [1], 0);

    design.addPiece("B00014", 9);
    design.addAttribute(9, 0, 4);
    design.addAttribute(9, 1, 'B0001');
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

    design.addPiece("B00007", 13);
    design.addAttribute(13, 0, 7);
    design.addAttribute(13, 1, 'B0000');
    design.addMove(13, 0, [3], 0);
    design.addMove(13, 0, [2], 0);
    design.addMove(13, 0, [0], 0);
    design.addMove(13, 0, [1], 0);

    design.addPiece("B0110F8", 14);
    design.addAttribute(14, 0, 8);
    design.addAttribute(14, 1, 'B0110F');
    design.addMove(14, 0, [3], 0);
    design.addMove(14, 0, [2], 0);
    design.addMove(14, 0, [0], 0);
    design.addMove(14, 0, [1], 0);

    design.addPiece("B1010F8", 15);
    design.addAttribute(15, 0, 8);
    design.addAttribute(15, 1, 'B1010F');
    design.addMove(15, 0, [3], 0);
    design.addMove(15, 0, [2], 0);
    design.addMove(15, 0, [0], 0);
    design.addMove(15, 0, [1], 0);

    design.addPiece("B0101F8", 16);
    design.addAttribute(16, 0, 8);
    design.addAttribute(16, 1, 'B0101F');
    design.addMove(16, 0, [3], 0);
    design.addMove(16, 0, [2], 0);
    design.addMove(16, 0, [0], 0);
    design.addMove(16, 0, [1], 0);

    design.addPiece("B1001F8", 17);
    design.addAttribute(17, 0, 8);
    design.addAttribute(17, 1, 'B1001F');
    design.addMove(17, 0, [3], 0);
    design.addMove(17, 0, [2], 0);
    design.addMove(17, 0, [0], 0);
    design.addMove(17, 0, [1], 0);

    design.addPiece("B01009", 18);
    design.addAttribute(18, 0, 9);
    design.addAttribute(18, 1, 'B0100');
    design.addMove(18, 0, [3], 0);
    design.addMove(18, 0, [2], 0);
    design.addMove(18, 0, [0], 0);
    design.addMove(18, 0, [1], 0);

    design.addPiece("B10009", 19);
    design.addAttribute(19, 0, 9);
    design.addAttribute(19, 1, 'B1000');
    design.addMove(19, 0, [3], 0);
    design.addMove(19, 0, [2], 0);
    design.addMove(19, 0, [0], 0);
    design.addMove(19, 0, [1], 0);

    design.addPiece("B010010", 20);
    design.addAttribute(20, 0, 10);
    design.addAttribute(20, 1, 'B0100');
    design.addMove(20, 0, [3], 0);
    design.addMove(20, 0, [2], 0);
    design.addMove(20, 0, [0], 0);
    design.addMove(20, 0, [1], 0);

    design.addPiece("B100010", 21);
    design.addAttribute(21, 0, 10);
    design.addAttribute(21, 1, 'B1000');
    design.addMove(21, 0, [3], 0);
    design.addMove(21, 0, [2], 0);
    design.addMove(21, 0, [0], 0);
    design.addMove(21, 0, [1], 0);

    design.addPiece("B010011", 22);
    design.addAttribute(22, 0, 11);
    design.addAttribute(22, 1, 'B0100');
    design.addMove(22, 0, [3], 0);
    design.addMove(22, 0, [2], 0);
    design.addMove(22, 0, [0], 0);
    design.addMove(22, 0, [1], 0);

    design.addPiece("B100011", 23);
    design.addAttribute(23, 0, 11);
    design.addAttribute(23, 1, 'B1000');
    design.addMove(23, 0, [3], 0);
    design.addMove(23, 0, [2], 0);
    design.addMove(23, 0, [0], 0);
    design.addMove(23, 0, [1], 0);

    design.addPiece("B001012", 24);
    design.addAttribute(24, 0, 12);
    design.addAttribute(24, 1, 'B0010');
    design.addMove(24, 0, [3], 0);
    design.addMove(24, 0, [2], 0);
    design.addMove(24, 0, [0], 0);
    design.addMove(24, 0, [1], 0);

    design.addPiece("B000112", 25);
    design.addAttribute(25, 0, 12);
    design.addAttribute(25, 1, 'B0001');
    design.addMove(25, 0, [3], 0);
    design.addMove(25, 0, [2], 0);
    design.addMove(25, 0, [0], 0);
    design.addMove(25, 0, [1], 0);

    design.addPiece("B001013", 26);
    design.addAttribute(26, 0, 13);
    design.addAttribute(26, 1, 'B0010');
    design.addMove(26, 0, [3], 0);
    design.addMove(26, 0, [2], 0);
    design.addMove(26, 0, [0], 0);
    design.addMove(26, 0, [1], 0);

    design.addPiece("B000113", 27);
    design.addAttribute(27, 0, 13);
    design.addAttribute(27, 1, 'B0001');
    design.addMove(27, 0, [3], 0);
    design.addMove(27, 0, [2], 0);
    design.addMove(27, 0, [0], 0);
    design.addMove(27, 0, [1], 0);

    design.addPiece("G0110F14", 28);
    design.addAttribute(28, 0, 14);
    design.addAttribute(28, 1, 'G0110F');
    design.addMove(28, 0, [3], 0);
    design.addMove(28, 0, [2], 0);
    design.addMove(28, 0, [0], 0);
    design.addMove(28, 0, [1], 0);

    design.addPiece("G1010F14", 29);
    design.addAttribute(29, 0, 14);
    design.addAttribute(29, 1, 'G1010F');
    design.addMove(29, 0, [3], 0);
    design.addMove(29, 0, [2], 0);
    design.addMove(29, 0, [0], 0);
    design.addMove(29, 0, [1], 0);

    design.addPiece("G0101F14", 30);
    design.addAttribute(30, 0, 14);
    design.addAttribute(30, 1, 'G0101F');
    design.addMove(30, 0, [3], 0);
    design.addMove(30, 0, [2], 0);
    design.addMove(30, 0, [0], 0);
    design.addMove(30, 0, [1], 0);

    design.addPiece("G1001F14", 31);
    design.addAttribute(31, 0, 14);
    design.addAttribute(31, 1, 'G1001F');
    design.addMove(31, 0, [3], 0);
    design.addMove(31, 0, [2], 0);
    design.addMove(31, 0, [0], 0);
    design.addMove(31, 0, [1], 0);

    design.addPiece("B010015", 32);
    design.addAttribute(32, 0, 15);
    design.addAttribute(32, 1, 'B0100');
    design.addMove(32, 0, [3], 0);
    design.addMove(32, 0, [2], 0);
    design.addMove(32, 0, [0], 0);
    design.addMove(32, 0, [1], 0);

    design.addPiece("B100015", 33);
    design.addAttribute(33, 0, 15);
    design.addAttribute(33, 1, 'B1000');
    design.addMove(33, 0, [3], 0);
    design.addMove(33, 0, [2], 0);
    design.addMove(33, 0, [0], 0);
    design.addMove(33, 0, [1], 0);

    design.setup("You", "R0110F1", 0);
    design.setup("You", "R1010F1", 1);
    design.setup("You", "R0101F1", 6);
    design.setup("You", "R1001F1", 7);
    design.setup("You", "B01002", 2);
    design.setup("You", "B10002", 3);
    design.setup("You", "B00103", 4);
    design.setup("You", "B00013", 10);
    design.setup("You", "B00104", 5);
    design.setup("You", "B00014", 11);
    design.setup("You", "B01005", 8);
    design.setup("You", "B10005", 9);
    design.setup("You", "B00006", 12);
    design.setup("You", "B00007", 13);
    design.setup("You", "B0110F8", 14);
    design.setup("You", "B1010F8", 15);
    design.setup("You", "B0101F8", 20);
    design.setup("You", "B1001F8", 21);
    design.setup("You", "B01009", 16);
    design.setup("You", "B10009", 17);
    design.setup("You", "B010010", 22);
    design.setup("You", "B100010", 23);
    design.setup("You", "B010011", 24);
    design.setup("You", "B100011", 25);
    design.setup("You", "B001012", 26);
    design.setup("You", "B000112", 32);
    design.setup("You", "B001013", 27);
    design.setup("You", "B000113", 33);
    design.setup("You", "G0110F14", 28);
    design.setup("You", "G1010F14", 29);
    design.setup("You", "G0101F14", 34);
    design.setup("You", "G1001F14", 35);
    design.setup("You", "B010015", 30);
    design.setup("You", "B100015", 31);

    design.goal(0, "You", "G0110F14", [0]);
    design.goal(0, "You", "G1010F14", [1]);
    design.goal(0, "You", "G0101F14", [6]);
    design.goal(0, "You", "G1001F14", [7]);
    design.goal(0, "You", "B0110F8", [14]);
    design.goal(0, "You", "B1010F8", [15]);
    design.goal(0, "You", "B0101F8", [20]);
    design.goal(0, "You", "B1001F8", [21]);
    design.goal(0, "You", "R0110F1", [28]);
    design.goal(0, "You", "R1010F1", [29]);
    design.goal(0, "You", "R0101F1", [34]);
    design.goal(0, "You", "R1001F1", [35]);
}

Dagaz.View.configure = function(view) {
    view.defPiece("YouR0110F1", "You R0110F1");
    view.defPiece("YouR1010F1", "You R1010F1");
    view.defPiece("YouR0101F1", "You R0101F1");
    view.defPiece("YouR1001F1", "You R1001F1");
    view.defPiece("YouB01002", "You B01002");
    view.defPiece("YouB10002", "You B10002");
    view.defPiece("YouB00103", "You B00103");
    view.defPiece("YouB00013", "You B00013");
    view.defPiece("YouB00104", "You B00104");
    view.defPiece("YouB00014", "You B00014");
    view.defPiece("YouB01005", "You B01005");
    view.defPiece("YouB10005", "You B10005");
    view.defPiece("YouB00006", "You B00006");
    view.defPiece("YouB00007", "You B00007");
    view.defPiece("YouB0110F8", "You B0110F8");
    view.defPiece("YouB1010F8", "You B1010F8");
    view.defPiece("YouB0101F8", "You B0101F8");
    view.defPiece("YouB1001F8", "You B1001F8");
    view.defPiece("YouB01009", "You B01009");
    view.defPiece("YouB10009", "You B10009");
    view.defPiece("YouB010010", "You B010010");
    view.defPiece("YouB100010", "You B100010");
    view.defPiece("YouB010011", "You B010011");
    view.defPiece("YouB100011", "You B100011");
    view.defPiece("YouB001012", "You B001012");
    view.defPiece("YouB000112", "You B000112");
    view.defPiece("YouB001013", "You B001013");
    view.defPiece("YouB000113", "You B000113");
    view.defPiece("YouG0110F14", "You G0110F14");
    view.defPiece("YouG1010F14", "You G1010F14");
    view.defPiece("YouG0101F14", "You G0101F14");
    view.defPiece("YouG1001F14", "You G1001F14");
    view.defPiece("YouB010015", "You B010015");
    view.defPiece("YouB100015", "You B100015");
 
    view.defPosition("a6", 0, 0, 100, 100);
    view.defPosition("b6", 100, 0, 100, 100);
    view.defPosition("c6", 200, 0, 100, 100);
    view.defPosition("d6", 300, 0, 100, 100);
    view.defPosition("e6", 400, 0, 100, 100);
    view.defPosition("f6", 500, 0, 100, 100);
    view.defPosition("a5", 0, 100, 100, 100);
    view.defPosition("b5", 100, 100, 100, 100);
    view.defPosition("c5", 200, 100, 100, 100);
    view.defPosition("d5", 300, 100, 100, 100);
    view.defPosition("e5", 400, 100, 100, 100);
    view.defPosition("f5", 500, 100, 100, 100);
    view.defPosition("a4", 0, 200, 100, 100);
    view.defPosition("b4", 100, 200, 100, 100);
    view.defPosition("c4", 200, 200, 100, 100);
    view.defPosition("d4", 300, 200, 100, 100);
    view.defPosition("e4", 400, 200, 100, 100);
    view.defPosition("f4", 500, 200, 100, 100);
    view.defPosition("a3", 0, 300, 100, 100);
    view.defPosition("b3", 100, 300, 100, 100);
    view.defPosition("c3", 200, 300, 100, 100);
    view.defPosition("d3", 300, 300, 100, 100);
    view.defPosition("e3", 400, 300, 100, 100);
    view.defPosition("f3", 500, 300, 100, 100);
    view.defPosition("a2", 0, 400, 100, 100);
    view.defPosition("b2", 100, 400, 100, 100);
    view.defPosition("c2", 200, 400, 100, 100);
    view.defPosition("d2", 300, 400, 100, 100);
    view.defPosition("e2", 400, 400, 100, 100);
    view.defPosition("f2", 500, 400, 100, 100);
    view.defPosition("a1", 0, 500, 100, 100);
    view.defPosition("b1", 100, 500, 100, 100);
    view.defPosition("c1", 200, 500, 100, 100);
    view.defPosition("d1", 300, 500, 100, 100);
    view.defPosition("e1", 400, 500, 100, 100);
    view.defPosition("f1", 500, 500, 100, 100);
}
