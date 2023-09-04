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

    design.addPosition("a10", [0, 1, 8, 0]);
    design.addPosition("b10", [-1, 1, 8, 0]);
    design.addPosition("c10", [-1, 1, 8, 0]);
    design.addPosition("d10", [-1, 1, 8, 0]);
    design.addPosition("e10", [-1, 1, 8, 0]);
    design.addPosition("f10", [-1, 1, 8, 0]);
    design.addPosition("g10", [-1, 1, 8, 0]);
    design.addPosition("h10", [-1, 0, 8, 0]);
    design.addPosition("a9", [0, 1, 8, -8]);
    design.addPosition("b9", [-1, 1, 8, -8]);
    design.addPosition("c9", [-1, 1, 8, -8]);
    design.addPosition("d9", [-1, 1, 8, -8]);
    design.addPosition("e9", [-1, 1, 8, -8]);
    design.addPosition("f9", [-1, 1, 8, -8]);
    design.addPosition("g9", [-1, 1, 8, -8]);
    design.addPosition("h9", [-1, 0, 8, -8]);
    design.addPosition("a8", [0, 1, 8, -8]);
    design.addPosition("b8", [-1, 1, 8, -8]);
    design.addPosition("c8", [-1, 1, 8, -8]);
    design.addPosition("d8", [-1, 1, 8, -8]);
    design.addPosition("e8", [-1, 1, 8, -8]);
    design.addPosition("f8", [-1, 1, 8, -8]);
    design.addPosition("g8", [-1, 1, 8, -8]);
    design.addPosition("h8", [-1, 0, 8, -8]);
    design.addPosition("a7", [0, 1, 8, -8]);
    design.addPosition("b7", [-1, 1, 8, -8]);
    design.addPosition("c7", [-1, 1, 8, -8]);
    design.addPosition("d7", [-1, 1, 8, -8]);
    design.addPosition("e7", [-1, 1, 8, -8]);
    design.addPosition("f7", [-1, 1, 8, -8]);
    design.addPosition("g7", [-1, 1, 8, -8]);
    design.addPosition("h7", [-1, 0, 8, -8]);
    design.addPosition("a6", [0, 1, 8, -8]);
    design.addPosition("b6", [-1, 1, 8, -8]);
    design.addPosition("c6", [-1, 1, 8, -8]);
    design.addPosition("d6", [-1, 1, 8, -8]);
    design.addPosition("e6", [-1, 1, 8, -8]);
    design.addPosition("f6", [-1, 1, 8, -8]);
    design.addPosition("g6", [-1, 1, 8, -8]);
    design.addPosition("h6", [-1, 0, 8, -8]);
    design.addPosition("a5", [0, 1, 8, -8]);
    design.addPosition("b5", [-1, 1, 8, -8]);
    design.addPosition("c5", [-1, 1, 8, -8]);
    design.addPosition("d5", [-1, 1, 8, -8]);
    design.addPosition("e5", [-1, 1, 8, -8]);
    design.addPosition("f5", [-1, 1, 8, -8]);
    design.addPosition("g5", [-1, 1, 8, -8]);
    design.addPosition("h5", [-1, 0, 8, -8]);
    design.addPosition("a4", [0, 1, 8, -8]);
    design.addPosition("b4", [-1, 1, 8, -8]);
    design.addPosition("c4", [-1, 1, 8, -8]);
    design.addPosition("d4", [-1, 1, 8, -8]);
    design.addPosition("e4", [-1, 1, 8, -8]);
    design.addPosition("f4", [-1, 1, 8, -8]);
    design.addPosition("g4", [-1, 1, 8, -8]);
    design.addPosition("h4", [-1, 0, 8, -8]);
    design.addPosition("a3", [0, 1, 8, -8]);
    design.addPosition("b3", [-1, 1, 8, -8]);
    design.addPosition("c3", [-1, 1, 8, -8]);
    design.addPosition("d3", [-1, 1, 8, -8]);
    design.addPosition("e3", [-1, 1, 8, -8]);
    design.addPosition("f3", [-1, 1, 8, -8]);
    design.addPosition("g3", [-1, 1, 8, -8]);
    design.addPosition("h3", [-1, 0, 8, -8]);
    design.addPosition("a2", [0, 1, 8, -8]);
    design.addPosition("b2", [-1, 1, 8, -8]);
    design.addPosition("c2", [-1, 1, 8, -8]);
    design.addPosition("d2", [-1, 1, 8, -8]);
    design.addPosition("e2", [-1, 1, 8, -8]);
    design.addPosition("f2", [-1, 1, 8, -8]);
    design.addPosition("g2", [-1, 1, 8, -8]);
    design.addPosition("h2", [-1, 0, 8, -8]);
    design.addPosition("a1", [0, 1, 0, -8]);
    design.addPosition("b1", [-1, 1, 0, -8]);
    design.addPosition("c1", [-1, 1, 0, -8]);
    design.addPosition("d1", [-1, 1, 0, -8]);
    design.addPosition("e1", [-1, 1, 0, -8]);
    design.addPosition("f1", [-1, 1, 0, -8]);
    design.addPosition("g1", [-1, 1, 0, -8]);
    design.addPosition("h1", [-1, 0, 0, -8]);


    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end


    design.addPiece("HBR1", 0);
    design.addAttribute(0, 0, 1);
    design.addAttribute(0, 1, 'HBR');
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [1], 0);

    design.addPiece("HBL1", 1);
    design.addAttribute(1, 0, 1);
    design.addAttribute(1, 1, 'HBL');
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [1], 0);

    design.addPiece("HTBR1", 2);
    design.addAttribute(2, 0, 1);
    design.addAttribute(2, 1, 'HTBR');
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 0, [1], 0);

    design.addPiece("HTBL1", 3);
    design.addAttribute(3, 0, 1);
    design.addAttribute(3, 1, 'HTBL');
    design.addMove(3, 0, [3], 0);
    design.addMove(3, 0, [2], 0);
    design.addMove(3, 0, [0], 0);
    design.addMove(3, 0, [1], 0);

    design.addPiece("HTRC1", 4);
    design.addAttribute(4, 0, 1);
    design.addAttribute(4, 1, 'HTRC');
    design.addMove(4, 0, [3], 0);
    design.addMove(4, 0, [2], 0);
    design.addMove(4, 0, [0], 0);
    design.addMove(4, 0, [1], 0);

    design.addPiece("HBLR1", 5);
    design.addAttribute(5, 0, 1);
    design.addAttribute(5, 1, 'HBLR');
    design.addMove(5, 0, [3], 0);
    design.addMove(5, 0, [2], 0);
    design.addMove(5, 0, [0], 0);
    design.addMove(5, 0, [1], 0);

    design.addPiece("HTR1", 6);
    design.addAttribute(6, 0, 1);
    design.addAttribute(6, 1, 'HTR');
    design.addMove(6, 0, [3], 0);
    design.addMove(6, 0, [2], 0);
    design.addMove(6, 0, [0], 0);
    design.addMove(6, 0, [1], 0);

    design.addPiece("HTLR1", 7);
    design.addAttribute(7, 0, 1);
    design.addAttribute(7, 1, 'HTLR');
    design.addMove(7, 0, [3], 0);
    design.addMove(7, 0, [2], 0);
    design.addMove(7, 0, [0], 0);
    design.addMove(7, 0, [1], 0);

    design.addPiece("HTL1", 8);
    design.addAttribute(8, 0, 1);
    design.addAttribute(8, 1, 'HTL');
    design.addMove(8, 0, [3], 0);
    design.addMove(8, 0, [2], 0);
    design.addMove(8, 0, [0], 0);
    design.addMove(8, 0, [1], 0);

    design.addPiece("HBR2", 9);
    design.addAttribute(9, 0, 2);
    design.addAttribute(9, 1, 'HBR');
    design.addMove(9, 0, [3], 0);
    design.addMove(9, 0, [2], 0);
    design.addMove(9, 0, [0], 0);
    design.addMove(9, 0, [1], 0);

    design.addPiece("HBL2", 10);
    design.addAttribute(10, 0, 2);
    design.addAttribute(10, 1, 'HBL');
    design.addMove(10, 0, [3], 0);
    design.addMove(10, 0, [2], 0);
    design.addMove(10, 0, [0], 0);
    design.addMove(10, 0, [1], 0);

    design.addPiece("HTR2", 11);
    design.addAttribute(11, 0, 2);
    design.addAttribute(11, 1, 'HTR');
    design.addMove(11, 0, [3], 0);
    design.addMove(11, 0, [2], 0);
    design.addMove(11, 0, [0], 0);
    design.addMove(11, 0, [1], 0);

    design.addPiece("HTL2", 12);
    design.addAttribute(12, 0, 2);
    design.addAttribute(12, 1, 'HTL');
    design.addMove(12, 0, [3], 0);
    design.addMove(12, 0, [2], 0);
    design.addMove(12, 0, [0], 0);
    design.addMove(12, 0, [1], 0);

    design.addPiece("HBR3", 13);
    design.addAttribute(13, 0, 3);
    design.addAttribute(13, 1, 'HBR');
    design.addMove(13, 0, [3], 0);
    design.addMove(13, 0, [2], 0);
    design.addMove(13, 0, [0], 0);
    design.addMove(13, 0, [1], 0);

    design.addPiece("HBLRC3", 14);
    design.addAttribute(14, 0, 3);
    design.addAttribute(14, 1, 'HBLRC');
    design.addMove(14, 0, [3], 0);
    design.addMove(14, 0, [2], 0);
    design.addMove(14, 0, [0], 0);
    design.addMove(14, 0, [1], 0);

    design.addPiece("HLR3", 15);
    design.addAttribute(15, 0, 3);
    design.addAttribute(15, 1, 'HLR');
    design.addMove(15, 0, [3], 0);
    design.addMove(15, 0, [2], 0);
    design.addMove(15, 0, [0], 0);
    design.addMove(15, 0, [1], 0);

    design.addPiece("HL3", 16);
    design.addAttribute(16, 0, 3);
    design.addAttribute(16, 1, 'HL');
    design.addMove(16, 0, [3], 0);
    design.addMove(16, 0, [2], 0);
    design.addMove(16, 0, [0], 0);
    design.addMove(16, 0, [1], 0);

    design.addPiece("HTR3", 17);
    design.addAttribute(17, 0, 3);
    design.addAttribute(17, 1, 'HTR');
    design.addMove(17, 0, [3], 0);
    design.addMove(17, 0, [2], 0);
    design.addMove(17, 0, [0], 0);
    design.addMove(17, 0, [1], 0);

    design.addPiece("HTL3", 18);
    design.addAttribute(18, 0, 3);
    design.addAttribute(18, 1, 'HTL');
    design.addMove(18, 0, [3], 0);
    design.addMove(18, 0, [2], 0);
    design.addMove(18, 0, [0], 0);
    design.addMove(18, 0, [1], 0);

    design.addPiece("HBR4", 19);
    design.addAttribute(19, 0, 4);
    design.addAttribute(19, 1, 'HBR');
    design.addMove(19, 0, [3], 0);
    design.addMove(19, 0, [2], 0);
    design.addMove(19, 0, [0], 0);
    design.addMove(19, 0, [1], 0);

    design.addPiece("HBL4", 20);
    design.addAttribute(20, 0, 4);
    design.addAttribute(20, 1, 'HBL');
    design.addMove(20, 0, [3], 0);
    design.addMove(20, 0, [2], 0);
    design.addMove(20, 0, [0], 0);
    design.addMove(20, 0, [1], 0);

    design.addPiece("HTR4", 21);
    design.addAttribute(21, 0, 4);
    design.addAttribute(21, 1, 'HTR');
    design.addMove(21, 0, [3], 0);
    design.addMove(21, 0, [2], 0);
    design.addMove(21, 0, [0], 0);
    design.addMove(21, 0, [1], 0);

    design.addPiece("HTL4", 22);
    design.addAttribute(22, 0, 4);
    design.addAttribute(22, 1, 'HTL');
    design.addMove(22, 0, [3], 0);
    design.addMove(22, 0, [2], 0);
    design.addMove(22, 0, [0], 0);
    design.addMove(22, 0, [1], 0);

    design.addPiece("HBR5", 23);
    design.addAttribute(23, 0, 5);
    design.addAttribute(23, 1, 'HBR');
    design.addMove(23, 0, [3], 0);
    design.addMove(23, 0, [2], 0);
    design.addMove(23, 0, [0], 0);
    design.addMove(23, 0, [1], 0);

    design.addPiece("HBL5", 24);
    design.addAttribute(24, 0, 5);
    design.addAttribute(24, 1, 'HBL');
    design.addMove(24, 0, [3], 0);
    design.addMove(24, 0, [2], 0);
    design.addMove(24, 0, [0], 0);
    design.addMove(24, 0, [1], 0);

    design.addPiece("HTR5", 25);
    design.addAttribute(25, 0, 5);
    design.addAttribute(25, 1, 'HTR');
    design.addMove(25, 0, [3], 0);
    design.addMove(25, 0, [2], 0);
    design.addMove(25, 0, [0], 0);
    design.addMove(25, 0, [1], 0);

    design.addPiece("HTLRC5", 26);
    design.addAttribute(26, 0, 5);
    design.addAttribute(26, 1, 'HTLRC');
    design.addMove(26, 0, [3], 0);
    design.addMove(26, 0, [2], 0);
    design.addMove(26, 0, [0], 0);
    design.addMove(26, 0, [1], 0);

    design.addPiece("HLR5", 27);
    design.addAttribute(27, 0, 5);
    design.addAttribute(27, 1, 'HLR');
    design.addMove(27, 0, [3], 0);
    design.addMove(27, 0, [2], 0);
    design.addMove(27, 0, [0], 0);
    design.addMove(27, 0, [1], 0);

    design.addPiece("HL5", 28);
    design.addAttribute(28, 0, 5);
    design.addAttribute(28, 1, 'HL');
    design.addMove(28, 0, [3], 0);
    design.addMove(28, 0, [2], 0);
    design.addMove(28, 0, [0], 0);
    design.addMove(28, 0, [1], 0);

    design.addPiece("HR6", 29);
    design.addAttribute(29, 0, 6);
    design.addAttribute(29, 1, 'HR');
    design.addMove(29, 0, [3], 0);
    design.addMove(29, 0, [2], 0);
    design.addMove(29, 0, [0], 0);
    design.addMove(29, 0, [1], 0);

    design.addPiece("HLR6", 30);
    design.addAttribute(30, 0, 6);
    design.addAttribute(30, 1, 'HLR');
    design.addMove(30, 0, [3], 0);
    design.addMove(30, 0, [2], 0);
    design.addMove(30, 0, [0], 0);
    design.addMove(30, 0, [1], 0);

    design.addPiece("HBRLC6", 31);
    design.addAttribute(31, 0, 6);
    design.addAttribute(31, 1, 'HBRLC');
    design.addMove(31, 0, [3], 0);
    design.addMove(31, 0, [2], 0);
    design.addMove(31, 0, [0], 0);
    design.addMove(31, 0, [1], 0);

    design.addPiece("HBL6", 32);
    design.addAttribute(32, 0, 6);
    design.addAttribute(32, 1, 'HBL');
    design.addMove(32, 0, [3], 0);
    design.addMove(32, 0, [2], 0);
    design.addMove(32, 0, [0], 0);
    design.addMove(32, 0, [1], 0);

    design.addPiece("HTR6", 33);
    design.addAttribute(33, 0, 6);
    design.addAttribute(33, 1, 'HTR');
    design.addMove(33, 0, [3], 0);
    design.addMove(33, 0, [2], 0);
    design.addMove(33, 0, [0], 0);
    design.addMove(33, 0, [1], 0);

    design.addPiece("HTL6", 34);
    design.addAttribute(34, 0, 6);
    design.addAttribute(34, 1, 'HTL');
    design.addMove(34, 0, [3], 0);
    design.addMove(34, 0, [2], 0);
    design.addMove(34, 0, [0], 0);
    design.addMove(34, 0, [1], 0);

    design.addPiece("HBR7", 35);
    design.addAttribute(35, 0, 7);
    design.addAttribute(35, 1, 'HBR');
    design.addMove(35, 0, [3], 0);
    design.addMove(35, 0, [2], 0);
    design.addMove(35, 0, [0], 0);
    design.addMove(35, 0, [1], 0);

    design.addPiece("HBLR7", 36);
    design.addAttribute(36, 0, 7);
    design.addAttribute(36, 1, 'HBLR');
    design.addMove(36, 0, [3], 0);
    design.addMove(36, 0, [2], 0);
    design.addMove(36, 0, [0], 0);
    design.addMove(36, 0, [1], 0);

    design.addPiece("HBL7", 37);
    design.addAttribute(37, 0, 7);
    design.addAttribute(37, 1, 'HBL');
    design.addMove(37, 0, [3], 0);
    design.addMove(37, 0, [2], 0);
    design.addMove(37, 0, [0], 0);
    design.addMove(37, 0, [1], 0);

    design.addPiece("HTR7", 38);
    design.addAttribute(38, 0, 7);
    design.addAttribute(38, 1, 'HTR');
    design.addMove(38, 0, [3], 0);
    design.addMove(38, 0, [2], 0);
    design.addMove(38, 0, [0], 0);
    design.addMove(38, 0, [1], 0);

    design.addPiece("HTLR7", 39);
    design.addAttribute(39, 0, 7);
    design.addAttribute(39, 1, 'HTLR');
    design.addMove(39, 0, [3], 0);
    design.addMove(39, 0, [2], 0);
    design.addMove(39, 0, [0], 0);
    design.addMove(39, 0, [1], 0);

    design.addPiece("HBLC7", 40);
    design.addAttribute(40, 0, 7);
    design.addAttribute(40, 1, 'HBLC');
    design.addMove(40, 0, [3], 0);
    design.addMove(40, 0, [2], 0);
    design.addMove(40, 0, [0], 0);
    design.addMove(40, 0, [1], 0);

    design.addPiece("HTBL7", 41);
    design.addAttribute(41, 0, 7);
    design.addAttribute(41, 1, 'HTBL');
    design.addMove(41, 0, [3], 0);
    design.addMove(41, 0, [2], 0);
    design.addMove(41, 0, [0], 0);
    design.addMove(41, 0, [1], 0);

    design.addPiece("HTBR7", 42);
    design.addAttribute(42, 0, 7);
    design.addAttribute(42, 1, 'HTBR');
    design.addMove(42, 0, [3], 0);
    design.addMove(42, 0, [2], 0);
    design.addMove(42, 0, [0], 0);
    design.addMove(42, 0, [1], 0);

    design.addPiece("HTL7", 43);
    design.addAttribute(43, 0, 7);
    design.addAttribute(43, 1, 'HTL');
    design.addMove(43, 0, [3], 0);
    design.addMove(43, 0, [2], 0);
    design.addMove(43, 0, [0], 0);
    design.addMove(43, 0, [1], 0);

    design.addPiece("HBR8", 44);
    design.addAttribute(44, 0, 8);
    design.addAttribute(44, 1, 'HBR');
    design.addMove(44, 0, [3], 0);
    design.addMove(44, 0, [2], 0);
    design.addMove(44, 0, [0], 0);
    design.addMove(44, 0, [1], 0);

    design.addPiece("HBL8", 45);
    design.addAttribute(45, 0, 8);
    design.addAttribute(45, 1, 'HBL');
    design.addMove(45, 0, [3], 0);
    design.addMove(45, 0, [2], 0);
    design.addMove(45, 0, [0], 0);
    design.addMove(45, 0, [1], 0);

    design.addPiece("HTR8", 46);
    design.addAttribute(46, 0, 8);
    design.addAttribute(46, 1, 'HTR');
    design.addMove(46, 0, [3], 0);
    design.addMove(46, 0, [2], 0);
    design.addMove(46, 0, [0], 0);
    design.addMove(46, 0, [1], 0);

    design.addPiece("HTL8", 47);
    design.addAttribute(47, 0, 8);
    design.addAttribute(47, 1, 'HTL');
    design.addMove(47, 0, [3], 0);
    design.addMove(47, 0, [2], 0);
    design.addMove(47, 0, [0], 0);
    design.addMove(47, 0, [1], 0);

    design.addPiece("HBR9", 48);
    design.addAttribute(48, 0, 9);
    design.addAttribute(48, 1, 'HBR');
    design.addMove(48, 0, [3], 0);
    design.addMove(48, 0, [2], 0);
    design.addMove(48, 0, [0], 0);
    design.addMove(48, 0, [1], 0);

    design.addPiece("HBL9", 49);
    design.addAttribute(49, 0, 9);
    design.addAttribute(49, 1, 'HBL');
    design.addMove(49, 0, [3], 0);
    design.addMove(49, 0, [2], 0);
    design.addMove(49, 0, [0], 0);
    design.addMove(49, 0, [1], 0);

    design.addPiece("HR9", 50);
    design.addAttribute(50, 0, 9);
    design.addAttribute(50, 1, 'HR');
    design.addMove(50, 0, [3], 0);
    design.addMove(50, 0, [2], 0);
    design.addMove(50, 0, [0], 0);
    design.addMove(50, 0, [1], 0);

    design.addPiece("HLR9", 51);
    design.addAttribute(51, 0, 9);
    design.addAttribute(51, 1, 'HLR');
    design.addMove(51, 0, [3], 0);
    design.addMove(51, 0, [2], 0);
    design.addMove(51, 0, [0], 0);
    design.addMove(51, 0, [1], 0);

    design.addPiece("HTRLC9", 52);
    design.addAttribute(52, 0, 9);
    design.addAttribute(52, 1, 'HTRLC');
    design.addMove(52, 0, [3], 0);
    design.addMove(52, 0, [2], 0);
    design.addMove(52, 0, [0], 0);
    design.addMove(52, 0, [1], 0);

    design.addPiece("HTL9", 53);
    design.addAttribute(53, 0, 9);
    design.addAttribute(53, 1, 'HTL');
    design.addMove(53, 0, [3], 0);
    design.addMove(53, 0, [2], 0);
    design.addMove(53, 0, [0], 0);
    design.addMove(53, 0, [1], 0);

    design.addPiece("HBR10", 54);
    design.addAttribute(54, 0, 10);
    design.addAttribute(54, 1, 'HBR');
    design.addMove(54, 0, [3], 0);
    design.addMove(54, 0, [2], 0);
    design.addMove(54, 0, [0], 0);
    design.addMove(54, 0, [1], 0);

    design.addPiece("HBL10", 55);
    design.addAttribute(55, 0, 10);
    design.addAttribute(55, 1, 'HBL');
    design.addMove(55, 0, [3], 0);
    design.addMove(55, 0, [2], 0);
    design.addMove(55, 0, [0], 0);
    design.addMove(55, 0, [1], 0);

    design.addPiece("HTR10", 56);
    design.addAttribute(56, 0, 10);
    design.addAttribute(56, 1, 'HTR');
    design.addMove(56, 0, [3], 0);
    design.addMove(56, 0, [2], 0);
    design.addMove(56, 0, [0], 0);
    design.addMove(56, 0, [1], 0);

    design.addPiece("HTL10", 57);
    design.addAttribute(57, 0, 10);
    design.addAttribute(57, 1, 'HTL');
    design.addMove(57, 0, [3], 0);
    design.addMove(57, 0, [2], 0);
    design.addMove(57, 0, [0], 0);
    design.addMove(57, 0, [1], 0);

    design.setup("You", "HBR1", 0);
    design.setup("You", "HBL1", 1);
    design.setup("You", "HTBR1", 8);
    design.setup("You", "HTBL1", 9);
    design.setup("You", "HTBR1", 16);
    design.setup("You", "HTRC1", 17);
    design.setup("You", "HBLR1", 18);
    design.setup("You", "HBL1", 19);
    design.setup("You", "HTR1", 24);
    design.setup("You", "HTLR1", 25);
    design.setup("You", "HTLR1", 26);
    design.setup("You", "HTL1", 27);
    design.setup("You", "HBR2", 2);
    design.setup("You", "HBL2", 3);
    design.setup("You", "HTR2", 10);
    design.setup("You", "HTL2", 11);
    design.setup("You", "HBR3", 4);
    design.setup("You", "HBLRC3", 5);
    design.setup("You", "HLR3", 6);
    design.setup("You", "HL3", 7);
    design.setup("You", "HTR3", 12);
    design.setup("You", "HTL3", 13);
    design.setup("You", "HBR4", 14);
    design.setup("You", "HBL4", 15);
    design.setup("You", "HTR4", 22);
    design.setup("You", "HTL4", 23);
    design.setup("You", "HBR5", 20);
    design.setup("You", "HBL5", 21);
    design.setup("You", "HTR5", 28);
    design.setup("You", "HTLRC5", 29);
    design.setup("You", "HLR5", 30);
    design.setup("You", "HL5", 31);
    design.setup("You", "HR6", 48);
    design.setup("You", "HLR6", 49);
    design.setup("You", "HBRLC6", 50);
    design.setup("You", "HBL6", 51);
    design.setup("You", "HTR6", 58);
    design.setup("You", "HTL6", 59);
    design.setup("You", "HBR7", 52);
    design.setup("You", "HBLR7", 53);
    design.setup("You", "HBLR7", 54);
    design.setup("You", "HBL7", 55);
    design.setup("You", "HTR7", 60);
    design.setup("You", "HTLR7", 61);
    design.setup("You", "HBLC7", 62);
    design.setup("You", "HTBL7", 63);
    design.setup("You", "HTBR7", 70);
    design.setup("You", "HTBL7", 71);
    design.setup("You", "HTR7", 78);
    design.setup("You", "HTL7", 79);
    design.setup("You", "HBR8", 56);
    design.setup("You", "HBL8", 57);
    design.setup("You", "HTR8", 64);
    design.setup("You", "HTL8", 65);
    design.setup("You", "HBR9", 66);
    design.setup("You", "HBL9", 67);
    design.setup("You", "HR9", 72);
    design.setup("You", "HLR9", 73);
    design.setup("You", "HTRLC9", 74);
    design.setup("You", "HTL9", 75);
    design.setup("You", "HBR10", 68);
    design.setup("You", "HBL10", 69);
    design.setup("You", "HTR10", 76);
    design.setup("You", "HTL10", 77);

    design.goal(0, "You", "HBR7", [0]);
    design.goal(0, "You", "HBLR7", [1]);
    design.goal(0, "You", "HBLR7", [2]);
    design.goal(0, "You", "HBL7", [3]);
    design.goal(0, "You", "HTR7", [8]);
    design.goal(0, "You", "HTLR7", [9]);
    design.goal(0, "You", "HBLC7", [10]);
    design.goal(0, "You", "HTBL7", [11]);
    design.goal(0, "You", "HTBR7", [18]);
    design.goal(0, "You", "HTBL7", [19]);
    design.goal(0, "You", "HTR7", [26]);
    design.goal(0, "You", "HTL7", [27]);
    design.goal(0, "You", "HBR10", [16]);
    design.goal(0, "You", "HBL10", [17]);
    design.goal(0, "You", "HTR10", [24]);
    design.goal(0, "You", "HTL10", [25]);
    design.goal(0, "You", "HBR1", [52]);
    design.goal(0, "You", "HBL1", [53]);
    design.goal(0, "You", "HTBR1", [60]);
    design.goal(0, "You", "HTBL1", [61]);
    design.goal(0, "You", "HTBR1", [68]);
    design.goal(0, "You", "HTRC1", [69]);
    design.goal(0, "You", "HBLR1", [70]);
    design.goal(0, "You", "HBL1", [71]);
    design.goal(0, "You", "HTR1", [76]);
    design.goal(0, "You", "HTLR1", [77]);
    design.goal(0, "You", "HTLR1", [78]);
    design.goal(0, "You", "HTL1", [79]);
    design.goal(0, "You", "HBR2", [54]);
    design.goal(0, "You", "HBL2", [55]);
    design.goal(0, "You", "HTR2", [62]);
    design.goal(0, "You", "HTL2", [63]);
}

Dagaz.View.configure = function(view) {
    view.defPiece("YouHBR1", "You HBR1");
    view.defPiece("YouHBL1", "You HBL1");
    view.defPiece("YouHTBR1", "You HTBR1");
    view.defPiece("YouHTBL1", "You HTBL1");
    view.defPiece("YouHTRC1", "You HTRC1");
    view.defPiece("YouHBLR1", "You HBLR1");
    view.defPiece("YouHTR1", "You HTR1");
    view.defPiece("YouHTLR1", "You HTLR1");
    view.defPiece("YouHTL1", "You HTL1");
    view.defPiece("YouHBR2", "You HBR2");
    view.defPiece("YouHBL2", "You HBL2");
    view.defPiece("YouHTR2", "You HTR2");
    view.defPiece("YouHTL2", "You HTL2");
    view.defPiece("YouHBR3", "You HBR3");
    view.defPiece("YouHBLRC3", "You HBLRC3");
    view.defPiece("YouHLR3", "You HLR3");
    view.defPiece("YouHL3", "You HL3");
    view.defPiece("YouHTR3", "You HTR3");
    view.defPiece("YouHTL3", "You HTL3");
    view.defPiece("YouHBR4", "You HBR4");
    view.defPiece("YouHBL4", "You HBL4");
    view.defPiece("YouHTR4", "You HTR4");
    view.defPiece("YouHTL4", "You HTL4");
    view.defPiece("YouHBR5", "You HBR5");
    view.defPiece("YouHBL5", "You HBL5");
    view.defPiece("YouHTR5", "You HTR5");
    view.defPiece("YouHTLRC5", "You HTLRC5");
    view.defPiece("YouHLR5", "You HLR5");
    view.defPiece("YouHL5", "You HL5");
    view.defPiece("YouHR6", "You HR6");
    view.defPiece("YouHLR6", "You HLR6");
    view.defPiece("YouHBRLC6", "You HBRLC6");
    view.defPiece("YouHBL6", "You HBL6");
    view.defPiece("YouHTR6", "You HTR6");
    view.defPiece("YouHTL6", "You HTL6");
    view.defPiece("YouHBR7", "You HBR7");
    view.defPiece("YouHBLR7", "You HBLR7");
    view.defPiece("YouHBL7", "You HBL7");
    view.defPiece("YouHTR7", "You HTR7");
    view.defPiece("YouHTLR7", "You HTLR7");
    view.defPiece("YouHBLC7", "You HBLC7");
    view.defPiece("YouHTBL7", "You HTBL7");
    view.defPiece("YouHTBR7", "You HTBR7");
    view.defPiece("YouHTL7", "You HTL7");
    view.defPiece("YouHBR8", "You HBR8");
    view.defPiece("YouHBL8", "You HBL8");
    view.defPiece("YouHTR8", "You HTR8");
    view.defPiece("YouHTL8", "You HTL8");
    view.defPiece("YouHBR9", "You HBR9");
    view.defPiece("YouHBL9", "You HBL9");
    view.defPiece("YouHR9", "You HR9");
    view.defPiece("YouHLR9", "You HLR9");
    view.defPiece("YouHTRLC9", "You HTRLC9");
    view.defPiece("YouHTL9", "You HTL9");
    view.defPiece("YouHBR10", "You HBR10");
    view.defPiece("YouHBL10", "You HBL10");
    view.defPiece("YouHTR10", "You HTR10");
    view.defPiece("YouHTL10", "You HTL10");
 
    view.defPosition("a10", 0, 0, 50, 50);
    view.defPosition("b10", 50, 0, 50, 50);
    view.defPosition("c10", 100, 0, 50, 50);
    view.defPosition("d10", 150, 0, 50, 50);
    view.defPosition("e10", 200, 0, 50, 50);
    view.defPosition("f10", 250, 0, 50, 50);
    view.defPosition("g10", 300, 0, 50, 50);
    view.defPosition("h10", 350, 0, 50, 50);
    view.defPosition("a9", 0, 50, 50, 50);
    view.defPosition("b9", 50, 50, 50, 50);
    view.defPosition("c9", 100, 50, 50, 50);
    view.defPosition("d9", 150, 50, 50, 50);
    view.defPosition("e9", 200, 50, 50, 50);
    view.defPosition("f9", 250, 50, 50, 50);
    view.defPosition("g9", 300, 50, 50, 50);
    view.defPosition("h9", 350, 50, 50, 50);
    view.defPosition("a8", 0, 100, 50, 50);
    view.defPosition("b8", 50, 100, 50, 50);
    view.defPosition("c8", 100, 100, 50, 50);
    view.defPosition("d8", 150, 100, 50, 50);
    view.defPosition("e8", 200, 100, 50, 50);
    view.defPosition("f8", 250, 100, 50, 50);
    view.defPosition("g8", 300, 100, 50, 50);
    view.defPosition("h8", 350, 100, 50, 50);
    view.defPosition("a7", 0, 150, 50, 50);
    view.defPosition("b7", 50, 150, 50, 50);
    view.defPosition("c7", 100, 150, 50, 50);
    view.defPosition("d7", 150, 150, 50, 50);
    view.defPosition("e7", 200, 150, 50, 50);
    view.defPosition("f7", 250, 150, 50, 50);
    view.defPosition("g7", 300, 150, 50, 50);
    view.defPosition("h7", 350, 150, 50, 50);
    view.defPosition("a6", 0, 200, 50, 50);
    view.defPosition("b6", 50, 200, 50, 50);
    view.defPosition("c6", 100, 200, 50, 50);
    view.defPosition("d6", 150, 200, 50, 50);
    view.defPosition("e6", 200, 200, 50, 50);
    view.defPosition("f6", 250, 200, 50, 50);
    view.defPosition("g6", 300, 200, 50, 50);
    view.defPosition("h6", 350, 200, 50, 50);
    view.defPosition("a5", 0, 250, 50, 50);
    view.defPosition("b5", 50, 250, 50, 50);
    view.defPosition("c5", 100, 250, 50, 50);
    view.defPosition("d5", 150, 250, 50, 50);
    view.defPosition("e5", 200, 250, 50, 50);
    view.defPosition("f5", 250, 250, 50, 50);
    view.defPosition("g5", 300, 250, 50, 50);
    view.defPosition("h5", 350, 250, 50, 50);
    view.defPosition("a4", 0, 300, 50, 50);
    view.defPosition("b4", 50, 300, 50, 50);
    view.defPosition("c4", 100, 300, 50, 50);
    view.defPosition("d4", 150, 300, 50, 50);
    view.defPosition("e4", 200, 300, 50, 50);
    view.defPosition("f4", 250, 300, 50, 50);
    view.defPosition("g4", 300, 300, 50, 50);
    view.defPosition("h4", 350, 300, 50, 50);
    view.defPosition("a3", 0, 350, 50, 50);
    view.defPosition("b3", 50, 350, 50, 50);
    view.defPosition("c3", 100, 350, 50, 50);
    view.defPosition("d3", 150, 350, 50, 50);
    view.defPosition("e3", 200, 350, 50, 50);
    view.defPosition("f3", 250, 350, 50, 50);
    view.defPosition("g3", 300, 350, 50, 50);
    view.defPosition("h3", 350, 350, 50, 50);
    view.defPosition("a2", 0, 400, 50, 50);
    view.defPosition("b2", 50, 400, 50, 50);
    view.defPosition("c2", 100, 400, 50, 50);
    view.defPosition("d2", 150, 400, 50, 50);
    view.defPosition("e2", 200, 400, 50, 50);
    view.defPosition("f2", 250, 400, 50, 50);
    view.defPosition("g2", 300, 400, 50, 50);
    view.defPosition("h2", 350, 400, 50, 50);
    view.defPosition("a1", 0, 450, 50, 50);
    view.defPosition("b1", 50, 450, 50, 50);
    view.defPosition("c1", 100, 450, 50, 50);
    view.defPosition("d1", 150, 450, 50, 50);
    view.defPosition("e1", 200, 450, 50, 50);
    view.defPosition("f1", 250, 450, 50, 50);
    view.defPosition("g1", 300, 450, 50, 50);
    view.defPosition("h1", 350, 450, 50, 50);
}
