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
    design.checkVersion("progressive-levels", "fujiware_18.htm");
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


    design.addPiece("G01001", 0);
    design.addAttribute(0, 0, 1);
    design.addAttribute(0, 1, 'G0100');
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [1], 0);

    design.addPiece("G10001", 1);
    design.addAttribute(1, 0, 1);
    design.addAttribute(1, 1, 'G1000');
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [1], 0);

    design.addPiece("G01002", 2);
    design.addAttribute(2, 0, 2);
    design.addAttribute(2, 1, 'G0100');
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 0, [1], 0);

    design.addPiece("G10002", 3);
    design.addAttribute(3, 0, 2);
    design.addAttribute(3, 1, 'G1000');
    design.addMove(3, 0, [3], 0);
    design.addMove(3, 0, [2], 0);
    design.addMove(3, 0, [0], 0);
    design.addMove(3, 0, [1], 0);

    design.addPiece("G00103", 4);
    design.addAttribute(4, 0, 3);
    design.addAttribute(4, 1, 'G0010');
    design.addMove(4, 0, [3], 0);
    design.addMove(4, 0, [2], 0);
    design.addMove(4, 0, [0], 0);
    design.addMove(4, 0, [1], 0);

    design.addPiece("G00013", 5);
    design.addAttribute(5, 0, 3);
    design.addAttribute(5, 1, 'G0001');
    design.addMove(5, 0, [3], 0);
    design.addMove(5, 0, [2], 0);
    design.addMove(5, 0, [0], 0);
    design.addMove(5, 0, [1], 0);

    design.addPiece("R0110F4", 6);
    design.addAttribute(6, 0, 4);
    design.addAttribute(6, 1, 'R0110F');
    design.addMove(6, 0, [3], 0);
    design.addMove(6, 0, [2], 0);
    design.addMove(6, 0, [0], 0);
    design.addMove(6, 0, [1], 0);

    design.addPiece("R1010F4", 7);
    design.addAttribute(7, 0, 4);
    design.addAttribute(7, 1, 'R1010F');
    design.addMove(7, 0, [3], 0);
    design.addMove(7, 0, [2], 0);
    design.addMove(7, 0, [0], 0);
    design.addMove(7, 0, [1], 0);

    design.addPiece("R0101F4", 8);
    design.addAttribute(8, 0, 4);
    design.addAttribute(8, 1, 'R0101F');
    design.addMove(8, 0, [3], 0);
    design.addMove(8, 0, [2], 0);
    design.addMove(8, 0, [0], 0);
    design.addMove(8, 0, [1], 0);

    design.addPiece("R1001F4", 9);
    design.addAttribute(9, 0, 4);
    design.addAttribute(9, 1, 'R1001F');
    design.addMove(9, 0, [3], 0);
    design.addMove(9, 0, [2], 0);
    design.addMove(9, 0, [0], 0);
    design.addMove(9, 0, [1], 0);

    design.addPiece("G00105", 10);
    design.addAttribute(10, 0, 5);
    design.addAttribute(10, 1, 'G0010');
    design.addMove(10, 0, [3], 0);
    design.addMove(10, 0, [2], 0);
    design.addMove(10, 0, [0], 0);
    design.addMove(10, 0, [1], 0);

    design.addPiece("G00015", 11);
    design.addAttribute(11, 0, 5);
    design.addAttribute(11, 1, 'G0001');
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

    design.addPiece("G01007", 13);
    design.addAttribute(13, 0, 7);
    design.addAttribute(13, 1, 'G0100');
    design.addMove(13, 0, [3], 0);
    design.addMove(13, 0, [2], 0);
    design.addMove(13, 0, [0], 0);
    design.addMove(13, 0, [1], 0);

    design.addPiece("G10007", 14);
    design.addAttribute(14, 0, 7);
    design.addAttribute(14, 1, 'G1000');
    design.addMove(14, 0, [3], 0);
    design.addMove(14, 0, [2], 0);
    design.addMove(14, 0, [0], 0);
    design.addMove(14, 0, [1], 0);

    design.addPiece("B00008", 15);
    design.addAttribute(15, 0, 8);
    design.addAttribute(15, 1, 'B0000');
    design.addMove(15, 0, [3], 0);
    design.addMove(15, 0, [2], 0);
    design.addMove(15, 0, [0], 0);
    design.addMove(15, 0, [1], 0);

    design.addPiece("B00009", 16);
    design.addAttribute(16, 0, 9);
    design.addAttribute(16, 1, 'B0000');
    design.addMove(16, 0, [3], 0);
    design.addMove(16, 0, [2], 0);
    design.addMove(16, 0, [0], 0);
    design.addMove(16, 0, [1], 0);

    design.addPiece("B000010", 17);
    design.addAttribute(17, 0, 10);
    design.addAttribute(17, 1, 'B0000');
    design.addMove(17, 0, [3], 0);
    design.addMove(17, 0, [2], 0);
    design.addMove(17, 0, [0], 0);
    design.addMove(17, 0, [1], 0);

    design.setup("You", "G01001", 0);
    design.setup("You", "G10001", 1);
    design.setup("You", "G01002", 2);
    design.setup("You", "G10002", 3);
    design.setup("You", "G00103", 4);
    design.setup("You", "G00013", 8);
    design.setup("You", "R0110F4", 5);
    design.setup("You", "R1010F4", 6);
    design.setup("You", "R0101F4", 9);
    design.setup("You", "R1001F4", 10);
    design.setup("You", "G00105", 7);
    design.setup("You", "G00015", 11);
    design.setup("You", "B00006", 12);
    design.setup("You", "G01007", 13);
    design.setup("You", "G10007", 14);
    design.setup("You", "B00008", 15);
    design.setup("You", "B00009", 16);
    design.setup("You", "B000010", 19);

    design.goal(0, "You", "R0110F4", [1]);
    design.goal(0, "You", "R1010F4", [2]);
    design.goal(0, "You", "R0101F4", [5]);
    design.goal(0, "You", "R1001F4", [6]);
}

Dagaz.View.configure = function(view) {
    view.defPiece("YouG01001", "You G01001");
    view.defPiece("YouG10001", "You G10001");
    view.defPiece("YouG01002", "You G01002");
    view.defPiece("YouG10002", "You G10002");
    view.defPiece("YouG00103", "You G00103");
    view.defPiece("YouG00013", "You G00013");
    view.defPiece("YouR0110F4", "You R0110F4");
    view.defPiece("YouR1010F4", "You R1010F4");
    view.defPiece("YouR0101F4", "You R0101F4");
    view.defPiece("YouR1001F4", "You R1001F4");
    view.defPiece("YouG00105", "You G00105");
    view.defPiece("YouG00015", "You G00015");
    view.defPiece("YouB00006", "You B00006");
    view.defPiece("YouG01007", "You G01007");
    view.defPiece("YouG10007", "You G10007");
    view.defPiece("YouB00008", "You B00008");
    view.defPiece("YouB00009", "You B00009");
    view.defPiece("YouB000010", "You B000010");
 
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
