Dagaz.View.TARGET_FLAT       =  true;
Dagaz.View.TARGET_RADIUS     =  1.8;
Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH         = 6;
Dagaz.Model.HEIGHT        = 6;

Dagaz.Model.PROM_IS_FORCED = true;

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
    design.checkVersion("judkins-shogi-promotion", "true");
    design.checkVersion("judkins-shogi-extension", "true");

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("nx");
    design.addDirection("n");
    design.addDirection("sr");
    design.addDirection("nr");

    design.addPlayer("South", [6, 7, 5, 4, 3, 2, 0, 7, 1, 9, 10]);
    design.addPlayer("North", [6, 8, 5, 4, 3, 2, 0, 7, 1, 10, 9]);

    design.addPosition("X6", [13, 12, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y6", [0, 12, 11, 0, -1, 0, 0, 0, 0, 0, 12]);
    design.addPosition("I6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [13, 12, 0, 1, 0, 0, 0, 61, 0, 67, -2]);
    design.addPosition("b6", [13, 12, 11, 1, -1, 0, 0, 61, 0, 66, -3]);
    design.addPosition("c6", [13, 12, 11, 1, -1, 0, 0, 61, 0, 65, -4]);
    design.addPosition("d6", [13, 12, 11, 1, -1, 0, 0, 61, 0, 64, -5]);
    design.addPosition("e6", [13, 12, 11, 1, -1, 0, 0, 61, 0, 63, -6]);
    design.addPosition("f6", [0, 12, 11, 0, -1, 0, 0, 0, 0, 62, -7]);
    design.addPosition("J6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z6", [13, 12, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("T6", [0, 12, 11, 0, -1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X5", [13, 12, 0, 1, 0, -11, 0, -12, -12, 0, 0]);
    design.addPosition("Y5", [0, 12, 11, 0, -1, 0, -13, -12, -12, 0, 12]);
    design.addPosition("I5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [13, 12, 0, 1, 0, -11, 0, -12, -12, 55, -14]);
    design.addPosition("b5", [13, 12, 11, 1, -1, -11, -13, -12, -12, 54, -15]);
    design.addPosition("c5", [13, 12, 11, 1, -1, -11, -13, -12, -12, 53, -16]);
    design.addPosition("d5", [13, 12, 11, 1, -1, -11, -13, -12, -12, 52, -17]);
    design.addPosition("e5", [13, 12, 11, 1, -1, -11, -13, -12, -12, 51, -18]);
    design.addPosition("f5", [0, 12, 11, 0, -1, 0, -13, -12, -12, 50, -19]);
    design.addPosition("J5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z5", [13, 12, 0, 1, 0, -11, 0, -12, -12, -12, 0]);
    design.addPosition("T5", [0, 12, 11, 0, -1, 0, -13, -12, -12, 0, 0]);
    design.addPosition("X4", [13, 12, 0, 1, 0, -11, 0, -12, -12, 0, 0]);
    design.addPosition("Y4", [0, 12, 11, 0, -1, 0, -13, -12, -12, 0, 12]);
    design.addPosition("I4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [13, 12, 0, 1, 0, -11, 0, -12, -12, 43, -26]);
    design.addPosition("b4", [13, 12, 11, 1, -1, -11, -13, -12, -12, 42, -27]);
    design.addPosition("c4", [13, 12, 11, 1, -1, -11, -13, -12, -12, 41, -28]);
    design.addPosition("d4", [13, 12, 11, 1, -1, -11, -13, -12, -12, 40, -29]);
    design.addPosition("e4", [13, 12, 11, 1, -1, -11, -13, -12, -12, 39, -30]);
    design.addPosition("f4", [0, 12, 11, 0, -1, 0, -13, -12, -12, 38, -31]);
    design.addPosition("J4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z4", [13, 12, 0, 1, 0, -11, 0, -12, -12, -12, 0]);
    design.addPosition("T4", [0, 12, 11, 0, -1, 0, -13, -12, -12, 0, 0]);
    design.addPosition("X3", [13, 12, 0, 1, 0, -11, 0, -12, -12, 0, 0]);
    design.addPosition("Y3", [0, 12, 11, 0, -1, 0, -13, -12, -12, 0, 12]);
    design.addPosition("I3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [13, 12, 0, 1, 0, -11, 0, -12, -12, 31, -38]);
    design.addPosition("b3", [13, 12, 11, 1, -1, -11, -13, -12, -12, 30, -39]);
    design.addPosition("c3", [13, 12, 11, 1, -1, -11, -13, -12, -12, 29, -40]);
    design.addPosition("d3", [13, 12, 11, 1, -1, -11, -13, -12, -12, 28, -41]);
    design.addPosition("e3", [13, 12, 11, 1, -1, -11, -13, -12, -12, 27, -42]);
    design.addPosition("f3", [0, 12, 11, 0, -1, 0, -13, -12, -12, 26, -43]);
    design.addPosition("J3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z3", [13, 12, 0, 1, 0, -11, 0, -12, -12, -12, 0]);
    design.addPosition("T3", [0, 12, 11, 0, -1, 0, -13, -12, -12, 0, 0]);
    design.addPosition("X2", [13, 12, 0, 1, 0, -11, 0, -12, -12, 0, 0]);
    design.addPosition("Y2", [0, 12, 11, 0, -1, 0, -13, -12, -12, 0, 12]);
    design.addPosition("I2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [13, 12, 0, 1, 0, -11, 0, -12, -12, 19, -50]);
    design.addPosition("b2", [13, 12, 11, 1, -1, -11, -13, -12, -12, 18, -51]);
    design.addPosition("c2", [13, 12, 11, 1, -1, -11, -13, -12, -12, 17, -52]);
    design.addPosition("d2", [13, 12, 11, 1, -1, -11, -13, -12, -12, 16, -53]);
    design.addPosition("e2", [13, 12, 11, 1, -1, -11, -13, -12, -12, 15, -54]);
    design.addPosition("f2", [0, 12, 11, 0, -1, 0, -13, -12, -12, 14, -55]);
    design.addPosition("J2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z2", [13, 12, 0, 1, 0, -11, 0, -12, -12, -12, 0]);
    design.addPosition("T2", [0, 12, 11, 0, -1, 0, -13, -12, -12, 0, 0]);
    design.addPosition("X1", [0, 0, 0, 1, 0, -11, 0, -12, -12, 0, 0]);
    design.addPosition("Y1", [0, 0, 0, 0, -1, 0, -13, -12, -12, 0, 0]);
    design.addPosition("I1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -11, 0, -12, -12, 7, -62]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -11, -13, -12, -12, 6, -63]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -11, -13, -12, -12, 5, -64]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -11, -13, -12, -12, 4, -65]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -11, -13, -12, -12, 3, -66]);
    design.addPosition("f1", [0, 0, 0, 0, -1, 0, -13, -12, -12, 2, -67]);
    design.addPosition("J1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z1", [0, 0, 0, 1, 0, -11, 0, -12, -12, -12, 0]);
    design.addPosition("T1", [0, 0, 0, 0, -1, 0, -13, -12, -12, 0, 0]);

    design.addZone("board-zone", 1, [63, 64, 65, 66, 67, 68, 51, 52, 53, 54, 55, 56, 39, 40, 41, 42, 43, 44, 27, 28, 29, 30, 31, 32, 15, 16, 17, 18, 19, 20, 3, 4, 5, 6, 7, 8]);
    design.addZone("board-zone", 2, [63, 64, 65, 66, 67, 68, 51, 52, 53, 54, 55, 56, 39, 40, 41, 42, 43, 44, 27, 28, 29, 30, 31, 32, 15, 16, 17, 18, 19, 20, 3, 4, 5, 6, 7, 8]);
    design.addZone("promotion-zone", 1, [15, 16, 17, 18, 19, 20, 3, 4, 5, 6, 7, 8]);
    design.addZone("promotion-zone", 2, [63, 64, 65, 66, 67, 68, 51, 52, 53, 54, 55, 56]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	21);	// position
    design.addCommand(1, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	10);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-11);
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// board-zone
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
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPiece("King", 0, 600000);
    design.addMove(0, 0, [8], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [5], 0);

    design.addPiece("Gold", 1, 500);
    design.addMove(1, 0, [8], 0);
    design.addMove(1, 0, [6], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 1, [63, 7], 0);

    design.addPiece("Silver", 2, 400);
    design.addMove(2, 0, [6], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 0, [5], 0);
    design.addMove(2, 0, [8], 0);
    design.addMove(2, 1, [63, 7], 0);

    design.addPiece("SilverP", 3, 450);
    design.addMove(3, 0, [8], 0);
    design.addMove(3, 0, [6], 0);
    design.addMove(3, 0, [1], 0);
    design.addMove(3, 0, [5], 0);
    design.addMove(3, 0, [4], 0);
    design.addMove(3, 0, [3], 0);

    design.addPiece("Bishop", 4, 1000);
    design.addMove(4, 2, [6, 6], 0);
    design.addMove(4, 2, [0, 0], 0);
    design.addMove(4, 2, [2, 2], 0);
    design.addMove(4, 2, [5, 5], 0);
    design.addMove(4, 1, [63, 7], 0);

    design.addPiece("BishopP", 5, 1500);
    design.addMove(5, 2, [6, 6], 0);
    design.addMove(5, 0, [8], 0);
    design.addMove(5, 2, [0, 0], 0);
    design.addMove(5, 0, [1], 0);
    design.addMove(5, 2, [2, 2], 0);
    design.addMove(5, 0, [4], 0);
    design.addMove(5, 2, [5, 5], 0);
    design.addMove(5, 0, [3], 0);

    design.addPiece("Rook", 6, 1400);
    design.addMove(6, 2, [8, 8], 0);
    design.addMove(6, 2, [3, 3], 0);
    design.addMove(6, 2, [4, 4], 0);
    design.addMove(6, 2, [1, 1], 0);
    design.addMove(6, 1, [63, 7], 0);

    design.addPiece("RookP", 7, 2000);
    design.addMove(7, 2, [8, 8], 0);
    design.addMove(7, 0, [6], 0);
    design.addMove(7, 2, [3, 3], 0);
    design.addMove(7, 0, [5], 0);
    design.addMove(7, 2, [4, 4], 0);
    design.addMove(7, 0, [2], 0);
    design.addMove(7, 2, [1, 1], 0);
    design.addMove(7, 0, [0], 0);

    design.addPiece("Knight", 8, 200);
    design.addMove(8, 3, [8, 6], 0);
    design.addMove(8, 3, [8, 5], 0);
    design.addMove(8, 1, [63, 7], 0);

    design.addPiece("KnightP", 9, 300);
    design.addMove(9, 0, [8], 0);
    design.addMove(9, 0, [6], 0);
    design.addMove(9, 0, [1], 0);
    design.addMove(9, 0, [5], 0);
    design.addMove(9, 0, [4], 0);
    design.addMove(9, 0, [3], 0);

    design.addPiece("Pawn", 10, 100);
    design.addMove(10, 0, [8], 0);
    design.addMove(10, 1, [63, 7], 0);

    design.addPiece("PawnP", 11, 300);
    design.addMove(11, 0, [8], 0);
    design.addMove(11, 0, [6], 0);
    design.addMove(11, 0, [1], 0);
    design.addMove(11, 0, [5], 0);
    design.addMove(11, 0, [4], 0);
    design.addMove(11, 0, [3], 0);

    design.setup("South", "King", 63);
    design.setup("South", "Gold", 64);
    design.setup("South", "Silver", 65);
    design.setup("South", "Knight", 66);
    design.setup("South", "Bishop", 67);
    design.setup("South", "Rook", 68);
    design.setup("South", "Pawn", 51);
    design.setup("North", "King", 8);
    design.setup("North", "Gold", 7);
    design.setup("North", "Silver", 6);
    design.setup("North", "Knight", 5);
    design.setup("North", "Bishop", 4);
    design.setup("North", "Rook", 3);
    design.setup("North", "Pawn", 20);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(265, 295, 1, -5, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    view.defPieceShogi(0, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKing", 1, Math.PI);
    view.defPieceShogi(0, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKing", 1);
    view.defPieceShogi(1, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthGold", 1, Math.PI);
    view.defPieceShogi(1, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthGold", 1);
    view.defPieceShogi(2, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthSilver", 1, Math.PI);
    view.defPieceShogi(2, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthSilver", 1);
    view.defPieceShogi(3, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthSilverP", 1, Math.PI);
    view.defPieceShogi(3, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthSilverP", 1);
    view.defPieceShogi(4, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthBishop", 1, Math.PI);
    view.defPieceShogi(4, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthBishop", 1);
    view.defPieceShogi(5, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthBishopP", 1, Math.PI);
    view.defPieceShogi(5, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthBishopP", 1);
    view.defPieceShogi(6, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthRook", 1, Math.PI);
    view.defPieceShogi(6, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthRook", 1);
    view.defPieceShogi(7, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthRookP", 1, Math.PI);
    view.defPieceShogi(7, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthRookP", 1);
    view.defPieceShogi(8, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKnight", 1, Math.PI);
    view.defPieceShogi(8, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKnight", 1);
    view.defPieceShogi(9, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKnightP", 1, Math.PI);
    view.defPieceShogi(9, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKnightP", 1);
    view.defPieceShogi(10, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthPawn", 1, Math.PI);
    view.defPieceShogi(10, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthPawn", 1);
    view.defPieceShogi(11, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthPawnP", 1, Math.PI);
    view.defPieceShogi(11, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthPawnP", 1);

    view.setCamera(0, 0, 0, -96, 170, 210);

    view.defControl("InfoControl", "1998 Paul Judkins", true, Dagaz.Controller.open, 'https://en.wikipedia.org/wiki/Judkins_shogi');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl("ResControl", "3D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'judkins-shogi.htm' : 'judkins-shogi-board.htm');
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'judkins-shogi-3d-board.htm' : 'judkins-shogi-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);

    view.defPosition("X6", -225, -115, 41, 46, 0);
    view.defPosition("Y6", -184, -115, 41, 46, 0);
    view.defPosition("I6", -143, -115, 41, 46, 0);
    view.defPosition("a6", -102, -115, 41, 46, 0);
    view.defPosition("b6", -61, -115, 41, 46, 0);
    view.defPosition("c6", -20, -115, 41, 46, 0);
    view.defPosition("d6", 21, -115, 41, 46, 0);
    view.defPosition("e6", 62, -115, 41, 46, 0);
    view.defPosition("f6", 103, -115, 41, 46, 0);
    view.defPosition("J6", 144, -115, 41, 46, 0);
    view.defPosition("Z6", 185, -115, 41, 46, 0);
    view.defPosition("T6", 226, -115, 41, 46, 0);
    view.defPosition("X5", -225, -69, 41, 46, 0);
    view.defPosition("Y5", -184, -69, 41, 46, 0);
    view.defPosition("I5", -143, -69, 41, 46, 0);
    view.defPosition("a5", -102, -69, 41, 46, 0);
    view.defPosition("b5", -61, -69, 41, 46, 0);
    view.defPosition("c5", -20, -69, 41, 46, 0);
    view.defPosition("d5", 21, -69, 41, 46, 0);
    view.defPosition("e5", 62, -69, 41, 46, 0);
    view.defPosition("f5", 103, -69, 41, 46, 0);
    view.defPosition("J5", 144, -69, 41, 46, 0);
    view.defPosition("Z5", 185, -69, 41, 46, 0);
    view.defPosition("T5", 226, -69, 41, 46, 0);
    view.defPosition("X4", -225, -23, 41, 46, 0);
    view.defPosition("Y4", -184, -23, 41, 46, 0);
    view.defPosition("I4", -143, -23, 41, 46, 0);
    view.defPosition("a4", -102, -23, 41, 46, 0);
    view.defPosition("b4", -61, -23, 41, 46, 0);
    view.defPosition("c4", -20, -23, 41, 46, 0);
    view.defPosition("d4", 21, -23, 41, 46, 0);
    view.defPosition("e4", 62, -23, 41, 46, 0);
    view.defPosition("f4", 103, -23, 41, 46, 0);
    view.defPosition("J4", 144, -23, 41, 46, 0);
    view.defPosition("Z4", 185, -23, 41, 46, 0);
    view.defPosition("T4", 226, -23, 41, 46, 0);
    view.defPosition("X3", -225, 23, 41, 46, 0);
    view.defPosition("Y3", -184, 23, 41, 46, 0);
    view.defPosition("I3", -143, 23, 41, 46, 0);
    view.defPosition("a3", -102, 23, 41, 46, 0);
    view.defPosition("b3", -61, 23, 41, 46, 0);
    view.defPosition("c3", -20, 23, 41, 46, 0);
    view.defPosition("d3", 21, 23, 41, 46, 0);
    view.defPosition("e3", 62, 23, 41, 46, 0);
    view.defPosition("f3", 103, 23, 41, 46, 0);
    view.defPosition("J3", 144, 23, 41, 46, 0);
    view.defPosition("Z3", 185, 23, 41, 46, 0);
    view.defPosition("T3", 226, 23, 41, 46, 0);
    view.defPosition("X2", -225, 69, 41, 46, 0);
    view.defPosition("Y2", -184, 69, 41, 46, 0);
    view.defPosition("I2", -143, 69, 41, 46, 0);
    view.defPosition("a2", -102, 69, 41, 46, 0);
    view.defPosition("b2", -61, 69, 41, 46, 0);
    view.defPosition("c2", -20, 69, 41, 46, 0);
    view.defPosition("d2", 21, 69, 41, 46, 0);
    view.defPosition("e2", 62, 69, 41, 46, 0);
    view.defPosition("f2", 103, 69, 41, 46, 0);
    view.defPosition("J2", 144, 69, 41, 46, 0);
    view.defPosition("Z2", 185, 69, 41, 46, 0);
    view.defPosition("T2", 226, 69, 41, 46, 0);
    view.defPosition("X1", -225, 115, 41, 46, 0);
    view.defPosition("Y1", -184, 115, 41, 46, 0);
    view.defPosition("I1", -143, 115, 41, 46, 0);
    view.defPosition("a1", -102, 115, 41, 46, 0);
    view.defPosition("b1", -61, 115, 41, 46, 0);
    view.defPosition("c1", -20, 115, 41, 46, 0);
    view.defPosition("d1", 21, 115, 41, 46, 0);
    view.defPosition("e1", 62, 115, 41, 46, 0);
    view.defPosition("f1", 103, 115, 41, 46, 0);
    view.defPosition("J1", 144, 115, 41, 46, 0);
    view.defPosition("Z1", 185, 115, 41, 46, 0);
    view.defPosition("T1", 226, 115, 41, 46, 0);
}
