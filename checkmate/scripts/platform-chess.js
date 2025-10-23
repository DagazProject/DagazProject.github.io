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
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("drag-n-drop", "false");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("w");    // 0
    design.addDirection("e");    // 1
    design.addDirection("s");    // 2
    design.addDirection("n");    // 3
    design.addDirection("ne");   // 4
    design.addDirection("se");   // 5
    design.addDirection("sw");   // 6
    design.addDirection("nw");   // 7
    design.addDirection("up");   // 8
    design.addDirection("down"); // 9

    design.addPlayer("White", [1, 0, 3, 2, 6, 7, 4, 5, 8, 9]);
    design.addPlayer("Black", [0, 1, 3, 2, 5, 4, 7, 6, 8, 9]);

    design.addPosition("ad", [0, 1, 4, 0, 0, 0, 0, 0, 24, 0]);
    design.addPosition("bd", [-1, 1, 4, 0, 0, 0, 0, 0, 25, 0]);
    design.addPosition("cd", [-1, 1, 4, 0, 0, 0, 0, 0, 26, 0]);
    design.addPosition("dd", [-1, 0, 4, 0, 0, 0, 0, 0, 27, 0]);
    design.addPosition("ac", [0, 1, 4, -4, 0, 0, 0, 0, 36, 0]);
    design.addPosition("bc", [-1, 1, 4, -4, 0, 0, 0, 0, 37, 0]);
    design.addPosition("cc", [-1, 1, 4, -4, 0, 0, 0, 0, 38, 0]);
    design.addPosition("dc", [-1, 0, 4, -4, 0, 0, 0, 0, 39, 0]);
    design.addPosition("ab", [0, 1, 4, -4, 0, 0, 0, 0, 48, 0]);
    design.addPosition("bb", [-1, 1, 4, -4, 0, 0, 0, 0, 49, 0]);
    design.addPosition("cb", [-1, 1, 4, -4, 0, 0, 0, 0, 50, 0]);
    design.addPosition("db", [-1, 0, 4, -4, 0, 0, 0, 0, 51, 0]);
    design.addPosition("aa", [0, 1, 0, -4, 0, 0, 0, 0, 60, 0]);
    design.addPosition("ba", [-1, 1, 0, -4, 0, 0, 0, 0, 61, 0]);
    design.addPosition("ca", [-1, 1, 0, -4, 0, 0, 0, 0, 62, 0]);
    design.addPosition("da", [-1, 0, 0, -4, 0, 0, 0, 0, 63, 0]);
    design.addPosition("a8", [0, 1, 8, 0, 0, 9, 0, 0, 9, -16]);
    design.addPosition("b8", [-1, 1, 8, 0, 0, 9, 7, 0, 0, -17]);
    design.addPosition("c8", [-1, 1, 8, 0, 0, 9, 7, 0, 9, -17]);
    design.addPosition("d8", [-1, 1, 8, 0, 0, 9, 7, 0, 0, -18]);
    design.addPosition("e8", [-1, 1, 8, 0, 0, 9, 7, 0, 9, -18]);
    design.addPosition("f8", [-1, 1, 8, 0, 0, 9, 7, 0, 0, -19]);
    design.addPosition("g8", [-1, 1, 8, 0, 0, 9, 7, 0, 9, -19]);
    design.addPosition("h8", [-1, 0, 8, 0, 0, 0, 7, 0, 0, -20]);
    design.addPosition("a7", [0, 1, 8, -8, -7, 9, 0, 0, -8, -24]);
    design.addPosition("b7", [-1, 1, 8, -8, -7, 9, 7, -9, -8, -25]);
    design.addPosition("c7", [-1, 1, 8, -8, -7, 9, 7, -9, -8, -25]);
    design.addPosition("d7", [-1, 1, 8, -8, -7, 9, 7, -9, -8, -26]);
    design.addPosition("e7", [-1, 1, 8, -8, -7, 9, 7, -9, -8, -26]);
    design.addPosition("f7", [-1, 1, 8, -8, -7, 9, 7, -9, -8, -27]);
    design.addPosition("g7", [-1, 1, 8, -8, -7, 9, 7, -9, -8, -27]);
    design.addPosition("h7", [-1, 0, 8, -8, 0, 0, 7, -9, -8, -28]);
    design.addPosition("a6", [0, 1, 8, -8, -7, 9, 0, 0, 9, -28]);
    design.addPosition("b6", [-1, 1, 8, -8, -7, 9, 7, -9, 0, -29]);
    design.addPosition("c6", [-1, 1, 8, -8, -7, 9, 7, -9, 9, -29]);
    design.addPosition("d6", [-1, 1, 8, -8, -7, 9, 7, -9, 0, -30]);
    design.addPosition("e6", [-1, 1, 8, -8, -7, 9, 7, -9, 9, -30]);
    design.addPosition("f6", [-1, 1, 8, -8, -7, 9, 7, -9, 0, -31]);
    design.addPosition("g6", [-1, 1, 8, -8, -7, 9, 7, -9, 9, -31]);
    design.addPosition("h6", [-1, 0, 8, -8, 0, 0, 7, -9, 0, -32]);
    design.addPosition("a5", [0, 1, 8, -8, -7, 9, 0, 0, -8, -36]);
    design.addPosition("b5", [-1, 1, 8, -8, -7, 9, 7, -9, -8, -37]);
    design.addPosition("c5", [-1, 1, 8, -8, -7, 9, 7, -9, -8, -37]);
    design.addPosition("d5", [-1, 1, 8, -8, -7, 9, 7, -9, -8, -38]);
    design.addPosition("e5", [-1, 1, 8, -8, -7, 9, 7, -9, -8, -38]);
    design.addPosition("f5", [-1, 1, 8, -8, -7, 9, 7, -9, -8, -39]);
    design.addPosition("g5", [-1, 1, 8, -8, -7, 9, 7, -9, -8, -39]);
    design.addPosition("h5", [-1, 0, 8, -8, 0, 0, 7, -9, -8, -40]);
    design.addPosition("a4", [0, 1, 8, -8, -7, 9, 0, 0, 9, -40]);
    design.addPosition("b4", [-1, 1, 8, -8, -7, 9, 7, -9, 0, -41]);
    design.addPosition("c4", [-1, 1, 8, -8, -7, 9, 7, -9, 9, -41]);
    design.addPosition("d4", [-1, 1, 8, -8, -7, 9, 7, -9, 0, -42]);
    design.addPosition("e4", [-1, 1, 8, -8, -7, 9, 7, -9, 9, -42]);
    design.addPosition("f4", [-1, 1, 8, -8, -7, 9, 7, -9, 0, -43]);
    design.addPosition("g4", [-1, 1, 8, -8, -7, 9, 7, -9, 9, -43]);
    design.addPosition("h4", [-1, 0, 8, -8, 0, 0, 7, -9, 0, -44]);
    design.addPosition("a3", [0, 1, 8, -8, -7, 9, 0, 0, -8, -48]);
    design.addPosition("b3", [-1, 1, 8, -8, -7, 9, 7, -9, -8, -49]);
    design.addPosition("c3", [-1, 1, 8, -8, -7, 9, 7, -9, -8, -49]);
    design.addPosition("d3", [-1, 1, 8, -8, -7, 9, 7, -9, -8, -50]);
    design.addPosition("e3", [-1, 1, 8, -8, -7, 9, 7, -9, -8, -50]);
    design.addPosition("f3", [-1, 1, 8, -8, -7, 9, 7, -9, -8, -51]);
    design.addPosition("g3", [-1, 1, 8, -8, -7, 9, 7, -9, -8, -51]);
    design.addPosition("h3", [-1, 0, 8, -8, 0, 0, 7, -9, -8, -52]);
    design.addPosition("a2", [0, 1, 8, -8, -7, 9, 0, 0, 9, -52]);
    design.addPosition("b2", [-1, 1, 8, -8, -7, 9, 7, -9, 0, -53]);
    design.addPosition("c2", [-1, 1, 8, -8, -7, 9, 7, -9, 9, -53]);
    design.addPosition("d2", [-1, 1, 8, -8, -7, 9, 7, -9, 0, -54]);
    design.addPosition("e2", [-1, 1, 8, -8, -7, 9, 7, -9, 9, -54]);
    design.addPosition("f2", [-1, 1, 8, -8, -7, 9, 7, -9, 0, -55]);
    design.addPosition("g2", [-1, 1, 8, -8, -7, 9, 7, -9, 9, -55]);
    design.addPosition("h2", [-1, 0, 8, -8, 0, 0, 7, -9, 0, -56]);
    design.addPosition("a1", [0, 1, 0, -8, -7, 0, 0, 0, -8, -60]);
    design.addPosition("b1", [-1, 1, 0, -8, -7, 0, 0, -9, -8, -61]);
    design.addPosition("c1", [-1, 1, 0, -8, -7, 0, 0, -9, -8, -61]);
    design.addPosition("d1", [-1, 1, 0, -8, -7, 0, 0, -9, -8, -62]);
    design.addPosition("e1", [-1, 1, 0, -8, -7, 0, 0, -9, -8, -62]);
    design.addPosition("f1", [-1, 1, 0, -8, -7, 0, 0, -9, -8, -63]);
    design.addPosition("g1", [-1, 1, 0, -8, -7, 0, 0, -9, -8, -63]);
    design.addPosition("h1", [-1, 0, 0, -8, 0, 0, 0, -9, -8, -64]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("third-rank", 1, [56, 57, 58, 59, 60, 61, 62, 63]);
    design.addZone("third-rank", 2, [32, 33, 34, 35, 36, 37, 38, 39]);
    design.addZone("last-rank", 1, [16, 17, 18, 19, 20, 21, 22, 23]);
    design.addZone("last-rank", 2, [72, 73, 74, 75, 76, 77, 78, 79]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.IN_ZONE,	1);	// last-rank
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	6);	// Queen
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.IN_ZONE,	0);	// third-rank
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.IN_ZONE,	1);	// last-rank
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PROMOTE,	6);	// Queen
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.IN_ZONE,	1);	// last-rank
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PROMOTE,	6);	// Queen
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	5);	// last-to?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	1);	// Pawn
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.IF,	6);
    design.addCommand(4, ZRF.LITERAL,	2);	// Bomb
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.LITERAL,	0);	// false
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.LITERAL,	1);	// true
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	26);	// capture
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	6);	// mark
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	7);	// back
    design.addCommand(4, ZRF.FUNCTION,	6);	// mark
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	7);	// back
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.FUNCTION,	26);	// capture
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	14);
    design.addCommand(6, ZRF.FUNCTION,	6);	// mark
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	7);	// back
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-15);
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	6);	// mark
    design.addCommand(6, ZRF.PARAM,	3);	// $4
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	7);	// back
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	6);	// mark
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	7);	// back
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.PARAM,	2);	// $3
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	3);	// Rook
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	3);	// $4
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.PARAM,	4);	// $5
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PARAM,	1);	// $2
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.PARAM,	2);	// $3
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PARAM,	3);	// $4
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.LITERAL,	3);	// Rook
    design.addCommand(10, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	4);	// $5
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.PARAM,	5);	// $6
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.PARAM,	6);	// $7
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addPiece("Platform", 0, 100);
    design.addMove(0, 0, [3], 0, 10);
    design.addMove(0, 0, [2], 0, 10);
    design.addMove(0, 0, [0], 0, 10);
    design.addMove(0, 0, [1], 0, 10);

    design.addPiece("Pawn", 1, 800);
    design.addMove(1, 1, [3, 9], 0);
    design.addMove(1, 2, [3, 9, 3, 9], 0);
    design.addMove(1, 3, [7, 9], 0);
    design.addMove(1, 3, [4, 9], 0);
    design.addMove(1, 4, [1, 3, 9, 3], 0);
    design.addMove(1, 4, [0, 3, 9, 3], 0);

    design.addPiece("Bomb", 2, 100);
    design.addMove(2, 1, [3, 9], 0);
    design.addMove(2, 2, [3, 9, 3, 9], 0);
    design.addMove(2, 5, [], 0, 11);

    design.addPiece("Rook", 3, 5000);
    design.addMove(3, 6, [3, 9, 3, 9], 0);
    design.addMove(3, 6, [2, 9, 2, 9], 0);
    design.addMove(3, 6, [0, 9, 0, 9], 0);
    design.addMove(3, 6, [1, 9, 1, 9], 0);

    design.addPiece("Knight", 4, 3350);
    design.addMove(4, 7, [3, 7, 9], 0);
    design.addMove(4, 7, [3, 4, 9], 0);
    design.addMove(4, 7, [2, 6, 9], 0);
    design.addMove(4, 7, [2, 5, 9], 0);
    design.addMove(4, 7, [0, 7, 9], 0);
    design.addMove(4, 7, [0, 6, 9], 0);
    design.addMove(4, 7, [1, 4, 9], 0);
    design.addMove(4, 7, [1, 5, 9], 0);

    design.addPiece("Bishop", 5, 3450);
    design.addMove(5, 6, [7, 9, 7, 9], 0);
    design.addMove(5, 6, [6, 9, 6, 9], 0);
    design.addMove(5, 6, [4, 9, 4, 9], 0);
    design.addMove(5, 6, [5, 9, 5, 9], 0);

    design.addPiece("Queen", 6, 9750);
    design.addMove(6, 6, [3, 9, 3, 9], 0);
    design.addMove(6, 6, [2, 9, 2, 9], 0);
    design.addMove(6, 6, [0, 9, 0, 9], 0);
    design.addMove(6, 6, [1, 9, 1, 9], 0);
    design.addMove(6, 6, [7, 9, 7, 9], 0);
    design.addMove(6, 6, [6, 9, 6, 9], 0);
    design.addMove(6, 6, [4, 9, 4, 9], 0);
    design.addMove(6, 6, [5, 9, 5, 9], 0);

    design.addPiece("King", 7, 600000);
    design.addMove(7, 8, [3, 9], 0);
    design.addMove(7, 8, [2, 9], 0);
    design.addMove(7, 8, [0, 9], 0);
    design.addMove(7, 8, [1, 9], 0);
    design.addMove(7, 8, [7, 9], 0);
    design.addMove(7, 8, [6, 9], 0);
    design.addMove(7, 8, [4, 9], 0);
    design.addMove(7, 8, [5, 9], 0);
    design.addMove(7, 9, [1, 1, 1, 0, 0], 0);
    design.addMove(7, 10, [0, 0, 0, 0, 1, 1, 1], 0);

    design.setup("White", "Platform", 8);
    design.setup("White", "Platform", 12);
    design.setup("White", "Platform", 13);
    design.setup("White", "Platform", 14);
    design.setup("White", "Platform", 15);
    design.setup("White", "Platform", 11);
    design.setup("White", "Pawn", 64);
    design.setup("White", "Pawn", 65);
    design.setup("White", "Pawn", 66);
    design.setup("White", "Pawn", 67);
    design.setup("White", "Pawn", 68);
    design.setup("White", "Pawn", 69);
    design.setup("White", "Pawn", 70);
    design.setup("White", "Pawn", 71);
    design.setup("White", "Rook", 72);
    design.setup("White", "Rook", 79);
    design.setup("White", "Knight", 73);
    design.setup("White", "Knight", 78);
    design.setup("White", "Bishop", 74);
    design.setup("White", "Bishop", 77);
    design.setup("White", "Queen", 75);
    design.setup("White", "King", 76);
    design.setup("Black", "Platform", 4);
    design.setup("Black", "Platform", 0);
    design.setup("Black", "Platform", 1);
    design.setup("Black", "Platform", 2);
    design.setup("Black", "Platform", 3);
    design.setup("Black", "Platform", 7);
    design.setup("Black", "Pawn", 24);
    design.setup("Black", "Pawn", 25);
    design.setup("Black", "Pawn", 26);
    design.setup("Black", "Pawn", 27);
    design.setup("Black", "Pawn", 28);
    design.setup("Black", "Pawn", 29);
    design.setup("Black", "Pawn", 30);
    design.setup("Black", "Pawn", 31);
    design.setup("Black", "Rook", 16);
    design.setup("Black", "Rook", 23);
    design.setup("Black", "Knight", 17);
    design.setup("Black", "Knight", 22);
    design.setup("Black", "Bishop", 18);
    design.setup("Black", "Bishop", 21);
    design.setup("Black", "Queen", 19);
    design.setup("Black", "King", 20);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePlatform", "White Platform");
    view.defPiece("BlackPlatform", "Black Platform");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteBomb", "White Bomb");
    view.defPiece("BlackBomb", "Black Bomb");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("ad", 2, 2, 136, 136);
    view.defPosition("bd", 138, 2, 136, 136);
    view.defPosition("cd", 274, 2, 136, 136);
    view.defPosition("dd", 410, 2, 136, 136);
    view.defPosition("ac", 2, 138, 136, 136);
    view.defPosition("bc", 138, 138, 136, 136);
    view.defPosition("cc", 274, 138, 136, 136);
    view.defPosition("dc", 410, 138, 136, 136);
    view.defPosition("ab", 2, 274, 136, 136);
    view.defPosition("bb", 138, 274, 136, 136);
    view.defPosition("cb", 274, 274, 136, 136);
    view.defPosition("db", 410, 274, 136, 136);
    view.defPosition("aa", 2, 410, 136, 136);
    view.defPosition("ba", 138, 410, 136, 136);
    view.defPosition("ca", 274, 410, 136, 136);
    view.defPosition("da", 410, 410, 136, 136);
    view.defPosition("a8", 12, 12, 48, 48);
    view.defPosition("b8", 80, 12, 48, 48);
    view.defPosition("c8", 148, 12, 48, 48);
    view.defPosition("d8", 216, 12, 48, 48);
    view.defPosition("e8", 284, 12, 48, 48);
    view.defPosition("f8", 352, 12, 48, 48);
    view.defPosition("g8", 420, 12, 48, 48);
    view.defPosition("h8", 488, 12, 48, 48);
    view.defPosition("a7", 12, 80, 48, 48);
    view.defPosition("b7", 80, 80, 48, 48);
    view.defPosition("c7", 148, 80, 48, 48);
    view.defPosition("d7", 216, 80, 48, 48);
    view.defPosition("e7", 284, 80, 48, 48);
    view.defPosition("f7", 352, 80, 48, 48);
    view.defPosition("g7", 420, 80, 48, 48);
    view.defPosition("h7", 488, 80, 48, 48);
    view.defPosition("a6", 12, 148, 48, 48);
    view.defPosition("b6", 80, 148, 48, 48);
    view.defPosition("c6", 148, 148, 48, 48);
    view.defPosition("d6", 216, 148, 48, 48);
    view.defPosition("e6", 284, 148, 48, 48);
    view.defPosition("f6", 352, 148, 48, 48);
    view.defPosition("g6", 420, 148, 48, 48);
    view.defPosition("h6", 488, 148, 48, 48);
    view.defPosition("a5", 12, 216, 48, 48);
    view.defPosition("b5", 80, 216, 48, 48);
    view.defPosition("c5", 148, 216, 48, 48);
    view.defPosition("d5", 216, 216, 48, 48);
    view.defPosition("e5", 284, 216, 48, 48);
    view.defPosition("f5", 352, 216, 48, 48);
    view.defPosition("g5", 420, 216, 48, 48);
    view.defPosition("h5", 488, 216, 48, 48);
    view.defPosition("a4", 12, 284, 48, 48);
    view.defPosition("b4", 80, 284, 48, 48);
    view.defPosition("c4", 148, 284, 48, 48);
    view.defPosition("d4", 216, 284, 48, 48);
    view.defPosition("e4", 284, 284, 48, 48);
    view.defPosition("f4", 352, 284, 48, 48);
    view.defPosition("g4", 420, 284, 48, 48);
    view.defPosition("h4", 488, 284, 48, 48);
    view.defPosition("a3", 12, 352, 48, 48);
    view.defPosition("b3", 80, 352, 48, 48);
    view.defPosition("c3", 148, 352, 48, 48);
    view.defPosition("d3", 216, 352, 48, 48);
    view.defPosition("e3", 284, 352, 48, 48);
    view.defPosition("f3", 352, 352, 48, 48);
    view.defPosition("g3", 420, 352, 48, 48);
    view.defPosition("h3", 488, 352, 48, 48);
    view.defPosition("a2", 12, 420, 48, 48);
    view.defPosition("b2", 80, 420, 48, 48);
    view.defPosition("c2", 148, 420, 48, 48);
    view.defPosition("d2", 216, 420, 48, 48);
    view.defPosition("e2", 284, 420, 48, 48);
    view.defPosition("f2", 352, 420, 48, 48);
    view.defPosition("g2", 420, 420, 48, 48);
    view.defPosition("h2", 488, 420, 48, 48);
    view.defPosition("a1", 12, 488, 48, 48);
    view.defPosition("b1", 80, 488, 48, 48);
    view.defPosition("c1", 148, 488, 48, 48);
    view.defPosition("d1", 216, 488, 48, 48);
    view.defPosition("e1", 284, 488, 48, 48);
    view.defPosition("f1", 352, 488, 48, 48);
    view.defPosition("g1", 420, 488, 48, 48);
    view.defPosition("h1", 488, 488, 48, 48);

    view.defPopup("Promote", 127, 150);
    view.defPopupPosition("X1", 10, 7, 68, 68);
    view.defPopupPosition("X2", 80, 7, 68, 68);
    view.defPopupPosition("X3", 150, 7, 68, 68);
    view.defPopupPosition("X4", 220, 7, 68, 68);
}
