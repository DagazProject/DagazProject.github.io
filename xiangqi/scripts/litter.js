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

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("Gold", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Silver", [5, 7, 6, 3, 4, 0, 2, 1]);

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
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
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
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	7);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-8);
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-5);
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addPiece("Soldier", 0, 100);
    design.addMove(0, 0, [7], 0, 10);
    design.addMove(0, 0, [3], 0, 10);
    design.addMove(0, 0, [4], 0, 10);
    design.addMove(0, 0, [1], 0, 10);
    design.addMove(0, 0, [6], 0, 10);
    design.addMove(0, 0, [5], 0, 10);
    design.addMove(0, 0, [2], 0, 10);
    design.addMove(0, 0, [0], 0, 10);

    design.addPiece("Horse", 1, 400);
    design.addMove(1, 0, [7], 0, 10);
    design.addMove(1, 0, [3], 0, 10);
    design.addMove(1, 0, [4], 0, 10);
    design.addMove(1, 0, [1], 0, 10);
    design.addMove(1, 0, [6], 0, 10);
    design.addMove(1, 0, [5], 0, 10);
    design.addMove(1, 0, [2], 0, 10);
    design.addMove(1, 0, [0], 0, 10);

    design.addPiece("Elephant", 2, 200);
    design.addMove(2, 0, [7], 0, 10);
    design.addMove(2, 0, [3], 0, 10);
    design.addMove(2, 0, [4], 0, 10);
    design.addMove(2, 0, [1], 0, 10);
    design.addMove(2, 0, [6], 0, 10);
    design.addMove(2, 0, [5], 0, 10);
    design.addMove(2, 0, [2], 0, 10);
    design.addMove(2, 0, [0], 0, 10);

    design.addPiece("Chariot", 3, 1000);
    design.addMove(3, 0, [7], 0, 10);
    design.addMove(3, 0, [3], 0, 10);
    design.addMove(3, 0, [4], 0, 10);
    design.addMove(3, 0, [1], 0, 10);
    design.addMove(3, 0, [6], 0, 10);
    design.addMove(3, 0, [5], 0, 10);
    design.addMove(3, 0, [2], 0, 10);
    design.addMove(3, 0, [0], 0, 10);

    design.addPiece("Cannon", 4, 800);
    design.addMove(4, 0, [7], 0, 10);
    design.addMove(4, 0, [3], 0, 10);
    design.addMove(4, 0, [4], 0, 10);
    design.addMove(4, 0, [1], 0, 10);
    design.addMove(4, 0, [6], 0, 10);
    design.addMove(4, 0, [5], 0, 10);
    design.addMove(4, 0, [2], 0, 10);
    design.addMove(4, 0, [0], 0, 10);

    design.addPiece("Mandarin", 5, 50);
    design.addMove(5, 0, [7], 0, 10);
    design.addMove(5, 0, [3], 0, 10);
    design.addMove(5, 0, [4], 0, 10);
    design.addMove(5, 0, [1], 0, 10);
    design.addMove(5, 0, [6], 0, 10);
    design.addMove(5, 0, [5], 0, 10);
    design.addMove(5, 0, [2], 0, 10);
    design.addMove(5, 0, [0], 0, 10);

    design.addPiece("General", 6, 20000);
    design.addMove(6, 0, [7], 0, 10);
    design.addMove(6, 0, [3], 0, 10);
    design.addMove(6, 0, [4], 0, 10);
    design.addMove(6, 0, [1], 0, 10);
    design.addMove(6, 0, [6], 0, 10);
    design.addMove(6, 0, [5], 0, 10);
    design.addMove(6, 0, [2], 0, 10);
    design.addMove(6, 0, [0], 0, 10);

    design.addPiece("Man", 7, 0);
    design.addMove(7, 1, [7], 1);
    design.addMove(7, 1, [3], 1);
    design.addMove(7, 1, [4], 1);
    design.addMove(7, 2, [7, 6], 2);
    design.addMove(7, 2, [7, 5], 2);
    design.addMove(7, 2, [1, 2], 2);
    design.addMove(7, 2, [1, 0], 2);
    design.addMove(7, 2, [4, 6], 2);
    design.addMove(7, 2, [3, 5], 2);
    design.addMove(7, 2, [4, 2], 2);
    design.addMove(7, 2, [3, 0], 2);
    design.addMove(7, 2, [6, 6], 3);
    design.addMove(7, 2, [5, 5], 3);
    design.addMove(7, 2, [2, 2], 3);
    design.addMove(7, 2, [0, 0], 3);
    design.addMove(7, 3, [7, 7], 4);
    design.addMove(7, 3, [3, 3], 4);
    design.addMove(7, 3, [4, 4], 4);
    design.addMove(7, 3, [1, 1], 4);
    design.addMove(7, 4, [7, 7, 7, 7], 5);
    design.addMove(7, 4, [3, 3, 3, 3], 5);
    design.addMove(7, 4, [4, 4, 4, 4], 5);
    design.addMove(7, 4, [1, 1, 1, 1], 5);
    design.addMove(7, 1, [6], 6);
    design.addMove(7, 1, [5], 6);
    design.addMove(7, 1, [2], 6);
    design.addMove(7, 1, [0], 6);
    design.addMove(7, 1, [7], 7);
    design.addMove(7, 1, [3], 7);
    design.addMove(7, 1, [4], 7);
    design.addMove(7, 1, [1], 7);

    design.setup("Gold", "Man", 120);
    design.setup("Gold", "Man", 121);
    design.setup("Gold", "Man", 122);
    design.setup("Gold", "Man", 123);
    design.setup("Gold", "Man", 124);
    design.setup("Gold", "Man", 125);
    design.setup("Gold", "Man", 126);
    design.setup("Gold", "Man", 127);
    design.setup("Gold", "Man", 112);
    design.setup("Gold", "Man", 113);
    design.setup("Gold", "Man", 114);
    design.setup("Gold", "Man", 115);
    design.setup("Gold", "Man", 116);
    design.setup("Gold", "Man", 117);
    design.setup("Gold", "Man", 118);
    design.setup("Gold", "Man", 119);
    design.setup("Gold", "Soldier", 56);
    design.setup("Gold", "Soldier", 57);
    design.setup("Gold", "Soldier", 48);
    design.setup("Gold", "Soldier", 51);
    design.setup("Gold", "Soldier", 46);
    design.setup("Gold", "Soldier", 47);
    design.setup("Gold", "Soldier", 36);
    design.setup("Gold", "Soldier", 37);
    design.setup("Gold", "Horse", 62);
    design.setup("Gold", "Horse", 50);
    design.setup("Gold", "Horse", 40);
    design.setup("Gold", "Horse", 35);
    design.setup("Gold", "Elephant", 60);
    design.setup("Gold", "Elephant", 55);
    design.setup("Gold", "Elephant", 45);
    design.setup("Gold", "Elephant", 33);
    design.setup("Gold", "Chariot", 63);
    design.setup("Gold", "Chariot", 52);
    design.setup("Gold", "Chariot", 41);
    design.setup("Gold", "Chariot", 34);
    design.setup("Gold", "Mandarin", 59);
    design.setup("Gold", "Mandarin", 53);
    design.setup("Gold", "Mandarin", 42);
    design.setup("Gold", "Mandarin", 38);
    design.setup("Gold", "Cannon", 61);
    design.setup("Gold", "Cannon", 54);
    design.setup("Gold", "Cannon", 43);
    design.setup("Gold", "Cannon", 32);
    design.setup("Gold", "General", 58);
    design.setup("Gold", "General", 49);
    design.setup("Gold", "General", 44);
    design.setup("Gold", "General", 39);
    design.setup("Silver", "Man", 64);
    design.setup("Silver", "Man", 65);
    design.setup("Silver", "Man", 66);
    design.setup("Silver", "Man", 67);
    design.setup("Silver", "Man", 68);
    design.setup("Silver", "Man", 69);
    design.setup("Silver", "Man", 70);
    design.setup("Silver", "Man", 71);
    design.setup("Silver", "Man", 72);
    design.setup("Silver", "Man", 73);
    design.setup("Silver", "Man", 74);
    design.setup("Silver", "Man", 75);
    design.setup("Silver", "Man", 76);
    design.setup("Silver", "Man", 77);
    design.setup("Silver", "Man", 78);
    design.setup("Silver", "Man", 79);
    design.setup("Silver", "Soldier", 28);
    design.setup("Silver", "Soldier", 29);
    design.setup("Silver", "Soldier", 17);
    design.setup("Silver", "Soldier", 18);
    design.setup("Silver", "Soldier", 10);
    design.setup("Silver", "Soldier", 11);
    design.setup("Silver", "Soldier", 6);
    design.setup("Silver", "Soldier", 7);
    design.setup("Silver", "Horse", 31);
    design.setup("Silver", "Horse", 21);
    design.setup("Silver", "Horse", 12);
    design.setup("Silver", "Horse", 1);
    design.setup("Silver", "Elephant", 26);
    design.setup("Silver", "Elephant", 16);
    design.setup("Silver", "Elephant", 14);
    design.setup("Silver", "Elephant", 3);
    design.setup("Silver", "Chariot", 27);
    design.setup("Silver", "Chariot", 22);
    design.setup("Silver", "Chariot", 13);
    design.setup("Silver", "Chariot", 0);
    design.setup("Silver", "Mandarin", 24);
    design.setup("Silver", "Mandarin", 23);
    design.setup("Silver", "Mandarin", 9);
    design.setup("Silver", "Mandarin", 4);
    design.setup("Silver", "Cannon", 25);
    design.setup("Silver", "Cannon", 20);
    design.setup("Silver", "Cannon", 15);
    design.setup("Silver", "Cannon", 2);
    design.setup("Silver", "General", 30);
    design.setup("Silver", "General", 19);
    design.setup("Silver", "General", 8);
    design.setup("Silver", "General", 5);
}

Dagaz.View.configure = function(view) {
    view.defPiece("GoldSoldier", "Gold Soldier");
    view.defPiece("SilverSoldier", "Silver Soldier");
    view.defPiece("GoldHorse", "Gold Horse");
    view.defPiece("SilverHorse", "Silver Horse");
    view.defPiece("GoldElephant", "Gold Elephant");
    view.defPiece("SilverElephant", "Silver Elephant");
    view.defPiece("GoldChariot", "Gold Chariot");
    view.defPiece("SilverChariot", "Silver Chariot");
    view.defPiece("GoldCannon", "Gold Cannon");
    view.defPiece("SilverCannon", "Silver Cannon");
    view.defPiece("GoldMandarin", "Gold Mandarin");
    view.defPiece("SilverMandarin", "Silver Mandarin");
    view.defPiece("GoldGeneral", "Gold General");
    view.defPiece("SilverGeneral", "Silver General");
    view.defPiece("GoldMan", "Gold Man");
    view.defPiece("SilverMan", "Silver Man");
 
    view.defPosition("A8", 0, 0, 70, 70);
    view.defPosition("B8", 70, 0, 70, 70);
    view.defPosition("C8", 140, 0, 70, 70);
    view.defPosition("D8", 210, 0, 70, 70);
    view.defPosition("E8", 280, 0, 70, 70);
    view.defPosition("F8", 350, 0, 70, 70);
    view.defPosition("G8", 420, 0, 70, 70);
    view.defPosition("H8", 490, 0, 70, 70);
    view.defPosition("A7", 0, 70, 70, 70);
    view.defPosition("B7", 70, 70, 70, 70);
    view.defPosition("C7", 140, 70, 70, 70);
    view.defPosition("D7", 210, 70, 70, 70);
    view.defPosition("E7", 280, 70, 70, 70);
    view.defPosition("F7", 350, 70, 70, 70);
    view.defPosition("G7", 420, 70, 70, 70);
    view.defPosition("H7", 490, 70, 70, 70);
    view.defPosition("A6", 0, 140, 70, 70);
    view.defPosition("B6", 70, 140, 70, 70);
    view.defPosition("C6", 140, 140, 70, 70);
    view.defPosition("D6", 210, 140, 70, 70);
    view.defPosition("E6", 280, 140, 70, 70);
    view.defPosition("F6", 350, 140, 70, 70);
    view.defPosition("G6", 420, 140, 70, 70);
    view.defPosition("H6", 490, 140, 70, 70);
    view.defPosition("A5", 0, 210, 70, 70);
    view.defPosition("B5", 70, 210, 70, 70);
    view.defPosition("C5", 140, 210, 70, 70);
    view.defPosition("D5", 210, 210, 70, 70);
    view.defPosition("E5", 280, 210, 70, 70);
    view.defPosition("F5", 350, 210, 70, 70);
    view.defPosition("G5", 420, 210, 70, 70);
    view.defPosition("H5", 490, 210, 70, 70);
    view.defPosition("A4", 0, 280, 70, 70);
    view.defPosition("B4", 70, 280, 70, 70);
    view.defPosition("C4", 140, 280, 70, 70);
    view.defPosition("D4", 210, 280, 70, 70);
    view.defPosition("E4", 280, 280, 70, 70);
    view.defPosition("F4", 350, 280, 70, 70);
    view.defPosition("G4", 420, 280, 70, 70);
    view.defPosition("H4", 490, 280, 70, 70);
    view.defPosition("A3", 0, 350, 70, 70);
    view.defPosition("B3", 70, 350, 70, 70);
    view.defPosition("C3", 140, 350, 70, 70);
    view.defPosition("D3", 210, 350, 70, 70);
    view.defPosition("E3", 280, 350, 70, 70);
    view.defPosition("F3", 350, 350, 70, 70);
    view.defPosition("G3", 420, 350, 70, 70);
    view.defPosition("H3", 490, 350, 70, 70);
    view.defPosition("A2", 0, 420, 70, 70);
    view.defPosition("B2", 70, 420, 70, 70);
    view.defPosition("C2", 140, 420, 70, 70);
    view.defPosition("D2", 210, 420, 70, 70);
    view.defPosition("E2", 280, 420, 70, 70);
    view.defPosition("F2", 350, 420, 70, 70);
    view.defPosition("G2", 420, 420, 70, 70);
    view.defPosition("H2", 490, 420, 70, 70);
    view.defPosition("A1", 0, 490, 70, 70);
    view.defPosition("B1", 70, 490, 70, 70);
    view.defPosition("C1", 140, 490, 70, 70);
    view.defPosition("D1", 210, 490, 70, 70);
    view.defPosition("E1", 280, 490, 70, 70);
    view.defPosition("F1", 350, 490, 70, 70);
    view.defPosition("G1", 420, 490, 70, 70);
    view.defPosition("H1", 490, 490, 70, 70);
    view.defPosition("a8", 0, 0, 70, 70);
    view.defPosition("b8", 70, 0, 70, 70);
    view.defPosition("c8", 140, 0, 70, 70);
    view.defPosition("d8", 210, 0, 70, 70);
    view.defPosition("e8", 280, 0, 70, 70);
    view.defPosition("f8", 350, 0, 70, 70);
    view.defPosition("g8", 420, 0, 70, 70);
    view.defPosition("h8", 490, 0, 70, 70);
    view.defPosition("a7", 0, 70, 70, 70);
    view.defPosition("b7", 70, 70, 70, 70);
    view.defPosition("c7", 140, 70, 70, 70);
    view.defPosition("d7", 210, 70, 70, 70);
    view.defPosition("e7", 280, 70, 70, 70);
    view.defPosition("f7", 350, 70, 70, 70);
    view.defPosition("g7", 420, 70, 70, 70);
    view.defPosition("h7", 490, 70, 70, 70);
    view.defPosition("a6", 0, 140, 70, 70);
    view.defPosition("b6", 70, 140, 70, 70);
    view.defPosition("c6", 140, 140, 70, 70);
    view.defPosition("d6", 210, 140, 70, 70);
    view.defPosition("e6", 280, 140, 70, 70);
    view.defPosition("f6", 350, 140, 70, 70);
    view.defPosition("g6", 420, 140, 70, 70);
    view.defPosition("h6", 490, 140, 70, 70);
    view.defPosition("a5", 0, 210, 70, 70);
    view.defPosition("b5", 70, 210, 70, 70);
    view.defPosition("c5", 140, 210, 70, 70);
    view.defPosition("d5", 210, 210, 70, 70);
    view.defPosition("e5", 280, 210, 70, 70);
    view.defPosition("f5", 350, 210, 70, 70);
    view.defPosition("g5", 420, 210, 70, 70);
    view.defPosition("h5", 490, 210, 70, 70);
    view.defPosition("a4", 0, 280, 70, 70);
    view.defPosition("b4", 70, 280, 70, 70);
    view.defPosition("c4", 140, 280, 70, 70);
    view.defPosition("d4", 210, 280, 70, 70);
    view.defPosition("e4", 280, 280, 70, 70);
    view.defPosition("f4", 350, 280, 70, 70);
    view.defPosition("g4", 420, 280, 70, 70);
    view.defPosition("h4", 490, 280, 70, 70);
    view.defPosition("a3", 0, 350, 70, 70);
    view.defPosition("b3", 70, 350, 70, 70);
    view.defPosition("c3", 140, 350, 70, 70);
    view.defPosition("d3", 210, 350, 70, 70);
    view.defPosition("e3", 280, 350, 70, 70);
    view.defPosition("f3", 350, 350, 70, 70);
    view.defPosition("g3", 420, 350, 70, 70);
    view.defPosition("h3", 490, 350, 70, 70);
    view.defPosition("a2", 0, 420, 70, 70);
    view.defPosition("b2", 70, 420, 70, 70);
    view.defPosition("c2", 140, 420, 70, 70);
    view.defPosition("d2", 210, 420, 70, 70);
    view.defPosition("e2", 280, 420, 70, 70);
    view.defPosition("f2", 350, 420, 70, 70);
    view.defPosition("g2", 420, 420, 70, 70);
    view.defPosition("h2", 490, 420, 70, 70);
    view.defPosition("a1", 0, 490, 70, 70);
    view.defPosition("b1", 70, 490, 70, 70);
    view.defPosition("c1", 140, 490, 70, 70);
    view.defPosition("d1", 210, 490, 70, 70);
    view.defPosition("e1", 280, 490, 70, 70);
    view.defPosition("f1", 350, 490, 70, 70);
    view.defPosition("g1", 420, 490, 70, 70);
    view.defPosition("h1", 490, 490, 70, 70);
}
