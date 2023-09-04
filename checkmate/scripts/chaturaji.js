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

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(10, "../sounds/dice.wav", true);
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-lose", "false");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7
    design.addDirection("sr"); // 8
    design.addDirection("wr"); // 9
    design.addDirection("nr"); // 10
    design.addDirection("er"); // 11

    design.addPlayer("Green", [6, 7, 5, 4, 3, 2, 0, 1, 8, 9, 10, 11]);
    design.addPlayer("Yellow", [2, 4, 6, 1, 7, 0, 5, 3, 9, 10, 11, 8]);
    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1, 10, 11, 8, 9]);
    design.addPlayer("Red", [5, 3, 0, 7, 1, 6, 2, 4, 11, 8, 9, 10]);

    design.addRandom(1, [0]); // 0
    design.addRandom(1, [0]); // 1
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 2
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 3
    design.addRandom(2, [0]); // 4
    design.addRandom(2, [0]); // 5
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 6
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 7
    design.addRandom(3, [0]); // 8
    design.addRandom(3, [0]); // 9
    design.addTurn(3, [1, 2, 3, 4, 5, 6]); // 10
    design.addTurn(3, [1, 2, 3, 4, 5, 6]); // 11
    design.addRandom(4, [0]); // 12
    design.addRandom(4, [0]); // 13
    design.addTurn(4, [1, 2, 3, 4, 5, 6]); // 14
    design.addTurn(4, [1, 2, 3, 4, 5, 6]); // 15

    design.addPosition("a8", [9, 8, 0, 1, 0, 0, 0, 0, 67, 64, 67, 64]);
    design.addPosition("b8", [9, 8, 7, 1, -1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c8", [9, 8, 7, 1, -1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d8", [9, 8, 7, 1, -1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e8", [9, 8, 7, 1, -1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f8", [9, 8, 7, 1, -1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g8", [9, 8, 7, 1, -1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h8", [0, 8, 7, 0, -1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [9, 8, 0, 1, 0, -7, 0, -8, 0, 0, 0, 0]);
    design.addPosition("b7", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("c7", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("d7", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("e7", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("f7", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("g7", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("h7", [0, 8, 7, 0, -1, 0, -9, -8, 0, 0, 0, 0]);
    design.addPosition("a6", [9, 8, 0, 1, 0, -7, 0, -8, 0, 0, 0, 0]);
    design.addPosition("b6", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("c6", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("d6", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("e6", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("f6", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("g6", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("h6", [0, 8, 7, 0, -1, 0, -9, -8, 0, 0, 0, 0]);
    design.addPosition("a5", [9, 8, 0, 1, 0, -7, 0, -8, 0, 0, 0, 0]);
    design.addPosition("b5", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("c5", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("d5", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("e5", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("f5", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("g5", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("h5", [0, 8, 7, 0, -1, 0, -9, -8, 0, 0, 0, 0]);
    design.addPosition("a4", [9, 8, 0, 1, 0, -7, 0, -8, 0, 0, 0, 0]);
    design.addPosition("b4", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("c4", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("d4", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("e4", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("f4", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("g4", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("h4", [0, 8, 7, 0, -1, 0, -9, -8, 0, 0, 0, 0]);
    design.addPosition("a3", [9, 8, 0, 1, 0, -7, 0, -8, 0, 0, 0, 0]);
    design.addPosition("b3", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("c3", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("d3", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("e3", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("f3", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("g3", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("h3", [0, 8, 7, 0, -1, 0, -9, -8, 0, 0, 0, 0]);
    design.addPosition("a2", [9, 8, 0, 1, 0, -7, 0, -8, 0, 0, 0, 0]);
    design.addPosition("b2", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("c2", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("d2", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("e2", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("f2", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("g2", [9, 8, 7, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("h2", [0, 8, 7, 0, -1, 0, -9, -8, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -7, 0, -8, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -7, -9, -8, 0, 0, 0, 0]);
    design.addPosition("h1", [0, 0, 0, 0, -1, 0, -9, -8, 0, 0, 0, 0]);
    design.addPosition("r1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
    design.addPosition("r2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("r3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("r4", [0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0]);
    design.addPosition("x1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("x2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("promotion", 2, [63, 55, 47, 39, 31, 23, 15, 7]);
    design.addZone("promotion", 1, [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addZone("promotion", 3, [56, 57, 58, 59, 60, 61, 62, 63]);
    design.addZone("promotion", 4, [56, 48, 40, 32, 24, 16, 8, 0]);
    design.addZone("dices", 2, [68, 69]);
    design.addZone("dices", 1, [68, 69]);
    design.addZone("dices", 3, [68, 69]);
    design.addZone("dices", 4, [68, 69]);
    design.addZone("center", 2, [35, 27, 36, 28]);
    design.addZone("center", 1, [35, 27, 36, 28]);
    design.addZone("center", 3, [35, 27, 36, 28]);
    design.addZone("center", 4, [35, 27, 36, 28]);
    design.addZone("gaja-column", 2, [0, 7, 63, 56]);
    design.addZone("gaja-column", 1, [0, 7, 63, 56]);
    design.addZone("gaja-column", 3, [0, 7, 63, 56]);
    design.addZone("gaja-column", 4, [0, 7, 63, 56]);
    design.addZone("ashva-column", 2, [1, 15, 62, 48]);
    design.addZone("ashva-column", 1, [1, 15, 62, 48]);
    design.addZone("ashva-column", 3, [1, 15, 62, 48]);
    design.addZone("ashva-column", 4, [1, 15, 62, 48]);
    design.addZone("ratha-column", 2, [2, 23, 61, 40]);
    design.addZone("ratha-column", 1, [2, 23, 61, 40]);
    design.addZone("ratha-column", 3, [2, 23, 61, 40]);
    design.addZone("ratha-column", 4, [2, 23, 61, 40]);
    design.addZone("raja-column", 2, [3, 31, 60, 32]);
    design.addZone("raja-column", 1, [3, 31, 60, 32]);
    design.addZone("raja-column", 3, [3, 31, 60, 32]);
    design.addZone("raja-column", 4, [3, 31, 60, 32]);

    design.addCommand(0, ZRF.IN_ZONE,	1);	// dices
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	7);
    design.addCommand(5, ZRF.FORK,	3);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-8);
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.FUNCTION,	26);	// capture
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addPiece("D2", 0, 2);
    design.addDrop(0, 0, [], 0, 10);
    design.addMove(0, 6, [], 1);

    design.addPiece("D3", 1, 3);
    design.addDrop(1, 0, [], 0, 10);
    design.addMove(1, 6, [], 1);

    design.addPiece("D4", 2, 4);
    design.addDrop(2, 0, [], 0, 10);
    design.addMove(2, 6, [], 1);

    design.addPiece("D5", 3, 5);
    design.addDrop(3, 0, [], 0, 10);
    design.addMove(3, 6, [], 1);

    design.addPiece("Raja", 4, 5);
    design.addMove(4, 1, [7], 5);
    design.addMove(4, 1, [1], 5);
    design.addMove(4, 1, [4], 5);
    design.addMove(4, 1, [3], 5);
    design.addMove(4, 1, [6], 5);
    design.addMove(4, 1, [2], 5);
    design.addMove(4, 1, [5], 5);
    design.addMove(4, 1, [0], 5);

    design.addPiece("Bhata", 5, 1);
    design.addMove(5, 2, [7], 5);
    design.addMove(5, 3, [6], 5);
    design.addMove(5, 3, [5], 5);

    design.addPiece("Gaja", 6, 2);
    design.addMove(6, 4, [6, 6], 2);
    design.addMove(6, 4, [5, 5], 2);
    design.addMove(6, 4, [2, 2], 2);
    design.addMove(6, 4, [0, 0], 2);

    design.addPiece("Ashva", 7, 3);
    design.addMove(7, 4, [7, 6], 3);
    design.addMove(7, 4, [7, 5], 3);
    design.addMove(7, 4, [1, 2], 3);
    design.addMove(7, 4, [1, 0], 3);
    design.addMove(7, 4, [4, 6], 3);
    design.addMove(7, 4, [4, 2], 3);
    design.addMove(7, 4, [3, 5], 3);
    design.addMove(7, 4, [3, 0], 3);

    design.addPiece("Ratha", 8, 4);
    design.addMove(8, 5, [7, 7], 4);
    design.addMove(8, 5, [1, 1], 4);
    design.addMove(8, 5, [4, 4], 4);
    design.addMove(8, 5, [3, 3], 4);

    design.addPiece("RajaCaptured", 9, 1000);

    design.setup("Green", "Bhata", 48);
    design.setup("Green", "Bhata", 49);
    design.setup("Green", "Bhata", 50);
    design.setup("Green", "Bhata", 51);
    design.setup("Green", "Gaja", 56);
    design.setup("Green", "Ashva", 57);
    design.setup("Green", "Ratha", 58);
    design.setup("Green", "Raja", 59);
    design.setup("Yellow", "Bhata", 1);
    design.setup("Yellow", "Bhata", 9);
    design.setup("Yellow", "Bhata", 17);
    design.setup("Yellow", "Bhata", 25);
    design.setup("Yellow", "Gaja", 0);
    design.setup("Yellow", "Ashva", 8);
    design.setup("Yellow", "Ratha", 16);
    design.setup("Yellow", "Raja", 24);
    design.setup("Black", "Bhata", 15);
    design.setup("Black", "Bhata", 14);
    design.setup("Black", "Bhata", 13);
    design.setup("Black", "Bhata", 12);
    design.setup("Black", "Gaja", 7);
    design.setup("Black", "Ashva", 6);
    design.setup("Black", "Ratha", 5);
    design.setup("Black", "Raja", 4);
    design.setup("Red", "Bhata", 62);
    design.setup("Red", "Bhata", 54);
    design.setup("Red", "Bhata", 46);
    design.setup("Red", "Bhata", 38);
    design.setup("Red", "Gaja", 63);
    design.setup("Red", "Ashva", 55);
    design.setup("Red", "Ratha", 47);
    design.setup("Red", "Raja", 39);
}

Dagaz.View.configure = function(view) {
    view.defBoard("SBoard", 0, 0, undefined, [0, 1, 2, 3]);
    view.defBoard("WBoard", 0, 0, undefined, [4, 5, 6, 7]);
    view.defBoard("NBoard", 0, 0, undefined, [8, 9, 10, 11]);
    view.defBoard("EBoard", 0, 0, undefined, [12, 13, 14, 15]);
    view.defPiece("SouthD2", "Green D2");
    view.defPiece("WestD2", "Yellow D2");
    view.defPiece("NorthD2", "Black D2");
    view.defPiece("EastD2", "Red D2");
    view.defPiece("SouthD3", "Green D3");
    view.defPiece("WestD3", "Yellow D3");
    view.defPiece("NorthD3", "Black D3");
    view.defPiece("EastD3", "Red D3");
    view.defPiece("SouthD4", "Green D4");
    view.defPiece("WestD4", "Yellow D4");
    view.defPiece("NorthD4", "Black D4");
    view.defPiece("EastD4", "Red D4");
    view.defPiece("SouthD5", "Green D5");
    view.defPiece("WestD5", "Yellow D5");
    view.defPiece("NorthD5", "Black D5");
    view.defPiece("EastD5", "Red D5");
    view.defPiece("SouthRaja", "Green Raja");
    view.defPiece("WestRaja", "Yellow Raja");
    view.defPiece("NorthRaja", "Black Raja");
    view.defPiece("EastRaja", "Red Raja");
    view.defPiece("SouthBhata", "Green Bhata");
    view.defPiece("WestBhata", "Yellow Bhata");
    view.defPiece("NorthBhata", "Black Bhata");
    view.defPiece("EastBhata", "Red Bhata");
    view.defPiece("SouthGaja", "Green Gaja");
    view.defPiece("WestGaja", "Yellow Gaja");
    view.defPiece("NorthGaja", "Black Gaja");
    view.defPiece("EastGaja", "Red Gaja");
    view.defPiece("SouthAshva", "Green Ashva");
    view.defPiece("WestAshva", "Yellow Ashva");
    view.defPiece("NorthAshva", "Black Ashva");
    view.defPiece("EastAshva", "Red Ashva");
    view.defPiece("SouthRatha", "Green Ratha");
    view.defPiece("WestRatha", "Yellow Ratha");
    view.defPiece("NorthRatha", "Black Ratha");
    view.defPiece("EastRatha", "Red Ratha");
    view.defPiece("SouthRajaCaptured", "Green RajaCaptured");
    view.defPiece("WestRajaCaptured", "Yellow RajaCaptured");
    view.defPiece("NorthRajaCaptured", "Black RajaCaptured");
    view.defPiece("EastRajaCaptured", "Red RajaCaptured");
 
    view.defPosition("a8", 59, 2, 50, 50);
    view.defPosition("b8", 109, 2, 50, 50);
    view.defPosition("c8", 159, 2, 50, 50);
    view.defPosition("d8", 209, 2, 50, 50);
    view.defPosition("e8", 259, 2, 50, 50);
    view.defPosition("f8", 309, 2, 50, 50);
    view.defPosition("g8", 359, 2, 50, 50);
    view.defPosition("h8", 409, 2, 50, 50);
    view.defPosition("a7", 59, 52, 50, 50);
    view.defPosition("b7", 109, 52, 50, 50);
    view.defPosition("c7", 159, 52, 50, 50);
    view.defPosition("d7", 209, 52, 50, 50);
    view.defPosition("e7", 259, 52, 50, 50);
    view.defPosition("f7", 309, 52, 50, 50);
    view.defPosition("g7", 359, 52, 50, 50);
    view.defPosition("h7", 409, 52, 50, 50);
    view.defPosition("a6", 59, 102, 50, 50);
    view.defPosition("b6", 109, 102, 50, 50);
    view.defPosition("c6", 159, 102, 50, 50);
    view.defPosition("d6", 209, 102, 50, 50);
    view.defPosition("e6", 259, 102, 50, 50);
    view.defPosition("f6", 309, 102, 50, 50);
    view.defPosition("g6", 359, 102, 50, 50);
    view.defPosition("h6", 409, 102, 50, 50);
    view.defPosition("a5", 59, 152, 50, 50);
    view.defPosition("b5", 109, 152, 50, 50);
    view.defPosition("c5", 159, 152, 50, 50);
    view.defPosition("d5", 209, 152, 50, 50);
    view.defPosition("e5", 259, 152, 50, 50);
    view.defPosition("f5", 309, 152, 50, 50);
    view.defPosition("g5", 359, 152, 50, 50);
    view.defPosition("h5", 409, 152, 50, 50);
    view.defPosition("a4", 59, 202, 50, 50);
    view.defPosition("b4", 109, 202, 50, 50);
    view.defPosition("c4", 159, 202, 50, 50);
    view.defPosition("d4", 209, 202, 50, 50);
    view.defPosition("e4", 259, 202, 50, 50);
    view.defPosition("f4", 309, 202, 50, 50);
    view.defPosition("g4", 359, 202, 50, 50);
    view.defPosition("h4", 409, 202, 50, 50);
    view.defPosition("a3", 59, 252, 50, 50);
    view.defPosition("b3", 109, 252, 50, 50);
    view.defPosition("c3", 159, 252, 50, 50);
    view.defPosition("d3", 209, 252, 50, 50);
    view.defPosition("e3", 259, 252, 50, 50);
    view.defPosition("f3", 309, 252, 50, 50);
    view.defPosition("g3", 359, 252, 50, 50);
    view.defPosition("h3", 409, 252, 50, 50);
    view.defPosition("a2", 59, 302, 50, 50);
    view.defPosition("b2", 109, 302, 50, 50);
    view.defPosition("c2", 159, 302, 50, 50);
    view.defPosition("d2", 209, 302, 50, 50);
    view.defPosition("e2", 259, 302, 50, 50);
    view.defPosition("f2", 309, 302, 50, 50);
    view.defPosition("g2", 359, 302, 50, 50);
    view.defPosition("h2", 409, 302, 50, 50);
    view.defPosition("a1", 59, 352, 50, 50);
    view.defPosition("b1", 109, 352, 50, 50);
    view.defPosition("c1", 159, 352, 50, 50);
    view.defPosition("d1", 209, 352, 50, 50);
    view.defPosition("e1", 259, 352, 50, 50);
    view.defPosition("f1", 309, 352, 50, 50);
    view.defPosition("g1", 359, 352, 50, 50);
    view.defPosition("h1", 409, 352, 50, 50);
    view.defPosition("r1", 4, 2, 49, 49);
    view.defPosition("r2", 4, 53, 49, 49);
    view.defPosition("r3", 4, 292, 49, 49);
    view.defPosition("r4", 4, 343, 49, 49);
    view.defPosition("x1", 470, 21, 54, 158);
    view.defPosition("x2", 470, 220, 54, 158);
}
