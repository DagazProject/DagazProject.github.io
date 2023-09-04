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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("show-captures", "false");
    design.checkVersion("pass-partial", "true");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("heisei-extension", "1");
    design.checkVersion("chu-shogi-promotion", "true");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);

    design.addPosition("12a", [13, 12, 0, 1, 0, 0, 0, 0]);
    design.addPosition("11a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("10a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("9a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("8a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("7a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("6a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("5a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("4a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("3a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("2a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("1a", [0, 12, 11, 0, -1, 0, 0, 0]);
    design.addPosition("12b", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1b", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12c", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1c", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12d", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1d", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12e", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1e", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12f", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1f", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12g", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1g", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12h", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1h", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12i", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1i", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12j", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1j", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12k", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1k", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12l", [0, 0, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("10l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("9l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("8l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("7l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("6l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("5l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("4l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("3l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("2l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("1l", [0, 0, 0, 0, -1, 0, -13, -12]);
    design.addPosition("T1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("T2", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("promotion-zone", 2, [107, 106, 105, 104, 103, 102, 101, 100, 99, 98, 97, 96, 119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 131, 130, 129, 128, 127, 126, 125, 124, 123, 122, 121, 120, 143, 142, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132]);
    design.addZone("promotion-zone", 1, [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	7);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-8);
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.MODE,	1);	// left-1-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.MODE,	2);	// left-nw-type
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.MODE,	3);	// left-ne-type
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// normal-type

    design.addPiece("Pawn", 0, 1);
    design.addMove(0, 0, [7], 0);

    design.addPiece("Go-Between", 1, 1);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [1], 0);

    design.addPiece("Bishop", 2, 10);
    design.addMove(2, 1, [6, 6], 0);
    design.addMove(2, 1, [2, 2], 0);
    design.addMove(2, 1, [5, 5], 0);
    design.addMove(2, 1, [0, 0], 0);

    design.addPiece("Bishop!", 3, 10);
    design.addMove(3, 1, [6, 6], 0);
    design.addMove(3, 1, [2, 2], 0);
    design.addMove(3, 1, [5, 5], 0);
    design.addMove(3, 1, [0, 0], 0);

    design.addPiece("Rook", 4, 12);
    design.addMove(4, 1, [7, 7], 0);
    design.addMove(4, 1, [1, 1], 0);
    design.addMove(4, 1, [4, 4], 0);
    design.addMove(4, 1, [3, 3], 0);

    design.addPiece("Rook!", 5, 12);
    design.addMove(5, 1, [7, 7], 0);
    design.addMove(5, 1, [1, 1], 0);
    design.addMove(5, 1, [4, 4], 0);
    design.addMove(5, 1, [3, 3], 0);

    design.addPiece("Free-King", 6, 22);
    design.addDrop(6, 6, [], 0);
    design.addMove(6, 1, [7, 7], 0);
    design.addMove(6, 1, [1, 1], 0);
    design.addMove(6, 1, [4, 4], 0);
    design.addMove(6, 1, [3, 3], 0);
    design.addMove(6, 1, [6, 6], 0);
    design.addMove(6, 1, [2, 2], 0);
    design.addMove(6, 1, [5, 5], 0);
    design.addMove(6, 1, [0, 0], 0);

    design.addPiece("Drunk-Elephant!", 7, 5);
    design.addMove(7, 0, [7], 0);
    design.addMove(7, 0, [4], 0);
    design.addMove(7, 0, [3], 0);
    design.addMove(7, 0, [6], 0);
    design.addMove(7, 0, [2], 0);
    design.addMove(7, 0, [5], 0);
    design.addMove(7, 0, [0], 0);

    design.addPiece("Flying-Ox", 8, 16);
    design.addDrop(8, 6, [], 0);
    design.addMove(8, 1, [7, 7], 0);
    design.addMove(8, 1, [1, 1], 0);
    design.addMove(8, 1, [6, 6], 0);
    design.addMove(8, 1, [2, 2], 0);
    design.addMove(8, 1, [5, 5], 0);
    design.addMove(8, 1, [0, 0], 0);

    design.addPiece("Free-Boar", 9, 16);
    design.addDrop(9, 6, [], 0);
    design.addMove(9, 1, [4, 4], 0);
    design.addMove(9, 1, [3, 3], 0);
    design.addMove(9, 1, [6, 6], 0);
    design.addMove(9, 1, [2, 2], 0);
    design.addMove(9, 1, [5, 5], 0);
    design.addMove(9, 1, [0, 0], 0);

    design.addPiece("Horned-Falcon", 10, 19);
    design.addMove(10, 1, [1, 1], 0);
    design.addMove(10, 1, [4, 4], 0);
    design.addMove(10, 1, [3, 3], 0);
    design.addMove(10, 1, [6, 6], 0);
    design.addMove(10, 1, [2, 2], 0);
    design.addMove(10, 1, [5, 5], 0);
    design.addMove(10, 1, [0, 0], 0);
    design.addMove(10, 2, [7], 0);
    design.addMove(10, 3, [7, 7], 0);
    design.addMove(10, 0, [7], 1);
    design.addMove(10, 0, [1], 1);

    design.addPiece("Soaring-Eagle", 11, 18);
    design.addMove(11, 1, [7, 7], 0);
    design.addMove(11, 1, [1, 1], 0);
    design.addMove(11, 1, [4, 4], 0);
    design.addMove(11, 1, [3, 3], 0);
    design.addMove(11, 1, [2, 2], 0);
    design.addMove(11, 1, [0, 0], 0);
    design.addMove(11, 4, [6], 0);
    design.addMove(11, 3, [6, 6], 0);
    design.addMove(11, 5, [5], 0);
    design.addMove(11, 3, [5, 5], 0);
    design.addMove(11, 0, [6], 2);
    design.addMove(11, 0, [0], 2);
    design.addMove(11, 0, [5], 3);
    design.addMove(11, 0, [2], 3);

    design.addPiece("Whale", 12, 10);
    design.addDrop(12, 6, [], 0);
    design.addMove(12, 1, [7, 7], 0);
    design.addMove(12, 1, [1, 1], 0);
    design.addMove(12, 1, [2, 2], 0);
    design.addMove(12, 1, [0, 0], 0);

    design.addPiece("White-Horse", 13, 14);
    design.addDrop(13, 6, [], 0);
    design.addMove(13, 1, [7, 7], 0);
    design.addMove(13, 1, [1, 1], 0);
    design.addMove(13, 1, [6, 6], 0);
    design.addMove(13, 1, [5, 5], 0);

    design.addPiece("Lion", 14, 20);
    design.addMove(14, 2, [7], 0);
    design.addMove(14, 2, [1], 0);
    design.addMove(14, 2, [4], 0);
    design.addMove(14, 2, [3], 0);
    design.addMove(14, 2, [6], 0);
    design.addMove(14, 2, [0], 0);
    design.addMove(14, 2, [2], 0);
    design.addMove(14, 2, [5], 0);
    design.addMove(14, 3, [7, 7], 0);
    design.addMove(14, 3, [6, 6], 0);
    design.addMove(14, 3, [1, 1], 0);
    design.addMove(14, 3, [2, 2], 0);
    design.addMove(14, 3, [3, 3], 0);
    design.addMove(14, 3, [0, 0], 0);
    design.addMove(14, 3, [4, 4], 0);
    design.addMove(14, 3, [5, 5], 0);
    design.addMove(14, 3, [7, 5], 0);
    design.addMove(14, 3, [7, 6], 0);
    design.addMove(14, 3, [1, 0], 0);
    design.addMove(14, 3, [1, 2], 0);
    design.addMove(14, 3, [3, 5], 0);
    design.addMove(14, 3, [3, 0], 0);
    design.addMove(14, 3, [4, 6], 0);
    design.addMove(14, 3, [4, 2], 0);
    design.addMove(14, 0, [7], 1);
    design.addMove(14, 0, [1], 1);
    design.addMove(14, 0, [4], 1);
    design.addMove(14, 0, [3], 1);
    design.addMove(14, 0, [6], 1);
    design.addMove(14, 0, [0], 1);
    design.addMove(14, 0, [2], 1);
    design.addMove(14, 0, [5], 1);

    design.addPiece("Lion!", 15, 20);
    design.addDrop(15, 6, [], 0);
    design.addMove(15, 2, [7], 0);
    design.addMove(15, 2, [1], 0);
    design.addMove(15, 2, [4], 0);
    design.addMove(15, 2, [3], 0);
    design.addMove(15, 2, [6], 0);
    design.addMove(15, 2, [0], 0);
    design.addMove(15, 2, [2], 0);
    design.addMove(15, 2, [5], 0);
    design.addMove(15, 3, [7, 7], 0);
    design.addMove(15, 3, [6, 6], 0);
    design.addMove(15, 3, [1, 1], 0);
    design.addMove(15, 3, [2, 2], 0);
    design.addMove(15, 3, [3, 3], 0);
    design.addMove(15, 3, [0, 0], 0);
    design.addMove(15, 3, [4, 4], 0);
    design.addMove(15, 3, [5, 5], 0);
    design.addMove(15, 3, [7, 5], 0);
    design.addMove(15, 3, [7, 6], 0);
    design.addMove(15, 3, [1, 0], 0);
    design.addMove(15, 3, [1, 2], 0);
    design.addMove(15, 3, [3, 5], 0);
    design.addMove(15, 3, [3, 0], 0);
    design.addMove(15, 3, [4, 6], 0);
    design.addMove(15, 3, [4, 2], 0);
    design.addMove(15, 0, [7], 1);
    design.addMove(15, 0, [1], 1);
    design.addMove(15, 0, [4], 1);
    design.addMove(15, 0, [3], 1);
    design.addMove(15, 0, [6], 1);
    design.addMove(15, 0, [0], 1);
    design.addMove(15, 0, [2], 1);
    design.addMove(15, 0, [5], 1);

    design.addPiece("Dragon-King", 16, 17);
    design.addMove(16, 1, [7, 7], 0);
    design.addMove(16, 1, [1, 1], 0);
    design.addMove(16, 1, [4, 4], 0);
    design.addMove(16, 1, [3, 3], 0);
    design.addMove(16, 0, [6], 0);
    design.addMove(16, 0, [2], 0);
    design.addMove(16, 0, [5], 0);
    design.addMove(16, 0, [0], 0);

    design.addPiece("Dragon-King!", 17, 17);
    design.addMove(17, 1, [7, 7], 0);
    design.addMove(17, 1, [1, 1], 0);
    design.addMove(17, 1, [4, 4], 0);
    design.addMove(17, 1, [3, 3], 0);
    design.addMove(17, 0, [6], 0);
    design.addMove(17, 0, [2], 0);
    design.addMove(17, 0, [5], 0);
    design.addMove(17, 0, [0], 0);

    design.addPiece("Dragon-Horse", 18, 12);
    design.addMove(18, 1, [6, 6], 0);
    design.addMove(18, 1, [2, 2], 0);
    design.addMove(18, 1, [5, 5], 0);
    design.addMove(18, 1, [0, 0], 0);
    design.addMove(18, 0, [7], 0);
    design.addMove(18, 0, [1], 0);
    design.addMove(18, 0, [4], 0);
    design.addMove(18, 0, [3], 0);

    design.addPiece("Dragon-Horse!", 19, 12);
    design.addMove(19, 1, [6, 6], 0);
    design.addMove(19, 1, [2, 2], 0);
    design.addMove(19, 1, [5, 5], 0);
    design.addMove(19, 1, [0, 0], 0);
    design.addMove(19, 0, [7], 0);
    design.addMove(19, 0, [1], 0);
    design.addMove(19, 0, [4], 0);
    design.addMove(19, 0, [3], 0);

    design.addPiece("Kylin", 20, 8);
    design.addDrop(20, 6, [], 0);
    design.addMove(20, 3, [7, 7], 0);
    design.addMove(20, 3, [1, 1], 0);
    design.addMove(20, 3, [4, 4], 0);
    design.addMove(20, 3, [3, 3], 0);
    design.addMove(20, 0, [6], 0);
    design.addMove(20, 0, [2], 0);
    design.addMove(20, 0, [5], 0);
    design.addMove(20, 0, [0], 0);

    design.addPiece("Phoenix", 21, 8);
    design.addDrop(21, 6, [], 0);
    design.addMove(21, 0, [7], 0);
    design.addMove(21, 0, [1], 0);
    design.addMove(21, 0, [4], 0);
    design.addMove(21, 0, [3], 0);
    design.addMove(21, 3, [6, 6], 0);
    design.addMove(21, 3, [2, 2], 0);
    design.addMove(21, 3, [5, 5], 0);
    design.addMove(21, 3, [0, 0], 0);

    design.addPiece("Reverse-Chariot", 22, 6);
    design.addDrop(22, 6, [], 0);
    design.addMove(22, 1, [7, 7], 0);
    design.addMove(22, 1, [1, 1], 0);

    design.addPiece("Side-Mover", 23, 7);
    design.addDrop(23, 6, [], 0);
    design.addMove(23, 0, [7], 0);
    design.addMove(23, 0, [1], 0);
    design.addMove(23, 1, [4, 4], 0);
    design.addMove(23, 1, [3, 3], 0);

    design.addPiece("Side-Mover!", 24, 7);
    design.addDrop(24, 6, [], 0);
    design.addMove(24, 0, [7], 0);
    design.addMove(24, 0, [1], 0);
    design.addMove(24, 1, [4, 4], 0);
    design.addMove(24, 1, [3, 3], 0);

    design.addPiece("Vertical-Mover", 25, 7);
    design.addDrop(25, 6, [], 0);
    design.addMove(25, 0, [4], 0);
    design.addMove(25, 0, [3], 0);
    design.addMove(25, 1, [7, 7], 0);
    design.addMove(25, 1, [1, 1], 0);

    design.addPiece("Vertical-Mover!", 26, 7);
    design.addDrop(26, 6, [], 0);
    design.addMove(26, 0, [4], 0);
    design.addMove(26, 0, [3], 0);
    design.addMove(26, 1, [7, 7], 0);
    design.addMove(26, 1, [1, 1], 0);

    design.addPiece("Flying-Stag", 27, 9);
    design.addMove(27, 1, [7, 7], 0);
    design.addMove(27, 1, [1, 1], 0);
    design.addMove(27, 0, [4], 0);
    design.addMove(27, 0, [3], 0);
    design.addMove(27, 0, [6], 0);
    design.addMove(27, 0, [2], 0);
    design.addMove(27, 0, [5], 0);
    design.addMove(27, 0, [0], 0);

    design.addPiece("Lance", 28, 6);
    design.addDrop(28, 6, [], 0);
    design.addMove(28, 1, [7, 7], 0);

    design.addPiece("King", 29, 10000);
    design.addMove(29, 0, [7], 0);
    design.addMove(29, 0, [1], 0);
    design.addMove(29, 0, [4], 0);
    design.addMove(29, 0, [3], 0);
    design.addMove(29, 0, [6], 0);
    design.addMove(29, 0, [2], 0);
    design.addMove(29, 0, [5], 0);
    design.addMove(29, 0, [0], 0);

    design.addPiece("Crown-Prince", 30, 10000);
    design.addMove(30, 0, [7], 0);
    design.addMove(30, 0, [1], 0);
    design.addMove(30, 0, [4], 0);
    design.addMove(30, 0, [3], 0);
    design.addMove(30, 0, [6], 0);
    design.addMove(30, 0, [2], 0);
    design.addMove(30, 0, [5], 0);
    design.addMove(30, 0, [0], 0);

    design.addPiece("Blind-Tiger", 31, 4);
    design.addMove(31, 0, [1], 0);
    design.addMove(31, 0, [4], 0);
    design.addMove(31, 0, [3], 0);
    design.addMove(31, 0, [6], 0);
    design.addMove(31, 0, [2], 0);
    design.addMove(31, 0, [5], 0);
    design.addMove(31, 0, [0], 0);

    design.addPiece("Drunk-Elephant", 32, 5);
    design.addMove(32, 0, [7], 0);
    design.addMove(32, 0, [4], 0);
    design.addMove(32, 0, [3], 0);
    design.addMove(32, 0, [6], 0);
    design.addMove(32, 0, [2], 0);
    design.addMove(32, 0, [5], 0);
    design.addMove(32, 0, [0], 0);

    design.addPiece("Ferocious-Leopard", 33, 3);
    design.addMove(33, 0, [7], 0);
    design.addMove(33, 0, [1], 0);
    design.addMove(33, 0, [6], 0);
    design.addMove(33, 0, [2], 0);
    design.addMove(33, 0, [5], 0);
    design.addMove(33, 0, [0], 0);

    design.addPiece("Gold-General", 34, 3);
    design.addMove(34, 0, [7], 0);
    design.addMove(34, 0, [1], 0);
    design.addMove(34, 0, [4], 0);
    design.addMove(34, 0, [3], 0);
    design.addMove(34, 0, [6], 0);
    design.addMove(34, 0, [5], 0);

    design.addPiece("Tokin", 35, 3);
    design.addMove(35, 0, [7], 0);
    design.addMove(35, 0, [1], 0);
    design.addMove(35, 0, [4], 0);
    design.addMove(35, 0, [3], 0);
    design.addMove(35, 0, [6], 0);
    design.addMove(35, 0, [5], 0);

    design.addPiece("Silver-General", 36, 2);
    design.addDrop(36, 6, [], 0);
    design.addMove(36, 0, [7], 0);
    design.addMove(36, 0, [6], 0);
    design.addMove(36, 0, [2], 0);
    design.addMove(36, 0, [5], 0);
    design.addMove(36, 0, [0], 0);

    design.addPiece("Copper-General", 37, 1);
    design.addDrop(37, 6, [], 0);
    design.addMove(37, 0, [7], 0);
    design.addMove(37, 0, [1], 0);
    design.addMove(37, 0, [6], 0);
    design.addMove(37, 0, [5], 0);

    design.setup("White", "Go-Between", 51);
    design.setup("White", "Go-Between", 56);
    design.setup("White", "Pawn", 47);
    design.setup("White", "Pawn", 46);
    design.setup("White", "Pawn", 45);
    design.setup("White", "Pawn", 44);
    design.setup("White", "Pawn", 43);
    design.setup("White", "Pawn", 42);
    design.setup("White", "Pawn", 41);
    design.setup("White", "Pawn", 40);
    design.setup("White", "Pawn", 39);
    design.setup("White", "Pawn", 38);
    design.setup("White", "Pawn", 37);
    design.setup("White", "Pawn", 36);
    design.setup("White", "Ferocious-Leopard", 1);
    design.setup("White", "Ferocious-Leopard", 10);
    design.setup("White", "Gold-General", 4);
    design.setup("White", "Gold-General", 7);
    design.setup("White", "King", 6);
    design.setup("White", "Drunk-Elephant", 5);
    design.setup("White", "Bishop", 14);
    design.setup("White", "Bishop", 21);
    design.setup("White", "Blind-Tiger", 16);
    design.setup("White", "Blind-Tiger", 19);
    design.setup("White", "Rook", 26);
    design.setup("White", "Rook", 33);
    design.setup("White", "Dragon-Horse", 27);
    design.setup("White", "Dragon-Horse", 32);
    design.setup("White", "Dragon-King", 28);
    design.setup("White", "Dragon-King", 31);
    design.setup("White", "Lion", 30);
    design.setup("White", "Free-King", 29);
    design.reserve("White", "Lance", 2);
    design.reserve("White", "Copper-General", 2);
    design.reserve("White", "Silver-General", 2);
    design.reserve("White", "Reverse-Chariot", 2);
    design.reserve("White", "Kylin", 1);
    design.reserve("White", "Phoenix", 1);
    design.reserve("White", "Side-Mover", 2);
    design.reserve("White", "Vertical-Mover", 2);
    design.reserve("White", "White-Horse", 2);
    design.reserve("White", "Side-Mover!", 2);
    design.reserve("White", "Vertical-Mover!", 2);
    design.reserve("White", "Whale", 2);
    design.reserve("White", "Lion!", 1);
    design.reserve("White", "Free-King", 1);
    design.reserve("White", "Free-Boar", 2);
    design.reserve("White", "Flying-Ox", 2);
    design.setup("Black", "Go-Between", 87);
    design.setup("Black", "Go-Between", 92);
    design.setup("Black", "Pawn", 107);
    design.setup("Black", "Pawn", 106);
    design.setup("Black", "Pawn", 105);
    design.setup("Black", "Pawn", 104);
    design.setup("Black", "Pawn", 103);
    design.setup("Black", "Pawn", 102);
    design.setup("Black", "Pawn", 101);
    design.setup("Black", "Pawn", 100);
    design.setup("Black", "Pawn", 99);
    design.setup("Black", "Pawn", 98);
    design.setup("Black", "Pawn", 97);
    design.setup("Black", "Pawn", 96);
    design.setup("Black", "Ferocious-Leopard", 133);
    design.setup("Black", "Ferocious-Leopard", 142);
    design.setup("Black", "Gold-General", 136);
    design.setup("Black", "Gold-General", 139);
    design.setup("Black", "King", 137);
    design.setup("Black", "Drunk-Elephant", 138);
    design.setup("Black", "Bishop", 122);
    design.setup("Black", "Bishop", 129);
    design.setup("Black", "Blind-Tiger", 124);
    design.setup("Black", "Blind-Tiger", 127);
    design.setup("Black", "Rook", 110);
    design.setup("Black", "Rook", 117);
    design.setup("Black", "Dragon-Horse", 111);
    design.setup("Black", "Dragon-Horse", 116);
    design.setup("Black", "Dragon-King", 112);
    design.setup("Black", "Dragon-King", 115);
    design.setup("Black", "Lion", 113);
    design.setup("Black", "Free-King", 114);
    design.reserve("Black", "Lance", 2);
    design.reserve("Black", "Copper-General", 2);
    design.reserve("Black", "Silver-General", 2);
    design.reserve("Black", "Reverse-Chariot", 2);
    design.reserve("Black", "Kylin", 1);
    design.reserve("Black", "Phoenix", 1);
    design.reserve("Black", "Side-Mover", 2);
    design.reserve("Black", "Vertical-Mover", 2);
    design.reserve("Black", "White-Horse", 2);
    design.reserve("Black", "Side-Mover!", 2);
    design.reserve("Black", "Vertical-Mover!", 2);
    design.reserve("Black", "Whale", 2);
    design.reserve("Black", "Lion!", 1);
    design.reserve("Black", "Free-King", 1);
    design.reserve("Black", "Free-Boar", 2);
    design.reserve("Black", "Flying-Ox", 2);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteGo-Between", "White Go-Between");
    view.defPiece("BlackGo-Between", "Black Go-Between");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("WhiteBishop!", "White Bishop!");
    view.defPiece("BlackBishop!", "Black Bishop!");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteRook!", "White Rook!");
    view.defPiece("BlackRook!", "Black Rook!");
    view.defPiece("WhiteFree-King", "White Free-King");
    view.defPiece("BlackFree-King", "Black Free-King");
    view.defPiece("WhiteDrunk-Elephant!", "White Drunk-Elephant!");
    view.defPiece("BlackDrunk-Elephant!", "Black Drunk-Elephant!");
    view.defPiece("WhiteFlying-Ox", "White Flying-Ox");
    view.defPiece("BlackFlying-Ox", "Black Flying-Ox");
    view.defPiece("WhiteFree-Boar", "White Free-Boar");
    view.defPiece("BlackFree-Boar", "Black Free-Boar");
    view.defPiece("WhiteHorned-Falcon", "White Horned-Falcon");
    view.defPiece("BlackHorned-Falcon", "Black Horned-Falcon");
    view.defPiece("WhiteSoaring-Eagle", "White Soaring-Eagle");
    view.defPiece("BlackSoaring-Eagle", "Black Soaring-Eagle");
    view.defPiece("WhiteWhale", "White Whale");
    view.defPiece("BlackWhale", "Black Whale");
    view.defPiece("WhiteWhite-Horse", "White White-Horse");
    view.defPiece("BlackWhite-Horse", "Black White-Horse");
    view.defPiece("WhiteLion", "White Lion");
    view.defPiece("BlackLion", "Black Lion");
    view.defPiece("WhiteLion!", "White Lion!");
    view.defPiece("BlackLion!", "Black Lion!");
    view.defPiece("WhiteDragon-King", "White Dragon-King");
    view.defPiece("BlackDragon-King", "Black Dragon-King");
    view.defPiece("WhiteDragon-King!", "White Dragon-King!");
    view.defPiece("BlackDragon-King!", "Black Dragon-King!");
    view.defPiece("WhiteDragon-Horse", "White Dragon-Horse");
    view.defPiece("BlackDragon-Horse", "Black Dragon-Horse");
    view.defPiece("WhiteDragon-Horse!", "White Dragon-Horse!");
    view.defPiece("BlackDragon-Horse!", "Black Dragon-Horse!");
    view.defPiece("WhiteKylin", "White Kylin");
    view.defPiece("BlackKylin", "Black Kylin");
    view.defPiece("WhitePhoenix", "White Phoenix");
    view.defPiece("BlackPhoenix", "Black Phoenix");
    view.defPiece("WhiteReverse-Chariot", "White Reverse-Chariot");
    view.defPiece("BlackReverse-Chariot", "Black Reverse-Chariot");
    view.defPiece("WhiteSide-Mover", "White Side-Mover");
    view.defPiece("BlackSide-Mover", "Black Side-Mover");
    view.defPiece("WhiteSide-Mover!", "White Side-Mover!");
    view.defPiece("BlackSide-Mover!", "Black Side-Mover!");
    view.defPiece("WhiteVertical-Mover", "White Vertical-Mover");
    view.defPiece("BlackVertical-Mover", "Black Vertical-Mover");
    view.defPiece("WhiteVertical-Mover!", "White Vertical-Mover!");
    view.defPiece("BlackVertical-Mover!", "Black Vertical-Mover!");
    view.defPiece("WhiteFlying-Stag", "White Flying-Stag");
    view.defPiece("BlackFlying-Stag", "Black Flying-Stag");
    view.defPiece("WhiteLance", "White Lance");
    view.defPiece("BlackLance", "Black Lance");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("WhiteCrown-Prince", "White Crown-Prince");
    view.defPiece("BlackCrown-Prince", "Black Crown-Prince");
    view.defPiece("WhiteBlind-Tiger", "White Blind-Tiger");
    view.defPiece("BlackBlind-Tiger", "Black Blind-Tiger");
    view.defPiece("WhiteDrunk-Elephant", "White Drunk-Elephant");
    view.defPiece("BlackDrunk-Elephant", "Black Drunk-Elephant");
    view.defPiece("WhiteFerocious-Leopard", "White Ferocious-Leopard");
    view.defPiece("BlackFerocious-Leopard", "Black Ferocious-Leopard");
    view.defPiece("WhiteGold-General", "White Gold-General");
    view.defPiece("BlackGold-General", "Black Gold-General");
    view.defPiece("WhiteTokin", "White Tokin");
    view.defPiece("BlackTokin", "Black Tokin");
    view.defPiece("WhiteSilver-General", "White Silver-General");
    view.defPiece("BlackSilver-General", "Black Silver-General");
    view.defPiece("WhiteCopper-General", "White Copper-General");
    view.defPiece("BlackCopper-General", "Black Copper-General");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("12a", 5, 5, 49, 49);
    view.defPosition("11a", 40, 5, 49, 49);
    view.defPosition("10a", 75, 5, 49, 49);
    view.defPosition("9a", 110, 5, 49, 49);
    view.defPosition("8a", 145, 5, 49, 49);
    view.defPosition("7a", 180, 5, 49, 49);
    view.defPosition("6a", 215, 5, 49, 49);
    view.defPosition("5a", 250, 5, 49, 49);
    view.defPosition("4a", 285, 5, 49, 49);
    view.defPosition("3a", 320, 5, 49, 49);
    view.defPosition("2a", 355, 5, 49, 49);
    view.defPosition("1a", 390, 5, 49, 49);
    view.defPosition("12b", 5, 40, 49, 49);
    view.defPosition("11b", 40, 40, 49, 49);
    view.defPosition("10b", 75, 40, 49, 49);
    view.defPosition("9b", 110, 40, 49, 49);
    view.defPosition("8b", 145, 40, 49, 49);
    view.defPosition("7b", 180, 40, 49, 49);
    view.defPosition("6b", 215, 40, 49, 49);
    view.defPosition("5b", 250, 40, 49, 49);
    view.defPosition("4b", 285, 40, 49, 49);
    view.defPosition("3b", 320, 40, 49, 49);
    view.defPosition("2b", 355, 40, 49, 49);
    view.defPosition("1b", 390, 40, 49, 49);
    view.defPosition("12c", 5, 75, 49, 49);
    view.defPosition("11c", 40, 75, 49, 49);
    view.defPosition("10c", 75, 75, 49, 49);
    view.defPosition("9c", 110, 75, 49, 49);
    view.defPosition("8c", 145, 75, 49, 49);
    view.defPosition("7c", 180, 75, 49, 49);
    view.defPosition("6c", 215, 75, 49, 49);
    view.defPosition("5c", 250, 75, 49, 49);
    view.defPosition("4c", 285, 75, 49, 49);
    view.defPosition("3c", 320, 75, 49, 49);
    view.defPosition("2c", 355, 75, 49, 49);
    view.defPosition("1c", 390, 75, 49, 49);
    view.defPosition("12d", 5, 110, 49, 49);
    view.defPosition("11d", 40, 110, 49, 49);
    view.defPosition("10d", 75, 110, 49, 49);
    view.defPosition("9d", 110, 110, 49, 49);
    view.defPosition("8d", 145, 110, 49, 49);
    view.defPosition("7d", 180, 110, 49, 49);
    view.defPosition("6d", 215, 110, 49, 49);
    view.defPosition("5d", 250, 110, 49, 49);
    view.defPosition("4d", 285, 110, 49, 49);
    view.defPosition("3d", 320, 110, 49, 49);
    view.defPosition("2d", 355, 110, 49, 49);
    view.defPosition("1d", 390, 110, 49, 49);
    view.defPosition("12e", 5, 145, 49, 49);
    view.defPosition("11e", 40, 145, 49, 49);
    view.defPosition("10e", 75, 145, 49, 49);
    view.defPosition("9e", 110, 145, 49, 49);
    view.defPosition("8e", 145, 145, 49, 49);
    view.defPosition("7e", 180, 145, 49, 49);
    view.defPosition("6e", 215, 145, 49, 49);
    view.defPosition("5e", 250, 145, 49, 49);
    view.defPosition("4e", 285, 145, 49, 49);
    view.defPosition("3e", 320, 145, 49, 49);
    view.defPosition("2e", 355, 145, 49, 49);
    view.defPosition("1e", 390, 145, 49, 49);
    view.defPosition("12f", 5, 180, 49, 49);
    view.defPosition("11f", 40, 180, 49, 49);
    view.defPosition("10f", 75, 180, 49, 49);
    view.defPosition("9f", 110, 180, 49, 49);
    view.defPosition("8f", 145, 180, 49, 49);
    view.defPosition("7f", 180, 180, 49, 49);
    view.defPosition("6f", 215, 180, 49, 49);
    view.defPosition("5f", 250, 180, 49, 49);
    view.defPosition("4f", 285, 180, 49, 49);
    view.defPosition("3f", 320, 180, 49, 49);
    view.defPosition("2f", 355, 180, 49, 49);
    view.defPosition("1f", 390, 180, 49, 49);
    view.defPosition("12g", 5, 215, 49, 49);
    view.defPosition("11g", 40, 215, 49, 49);
    view.defPosition("10g", 75, 215, 49, 49);
    view.defPosition("9g", 110, 215, 49, 49);
    view.defPosition("8g", 145, 215, 49, 49);
    view.defPosition("7g", 180, 215, 49, 49);
    view.defPosition("6g", 215, 215, 49, 49);
    view.defPosition("5g", 250, 215, 49, 49);
    view.defPosition("4g", 285, 215, 49, 49);
    view.defPosition("3g", 320, 215, 49, 49);
    view.defPosition("2g", 355, 215, 49, 49);
    view.defPosition("1g", 390, 215, 49, 49);
    view.defPosition("12h", 5, 250, 49, 49);
    view.defPosition("11h", 40, 250, 49, 49);
    view.defPosition("10h", 75, 250, 49, 49);
    view.defPosition("9h", 110, 250, 49, 49);
    view.defPosition("8h", 145, 250, 49, 49);
    view.defPosition("7h", 180, 250, 49, 49);
    view.defPosition("6h", 215, 250, 49, 49);
    view.defPosition("5h", 250, 250, 49, 49);
    view.defPosition("4h", 285, 250, 49, 49);
    view.defPosition("3h", 320, 250, 49, 49);
    view.defPosition("2h", 355, 250, 49, 49);
    view.defPosition("1h", 390, 250, 49, 49);
    view.defPosition("12i", 5, 285, 49, 49);
    view.defPosition("11i", 40, 285, 49, 49);
    view.defPosition("10i", 75, 285, 49, 49);
    view.defPosition("9i", 110, 285, 49, 49);
    view.defPosition("8i", 145, 285, 49, 49);
    view.defPosition("7i", 180, 285, 49, 49);
    view.defPosition("6i", 215, 285, 49, 49);
    view.defPosition("5i", 250, 285, 49, 49);
    view.defPosition("4i", 285, 285, 49, 49);
    view.defPosition("3i", 320, 285, 49, 49);
    view.defPosition("2i", 355, 285, 49, 49);
    view.defPosition("1i", 390, 285, 49, 49);
    view.defPosition("12j", 5, 320, 49, 49);
    view.defPosition("11j", 40, 320, 49, 49);
    view.defPosition("10j", 75, 320, 49, 49);
    view.defPosition("9j", 110, 320, 49, 49);
    view.defPosition("8j", 145, 320, 49, 49);
    view.defPosition("7j", 180, 320, 49, 49);
    view.defPosition("6j", 215, 320, 49, 49);
    view.defPosition("5j", 250, 320, 49, 49);
    view.defPosition("4j", 285, 320, 49, 49);
    view.defPosition("3j", 320, 320, 49, 49);
    view.defPosition("2j", 355, 320, 49, 49);
    view.defPosition("1j", 390, 320, 49, 49);
    view.defPosition("12k", 5, 355, 49, 49);
    view.defPosition("11k", 40, 355, 49, 49);
    view.defPosition("10k", 75, 355, 49, 49);
    view.defPosition("9k", 110, 355, 49, 49);
    view.defPosition("8k", 145, 355, 49, 49);
    view.defPosition("7k", 180, 355, 49, 49);
    view.defPosition("6k", 215, 355, 49, 49);
    view.defPosition("5k", 250, 355, 49, 49);
    view.defPosition("4k", 285, 355, 49, 49);
    view.defPosition("3k", 320, 355, 49, 49);
    view.defPosition("2k", 355, 355, 49, 49);
    view.defPosition("1k", 390, 355, 49, 49);
    view.defPosition("12l", 5, 390, 49, 49);
    view.defPosition("11l", 40, 390, 49, 49);
    view.defPosition("10l", 75, 390, 49, 49);
    view.defPosition("9l", 110, 390, 49, 49);
    view.defPosition("8l", 145, 390, 49, 49);
    view.defPosition("7l", 180, 390, 49, 49);
    view.defPosition("6l", 215, 390, 49, 49);
    view.defPosition("5l", 250, 390, 49, 49);
    view.defPosition("4l", 285, 390, 49, 49);
    view.defPosition("3l", 320, 390, 49, 49);
    view.defPosition("2l", 355, 390, 49, 49);
    view.defPosition("1l", 390, 390, 49, 49);

    view.defPopup("Promote", 166, 100);
    view.defPopupPosition("T1", 15, 17, 36, 36);
    view.defPopupPosition("T2", 55, 17, 36, 36);
}
