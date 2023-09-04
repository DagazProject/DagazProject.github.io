Dagaz.View.CLEAR_KO = true;
Dagaz.Controller.saveLastTo = true;

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
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("highlight-goals", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("progressive-levels", "true");
    design.checkVersion("advisor-wait", "15");
    design.checkVersion("kamisado-extension", "true");

    design.addDirection("w");  // 0
    design.addDirection("e");  // 1
    design.addDirection("s");  // 2
    design.addDirection("ne"); // 3
    design.addDirection("n");  // 4
    design.addDirection("se"); // 5
    design.addDirection("sw"); // 6
    design.addDirection("nw"); // 7

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [0, 1, 4, 5, 2, 3, 7, 6]);

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

    design.addZone("orange", 1, [0, 9, 18, 27, 36, 45, 54, 63]);
    design.addZone("orange", 2, [0, 9, 18, 27, 36, 45, 54, 63]);
    design.addZone("blue", 1, [40, 1, 26, 51, 12, 37, 62, 23]);
    design.addZone("blue", 2, [40, 1, 26, 51, 12, 37, 62, 23]);
    design.addZone("purple", 1, [48, 25, 2, 43, 20, 61, 38, 15]);
    design.addZone("purple", 2, [48, 25, 2, 43, 20, 61, 38, 15]);
    design.addZone("pink", 1, [24, 17, 10, 3, 60, 53, 46, 39]);
    design.addZone("pink", 2, [24, 17, 10, 3, 60, 53, 46, 39]);
    design.addZone("yellow", 1, [32, 41, 50, 59, 4, 13, 22, 31]);
    design.addZone("yellow", 2, [32, 41, 50, 59, 4, 13, 22, 31]);
    design.addZone("red", 1, [8, 33, 58, 19, 44, 5, 30, 55]);
    design.addZone("red", 2, [8, 33, 58, 19, 44, 5, 30, 55]);
    design.addZone("green", 1, [16, 57, 34, 11, 52, 29, 6, 47]);
    design.addZone("green", 2, [16, 57, 34, 11, 52, 29, 6, 47]);
    design.addZone("brown", 1, [56, 49, 42, 35, 28, 21, 14, 7]);
    design.addZone("brown", 2, [56, 49, 42, 35, 28, 21, 14, 7]);
    design.addZone("last-rank", 1, [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addZone("last-rank", 2, [56, 57, 58, 59, 60, 61, 62, 63]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	7);
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-8);
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	4);	// $5
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	0);	// OrangeDragon
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.IF,	24);
    design.addCommand(6, ZRF.LITERAL,	2);	// BlueDragon
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.IF,	21);
    design.addCommand(6, ZRF.LITERAL,	4);	// PurpleDragon
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.IF,	18);
    design.addCommand(6, ZRF.LITERAL,	6);	// PinkDragon
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.IF,	15);
    design.addCommand(6, ZRF.LITERAL,	8);	// YellowDragon
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.IF,	12);
    design.addCommand(6, ZRF.LITERAL,	10);	// RedDragon
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.IF,	9);
    design.addCommand(6, ZRF.LITERAL,	12);	// GreenDragon
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.IF,	6);
    design.addCommand(6, ZRF.LITERAL,	14);	// BrownDragon
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.IF,	3);
    design.addCommand(6, ZRF.LITERAL,	0);	// false
    design.addCommand(6, ZRF.JUMP,	2);
    design.addCommand(6, ZRF.LITERAL,	1);	// true
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end


    design.addPiece("OrangeDragon", 0);
    design.addMove(0, 0, [4, 4], 0);
    design.addMove(0, 0, [7, 7], 0);
    design.addMove(0, 0, [3, 3], 0);

    design.addPiece("OrangeSumo", 1);
    design.addMove(1, 1, [4], 0);
    design.addMove(1, 1, [7], 0);
    design.addMove(1, 1, [3], 0);
    design.addMove(1, 2, [4, 4], 0);
    design.addMove(1, 2, [7, 7], 0);
    design.addMove(1, 2, [3, 3], 0);
    design.addMove(1, 3, [4, 4, 4], 0);
    design.addMove(1, 3, [7, 7, 7], 0);
    design.addMove(1, 3, [3, 3, 3], 0);
    design.addMove(1, 4, [4, 4, 4, 4], 0);
    design.addMove(1, 4, [7, 7, 7, 7], 0);
    design.addMove(1, 4, [3, 3, 3, 3], 0);
    design.addMove(1, 5, [4, 4, 4, 4, 4], 0);
    design.addMove(1, 5, [7, 7, 7, 7, 7], 0);
    design.addMove(1, 5, [3, 3, 3, 3, 3], 0);
    design.addMove(1, 6, [4, 4], 0);
    design.addMove(1, 6, [7, 7], 0);
    design.addMove(1, 6, [3, 3], 0);

    design.addPiece("BlueDragon", 2);
    design.addMove(2, 0, [4, 4], 0);
    design.addMove(2, 0, [7, 7], 0);
    design.addMove(2, 0, [3, 3], 0);

    design.addPiece("BlueSumo", 3);
    design.addMove(3, 1, [4], 0);
    design.addMove(3, 1, [7], 0);
    design.addMove(3, 1, [3], 0);
    design.addMove(3, 2, [4, 4], 0);
    design.addMove(3, 2, [7, 7], 0);
    design.addMove(3, 2, [3, 3], 0);
    design.addMove(3, 3, [4, 4, 4], 0);
    design.addMove(3, 3, [7, 7, 7], 0);
    design.addMove(3, 3, [3, 3, 3], 0);
    design.addMove(3, 4, [4, 4, 4, 4], 0);
    design.addMove(3, 4, [7, 7, 7, 7], 0);
    design.addMove(3, 4, [3, 3, 3, 3], 0);
    design.addMove(3, 5, [4, 4, 4, 4, 4], 0);
    design.addMove(3, 5, [7, 7, 7, 7, 7], 0);
    design.addMove(3, 5, [3, 3, 3, 3, 3], 0);
    design.addMove(3, 6, [4, 4], 0);
    design.addMove(3, 6, [7, 7], 0);
    design.addMove(3, 6, [3, 3], 0);

    design.addPiece("PurpleDragon", 4);
    design.addMove(4, 0, [4, 4], 0);
    design.addMove(4, 0, [7, 7], 0);
    design.addMove(4, 0, [3, 3], 0);

    design.addPiece("PurpleSumo", 5);
    design.addMove(5, 1, [4], 0);
    design.addMove(5, 1, [7], 0);
    design.addMove(5, 1, [3], 0);
    design.addMove(5, 2, [4, 4], 0);
    design.addMove(5, 2, [7, 7], 0);
    design.addMove(5, 2, [3, 3], 0);
    design.addMove(5, 3, [4, 4, 4], 0);
    design.addMove(5, 3, [7, 7, 7], 0);
    design.addMove(5, 3, [3, 3, 3], 0);
    design.addMove(5, 4, [4, 4, 4, 4], 0);
    design.addMove(5, 4, [7, 7, 7, 7], 0);
    design.addMove(5, 4, [3, 3, 3, 3], 0);
    design.addMove(5, 5, [4, 4, 4, 4, 4], 0);
    design.addMove(5, 5, [7, 7, 7, 7, 7], 0);
    design.addMove(5, 5, [3, 3, 3, 3, 3], 0);
    design.addMove(5, 6, [4, 4], 0);
    design.addMove(5, 6, [7, 7], 0);
    design.addMove(5, 6, [3, 3], 0);

    design.addPiece("PinkDragon", 6);
    design.addMove(6, 0, [4, 4], 0);
    design.addMove(6, 0, [7, 7], 0);
    design.addMove(6, 0, [3, 3], 0);

    design.addPiece("PinkSumo", 7);
    design.addMove(7, 1, [4], 0);
    design.addMove(7, 1, [7], 0);
    design.addMove(7, 1, [3], 0);
    design.addMove(7, 2, [4, 4], 0);
    design.addMove(7, 2, [7, 7], 0);
    design.addMove(7, 2, [3, 3], 0);
    design.addMove(7, 3, [4, 4, 4], 0);
    design.addMove(7, 3, [7, 7, 7], 0);
    design.addMove(7, 3, [3, 3, 3], 0);
    design.addMove(7, 4, [4, 4, 4, 4], 0);
    design.addMove(7, 4, [7, 7, 7, 7], 0);
    design.addMove(7, 4, [3, 3, 3, 3], 0);
    design.addMove(7, 5, [4, 4, 4, 4, 4], 0);
    design.addMove(7, 5, [7, 7, 7, 7, 7], 0);
    design.addMove(7, 5, [3, 3, 3, 3, 3], 0);
    design.addMove(7, 6, [4, 4], 0);
    design.addMove(7, 6, [7, 7], 0);
    design.addMove(7, 6, [3, 3], 0);

    design.addPiece("YellowDragon", 8);
    design.addMove(8, 0, [4, 4], 0);
    design.addMove(8, 0, [7, 7], 0);
    design.addMove(8, 0, [3, 3], 0);

    design.addPiece("YellowSumo", 9);
    design.addMove(9, 1, [4], 0);
    design.addMove(9, 1, [7], 0);
    design.addMove(9, 1, [3], 0);
    design.addMove(9, 2, [4, 4], 0);
    design.addMove(9, 2, [7, 7], 0);
    design.addMove(9, 2, [3, 3], 0);
    design.addMove(9, 3, [4, 4, 4], 0);
    design.addMove(9, 3, [7, 7, 7], 0);
    design.addMove(9, 3, [3, 3, 3], 0);
    design.addMove(9, 4, [4, 4, 4, 4], 0);
    design.addMove(9, 4, [7, 7, 7, 7], 0);
    design.addMove(9, 4, [3, 3, 3, 3], 0);
    design.addMove(9, 5, [4, 4, 4, 4, 4], 0);
    design.addMove(9, 5, [7, 7, 7, 7, 7], 0);
    design.addMove(9, 5, [3, 3, 3, 3, 3], 0);
    design.addMove(9, 6, [4, 4], 0);
    design.addMove(9, 6, [7, 7], 0);
    design.addMove(9, 6, [3, 3], 0);

    design.addPiece("RedDragon", 10);
    design.addMove(10, 0, [4, 4], 0);
    design.addMove(10, 0, [7, 7], 0);
    design.addMove(10, 0, [3, 3], 0);

    design.addPiece("RedSumo", 11);
    design.addMove(11, 1, [4], 0);
    design.addMove(11, 1, [7], 0);
    design.addMove(11, 1, [3], 0);
    design.addMove(11, 2, [4, 4], 0);
    design.addMove(11, 2, [7, 7], 0);
    design.addMove(11, 2, [3, 3], 0);
    design.addMove(11, 3, [4, 4, 4], 0);
    design.addMove(11, 3, [7, 7, 7], 0);
    design.addMove(11, 3, [3, 3, 3], 0);
    design.addMove(11, 4, [4, 4, 4, 4], 0);
    design.addMove(11, 4, [7, 7, 7, 7], 0);
    design.addMove(11, 4, [3, 3, 3, 3], 0);
    design.addMove(11, 5, [4, 4, 4, 4, 4], 0);
    design.addMove(11, 5, [7, 7, 7, 7, 7], 0);
    design.addMove(11, 5, [3, 3, 3, 3, 3], 0);
    design.addMove(11, 6, [4, 4], 0);
    design.addMove(11, 6, [7, 7], 0);
    design.addMove(11, 6, [3, 3], 0);

    design.addPiece("GreenDragon", 12);
    design.addMove(12, 0, [4, 4], 0);
    design.addMove(12, 0, [7, 7], 0);
    design.addMove(12, 0, [3, 3], 0);

    design.addPiece("GreenSumo", 13);
    design.addMove(13, 1, [4], 0);
    design.addMove(13, 1, [7], 0);
    design.addMove(13, 1, [3], 0);
    design.addMove(13, 2, [4, 4], 0);
    design.addMove(13, 2, [7, 7], 0);
    design.addMove(13, 2, [3, 3], 0);
    design.addMove(13, 3, [4, 4, 4], 0);
    design.addMove(13, 3, [7, 7, 7], 0);
    design.addMove(13, 3, [3, 3, 3], 0);
    design.addMove(13, 4, [4, 4, 4, 4], 0);
    design.addMove(13, 4, [7, 7, 7, 7], 0);
    design.addMove(13, 4, [3, 3, 3, 3], 0);
    design.addMove(13, 5, [4, 4, 4, 4, 4], 0);
    design.addMove(13, 5, [7, 7, 7, 7, 7], 0);
    design.addMove(13, 5, [3, 3, 3, 3, 3], 0);
    design.addMove(13, 6, [4, 4], 0);
    design.addMove(13, 6, [7, 7], 0);
    design.addMove(13, 6, [3, 3], 0);

    design.addPiece("BrownDragon", 14);
    design.addMove(14, 0, [4, 4], 0);
    design.addMove(14, 0, [7, 7], 0);
    design.addMove(14, 0, [3, 3], 0);

    design.addPiece("BrownSumo", 15);
    design.addMove(15, 1, [4], 0);
    design.addMove(15, 1, [7], 0);
    design.addMove(15, 1, [3], 0);
    design.addMove(15, 2, [4, 4], 0);
    design.addMove(15, 2, [7, 7], 0);
    design.addMove(15, 2, [3, 3], 0);
    design.addMove(15, 3, [4, 4, 4], 0);
    design.addMove(15, 3, [7, 7, 7], 0);
    design.addMove(15, 3, [3, 3, 3], 0);
    design.addMove(15, 4, [4, 4, 4, 4], 0);
    design.addMove(15, 4, [7, 7, 7, 7], 0);
    design.addMove(15, 4, [3, 3, 3, 3], 0);
    design.addMove(15, 5, [4, 4, 4, 4, 4], 0);
    design.addMove(15, 5, [7, 7, 7, 7, 7], 0);
    design.addMove(15, 5, [3, 3, 3, 3, 3], 0);
    design.addMove(15, 6, [4, 4], 0);
    design.addMove(15, 6, [7, 7], 0);
    design.addMove(15, 6, [3, 3], 0);

    design.setup("White", "OrangeDragon", 63);
    design.setup("White", "BlueDragon", 62);
    design.setup("White", "PurpleDragon", 61);
    design.setup("White", "PinkDragon", 60);
    design.setup("White", "YellowDragon", 59);
    design.setup("White", "RedDragon", 58);
    design.setup("White", "GreenDragon", 57);
    design.setup("White", "BrownDragon", 56);
    design.setup("Black", "OrangeDragon", 0);
    design.setup("Black", "BlueDragon", 1);
    design.setup("Black", "PurpleDragon", 2);
    design.setup("Black", "PinkDragon", 3);
    design.setup("Black", "YellowDragon", 4);
    design.setup("Black", "RedDragon", 5);
    design.setup("Black", "GreenDragon", 6);
    design.setup("Black", "BrownDragon", 7);

    design.goal(0, "White", "OrangeDragon", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.goal(1, "White", "BlueDragon", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.goal(2, "White", "PurpleDragon", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.goal(3, "White", "PinkDragon", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.goal(4, "White", "YellowDragon", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.goal(5, "White", "RedDragon", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.goal(6, "White", "GreenDragon", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.goal(7, "White", "BrownDragon", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.goal(8, "Black", "OrangeDragon", [56, 57, 58, 59, 60, 61, 62, 63]);
    design.goal(9, "Black", "BlueDragon", [56, 57, 58, 59, 60, 61, 62, 63]);
    design.goal(10, "Black", "PurpleDragon", [56, 57, 58, 59, 60, 61, 62, 63]);
    design.goal(11, "Black", "PinkDragon", [56, 57, 58, 59, 60, 61, 62, 63]);
    design.goal(12, "Black", "YellowDragon", [56, 57, 58, 59, 60, 61, 62, 63]);
    design.goal(13, "Black", "RedDragon", [56, 57, 58, 59, 60, 61, 62, 63]);
    design.goal(14, "Black", "GreenDragon", [56, 57, 58, 59, 60, 61, 62, 63]);
    design.goal(15, "Black", "BrownDragon", [56, 57, 58, 59, 60, 61, 62, 63]);

    design.goal(16, "White", "OrangeSumo", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.goal(17, "White", "BlueSumo", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.goal(18, "White", "PurpleSumo", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.goal(19, "White", "PinkSumo", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.goal(20, "White", "YellowSumo", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.goal(21, "White", "RedSumo", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.goal(22, "White", "GreenSumo", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.goal(23, "White", "BrownSumo", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.goal(24, "Black", "OrangeSumo", [56, 57, 58, 59, 60, 61, 62, 63]);
    design.goal(25, "Black", "BlueSumo", [56, 57, 58, 59, 60, 61, 62, 63]);
    design.goal(26, "Black", "PurpleSumo", [56, 57, 58, 59, 60, 61, 62, 63]);
    design.goal(27, "Black", "PinkSumo", [56, 57, 58, 59, 60, 61, 62, 63]);
    design.goal(28, "Black", "YellowSumo", [56, 57, 58, 59, 60, 61, 62, 63]);
    design.goal(29, "Black", "RedSumo", [56, 57, 58, 59, 60, 61, 62, 63]);
    design.goal(30, "Black", "GreenSumo", [56, 57, 58, 59, 60, 61, 62, 63]);
    design.goal(31, "Black", "BrownSumo", [56, 57, 58, 59, 60, 61, 62, 63]);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteOrangeDragon", "White OrangeDragon");
    view.defPiece("BlackOrangeDragon", "Black OrangeDragon");
    view.defPiece("WhiteOrangeSumo", "White OrangeSumo");
    view.defPiece("BlackOrangeSumo", "Black OrangeSumo");
    view.defPiece("WhiteBlueDragon", "White BlueDragon");
    view.defPiece("BlackBlueDragon", "Black BlueDragon");
    view.defPiece("WhiteBlueSumo", "White BlueSumo");
    view.defPiece("BlackBlueSumo", "Black BlueSumo");
    view.defPiece("WhitePurpleDragon", "White PurpleDragon");
    view.defPiece("BlackPurpleDragon", "Black PurpleDragon");
    view.defPiece("WhitePurpleSumo", "White PurpleSumo");
    view.defPiece("BlackPurpleSumo", "Black PurpleSumo");
    view.defPiece("WhitePinkDragon", "White PinkDragon");
    view.defPiece("BlackPinkDragon", "Black PinkDragon");
    view.defPiece("WhitePinkSumo", "White PinkSumo");
    view.defPiece("BlackPinkSumo", "Black PinkSumo");
    view.defPiece("WhiteYellowDragon", "White YellowDragon");
    view.defPiece("BlackYellowDragon", "Black YellowDragon");
    view.defPiece("WhiteYellowSumo", "White YellowSumo");
    view.defPiece("BlackYellowSumo", "Black YellowSumo");
    view.defPiece("WhiteRedDragon", "White RedDragon");
    view.defPiece("BlackRedDragon", "Black RedDragon");
    view.defPiece("WhiteRedSumo", "White RedSumo");
    view.defPiece("BlackRedSumo", "Black RedSumo");
    view.defPiece("WhiteGreenDragon", "White GreenDragon");
    view.defPiece("BlackGreenDragon", "Black GreenDragon");
    view.defPiece("WhiteGreenSumo", "White GreenSumo");
    view.defPiece("BlackGreenSumo", "Black GreenSumo");
    view.defPiece("WhiteBrownDragon", "White BrownDragon");
    view.defPiece("BlackBrownDragon", "Black BrownDragon");
    view.defPiece("WhiteBrownSumo", "White BrownSumo");
    view.defPiece("BlackBrownSumo", "Black BrownSumo");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a8", 5, 5, 48, 48);
    view.defPosition("b8", 54, 5, 48, 48);
    view.defPosition("c8", 103, 5, 48, 48);
    view.defPosition("d8", 152, 5, 48, 48);
    view.defPosition("e8", 201, 5, 48, 48);
    view.defPosition("f8", 250, 5, 48, 48);
    view.defPosition("g8", 299, 5, 48, 48);
    view.defPosition("h8", 348, 5, 48, 48);
    view.defPosition("a7", 5, 54, 48, 48);
    view.defPosition("b7", 54, 54, 48, 48);
    view.defPosition("c7", 103, 54, 48, 48);
    view.defPosition("d7", 152, 54, 48, 48);
    view.defPosition("e7", 201, 54, 48, 48);
    view.defPosition("f7", 250, 54, 48, 48);
    view.defPosition("g7", 299, 54, 48, 48);
    view.defPosition("h7", 348, 54, 48, 48);
    view.defPosition("a6", 5, 103, 48, 48);
    view.defPosition("b6", 54, 103, 48, 48);
    view.defPosition("c6", 103, 103, 48, 48);
    view.defPosition("d6", 152, 103, 48, 48);
    view.defPosition("e6", 201, 103, 48, 48);
    view.defPosition("f6", 250, 103, 48, 48);
    view.defPosition("g6", 299, 103, 48, 48);
    view.defPosition("h6", 348, 103, 48, 48);
    view.defPosition("a5", 5, 152, 48, 48);
    view.defPosition("b5", 54, 152, 48, 48);
    view.defPosition("c5", 103, 152, 48, 48);
    view.defPosition("d5", 152, 152, 48, 48);
    view.defPosition("e5", 201, 152, 48, 48);
    view.defPosition("f5", 250, 152, 48, 48);
    view.defPosition("g5", 299, 152, 48, 48);
    view.defPosition("h5", 348, 152, 48, 48);
    view.defPosition("a4", 5, 201, 48, 48);
    view.defPosition("b4", 54, 201, 48, 48);
    view.defPosition("c4", 103, 201, 48, 48);
    view.defPosition("d4", 152, 201, 48, 48);
    view.defPosition("e4", 201, 201, 48, 48);
    view.defPosition("f4", 250, 201, 48, 48);
    view.defPosition("g4", 299, 201, 48, 48);
    view.defPosition("h4", 348, 201, 48, 48);
    view.defPosition("a3", 5, 250, 48, 48);
    view.defPosition("b3", 54, 250, 48, 48);
    view.defPosition("c3", 103, 250, 48, 48);
    view.defPosition("d3", 152, 250, 48, 48);
    view.defPosition("e3", 201, 250, 48, 48);
    view.defPosition("f3", 250, 250, 48, 48);
    view.defPosition("g3", 299, 250, 48, 48);
    view.defPosition("h3", 348, 250, 48, 48);
    view.defPosition("a2", 5, 299, 48, 48);
    view.defPosition("b2", 54, 299, 48, 48);
    view.defPosition("c2", 103, 299, 48, 48);
    view.defPosition("d2", 152, 299, 48, 48);
    view.defPosition("e2", 201, 299, 48, 48);
    view.defPosition("f2", 250, 299, 48, 48);
    view.defPosition("g2", 299, 299, 48, 48);
    view.defPosition("h2", 348, 299, 48, 48);
    view.defPosition("a1", 5, 348, 48, 48);
    view.defPosition("b1", 54, 348, 48, 48);
    view.defPosition("c1", 103, 348, 48, 48);
    view.defPosition("d1", 152, 348, 48, 48);
    view.defPosition("e1", 201, 348, 48, 48);
    view.defPosition("f1", 250, 348, 48, 48);
    view.defPosition("g1", 299, 348, 48, 48);
    view.defPosition("h1", 348, 348, 48, 48);
}
