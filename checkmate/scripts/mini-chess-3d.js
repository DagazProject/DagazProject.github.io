Dagaz.View.TARGET_FLAT       =  true;
Dagaz.View.TARGET_RADIUS     =  2.5;
Dagaz.Controller.persistense = "setup";

Dagaz.AI.WORKER_NAME  = 'scripts/chess-worker.js';
Dagaz.AI.WORKER_TIME  = 3000;
Dagaz.AI.ADVISOR_TIME = 17000;

Dagaz.Model.WIDTH  = 5;
Dagaz.Model.HEIGHT = 6;
Dagaz.AI.FLAGS     = 0x40;

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

if (Dagaz.AI.SetParams) {
    Dagaz.AI.SetParams(Dagaz.Model.WIDTH, Dagaz.Model.HEIGHT, Dagaz.AI.FLAGS);
}

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
    design.checkVersion("advisor-wait", "0");
    design.checkVersion("chess-invariant", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [1, 0, 4, 6, 2, 7, 3, 5]);

    design.addPosition("a6", [0, 1, 5, 0, 0, 6, 0, 0]);
    design.addPosition("b6", [-1, 1, 5, 0, 0, 6, 4, 0]);
    design.addPosition("c6", [-1, 1, 5, 0, 0, 6, 4, 0]);
    design.addPosition("d6", [-1, 1, 5, 0, 0, 6, 4, 0]);
    design.addPosition("e6", [-1, 0, 5, 0, 0, 0, 4, 0]);
    design.addPosition("a5", [0, 1, 5, -4, -5, 6, 0, 0]);
    design.addPosition("b5", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("c5", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("d5", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("e5", [-1, 0, 5, 0, -5, 0, 4, -6]);
    design.addPosition("a4", [0, 1, 5, -4, -5, 6, 0, 0]);
    design.addPosition("b4", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("c4", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("d4", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("e4", [-1, 0, 5, 0, -5, 0, 4, -6]);
    design.addPosition("a3", [0, 1, 5, -4, -5, 6, 0, 0]);
    design.addPosition("b3", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("c3", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("d3", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("e3", [-1, 0, 5, 0, -5, 0, 4, -6]);
    design.addPosition("a2", [0, 1, 5, -4, -5, 6, 0, 0]);
    design.addPosition("b2", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("c2", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("d2", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("e2", [-1, 0, 5, 0, -5, 0, 4, -6]);
    design.addPosition("a1", [0, 1, 0, -4, -5, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -4, -5, 0, 0, -6]);
    design.addPosition("c1", [-1, 1, 0, -4, -5, 0, 0, -6]);
    design.addPosition("d1", [-1, 1, 0, -4, -5, 0, 0, -6]);
    design.addPosition("e1", [-1, 0, 0, 0, -5, 0, 0, -6]);

    design.addZone("last-rank", 1, [0, 1, 2, 3, 4]);
    design.addZone("last-rank", 2, [25, 26, 27, 28, 29]);

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
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [3], 0);

    design.addPiece("Rook", 1, 500);
    design.addMove(1, 2, [4, 4], 0);
    design.addMove(1, 2, [2, 2], 0);
    design.addMove(1, 2, [0, 0], 0);
    design.addMove(1, 2, [1, 1], 0);

    design.addPiece("Knight", 2, 320);
    design.addMove(2, 3, [4, 7], 0);
    design.addMove(2, 3, [4, 3], 0);
    design.addMove(2, 3, [2, 6], 0);
    design.addMove(2, 3, [2, 5], 0);
    design.addMove(2, 3, [0, 7], 0);
    design.addMove(2, 3, [0, 6], 0);
    design.addMove(2, 3, [1, 3], 0);
    design.addMove(2, 3, [1, 5], 0);

    design.addPiece("Bishop", 3, 330);
    design.addMove(3, 2, [7, 7], 0);
    design.addMove(3, 2, [6, 6], 0);
    design.addMove(3, 2, [3, 3], 0);
    design.addMove(3, 2, [5, 5], 0);

    design.addPiece("Queen", 4, 900);
    design.addMove(4, 2, [4, 4], 0);
    design.addMove(4, 2, [2, 2], 0);
    design.addMove(4, 2, [0, 0], 0);
    design.addMove(4, 2, [1, 1], 0);
    design.addMove(4, 2, [7, 7], 0);
    design.addMove(4, 2, [6, 6], 0);
    design.addMove(4, 2, [3, 3], 0);
    design.addMove(4, 2, [5, 5], 0);

    design.addPiece("King", 5, 20000);
    design.addMove(5, 4, [4], 0);
    design.addMove(5, 4, [2], 0);
    design.addMove(5, 4, [0], 0);
    design.addMove(5, 4, [1], 0);
    design.addMove(5, 4, [7], 0);
    design.addMove(5, 4, [6], 0);
    design.addMove(5, 4, [3], 0);
    design.addMove(5, 4, [5], 0);

    design.setup("White", "Pawn", 20);
    design.setup("White", "Pawn", 21);
    design.setup("White", "Pawn", 22);
    design.setup("White", "Pawn", 23);
    design.setup("White", "Pawn", 24);
    design.setup("White", "Rook", 25);
    design.setup("White", "Knight", 26);
    design.setup("White", "Bishop", 27);
    design.setup("White", "Queen", 28);
    design.setup("White", "King", 29);
    design.setup("Black", "Pawn", 5);
    design.setup("Black", "Pawn", 6);
    design.setup("Black", "Pawn", 7);
    design.setup("Black", "Pawn", 8);
    design.setup("Black", "Pawn", 9);
    design.setup("Black", "Rook", 4);
    design.setup("Black", "Knight", 3);
    design.setup("Black", "Bishop", 2);
    design.setup("Black", "Queen", 1);
    design.setup("Black", "King", 0);
}

Dagaz.View.configure = function(view) {
    const opacity = 0.9;
    view.defBoard3D(344, 412, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board", opacity);

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
 
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl("ResControl", "3D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'mini-chess.htm' : 'mini-chess-board.htm');
    view.defControl(Dagaz.AI.ON ? ["AiOnControl", "AiLightControl", "AiAlertControl"] : ["AiOffControl", "AiOffControl", "AiOffControl"], Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'mini-chess-3d-board.htm' : 'mini-chess-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move{move}", false, Dagaz.Controller.redo);
 
    view.defPosition("a6", -136, -170, 68, 68, 0);
    view.defPosition("b6", -68, -170, 68, 68, 0);
    view.defPosition("c6", 0, -170, 68, 68, 0);
    view.defPosition("d6", 68, -170, 68, 68, 0);
    view.defPosition("e6", 136, -170, 68, 68, 0);
    view.defPosition("a5", -136, -102, 68, 68, 0);
    view.defPosition("b5", -68, -102, 68, 68, 0);
    view.defPosition("c5", 0, -102, 68, 68, 0);
    view.defPosition("d5", 68, -102, 68, 68, 0);
    view.defPosition("e5", 136, -102, 68, 68, 0);
    view.defPosition("a4", -136, -34, 68, 68, 0);
    view.defPosition("b4", -68, -34, 68, 68, 0);
    view.defPosition("c4", 0, -34, 68, 68, 0);
    view.defPosition("d4", 68, -34, 68, 68, 0);
    view.defPosition("e4", 136, -34, 68, 68, 0);
    view.defPosition("a3", -136, 34, 68, 68, 0);
    view.defPosition("b3", -68, 34, 68, 68, 0);
    view.defPosition("c3", 0, 34, 68, 68, 0);
    view.defPosition("d3", 68, 34, 68, 68, 0);
    view.defPosition("e3", 136, 34, 68, 68, 0);
    view.defPosition("a2", -136, 102, 68, 68, 0);
    view.defPosition("b2", -68, 102, 68, 68, 0);
    view.defPosition("c2", 0, 102, 68, 68, 0);
    view.defPosition("d2", 68, 102, 68, 68, 0);
    view.defPosition("e2", 136, 102, 68, 68, 0);
    view.defPosition("a1", -136, 170, 68, 68, 0);
    view.defPosition("b1", -68, 170, 68, 68, 0);
    view.defPosition("c1", 0, 170, 68, 68, 0);
    view.defPosition("d1", 68, 170, 68, 68, 0);
    view.defPosition("e1", 136, 170, 68, 68, 0);
}
