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
    design.checkVersion("progressive-levels", "fujiware_9.htm");
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

    design.addPiece("G01002", 4);
    design.addAttribute(4, 0, 2);
    design.addAttribute(4, 1, 'G0100');
    design.addMove(4, 0, [3], 0);
    design.addMove(4, 0, [2], 0);
    design.addMove(4, 0, [0], 0);
    design.addMove(4, 0, [1], 0);

    design.addPiece("G10002", 5);
    design.addAttribute(5, 0, 2);
    design.addAttribute(5, 1, 'G1000');
    design.addMove(5, 0, [3], 0);
    design.addMove(5, 0, [2], 0);
    design.addMove(5, 0, [0], 0);
    design.addMove(5, 0, [1], 0);

    design.addPiece("G01003", 6);
    design.addAttribute(6, 0, 3);
    design.addAttribute(6, 1, 'G0100');
    design.addMove(6, 0, [3], 0);
    design.addMove(6, 0, [2], 0);
    design.addMove(6, 0, [0], 0);
    design.addMove(6, 0, [1], 0);

    design.addPiece("G10003", 7);
    design.addAttribute(7, 0, 3);
    design.addAttribute(7, 1, 'G1000');
    design.addMove(7, 0, [3], 0);
    design.addMove(7, 0, [2], 0);
    design.addMove(7, 0, [0], 0);
    design.addMove(7, 0, [1], 0);

    design.addPiece("B00004", 8);
    design.addAttribute(8, 0, 4);
    design.addAttribute(8, 1, 'B0000');
    design.addMove(8, 0, [3], 0);
    design.addMove(8, 0, [2], 0);
    design.addMove(8, 0, [0], 0);
    design.addMove(8, 0, [1], 0);

    design.addPiece("B00005", 9);
    design.addAttribute(9, 0, 5);
    design.addAttribute(9, 1, 'B0000');
    design.addMove(9, 0, [3], 0);
    design.addMove(9, 0, [2], 0);
    design.addMove(9, 0, [0], 0);
    design.addMove(9, 0, [1], 0);

    design.addPiece("G00106", 10);
    design.addAttribute(10, 0, 6);
    design.addAttribute(10, 1, 'G0010');
    design.addMove(10, 0, [3], 0);
    design.addMove(10, 0, [2], 0);
    design.addMove(10, 0, [0], 0);
    design.addMove(10, 0, [1], 0);

    design.addPiece("G00016", 11);
    design.addAttribute(11, 0, 6);
    design.addAttribute(11, 1, 'G0001');
    design.addMove(11, 0, [3], 0);
    design.addMove(11, 0, [2], 0);
    design.addMove(11, 0, [0], 0);
    design.addMove(11, 0, [1], 0);

    design.addPiece("G00107", 12);
    design.addAttribute(12, 0, 7);
    design.addAttribute(12, 1, 'G0010');
    design.addMove(12, 0, [3], 0);
    design.addMove(12, 0, [2], 0);
    design.addMove(12, 0, [0], 0);
    design.addMove(12, 0, [1], 0);

    design.addPiece("G00017", 13);
    design.addAttribute(13, 0, 7);
    design.addAttribute(13, 1, 'G0001');
    design.addMove(13, 0, [3], 0);
    design.addMove(13, 0, [2], 0);
    design.addMove(13, 0, [0], 0);
    design.addMove(13, 0, [1], 0);

    design.addPiece("G00108", 14);
    design.addAttribute(14, 0, 8);
    design.addAttribute(14, 1, 'G0010');
    design.addMove(14, 0, [3], 0);
    design.addMove(14, 0, [2], 0);
    design.addMove(14, 0, [0], 0);
    design.addMove(14, 0, [1], 0);

    design.addPiece("G00018", 15);
    design.addAttribute(15, 0, 8);
    design.addAttribute(15, 1, 'G0001');
    design.addMove(15, 0, [3], 0);
    design.addMove(15, 0, [2], 0);
    design.addMove(15, 0, [0], 0);
    design.addMove(15, 0, [1], 0);

    design.addPiece("G00109", 16);
    design.addAttribute(16, 0, 9);
    design.addAttribute(16, 1, 'G0010');
    design.addMove(16, 0, [3], 0);
    design.addMove(16, 0, [2], 0);
    design.addMove(16, 0, [0], 0);
    design.addMove(16, 0, [1], 0);

    design.addPiece("G00019", 17);
    design.addAttribute(17, 0, 9);
    design.addAttribute(17, 1, 'G0001');
    design.addMove(17, 0, [3], 0);
    design.addMove(17, 0, [2], 0);
    design.addMove(17, 0, [0], 0);
    design.addMove(17, 0, [1], 0);

    design.setup("You", "R0110F1", 0);
    design.setup("You", "R1010F1", 1);
    design.setup("You", "R0101F1", 4);
    design.setup("You", "R1001F1", 5);
    design.setup("You", "G01002", 2);
    design.setup("You", "G10002", 3);
    design.setup("You", "G01003", 6);
    design.setup("You", "G10003", 7);
    design.setup("You", "B00004", 8);
    design.setup("You", "B00005", 9);
    design.setup("You", "G00106", 12);
    design.setup("You", "G00016", 16);
    design.setup("You", "G00107", 13);
    design.setup("You", "G00017", 17);
    design.setup("You", "G00108", 14);
    design.setup("You", "G00018", 18);
    design.setup("You", "G00109", 15);
    design.setup("You", "G00019", 19);

    design.goal(0, "You", "R0110F1", [2]);
    design.goal(0, "You", "R1010F1", [3]);
    design.goal(0, "You", "R0101F1", [6]);
    design.goal(0, "You", "R1001F1", [7]);
}

Dagaz.View.configure = function(view) {
    view.defPiece("YouR0110F1", "You R0110F1");
    view.defPiece("YouR1010F1", "You R1010F1");
    view.defPiece("YouR0101F1", "You R0101F1");
    view.defPiece("YouR1001F1", "You R1001F1");
    view.defPiece("YouG01002", "You G01002");
    view.defPiece("YouG10002", "You G10002");
    view.defPiece("YouG01003", "You G01003");
    view.defPiece("YouG10003", "You G10003");
    view.defPiece("YouB00004", "You B00004");
    view.defPiece("YouB00005", "You B00005");
    view.defPiece("YouG00106", "You G00106");
    view.defPiece("YouG00016", "You G00016");
    view.defPiece("YouG00107", "You G00107");
    view.defPiece("YouG00017", "You G00017");
    view.defPiece("YouG00108", "You G00108");
    view.defPiece("YouG00018", "You G00018");
    view.defPiece("YouG00109", "You G00109");
    view.defPiece("YouG00019", "You G00019");
 
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
