Dagaz.View.TARGET_FLAT       =  true;
Dagaz.View.TARGET_RADIUS     =  2.5;
Dagaz.Controller.persistense = "setup";

Dagaz.View.RECT_OPACITY      = true;

Dagaz.Model.WIDTH  = 7;
Dagaz.Model.HEIGHT = 7;

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
      if (r != "") return;
      if (a[0] != null) {
          r = r + Dagaz.Model.posToString(a[0][0]);
          if (a[1] !== null) {
              r = r + '-';
          }
      }
      if (a[1] !== null) {
          r = r + Dagaz.Model.posToString(a[1][0]);
      }
      if ((a[2] !== null) && ((a[0] != null) || (a[1] !== null))) {
          r = r + " " + a[2][0].getType();
      }
  });
  return r;
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("drag-n-drop", "false");

    design.addDirection("s");    // 0
    design.addDirection("e");    // 1
    design.addDirection("w");    // 2
    design.addDirection("n");    // 3
    design.addDirection("se");   // 4
    design.addDirection("sw");   // 5
    design.addDirection("ne");   // 6
    design.addDirection("nw");   // 7
    design.addDirection("up");   // 8
    design.addDirection("down"); // 9

    design.addPlayer("White", [3, 2, 1, 0, 7, 6, 5, 4, 9, 8]);
    design.addPlayer("Black", [3, 1, 2, 0, 5, 6, 7, 4, 5, 9]);

    design.addTurn(1, 0); // 0
    design.addTurn(1, 1); // 1
    design.addTurn(2, 0); // 2
    design.addTurn(2, 1); // 3

    design.addPosition("A7", [7, 1, 0, 0, 0, 0, 0, 0, 49, 0]);
    design.addPosition("B7", [7, 1, -1, 0, 0, 0, 0, 0, 49, 0]);
    design.addPosition("C7", [7, 1, -1, 0, 0, 0, 0, 0, 49, 0]);
    design.addPosition("D7", [7, 1, -1, 0, 0, 0, 0, 0, 49, 0]);
    design.addPosition("E7", [7, 1, -1, 0, 0, 0, 0, 0, 49, 0]);
    design.addPosition("F7", [7, 1, -1, 0, 0, 0, 0, 0, 49, 0]);
    design.addPosition("G7", [7, 0, -1, 0, 0, 0, 0, 0, 49, 0]);
    design.addPosition("A6", [7, 1, 0, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("B6", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("C6", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("D6", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("E6", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("F6", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("G6", [7, 0, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("A5", [7, 1, 0, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("B5", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("C5", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("D5", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("E5", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("F5", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("G5", [7, 0, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("A4", [7, 1, 0, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("B4", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("C4", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("D4", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("E4", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("F4", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("G4", [7, 0, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("A3", [7, 1, 0, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("B3", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("C3", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("D3", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("E3", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("F3", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("G3", [7, 0, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("A2", [7, 1, 0, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("B2", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("C2", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("D2", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("E2", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("F2", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("G2", [7, 0, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("A1", [0, 1, 0, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("B1", [0, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("C1", [0, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("D1", [0, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("E1", [0, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("F1", [0, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("G1", [0, 0, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("a7", [7, 1, 0, 0, 8, 0, 0, 0, 0, -49]);
    design.addPosition("b7", [7, 1, -1, 0, 8, 6, 0, 0, 0, -49]);
    design.addPosition("c7", [7, 1, -1, 0, 8, 6, 0, 0, 0, -49]);
    design.addPosition("d7", [7, 1, -1, 0, 8, 6, 0, 0, 0, -49]);
    design.addPosition("e7", [7, 1, -1, 0, 8, 6, 0, 0, 0, -49]);
    design.addPosition("f7", [7, 1, -1, 0, 8, 6, 0, 0, 0, -49]);
    design.addPosition("g7", [7, 0, -1, 0, 0, 6, 0, 0, 0, -49]);
    design.addPosition("a6", [7, 1, 0, -7, 8, 0, -6, 0, 0, -49]);
    design.addPosition("b6", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("c6", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("d6", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("e6", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("f6", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("g6", [7, 0, -1, -7, 0, 6, 0, -8, 0, -49]);
    design.addPosition("a5", [7, 1, 0, -7, 8, 0, -6, 0, 0, -49]);
    design.addPosition("b5", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("c5", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("d5", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("e5", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("f5", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("g5", [7, 0, -1, -7, 0, 6, 0, -8, 0, -49]);
    design.addPosition("a4", [7, 1, 0, -7, 8, 0, -6, 0, 0, -49]);
    design.addPosition("b4", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("c4", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("d4", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("e4", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("f4", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("g4", [7, 0, -1, -7, 0, 6, 0, -8, 0, -49]);
    design.addPosition("a3", [7, 1, 0, -7, 8, 0, -6, 0, 0, -49]);
    design.addPosition("b3", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("c3", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("d3", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("e3", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("f3", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("g3", [7, 0, -1, -7, 0, 6, 0, -8, 0, -49]);
    design.addPosition("a2", [7, 1, 0, -7, 8, 0, -6, 0, 0, -49]);
    design.addPosition("b2", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("c2", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("d2", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("e2", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("f2", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("g2", [7, 0, -1, -7, 0, 6, 0, -8, 0, -49]);
    design.addPosition("a1", [0, 1, 0, -7, 0, 0, -6, 0, 0, -49]);
    design.addPosition("b1", [0, 1, -1, -7, 0, 0, -6, -8, 0, -49]);
    design.addPosition("c1", [0, 1, -1, -7, 0, 0, -6, -8, 0, -49]);
    design.addPosition("d1", [0, 1, -1, -7, 0, 0, -6, -8, 0, -49]);
    design.addPosition("e1", [0, 1, -1, -7, 0, 0, -6, -8, 0, -49]);
    design.addPosition("f1", [0, 1, -1, -7, 0, 0, -6, -8, 0, -49]);
    design.addPosition("g1", [0, 0, -1, -7, 0, 0, 0, -8, 0, -49]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.LITERAL,	1);	// Platform
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.LITERAL,	1);	// Platform
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	14);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.LITERAL,	1);	// Platform
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-15);
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.LITERAL,	1);	// Platform
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
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
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.LITERAL,	1);	// Platform
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	6);	// mark
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.LITERAL,	1);	// Platform
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	7);	// back
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addPiece("Hole", 0);

    design.addPiece("Platform", 1);

    design.addPiece("Pawn", 2);
    design.addMove(2, 0, [3, 9], 0);
    design.addMove(2, 1, [7, 9], 0);
    design.addMove(2, 1, [6, 9], 0);

    design.addPiece("Rook", 3);
    design.addMove(3, 2, [3, 9, 3, 9], 0);
    design.addMove(3, 2, [0, 9, 0, 9], 0);
    design.addMove(3, 2, [2, 9, 2, 9], 0);
    design.addMove(3, 2, [1, 9, 1, 9], 0);

    design.addPiece("Knight", 4);
    design.addMove(4, 3, [3, 7, 9], 0);
    design.addMove(4, 3, [3, 6, 9], 0);
    design.addMove(4, 3, [0, 5, 9], 0);
    design.addMove(4, 3, [0, 4, 9], 0);
    design.addMove(4, 3, [2, 7, 9], 0);
    design.addMove(4, 3, [2, 5, 9], 0);
    design.addMove(4, 3, [1, 6, 9], 0);
    design.addMove(4, 3, [1, 4, 9], 0);

    design.addPiece("King", 5);
    design.addMove(5, 4, [3, 9], 0);
    design.addMove(5, 4, [0, 9], 0);
    design.addMove(5, 4, [2, 9], 0);
    design.addMove(5, 4, [1, 9], 0);
    design.addMove(5, 4, [7, 9], 0);
    design.addMove(5, 4, [5, 9], 0);
    design.addMove(5, 4, [6, 9], 0);
    design.addMove(5, 4, [4, 9], 0);

    design.setup("White", "Platform", 28);
    design.setup("White", "Platform", 14);
    design.setup("White", "Platform", 36);
    design.setup("White", "Platform", 22);
    design.setup("White", "Platform", 8);
    design.setup("White", "Platform", 44);
    design.setup("White", "Platform", 30);
    design.setup("White", "Platform", 16);
    design.setup("White", "Platform", 2);
    design.setup("White", "Platform", 38);
    design.setup("White", "Platform", 10);
    design.setup("White", "Platform", 46);
    design.setup("White", "Platform", 32);
    design.setup("White", "Platform", 18);
    design.setup("White", "Platform", 4);
    design.setup("White", "Platform", 40);
    design.setup("White", "Platform", 26);
    design.setup("White", "Platform", 12);
    design.setup("White", "Platform", 34);
    design.setup("White", "Platform", 20);
    design.setup("White", "Hole", 42);
    design.setup("White", "Hole", 35);
    design.setup("White", "Hole", 7);
    design.setup("White", "Hole", 0);
    design.setup("White", "Hole", 23);
    design.setup("White", "Hole", 24);
    design.setup("White", "Hole", 25);
    design.setup("White", "Hole", 48);
    design.setup("White", "Hole", 41);
    design.setup("White", "Hole", 13);
    design.setup("White", "Hole", 6);
    design.setup("White", "Pawn", 85);
    design.setup("White", "Pawn", 86);
    design.setup("White", "Pawn", 87);
    design.setup("White", "Pawn", 88);
    design.setup("White", "Pawn", 89);
    design.setup("White", "Rook", 92);
    design.setup("White", "Rook", 96);
    design.setup("White", "Knight", 93);
    design.setup("White", "Knight", 95);
    design.setup("White", "King", 94);
    design.setup("Black", "Platform", 21);
    design.setup("Black", "Platform", 43);
    design.setup("Black", "Platform", 29);
    design.setup("Black", "Platform", 15);
    design.setup("Black", "Platform", 1);
    design.setup("Black", "Platform", 37);
    design.setup("Black", "Platform", 9);
    design.setup("Black", "Platform", 45);
    design.setup("Black", "Platform", 31);
    design.setup("Black", "Platform", 17);
    design.setup("Black", "Platform", 3);
    design.setup("Black", "Platform", 39);
    design.setup("Black", "Platform", 11);
    design.setup("Black", "Platform", 47);
    design.setup("Black", "Platform", 33);
    design.setup("Black", "Platform", 19);
    design.setup("Black", "Platform", 5);
    design.setup("Black", "Platform", 27);
    design.setup("Black", "Pawn", 57);
    design.setup("Black", "Pawn", 58);
    design.setup("Black", "Pawn", 59);
    design.setup("Black", "Pawn", 60);
    design.setup("Black", "Pawn", 61);
    design.setup("Black", "Rook", 50);
    design.setup("Black", "Rook", 54);
    design.setup("Black", "Knight", 51);
    design.setup("Black", "Knight", 53);
    design.setup("Black", "King", 52);
}

Dagaz.View.configure = function(view) {
    const opacity = 0.9;
    const modelPath = '../res/fairy';
    const white = '#FFFF63';
    const black = '#333333';

    view.defPiecePlatform(1, 1, 67, 67, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "WhitePlatform", opacity);
    view.defPiecePlatform(1, 2, 67, 67, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "BlackPlatform", opacity);

    view.defPieceModel(2, 1, modelPath, 'pawn', white);
    view.defPieceModel(2, 2, modelPath, 'pawn', black);
    view.defPieceModel(3, 1, modelPath, 'rook', white);
    view.defPieceModel(3, 2, modelPath, 'rook', black);
    view.defPieceModel(4, 1, modelPath, 'knight', white);
    view.defPieceModel(4, 2, modelPath, 'knight', black);
    view.defPieceModel(5, 1, modelPath, 'king', white);
    view.defPieceModel(5, 2, modelPath, 'king', black);

    view.setCamera(0, 0, 0, -109, 215, 155);
 
    view.defControl("InfoControl", "1997 Jim Aikin", true, Dagaz.Controller.open, 'http://ftp.chessvariants.com/38.dir/amoeba.html');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl("ResControl", "3D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'amoeba.htm' : 'amoeba-board.htm');
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'amoeba-3d-board.htm' : 'amoeba-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);

    view.defSubMenu(2, "Promote");
    view.defSubMenuControl(2, "WKnight", "Knight", true, Dagaz.Controller.menuItem, 4);
    view.defSubMenuControl(2, "WRook",   "Rook", true, Dagaz.Controller.menuItem, 3);
 
    view.defSubMenu(12, "Promote");
    view.defSubMenuControl(12, "BKnight", "Knight", true, Dagaz.Controller.menuItem, 4);
    view.defSubMenuControl(12, "BRook",   "Rook", true, Dagaz.Controller.menuItem, 3);

    view.defPosition("A7", -201, -201, 67, 67, 0);
    view.defPosition("B7", -134, -201, 67, 67, 0);
    view.defPosition("C7", -67, -201, 67, 67, 0);
    view.defPosition("D7", 0, -201, 67, 67, 0);
    view.defPosition("E7", 67, -201, 67, 67, 0);
    view.defPosition("F7", 134, -201, 67, 67, 0);
    view.defPosition("G7", 201, -201, 67, 67, 0);
    view.defPosition("A6", -201, -134, 67, 67, 0);
    view.defPosition("B6", -134, -134, 67, 67, 0);
    view.defPosition("C6", -67, -134, 67, 67, 0);
    view.defPosition("D6", 0, -134, 67, 67, 0);
    view.defPosition("E6", 67, -134, 67, 67, 0);
    view.defPosition("F6", 134, -134, 67, 67, 0);
    view.defPosition("G6", 201, -134, 67, 67, 0);
    view.defPosition("A5", -201, -67, 67, 67, 0);
    view.defPosition("B5", -134, -67, 67, 67, 0);
    view.defPosition("C5", -67, -67, 67, 67, 0);
    view.defPosition("D5", 0, -67, 67, 67, 0);
    view.defPosition("E5", 67, -67, 67, 67, 0);
    view.defPosition("F5", 134, -67, 67, 67, 0);
    view.defPosition("G5", 201, -67, 67, 67, 0);
    view.defPosition("A4", -201, 0, 67, 67, 0);
    view.defPosition("B4", -134, 0, 67, 67, 0);
    view.defPosition("C4", -67, 0, 67, 67, 0);
    view.defPosition("D4", 0, 0, 67, 67, 0);
    view.defPosition("E4", 67, 0, 67, 67, 0);
    view.defPosition("F4", 134, 0, 67, 67, 0);
    view.defPosition("G4", 201, 0, 67, 67, 0);
    view.defPosition("A3", -201, 67, 67, 67, 0);
    view.defPosition("B3", -134, 67, 67, 67, 0);
    view.defPosition("C3", -67, 67, 67, 67, 0);
    view.defPosition("D3", 0, 67, 67, 67, 0);
    view.defPosition("E3", 67, 67, 67, 67, 0);
    view.defPosition("F3", 134, 67, 67, 67, 0);
    view.defPosition("G3", 201, 67, 67, 67, 0);
    view.defPosition("A2", -201, 134, 67, 67, 0);
    view.defPosition("B2", -134, 134, 67, 67, 0);
    view.defPosition("C2", -67, 134, 67, 67, 0);
    view.defPosition("D2", 0, 134, 67, 67, 0);
    view.defPosition("E2", 67, 134, 67, 67, 0);
    view.defPosition("F2", 134, 134, 67, 67, 0);
    view.defPosition("G2", 201, 134, 67, 67, 0);
    view.defPosition("A1", -201, 201, 67, 67, 0);
    view.defPosition("B1", -134, 201, 67, 67, 0);
    view.defPosition("C1", -67, 201, 67, 67, 0);
    view.defPosition("D1", 0, 201, 67, 67, 0);
    view.defPosition("E1", 67, 201, 67, 67, 0);
    view.defPosition("F1", 134, 201, 67, 67, 0);
    view.defPosition("G1", 201, 201, 67, 67, 0);
    view.defPosition("a7", -201, -201, 67, 67, 0);
    view.defPosition("b7", -134, -201, 67, 67, 0);
    view.defPosition("c7", -67, -201, 67, 67, 0);
    view.defPosition("d7", 0, -201, 67, 67, 0);
    view.defPosition("e7", 67, -201, 67, 67, 0);
    view.defPosition("f7", 134, -201, 67, 67, 0);
    view.defPosition("g7", 201, -201, 67, 67, 0);
    view.defPosition("a6", -201, -134, 67, 67, 0);
    view.defPosition("b6", -134, -134, 67, 67, 0);
    view.defPosition("c6", -67, -134, 67, 67, 0);
    view.defPosition("d6", 0, -134, 67, 67, 0);
    view.defPosition("e6", 67, -134, 67, 67, 0);
    view.defPosition("f6", 134, -134, 67, 67, 0);
    view.defPosition("g6", 201, -134, 67, 67, 0);
    view.defPosition("a5", -201, -67, 67, 67, 0);
    view.defPosition("b5", -134, -67, 67, 67, 0);
    view.defPosition("c5", -67, -67, 67, 67, 0);
    view.defPosition("d5", 0, -67, 67, 67, 0);
    view.defPosition("e5", 67, -67, 67, 67, 0);
    view.defPosition("f5", 134, -67, 67, 67, 0);
    view.defPosition("g5", 201, -67, 67, 67, 0);
    view.defPosition("a4", -201, 0, 67, 67, 0);
    view.defPosition("b4", -134, 0, 67, 67, 0);
    view.defPosition("c4", -67, 0, 67, 67, 0);
    view.defPosition("d4", 0, 0, 67, 67, 0);
    view.defPosition("e4", 67, 0, 67, 67, 0);
    view.defPosition("f4", 134, 0, 67, 67, 0);
    view.defPosition("g4", 201, 0, 67, 67, 0);
    view.defPosition("a3", -201, 67, 67, 67, 0);
    view.defPosition("b3", -134, 67, 67, 67, 0);
    view.defPosition("c3", -67, 67, 67, 67, 0);
    view.defPosition("d3", 0, 67, 67, 67, 0);
    view.defPosition("e3", 67, 67, 67, 67, 0);
    view.defPosition("f3", 134, 67, 67, 67, 0);
    view.defPosition("g3", 201, 67, 67, 67, 0);
    view.defPosition("a2", -201, 134, 67, 67, 0);
    view.defPosition("b2", -134, 134, 67, 67, 0);
    view.defPosition("c2", -67, 134, 67, 67, 0);
    view.defPosition("d2", 0, 134, 67, 67, 0);
    view.defPosition("e2", 67, 134, 67, 67, 0);
    view.defPosition("f2", 134, 134, 67, 67, 0);
    view.defPosition("g2", 201, 134, 67, 67, 0);
    view.defPosition("a1", -201, 201, 67, 67, 0);
    view.defPosition("b1", -134, 201, 67, 67, 0);
    view.defPosition("c1", -67, 201, 67, 67, 0);
    view.defPosition("d1", 0, 201, 67, 67, 0);
    view.defPosition("e1", 67, 201, 67, 67, 0);
    view.defPosition("f1", 134, 201, 67, 67, 0);
    view.defPosition("g1", 201, 201, 67, 67, 0);
}
