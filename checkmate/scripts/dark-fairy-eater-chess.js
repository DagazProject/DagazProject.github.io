Dagaz.Controller.persistense = "none";

Dagaz.Model.WIDTH  = 9;
Dagaz.Model.HEIGHT = 9;

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
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [5, 7, 6, 3, 4, 0, 2, 1]);

    design.addPosition("a9", [10, 9, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("c9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("d9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("e9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("f9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("g9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("h9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("i9", [0, 9, 8, 0, -1, 0, 0, 0]);
    design.addPosition("a8", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i8", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a7", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i7", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a6", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i6", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a5", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i5", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a4", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i4", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a3", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i3", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a2", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i2", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("i1", [0, 0, 0, 0, -1, 0, -10, -9]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("promotion-rank", 1, [27, 28, 29, 30, 31, 32, 33, 34, 35]);
    design.addZone("promotion-rank", 2, [45, 46, 47, 48, 49, 50, 51, 52, 53]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// promotion-rank
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	2);	// Ghost
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// promotion-rank
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	2);	// Ghost
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
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

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	9);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-10);
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0, 800);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [5], 0);

    design.addPiece("Shield", 1, 4500);
    design.addMove(1, 2, [7], 0);
    design.addMove(1, 2, [1], 0);
    design.addMove(1, 3, [4, 4], 0);
    design.addMove(1, 3, [3, 3], 0);

    design.addPiece("Ghost", 2, 3200);
    design.addMove(2, 4, [7, 7, 7, 7], 0);
    design.addMove(2, 4, [6, 6, 6, 6], 0);
    design.addMove(2, 4, [3, 3, 3, 3], 0);
    design.addMove(2, 4, [5, 5, 5, 5], 0);
    design.addMove(2, 4, [4, 4, 4, 4], 0);
    design.addMove(2, 4, [2, 2, 2, 2], 0);
    design.addMove(2, 4, [1, 1, 1, 1], 0);
    design.addMove(2, 4, [0, 0, 0, 0], 0);

    design.addPiece("Chaos", 3, 6800);
    design.addMove(3, 5, [7, 6], 0);
    design.addMove(3, 5, [7, 5], 0);
    design.addMove(3, 5, [1, 2], 0);
    design.addMove(3, 5, [1, 0], 0);
    design.addMove(3, 5, [4, 6], 0);
    design.addMove(3, 5, [4, 2], 0);
    design.addMove(3, 5, [3, 5], 0);
    design.addMove(3, 5, [3, 0], 0);
    design.addMove(3, 3, [6, 6], 0);
    design.addMove(3, 3, [5, 5], 0);
    design.addMove(3, 3, [2, 2], 0);
    design.addMove(3, 3, [0, 0], 0);

    design.addPiece("Reaper", 4, 8450);
    design.addMove(4, 5, [7, 6], 0);
    design.addMove(4, 5, [7, 5], 0);
    design.addMove(4, 5, [1, 2], 0);
    design.addMove(4, 5, [1, 0], 0);
    design.addMove(4, 5, [4, 6], 0);
    design.addMove(4, 5, [4, 2], 0);
    design.addMove(4, 5, [3, 5], 0);
    design.addMove(4, 5, [3, 0], 0);
    design.addMove(4, 3, [7, 7], 0);
    design.addMove(4, 3, [3, 3], 0);
    design.addMove(4, 3, [4, 4], 0);
    design.addMove(4, 3, [1, 1], 0);

    design.addPiece("Knightrider", 5, 3500);
    design.addMove(5, 4, [7, 6, 7, 6], 0);
    design.addMove(5, 4, [7, 5, 7, 5], 0);
    design.addMove(5, 4, [1, 2, 1, 2], 0);
    design.addMove(5, 4, [1, 0, 1, 0], 0);
    design.addMove(5, 4, [4, 6, 4, 6], 0);
    design.addMove(5, 4, [4, 2, 4, 2], 0);
    design.addMove(5, 4, [3, 5, 3, 5], 0);
    design.addMove(5, 4, [3, 0, 3, 0], 0);

    design.addPiece("King", 6, 600000);
    design.addMove(6, 2, [7], 0);
    design.addMove(6, 2, [1], 0);
    design.addMove(6, 2, [4], 0);
    design.addMove(6, 2, [3], 0);
    design.addMove(6, 2, [6], 0);
    design.addMove(6, 2, [2], 0);
    design.addMove(6, 2, [5], 0);
    design.addMove(6, 2, [0], 0);

    design.setup("White", "Pawn", 45);
    design.setup("White", "Pawn", 46);
    design.setup("White", "Pawn", 47);
    design.setup("White", "Pawn", 48);
    design.setup("White", "Pawn", 49);
    design.setup("White", "Pawn", 50);
    design.setup("White", "Pawn", 51);
    design.setup("White", "Pawn", 52);
    design.setup("White", "Pawn", 53);
    design.setup("White", "Shield", 57);
    design.setup("White", "Shield", 58);
    design.setup("White", "Shield", 59);
    design.setup("White", "Shield", 67);
    design.setup("White", "Ghost", 75);
    design.setup("White", "Ghost", 66);
    design.setup("White", "Ghost", 77);
    design.setup("White", "Ghost", 68);
    design.setup("White", "Chaos", 54);
    design.setup("White", "Chaos", 55);
    design.setup("White", "Chaos", 56);
    design.setup("White", "Chaos", 60);
    design.setup("White", "Chaos", 61);
    design.setup("White", "Chaos", 62);
    design.setup("White", "Reaper", 63);
    design.setup("White", "Reaper", 64);
    design.setup("White", "Reaper", 65);
    design.setup("White", "Reaper", 69);
    design.setup("White", "Reaper", 70);
    design.setup("White", "Reaper", 71);
    design.setup("White", "Knightrider", 72);
    design.setup("White", "Knightrider", 73);
    design.setup("White", "Knightrider", 74);
    design.setup("White", "Knightrider", 78);
    design.setup("White", "Knightrider", 79);
    design.setup("White", "Knightrider", 80);
    design.setup("White", "King", 76);
    design.setup("Black", "Pawn", 27);
    design.setup("Black", "Pawn", 28);
    design.setup("Black", "Pawn", 29);
    design.setup("Black", "Pawn", 30);
    design.setup("Black", "Pawn", 31);
    design.setup("Black", "Pawn", 32);
    design.setup("Black", "Pawn", 33);
    design.setup("Black", "Pawn", 34);
    design.setup("Black", "Pawn", 35);
    design.setup("Black", "Shield", 21);
    design.setup("Black", "Shield", 22);
    design.setup("Black", "Shield", 23);
    design.setup("Black", "Shield", 13);
    design.setup("Black", "Ghost", 12);
    design.setup("Black", "Ghost", 3);
    design.setup("Black", "Ghost", 14);
    design.setup("Black", "Ghost", 5);
    design.setup("Black", "Chaos", 18);
    design.setup("Black", "Chaos", 19);
    design.setup("Black", "Chaos", 20);
    design.setup("Black", "Chaos", 24);
    design.setup("Black", "Chaos", 25);
    design.setup("Black", "Chaos", 26);
    design.setup("Black", "Reaper", 9);
    design.setup("Black", "Reaper", 10);
    design.setup("Black", "Reaper", 11);
    design.setup("Black", "Reaper", 15);
    design.setup("Black", "Reaper", 16);
    design.setup("Black", "Reaper", 17);
    design.setup("Black", "Knightrider", 0);
    design.setup("Black", "Knightrider", 1);
    design.setup("Black", "Knightrider", 2);
    design.setup("Black", "Knightrider", 6);
    design.setup("Black", "Knightrider", 7);
    design.setup("Black", "Knightrider", 8);
    design.setup("Black", "King", 4);
}

Dagaz.View.configure = function(view) {
    view.defBoard("WhiteBoard", 0, 0, undefined, [0]);
    view.defBoard("BlackBoard", 0, 0, undefined, [1]);
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteShield", "White Shield");
    view.defPiece("BlackShield", "Black Shield");
    view.defPiece("WhiteGhost", "White Ghost");
    view.defPiece("BlackGhost", "Black Ghost");
    view.defPiece("WhiteChaos", "White Chaos");
    view.defPiece("BlackChaos", "Black Chaos");
    view.defPiece("WhiteReaper", "White Reaper");
    view.defPiece("BlackReaper", "Black Reaper");
    view.defPiece("WhiteKnightrider", "White Knightrider");
    view.defPiece("BlackKnightrider", "Black Knightrider");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a9", 17, 17, 65, 65);
    view.defPosition("b9", 82, 17, 65, 65);
    view.defPosition("c9", 147, 17, 65, 65);
    view.defPosition("d9", 212, 17, 65, 65);
    view.defPosition("e9", 277, 17, 65, 65);
    view.defPosition("f9", 342, 17, 65, 65);
    view.defPosition("g9", 407, 17, 65, 65);
    view.defPosition("h9", 472, 17, 65, 65);
    view.defPosition("i9", 537, 17, 65, 65);
    view.defPosition("a8", 17, 82, 65, 65);
    view.defPosition("b8", 82, 82, 65, 65);
    view.defPosition("c8", 147, 82, 65, 65);
    view.defPosition("d8", 212, 82, 65, 65);
    view.defPosition("e8", 277, 82, 65, 65);
    view.defPosition("f8", 342, 82, 65, 65);
    view.defPosition("g8", 407, 82, 65, 65);
    view.defPosition("h8", 472, 82, 65, 65);
    view.defPosition("i8", 537, 82, 65, 65);
    view.defPosition("a7", 17, 147, 65, 65);
    view.defPosition("b7", 82, 147, 65, 65);
    view.defPosition("c7", 147, 147, 65, 65);
    view.defPosition("d7", 212, 147, 65, 65);
    view.defPosition("e7", 277, 147, 65, 65);
    view.defPosition("f7", 342, 147, 65, 65);
    view.defPosition("g7", 407, 147, 65, 65);
    view.defPosition("h7", 472, 147, 65, 65);
    view.defPosition("i7", 537, 147, 65, 65);
    view.defPosition("a6", 17, 212, 65, 65);
    view.defPosition("b6", 82, 212, 65, 65);
    view.defPosition("c6", 147, 212, 65, 65);
    view.defPosition("d6", 212, 212, 65, 65);
    view.defPosition("e6", 277, 212, 65, 65);
    view.defPosition("f6", 342, 212, 65, 65);
    view.defPosition("g6", 407, 212, 65, 65);
    view.defPosition("h6", 472, 212, 65, 65);
    view.defPosition("i6", 537, 212, 65, 65);
    view.defPosition("a5", 17, 277, 65, 65);
    view.defPosition("b5", 82, 277, 65, 65);
    view.defPosition("c5", 147, 277, 65, 65);
    view.defPosition("d5", 212, 277, 65, 65);
    view.defPosition("e5", 277, 277, 65, 65);
    view.defPosition("f5", 342, 277, 65, 65);
    view.defPosition("g5", 407, 277, 65, 65);
    view.defPosition("h5", 472, 277, 65, 65);
    view.defPosition("i5", 537, 277, 65, 65);
    view.defPosition("a4", 17, 342, 65, 65);
    view.defPosition("b4", 82, 342, 65, 65);
    view.defPosition("c4", 147, 342, 65, 65);
    view.defPosition("d4", 212, 342, 65, 65);
    view.defPosition("e4", 277, 342, 65, 65);
    view.defPosition("f4", 342, 342, 65, 65);
    view.defPosition("g4", 407, 342, 65, 65);
    view.defPosition("h4", 472, 342, 65, 65);
    view.defPosition("i4", 537, 342, 65, 65);
    view.defPosition("a3", 17, 407, 65, 65);
    view.defPosition("b3", 82, 407, 65, 65);
    view.defPosition("c3", 147, 407, 65, 65);
    view.defPosition("d3", 212, 407, 65, 65);
    view.defPosition("e3", 277, 407, 65, 65);
    view.defPosition("f3", 342, 407, 65, 65);
    view.defPosition("g3", 407, 407, 65, 65);
    view.defPosition("h3", 472, 407, 65, 65);
    view.defPosition("i3", 537, 407, 65, 65);
    view.defPosition("a2", 17, 472, 65, 65);
    view.defPosition("b2", 82, 472, 65, 65);
    view.defPosition("c2", 147, 472, 65, 65);
    view.defPosition("d2", 212, 472, 65, 65);
    view.defPosition("e2", 277, 472, 65, 65);
    view.defPosition("f2", 342, 472, 65, 65);
    view.defPosition("g2", 407, 472, 65, 65);
    view.defPosition("h2", 472, 472, 65, 65);
    view.defPosition("i2", 537, 472, 65, 65);
    view.defPosition("a1", 17, 537, 65, 65);
    view.defPosition("b1", 82, 537, 65, 65);
    view.defPosition("c1", 147, 537, 65, 65);
    view.defPosition("d1", 212, 537, 65, 65);
    view.defPosition("e1", 277, 537, 65, 65);
    view.defPosition("f1", 342, 537, 65, 65);
    view.defPosition("g1", 407, 537, 65, 65);
    view.defPosition("h1", 472, 537, 65, 65);
    view.defPosition("i1", 537, 537, 65, 65);

    view.defPopup("Promote", 125, 100);
    view.defPopupPosition("X1", 10, 7, 68, 68);
    view.defPopupPosition("X2", 80, 7, 68, 68);
    view.defPopupPosition("X3", 150, 7, 68, 68);
    view.defPopupPosition("X4", 220, 7, 68, 68);
    view.defPopupPosition("X5", 290, 7, 68, 68);
}
