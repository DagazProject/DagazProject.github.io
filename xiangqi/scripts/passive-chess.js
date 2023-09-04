Dagaz.View.SHIFT_X      = 1;
Dagaz.View.SHIFT_Y      = 1;

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
    design.checkVersion("show-blink", "false");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("advisor-wait", "20");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("Red", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a8", [0, 1, 8, 0, 0, 9, 0, 0]);
    design.addPosition("b8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("c8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("d8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("e8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("f8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("g8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("h8", [-1, 0, 8, 0, 0, 0, 7, 0]);
    design.addPosition("a7", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h7", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a6", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h6", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a5", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h5", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a4", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h4", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a3", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h3", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a2", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h2", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a1", [0, 1, 0, -7, -8, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("c1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("d1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("e1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("f1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("g1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("h1", [-1, 0, 0, 0, -8, 0, 0, -9]);

    design.addZone("general-zone", 1, [60, 47, 16, 3]);
    design.addZone("general-zone", 2, [60, 47, 16, 3]);
    design.addZone("mandarin-zone", 1, [59, 50, 53, 40, 23, 10, 13, 4]);
    design.addZone("mandarin-zone", 2, [59, 50, 53, 40, 23, 10, 13, 4]);
    design.addZone("elephant-zone", 1, [58, 61, 51, 55, 42, 45, 18, 21, 8, 12, 2, 5]);
    design.addZone("elephant-zone", 2, [58, 61, 51, 55, 42, 45, 18, 21, 8, 12, 2, 5]);
    design.addZone("horse-zone", 1, [57, 62, 48, 52, 39, 24, 11, 15, 1, 6]);
    design.addZone("horse-zone", 2, [57, 62, 48, 52, 39, 24, 11, 15, 1, 6]);
    design.addZone("cannon-zone", 1, [49, 54, 33, 35, 28, 30, 9, 14]);
    design.addZone("cannon-zone", 2, [49, 54, 33, 35, 28, 30, 9, 14]);
    design.addZone("chariot-zone", 1, [56, 63, 37, 26, 0, 7]);
    design.addZone("chariot-zone", 2, [56, 63, 37, 26, 0, 7]);

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
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
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
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	7);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-8);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-5);
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
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

    design.addPiece("General", 0, 600000);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [1], 0);

    design.addPiece("Mandarin", 1, 800);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [6], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [5], 0);

    design.addPiece("Elephant", 2, 800);
    design.addMove(2, 1, [7, 7], 0);
    design.addMove(2, 1, [6, 6], 0);
    design.addMove(2, 1, [3, 3], 0);
    design.addMove(2, 1, [5, 5], 0);

    design.addPiece("Horse", 3, 3000);
    design.addMove(3, 1, [4, 7], 0);
    design.addMove(3, 1, [4, 3], 0);
    design.addMove(3, 1, [2, 6], 0);
    design.addMove(3, 1, [2, 5], 0);
    design.addMove(3, 1, [0, 7], 0);
    design.addMove(3, 1, [1, 3], 0);
    design.addMove(3, 1, [0, 6], 0);
    design.addMove(3, 1, [1, 5], 0);

    design.addPiece("Cannon", 4, 5500);
    design.addMove(4, 2, [4, 4, 4, 4], 0);
    design.addMove(4, 2, [2, 2, 2, 2], 0);
    design.addMove(4, 2, [0, 0, 0, 0], 0);
    design.addMove(4, 2, [1, 1, 1, 1], 0);

    design.addPiece("Chariot", 5, 5000);
    design.addMove(5, 3, [4, 4], 0);
    design.addMove(5, 3, [2, 2], 0);
    design.addMove(5, 3, [0, 0], 0);
    design.addMove(5, 3, [1, 1], 0);

    design.setup("Red", "Horse", 57);
    design.setup("Red", "Horse", 62);
    design.setup("Red", "Horse", 48);
    design.setup("Red", "Horse", 52);
    design.setup("Red", "Elephant", 58);
    design.setup("Red", "Elephant", 61);
    design.setup("Red", "Elephant", 51);
    design.setup("Red", "Elephant", 55);
    design.setup("Red", "Chariot", 56);
    design.setup("Red", "Chariot", 63);
    design.setup("Red", "Mandarin", 59);
    design.setup("Red", "Mandarin", 50);
    design.setup("Red", "Mandarin", 53);
    design.setup("Red", "Cannon", 49);
    design.setup("Red", "Cannon", 54);
    design.setup("Red", "General", 60);
    design.setup("Black", "Horse", 11);
    design.setup("Black", "Horse", 15);
    design.setup("Black", "Horse", 1);
    design.setup("Black", "Horse", 6);
    design.setup("Black", "Elephant", 8);
    design.setup("Black", "Elephant", 12);
    design.setup("Black", "Elephant", 2);
    design.setup("Black", "Elephant", 5);
    design.setup("Black", "Chariot", 0);
    design.setup("Black", "Chariot", 7);
    design.setup("Black", "Mandarin", 10);
    design.setup("Black", "Mandarin", 13);
    design.setup("Black", "Mandarin", 4);
    design.setup("Black", "Cannon", 9);
    design.setup("Black", "Cannon", 14);
    design.setup("Black", "General", 3);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedGeneral", "Red General");
    view.defPiece("BlackGeneral", "Black General");
    view.defPiece("RedMandarin", "Red Mandarin");
    view.defPiece("BlackMandarin", "Black Mandarin");
    view.defPiece("RedElephant", "Red Elephant");
    view.defPiece("BlackElephant", "Black Elephant");
    view.defPiece("RedHorse", "Red Horse");
    view.defPiece("BlackHorse", "Black Horse");
    view.defPiece("RedCannon", "Red Cannon");
    view.defPiece("BlackCannon", "Black Cannon");
    view.defPiece("RedChariot", "Red Chariot");
    view.defPiece("BlackChariot", "Black Chariot");
 
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
