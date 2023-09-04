Dagaz.Model.WIDTH = 8;

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
    Dagaz.Controller.addSound(0, "../sounds/step.ogg", true);
    Dagaz.Controller.addSound(2,  "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
    Dagaz.Controller.addSound(10, "../sounds/slide.ogg", true);
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("shared-pieces", "true");
    design.checkVersion("show-lose", "false");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("Red", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("A8", [9, 8, 0, 1, 0, 0, 0, 0]);
    design.addPosition("B8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("C8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("D8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("E8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("F8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("G8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("H8", [0, 8, 7, 0, -1, 0, 0, 0]);
    design.addPosition("A7", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("B7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("C7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("D7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("E7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("F7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("G7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("H7", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("A6", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("B6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("C6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("D6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("E6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("F6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("G6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("H6", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("A5", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("B5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("C5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("D5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("E5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("F5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("G5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("H5", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("A4", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("B4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("C4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("D4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("E4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("F4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("G4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("H4", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("A3", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("B3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("C3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("D3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("E3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("F3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("G3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("H3", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("A2", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("B2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("C2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("D2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("E2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("F2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("G2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("H2", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("A1", [0, 0, 0, 1, 0, -7, 0, -8]);
    design.addPosition("B1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("C1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("D1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("E1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("F1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("G1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("H1", [0, 0, 0, 0, -1, 0, -9, -8]);
    design.addPosition("a8", [9, 8, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("c8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("d8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("e8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("f8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("g8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("h8", [0, 8, 7, 0, -1, 0, 0, 0]);
    design.addPosition("a7", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h7", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a6", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h6", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a5", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h5", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a4", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h4", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a3", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h3", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a2", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h2", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("h1", [0, 0, 0, 0, -1, 0, -9, -8]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	7);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-8);
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	7);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-8);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-5);
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addPiece("BlankTile", 0, 0);
    design.addMove(0, 0, [7], 0, 10);
    design.addMove(0, 0, [3], 0, 10);
    design.addMove(0, 0, [4], 0, 10);
    design.addMove(0, 0, [1], 0, 10);
    design.addMove(0, 0, [6], 0, 10);
    design.addMove(0, 0, [5], 0, 10);
    design.addMove(0, 0, [2], 0, 10);
    design.addMove(0, 0, [0], 0, 10);

    design.addPiece("HorseTile", 1, 0);
    design.addMove(1, 0, [7], 0, 10);
    design.addMove(1, 0, [3], 0, 10);
    design.addMove(1, 0, [4], 0, 10);
    design.addMove(1, 0, [1], 0, 10);
    design.addMove(1, 0, [6], 0, 10);
    design.addMove(1, 0, [5], 0, 10);
    design.addMove(1, 0, [2], 0, 10);
    design.addMove(1, 0, [0], 0, 10);

    design.addPiece("ElephantTile", 2, 0);
    design.addMove(2, 0, [7], 0, 10);
    design.addMove(2, 0, [3], 0, 10);
    design.addMove(2, 0, [4], 0, 10);
    design.addMove(2, 0, [1], 0, 10);
    design.addMove(2, 0, [6], 0, 10);
    design.addMove(2, 0, [5], 0, 10);
    design.addMove(2, 0, [2], 0, 10);
    design.addMove(2, 0, [0], 0, 10);

    design.addPiece("ChariotTile", 3, 0);
    design.addMove(3, 0, [7], 0, 10);
    design.addMove(3, 0, [3], 0, 10);
    design.addMove(3, 0, [4], 0, 10);
    design.addMove(3, 0, [1], 0, 10);
    design.addMove(3, 0, [6], 0, 10);
    design.addMove(3, 0, [5], 0, 10);
    design.addMove(3, 0, [2], 0, 10);
    design.addMove(3, 0, [0], 0, 10);

    design.addPiece("CannonTile", 4, 0);
    design.addMove(4, 0, [7], 0, 10);
    design.addMove(4, 0, [3], 0, 10);
    design.addMove(4, 0, [4], 0, 10);
    design.addMove(4, 0, [1], 0, 10);
    design.addMove(4, 0, [6], 0, 10);
    design.addMove(4, 0, [5], 0, 10);
    design.addMove(4, 0, [2], 0, 10);
    design.addMove(4, 0, [0], 0, 10);

    design.addPiece("MandarinTile", 5, 0);
    design.addMove(5, 0, [7], 0, 10);
    design.addMove(5, 0, [3], 0, 10);
    design.addMove(5, 0, [4], 0, 10);
    design.addMove(5, 0, [1], 0, 10);
    design.addMove(5, 0, [6], 0, 10);
    design.addMove(5, 0, [5], 0, 10);
    design.addMove(5, 0, [2], 0, 10);
    design.addMove(5, 0, [0], 0, 10);

    design.addPiece("GeneralTile", 6, 0);
    design.addMove(6, 0, [7], 0, 10);
    design.addMove(6, 0, [3], 0, 10);
    design.addMove(6, 0, [4], 0, 10);
    design.addMove(6, 0, [1], 0, 10);
    design.addMove(6, 0, [6], 0, 10);
    design.addMove(6, 0, [5], 0, 10);
    design.addMove(6, 0, [2], 0, 10);
    design.addMove(6, 0, [0], 0, 10);

    design.addPiece("Horse", 7, 3000);
    design.addMove(7, 1, [7, 6], 1);
    design.addMove(7, 1, [7, 5], 1);
    design.addMove(7, 1, [1, 2], 1);
    design.addMove(7, 1, [1, 0], 1);
    design.addMove(7, 1, [4, 6], 1);
    design.addMove(7, 1, [3, 5], 1);
    design.addMove(7, 1, [4, 2], 1);
    design.addMove(7, 1, [3, 0], 1);

    design.addPiece("Elephant", 8, 800);
    design.addMove(8, 1, [6, 6], 1);
    design.addMove(8, 1, [2, 2], 1);
    design.addMove(8, 1, [5, 5], 1);
    design.addMove(8, 1, [0, 0], 1);

    design.addPiece("Chariot", 9, 5000);
    design.addMove(9, 2, [7, 7], 1);
    design.addMove(9, 2, [1, 1], 1);
    design.addMove(9, 2, [4, 4], 1);
    design.addMove(9, 2, [3, 3], 1);

    design.addPiece("Cannon", 10, 5500);
    design.addMove(10, 3, [7, 7, 7, 7], 1);
    design.addMove(10, 3, [1, 1, 1, 1], 1);
    design.addMove(10, 3, [4, 4, 4, 4], 1);
    design.addMove(10, 3, [3, 3, 3, 3], 1);

    design.addPiece("Mandarin", 11, 800);
    design.addMove(11, 4, [6], 1);
    design.addMove(11, 4, [2], 1);
    design.addMove(11, 4, [5], 1);
    design.addMove(11, 4, [0], 1);

    design.addPiece("General", 12, 600000);
    design.addMove(12, 4, [7], 1);
    design.addMove(12, 4, [1], 1);
    design.addMove(12, 4, [4], 1);
    design.addMove(12, 4, [3], 1);

    design.setup("Red", "BlankTile", 41);
    design.setup("Red", "BlankTile", 43);
    design.setup("Red", "BlankTile", 44);
    design.setup("Red", "BlankTile", 46);
    design.setup("Red", "BlankTile", 32);
    design.setup("Red", "BlankTile", 34);
    design.setup("Red", "BlankTile", 36);
    design.setup("Red", "BlankTile", 38);
    design.setup("Red", "HorseTile", 57);
    design.setup("Red", "HorseTile", 62);
    design.setup("Red", "HorseTile", 48);
    design.setup("Red", "HorseTile", 52);
    design.setup("Red", "HorseTile", 39);
    design.setup("Red", "Horse", 121);
    design.setup("Red", "Horse", 126);
    design.setup("Red", "Horse", 112);
    design.setup("Red", "Horse", 116);
    design.setup("Red", "ElephantTile", 58);
    design.setup("Red", "ElephantTile", 61);
    design.setup("Red", "ElephantTile", 51);
    design.setup("Red", "ElephantTile", 55);
    design.setup("Red", "ElephantTile", 42);
    design.setup("Red", "ElephantTile", 45);
    design.setup("Red", "Elephant", 122);
    design.setup("Red", "Elephant", 125);
    design.setup("Red", "Elephant", 115);
    design.setup("Red", "Elephant", 119);
    design.setup("Red", "ChariotTile", 56);
    design.setup("Red", "ChariotTile", 63);
    design.setup("Red", "ChariotTile", 37);
    design.setup("Red", "Chariot", 120);
    design.setup("Red", "Chariot", 127);
    design.setup("Red", "MandarinTile", 59);
    design.setup("Red", "MandarinTile", 50);
    design.setup("Red", "MandarinTile", 53);
    design.setup("Red", "MandarinTile", 40);
    design.setup("Red", "Mandarin", 123);
    design.setup("Red", "Mandarin", 114);
    design.setup("Red", "Mandarin", 117);
    design.setup("Red", "CannonTile", 49);
    design.setup("Red", "CannonTile", 54);
    design.setup("Red", "CannonTile", 33);
    design.setup("Red", "CannonTile", 35);
    design.setup("Red", "Cannon", 113);
    design.setup("Red", "Cannon", 118);
    design.setup("Red", "GeneralTile", 60);
    design.setup("Red", "GeneralTile", 47);
    design.setup("Red", "General", 124);
    design.setup("Black", "BlankTile", 17);
    design.setup("Black", "BlankTile", 19);
    design.setup("Black", "BlankTile", 20);
    design.setup("Black", "BlankTile", 22);
    design.setup("Black", "BlankTile", 25);
    design.setup("Black", "BlankTile", 27);
    design.setup("Black", "BlankTile", 29);
    design.setup("Black", "BlankTile", 31);
    design.setup("Black", "HorseTile", 11);
    design.setup("Black", "HorseTile", 15);
    design.setup("Black", "HorseTile", 1);
    design.setup("Black", "HorseTile", 6);
    design.setup("Black", "HorseTile", 24);
    design.setup("Black", "Horse", 75);
    design.setup("Black", "Horse", 79);
    design.setup("Black", "Horse", 65);
    design.setup("Black", "Horse", 70);
    design.setup("Black", "ElephantTile", 8);
    design.setup("Black", "ElephantTile", 12);
    design.setup("Black", "ElephantTile", 2);
    design.setup("Black", "ElephantTile", 5);
    design.setup("Black", "ElephantTile", 18);
    design.setup("Black", "ElephantTile", 21);
    design.setup("Black", "Elephant", 72);
    design.setup("Black", "Elephant", 76);
    design.setup("Black", "Elephant", 66);
    design.setup("Black", "Elephant", 69);
    design.setup("Black", "ChariotTile", 0);
    design.setup("Black", "ChariotTile", 7);
    design.setup("Black", "ChariotTile", 26);
    design.setup("Black", "Chariot", 64);
    design.setup("Black", "Chariot", 71);
    design.setup("Black", "MandarinTile", 10);
    design.setup("Black", "MandarinTile", 13);
    design.setup("Black", "MandarinTile", 4);
    design.setup("Black", "MandarinTile", 23);
    design.setup("Black", "Mandarin", 74);
    design.setup("Black", "Mandarin", 77);
    design.setup("Black", "Mandarin", 68);
    design.setup("Black", "CannonTile", 9);
    design.setup("Black", "CannonTile", 14);
    design.setup("Black", "CannonTile", 28);
    design.setup("Black", "CannonTile", 30);
    design.setup("Black", "Cannon", 73);
    design.setup("Black", "Cannon", 78);
    design.setup("Black", "GeneralTile", 3);
    design.setup("Black", "GeneralTile", 16);
    design.setup("Black", "General", 67);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedBlankTile", "Red BlankTile");
    view.defPiece("BlackBlankTile", "Black BlankTile");
    view.defPiece("RedHorseTile", "Red HorseTile");
    view.defPiece("BlackHorseTile", "Black HorseTile");
    view.defPiece("RedElephantTile", "Red ElephantTile");
    view.defPiece("BlackElephantTile", "Black ElephantTile");
    view.defPiece("RedChariotTile", "Red ChariotTile");
    view.defPiece("BlackChariotTile", "Black ChariotTile");
    view.defPiece("RedCannonTile", "Red CannonTile");
    view.defPiece("BlackCannonTile", "Black CannonTile");
    view.defPiece("RedMandarinTile", "Red MandarinTile");
    view.defPiece("BlackMandarinTile", "Black MandarinTile");
    view.defPiece("RedGeneralTile", "Red GeneralTile");
    view.defPiece("BlackGeneralTile", "Black GeneralTile");
    view.defPiece("RedHorse", "Red Horse");
    view.defPiece("BlackHorse", "Black Horse");
    view.defPiece("RedElephant", "Red Elephant");
    view.defPiece("BlackElephant", "Black Elephant");
    view.defPiece("RedChariot", "Red Chariot");
    view.defPiece("BlackChariot", "Black Chariot");
    view.defPiece("RedCannon", "Red Cannon");
    view.defPiece("BlackCannon", "Black Cannon");
    view.defPiece("RedMandarin", "Red Mandarin");
    view.defPiece("BlackMandarin", "Black Mandarin");
    view.defPiece("RedGeneral", "Red General");
    view.defPiece("BlackGeneral", "Black General");
 
    view.defPosition("A8", 27, 28, 42, 42);
    view.defPosition("B8", 72, 28, 42, 42);
    view.defPosition("C8", 117, 28, 42, 42);
    view.defPosition("D8", 162, 28, 42, 42);
    view.defPosition("E8", 207, 28, 42, 42);
    view.defPosition("F8", 252, 28, 42, 42);
    view.defPosition("G8", 297, 28, 42, 42);
    view.defPosition("H8", 342, 28, 42, 42);
    view.defPosition("A7", 27, 73, 42, 42);
    view.defPosition("B7", 72, 73, 42, 42);
    view.defPosition("C7", 117, 73, 42, 42);
    view.defPosition("D7", 162, 73, 42, 42);
    view.defPosition("E7", 207, 73, 42, 42);
    view.defPosition("F7", 252, 73, 42, 42);
    view.defPosition("G7", 297, 73, 42, 42);
    view.defPosition("H7", 342, 73, 42, 42);
    view.defPosition("A6", 27, 118, 42, 42);
    view.defPosition("B6", 72, 118, 42, 42);
    view.defPosition("C6", 117, 118, 42, 42);
    view.defPosition("D6", 162, 118, 42, 42);
    view.defPosition("E6", 207, 118, 42, 42);
    view.defPosition("F6", 252, 118, 42, 42);
    view.defPosition("G6", 297, 118, 42, 42);
    view.defPosition("H6", 342, 118, 42, 42);
    view.defPosition("A5", 27, 163, 42, 42);
    view.defPosition("B5", 72, 163, 42, 42);
    view.defPosition("C5", 117, 163, 42, 42);
    view.defPosition("D5", 162, 163, 42, 42);
    view.defPosition("E5", 207, 163, 42, 42);
    view.defPosition("F5", 252, 163, 42, 42);
    view.defPosition("G5", 297, 163, 42, 42);
    view.defPosition("H5", 342, 163, 42, 42);
    view.defPosition("A4", 27, 208, 42, 42);
    view.defPosition("B4", 72, 208, 42, 42);
    view.defPosition("C4", 117, 208, 42, 42);
    view.defPosition("D4", 162, 208, 42, 42);
    view.defPosition("E4", 207, 208, 42, 42);
    view.defPosition("F4", 252, 208, 42, 42);
    view.defPosition("G4", 297, 208, 42, 42);
    view.defPosition("H4", 342, 208, 42, 42);
    view.defPosition("A3", 27, 253, 42, 42);
    view.defPosition("B3", 72, 253, 42, 42);
    view.defPosition("C3", 117, 253, 42, 42);
    view.defPosition("D3", 162, 253, 42, 42);
    view.defPosition("E3", 207, 253, 42, 42);
    view.defPosition("F3", 252, 253, 42, 42);
    view.defPosition("G3", 297, 253, 42, 42);
    view.defPosition("H3", 342, 253, 42, 42);
    view.defPosition("A2", 27, 298, 42, 42);
    view.defPosition("B2", 72, 298, 42, 42);
    view.defPosition("C2", 117, 298, 42, 42);
    view.defPosition("D2", 162, 298, 42, 42);
    view.defPosition("E2", 207, 298, 42, 42);
    view.defPosition("F2", 252, 298, 42, 42);
    view.defPosition("G2", 297, 298, 42, 42);
    view.defPosition("H2", 342, 298, 42, 42);
    view.defPosition("A1", 27, 343, 42, 42);
    view.defPosition("B1", 72, 343, 42, 42);
    view.defPosition("C1", 117, 343, 42, 42);
    view.defPosition("D1", 162, 343, 42, 42);
    view.defPosition("E1", 207, 343, 42, 42);
    view.defPosition("F1", 252, 343, 42, 42);
    view.defPosition("G1", 297, 343, 42, 42);
    view.defPosition("H1", 342, 343, 42, 42);
    view.defPosition("a8", 26, 27, 42, 42);
    view.defPosition("b8", 71, 27, 42, 42);
    view.defPosition("c8", 116, 27, 42, 42);
    view.defPosition("d8", 161, 27, 42, 42);
    view.defPosition("e8", 206, 27, 42, 42);
    view.defPosition("f8", 251, 27, 42, 42);
    view.defPosition("g8", 296, 27, 42, 42);
    view.defPosition("h8", 341, 27, 42, 42);
    view.defPosition("a7", 26, 72, 42, 42);
    view.defPosition("b7", 71, 72, 42, 42);
    view.defPosition("c7", 116, 72, 42, 42);
    view.defPosition("d7", 161, 72, 42, 42);
    view.defPosition("e7", 206, 72, 42, 42);
    view.defPosition("f7", 251, 72, 42, 42);
    view.defPosition("g7", 296, 72, 42, 42);
    view.defPosition("h7", 341, 72, 42, 42);
    view.defPosition("a6", 26, 117, 42, 42);
    view.defPosition("b6", 71, 117, 42, 42);
    view.defPosition("c6", 116, 117, 42, 42);
    view.defPosition("d6", 161, 117, 42, 42);
    view.defPosition("e6", 206, 117, 42, 42);
    view.defPosition("f6", 251, 117, 42, 42);
    view.defPosition("g6", 296, 117, 42, 42);
    view.defPosition("h6", 341, 117, 42, 42);
    view.defPosition("a5", 26, 162, 42, 42);
    view.defPosition("b5", 71, 162, 42, 42);
    view.defPosition("c5", 116, 162, 42, 42);
    view.defPosition("d5", 161, 162, 42, 42);
    view.defPosition("e5", 206, 162, 42, 42);
    view.defPosition("f5", 251, 162, 42, 42);
    view.defPosition("g5", 296, 162, 42, 42);
    view.defPosition("h5", 341, 162, 42, 42);
    view.defPosition("a4", 26, 207, 42, 42);
    view.defPosition("b4", 71, 207, 42, 42);
    view.defPosition("c4", 116, 207, 42, 42);
    view.defPosition("d4", 161, 207, 42, 42);
    view.defPosition("e4", 206, 207, 42, 42);
    view.defPosition("f4", 251, 207, 42, 42);
    view.defPosition("g4", 296, 207, 42, 42);
    view.defPosition("h4", 341, 207, 42, 42);
    view.defPosition("a3", 26, 252, 42, 42);
    view.defPosition("b3", 71, 252, 42, 42);
    view.defPosition("c3", 116, 252, 42, 42);
    view.defPosition("d3", 161, 252, 42, 42);
    view.defPosition("e3", 206, 252, 42, 42);
    view.defPosition("f3", 251, 252, 42, 42);
    view.defPosition("g3", 296, 252, 42, 42);
    view.defPosition("h3", 341, 252, 42, 42);
    view.defPosition("a2", 26, 297, 42, 42);
    view.defPosition("b2", 71, 297, 42, 42);
    view.defPosition("c2", 116, 297, 42, 42);
    view.defPosition("d2", 161, 297, 42, 42);
    view.defPosition("e2", 206, 297, 42, 42);
    view.defPosition("f2", 251, 297, 42, 42);
    view.defPosition("g2", 296, 297, 42, 42);
    view.defPosition("h2", 341, 297, 42, 42);
    view.defPosition("a1", 26, 342, 42, 42);
    view.defPosition("b1", 71, 342, 42, 42);
    view.defPosition("c1", 116, 342, 42, 42);
    view.defPosition("d1", 161, 342, 42, 42);
    view.defPosition("e1", 206, 342, 42, 42);
    view.defPosition("f1", 251, 342, 42, 42);
    view.defPosition("g1", 296, 342, 42, 42);
    view.defPosition("h1", 341, 342, 42, 42);
}
