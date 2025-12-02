Dagaz.View.TARGET_FLAT       =  true;
Dagaz.View.TARGET_RADIUS     =  2.5;
Dagaz.View.TARGET_SZ         =  0.5;

Dagaz.Model.WIDTH            = 5;
Dagaz.Model.HEIGHT           = 5;

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
  for (var i = 0; i < move.actions.length; i++) {
      var a = move.actions[i];
      if (a[0] === null) continue;
      if (a[1] === null) continue;
      r = Dagaz.Model.posToString(a[0][0]) + Dagaz.Model.posToString(a[1][0]);
      break;
  }
  return r;
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("migi-shogi-captures", "true");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("n");
    design.addDirection("nx");

    design.addPlayer("South", [6, 7, 5, 4, 3, 2, 0, 1, 8]);
    design.addPlayer("North", [6, 7, 5, 3, 4, 2, 0, 1, 8]);
    design.addPlayer("NS", []);
    design.addPlayer("NN", []);

    design.addTurn(1);
    design.addTurn(2);

    design.addPosition("a5", [6, 5, 0, 1, 0, 0, 0, 0, 5]);
    design.addPosition("b5", [6, 5, 4, 1, -1, 0, 0, 0, 5]);
    design.addPosition("c5", [6, 5, 4, 1, -1, 0, 0, 0, 5]);
    design.addPosition("d5", [6, 5, 4, 1, -1, 0, 0, 0, 5]);
    design.addPosition("e5", [0, 5, 4, 0, -1, 0, 0, 0, 5]);
    design.addPosition("a4", [6, 5, 0, 1, 0, -4, 0, -5, 5]);
    design.addPosition("b4", [6, 5, 4, 1, -1, -4, -6, -5, 5]);
    design.addPosition("c4", [6, 5, 4, 1, -1, -4, -6, -5, 5]);
    design.addPosition("d4", [6, 5, 4, 1, -1, -4, -6, -5, 5]);
    design.addPosition("e4", [0, 5, 4, 0, -1, 0, -6, -5, 5]);
    design.addPosition("a3", [6, 5, 0, 1, 0, -4, 0, -5, 5]);
    design.addPosition("b3", [6, 5, 4, 1, -1, -4, -6, -5, 5]);
    design.addPosition("c3", [6, 5, 4, 1, -1, -4, -6, -5, 5]);
    design.addPosition("d3", [6, 5, 4, 1, -1, -4, -6, -5, 5]);
    design.addPosition("e3", [0, 5, 4, 0, -1, 0, -6, -5, 5]);
    design.addPosition("a2", [6, 5, 0, 1, 0, -4, 0, -5, 5]);
    design.addPosition("b2", [6, 5, 4, 1, -1, -4, -6, -5, 5]);
    design.addPosition("c2", [6, 5, 4, 1, -1, -4, -6, -5, 5]);
    design.addPosition("d2", [6, 5, 4, 1, -1, -4, -6, -5, 5]);
    design.addPosition("e2", [0, 5, 4, 0, -1, 0, -6, -5, 5]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -4, 0, -5, -19]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -4, -6, -5, -19]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -4, -6, -5, -19]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -4, -6, -5, -19]);
    design.addPosition("e1", [0, 0, 0, 0, -1, 0, -6, -5, 0]);

    design.addPosition("A5", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("B5", [0, 0, 0, -1, 0, 0, 0, 0, 0]);
    design.addPosition("C5", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("D5", [0, 0, 0, -1, 0, 0, 0, 0, 30]);
    design.addPosition("E5", [0, 0, 0, 1, 0, 0, 0, 0, 8]);
    design.addPosition("F5", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("G5", [0, 0, 0, 1, 0, 0, 0, 0, 8]);
    design.addPosition("H5", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("A4", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("B4", [0, 0, 0, -1, 0, 0, 0, 0, -8]);
    design.addPosition("C4", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("D4", [0, 0, 0, -1, 0, 0, 0, 0, -8]);
    design.addPosition("E4", [0, 0, 0, 1, 0, 0, 0, 0, 8]);
    design.addPosition("F4", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("G4", [0, 0, 0, 1, 0, 0, 0, 0, 8]);
    design.addPosition("H4", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("A3", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("B3", [0, 0, 0, -1, 0, 0, 0, 0, -8]);
    design.addPosition("C3", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("D3", [0, 0, 0, -1, 0, 0, 0, 0, -8]);
    design.addPosition("E3", [0, 0, 0, 1, 0, 0, 0, 0, 8]);
    design.addPosition("F3", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("G3", [0, 0, 0, 1, 0, 0, 0, 0, 8]);
    design.addPosition("H3", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("A2", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("B2", [0, 0, 0, -1, 0, 0, 0, 0, -8]);
    design.addPosition("C2", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("D2", [0, 0, 0, -1, 0, 0, 0, 0, -8]);
    design.addPosition("E2", [0, 0, 0, 1, 0, 0, 0, 0, 8]);
    design.addPosition("F2", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("G2", [0, 0, 0, 1, 0, 0, 0, 0, 8]);
    design.addPosition("H2", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("A1", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("B1", [0, 0, 0, -1, 0, 0, 0, 0, -8]);
    design.addPosition("C1", [0, 0, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("D1", [0, 0, 0, -1, 0, 0, 0, 0, -8]);
    design.addPosition("E1", [0, 0, 0, 1, 0, 0, 0, 0, -30]);
    design.addPosition("F1", [0, 0, 0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("G1", [0, 0, 0, 1, 0, 0, 0, 0, 0]);
    design.addPosition("H1", [0, 0, 0, 0, -1, 0, 0, 0, 0]);

    design.addZone("board-zone", 1, [20, 21, 22, 23, 24, 15, 16, 17, 18, 19, 10, 11, 12, 13, 14, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4]);
    design.addZone("board-zone", 2, [20, 21, 22, 23, 24, 15, 16, 17, 18, 19, 10, 11, 12, 13, 14, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4]);
    design.addZone("last-rank", 1, [0, 1, 2, 3, 4]);
    design.addZone("last-rank", 2, [20, 21, 22, 23, 24]);
    design.addZone("last-ranks", 1, [5, 6, 7, 8, 9, 0, 1, 2, 3, 4]);
    design.addZone("last-ranks", 2, [20, 21, 22, 23, 24, 15, 16, 17, 18, 19]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	0);	// King
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	21);	// position
    design.addCommand(1, ZRF.ON_BOARD_DIR,	8);	// name
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
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PROMOTE,	7);	// Rook
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PROMOTE,	6);	// Lance
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.PROMOTE,	5);	// Knight
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.PROMOTE,	8);	// Pawn
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.JUMP,	2);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	4);
    design.addCommand(6, ZRF.PROMOTE,	3);	// Silver
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.JUMP,	2);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	7);
    design.addCommand(7, ZRF.FORK,	3);
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-8);
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PROMOTE,	2);	// Gold
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	7);
    design.addCommand(8, ZRF.FORK,	3);
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.JUMP,	-8);
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PROMOTE,	1);	// Prince
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	4);
    design.addCommand(9, ZRF.PROMOTE,	4);	// Copper
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.JUMP,	2);
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addPiece("King", 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 1, [0, 8], 1);

    design.addPiece("Prince", 1);
    design.addMove(1, 2, [7], 0);
    design.addMove(1, 2, [6], 0);
    design.addMove(1, 2, [1], 0);
    design.addMove(1, 2, [0], 0);
    design.addMove(1, 2, [4], 0);
    design.addMove(1, 2, [2], 0);
    design.addMove(1, 2, [3], 0);
    design.addMove(1, 2, [5], 0);
    design.addMove(1, 1, [0, 8], 1);

    design.addPiece("Gold", 2);
    design.addMove(2, 3, [7], 0);
    design.addMove(2, 3, [6], 0);
    design.addMove(2, 3, [1], 0);
    design.addMove(2, 3, [5], 0);
    design.addMove(2, 3, [4], 0);
    design.addMove(2, 3, [3], 0);
    design.addMove(2, 1, [0, 8], 1);

    design.addPiece("Silver", 3);
    design.addMove(3, 4, [6], 0);
    design.addMove(3, 4, [2], 0);
    design.addMove(3, 4, [0], 0);
    design.addMove(3, 4, [5], 0);
    design.addMove(3, 4, [7], 0);
    design.addMove(3, 1, [0, 8], 1);

    design.addPiece("Copper", 4);
    design.addMove(4, 5, [7], 0);
    design.addMove(4, 5, [6], 0);
    design.addMove(4, 5, [1], 0);
    design.addMove(4, 5, [5], 0);
    design.addMove(4, 1, [0, 8], 1);

    design.addPiece("Knight", 5);
    design.addMove(5, 6, [7, 6], 0);
    design.addMove(5, 6, [7, 5], 0);
    design.addMove(5, 1, [0, 8], 1);

    design.addPiece("Lance", 6);
    design.addMove(6, 7, [7, 7], 0);
    design.addMove(6, 1, [0, 8], 1);

    design.addPiece("Rook", 7);
    design.addMove(7, 8, [7, 7], 0);
    design.addMove(7, 8, [3, 3], 0);
    design.addMove(7, 8, [4, 4], 0);
    design.addMove(7, 8, [1, 1], 0);
    design.addMove(7, 1, [0, 8], 1);

    design.addPiece("Pawn", 8);
    design.addMove(8, 9, [7], 0);
    design.addMove(8, 1, [0, 8], 1);

    design.setup("South", "King", 24);
    design.setup("South", "Rook", 23);
    design.setup("South", "Gold", 22);
    design.setup("South", "Silver", 21);
    design.setup("South", "Pawn", 20);
    design.setup("North", "King", 0);
    design.setup("North", "Rook", 1);
    design.setup("North", "Gold", 2);
    design.setup("North", "Silver", 3);
    design.setup("North", "Pawn", 4);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(730, 730, 1, -10, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    view.defPiecePlatform(0, 1, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKing");
    view.defPiecePlatform(0, 2, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthKing");
    view.defPiecePlatform(1, 1, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthPrince");
    view.defPiecePlatform(1, 2, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthPrince");
    view.defPiecePlatform(2, 1, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthGold");
    view.defPiecePlatform(2, 2, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthGold");
    view.defPiecePlatform(3, 1, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthSilver");
    view.defPiecePlatform(3, 2, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthSilver");
    view.defPiecePlatform(4, 1, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthCopper");
    view.defPiecePlatform(4, 2, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthCopper");
    view.defPiecePlatform(5, 1, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKnight");
    view.defPiecePlatform(5, 2, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthKnight");
    view.defPiecePlatform(5, 3, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NSKnight");
    view.defPiecePlatform(5, 4, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NNKnight");
    view.defPiecePlatform(6, 1, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthLance");
    view.defPiecePlatform(6, 2, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthLance");
    view.defPiecePlatform(6, 3, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NSLance");
    view.defPiecePlatform(6, 4, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NNLance");
    view.defPiecePlatform(7, 1, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthRook");
    view.defPiecePlatform(7, 2, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthRook");
    view.defPiecePlatform(8, 1, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthPawn");
    view.defPiecePlatform(8, 2, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthPawn");
    view.defPiecePlatform(8, 3, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NSPawn");
    view.defPiecePlatform(8, 4, 100, 100, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NNPawn");

    view.setCamera(0, 0, 0, -109, 215, 155);
 
    view.defControl("InfoControl", "2025 Oleg Makarenko", true);
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl("ResControl", "3D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'migi-shogi.htm' : 'migi-shogi-board.htm');
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'migi-shogi-3d-board.htm' : 'migi-shogi-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("a5", -241, -287, 102, 102, 0);
    view.defPosition("b5", -109, -287, 102, 102, 0);
    view.defPosition("c5", 23, -287, 102, 102, 0);
    view.defPosition("d5", 155, -287, 102, 102, 0);
    view.defPosition("e5", 287, -287, 102, 102, 0);
    view.defPosition("a4", -241, -155, 102, 102, 0);
    view.defPosition("b4", -109, -155, 102, 102, 0);
    view.defPosition("c4", 23, -155, 102, 102, 0);
    view.defPosition("d4", 155, -155, 102, 102, 0);
    view.defPosition("e4", 287, -155, 102, 102, 0);
    view.defPosition("a3", -241, -23, 102, 102, 0);
    view.defPosition("b3", -109, -23, 102, 102, 0);
    view.defPosition("c3", 23, -23, 102, 102, 0);
    view.defPosition("d3", 155, -23, 102, 102, 0);
    view.defPosition("e3", 287, -23, 102, 102, 0);
    view.defPosition("a2", -241, 109, 102, 102, 0);
    view.defPosition("b2", -109, 109, 102, 102, 0);
    view.defPosition("c2", 23, 109, 102, 102, 0);
    view.defPosition("d2", 155, 109, 102, 102, 0);
    view.defPosition("e2", 287, 109, 102, 102, 0);
    view.defPosition("a1", -241, 241, 102, 102, 0);
    view.defPosition("b1", -109, 241, 102, 102, 0);
    view.defPosition("c1", 23, 241, 102, 102, 0);
    view.defPosition("d1", 155, 241, 102, 102, 0);
    view.defPosition("e1", 287, 241, 102, 102, 0);

    view.defPosition("A5", -884, -287, 102, 102, 0);
    view.defPosition("B5", -752, -287, 102, 102, 0);
    view.defPosition("C5", -596, -287, 102, 102, 0);
    view.defPosition("D5", -464, -287, 102, 102, 0);
    view.defPosition("E5", 462, -287, 102, 102, 0);
    view.defPosition("F5", 594, -287, 102, 102, 0);
    view.defPosition("G5", 750, -287, 102, 102, 0);
    view.defPosition("H5", 882, -287, 102, 102, 0);
    view.defPosition("A4", -884, -155, 102, 102, 0);
    view.defPosition("B4", -752, -155, 102, 102, 0);
    view.defPosition("C4", -596, -155, 102, 102, 0);
    view.defPosition("D4", -464, -155, 102, 102, 0);
    view.defPosition("E4", 462, -155, 102, 102, 0);
    view.defPosition("F4", 594, -155, 102, 102, 0);
    view.defPosition("G4", 750, -155, 102, 102, 0);
    view.defPosition("H4", 882, -155, 102, 102, 0);
    view.defPosition("A3", -884, -23, 102, 102, 0);
    view.defPosition("B3", -752, -23, 102, 102, 0);
    view.defPosition("C3", -596, -23, 102, 102, 0);
    view.defPosition("D3", -464, -23, 102, 102, 0);
    view.defPosition("E3", 462, -23, 102, 102, 0);
    view.defPosition("F3", 594, -23, 102, 102, 0);
    view.defPosition("G3", 750, -23, 102, 102, 0);
    view.defPosition("H3", 882, -23, 102, 102, 0);
    view.defPosition("A2", -884, 109, 102, 102, 0);
    view.defPosition("B2", -752, 109, 102, 102, 0);
    view.defPosition("C2", -596, 109, 102, 102, 0);
    view.defPosition("D2", -464, 109, 102, 102, 0);
    view.defPosition("E2", 462, 109, 102, 102, 0);
    view.defPosition("F2", 594, 109, 102, 102, 0);
    view.defPosition("G2", 750, 109, 102, 102, 0);
    view.defPosition("H2", 882, 109, 102, 102, 0);
    view.defPosition("A1", -884, 241, 102, 102, 0);
    view.defPosition("B1", -752, 241, 102, 102, 0);
    view.defPosition("C1", -596, 241, 102, 102, 0);
    view.defPosition("D1", -464, 241, 102, 102, 0);
    view.defPosition("E1", 462, 241, 102, 102, 0);
    view.defPosition("F1", 594, 241, 102, 102, 0);
    view.defPosition("G1", 750, 241, 102, 102, 0);
    view.defPosition("H1", 882, 241, 102, 102, 0);
}
