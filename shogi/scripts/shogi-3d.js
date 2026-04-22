Dagaz.View.TARGET_FLAT       =  true;
Dagaz.View.TARGET_RADIUS     =  1.8;
Dagaz.Controller.persistense = "setup";

Dagaz.AI.g_timeout           = 5000;

Dagaz.Model.WIDTH            = 9;
Dagaz.Model.HEIGHT           = 9;
Dagaz.AI.RESERVE_SIZE        = 3;

Dagaz.AI.WHITE_PROM          = 0x40;
Dagaz.AI.BLACK_PROM          = 0x80;

Dagaz.Model.PROM_IS_FORCED   = true;

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
    design.checkVersion("promote-dialog", "remap");
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("shogi-extension", "true");
    design.checkVersion("shogi-promotion", "true");
    design.checkVersion("common-shogi-invariant", "true");
    design.checkVersion("shogi-invariant", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("sr");
    design.addDirection("nr");
    design.addDirection("nx");

    design.addPlayer("South", [1, 0, 4, 6, 2, 7, 3, 5, 8, 9, 10]);
    design.addPlayer("North", [1, 0, 4, 6, 2, 7, 3, 5, 9, 8, 10]);

    design.addPosition("X9", [0, 1, 17, 0, 0, 18, 0, 0, 1, 19, 0]);
    design.addPosition("Y9", [-1, 1, 17, 0, 0, 18, 16, 0, 1, -1, 0]);
    design.addPosition("Z9", [-1, 0, 17, 0, 0, 0, 16, 0, 0, -1, 0]);
    design.addPosition("I9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [0, 1, 17, 0, 0, 18, 0, 0, 146, -2, 137]);
    design.addPosition("b9", [-1, 1, 17, 0, 0, 18, 16, 0, 145, -3, 137]);
    design.addPosition("c9", [-1, 1, 17, 0, 0, 18, 16, 0, 144, -4, 137]);
    design.addPosition("d9", [-1, 1, 17, 0, 0, 18, 16, 0, 143, -5, 137]);
    design.addPosition("e9", [-1, 1, 17, 0, 0, 18, 16, 0, 142, -6, 137]);
    design.addPosition("f9", [-1, 1, 17, 0, 0, 18, 16, 0, 141, -7, 137]);
    design.addPosition("g9", [-1, 1, 17, 0, 0, 18, 16, 0, 140, -8, 137]);
    design.addPosition("h9", [-1, 1, 17, 0, 0, 18, 16, 0, 139, -9, 137]);
    design.addPosition("i9", [-1, 0, 17, 0, 0, 0, 16, 0, 138, -10, 0]);
    design.addPosition("J9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("U9", [0, 1, 17, 0, 0, 18, 0, 0, 1, 19, 0]);
    design.addPosition("V9", [-1, 1, 17, 0, 0, 18, 16, 0, 1, -1, 0]);
    design.addPosition("W9", [-1, 0, 17, 0, 0, 0, 16, 0, 120, -1, 0]);
    design.addPosition("X8", [0, 1, 17, -16, -17, 18, 0, 0, 1, 19, 0]);
    design.addPosition("Y8", [-1, 1, 17, -16, -17, 18, 16, -18, 1, -1, 0]);
    design.addPosition("Z8", [-1, 0, 17, 0, -17, 0, 16, -18, -19, -1, 0]);
    design.addPosition("I8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [0, 1, 17, -16, -17, 18, 0, 0, 129, -19, -17]);
    design.addPosition("b8", [-1, 1, 17, -16, -17, 18, 16, -18, 128, -20, -17]);
    design.addPosition("c8", [-1, 1, 17, -16, -17, 18, 16, -18, 127, -21, -17]);
    design.addPosition("d8", [-1, 1, 17, -16, -17, 18, 16, -18, 126, -22, -17]);
    design.addPosition("e8", [-1, 1, 17, -16, -17, 18, 16, -18, 125, -23, -17]);
    design.addPosition("f8", [-1, 1, 17, -16, -17, 18, 16, -18, 124, -24, -17]);
    design.addPosition("g8", [-1, 1, 17, -16, -17, 18, 16, -18, 123, -25, -17]);
    design.addPosition("h8", [-1, 1, 17, -16, -17, 18, 16, -18, 122, -26, -17]);
    design.addPosition("i8", [-1, 0, 17, 0, -17, 0, 16, -18, 121, -27, -17]);
    design.addPosition("J8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("U8", [0, 1, 17, -16, -17, 18, 0, 0, 1, 19, 0]);
    design.addPosition("V8", [-1, 1, 17, -16, -17, 18, 16, -18, 1, -1, 0]);
    design.addPosition("W8", [-1, 0, 17, 0, -17, 0, 16, -18, -19, -1, 0]);
    design.addPosition("X7", [0, 1, 17, -16, -17, 18, 0, 0, 1, 19, 0]);
    design.addPosition("Y7", [-1, 1, 17, -16, -17, 18, 16, -18, 1, -1, 0]);
    design.addPosition("Z7", [-1, 0, 17, 0, -17, 0, 16, -18, -19, -1, 0]);
    design.addPosition("I7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 1, 17, -16, -17, 18, 0, 0, 112, -36, -17]);
    design.addPosition("b7", [-1, 1, 17, -16, -17, 18, 16, -18, 111, -37, -17]);
    design.addPosition("c7", [-1, 1, 17, -16, -17, 18, 16, -18, 110, -38, -17]);
    design.addPosition("d7", [-1, 1, 17, -16, -17, 18, 16, -18, 109, -39, -17]);
    design.addPosition("e7", [-1, 1, 17, -16, -17, 18, 16, -18, 108, -40, -17]);
    design.addPosition("f7", [-1, 1, 17, -16, -17, 18, 16, -18, 107, -41, -17]);
    design.addPosition("g7", [-1, 1, 17, -16, -17, 18, 16, -18, 106, -42, -17]);
    design.addPosition("h7", [-1, 1, 17, -16, -17, 18, 16, -18, 105, -43, -17]);
    design.addPosition("i7", [-1, 0, 17, 0, -17, 0, 16, -18, 104, -44, -17]);
    design.addPosition("J7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("U7", [0, 1, 17, -16, -17, 18, 0, 0, 1, 19, 0]);
    design.addPosition("V7", [-1, 1, 17, -16, -17, 18, 16, -18, 1, -1, 0]);
    design.addPosition("W7", [-1, 0, 17, 0, -17, 0, 16, -18, -19, -1, 0]);
    design.addPosition("X6", [0, 1, 17, -16, -17, 18, 0, 0, 1, 19, 0]);
    design.addPosition("Y6", [-1, 1, 17, -16, -17, 18, 16, -18, 1, -1, 0]);
    design.addPosition("Z6", [-1, 0, 17, 0, -17, 0, 16, -18, -19, -1, 0]);
    design.addPosition("I6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 1, 17, -16, -17, 18, 0, 0, 95, -53, -17]);
    design.addPosition("b6", [-1, 1, 17, -16, -17, 18, 16, -18, 94, -54, -17]);
    design.addPosition("c6", [-1, 1, 17, -16, -17, 18, 16, -18, 93, -55, -17]);
    design.addPosition("d6", [-1, 1, 17, -16, -17, 18, 16, -18, 92, -56, -17]);
    design.addPosition("e6", [-1, 1, 17, -16, -17, 18, 16, -18, 91, -57, -17]);
    design.addPosition("f6", [-1, 1, 17, -16, -17, 18, 16, -18, 90, -58, -17]);
    design.addPosition("g6", [-1, 1, 17, -16, -17, 18, 16, -18, 89, -59, -17]);
    design.addPosition("h6", [-1, 1, 17, -16, -17, 18, 16, -18, 88, -60, -17]);
    design.addPosition("i6", [-1, 0, 17, 0, -17, 0, 16, -18, 87, -61, -17]);
    design.addPosition("J6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("U6", [0, 1, 17, -16, -17, 18, 0, 0, 1, 19, 0]);
    design.addPosition("V6", [-1, 1, 17, -16, -17, 18, 16, -18, 1, -1, 0]);
    design.addPosition("W6", [-1, 0, 17, 0, -17, 0, 16, -18, -19, -1, 0]);
    design.addPosition("X5", [0, 1, 17, -16, -17, 18, 0, 0, 1, 19, 0]);
    design.addPosition("Y5", [-1, 1, 17, -16, -17, 18, 16, -18, 1, -1, 0]);
    design.addPosition("Z5", [-1, 0, 17, 0, -17, 0, 16, -18, -19, -1, 0]);
    design.addPosition("I5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 1, 17, -16, -17, 18, 0, 0, 78, -70, -17]);
    design.addPosition("b5", [-1, 1, 17, -16, -17, 18, 16, -18, 77, -71, -17]);
    design.addPosition("c5", [-1, 1, 17, -16, -17, 18, 16, -18, 76, -72, -17]);
    design.addPosition("d5", [-1, 1, 17, -16, -17, 18, 16, -18, 75, -73, -17]);
    design.addPosition("e5", [-1, 1, 17, -16, -17, 18, 16, -18, 74, -74, -17]);
    design.addPosition("f5", [-1, 1, 17, -16, -17, 18, 16, -18, 73, -75, -17]);
    design.addPosition("g5", [-1, 1, 17, -16, -17, 18, 16, -18, 72, -76, -17]);
    design.addPosition("h5", [-1, 1, 17, -16, -17, 18, 16, -18, 71, -77, -17]);
    design.addPosition("i5", [-1, 0, 17, 0, -17, 0, 16, -18, 70, -78, -17]);
    design.addPosition("J5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("U5", [0, 1, 17, -16, -17, 18, 0, 0, 1, 19, 0]);
    design.addPosition("V5", [-1, 1, 17, -16, -17, 18, 16, -18, 1, -1, 0]);
    design.addPosition("W5", [-1, 0, 17, 0, -17, 0, 16, -18, -19, -1, 0]);
    design.addPosition("X4", [0, 1, 17, -16, -17, 18, 0, 0, 1, 19, 0]);
    design.addPosition("Y4", [-1, 1, 17, -16, -17, 18, 16, -18, 1, -1, 0]);
    design.addPosition("Z4", [-1, 0, 17, 0, -17, 0, 16, -18, -19, -1, 0]);
    design.addPosition("I4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 1, 17, -16, -17, 18, 0, 0, 61, -87, -17]);
    design.addPosition("b4", [-1, 1, 17, -16, -17, 18, 16, -18, 60, -88, -17]);
    design.addPosition("c4", [-1, 1, 17, -16, -17, 18, 16, -18, 59, -89, -17]);
    design.addPosition("d4", [-1, 1, 17, -16, -17, 18, 16, -18, 58, -90, -17]);
    design.addPosition("e4", [-1, 1, 17, -16, -17, 18, 16, -18, 57, -91, -17]);
    design.addPosition("f4", [-1, 1, 17, -16, -17, 18, 16, -18, 56, -92, -17]);
    design.addPosition("g4", [-1, 1, 17, -16, -17, 18, 16, -18, 55, -93, -17]);
    design.addPosition("h4", [-1, 1, 17, -16, -17, 18, 16, -18, 54, -94, -17]);
    design.addPosition("i4", [-1, 0, 17, 0, -17, 0, 16, -18, 53, -95, -17]);
    design.addPosition("J4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("U4", [0, 1, 17, -16, -17, 18, 0, 0, 1, 19, 0]);
    design.addPosition("V4", [-1, 1, 17, -16, -17, 18, 16, -18, 1, -1, 0]);
    design.addPosition("W4", [-1, 0, 17, 0, -17, 0, 16, -18, -19, -1, 0]);
    design.addPosition("X3", [0, 1, 17, -16, -17, 18, 0, 0, 1, 19, 0]);
    design.addPosition("Y3", [-1, 1, 17, -16, -17, 18, 16, -18, 1, -1, 0]);
    design.addPosition("Z3", [-1, 0, 17, 0, -17, 0, 16, -18, -19, -1, 0]);
    design.addPosition("I3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 1, 17, -16, -17, 18, 0, 0, 44, -104, -17]);
    design.addPosition("b3", [-1, 1, 17, -16, -17, 18, 16, -18, 43, -105, -17]);
    design.addPosition("c3", [-1, 1, 17, -16, -17, 18, 16, -18, 42, -106, -17]);
    design.addPosition("d3", [-1, 1, 17, -16, -17, 18, 16, -18, 41, -107, -17]);
    design.addPosition("e3", [-1, 1, 17, -16, -17, 18, 16, -18, 40, -108, -17]);
    design.addPosition("f3", [-1, 1, 17, -16, -17, 18, 16, -18, 39, -109, -17]);
    design.addPosition("g3", [-1, 1, 17, -16, -17, 18, 16, -18, 38, -110, -17]);
    design.addPosition("h3", [-1, 1, 17, -16, -17, 18, 16, -18, 37, -111, -17]);
    design.addPosition("i3", [-1, 0, 17, 0, -17, 0, 16, -18, 36, -112, -17]);
    design.addPosition("J3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("U3", [0, 1, 17, -16, -17, 18, 0, 0, 1, 19, 0]);
    design.addPosition("V3", [-1, 1, 17, -16, -17, 18, 16, -18, 1, -1, 0]);
    design.addPosition("W3", [-1, 0, 17, 0, -17, 0, 16, -18, -19, -1, 0]);
    design.addPosition("X2", [0, 1, 17, -16, -17, 18, 0, 0, 1, 19, 0]);
    design.addPosition("Y2", [-1, 1, 17, -16, -17, 18, 16, -18, 1, -1, 0]);
    design.addPosition("Z2", [-1, 0, 17, 0, -17, 0, 16, -18, -19, -1, 0]);
    design.addPosition("I2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 1, 17, -16, -17, 18, 0, 0, 27, -121, -17]);
    design.addPosition("b2", [-1, 1, 17, -16, -17, 18, 16, -18, 26, -122, -17]);
    design.addPosition("c2", [-1, 1, 17, -16, -17, 18, 16, -18, 25, -123, -17]);
    design.addPosition("d2", [-1, 1, 17, -16, -17, 18, 16, -18, 24, -124, -17]);
    design.addPosition("e2", [-1, 1, 17, -16, -17, 18, 16, -18, 23, -125, -17]);
    design.addPosition("f2", [-1, 1, 17, -16, -17, 18, 16, -18, 22, -126, -17]);
    design.addPosition("g2", [-1, 1, 17, -16, -17, 18, 16, -18, 21, -127, -17]);
    design.addPosition("h2", [-1, 1, 17, -16, -17, 18, 16, -18, 20, -128, -17]);
    design.addPosition("i2", [-1, 0, 17, 0, -17, 0, 16, -18, 19, -129, -17]);
    design.addPosition("J2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("U2", [0, 1, 17, -16, -17, 18, 0, 0, 1, 19, 0]);
    design.addPosition("V2", [-1, 1, 17, -16, -17, 18, 16, -18, 1, -1, 0]);
    design.addPosition("W2", [-1, 0, 17, 0, -17, 0, 16, -18, -19, -1, 0]);
    design.addPosition("X1", [0, 1, 0, -16, -17, 0, 0, 0, 1, -120, 0]);
    design.addPosition("Y1", [-1, 1, 0, -16, -17, 0, 0, -18, 1, -1, 0]);
    design.addPosition("Z1", [-1, 0, 0, 0, -17, 0, 0, -18, -19, -1, 0]);
    design.addPosition("I1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, -16, -17, 0, 0, 0, 10, -138, -17]);
    design.addPosition("b1", [-1, 1, 0, -16, -17, 0, 0, -18, 9, -139, -17]);
    design.addPosition("c1", [-1, 1, 0, -16, -17, 0, 0, -18, 8, -140, -17]);
    design.addPosition("d1", [-1, 1, 0, -16, -17, 0, 0, -18, 7, -141, -17]);
    design.addPosition("e1", [-1, 1, 0, -16, -17, 0, 0, -18, 6, -142, -17]);
    design.addPosition("f1", [-1, 1, 0, -16, -17, 0, 0, -18, 5, -143, -17]);
    design.addPosition("g1", [-1, 1, 0, -16, -17, 0, 0, -18, 4, -144, -17]);
    design.addPosition("h1", [-1, 1, 0, -16, -17, 0, 0, -18, 3, -145, -17]);
    design.addPosition("i1", [-1, 0, 0, 0, -17, 0, 0, -18, 2, -146, -17]);
    design.addPosition("J1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("U1", [0, 1, 0, -16, -17, 0, 0, 0, 1, 0, 0]);
    design.addPosition("V1", [-1, 1, 0, -16, -17, 0, 0, -18, 1, -1, 0]);
    design.addPosition("W1", [-1, 0, 0, 0, -17, 0, 0, -18, -19, -1, 0]);

    design.addZone("board-zone", 2, [140, 141, 142, 143, 144, 145, 146, 147, 148, 123, 124, 125, 126, 127, 128, 129, 130, 131, 106, 107, 108, 109, 110, 111, 112, 113, 114, 89, 90, 91, 92, 93, 94, 95, 96, 97, 72, 73, 74, 75, 76, 77, 78, 79, 80, 55, 56, 57, 58, 59, 60, 61, 62, 63, 38, 39, 40, 41, 42, 43, 44, 45, 46, 21, 22, 23, 24, 25, 26, 27, 28, 29, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addZone("board-zone", 1, [140, 141, 142, 143, 144, 145, 146, 147, 148, 123, 124, 125, 126, 127, 128, 129, 130, 131, 106, 107, 108, 109, 110, 111, 112, 113, 114, 89, 90, 91, 92, 93, 94, 95, 96, 97, 72, 73, 74, 75, 76, 77, 78, 79, 80, 55, 56, 57, 58, 59, 60, 61, 62, 63, 38, 39, 40, 41, 42, 43, 44, 45, 46, 21, 22, 23, 24, 25, 26, 27, 28, 29, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addZone("promotion-zone", 2, [140, 141, 142, 143, 144, 145, 146, 147, 148, 123, 124, 125, 126, 127, 128, 129, 130, 131, 106, 107, 108, 109, 110, 111, 112, 113, 114]);
    design.addZone("promotion-zone", 1, [4, 5, 6, 7, 8, 9, 10, 11, 12, 21, 22, 23, 24, 25, 26, 27, 28, 29, 38, 39, 40, 41, 42, 43, 44, 45, 46]);

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
    design.addCommand(1, ZRF.ON_BOARD_DIR,	10);	// name
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
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	7);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-8);
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPiece("King", 0, 1000);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [3], 0);

    design.addPiece("Gold", 1, 18);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 1, [140, 10], 0);

    design.addPiece("Silver", 2, 16);
    design.addMove(2, 0, [7], 0);
    design.addMove(2, 0, [6], 0);
    design.addMove(2, 0, [5], 0);
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [4], 0);
    design.addMove(2, 1, [140, 10], 0);

    design.addPiece("Knight", 3, 12);
    design.addMove(3, 2, [4, 7], 0);
    design.addMove(3, 2, [4, 3], 0);
    design.addMove(3, 1, [140, 10], 0);

    design.addPiece("Lance", 4, 10);
    design.addMove(4, 3, [4, 4], 0);
    design.addMove(4, 1, [140, 10], 0);

    design.addPiece("Bishop", 5, 26);
    design.addMove(5, 3, [7, 7], 0);
    design.addMove(5, 3, [5, 5], 0);
    design.addMove(5, 3, [6, 6], 0);
    design.addMove(5, 3, [3, 3], 0);
    design.addMove(5, 1, [140, 10], 0);

    design.addPiece("Rook", 6, 30);
    design.addMove(6, 3, [4, 4], 0);
    design.addMove(6, 3, [1, 1], 0);
    design.addMove(6, 3, [0, 0], 0);
    design.addMove(6, 3, [2, 2], 0);
    design.addMove(6, 1, [140, 10], 0);

    design.addPiece("Pawn", 7, 1);
    design.addMove(7, 0, [4], 0);
    design.addMove(7, 1, [140, 10], 0);

    design.addPiece("SilverP", 8, 18);
    design.addMove(8, 0, [4], 0);
    design.addMove(8, 0, [7], 0);
    design.addMove(8, 0, [2], 0);
    design.addMove(8, 0, [3], 0);
    design.addMove(8, 0, [0], 0);
    design.addMove(8, 0, [1], 0);

    design.addPiece("KnightP", 9, 18);
    design.addMove(9, 0, [4], 0);
    design.addMove(9, 0, [7], 0);
    design.addMove(9, 0, [2], 0);
    design.addMove(9, 0, [3], 0);
    design.addMove(9, 0, [0], 0);
    design.addMove(9, 0, [1], 0);

    design.addPiece("LanceP", 10, 20);
    design.addMove(10, 0, [4], 0);
    design.addMove(10, 0, [7], 0);
    design.addMove(10, 0, [2], 0);
    design.addMove(10, 0, [3], 0);
    design.addMove(10, 0, [0], 0);
    design.addMove(10, 0, [1], 0);

    design.addPiece("BishopP", 11, 30);
    design.addMove(11, 3, [7, 7], 0);
    design.addMove(11, 0, [4], 0);
    design.addMove(11, 3, [5, 5], 0);
    design.addMove(11, 0, [2], 0);
    design.addMove(11, 3, [6, 6], 0);
    design.addMove(11, 0, [0], 0);
    design.addMove(11, 3, [3, 3], 0);
    design.addMove(11, 0, [1], 0);

    design.addPiece("RookP", 12, 34);
    design.addMove(12, 3, [4, 4], 0);
    design.addMove(12, 0, [7], 0);
    design.addMove(12, 3, [1, 1], 0);
    design.addMove(12, 0, [3], 0);
    design.addMove(12, 3, [0, 0], 0);
    design.addMove(12, 0, [6], 0);
    design.addMove(12, 3, [2, 2], 0);
    design.addMove(12, 0, [5], 0);

    design.addPiece("PawnP", 13, 18);
    design.addMove(13, 0, [4], 0);
    design.addMove(13, 0, [7], 0);
    design.addMove(13, 0, [2], 0);
    design.addMove(13, 0, [3], 0);
    design.addMove(13, 0, [0], 0);
    design.addMove(13, 0, [1], 0);

    design.setupSelector(11);

    design.setup("South", "King", 144, 1);
    design.setup("South", "Gold", 143, 1);
    design.setup("South", "Gold", 145, 1);
    design.setup("South", "Silver", 142, 1);
    design.setup("South", "Silver", 146, 1);
    design.setup("South", "Knight", 141, 1);
    design.setup("South", "Knight", 147, 1);
    design.setup("South", "Lance", 140, 1);
    design.setup("South", "Lance", 148, 1);
    design.setup("South", "Bishop", 124, 1);
    design.setup("South", "Rook", 130, 1);
    design.setup("South", "Pawn", 106, 1);
    design.setup("South", "Pawn", 107, 1);
    design.setup("South", "Pawn", 108, 1);
    design.setup("South", "Pawn", 109, 1);
    design.setup("South", "Pawn", 110, 1);
    design.setup("South", "Pawn", 111, 1);
    design.setup("South", "Pawn", 112, 1);
    design.setup("South", "Pawn", 113, 1);
    design.setup("South", "Pawn", 114, 1);
    design.setup("North", "King", 8, 1);
    design.setup("North", "Gold", 7, 1);
    design.setup("North", "Gold", 9, 1);
    design.setup("North", "Silver", 6, 1);
    design.setup("North", "Silver", 10, 1);
    design.setup("North", "Knight", 5, 1);
    design.setup("North", "Knight", 11, 1);
    design.setup("North", "Lance", 4, 1);
    design.setup("North", "Lance", 12, 1);
    design.setup("North", "Bishop", 28, 1);
    design.setup("North", "Rook", 22, 1);
    design.setup("North", "Pawn", 38, 1);
    design.setup("North", "Pawn", 39, 1);
    design.setup("North", "Pawn", 40, 1);
    design.setup("North", "Pawn", 41, 1);
    design.setup("North", "Pawn", 42, 1);
    design.setup("North", "Pawn", 43, 1);
    design.setup("North", "Pawn", 44, 1);
    design.setup("North", "Pawn", 45, 1);
    design.setup("North", "Pawn", 46, 1);

    design.setup("South", "King", 144, 2);
    design.setup("South", "Gold", 143, 2);
    design.setup("South", "Gold", 145, 2);
    design.setup("South", "Silver", 142, 2);
    design.setup("South", "Silver", 146, 2);
    design.setup("South", "Knight", 141, 2);
    design.setup("South", "Knight", 147, 2);
    design.setup("South", "Lance", 148, 2);
    design.setup("South", "Bishop", 124, 2);
    design.setup("South", "Rook", 130, 2);
    design.setup("South", "Pawn", 106, 2);
    design.setup("South", "Pawn", 107, 2);
    design.setup("South", "Pawn", 108, 2);
    design.setup("South", "Pawn", 109, 2);
    design.setup("South", "Pawn", 110, 2);
    design.setup("South", "Pawn", 111, 2);
    design.setup("South", "Pawn", 112, 2);
    design.setup("South", "Pawn", 113, 2);
    design.setup("South", "Pawn", 114, 2);
    design.setup("North", "King", 8, 2);
    design.setup("North", "Gold", 7, 2);
    design.setup("North", "Gold", 9, 2);
    design.setup("North", "Silver", 6, 2);
    design.setup("North", "Silver", 10, 2);
    design.setup("North", "Knight", 5, 2);
    design.setup("North", "Knight", 11, 2);
    design.setup("North", "Lance", 4, 2);
    design.setup("North", "Lance", 12, 2);
    design.setup("North", "Bishop", 28, 2);
    design.setup("North", "Rook", 22, 2);
    design.setup("North", "Pawn", 38, 2);
    design.setup("North", "Pawn", 39, 2);
    design.setup("North", "Pawn", 40, 2);
    design.setup("North", "Pawn", 41, 2);
    design.setup("North", "Pawn", 42, 2);
    design.setup("North", "Pawn", 43, 2);
    design.setup("North", "Pawn", 44, 2);
    design.setup("North", "Pawn", 45, 2);
    design.setup("North", "Pawn", 46, 2);

    design.setup("South", "King", 144, 3);
    design.setup("South", "Gold", 143, 3);
    design.setup("South", "Gold", 145, 3);
    design.setup("South", "Silver", 142, 3);
    design.setup("South", "Silver", 146, 3);
    design.setup("South", "Knight", 141, 3);
    design.setup("South", "Knight", 147, 3);
    design.setup("South", "Lance", 140, 3);
    design.setup("South", "Lance", 148, 3);
    design.setup("South", "Rook", 130, 3);
    design.setup("South", "Pawn", 106, 3);
    design.setup("South", "Pawn", 107, 3);
    design.setup("South", "Pawn", 108, 3);
    design.setup("South", "Pawn", 109, 3);
    design.setup("South", "Pawn", 110, 3);
    design.setup("South", "Pawn", 111, 3);
    design.setup("South", "Pawn", 112, 3);
    design.setup("South", "Pawn", 113, 3);
    design.setup("South", "Pawn", 114, 3);
    design.setup("North", "King", 8, 3);
    design.setup("North", "Gold", 7, 3);
    design.setup("North", "Gold", 9, 3);
    design.setup("North", "Silver", 6, 3);
    design.setup("North", "Silver", 10, 3);
    design.setup("North", "Knight", 5, 3);
    design.setup("North", "Knight", 11, 3);
    design.setup("North", "Lance", 4, 3);
    design.setup("North", "Lance", 12, 3);
    design.setup("North", "Bishop", 28, 3);
    design.setup("North", "Rook", 22, 3);
    design.setup("North", "Pawn", 38, 3);
    design.setup("North", "Pawn", 39, 3);
    design.setup("North", "Pawn", 40, 3);
    design.setup("North", "Pawn", 41, 3);
    design.setup("North", "Pawn", 42, 3);
    design.setup("North", "Pawn", 43, 3);
    design.setup("North", "Pawn", 44, 3);
    design.setup("North", "Pawn", 45, 3);
    design.setup("North", "Pawn", 46, 3);

    design.setup("South", "King", 144, 4);
    design.setup("South", "Gold", 143, 4);
    design.setup("South", "Gold", 145, 4);
    design.setup("South", "Silver", 142, 4);
    design.setup("South", "Silver", 146, 4);
    design.setup("South", "Knight", 141, 4);
    design.setup("South", "Knight", 147, 4);
    design.setup("South", "Lance", 140, 4);
    design.setup("South", "Lance", 148, 4);
    design.setup("South", "Bishop", 124, 4);
    design.setup("South", "Pawn", 106, 4);
    design.setup("South", "Pawn", 107, 4);
    design.setup("South", "Pawn", 108, 4);
    design.setup("South", "Pawn", 109, 4);
    design.setup("South", "Pawn", 110, 4);
    design.setup("South", "Pawn", 111, 4);
    design.setup("South", "Pawn", 112, 4);
    design.setup("South", "Pawn", 113, 4);
    design.setup("South", "Pawn", 114, 4);
    design.setup("North", "King", 8, 4);
    design.setup("North", "Gold", 7, 4);
    design.setup("North", "Gold", 9, 4);
    design.setup("North", "Silver", 6, 4);
    design.setup("North", "Silver", 10, 4);
    design.setup("North", "Knight", 5, 4);
    design.setup("North", "Knight", 11, 4);
    design.setup("North", "Lance", 4, 4);
    design.setup("North", "Lance", 12, 4);
    design.setup("North", "Bishop", 28, 4);
    design.setup("North", "Rook", 22, 4);
    design.setup("North", "Pawn", 38, 4);
    design.setup("North", "Pawn", 39, 4);
    design.setup("North", "Pawn", 40, 4);
    design.setup("North", "Pawn", 41, 4);
    design.setup("North", "Pawn", 42, 4);
    design.setup("North", "Pawn", 43, 4);
    design.setup("North", "Pawn", 44, 4);
    design.setup("North", "Pawn", 45, 4);
    design.setup("North", "Pawn", 46, 4);

    design.setup("South", "King", 144, 5);
    design.setup("South", "Gold", 143, 5);
    design.setup("South", "Gold", 145, 5);
    design.setup("South", "Silver", 142, 5);
    design.setup("South", "Silver", 146, 5);
    design.setup("South", "Knight", 141, 5);
    design.setup("South", "Knight", 147, 5);
    design.setup("South", "Lance", 148, 5);
    design.setup("South", "Bishop", 124, 5);
    design.setup("South", "Pawn", 106, 5);
    design.setup("South", "Pawn", 107, 5);
    design.setup("South", "Pawn", 108, 5);
    design.setup("South", "Pawn", 109, 5);
    design.setup("South", "Pawn", 110, 5);
    design.setup("South", "Pawn", 111, 5);
    design.setup("South", "Pawn", 112, 5);
    design.setup("South", "Pawn", 113, 5);
    design.setup("South", "Pawn", 114, 5);
    design.setup("North", "King", 8, 5);
    design.setup("North", "Gold", 7, 5);
    design.setup("North", "Gold", 9, 5);
    design.setup("North", "Silver", 6, 5);
    design.setup("North", "Silver", 10, 5);
    design.setup("North", "Knight", 5, 5);
    design.setup("North", "Knight", 11, 5);
    design.setup("North", "Lance", 4, 5);
    design.setup("North", "Lance", 12, 5);
    design.setup("North", "Bishop", 28, 5);
    design.setup("North", "Rook", 22, 5);
    design.setup("North", "Pawn", 38, 5);
    design.setup("North", "Pawn", 39, 5);
    design.setup("North", "Pawn", 40, 5);
    design.setup("North", "Pawn", 41, 5);
    design.setup("North", "Pawn", 42, 5);
    design.setup("North", "Pawn", 43, 5);
    design.setup("North", "Pawn", 44, 5);
    design.setup("North", "Pawn", 45, 5);
    design.setup("North", "Pawn", 46, 5);

    design.setup("South", "King", 144, 6);
    design.setup("South", "Gold", 143, 6);
    design.setup("South", "Gold", 145, 6);
    design.setup("South", "Silver", 142, 6);
    design.setup("South", "Silver", 146, 6);
    design.setup("South", "Knight", 141, 6);
    design.setup("South", "Knight", 147, 6);
    design.setup("South", "Lance", 140, 6);
    design.setup("South", "Lance", 148, 6);
    design.setup("South", "Pawn", 106, 6);
    design.setup("South", "Pawn", 107, 6);
    design.setup("South", "Pawn", 108, 6);
    design.setup("South", "Pawn", 109, 6);
    design.setup("South", "Pawn", 110, 6);
    design.setup("South", "Pawn", 111, 6);
    design.setup("South", "Pawn", 112, 6);
    design.setup("South", "Pawn", 113, 6);
    design.setup("South", "Pawn", 114, 6);
    design.setup("North", "King", 8, 6);
    design.setup("North", "Gold", 7, 6);
    design.setup("North", "Gold", 9, 6);
    design.setup("North", "Silver", 6, 6);
    design.setup("North", "Silver", 10, 6);
    design.setup("North", "Knight", 5, 6);
    design.setup("North", "Knight", 11, 6);
    design.setup("North", "Lance", 4, 6);
    design.setup("North", "Lance", 12, 6);
    design.setup("North", "Bishop", 28, 6);
    design.setup("North", "Rook", 22, 6);
    design.setup("North", "Pawn", 38, 6);
    design.setup("North", "Pawn", 39, 6);
    design.setup("North", "Pawn", 40, 6);
    design.setup("North", "Pawn", 41, 6);
    design.setup("North", "Pawn", 42, 6);
    design.setup("North", "Pawn", 43, 6);
    design.setup("North", "Pawn", 44, 6);
    design.setup("North", "Pawn", 45, 6);
    design.setup("North", "Pawn", 46, 6);

    design.setup("South", "King", 144, 7);
    design.setup("South", "Gold", 143, 7);
    design.setup("South", "Gold", 145, 7);
    design.setup("South", "Silver", 142, 7);
    design.setup("South", "Silver", 146, 7);
    design.setup("South", "Knight", 141, 7);
    design.setup("South", "Knight", 147, 7);
    design.setup("South", "Lance", 148, 7);
    design.setup("South", "Pawn", 106, 7);
    design.setup("South", "Pawn", 107, 7);
    design.setup("South", "Pawn", 108, 7);
    design.setup("South", "Pawn", 109, 7);
    design.setup("South", "Pawn", 110, 7);
    design.setup("South", "Pawn", 111, 7);
    design.setup("South", "Pawn", 112, 7);
    design.setup("South", "Pawn", 113, 7);
    design.setup("South", "Pawn", 114, 7);
    design.setup("North", "King", 8, 7);
    design.setup("North", "Gold", 7, 7);
    design.setup("North", "Gold", 9, 7);
    design.setup("North", "Silver", 6, 7);
    design.setup("North", "Silver", 10, 7);
    design.setup("North", "Knight", 5, 7);
    design.setup("North", "Knight", 11, 7);
    design.setup("North", "Lance", 4, 7);
    design.setup("North", "Lance", 12, 7);
    design.setup("North", "Bishop", 28, 7);
    design.setup("North", "Rook", 22, 7);
    design.setup("North", "Pawn", 38, 7);
    design.setup("North", "Pawn", 39, 7);
    design.setup("North", "Pawn", 40, 7);
    design.setup("North", "Pawn", 41, 7);
    design.setup("North", "Pawn", 42, 7);
    design.setup("North", "Pawn", 43, 7);
    design.setup("North", "Pawn", 44, 7);
    design.setup("North", "Pawn", 45, 7);
    design.setup("North", "Pawn", 46, 7);

    design.setup("South", "King", 144, 8);
    design.setup("South", "Gold", 143, 8);
    design.setup("South", "Gold", 145, 8);
    design.setup("South", "Silver", 142, 8);
    design.setup("South", "Silver", 146, 8);
    design.setup("South", "Knight", 141, 8);
    design.setup("South", "Knight", 147, 8);
    design.setup("South", "Pawn", 106, 8);
    design.setup("South", "Pawn", 107, 8);
    design.setup("South", "Pawn", 108, 8);
    design.setup("South", "Pawn", 109, 8);
    design.setup("South", "Pawn", 110, 8);
    design.setup("South", "Pawn", 111, 8);
    design.setup("South", "Pawn", 112, 8);
    design.setup("South", "Pawn", 113, 8);
    design.setup("South", "Pawn", 114, 8);
    design.setup("North", "King", 8, 8);
    design.setup("North", "Gold", 7, 8);
    design.setup("North", "Gold", 9, 8);
    design.setup("North", "Silver", 6, 8);
    design.setup("North", "Silver", 10, 8);
    design.setup("North", "Knight", 5, 8);
    design.setup("North", "Knight", 11, 8);
    design.setup("North", "Lance", 4, 8);
    design.setup("North", "Lance", 12, 8);
    design.setup("North", "Bishop", 28, 8);
    design.setup("North", "Rook", 22, 8);
    design.setup("North", "Pawn", 38, 8);
    design.setup("North", "Pawn", 39, 8);
    design.setup("North", "Pawn", 40, 8);
    design.setup("North", "Pawn", 41, 8);
    design.setup("North", "Pawn", 42, 8);
    design.setup("North", "Pawn", 43, 8);
    design.setup("North", "Pawn", 44, 8);
    design.setup("North", "Pawn", 45, 8);
    design.setup("North", "Pawn", 46, 8);

    design.setup("South", "King", 144, 9);
    design.setup("South", "Gold", 143, 9);
    design.setup("South", "Gold", 145, 9);
    design.setup("South", "Silver", 142, 9);
    design.setup("South", "Silver", 146, 9);
    design.setup("South", "Knight", 147, 9);
    design.setup("South", "Pawn", 106, 9);
    design.setup("South", "Pawn", 107, 9);
    design.setup("South", "Pawn", 108, 9);
    design.setup("South", "Pawn", 109, 9);
    design.setup("South", "Pawn", 110, 9);
    design.setup("South", "Pawn", 111, 9);
    design.setup("South", "Pawn", 112, 9);
    design.setup("South", "Pawn", 113, 9);
    design.setup("South", "Pawn", 114, 9);
    design.setup("North", "King", 8, 9);
    design.setup("North", "Gold", 7, 9);
    design.setup("North", "Gold", 9, 9);
    design.setup("North", "Silver", 6, 9);
    design.setup("North", "Silver", 10, 9);
    design.setup("North", "Knight", 5, 9);
    design.setup("North", "Knight", 11, 9);
    design.setup("North", "Lance", 4, 9);
    design.setup("North", "Lance", 12, 9);
    design.setup("North", "Bishop", 28, 9);
    design.setup("North", "Rook", 22, 9);
    design.setup("North", "Pawn", 38, 9);
    design.setup("North", "Pawn", 39, 9);
    design.setup("North", "Pawn", 40, 9);
    design.setup("North", "Pawn", 41, 9);
    design.setup("North", "Pawn", 42, 9);
    design.setup("North", "Pawn", 43, 9);
    design.setup("North", "Pawn", 44, 9);
    design.setup("North", "Pawn", 45, 9);
    design.setup("North", "Pawn", 46, 9);

    design.setup("South", "King", 144, 10);
    design.setup("South", "Gold", 143, 10);
    design.setup("South", "Gold", 145, 10);
    design.setup("South", "Silver", 142, 10);
    design.setup("South", "Silver", 146, 10);
    design.setup("South", "Pawn", 106, 10);
    design.setup("South", "Pawn", 107, 10);
    design.setup("South", "Pawn", 108, 10);
    design.setup("South", "Pawn", 109, 10);
    design.setup("South", "Pawn", 110, 10);
    design.setup("South", "Pawn", 111, 10);
    design.setup("South", "Pawn", 112, 10);
    design.setup("South", "Pawn", 113, 10);
    design.setup("South", "Pawn", 114, 10);
    design.setup("North", "King", 8, 10);
    design.setup("North", "Gold", 7, 10);
    design.setup("North", "Gold", 9, 10);
    design.setup("North", "Silver", 6, 10);
    design.setup("North", "Silver", 10, 10);
    design.setup("North", "Knight", 5, 10);
    design.setup("North", "Knight", 11, 10);
    design.setup("North", "Lance", 4, 10);
    design.setup("North", "Lance", 12, 10);
    design.setup("North", "Bishop", 28, 10);
    design.setup("North", "Rook", 22, 10);
    design.setup("North", "Pawn", 38, 10);
    design.setup("North", "Pawn", 39, 10);
    design.setup("North", "Pawn", 40, 10);
    design.setup("North", "Pawn", 41, 10);
    design.setup("North", "Pawn", 42, 10);
    design.setup("North", "Pawn", 43, 10);
    design.setup("North", "Pawn", 44, 10);
    design.setup("North", "Pawn", 45, 10);
    design.setup("North", "Pawn", 46, 10);

    design.setup("South", "King", 144, 11);
    design.setup("South", "Gold", 143, 11);
    design.setup("South", "Gold", 145, 11);
    design.setup("South", "Pawn", 106, 11);
    design.setup("South", "Pawn", 107, 11);
    design.setup("South", "Pawn", 108, 11);
    design.setup("South", "Pawn", 109, 11);
    design.setup("South", "Pawn", 110, 11);
    design.setup("South", "Pawn", 111, 11);
    design.setup("South", "Pawn", 112, 11);
    design.setup("South", "Pawn", 113, 11);
    design.setup("South", "Pawn", 114, 11);
    design.setup("North", "King", 8, 11);
    design.setup("North", "Gold", 7, 11);
    design.setup("North", "Gold", 9, 11);
    design.setup("North", "Silver", 6, 11);
    design.setup("North", "Silver", 10, 11);
    design.setup("North", "Knight", 5, 11);
    design.setup("North", "Knight", 11, 11);
    design.setup("North", "Lance", 4, 11);
    design.setup("North", "Lance", 12, 11);
    design.setup("North", "Bishop", 28, 11);
    design.setup("North", "Rook", 22, 11);
    design.setup("North", "Pawn", 38, 11);
    design.setup("North", "Pawn", 39, 11);
    design.setup("North", "Pawn", 40, 11);
    design.setup("North", "Pawn", 41, 11);
    design.setup("North", "Pawn", 42, 11);
    design.setup("North", "Pawn", 43, 11);
    design.setup("North", "Pawn", 44, 11);
    design.setup("North", "Pawn", 45, 11);
    design.setup("North", "Pawn", 46, 11);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(388, 433, 1, -5, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    view.defPieceShogi(0, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKing", 1, Math.PI);
    view.defPieceShogi(0, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthKing", 1);
    view.defPieceShogi(1, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthGold", 1, Math.PI);
    view.defPieceShogi(1, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthGold", 1);
    view.defPieceShogi(2, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthSilver", 1, Math.PI);
    view.defPieceShogi(2, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthSilver", 1);
    view.defPieceShogi(3, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKnight", 1, Math.PI);
    view.defPieceShogi(3, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthKnight", 1);
    view.defPieceShogi(4, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthLance", 1, Math.PI);
    view.defPieceShogi(4, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthLance", 1);
    view.defPieceShogi(5, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthBishop", 1, Math.PI);
    view.defPieceShogi(5, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthBishop", 1);
    view.defPieceShogi(6, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthRook", 1, Math.PI);
    view.defPieceShogi(6, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthRook", 1);
    view.defPieceShogi(7, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthPawn", 1, Math.PI);
    view.defPieceShogi(7, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthPawn", 1);
    view.defPieceShogi(8, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthSilverP", 1, Math.PI);
    view.defPieceShogi(8, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthSilverP", 1);
    view.defPieceShogi(9, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKnightP", 1, Math.PI);
    view.defPieceShogi(9, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthKnightP", 1);
    view.defPieceShogi(10, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthLanceP", 1, Math.PI);
    view.defPieceShogi(10, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthLanceP", 1);
    view.defPieceShogi(11, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthBishopP", 1, Math.PI);
    view.defPieceShogi(11, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthBishopP", 1);
    view.defPieceShogi(12, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthRookP", 1, Math.PI);
    view.defPieceShogi(12, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthRookP", 1);
    view.defPieceShogi(13, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthPawnP", 1, Math.PI);
    view.defPieceShogi(13, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "NorthPawnP", 1);

    view.setCamera(0, 0, 0, -109, 215, 155);
 
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.View.isTouchDevice ? Dagaz.Controller.newGame : Dagaz.View.switchMenu, 1);
    view.defControl("ResControl", "3D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'shogi.htm' : 'shogi-board.htm');
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'shogi-3d-board.htm' : 'shogi-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);

    view.defSubControl(1, "R01", "Without Handicap", true, Dagaz.Controller.loadGame, "?turn=0;&setup=lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL-6/6/6/6/6/6/6/6/6-w");
    view.defSubControl(1, "R02", "Left-Kyo Handicap", true, Dagaz.Controller.loadGame, "?turn=0;&setup=lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/1NSGKGSNL-6/6/6/6/6/6/6/6/6-w");
    view.defSubControl(1, "R03", "Kaku Handicap", true, Dagaz.Controller.loadGame, "?turn=0;&setup=lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/7R1/LNSGKGSNL-6/6/6/6/6/6/6/6/6-w");
    view.defSubControl(1, "R04", "Hisha Handicap", true, Dagaz.Controller.loadGame, "?turn=0;&setup=lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B7/LNSGKGSNL-6/6/6/6/6/6/6/6/6-w");
    view.defSubControl(1, "R05", "Hisha and Left-Kyo Handicap", true, Dagaz.Controller.loadGame, "?turn=0;&setup=lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B7/1NSGKGSNL-6/6/6/6/6/6/6/6/6-w");
    view.defSubControl(1, "R06", "Two-Piece Handicap", true, Dagaz.Controller.loadGame, "?turn=0;&setup=lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/9/LNSGKGSNL-6/6/6/6/6/6/6/6/6-w");
    view.defSubControl(1, "R07", "Three-Piece Handicap", true, Dagaz.Controller.loadGame, "?turn=0;&setup=lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/9/1NSGKGSNL-6/6/6/6/6/6/6/6/6-w");
    view.defSubControl(1, "R08", "Four-Piece Handicap", true, Dagaz.Controller.loadGame, "?turn=0;&setup=lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/9/1NSGKGSN1-6/6/6/6/6/6/6/6/6-w");
    view.defSubControl(1, "R09", "Five-Piece Handicap", true, Dagaz.Controller.loadGame, "?turn=0;&setup=lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/9/2SGKGSN1-6/6/6/6/6/6/6/6/6-w");
    view.defSubControl(1, "R10", "Six-Piece Handicap", true, Dagaz.Controller.loadGame, "?turn=0;&setup=lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/9/2SGKGS2-6/6/6/6/6/6/6/6/6-w");
    view.defSubControl(1, "R11", "Eight-Piece Handicap", true, Dagaz.Controller.loadGame, "?turn=0;&setup=lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/9/3GKG3-6/6/6/6/6/6/6/6/6-w");
 
    view.defPosition("X9", -328, -184, 41, 46, 0);
    view.defPosition("Y9", -287, -184, 41, 46, 0);
    view.defPosition("Z9", -246, -184, 41, 46, 0);
    view.defPosition("I9", -205, -184, 41, 46, 0);
    view.defPosition("a9", -164, -184, 41, 46, 0);
    view.defPosition("b9", -123, -184, 41, 46, 0);
    view.defPosition("c9", -82, -184, 41, 46, 0);
    view.defPosition("d9", -41, -184, 41, 46, 0);
    view.defPosition("e9", 0, -184, 41, 46, 0);
    view.defPosition("f9", 41, -184, 41, 46, 0);
    view.defPosition("g9", 82, -184, 41, 46, 0);
    view.defPosition("h9", 123, -184, 41, 46, 0);
    view.defPosition("i9", 164, -184, 41, 46, 0);
    view.defPosition("J9", 205, -184, 41, 46, 0);
    view.defPosition("U9", 246, -184, 41, 46, 0);
    view.defPosition("V9", 287, -184, 41, 46, 0);
    view.defPosition("W9", 328, -184, 41, 46, 0);
    view.defPosition("X8", -328, -138, 41, 46, 0);
    view.defPosition("Y8", -287, -138, 41, 46, 0);
    view.defPosition("Z8", -246, -138, 41, 46, 0);
    view.defPosition("I8", -205, -138, 41, 46, 0);
    view.defPosition("a8", -164, -138, 41, 46, 0);
    view.defPosition("b8", -123, -138, 41, 46, 0);
    view.defPosition("c8", -82, -138, 41, 46, 0);
    view.defPosition("d8", -41, -138, 41, 46, 0);
    view.defPosition("e8", 0, -138, 41, 46, 0);
    view.defPosition("f8", 41, -138, 41, 46, 0);
    view.defPosition("g8", 82, -138, 41, 46, 0);
    view.defPosition("h8", 123, -138, 41, 46, 0);
    view.defPosition("i8", 164, -138, 41, 46, 0);
    view.defPosition("J8", 205, -138, 41, 46, 0);
    view.defPosition("U8", 246, -138, 41, 46, 0);
    view.defPosition("V8", 287, -138, 41, 46, 0);
    view.defPosition("W8", 328, -138, 41, 46, 0);
    view.defPosition("X7", -328, -92, 41, 46, 0);
    view.defPosition("Y7", -287, -92, 41, 46, 0);
    view.defPosition("Z7", -246, -92, 41, 46, 0);
    view.defPosition("I7", -205, -92, 41, 46, 0);
    view.defPosition("a7", -164, -92, 41, 46, 0);
    view.defPosition("b7", -123, -92, 41, 46, 0);
    view.defPosition("c7", -82, -92, 41, 46, 0);
    view.defPosition("d7", -41, -92, 41, 46, 0);
    view.defPosition("e7", 0, -92, 41, 46, 0);
    view.defPosition("f7", 41, -92, 41, 46, 0);
    view.defPosition("g7", 82, -92, 41, 46, 0);
    view.defPosition("h7", 123, -92, 41, 46, 0);
    view.defPosition("i7", 164, -92, 41, 46, 0);
    view.defPosition("J7", 205, -92, 41, 46, 0);
    view.defPosition("U7", 246, -92, 41, 46, 0);
    view.defPosition("V7", 287, -92, 41, 46, 0);
    view.defPosition("W7", 328, -92, 41, 46, 0);
    view.defPosition("X6", -328, -46, 41, 46, 0);
    view.defPosition("Y6", -287, -46, 41, 46, 0);
    view.defPosition("Z6", -246, -46, 41, 46, 0);
    view.defPosition("I6", -205, -46, 41, 46, 0);
    view.defPosition("a6", -164, -46, 41, 46, 0);
    view.defPosition("b6", -123, -46, 41, 46, 0);
    view.defPosition("c6", -82, -46, 41, 46, 0);
    view.defPosition("d6", -41, -46, 41, 46, 0);
    view.defPosition("e6", 0, -46, 41, 46, 0);
    view.defPosition("f6", 41, -46, 41, 46, 0);
    view.defPosition("g6", 82, -46, 41, 46, 0);
    view.defPosition("h6", 123, -46, 41, 46, 0);
    view.defPosition("i6", 164, -46, 41, 46, 0);
    view.defPosition("J6", 205, -46, 41, 46, 0);
    view.defPosition("U6", 246, -46, 41, 46, 0);
    view.defPosition("V6", 287, -46, 41, 46, 0);
    view.defPosition("W6", 328, -46, 41, 46, 0);
    view.defPosition("X5", -328, 0, 41, 46, 0);
    view.defPosition("Y5", -287, 0, 41, 46, 0);
    view.defPosition("Z5", -246, 0, 41, 46, 0);
    view.defPosition("I5", -205, 0, 41, 46, 0);
    view.defPosition("a5", -164, 0, 41, 46, 0);
    view.defPosition("b5", -123, 0, 41, 46, 0);
    view.defPosition("c5", -82, 0, 41, 46, 0);
    view.defPosition("d5", -41, 0, 41, 46, 0);
    view.defPosition("e5", 0, 0, 41, 46, 0);
    view.defPosition("f5", 41, 0, 41, 46, 0);
    view.defPosition("g5", 82, 0, 41, 46, 0);
    view.defPosition("h5", 123, 0, 41, 46, 0);
    view.defPosition("i5", 164, 0, 41, 46, 0);
    view.defPosition("J5", 205, 0, 41, 46, 0);
    view.defPosition("U5", 246, 0, 41, 46, 0);
    view.defPosition("V5", 287, 0, 41, 46, 0);
    view.defPosition("W5", 328, 0, 41, 46, 0);
    view.defPosition("X4", -328, 46, 41, 46, 0);
    view.defPosition("Y4", -287, 46, 41, 46, 0);
    view.defPosition("Z4", -246, 46, 41, 46, 0);
    view.defPosition("I4", -205, 46, 41, 46, 0);
    view.defPosition("a4", -164, 46, 41, 46, 0);
    view.defPosition("b4", -123, 46, 41, 46, 0);
    view.defPosition("c4", -82, 46, 41, 46, 0);
    view.defPosition("d4", -41, 46, 41, 46, 0);
    view.defPosition("e4", 0, 46, 41, 46, 0);
    view.defPosition("f4", 41, 46, 41, 46, 0);
    view.defPosition("g4", 82, 46, 41, 46, 0);
    view.defPosition("h4", 123, 46, 41, 46, 0);
    view.defPosition("i4", 164, 46, 41, 46, 0);
    view.defPosition("J4", 205, 46, 41, 46, 0);
    view.defPosition("U4", 246, 46, 41, 46, 0);
    view.defPosition("V4", 287, 46, 41, 46, 0);
    view.defPosition("W4", 328, 46, 41, 46, 0);
    view.defPosition("X3", -328, 92, 41, 46, 0);
    view.defPosition("Y3", -287, 92, 41, 46, 0);
    view.defPosition("Z3", -246, 92, 41, 46, 0);
    view.defPosition("I3", -205, 92, 41, 46, 0);
    view.defPosition("a3", -164, 92, 41, 46, 0);
    view.defPosition("b3", -123, 92, 41, 46, 0);
    view.defPosition("c3", -82, 92, 41, 46, 0);
    view.defPosition("d3", -41, 92, 41, 46, 0);
    view.defPosition("e3", 0, 92, 41, 46, 0);
    view.defPosition("f3", 41, 92, 41, 46, 0);
    view.defPosition("g3", 82, 92, 41, 46, 0);
    view.defPosition("h3", 123, 92, 41, 46, 0);
    view.defPosition("i3", 164, 92, 41, 46, 0);
    view.defPosition("J3", 205, 92, 41, 46, 0);
    view.defPosition("U3", 246, 92, 41, 46, 0);
    view.defPosition("V3", 287, 92, 41, 46, 0);
    view.defPosition("W3", 328, 92, 41, 46, 0);
    view.defPosition("X2", -328, 138, 41, 46, 0);
    view.defPosition("Y2", -287, 138, 41, 46, 0);
    view.defPosition("Z2", -246, 138, 41, 46, 0);
    view.defPosition("I2", -205, 138, 41, 46, 0);
    view.defPosition("a2", -164, 138, 41, 46, 0);
    view.defPosition("b2", -123, 138, 41, 46, 0);
    view.defPosition("c2", -82, 138, 41, 46, 0);
    view.defPosition("d2", -41, 138, 41, 46, 0);
    view.defPosition("e2", 0, 138, 41, 46, 0);
    view.defPosition("f2", 41, 138, 41, 46, 0);
    view.defPosition("g2", 82, 138, 41, 46, 0);
    view.defPosition("h2", 123, 138, 41, 46, 0);
    view.defPosition("i2", 164, 138, 41, 46, 0);
    view.defPosition("J2", 205, 138, 41, 46, 0);
    view.defPosition("U2", 246, 138, 41, 46, 0);
    view.defPosition("V2", 287, 138, 41, 46, 0);
    view.defPosition("W2", 328, 138, 41, 46, 0);
    view.defPosition("X1", -328, 184, 41, 46, 0);
    view.defPosition("Y1", -287, 184, 41, 46, 0);
    view.defPosition("Z1", -246, 184, 41, 46, 0);
    view.defPosition("I1", -205, 184, 41, 46, 0);
    view.defPosition("a1", -164, 184, 41, 46, 0);
    view.defPosition("b1", -123, 184, 41, 46, 0);
    view.defPosition("c1", -82, 184, 41, 46, 0);
    view.defPosition("d1", -41, 184, 41, 46, 0);
    view.defPosition("e1", 0, 184, 41, 46, 0);
    view.defPosition("f1", 41, 184, 41, 46, 0);
    view.defPosition("g1", 82, 184, 41, 46, 0);
    view.defPosition("h1", 123, 184, 41, 46, 0);
    view.defPosition("i1", 164, 184, 41, 46, 0);
    view.defPosition("J1", 205, 184, 41, 46, 0);
    view.defPosition("U1", 246, 184, 41, 46, 0);
    view.defPosition("V1", 287, 184, 41, 46, 0);
    view.defPosition("W1", 328, 184, 41, 46, 0);
}
