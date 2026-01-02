Dagaz.View.TARGET_FLAT       = true;
Dagaz.View.TARGET_LARGE      = true;
Dagaz.View.IS_DIAGONAL       = true;

Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH  = 8;
Dagaz.Model.HEIGHT = 8;

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

Dagaz.Model.moveToString = function(move) {
  var r = "";
  _.each(move.actions, function(a) {
      if (a[1] === null) return;
      if (r != "") {
          r = r + " ";
      }
      if (a[0] != null) {
          r = r + Dagaz.Model.posToString(a[0][0]);
          if (a[1] !== null) {
              r = r + '-';
          }
      }
      if (a[1] !== null) {
          r = r + Dagaz.Model.posToString(a[1][0]);
      }
  });
  return r;
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1]);

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

    design.addZone("last-rank", 1, [0, 1, 2, 3, 8, 16, 24]);
    design.addZone("last-rank", 2, [60, 61, 62, 63, 55, 47, 39]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	4);	// Queen
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	4);	// Queen
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
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
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0, 100);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [4], 0);

    design.addPiece("Rook", 1, 500);
    design.addMove(1, 2, [7, 7], 0);
    design.addMove(1, 2, [1, 1], 0);
    design.addMove(1, 2, [4, 4], 0);
    design.addMove(1, 2, [3, 3], 0);

    design.addPiece("Knight", 2, 320);
    design.addMove(2, 3, [7, 6], 0);
    design.addMove(2, 3, [7, 5], 0);
    design.addMove(2, 3, [1, 2], 0);
    design.addMove(2, 3, [1, 0], 0);
    design.addMove(2, 3, [4, 6], 0);
    design.addMove(2, 3, [4, 2], 0);
    design.addMove(2, 3, [3, 5], 0);
    design.addMove(2, 3, [3, 0], 0);

    design.addPiece("Bishop", 3, 330);
    design.addMove(3, 2, [6, 6], 0);
    design.addMove(3, 2, [2, 2], 0);
    design.addMove(3, 2, [5, 5], 0);
    design.addMove(3, 2, [0, 0], 0);

    design.addPiece("Queen", 4, 900);
    design.addMove(4, 2, [7, 7], 0);
    design.addMove(4, 2, [1, 1], 0);
    design.addMove(4, 2, [4, 4], 0);
    design.addMove(4, 2, [3, 3], 0);
    design.addMove(4, 2, [6, 6], 0);
    design.addMove(4, 2, [2, 2], 0);
    design.addMove(4, 2, [5, 5], 0);
    design.addMove(4, 2, [0, 0], 0);

    design.addPiece("King", 5, 20000);
    design.addMove(5, 4, [7], 0);
    design.addMove(5, 4, [1], 0);
    design.addMove(5, 4, [4], 0);
    design.addMove(5, 4, [3], 0);
    design.addMove(5, 4, [6], 0);
    design.addMove(5, 4, [2], 0);
    design.addMove(5, 4, [5], 0);
    design.addMove(5, 4, [0], 0);

    design.setup("White", "Pawn", 59);
    design.setup("White", "Pawn", 52);
    design.setup("White", "Pawn", 36);
    design.setup("White", "Pawn", 53);
    design.setup("White", "Pawn", 45);
    design.setup("White", "Pawn", 46);
    design.setup("White", "Pawn", 38);
    design.setup("White", "Pawn", 31);
    design.setup("White", "Rook", 60);
    design.setup("White", "Rook", 39);
    design.setup("White", "Knight", 62);
    design.setup("White", "Knight", 47);
    design.setup("White", "Bishop", 61);
    design.setup("White", "Bishop", 55);
    design.setup("White", "Queen", 54);
    design.setup("White", "King", 63);
    design.setup("Black", "Pawn", 32);
    design.setup("Black", "Pawn", 25);
    design.setup("Black", "Pawn", 17);
    design.setup("Black", "Pawn", 18);
    design.setup("Black", "Pawn", 10);
    design.setup("Black", "Pawn", 27);
    design.setup("Black", "Pawn", 11);
    design.setup("Black", "Pawn", 4);
    design.setup("Black", "Rook", 24);
    design.setup("Black", "Rook", 3);
    design.setup("Black", "Knight", 16);
    design.setup("Black", "Knight", 1);
    design.setup("Black", "Bishop", 8);
    design.setup("Black", "Bishop", 2);
    design.setup("Black", "Queen", 9);
    design.setup("Black", "King", 0);
}

Dagaz.View.configure = function(view) {
    const opacity = 0.8;
    view.defBoard3D(550, 550, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board", opacity);

    const modelPath = '../res/fairy';
    const white = '#FFFF63';
    const black = '#333333';

    view.defPieceModel(0, 1, modelPath, 'pawn', white);
    view.defPieceModel(0, 2, modelPath, 'pawn', black);
    view.defPieceModel(1, 1, modelPath, 'rook', white);
    view.defPieceModel(1, 2, modelPath, 'rook', black);
    view.defPieceModel(2, 1, modelPath, 'knight', white);
    view.defPieceModel(2, 2, modelPath, 'knight', black);
    view.defPieceModel(3, 1, modelPath, 'bishop', white);
    view.defPieceModel(3, 2, modelPath, 'bishop', black);
    view.defPieceModel(4, 1, modelPath, 'queen', white);
    view.defPieceModel(4, 2, modelPath, 'queen', black);
    view.defPieceModel(5, 1, modelPath, 'king', white);
    view.defPieceModel(5, 2, modelPath, 'king', black);

    view.setCamera(0, 0, 0, -109, 215, 155);
 
    view.defControl("InfoControl", "1913 L. Legan", true, Dagaz.Controller.open, 'https://en.wikipedia.org/wiki/Legan_chess');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl("ResControl", "3D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'legan-chess.htm' : 'legan-chess-board.htm');
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'legan-chess-3d-board.htm' : 'legan-chess-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("a8", -238, -238, 68, 68, 0);
    view.defPosition("b8", -170, -238, 68, 68, 0);
    view.defPosition("c8", -102, -238, 68, 68, 0);
    view.defPosition("d8", -34, -238, 68, 68, 0);
    view.defPosition("e8", 34, -238, 68, 68, 0);
    view.defPosition("f8", 102, -238, 68, 68, 0);
    view.defPosition("g8", 170, -238, 68, 68, 0);
    view.defPosition("h8", 238, -238, 68, 68, 0);
    view.defPosition("a7", -238, -170, 68, 68, 0);
    view.defPosition("b7", -170, -170, 68, 68, 0);
    view.defPosition("c7", -102, -170, 68, 68, 0);
    view.defPosition("d7", -34, -170, 68, 68, 0);
    view.defPosition("e7", 34, -170, 68, 68, 0);
    view.defPosition("f7", 102, -170, 68, 68, 0);
    view.defPosition("g7", 170, -170, 68, 68, 0);
    view.defPosition("h7", 238, -170, 68, 68, 0);
    view.defPosition("a6", -238, -102, 68, 68, 0);
    view.defPosition("b6", -170, -102, 68, 68, 0);
    view.defPosition("c6", -102, -102, 68, 68, 0);
    view.defPosition("d6", -34, -102, 68, 68, 0);
    view.defPosition("e6", 34, -102, 68, 68, 0);
    view.defPosition("f6", 102, -102, 68, 68, 0);
    view.defPosition("g6", 170, -102, 68, 68, 0);
    view.defPosition("h6", 238, -102, 68, 68, 0);
    view.defPosition("a5", -238, -34, 68, 68, 0);
    view.defPosition("b5", -170, -34, 68, 68, 0);
    view.defPosition("c5", -102, -34, 68, 68, 0);
    view.defPosition("d5", -34, -34, 68, 68, 0);
    view.defPosition("e5", 34, -34, 68, 68, 0);
    view.defPosition("f5", 102, -34, 68, 68, 0);
    view.defPosition("g5", 170, -34, 68, 68, 0);
    view.defPosition("h5", 238, -34, 68, 68, 0);
    view.defPosition("a4", -238, 34, 68, 68, 0);
    view.defPosition("b4", -170, 34, 68, 68, 0);
    view.defPosition("c4", -102, 34, 68, 68, 0);
    view.defPosition("d4", -34, 34, 68, 68, 0);
    view.defPosition("e4", 34, 34, 68, 68, 0);
    view.defPosition("f4", 102, 34, 68, 68, 0);
    view.defPosition("g4", 170, 34, 68, 68, 0);
    view.defPosition("h4", 238, 34, 68, 68, 0);
    view.defPosition("a3", -238, 102, 68, 68, 0);
    view.defPosition("b3", -170, 102, 68, 68, 0);
    view.defPosition("c3", -102, 102, 68, 68, 0);
    view.defPosition("d3", -34, 102, 68, 68, 0);
    view.defPosition("e3", 34, 102, 68, 68, 0);
    view.defPosition("f3", 102, 102, 68, 68, 0);
    view.defPosition("g3", 170, 102, 68, 68, 0);
    view.defPosition("h3", 238, 102, 68, 68, 0);
    view.defPosition("a2", -238, 170, 68, 68, 0);
    view.defPosition("b2", -170, 170, 68, 68, 0);
    view.defPosition("c2", -102, 170, 68, 68, 0);
    view.defPosition("d2", -34, 170, 68, 68, 0);
    view.defPosition("e2", 34, 170, 68, 68, 0);
    view.defPosition("f2", 102, 170, 68, 68, 0);
    view.defPosition("g2", 170, 170, 68, 68, 0);
    view.defPosition("h2", 238, 170, 68, 68, 0);
    view.defPosition("a1", -238, 238, 68, 68, 0);
    view.defPosition("b1", -170, 238, 68, 68, 0);
    view.defPosition("c1", -102, 238, 68, 68, 0);
    view.defPosition("d1", -34, 238, 68, 68, 0);
    view.defPosition("e1", 34, 238, 68, 68, 0);
    view.defPosition("f1", 102, 238, 68, 68, 0);
    view.defPosition("g1", 170, 238, 68, 68, 0);
    view.defPosition("h1", 238, 238, 68, 68, 0);
}
