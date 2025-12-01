Dagaz.View.TARGET_FLAT  = true;

Dagaz.AI.Q_SEARCH_LIMIT = -4;
Dagaz.AI.ALL_CUT_LIMIT  = 5;
Dagaz.AI.INC_CHECK_PLY  = false;

Dagaz.Model.WIDTH  = 9;
Dagaz.Model.HEIGHT = 10;

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
    design.checkVersion("advisor-wait", "15");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("Red", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [1, 0, 4, 6, 2, 7, 3, 5]);

    design.addPosition("a10", [0, 1, 9, 0, 0, 10, 0, 0]);
    design.addPosition("b10", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("c10", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("d10", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("e10", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("f10", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("g10", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("h10", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("i10", [-1, 0, 9, 0, 0, 0, 8, 0]);
    design.addPosition("a9", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b9", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c9", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d9", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e9", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f9", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g9", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h9", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i9", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a8", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i8", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a7", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i7", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a6", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i6", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a5", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i5", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a4", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i4", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a3", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i3", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a2", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i2", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a1", [0, 1, 0, -8, -9, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("c1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("d1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("e1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("f1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("g1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("h1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("i1", [-1, 0, 0, 0, -9, 0, 0, -10]);

    design.addZone("fortress", 1, [84, 85, 86, 75, 76, 77, 66, 67, 68]);
    design.addZone("fortress", 2, [3, 4, 5, 12, 13, 14, 21, 22, 23]);
    design.addZone("home", 1, [81, 82, 83, 84, 85, 86, 87, 88, 89, 72, 73, 74, 75, 76, 77, 78, 79, 80, 63, 64, 65, 66, 67, 68, 69, 70, 71, 54, 55, 56, 57, 58, 59, 60, 61, 62, 45, 46, 47, 48, 49, 50, 51, 52, 53]);
    design.addZone("home", 2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]);
    design.addZone("enemy", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]);
    design.addZone("enemy", 2, [81, 82, 83, 84, 85, 86, 87, 88, 89, 72, 73, 74, 75, 76, 77, 78, 79, 80, 63, 64, 65, 66, 67, 68, 69, 70, 71, 54, 55, 56, 57, 58, 59, 60, 61, 62, 45, 46, 47, 48, 49, 50, 51, 52, 53]);

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
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	2);	// enemy
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
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
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
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.IN_ZONE,	1);	// home
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
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
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-5);
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.IN_ZONE,	0);	// fortress
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addPiece("Soldier", 0, 1);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 1, [0], 0);
    design.addMove(0, 1, [1], 0);

    design.addPiece("Horse", 1, 4);
    design.addMove(1, 2, [4, 7], 0);
    design.addMove(1, 2, [4, 3], 0);
    design.addMove(1, 2, [2, 6], 0);
    design.addMove(1, 2, [2, 5], 0);
    design.addMove(1, 2, [0, 7], 0);
    design.addMove(1, 2, [1, 3], 0);
    design.addMove(1, 2, [0, 6], 0);
    design.addMove(1, 2, [1, 5], 0);

    design.addPiece("Elephant", 2, 2);
    design.addMove(2, 3, [7, 7], 0);
    design.addMove(2, 3, [6, 6], 0);
    design.addMove(2, 3, [3, 3], 0);
    design.addMove(2, 3, [5, 5], 0);

    design.addPiece("Chariot", 3, 10);
    design.addMove(3, 4, [4, 4], 0);
    design.addMove(3, 4, [2, 2], 0);
    design.addMove(3, 4, [0, 0], 0);
    design.addMove(3, 4, [1, 1], 0);

    design.addPiece("Cannon", 4, 4);
    design.addMove(4, 5, [4, 4, 4, 4], 0);
    design.addMove(4, 5, [2, 2, 2, 2], 0);
    design.addMove(4, 5, [0, 0, 0, 0], 0);
    design.addMove(4, 5, [1, 1, 1, 1], 0);

    design.addPiece("Mandarin", 5, 2);
    design.addMove(5, 6, [7], 0);
    design.addMove(5, 6, [6], 0);
    design.addMove(5, 6, [3], 0);
    design.addMove(5, 6, [5], 0);

    design.addPiece("General", 6, 20000);
    design.addMove(6, 6, [4], 0);
    design.addMove(6, 6, [2], 0);
    design.addMove(6, 6, [0], 0);
    design.addMove(6, 6, [1], 0);

    design.setup("Red", "Soldier", 54);
    design.setup("Red", "Soldier", 56);
    design.setup("Red", "Soldier", 58);
    design.setup("Red", "Soldier", 60);
    design.setup("Red", "Soldier", 62);
    design.setup("Red", "Horse", 82);
    design.setup("Red", "Horse", 88);
    design.setup("Red", "Elephant", 83);
    design.setup("Red", "Elephant", 87);
    design.setup("Red", "Chariot", 81);
    design.setup("Red", "Chariot", 89);
    design.setup("Red", "Mandarin", 84);
    design.setup("Red", "Mandarin", 86);
    design.setup("Red", "Cannon", 64);
    design.setup("Red", "Cannon", 70);
    design.setup("Red", "General", 85);
    design.setup("Black", "Soldier", 27);
    design.setup("Black", "Soldier", 29);
    design.setup("Black", "Soldier", 31);
    design.setup("Black", "Soldier", 33);
    design.setup("Black", "Soldier", 35);
    design.setup("Black", "Horse", 1);
    design.setup("Black", "Horse", 7);
    design.setup("Black", "Elephant", 2);
    design.setup("Black", "Elephant", 6);
    design.setup("Black", "Chariot", 0);
    design.setup("Black", "Chariot", 8);
    design.setup("Black", "Mandarin", 3);
    design.setup("Black", "Mandarin", 5);
    design.setup("Black", "Cannon", 19);
    design.setup("Black", "Cannon", 25);
    design.setup("Black", "General", 4);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(538, 600, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    const tokenPath = '../res/xiangqi';

    view.defPieceToken(0, 1, tokenPath, 'token.js', 'rSoldier', 'Bump');
    view.defPieceToken(0, 2, tokenPath, 'token.js', 'bSoldier', 'Bump');
    view.defPieceToken(1, 1, tokenPath, 'token.js', 'rHorse', 'Bump');
    view.defPieceToken(1, 2, tokenPath, 'token.js', 'bHorse', 'Bump');
    view.defPieceToken(2, 1, tokenPath, 'token.js', 'rElephant', 'Bump');
    view.defPieceToken(2, 2, tokenPath, 'token.js', 'bElephant', 'Bump');
    view.defPieceToken(3, 1, tokenPath, 'token.js', 'rChariot', 'Bump');
    view.defPieceToken(3, 2, tokenPath, 'token.js', 'bChariot', 'Bump');
    view.defPieceToken(4, 1, tokenPath, 'token.js', 'rCannon', 'Bump');
    view.defPieceToken(4, 2, tokenPath, 'token.js', 'bCannon', 'Bump');
    view.defPieceToken(5, 1, tokenPath, 'token.js', 'rMandarin', 'Bump');
    view.defPieceToken(5, 2, tokenPath, 'token.js', 'bMandarin', 'Bump');
    view.defPieceToken(6, 1, tokenPath, 'token.js', 'rGeneral', 'Bump');
    view.defPieceToken(6, 2, tokenPath, 'token.js', 'bGeneral', 'Bump');

    view.setCamera(0, 0, 0, -109, 215, 255);

    view.defControl("InfoControl", "Trafitional Chinese", true, Dagaz.Controller.open, 'https://en.wikipedia.org/wiki/Xiangqi');
    view.defControl("ResControl", "Western", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'xiangqi.htm' : 'xiangqi-board.htm');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'xiangqi-3d-board.htm' : 'xiangqi-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);

    view.defPosition("a10", -240, -270, 42, 42, 0);
    view.defPosition("b10", -180, -270, 42, 42, 0);
    view.defPosition("c10", -120, -270, 42, 42, 0);
    view.defPosition("d10", -60, -270, 42, 42, 0);
    view.defPosition("e10", 0, -270, 42, 42, 0);
    view.defPosition("f10", 60, -270, 42, 42, 0);
    view.defPosition("g10", 120, -270, 42, 42, 0);
    view.defPosition("h10", 180, -270, 42, 42, 0);
    view.defPosition("i10", 240, -270, 42, 42, 0);
    view.defPosition("a9", -240, -210, 42, 42, 0);
    view.defPosition("b9", -180, -210, 42, 42, 0);
    view.defPosition("c9", -120, -210, 42, 42, 0);
    view.defPosition("d9", -60, -210, 42, 42, 0);
    view.defPosition("e9", 0, -210, 42, 42, 0);
    view.defPosition("f9", 60, -210, 42, 42, 0);
    view.defPosition("g9", 120, -210, 42, 42, 0);
    view.defPosition("h9", 180, -210, 42, 42, 0);
    view.defPosition("i9", 240, -210, 42, 42, 0);
    view.defPosition("a8", -240, -150, 42, 42, 0);
    view.defPosition("b8", -180, -150, 42, 42, 0);
    view.defPosition("c8", -120, -150, 42, 42, 0);
    view.defPosition("d8", -60, -150, 42, 42, 0);
    view.defPosition("e8", 0, -150, 42, 42, 0);
    view.defPosition("f8", 60, -150, 42, 42, 0);
    view.defPosition("g8", 120, -150, 42, 42, 0);
    view.defPosition("h8", 180, -150, 42, 42, 0);
    view.defPosition("i8", 240, -150, 42, 42, 0);
    view.defPosition("a7", -240, -90, 42, 42, 0);
    view.defPosition("b7", -180, -90, 42, 42, 0);
    view.defPosition("c7", -120, -90, 42, 42, 0);
    view.defPosition("d7", -60, -90, 42, 42, 0);
    view.defPosition("e7", 0, -90, 42, 42, 0);
    view.defPosition("f7", 60, -90, 42, 42, 0);
    view.defPosition("g7", 120, -90, 42, 42, 0);
    view.defPosition("h7", 180, -90, 42, 42, 0);
    view.defPosition("i7", 240, -90, 42, 42, 0);
    view.defPosition("a6", -240, -30, 42, 42, 0);
    view.defPosition("b6", -180, -30, 42, 42, 0);
    view.defPosition("c6", -120, -30, 42, 42, 0);
    view.defPosition("d6", -60, -30, 42, 42, 0);
    view.defPosition("e6", 0, -30, 42, 42, 0);
    view.defPosition("f6", 60, -30, 42, 42, 0);
    view.defPosition("g6", 120, -30, 42, 42, 0);
    view.defPosition("h6", 180, -30, 42, 42, 0);
    view.defPosition("i6", 240, -30, 42, 42, 0);
    view.defPosition("a5", -240, 30, 42, 42, 0);
    view.defPosition("b5", -180, 30, 42, 42, 0);
    view.defPosition("c5", -120, 30, 42, 42, 0);
    view.defPosition("d5", -60, 30, 42, 42, 0);
    view.defPosition("e5", 0, 30, 42, 42, 0);
    view.defPosition("f5", 60, 30, 42, 42, 0);
    view.defPosition("g5", 120, 30, 42, 42, 0);
    view.defPosition("h5", 180, 30, 42, 42, 0);
    view.defPosition("i5", 240, 30, 42, 42, 0);
    view.defPosition("a4", -240, 90, 42, 42, 0);
    view.defPosition("b4", -180, 90, 42, 42, 0);
    view.defPosition("c4", -120, 90, 42, 42, 0);
    view.defPosition("d4", -60, 90, 42, 42, 0);
    view.defPosition("e4", 0, 90, 42, 42, 0);
    view.defPosition("f4", 60, 90, 42, 42, 0);
    view.defPosition("g4", 120, 90, 42, 42, 0);
    view.defPosition("h4", 180, 90, 42, 42, 0);
    view.defPosition("i4", 240, 90, 42, 42, 0);
    view.defPosition("a3", -240, 150, 42, 42, 0);
    view.defPosition("b3", -180, 150, 42, 42, 0);
    view.defPosition("c3", -120, 150, 42, 42, 0);
    view.defPosition("d3", -60, 150, 42, 42, 0);
    view.defPosition("e3", 0, 150, 42, 42, 0);
    view.defPosition("f3", 60, 150, 42, 42, 0);
    view.defPosition("g3", 120, 150, 42, 42, 0);
    view.defPosition("h3", 180, 150, 42, 42, 0);
    view.defPosition("i3", 240, 150, 42, 42, 0);
    view.defPosition("a2", -240, 210, 42, 42, 0);
    view.defPosition("b2", -180, 210, 42, 42, 0);
    view.defPosition("c2", -120, 210, 42, 42, 0);
    view.defPosition("d2", -60, 210, 42, 42, 0);
    view.defPosition("e2", 0, 210, 42, 42, 0);
    view.defPosition("f2", 60, 210, 42, 42, 0);
    view.defPosition("g2", 120, 210, 42, 42, 0);
    view.defPosition("h2", 180, 210, 42, 42, 0);
    view.defPosition("i2", 240, 210, 42, 42, 0);
    view.defPosition("a1", -240, 270, 42, 42, 0);
    view.defPosition("b1", -180, 270, 42, 42, 0);
    view.defPosition("c1", -120, 270, 42, 42, 0);
    view.defPosition("d1", -60, 270, 42, 42, 0);
    view.defPosition("e1", 0, 270, 42, 42, 0);
    view.defPosition("f1", 60, 270, 42, 42, 0);
    view.defPosition("g1", 120, 270, 42, 42, 0);
    view.defPosition("h1", 180, 270, 42, 42, 0);
    view.defPosition("i1", 240, 270, 42, 42, 0);
}
