Dagaz.View.TARGET_FLAT       =  true;
Dagaz.View.TARGET_RADIUS     =  2.5;
Dagaz.Controller.persistense = "setup";

Dagaz.View.RECT_OPACITY      = true;

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

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(10, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(11, "../sounds/shoot.wav", true);
}

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
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
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
    design.setup("Black", "Platform", 4);
    design.setup("Black", "Platform", 0);
    design.setup("Black", "Platform", 1);
    design.setup("Black", "Platform", 2);
    design.setup("Black", "Platform", 3);
    design.setup("Black", "Platform", 7);

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
    const opacity = 0.9;
    const modelPath = '../res/fairy';
    const white = '#FFFF63';
    const black = '#333333';

    view.defPiecePlatform(0, 1, 136, 136, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "WhitePlatform", opacity);
    view.defPiecePlatform(0, 2, 136, 136, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "BlackPlatform", opacity);

    view.defPieceModel(1, 1, modelPath, 'pawn', white);
    view.defPieceModel(1, 2, modelPath, 'pawn', black);
    view.defPieceModel(2, 1, modelPath, 'rhino', white);
    view.defPieceModel(2, 2, modelPath, 'rhino', black);
    view.defPieceModel(3, 1, modelPath, 'rook', white);
    view.defPieceModel(3, 2, modelPath, 'rook', black);
    view.defPieceModel(4, 1, modelPath, 'knight', white);
    view.defPieceModel(4, 2, modelPath, 'knight', black);
    view.defPieceModel(5, 1, modelPath, 'bishop', white);
    view.defPieceModel(5, 2, modelPath, 'bishop', black);
    view.defPieceModel(6, 1, modelPath, 'queen', white);
    view.defPieceModel(6, 2, modelPath, 'queen', black);
    view.defPieceModel(7, 1, modelPath, 'king', white);
    view.defPieceModel(7, 2, modelPath, 'king', black);

    view.setCamera(0, 0, 0, -109, 215, 155);
 
    view.defControl("InfoControl", "2001 Robert Price", true, Dagaz.Controller.open, 'https://www.zillions-of-games.com/cgi-bin/zilligames/submissions.cgi?do=show;id=712');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl("ResControl", "3D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'platform-chess.htm' : 'platform-chess-board.htm');
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'platform-chess-3d-board.htm' : 'platform-chess-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("ad", -202, -202, 136, 136, -5);
    view.defPosition("bd", -66, -202, 136, 136, -5);
    view.defPosition("cd", 70, -202, 136, 136, -5);
    view.defPosition("dd", 206, -202, 136, 136, -5);
    view.defPosition("ac", -202, -66, 136, 136, -5);
    view.defPosition("bc", -66, -66, 136, 136, -5);
    view.defPosition("cc", 70, -66, 136, 136, -5);
    view.defPosition("dc", 206, -66, 136, 136, -5);
    view.defPosition("ab", -202, 70, 136, 136, -5);
    view.defPosition("bb", -66, 70, 136, 136, -5);
    view.defPosition("cb", 70, 70, 136, 136, -5);
    view.defPosition("db", 206, 70, 136, 136, -5);
    view.defPosition("aa", -202, 206, 136, 136, -5);
    view.defPosition("ba", -66, 206, 136, 136, -5);
    view.defPosition("ca", 70, 206, 136, 136, -5);
    view.defPosition("da", 206, 206, 136, 136, -5);

    view.defPosition("a8", -236, -236, 68, 68, -3);
    view.defPosition("b8", -168, -236, 68, 68, -3);
    view.defPosition("c8", -100, -236, 68, 68, -3);
    view.defPosition("d8", -32, -236, 68, 68, -3);
    view.defPosition("e8", 36, -236, 68, 68, -3);
    view.defPosition("f8", 104, -236, 68, 68, -3);
    view.defPosition("g8", 172, -236, 68, 68, -3);
    view.defPosition("h8", 240, -236, 68, 68, -3);
    view.defPosition("a7", -236, -168, 68, 68, -3);
    view.defPosition("b7", -168, -168, 68, 68, -3);
    view.defPosition("c7", -100, -168, 68, 68, -3);
    view.defPosition("d7", -32, -168, 68, 68, -3);
    view.defPosition("e7", 36, -168, 68, 68, -3);
    view.defPosition("f7", 104, -168, 68, 68, -3);
    view.defPosition("g7", 172, -168, 68, 68, -3);
    view.defPosition("h7", 240, -168, 68, 68, -3);
    view.defPosition("a6", -236, -100, 68, 68, -3);
    view.defPosition("b6", -168, -100, 68, 68, -3);
    view.defPosition("c6", -100, -100, 68, 68, -3);
    view.defPosition("d6", -32, -100, 68, 68, -3);
    view.defPosition("e6", 36, -100, 68, 68, -3);
    view.defPosition("f6", 104, -100, 68, 68, -3);
    view.defPosition("g6", 172, -100, 68, 68, -3);
    view.defPosition("h6", 240, -100, 68, 68, -3);
    view.defPosition("a5", -236, -32, 68, 68, -3);
    view.defPosition("b5", -168, -32, 68, 68, -3);
    view.defPosition("c5", -100, -32, 68, 68, -3);
    view.defPosition("d5", -32, -32, 68, 68, -3);
    view.defPosition("e5", 36, -32, 68, 68, -3);
    view.defPosition("f5", 104, -32, 68, 68, -3);
    view.defPosition("g5", 172, -32, 68, 68, -3);
    view.defPosition("h5", 240, -32, 68, 68, -3);
    view.defPosition("a4", -236, 36, 68, 68, -3);
    view.defPosition("b4", -168, 36, 68, 68, -3);
    view.defPosition("c4", -100, 36, 68, 68, -3);
    view.defPosition("d4", -32, 36, 68, 68, -3);
    view.defPosition("e4", 36, 36, 68, 68, -3);
    view.defPosition("f4", 104, 36, 68, 68, -3);
    view.defPosition("g4", 172, 36, 68, 68, -3);
    view.defPosition("h4", 240, 36, 68, 68, -3);
    view.defPosition("a3", -236, 104, 68, 68, -3);
    view.defPosition("b3", -168, 104, 68, 68, -3);
    view.defPosition("c3", -100, 104, 68, 68, -3);
    view.defPosition("d3", -32, 104, 68, 68, -3);
    view.defPosition("e3", 36, 104, 68, 68, -3);
    view.defPosition("f3", 104, 104, 68, 68, -3);
    view.defPosition("g3", 172, 104, 68, 68, -3);
    view.defPosition("h3", 240, 104, 68, 68, -3);
    view.defPosition("a2", -236, 172, 68, 68, -3);
    view.defPosition("b2", -168, 172, 68, 68, -3);
    view.defPosition("c2", -100, 172, 68, 68, -3);
    view.defPosition("d2", -32, 172, 68, 68, -3);
    view.defPosition("e2", 36, 172, 68, 68, -3);
    view.defPosition("f2", 104, 172, 68, 68, -3);
    view.defPosition("g2", 172, 172, 68, 68, -3);
    view.defPosition("h2", 240, 172, 68, 68, -3);
    view.defPosition("a1", -236, 240, 68, 68, -3);
    view.defPosition("b1", -168, 240, 68, 68, -3);
    view.defPosition("c1", -100, 240, 68, 68, -3);
    view.defPosition("d1", -32, 240, 68, 68, -3);
    view.defPosition("e1", 36, 240, 68, 68, -3);
    view.defPosition("f1", 104, 240, 68, 68, -3);
    view.defPosition("g1", 172, 240, 68, 68, -3);
    view.defPosition("h1", 240, 240, 68, 68, -3);
}
