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

    design.addPosition("a3", [0, 1, 5, 0]);
    design.addPosition("b3", [-1, 1, 5, 0]);
    design.addPosition("c3", [-1, 1, 5, 0]);
    design.addPosition("d3", [-1, 1, 5, 0]);
    design.addPosition("e3", [-1, 0, 5, 0]);
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


    design.addPiece("R00001", 0);
    design.addAttribute(0, 0, 1);
    design.addAttribute(0, 1, 'R0000');
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [1], 0);

    design.addPiece("R0010C2", 1);
    design.addAttribute(1, 0, 2);
    design.addAttribute(1, 1, 'R0010C');
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [1], 0);

    design.addPiece("R0001P2", 2);
    design.addAttribute(2, 0, 2);
    design.addAttribute(2, 1, 'R0001P');
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 0, [1], 0);

    design.addPiece("R0100C3", 3);
    design.addAttribute(3, 0, 3);
    design.addAttribute(3, 1, 'R0100C');
    design.addMove(3, 0, [3], 0);
    design.addMove(3, 0, [2], 0);
    design.addMove(3, 0, [0], 0);
    design.addMove(3, 0, [1], 0);

    design.addPiece("R1000C3", 4);
    design.addAttribute(4, 0, 3);
    design.addAttribute(4, 1, 'R1000C');
    design.addMove(4, 0, [3], 0);
    design.addMove(4, 0, [2], 0);
    design.addMove(4, 0, [0], 0);
    design.addMove(4, 0, [1], 0);

    design.addPiece("R0010P4", 5);
    design.addAttribute(5, 0, 4);
    design.addAttribute(5, 1, 'R0010P');
    design.addMove(5, 0, [3], 0);
    design.addMove(5, 0, [2], 0);
    design.addMove(5, 0, [0], 0);
    design.addMove(5, 0, [1], 0);

    design.addPiece("R0001C4", 6);
    design.addAttribute(6, 0, 4);
    design.addAttribute(6, 1, 'R0001C');
    design.addMove(6, 0, [3], 0);
    design.addMove(6, 0, [2], 0);
    design.addMove(6, 0, [0], 0);
    design.addMove(6, 0, [1], 0);

    design.addPiece("R0000P5", 7);
    design.addAttribute(7, 0, 5);
    design.addAttribute(7, 1, 'R0000P');
    design.addMove(7, 0, [3], 0);
    design.addMove(7, 0, [2], 0);
    design.addMove(7, 0, [0], 0);
    design.addMove(7, 0, [1], 0);

    design.addPiece("R0100P6", 8);
    design.addAttribute(8, 0, 6);
    design.addAttribute(8, 1, 'R0100P');
    design.addMove(8, 0, [3], 0);
    design.addMove(8, 0, [2], 0);
    design.addMove(8, 0, [0], 0);
    design.addMove(8, 0, [1], 0);

    design.addPiece("R1000P6", 9);
    design.addAttribute(9, 0, 6);
    design.addAttribute(9, 1, 'R1000P');
    design.addMove(9, 0, [3], 0);
    design.addMove(9, 0, [2], 0);
    design.addMove(9, 0, [0], 0);
    design.addMove(9, 0, [1], 0);

    design.addPiece("R0000C7", 10);
    design.addAttribute(10, 0, 7);
    design.addAttribute(10, 1, 'R0000C');
    design.addMove(10, 0, [3], 0);
    design.addMove(10, 0, [2], 0);
    design.addMove(10, 0, [0], 0);
    design.addMove(10, 0, [1], 0);

    design.addPiece("R00008", 11);
    design.addAttribute(11, 0, 8);
    design.addAttribute(11, 1, 'R0000');
    design.addMove(11, 0, [3], 0);
    design.addMove(11, 0, [2], 0);
    design.addMove(11, 0, [0], 0);
    design.addMove(11, 0, [1], 0);

    design.addPiece("R00009", 12);
    design.addAttribute(12, 0, 9);
    design.addAttribute(12, 1, 'R0000');
    design.addMove(12, 0, [3], 0);
    design.addMove(12, 0, [2], 0);
    design.addMove(12, 0, [0], 0);
    design.addMove(12, 0, [1], 0);

    design.setup("You", "R00001", 1);
    design.setup("You", "R0010C2", 2);
    design.setup("You", "R0001P2", 7);
    design.setup("You", "R0100C3", 3);
    design.setup("You", "R1000C3", 4);
    design.setup("You", "R0010P4", 5);
    design.setup("You", "R0001C4", 10);
    design.setup("You", "R0000P5", 6);
    design.setup("You", "R0100P6", 8);
    design.setup("You", "R1000P6", 9);
    design.setup("You", "R0000C7", 11);
    design.setup("You", "R00008", 12);
    design.setup("You", "R00009", 13);

    design.goal(0, "You", "R0010C2", [5, 6, 7, 8, 9]);
    design.goal(0, "You", "R0100C3", [5, 6, 7, 8, 9]);
    design.goal(0, "You", "R1000C3", [5, 6, 7, 8, 9]);
    design.goal(0, "You", "R0001C4", [5, 6, 7, 8, 9]);
    design.goal(0, "You", "R0000C7", [5, 6, 7, 8, 9]);
}

Dagaz.View.configure = function(view) {
    view.defPiece("YouR00001", "You R00001");
    view.defPiece("YouR0010C2", "You R0010C2");
    view.defPiece("YouR0001P2", "You R0001P2");
    view.defPiece("YouR0100C3", "You R0100C3");
    view.defPiece("YouR1000C3", "You R1000C3");
    view.defPiece("YouR0010P4", "You R0010P4");
    view.defPiece("YouR0001C4", "You R0001C4");
    view.defPiece("YouR0000P5", "You R0000P5");
    view.defPiece("YouR0100P6", "You R0100P6");
    view.defPiece("YouR1000P6", "You R1000P6");
    view.defPiece("YouR0000C7", "You R0000C7");
    view.defPiece("YouR00008", "You R00008");
    view.defPiece("YouR00009", "You R00009");
 
    view.defPosition("a3", 0, 0, 100, 100);
    view.defPosition("b3", 100, 0, 100, 100);
    view.defPosition("c3", 200, 0, 100, 100);
    view.defPosition("d3", 300, 0, 100, 100);
    view.defPosition("e3", 400, 0, 100, 100);
    view.defPosition("a2", 0, 100, 100, 100);
    view.defPosition("b2", 100, 100, 100, 100);
    view.defPosition("c2", 200, 100, 100, 100);
    view.defPosition("d2", 300, 100, 100, 100);
    view.defPosition("e2", 400, 100, 100, 100);
    view.defPosition("a1", 0, 200, 100, 100);
    view.defPosition("b1", 100, 200, 100, 100);
    view.defPosition("c1", 200, 200, 100, 100);
    view.defPosition("d1", 300, 200, 100, 100);
    view.defPosition("e1", 400, 200, 100, 100);
}
