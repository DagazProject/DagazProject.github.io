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

    design.addPosition("a7", [0, 1, 7, 0]);
    design.addPosition("b7", [-1, 1, 7, 0]);
    design.addPosition("c7", [-1, 1, 7, 0]);
    design.addPosition("d7", [-1, 1, 7, 0]);
    design.addPosition("e7", [-1, 1, 7, 0]);
    design.addPosition("f7", [-1, 1, 7, 0]);
    design.addPosition("g7", [-1, 0, 7, 0]);
    design.addPosition("a6", [0, 1, 7, -7]);
    design.addPosition("b6", [-1, 1, 7, -7]);
    design.addPosition("c6", [-1, 1, 7, -7]);
    design.addPosition("d6", [-1, 1, 7, -7]);
    design.addPosition("e6", [-1, 1, 7, -7]);
    design.addPosition("f6", [-1, 1, 7, -7]);
    design.addPosition("g6", [-1, 0, 7, -7]);
    design.addPosition("a5", [0, 1, 7, -7]);
    design.addPosition("b5", [-1, 1, 7, -7]);
    design.addPosition("c5", [-1, 1, 7, -7]);
    design.addPosition("d5", [-1, 1, 7, -7]);
    design.addPosition("e5", [-1, 1, 7, -7]);
    design.addPosition("f5", [-1, 1, 7, -7]);
    design.addPosition("g5", [-1, 0, 7, -7]);
    design.addPosition("a4", [0, 1, 7, -7]);
    design.addPosition("b4", [-1, 1, 7, -7]);
    design.addPosition("c4", [-1, 1, 7, -7]);
    design.addPosition("d4", [-1, 1, 7, -7]);
    design.addPosition("e4", [-1, 1, 7, -7]);
    design.addPosition("f4", [-1, 1, 7, -7]);
    design.addPosition("g4", [-1, 0, 7, -7]);
    design.addPosition("a3", [0, 1, 7, -7]);
    design.addPosition("b3", [-1, 1, 7, -7]);
    design.addPosition("c3", [-1, 1, 7, -7]);
    design.addPosition("d3", [-1, 1, 7, -7]);
    design.addPosition("e3", [-1, 1, 7, -7]);
    design.addPosition("f3", [-1, 1, 7, -7]);
    design.addPosition("g3", [-1, 0, 7, -7]);
    design.addPosition("a2", [0, 1, 7, -7]);
    design.addPosition("b2", [-1, 1, 7, -7]);
    design.addPosition("c2", [-1, 1, 7, -7]);
    design.addPosition("d2", [-1, 1, 7, -7]);
    design.addPosition("e2", [-1, 1, 7, -7]);
    design.addPosition("f2", [-1, 1, 7, -7]);
    design.addPosition("g2", [-1, 0, 7, -7]);
    design.addPosition("a1", [0, 1, 0, -7]);
    design.addPosition("b1", [-1, 1, 0, -7]);
    design.addPosition("c1", [-1, 1, 0, -7]);
    design.addPosition("d1", [-1, 1, 0, -7]);
    design.addPosition("e1", [-1, 1, 0, -7]);
    design.addPosition("f1", [-1, 1, 0, -7]);
    design.addPosition("g1", [-1, 0, 0, -7]);


    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end


    design.addPiece("B00101", 0);
    design.addAttribute(0, 0, 1);
    design.addAttribute(0, 1, 'B0010');
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [1], 0);

    design.addPiece("B00011", 1);
    design.addAttribute(1, 0, 1);
    design.addAttribute(1, 1, 'B0001');
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [1], 0);

    design.addPiece("B00102", 2);
    design.addAttribute(2, 0, 2);
    design.addAttribute(2, 1, 'B0010');
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 0, [1], 0);

    design.addPiece("B00012", 3);
    design.addAttribute(3, 0, 2);
    design.addAttribute(3, 1, 'B0001');
    design.addMove(3, 0, [3], 0);
    design.addMove(3, 0, [2], 0);
    design.addMove(3, 0, [0], 0);
    design.addMove(3, 0, [1], 0);

    design.addPiece("B01003", 4);
    design.addAttribute(4, 0, 3);
    design.addAttribute(4, 1, 'B0100');
    design.addMove(4, 0, [3], 0);
    design.addMove(4, 0, [2], 0);
    design.addMove(4, 0, [0], 0);
    design.addMove(4, 0, [1], 0);

    design.addPiece("B10003", 5);
    design.addAttribute(5, 0, 3);
    design.addAttribute(5, 1, 'B1000');
    design.addMove(5, 0, [3], 0);
    design.addMove(5, 0, [2], 0);
    design.addMove(5, 0, [0], 0);
    design.addMove(5, 0, [1], 0);

    design.addPiece("B00104", 6);
    design.addAttribute(6, 0, 4);
    design.addAttribute(6, 1, 'B0010');
    design.addMove(6, 0, [3], 0);
    design.addMove(6, 0, [2], 0);
    design.addMove(6, 0, [0], 0);
    design.addMove(6, 0, [1], 0);

    design.addPiece("B00014", 7);
    design.addAttribute(7, 0, 4);
    design.addAttribute(7, 1, 'B0001');
    design.addMove(7, 0, [3], 0);
    design.addMove(7, 0, [2], 0);
    design.addMove(7, 0, [0], 0);
    design.addMove(7, 0, [1], 0);

    design.addPiece("B01005", 8);
    design.addAttribute(8, 0, 5);
    design.addAttribute(8, 1, 'B0100');
    design.addMove(8, 0, [3], 0);
    design.addMove(8, 0, [2], 0);
    design.addMove(8, 0, [0], 0);
    design.addMove(8, 0, [1], 0);

    design.addPiece("B10005", 9);
    design.addAttribute(9, 0, 5);
    design.addAttribute(9, 1, 'B1000');
    design.addMove(9, 0, [3], 0);
    design.addMove(9, 0, [2], 0);
    design.addMove(9, 0, [0], 0);
    design.addMove(9, 0, [1], 0);

    design.addPiece("B00106", 10);
    design.addAttribute(10, 0, 6);
    design.addAttribute(10, 1, 'B0010');
    design.addMove(10, 0, [3], 0);
    design.addMove(10, 0, [2], 0);
    design.addMove(10, 0, [0], 0);
    design.addMove(10, 0, [1], 0);

    design.addPiece("B00016", 11);
    design.addAttribute(11, 0, 6);
    design.addAttribute(11, 1, 'B0001');
    design.addMove(11, 0, [3], 0);
    design.addMove(11, 0, [2], 0);
    design.addMove(11, 0, [0], 0);
    design.addMove(11, 0, [1], 0);

    design.addPiece("B00107", 12);
    design.addAttribute(12, 0, 7);
    design.addAttribute(12, 1, 'B0010');
    design.addMove(12, 0, [3], 0);
    design.addMove(12, 0, [2], 0);
    design.addMove(12, 0, [0], 0);
    design.addMove(12, 0, [1], 0);

    design.addPiece("B00017", 13);
    design.addAttribute(13, 0, 7);
    design.addAttribute(13, 1, 'B0001');
    design.addMove(13, 0, [3], 0);
    design.addMove(13, 0, [2], 0);
    design.addMove(13, 0, [0], 0);
    design.addMove(13, 0, [1], 0);

    design.addPiece("B01008", 14);
    design.addAttribute(14, 0, 8);
    design.addAttribute(14, 1, 'B0100');
    design.addMove(14, 0, [3], 0);
    design.addMove(14, 0, [2], 0);
    design.addMove(14, 0, [0], 0);
    design.addMove(14, 0, [1], 0);

    design.addPiece("B10008", 15);
    design.addAttribute(15, 0, 8);
    design.addAttribute(15, 1, 'B1000');
    design.addMove(15, 0, [3], 0);
    design.addMove(15, 0, [2], 0);
    design.addMove(15, 0, [0], 0);
    design.addMove(15, 0, [1], 0);

    design.addPiece("B00109", 16);
    design.addAttribute(16, 0, 9);
    design.addAttribute(16, 1, 'B0010');
    design.addMove(16, 0, [3], 0);
    design.addMove(16, 0, [2], 0);
    design.addMove(16, 0, [0], 0);
    design.addMove(16, 0, [1], 0);

    design.addPiece("B00019", 17);
    design.addAttribute(17, 0, 9);
    design.addAttribute(17, 1, 'B0001');
    design.addMove(17, 0, [3], 0);
    design.addMove(17, 0, [2], 0);
    design.addMove(17, 0, [0], 0);
    design.addMove(17, 0, [1], 0);

    design.addPiece("B001010", 18);
    design.addAttribute(18, 0, 10);
    design.addAttribute(18, 1, 'B0010');
    design.addMove(18, 0, [3], 0);
    design.addMove(18, 0, [2], 0);
    design.addMove(18, 0, [0], 0);
    design.addMove(18, 0, [1], 0);

    design.addPiece("B000110", 19);
    design.addAttribute(19, 0, 10);
    design.addAttribute(19, 1, 'B0001');
    design.addMove(19, 0, [3], 0);
    design.addMove(19, 0, [2], 0);
    design.addMove(19, 0, [0], 0);
    design.addMove(19, 0, [1], 0);

    design.addPiece("B001011", 20);
    design.addAttribute(20, 0, 11);
    design.addAttribute(20, 1, 'B0010');
    design.addMove(20, 0, [3], 0);
    design.addMove(20, 0, [2], 0);
    design.addMove(20, 0, [0], 0);
    design.addMove(20, 0, [1], 0);

    design.addPiece("B000111", 21);
    design.addAttribute(21, 0, 11);
    design.addAttribute(21, 1, 'B0001');
    design.addMove(21, 0, [3], 0);
    design.addMove(21, 0, [2], 0);
    design.addMove(21, 0, [0], 0);
    design.addMove(21, 0, [1], 0);

    design.addPiece("B001012", 22);
    design.addAttribute(22, 0, 12);
    design.addAttribute(22, 1, 'B0010');
    design.addMove(22, 0, [3], 0);
    design.addMove(22, 0, [2], 0);
    design.addMove(22, 0, [0], 0);
    design.addMove(22, 0, [1], 0);

    design.addPiece("B000112", 23);
    design.addAttribute(23, 0, 12);
    design.addAttribute(23, 1, 'B0001');
    design.addMove(23, 0, [3], 0);
    design.addMove(23, 0, [2], 0);
    design.addMove(23, 0, [0], 0);
    design.addMove(23, 0, [1], 0);

    design.addPiece("B001013", 24);
    design.addAttribute(24, 0, 13);
    design.addAttribute(24, 1, 'B0010');
    design.addMove(24, 0, [3], 0);
    design.addMove(24, 0, [2], 0);
    design.addMove(24, 0, [0], 0);
    design.addMove(24, 0, [1], 0);

    design.addPiece("B000113", 25);
    design.addAttribute(25, 0, 13);
    design.addAttribute(25, 1, 'B0001');
    design.addMove(25, 0, [3], 0);
    design.addMove(25, 0, [2], 0);
    design.addMove(25, 0, [0], 0);
    design.addMove(25, 0, [1], 0);

    design.addPiece("B010014", 26);
    design.addAttribute(26, 0, 14);
    design.addAttribute(26, 1, 'B0100');
    design.addMove(26, 0, [3], 0);
    design.addMove(26, 0, [2], 0);
    design.addMove(26, 0, [0], 0);
    design.addMove(26, 0, [1], 0);

    design.addPiece("B100014", 27);
    design.addAttribute(27, 0, 14);
    design.addAttribute(27, 1, 'B1000');
    design.addMove(27, 0, [3], 0);
    design.addMove(27, 0, [2], 0);
    design.addMove(27, 0, [0], 0);
    design.addMove(27, 0, [1], 0);

    design.addPiece("B001015", 28);
    design.addAttribute(28, 0, 15);
    design.addAttribute(28, 1, 'B0010');
    design.addMove(28, 0, [3], 0);
    design.addMove(28, 0, [2], 0);
    design.addMove(28, 0, [0], 0);
    design.addMove(28, 0, [1], 0);

    design.addPiece("B000115", 29);
    design.addAttribute(29, 0, 15);
    design.addAttribute(29, 1, 'B0001');
    design.addMove(29, 0, [3], 0);
    design.addMove(29, 0, [2], 0);
    design.addMove(29, 0, [0], 0);
    design.addMove(29, 0, [1], 0);

    design.addPiece("B010016", 30);
    design.addAttribute(30, 0, 16);
    design.addAttribute(30, 1, 'B0100');
    design.addMove(30, 0, [3], 0);
    design.addMove(30, 0, [2], 0);
    design.addMove(30, 0, [0], 0);
    design.addMove(30, 0, [1], 0);

    design.addPiece("B100016", 31);
    design.addAttribute(31, 0, 16);
    design.addAttribute(31, 1, 'B1000');
    design.addMove(31, 0, [3], 0);
    design.addMove(31, 0, [2], 0);
    design.addMove(31, 0, [0], 0);
    design.addMove(31, 0, [1], 0);

    design.addPiece("B010017", 32);
    design.addAttribute(32, 0, 17);
    design.addAttribute(32, 1, 'B0100');
    design.addMove(32, 0, [3], 0);
    design.addMove(32, 0, [2], 0);
    design.addMove(32, 0, [0], 0);
    design.addMove(32, 0, [1], 0);

    design.addPiece("B100017", 33);
    design.addAttribute(33, 0, 17);
    design.addAttribute(33, 1, 'B1000');
    design.addMove(33, 0, [3], 0);
    design.addMove(33, 0, [2], 0);
    design.addMove(33, 0, [0], 0);
    design.addMove(33, 0, [1], 0);

    design.addPiece("B010018", 34);
    design.addAttribute(34, 0, 18);
    design.addAttribute(34, 1, 'B0100');
    design.addMove(34, 0, [3], 0);
    design.addMove(34, 0, [2], 0);
    design.addMove(34, 0, [0], 0);
    design.addMove(34, 0, [1], 0);

    design.addPiece("B100018", 35);
    design.addAttribute(35, 0, 18);
    design.addAttribute(35, 1, 'B1000');
    design.addMove(35, 0, [3], 0);
    design.addMove(35, 0, [2], 0);
    design.addMove(35, 0, [0], 0);
    design.addMove(35, 0, [1], 0);

    design.addPiece("B010019", 36);
    design.addAttribute(36, 0, 19);
    design.addAttribute(36, 1, 'B0100');
    design.addMove(36, 0, [3], 0);
    design.addMove(36, 0, [2], 0);
    design.addMove(36, 0, [0], 0);
    design.addMove(36, 0, [1], 0);

    design.addPiece("B100019", 37);
    design.addAttribute(37, 0, 19);
    design.addAttribute(37, 1, 'B1000');
    design.addMove(37, 0, [3], 0);
    design.addMove(37, 0, [2], 0);
    design.addMove(37, 0, [0], 0);
    design.addMove(37, 0, [1], 0);

    design.addPiece("B010020", 38);
    design.addAttribute(38, 0, 20);
    design.addAttribute(38, 1, 'B0100');
    design.addMove(38, 0, [3], 0);
    design.addMove(38, 0, [2], 0);
    design.addMove(38, 0, [0], 0);
    design.addMove(38, 0, [1], 0);

    design.addPiece("B100020", 39);
    design.addAttribute(39, 0, 20);
    design.addAttribute(39, 1, 'B1000');
    design.addMove(39, 0, [3], 0);
    design.addMove(39, 0, [2], 0);
    design.addMove(39, 0, [0], 0);
    design.addMove(39, 0, [1], 0);

    design.addPiece("B010021", 40);
    design.addAttribute(40, 0, 21);
    design.addAttribute(40, 1, 'B0100');
    design.addMove(40, 0, [3], 0);
    design.addMove(40, 0, [2], 0);
    design.addMove(40, 0, [0], 0);
    design.addMove(40, 0, [1], 0);

    design.addPiece("B100021", 41);
    design.addAttribute(41, 0, 21);
    design.addAttribute(41, 1, 'B1000');
    design.addMove(41, 0, [3], 0);
    design.addMove(41, 0, [2], 0);
    design.addMove(41, 0, [0], 0);
    design.addMove(41, 0, [1], 0);

    design.addPiece("B010022", 42);
    design.addAttribute(42, 0, 22);
    design.addAttribute(42, 1, 'B0100');
    design.addMove(42, 0, [3], 0);
    design.addMove(42, 0, [2], 0);
    design.addMove(42, 0, [0], 0);
    design.addMove(42, 0, [1], 0);

    design.addPiece("B100022", 43);
    design.addAttribute(43, 0, 22);
    design.addAttribute(43, 1, 'B1000');
    design.addMove(43, 0, [3], 0);
    design.addMove(43, 0, [2], 0);
    design.addMove(43, 0, [0], 0);
    design.addMove(43, 0, [1], 0);

    design.addPiece("B010023", 44);
    design.addAttribute(44, 0, 23);
    design.addAttribute(44, 1, 'B0100');
    design.addMove(44, 0, [3], 0);
    design.addMove(44, 0, [2], 0);
    design.addMove(44, 0, [0], 0);
    design.addMove(44, 0, [1], 0);

    design.addPiece("B100023", 45);
    design.addAttribute(45, 0, 23);
    design.addAttribute(45, 1, 'B1000');
    design.addMove(45, 0, [3], 0);
    design.addMove(45, 0, [2], 0);
    design.addMove(45, 0, [0], 0);
    design.addMove(45, 0, [1], 0);

    design.addPiece("R000024", 46);
    design.addAttribute(46, 0, 24);
    design.addAttribute(46, 1, 'R0000');
    design.addMove(46, 0, [3], 0);
    design.addMove(46, 0, [2], 0);
    design.addMove(46, 0, [0], 0);
    design.addMove(46, 0, [1], 0);

    design.setup("You", "B00101", 2);
    design.setup("You", "B00011", 9);
    design.setup("You", "B00102", 3);
    design.setup("You", "B00012", 10);
    design.setup("You", "B01003", 4);
    design.setup("You", "B10003", 5);
    design.setup("You", "B00104", 6);
    design.setup("You", "B00014", 13);
    design.setup("You", "B01005", 7);
    design.setup("You", "B10005", 8);
    design.setup("You", "B00106", 11);
    design.setup("You", "B00016", 18);
    design.setup("You", "B00107", 12);
    design.setup("You", "B00017", 19);
    design.setup("You", "B01008", 14);
    design.setup("You", "B10008", 15);
    design.setup("You", "B00109", 16);
    design.setup("You", "B00019", 23);
    design.setup("You", "B001010", 17);
    design.setup("You", "B000110", 24);
    design.setup("You", "B001011", 20);
    design.setup("You", "B000111", 27);
    design.setup("You", "B001012", 21);
    design.setup("You", "B000112", 28);
    design.setup("You", "B001013", 22);
    design.setup("You", "B000113", 29);
    design.setup("You", "B010014", 25);
    design.setup("You", "B100014", 26);
    design.setup("You", "B001015", 30);
    design.setup("You", "B000115", 37);
    design.setup("You", "B010016", 31);
    design.setup("You", "B100016", 32);
    design.setup("You", "B010017", 33);
    design.setup("You", "B100017", 34);
    design.setup("You", "B010018", 35);
    design.setup("You", "B100018", 36);
    design.setup("You", "B010019", 38);
    design.setup("You", "B100019", 39);
    design.setup("You", "B010020", 40);
    design.setup("You", "B100020", 41);
    design.setup("You", "B010021", 42);
    design.setup("You", "B100021", 43);
    design.setup("You", "B010022", 44);
    design.setup("You", "B100022", 45);
    design.setup("You", "B010023", 46);
    design.setup("You", "B100023", 47);
    design.setup("You", "R000024", 48);

    design.goal(0, "You", "R000024", [0]);
}

Dagaz.View.configure = function(view) {
    view.defPiece("YouB00101", "You B00101");
    view.defPiece("YouB00011", "You B00011");
    view.defPiece("YouB00102", "You B00102");
    view.defPiece("YouB00012", "You B00012");
    view.defPiece("YouB01003", "You B01003");
    view.defPiece("YouB10003", "You B10003");
    view.defPiece("YouB00104", "You B00104");
    view.defPiece("YouB00014", "You B00014");
    view.defPiece("YouB01005", "You B01005");
    view.defPiece("YouB10005", "You B10005");
    view.defPiece("YouB00106", "You B00106");
    view.defPiece("YouB00016", "You B00016");
    view.defPiece("YouB00107", "You B00107");
    view.defPiece("YouB00017", "You B00017");
    view.defPiece("YouB01008", "You B01008");
    view.defPiece("YouB10008", "You B10008");
    view.defPiece("YouB00109", "You B00109");
    view.defPiece("YouB00019", "You B00019");
    view.defPiece("YouB001010", "You B001010");
    view.defPiece("YouB000110", "You B000110");
    view.defPiece("YouB001011", "You B001011");
    view.defPiece("YouB000111", "You B000111");
    view.defPiece("YouB001012", "You B001012");
    view.defPiece("YouB000112", "You B000112");
    view.defPiece("YouB001013", "You B001013");
    view.defPiece("YouB000113", "You B000113");
    view.defPiece("YouB010014", "You B010014");
    view.defPiece("YouB100014", "You B100014");
    view.defPiece("YouB001015", "You B001015");
    view.defPiece("YouB000115", "You B000115");
    view.defPiece("YouB010016", "You B010016");
    view.defPiece("YouB100016", "You B100016");
    view.defPiece("YouB010017", "You B010017");
    view.defPiece("YouB100017", "You B100017");
    view.defPiece("YouB010018", "You B010018");
    view.defPiece("YouB100018", "You B100018");
    view.defPiece("YouB010019", "You B010019");
    view.defPiece("YouB100019", "You B100019");
    view.defPiece("YouB010020", "You B010020");
    view.defPiece("YouB100020", "You B100020");
    view.defPiece("YouB010021", "You B010021");
    view.defPiece("YouB100021", "You B100021");
    view.defPiece("YouB010022", "You B010022");
    view.defPiece("YouB100022", "You B100022");
    view.defPiece("YouB010023", "You B010023");
    view.defPiece("YouB100023", "You B100023");
    view.defPiece("YouR000024", "You R000024");
 
    view.defPosition("a7", 0, 0, 100, 100);
    view.defPosition("b7", 100, 0, 100, 100);
    view.defPosition("c7", 200, 0, 100, 100);
    view.defPosition("d7", 300, 0, 100, 100);
    view.defPosition("e7", 400, 0, 100, 100);
    view.defPosition("f7", 500, 0, 100, 100);
    view.defPosition("g7", 600, 0, 100, 100);
    view.defPosition("a6", 0, 100, 100, 100);
    view.defPosition("b6", 100, 100, 100, 100);
    view.defPosition("c6", 200, 100, 100, 100);
    view.defPosition("d6", 300, 100, 100, 100);
    view.defPosition("e6", 400, 100, 100, 100);
    view.defPosition("f6", 500, 100, 100, 100);
    view.defPosition("g6", 600, 100, 100, 100);
    view.defPosition("a5", 0, 200, 100, 100);
    view.defPosition("b5", 100, 200, 100, 100);
    view.defPosition("c5", 200, 200, 100, 100);
    view.defPosition("d5", 300, 200, 100, 100);
    view.defPosition("e5", 400, 200, 100, 100);
    view.defPosition("f5", 500, 200, 100, 100);
    view.defPosition("g5", 600, 200, 100, 100);
    view.defPosition("a4", 0, 300, 100, 100);
    view.defPosition("b4", 100, 300, 100, 100);
    view.defPosition("c4", 200, 300, 100, 100);
    view.defPosition("d4", 300, 300, 100, 100);
    view.defPosition("e4", 400, 300, 100, 100);
    view.defPosition("f4", 500, 300, 100, 100);
    view.defPosition("g4", 600, 300, 100, 100);
    view.defPosition("a3", 0, 400, 100, 100);
    view.defPosition("b3", 100, 400, 100, 100);
    view.defPosition("c3", 200, 400, 100, 100);
    view.defPosition("d3", 300, 400, 100, 100);
    view.defPosition("e3", 400, 400, 100, 100);
    view.defPosition("f3", 500, 400, 100, 100);
    view.defPosition("g3", 600, 400, 100, 100);
    view.defPosition("a2", 0, 500, 100, 100);
    view.defPosition("b2", 100, 500, 100, 100);
    view.defPosition("c2", 200, 500, 100, 100);
    view.defPosition("d2", 300, 500, 100, 100);
    view.defPosition("e2", 400, 500, 100, 100);
    view.defPosition("f2", 500, 500, 100, 100);
    view.defPosition("g2", 600, 500, 100, 100);
    view.defPosition("a1", 0, 600, 100, 100);
    view.defPosition("b1", 100, 600, 100, 100);
    view.defPosition("c1", 200, 600, 100, 100);
    view.defPosition("d1", 300, 600, 100, 100);
    view.defPosition("e1", 400, 600, 100, 100);
    view.defPosition("f1", 500, 600, 100, 100);
    view.defPosition("g1", 600, 600, 100, 100);
}
