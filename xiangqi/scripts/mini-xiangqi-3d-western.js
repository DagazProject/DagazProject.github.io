Dagaz.View.TARGET_FLAT  = true;
Dagaz.View.TARGET_LARGE = true;
Dagaz.AI.Q_SEARCH_LIMIT = -5;
Dagaz.AI.ALL_CUT_LIMIT  = 10;
Dagaz.AI.INC_CHECK_PLY  = false;

Dagaz.Model.WIDTH  = 7;
Dagaz.Model.HEIGHT = 6;

Dagaz.AI.pieceAdj = [
[   0,    0,    0,    0,    0,    0,    0, // pieceEmpty
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0
],
[  10,   20,  100,  100,  100,   20,   10, // piecePawn
   30,   40,  200,  200,  200,   40,   30, 
   40,   50,  100,  100,  100,   50,   40, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0
],
[   0,    0,    0,    0,    0,    0,    0, // pieceAdvisor
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,   10,    0,   10,    0,    0, 
    0,    0,    0,   15,    0,    0,    0, 
    0,    0,   10,    0,   10,    0,    0
],
[   0,    0,    0,    0,    0,    0,    0, // pieceBishop
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0
],
[ -50,  -50,  -10,  -10,  -10,  -50,  -50, // pieceKnight
  -50,   20,   20,   20,   20,   20,  -50, 
  -10,   30,   60,   60,   60,   30,  -10, 
  -10,    0,   60,   60,   60,    0,  -10, 
  -50,    0,   30,   30,   30,    0,  -50, 
  -50,  -50,  -10,  -10,  -10,  -50,  -50
],
[ -60,  100,    0,    0,    0,  100,  -60, // pieceCannon
   40,  200,    0,    0,    0,  200,   40, 
   10,    0,    0,    0,    0,    0,   10, 
  -60,  -30,   50,  100,   50,  -30,  -60, 
  -60,  -30,   10,   20,   10,  -30,  -60, 
  -60,  -30,    0,    0,    0,  -30,  -60
],
[ -60,  100,    0,    0,    0,  100,  -60, // pieceRook
   40,  200,    0,    0,    0,  200,   40, 
   10,  200,    0,    0,    0,  200,   10, 
  -60,  -30,   50,  100,   50,  -30,  -60, 
  -60,  -30,   10,   20,   10,  -30,  -60, 
  -60,  -30,    0,    0,    0,  -30,  -60
],
[   0,    0,    0,    0,    0,    0,    0, // pieceKing
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,    0,    0, 
    0,    0,    5,   10,    5,    0,    0, 
    0,    0,   10,   10,   10,    0,    0, 
    0,    0,    5,   10,    5,    0,    0
]];

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

    design.addDirection("w");  // 0
    design.addDirection("e");  // 1
    design.addDirection("s");  // 2
    design.addDirection("ne"); // 3
    design.addDirection("n");  // 4
    design.addDirection("se"); // 5
    design.addDirection("sw"); // 6
    design.addDirection("nw"); // 7

    design.addPlayer("Red", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [1, 0, 4, 6, 2, 7, 3, 5]);

    design.addPosition("a6", [0, 1, 7, 0, 0, 8, 0, 0]);
    design.addPosition("b6", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("c6", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("d6", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("e6", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("f6", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("g6", [-1, 0, 7, 0, 0, 0, 6, 0]);
    design.addPosition("a5", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g5", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a4", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g4", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a3", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g3", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a2", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g2", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a1", [0, 1, 0, -6, -7, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("c1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("d1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("e1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("f1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("g1", [-1, 0, 0, 0, -7, 0, 0, -8]);

    design.addZone("fortress", 1, [37, 38, 39, 30, 31, 32, 23, 24, 25]);
    design.addZone("fortress", 2, [16, 17, 18, 9, 10, 11, 2, 3, 4]);
    design.addZone("home", 1, [35, 36, 37, 38, 39, 40, 41, 28, 29, 30, 31, 32, 33, 34, 21, 22, 16, 24, 25, 26, 27]);
    design.addZone("home", 2, [14, 15, 16, 17, 18, 19, 20, 7, 8, 9, 10, 11, 12, 13, 0, 1, 2, 3, 4, 5, 6]);
    design.addZone("enemy", 1, [14, 15, 16, 17, 18, 19, 20, 7, 8, 9, 10, 11, 12, 13, 0, 1, 2, 3, 4, 5, 6]);
    design.addZone("enemy", 2, [35, 36, 37, 38, 39, 40, 41, 28, 29, 30, 31, 32, 33, 34, 21, 22, 16, 24, 25, 26, 27]);

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

    design.addPiece("Soldier", 0, 800);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 1, [0], 0);
    design.addMove(0, 1, [1], 0);

    design.addPiece("Horse", 1, 3000);
    design.addMove(1, 2, [4, 7], 0);
    design.addMove(1, 2, [4, 3], 0);
    design.addMove(1, 2, [2, 6], 0);
    design.addMove(1, 2, [2, 5], 0);
    design.addMove(1, 2, [0, 7], 0);
    design.addMove(1, 2, [1, 3], 0);
    design.addMove(1, 2, [0, 6], 0);
    design.addMove(1, 2, [1, 5], 0);

    design.addPiece("Chariot", 2, 5000);
    design.addMove(2, 4, [4, 4], 0);
    design.addMove(2, 4, [2, 2], 0);
    design.addMove(2, 4, [0, 0], 0);
    design.addMove(2, 4, [1, 1], 0);

    design.addPiece("Cannon", 3, 5500);
    design.addMove(3, 5, [4, 4, 4, 4], 0);
    design.addMove(3, 5, [2, 2, 2, 2], 0);
    design.addMove(3, 5, [0, 0, 0, 0], 0);
    design.addMove(3, 5, [1, 1, 1, 1], 0);

    design.addPiece("Mandarin", 4, 1000);
    design.addMove(4, 6, [7], 0);
    design.addMove(4, 6, [6], 0);
    design.addMove(4, 6, [3], 0);
    design.addMove(4, 6, [5], 0);

    design.addPiece("General", 5, 600000);
    design.addMove(5, 6, [4], 0);
    design.addMove(5, 6, [2], 0);
    design.addMove(5, 6, [0], 0);
    design.addMove(5, 6, [1], 0);

    design.setup("Red", "Soldier", 21);
    design.setup("Red", "Soldier", 24);
    design.setup("Red", "Soldier", 27);
    design.setup("Red", "Horse", 36);
    design.setup("Red", "Horse", 40);
    design.setup("Red", "Chariot", 35);
    design.setup("Red", "Chariot", 41);
    design.setup("Red", "Mandarin", 37);
    design.setup("Red", "Mandarin", 39);
    design.setup("Red", "Cannon", 29);
    design.setup("Red", "Cannon", 33);
    design.setup("Red", "General", 38);
    design.setup("Black", "Soldier", 14);
    design.setup("Black", "Soldier", 17);
    design.setup("Black", "Soldier", 20);
    design.setup("Black", "Horse", 1);
    design.setup("Black", "Horse", 5);
    design.setup("Black", "Chariot", 0);
    design.setup("Black", "Chariot", 6);
    design.setup("Black", "Mandarin", 2);
    design.setup("Black", "Mandarin", 4);
    design.setup("Black", "Cannon", 8);
    design.setup("Black", "Cannon", 12);
    design.setup("Black", "General", 3);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(426, 368, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    const modelPath = '../res/fairy';
    const white = '#FFFF63';
    const black = '#333333';

    view.defPieceModel(0, 1, modelPath, 'pawn', white);
    view.defPieceModel(0, 2, modelPath, 'pawn', black);
    view.defPieceModel(1, 1, modelPath, 'knight', white);
    view.defPieceModel(1, 2, modelPath, 'knight', black);
    view.defPieceModel(2, 1, modelPath, 'rook', white);
    view.defPieceModel(2, 2, modelPath, 'rook', black);
    view.defPieceModel(3, 1, modelPath, 'cannon', white);
    view.defPieceModel(3, 2, modelPath, 'cannon', black);
    view.defPieceModel(4, 1, modelPath, 'queen', white);
    view.defPieceModel(4, 2, modelPath, 'queen', black);
    view.defPieceModel(5, 1, modelPath, 'king', white);
    view.defPieceModel(5, 2, modelPath, 'king', black);

    view.setCamera(0, 0, 0, -109, 215, 255);

    view.defControl("InfoControl", "Robert Price", true);
    view.defControl("ResControl", "Western", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'mini-xiangqi.htm' : 'mini-xiangqi-board.htm');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'mini-xiangqi-3d-western-board.htm' : 'mini-xiangqi-3d-western.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);

    view.defPosition("a6", -180, -150, 42, 42, 0);
    view.defPosition("b6", -120, -150, 42, 42, 0);
    view.defPosition("c6", -60, -150, 42, 42, 0);
    view.defPosition("d6", 0, -150, 42, 42, 0);
    view.defPosition("e6", 60, -150, 42, 42, 0);
    view.defPosition("f6", 120, -150, 42, 42, 0);
    view.defPosition("g6", 180, -150, 42, 42, 0);
    view.defPosition("a5", -180, -90, 42, 42, 0);
    view.defPosition("b5", -120, -90, 42, 42, 0);
    view.defPosition("c5", -60, -90, 42, 42, 0);
    view.defPosition("d5", 0, -90, 42, 42, 0);
    view.defPosition("e5", 60, -90, 42, 42, 0);
    view.defPosition("f5", 120, -90, 42, 42, 0);
    view.defPosition("g5", 180, -90, 42, 42, 0);
    view.defPosition("a4", -180, -30, 42, 42, 0);
    view.defPosition("b4", -120, -30, 42, 42, 0);
    view.defPosition("c4", -60, -30, 42, 42, 0);
    view.defPosition("d4", 0, -30, 42, 42, 0);
    view.defPosition("e4", 60, -30, 42, 42, 0);
    view.defPosition("f4", 120, -30, 42, 42, 0);
    view.defPosition("g4", 180, -30, 42, 42, 0);
    view.defPosition("a3", -180, 30, 42, 42, 0);
    view.defPosition("b3", -120, 30, 42, 42, 0);
    view.defPosition("c3", -60, 30, 42, 42, 0);
    view.defPosition("d3", 0, 30, 42, 42, 0);
    view.defPosition("e3", 60, 30, 42, 42, 0);
    view.defPosition("f3", 120, 30, 42, 42, 0);
    view.defPosition("g3", 180, 30, 42, 42, 0);
    view.defPosition("a2", -180, 90, 42, 42, 0);
    view.defPosition("b2", -120, 90, 42, 42, 0);
    view.defPosition("c2", -60, 90, 42, 42, 0);
    view.defPosition("d2", 0, 90, 42, 42, 0);
    view.defPosition("e2", 60, 90, 42, 42, 0);
    view.defPosition("f2", 120, 90, 42, 42, 0);
    view.defPosition("g2", 180, 90, 42, 42, 0);
    view.defPosition("a1", -180, 150, 42, 42, 0);
    view.defPosition("b1", -120, 150, 42, 42, 0);
    view.defPosition("c1", -60, 150, 42, 42, 0);
    view.defPosition("d1", 0, 150, 42, 42, 0);
    view.defPosition("e1", 60, 150, 42, 42, 0);
    view.defPosition("f1", 120, 150, 42, 42, 0);
    view.defPosition("g1", 180, 150, 42, 42, 0);
}
