Dagaz.View.TARGET_FLAT  = true;
Dagaz.View.TARGET_LARGE = true;

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
  if (move.actions.length > 0) {
      var a = move.actions[0];
      if (a[0] != null) {
          r = r + Dagaz.Model.posToString(a[0][0]);
          if (a[1] !== null) {
              r = r + '-';
          }
      }
      if (a[1] !== null) {
          r = r + Dagaz.Model.posToString(a[1][0]);
      }
  }
  return r;
}

function p(name) {
  return Dagaz.Model.stringToPos(name);
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("se");
    design.addDirection("de");
    design.addDirection("ue");
    design.addDirection("dw");
    design.addDirection("uw");
    design.addDirection("dn");
    design.addDirection("un");

    design.addPlayer("Gold", [1, 0, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10]);
    design.addPlayer("Green", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

    design.addTurn(1, 2); // 0
    design.addTurn(1, 2); // 1
    design.addTurn(1, 2); // 2
    design.addTurn(1, 2); // 3
    design.addTurn(1, 2); // 4
    design.addTurn(1, 2); // 5
    design.addTurn(1, 2); // 6
    design.addTurn(1, 2); // 7
    design.addTurn(1, 2); // 8

    design.addTurn(2, 2); // 9
    design.addTurn(2, 2); // 10
    design.addTurn(2, 2); // 11
    design.addTurn(2, 2); // 12
    design.addTurn(2, 2); // 13
    design.addTurn(2, 2); // 14
    design.addTurn(2, 2); // 15
    design.addTurn(2, 2); // 16
    design.addTurn(2, 2); // 17

    design.addTurn(1, 0); // 18
    design.addTurn(2, 0); // 19
    design.repeatMark();
    design.addTurn(1, 1); // 20
    design.addTurn(2, 1); // 21

    design.addPosition("GG13", [7, 0, 7, 0, 0, 0, 0, 0, 0, 49, 0, 0]);
    design.addPosition("GG24", [7, 6, 7, 0, 6, 0, 0, 48, 0, 49, 0, 0]);
    design.addPosition("GG35", [7, 6, 7, 0, 6, 0, 0, 48, 0, 49, 0, 0]);
    design.addPosition("GG46", [7, 6, 7, 0, 6, 0, 0, 48, 0, 49, 0, 0]);
    design.addPosition("GG57", [7, 6, 7, 0, 6, 0, 0, 48, 0, 49, 0, 0]);
    design.addPosition("GG68", [7, 6, 7, 0, 6, 0, 0, 48, 0, 49, 0, 0]);
    design.addPosition("GG79", [0, 6, 0, 0, 6, 0, 0, 48, 0, 0, 0, 0]);
    design.addPosition("GG14", [-6, -7, 6, -7, 6, -6, 0, 0, 0, 48, 0, 0]);
    design.addPosition("GG25", [-6, -7, 6, -7, 6, -6, 0, 47, 0, 48, 0, 0]);
    design.addPosition("GG36", [-6, -7, 6, -7, 6, -6, 0, 47, 0, 48, 0, 0]);
    design.addPosition("GG47", [-6, -7, 6, -7, 6, -6, 0, 47, 0, 48, 0, 0]);
    design.addPosition("GG58", [-6, -7, 6, -7, 6, -6, 0, 47, 0, 48, 0, 0]);
    design.addPosition("GG69", [-6, -7, 6, -7, 6, -6, 0, 47, 0, 0, 0, 0]);
    design.addPosition("GF14", [6, 0, 6, -6, 0, -6, 0, 0, 0, 47, 0, 36]);
    design.addPosition("GF25", [6, 5, 6, -6, 5, -6, 0, 46, 0, 47, 0, 36]);
    design.addPosition("GF36", [6, 5, 6, -6, 5, -6, 0, 46, 0, 47, 0, 36]);
    design.addPosition("GF47", [6, 5, 6, -6, 5, -6, 0, 46, 0, 47, 0, 36]);
    design.addPosition("GF58", [6, 5, 6, -6, 5, -6, 0, 46, 0, 47, 0, 36]);
    design.addPosition("GF69", [0, 5, 0, -6, 5, -6, 0, 46, 0, 0, 0, 36]);
    design.addPosition("GF15", [-5, -6, 5, -6, 5, -5, 0, 0, 0, 46, 0, 36]);
    design.addPosition("GF26", [-5, -6, 5, -6, 5, -5, 0, 45, 0, 46, 0, 36]);
    design.addPosition("GF37", [-5, -6, 5, -6, 5, -5, 0, 45, 0, 46, 0, 36]);
    design.addPosition("GF48", [-5, -6, 5, -6, 5, -5, 0, 45, 0, 46, 0, 36]);
    design.addPosition("GF59", [-5, -6, 5, -6, 5, -5, 0, 45, 0, 0, 0, 36]);
    design.addPosition("GE15", [5, 0, 5, -5, 0, -5, 0, 0, 0, 45, 0, 36]);
    design.addPosition("GE26", [5, 4, 5, -5, 4, -5, 0, 44, 0, 45, 0, 36]);
    design.addPosition("GE37", [5, 4, 5, -5, 4, -5, 0, 44, 0, 45, 0, 36]);
    design.addPosition("GE48", [5, 4, 5, -5, 4, -5, 0, 44, 0, 45, 0, 36]);
    design.addPosition("GE59", [0, 4, 0, -5, 4, -5, 0, 44, 0, 0, 0, 36]);
    design.addPosition("GE16", [-4, -5, 4, -5, 4, -4, 0, 0, 0, 44, 0, 36]);
    design.addPosition("GE27", [-4, -5, 4, -5, 4, -4, 0, 43, 0, 44, 0, 36]);
    design.addPosition("GE38", [-4, -5, 4, -5, 4, -4, 0, 43, 0, 44, 0, 36]);
    design.addPosition("GE49", [-4, -5, 4, -5, 4, -4, 0, 43, 0, 0, 0, 36]);
    design.addPosition("GD16", [4, 0, 4, -4, 0, -4, 0, 0, 0, 43, 0, 36]);
    design.addPosition("GD27", [4, 3, 4, -4, 3, -4, 0, 42, 0, 43, 0, 36]);
    design.addPosition("GD38", [4, 3, 4, -4, 3, -4, 0, 42, 0, 43, 0, 36]);
    design.addPosition("GD49", [0, 3, 0, -4, 3, -4, 0, 42, 0, 0, 0, 36]);
    design.addPosition("GD17", [-3, -4, 3, -4, 3, -3, 0, 0, 0, 42, 0, 36]);
    design.addPosition("GD28", [-3, -4, 3, -4, 3, -3, 0, 41, 0, 42, 0, 36]);
    design.addPosition("GD39", [-3, -4, 3, -4, 3, -3, 0, 41, 0, 0, 0, 36]);
    design.addPosition("GC17", [3, 0, 3, -3, 0, -3, 0, 0, 0, 41, 0, 36]);
    design.addPosition("GC28", [3, 2, 3, -3, 2, -3, 0, 40, 0, 41, 0, 36]);
    design.addPosition("GC39", [0, 2, 0, -3, 2, -3, 0, 40, 0, 0, 0, 36]);
    design.addPosition("GC18", [-2, -3, 2, -3, 2, -2, 0, 0, 0, 40, 0, 36]);
    design.addPosition("GC29", [-2, -3, 2, -3, 2, -2, 0, 39, 0, 0, 0, 36]);
    design.addPosition("GB18", [2, 0, 2, -2, 0, -2, 0, 0, 0, 39, 0, 36]);
    design.addPosition("GB29", [0, 1, 0, -2, 1, -2, 0, 38, 0, 0, 0, 36]);
    design.addPosition("GB19", [-1, -2, 1, -2, 1, -1, 0, 0, 0, 0, 0, 36]);
    design.addPosition("GA19", [0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 36]);
    design.addPosition("FF14", [6, 0, 6, 0, 0, 0, -48, 0, -49, 36, -36, 0]);
    design.addPosition("FF25", [6, 5, 6, 0, 5, 0, -48, 35, -49, 36, -36, 0]);
    design.addPosition("FF36", [6, 5, 6, 0, 5, 0, -48, 35, -49, 36, -36, 0]);
    design.addPosition("FF47", [6, 5, 6, 0, 5, 0, -48, 35, -49, 36, -36, 0]);
    design.addPosition("FF58", [6, 5, 6, 0, 5, 0, -48, 35, -49, 36, -36, 0]);
    design.addPosition("FF69", [0, 5, 0, 0, 5, 0, -48, 35, -49, 0, -36, 0]);
    design.addPosition("FF15", [-5, -6, 5, -6, 5, -5, -47, 0, -48, 35, -36, 0]);
    design.addPosition("FF26", [-5, -6, 5, -6, 5, -5, -47, 34, -48, 35, -36, 0]);
    design.addPosition("FF37", [-5, -6, 5, -6, 5, -5, -47, 34, -48, 35, -36, 0]);
    design.addPosition("FF48", [-5, -6, 5, -6, 5, -5, -47, 34, -48, 35, -36, 0]);
    design.addPosition("FF59", [-5, -6, 5, -6, 5, -5, -47, 34, -48, 0, -36, 0]);
    design.addPosition("FE15", [5, 0, 5, -5, 0, -5, -46, 0, -47, 34, -36, 25]);
    design.addPosition("FE26", [5, 4, 5, -5, 4, -5, -46, 33, -47, 34, -36, 25]);
    design.addPosition("FE37", [5, 4, 5, -5, 4, -5, -46, 33, -47, 34, -36, 25]);
    design.addPosition("FE48", [5, 4, 5, -5, 4, -5, -46, 33, -47, 34, -36, 25]);
    design.addPosition("FE59", [0, 4, 0, -5, 4, -5, -46, 33, -47, 0, -36, 25]);
    design.addPosition("FE16", [-4, -5, 4, -5, 4, -4, -45, 0, -46, 33, -36, 25]);
    design.addPosition("FE27", [-4, -5, 4, -5, 4, -4, -45, 32, -46, 33, -36, 25]);
    design.addPosition("FE38", [-4, -5, 4, -5, 4, -4, -45, 32, -46, 33, -36, 25]);
    design.addPosition("FE49", [-4, -5, 4, -5, 4, -4, -45, 32, -46, 0, -36, 25]);
    design.addPosition("FD16", [4, 0, 4, -4, 0, -4, -44, 0, -45, 32, -36, 25]);
    design.addPosition("FD27", [4, 3, 4, -4, 3, -4, -44, 31, -45, 32, -36, 25]);
    design.addPosition("FD38", [4, 3, 4, -4, 3, -4, -44, 31, -45, 32, -36, 25]);
    design.addPosition("FD49", [0, 3, 0, -4, 3, -4, -44, 31, -45, 0, -36, 25]);
    design.addPosition("FD17", [-3, -4, 3, -4, 3, -3, -43, 0, -44, 31, -36, 25]);
    design.addPosition("FD28", [-3, -4, 3, -4, 3, -3, -43, 30, -44, 31, -36, 25]);
    design.addPosition("FD39", [-3, -4, 3, -4, 3, -3, -43, 30, -44, 0, -36, 25]);
    design.addPosition("FC17", [3, 0, 3, -3, 0, -3, -42, 0, -43, 30, -36, 25]);
    design.addPosition("FC28", [3, 2, 3, -3, 2, -3, -42, 29, -43, 30, -36, 25]);
    design.addPosition("FC39", [0, 2, 0, -3, 2, -3, -42, 29, -43, 0, -36, 25]);
    design.addPosition("FC18", [-2, -3, 2, -3, 2, -2, -41, 0, -42, 29, -36, 25]);
    design.addPosition("FC29", [-2, -3, 2, -3, 2, -2, -41, 28, -42, 0, -36, 25]);
    design.addPosition("FB18", [2, 0, 2, -2, 0, -2, -40, 0, -41, 28, -36, 25]);
    design.addPosition("FB29", [0, 1, 0, -2, 1, -2, -40, 27, -41, 0, -36, 25]);
    design.addPosition("FB19", [-1, -2, 1, -2, 1, -1, -39, 0, -40, 0, -36, 25]);
    design.addPosition("FA19", [0, 0, 0, -1, 0, -1, -38, 0, -39, 0, -36, 25]);
    design.addPosition("EE15", [5, 0, 5, 0, 0, 0, -35, 0, -36, 25, -25, 0]);
    design.addPosition("EE26", [5, 4, 5, 0, 4, 0, -35, 24, -36, 25, -25, 0]);
    design.addPosition("EE37", [5, 4, 5, 0, 4, 0, -35, 24, -36, 25, -25, 0]);
    design.addPosition("EE48", [5, 4, 5, 0, 4, 0, -35, 24, -36, 25, -25, 0]);
    design.addPosition("EE59", [0, 4, 0, 0, 4, 0, -35, 24, -36, 0, -25, 0]);
    design.addPosition("EE16", [-4, -5, 4, -5, 4, -4, -34, 0, -35, 24, -25, 0]);
    design.addPosition("EE27", [-4, -5, 4, -5, 4, -4, -34, 23, -35, 24, -25, 0]);
    design.addPosition("EE38", [-4, -5, 4, -5, 4, -4, -34, 23, -35, 24, -25, 0]);
    design.addPosition("EE49", [-4, -5, 4, -5, 4, -4, -34, 23, -35, 0, -25, 0]);
    design.addPosition("ED16", [4, 0, 4, -4, 0, -4, -33, 0, -34, 23, -25, 16]);
    design.addPosition("ED27", [4, 3, 4, -4, 3, -4, -33, 22, -34, 23, -25, 16]);
    design.addPosition("ED38", [4, 3, 4, -4, 3, -4, -33, 22, -34, 23, -25, 16]);
    design.addPosition("ED49", [0, 3, 0, -4, 3, -4, -33, 22, -34, 0, -25, 16]);
    design.addPosition("ED17", [-3, -4, 3, -4, 3, -3, -32, 0, -33, 22, -25, 16]);
    design.addPosition("ED28", [-3, -4, 3, -4, 3, -3, -32, 21, -33, 22, -25, 16]);
    design.addPosition("ED39", [-3, -4, 3, -4, 3, -3, -32, 21, -33, 0, -25, 16]);
    design.addPosition("EC17", [3, 0, 3, -3, 0, -3, -31, 0, -32, 21, -25, 16]);
    design.addPosition("EC28", [3, 2, 3, -3, 2, -3, -31, 20, -32, 21, -25, 16]);
    design.addPosition("EC39", [0, 2, 0, -3, 2, -3, -31, 20, -32, 0, -25, 16]);
    design.addPosition("EC18", [-2, -3, 2, -3, 2, -2, -30, 0, -31, 20, -25, 16]);
    design.addPosition("EC29", [-2, -3, 2, -3, 2, -2, -30, 19, -31, 0, -25, 16]);
    design.addPosition("EB18", [2, 0, 2, -2, 0, -2, -29, 0, -30, 19, -25, 16]);
    design.addPosition("EB29", [0, 1, 0, -2, 1, -2, -29, 18, -30, 0, -25, 16]);
    design.addPosition("EB19", [-1, -2, 1, -2, 1, -1, -28, 0, -29, 0, -25, 16]);
    design.addPosition("EA19", [0, 0, 0, -1, 0, -1, -27, 0, -28, 0, -25, 16]);
    design.addPosition("DD16", [4, 0, 4, 0, 0, 0, -24, 0, -25, 16, -16, 0]);
    design.addPosition("DD27", [4, 3, 4, 0, 3, 0, -24, 15, -25, 16, -16, 0]);
    design.addPosition("DD38", [4, 3, 4, 0, 3, 0, -24, 15, -25, 16, -16, 0]);
    design.addPosition("DD49", [0, 3, 0, 0, 3, 0, -24, 15, -25, 0, -16, 0]);
    design.addPosition("DD17", [-3, -4, 3, -4, 3, -3, -23, 0, -24, 15, -16, 0]);
    design.addPosition("DD28", [-3, -4, 3, -4, 3, -3, -23, 14, -24, 15, -16, 0]);
    design.addPosition("DD39", [-3, -4, 3, -4, 3, -3, -23, 14, -24, 0, -16, 0]);
    design.addPosition("DC17", [3, 0, 3, -3, 0, -3, -22, 0, -23, 14, -16, 9]);
    design.addPosition("DC28", [3, 2, 3, -3, 2, -3, -22, 13, -23, 14, -16, 9]);
    design.addPosition("DC39", [0, 2, 0, -3, 2, -3, -22, 13, -23, 0, -16, 9]);
    design.addPosition("DC18", [-2, -3, 2, -3, 2, -2, -21, 0, -22, 13, -16, 9]);
    design.addPosition("DC29", [-2, -3, 2, -3, 2, -2, -21, 12, -22, 0, -16, 9]);
    design.addPosition("DB18", [2, 0, 2, -2, 0, -2, -20, 0, -21, 12, -16, 9]);
    design.addPosition("DB29", [0, 1, 0, -2, 1, -2, -20, 11, -21, 0, -16, 9]);
    design.addPosition("DB19", [-1, -2, 1, -2, 1, -1, -19, 0, -20, 0, -16, 9]);
    design.addPosition("DA19", [0, 0, 0, -1, 0, -1, -18, 0, -19, 0, -16, 9]);
    design.addPosition("CC17", [3, 0, 3, 0, 0, 0, -15, 0, -16, 9, -9, 0]);
    design.addPosition("CC28", [3, 2, 3, 0, 2, 0, -15, 8, -16, 9, -9, 0]);
    design.addPosition("CC39", [0, 2, 0, 0, 2, 0, -15, 8, -16, 0, -9, 0]);
    design.addPosition("CC18", [-2, -3, 2, -3, 2, -2, -14, 0, -15, 8, -9, 0]);
    design.addPosition("CC29", [-2, -3, 2, -3, 2, -2, -14, 7, -15, 0, -9, 0]);
    design.addPosition("CB18", [2, 0, 2, -2, 0, -2, -13, 0, -14, 7, -9, 4]);
    design.addPosition("CB29", [0, 1, 0, -2, 1, -2, -13, 6, -14, 0, -9, 4]);
    design.addPosition("CB19", [-1, -2, 1, -2, 1, -1, -12, 0, -13, 0, -9, 4]);
    design.addPosition("CA19", [0, 0, 0, -1, 0, -1, -11, 0, -12, 0, -9, 4]);
    design.addPosition("BB18", [2, 0, 2, 0, 0, 0, -8, 0, -9, 4, -4, 0]);
    design.addPosition("BB29", [0, 1, 0, 0, 1, 0, -8, 3, -9, 0, -4, 0]);
    design.addPosition("BB19", [-1, -2, 1, -2, 1, -1, -7, 0, -8, 0, -4, 0]);
    design.addPosition("BA19", [0, 0, 0, -1, 0, -1, -6, 0, -7, 0, -4, 1]);
    design.addPosition("AA19", [0, 0, 0, 0, 0, 0, -3, 0, -4, 0, -1, 0]);
    design.addPosition("G1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("home", 1, [150, 151, 152, 153, 155, 156, 157, 158, 159, 154]);
    design.addZone("home", 2, [140, 141, 142, 143, 145, 146, 147, 148, 149, 144]);
    design.addZone("s0", 1, [0, 7, 1, 8, 2, 9, 13, 19, 14, 20, 15, 24, 29, 25, 49, 55, 50, 56, 51, 60, 65, 61, 69, 85]);
    design.addZone("s0", 2, [0, 7, 1, 8, 2, 9, 13, 19, 14, 20, 15, 24, 29, 25, 49, 55, 50, 56, 51, 60, 65, 61, 69, 85]);
    design.addZone("s1", 1, [10, 4, 11, 5, 12, 6, 16, 22, 17, 23, 18, 27, 32, 28, 52, 58, 53, 59, 54, 63, 68, 64, 72, 89]);
    design.addZone("s1", 2, [10, 4, 11, 5, 12, 6, 16, 22, 17, 23, 18, 27, 32, 28, 52, 58, 53, 59, 54, 63, 68, 64, 72, 89]);
    design.addZone("s2", 1, [48, 47, 46, 44, 42, 39, 45, 43, 41, 38, 35, 40, 37, 34, 84, 83, 82, 80, 78, 81, 79, 77, 76, 109]);
    design.addZone("s2", 2, [48, 47, 46, 44, 42, 39, 45, 43, 41, 38, 35, 40, 37, 34, 84, 83, 82, 80, 78, 81, 79, 77, 76, 109]);
    design.addZone("s3", 1, [111, 115, 112, 117, 120, 118, 121, 119, 122, 123, 126, 129, 127, 130, 128, 131, 133, 132, 134, 135, 137, 136, 138, 139]);
    design.addZone("s3", 2, [111, 115, 112, 117, 120, 118, 121, 119, 122, 123, 126, 129, 127, 130, 128, 131, 133, 132, 134, 135, 137, 136, 138, 139]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	2);	// $3
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	3);	// $4
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	4);	// $5
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	5);	// $6
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	6);	// $7
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	7);	// $8
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	8);	// $9
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	8);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	9);	// $10
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	9);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	10);	// $11
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	10);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	11);	// $12
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	11);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	12);	// $13
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.IF,	6);
    design.addCommand(0, ZRF.LITERAL,	0);	// Goal
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.LITERAL,	0);	// false
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.LITERAL,	1);	// true
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	13);	// $14
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	14);	// $15
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	15);	// $16
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	16);	// $17
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	17);	// $18
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	18);	// $19
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	19);	// $20
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	20);	// $21
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	21);	// $22
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	8);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	22);	// $23
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	9);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	23);	// $24
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	10);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	24);	// $25
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	11);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	25);	// $26
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	6);
    design.addCommand(0, ZRF.LITERAL,	0);	// Goal
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.LITERAL,	0);	// false
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.LITERAL,	1);	// true
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	2);	// $3
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	3);	// $4
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	4);	// $5
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	5);	// $6
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	6);	// $7
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	7);	// $8
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	8);	// $9
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	8);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	9);	// $10
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	9);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	10);	// $11
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	10);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	11);	// $12
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	11);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	12);	// $13
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.IF,	6);
    design.addCommand(1, ZRF.LITERAL,	0);	// Goal
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	3);
    design.addCommand(1, ZRF.LITERAL,	0);	// false
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.LITERAL,	1);	// true
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	13);	// $14
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	14);	// $15
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	15);	// $16
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	16);	// $17
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	17);	// $18
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	18);	// $19
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	19);	// $20
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	20);	// $21
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	21);	// $22
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	8);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	22);	// $23
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	9);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	23);	// $24
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	10);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	24);	// $25
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	11);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	25);	// $26
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.PARAM,	26);	// $27
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	27);	// $28
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	28);	// $29
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	29);	// $30
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	30);	// $31
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	31);	// $32
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	32);	// $33
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	33);	// $34
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	34);	// $35
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	8);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	35);	// $36
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	9);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	36);	// $37
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	10);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	37);	// $38
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	11);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	38);	// $39
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	6);
    design.addCommand(1, ZRF.LITERAL,	0);	// Goal
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	3);
    design.addCommand(1, ZRF.LITERAL,	0);	// false
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.LITERAL,	1);	// true
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Goal", 0, 15000);

    design.addPiece("Vanguard", 1, 100);

    design.addPiece("Vanguard-carrier", 2, 20100);

    design.addPiece("Power-Vanguard", 3, 200);
    design.addMove(3, 0, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(3, 0, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(3, 0, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(3, 0, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(3, 0, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(3, 0, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(3, 0, [6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(3, 0, [7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(3, 0, [8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(3, 0, [9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(3, 0, [10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(3, 0, [11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);

    design.addPiece("Power-Vanguard-carrier", 4, 20200);
    design.addMove(4, 0, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(4, 0, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(4, 0, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(4, 0, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(4, 0, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(4, 0, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(4, 0, [6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(4, 0, [7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(4, 0, [8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(4, 0, [9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(4, 0, [10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(4, 0, [11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);

    design.addPiece("Lancer", 5, 500);
    design.addMove(5, 0, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(5, 0, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(5, 0, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(5, 0, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(5, 0, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(5, 0, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(5, 0, [6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(5, 0, [7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(5, 0, [8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(5, 0, [9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(5, 0, [10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(5, 0, [11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(5, 1, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(5, 1, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(5, 1, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(5, 1, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(5, 1, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(5, 1, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);

    design.addPiece("Lancer-carrier", 6, 20500);
    design.addMove(6, 0, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(6, 0, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(6, 0, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(6, 0, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(6, 0, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(6, 0, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(6, 0, [6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(6, 0, [7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(6, 0, [8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(6, 0, [9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(6, 0, [10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(6, 0, [11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(6, 1, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(6, 1, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(6, 1, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(6, 1, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(6, 1, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(6, 1, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);

    design.addPiece("Fencer", 7, 800);
    design.addMove(7, 0, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 0, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 0, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 0, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 0, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 0, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 0, [6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 0, [7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 0, [8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 0, [9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 0, [10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 0, [11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(7, 1, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);

    design.addPiece("Fencer-carrier", 8, 20800);
    design.addMove(8, 0, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 0, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 0, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 0, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 0, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 0, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 0, [6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 0, [7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 0, [8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 0, [9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 0, [10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 0, [11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(8, 1, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);

    design.addPiece("Swift", 9, 5000);
    design.addMove(9, 0, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 0, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 0, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 0, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 0, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 0, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 0, [6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 0, [7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 0, [8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 0, [9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 0, [10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 0, [11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(9, 1, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);

    design.addPiece("Swift-carrier", 10, 25000);
    design.addMove(10, 0, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 0, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 0, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 0, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 0, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 0, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 0, [6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 0, [7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 0, [8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 0, [9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 0, [10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 0, [11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 6, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 7, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 8, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 9, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 10, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 11, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 4, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 2, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 1, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 5, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);
    design.addMove(10, 1, [3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 3, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11, 0, 1, 2, 0, 4, 5, 3, 6, 7, 8, 9, 10, 11], 1);

    design.addPiece("Flier", 11, 3000);

    design.addPiece("Flier-carrier", 12, 23000);

    design.addPiece("Blockader", 13, 0);

    design.setup("Gold", "Vanguard", 155);
    design.setup("Gold", "Vanguard", 156);
    design.setup("Gold", "Vanguard", 157);
    design.setup("Gold", "Lancer", 150);
    design.setup("Gold", "Flier", 151);
    design.setup("Gold", "Flier", 152);
    design.setup("Gold", "Swift", 153);
    design.setup("Gold", "Fencer", 158);
    design.setup("Gold", "Blockader", 159);
    design.setup("Gold", "Goal", 154);
    design.setup("Green", "Vanguard", 145);
    design.setup("Green", "Vanguard", 146);
    design.setup("Green", "Vanguard", 147);
    design.setup("Green", "Lancer", 140);
    design.setup("Green", "Flier", 141);
    design.setup("Green", "Flier", 142);
    design.setup("Green", "Swift", 143);
    design.setup("Green", "Fencer", 148);
    design.setup("Green", "Blockader", 149);
    design.setup("Green", "Goal", 144);
}

Dagaz.View.configure = function(view) {
    const opacity = 0.3;

    view.defBoardTriangular(640, 547, 1, -180, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board-7", opacity);
    view.defBoardTriangular(550, 469, 1, -120, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board-6", opacity);
    view.defBoardTriangular(455, 391, 1, -60,  [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board-5", opacity);
    view.defBoardTriangular(362, 313, 1, 0,    [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board-4", opacity);
    view.defBoardTriangular(272, 235, 1, 60,   [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board-3", opacity);
    view.defBoardTriangular(182, 157, 1, 120,  [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board-2", opacity);
    view.defBoardTriangular( 92,  79, 1, 180,  [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board-1", opacity);

    const red = 0x353535;
    const blue = 0x353535;
    const tokenPath = '../res/xiangqi';

    view.defPieceToken(0, 1, tokenPath, 'token.js', 'rGoal', 'Bump', red);
    view.defPieceToken(0, 2, tokenPath, 'token.js', 'bGoal', 'Bump', blue);
    view.defPieceToken(1, 1, tokenPath, 'token.js', 'rVanguard', 'Bump', red);
    view.defPieceToken(1, 2, tokenPath, 'token.js', 'bVanguard', 'Bump', blue);
    view.defPieceToken(2, 1, tokenPath, 'token.js', 'rVanguardCarrier', 'Bump', red);
    view.defPieceToken(2, 2, tokenPath, 'token.js', 'bVanguardCarrier', 'Bump', blue);
    view.defPieceToken(3, 1, tokenPath, 'token.js', 'rVanguardPower', 'Bump', red);
    view.defPieceToken(3, 2, tokenPath, 'token.js', 'bVanguardPower', 'Bump', blue);
    view.defPieceToken(4, 1, tokenPath, 'token.js', 'rVanguardCarrierPower', 'Bump', red);
    view.defPieceToken(4, 2, tokenPath, 'token.js', 'bVanguardCarrierPower', 'Bump', blue);
    view.defPieceToken(5, 1, tokenPath, 'token.js', 'rLancer', 'Bump', red);
    view.defPieceToken(5, 2, tokenPath, 'token.js', 'bLancer', 'Bump', blue);
    view.defPieceToken(6, 1, tokenPath, 'token.js', 'rLancerCarrier', 'Bump', red);
    view.defPieceToken(6, 2, tokenPath, 'token.js', 'bLancerCarrier', 'Bump', blue);
    view.defPieceToken(7, 1, tokenPath, 'token.js', 'rFencer', 'Bump', red);
    view.defPieceToken(7, 2, tokenPath, 'token.js', 'bFencer', 'Bump', blue);
    view.defPieceToken(8, 1, tokenPath, 'token.js', 'rFencerCarrier', 'Bump', red);
    view.defPieceToken(8, 2, tokenPath, 'token.js', 'bFencerCarrier', 'Bump', blue);
    view.defPieceToken(9, 1, tokenPath, 'token.js', 'rSwift', 'Bump', red);
    view.defPieceToken(9, 2, tokenPath, 'token.js', 'bSwift', 'Bump', blue);
    view.defPieceToken(10, 1, tokenPath, 'token.js', 'rSwiftCarrier', 'Bump', red);
    view.defPieceToken(10, 2, tokenPath, 'token.js', 'bSwiftCarrier', 'Bump', blue);
    view.defPieceToken(11, 1, tokenPath, 'token.js', 'rFlier', 'Bump', red);
    view.defPieceToken(11, 2, tokenPath, 'token.js', 'bFlier', 'Bump', blue);
    view.defPieceToken(12, 1, tokenPath, 'token.js', 'rFlierCarrier', 'Bump', red);
    view.defPieceToken(12, 2, tokenPath, 'token.js', 'bFlierCarrier', 'Bump', blue);
    view.defPieceToken(13, 1, tokenPath, 'token.js', 'rBlockader', 'Bump', red);
    view.defPieceToken(13, 2, tokenPath, 'token.js', 'bBlockader', 'Bump', blue);

    view.setCamera(0, 0, 0, -109, 215, 155);
 
    view.defControl("InfoControl", "1989 Leonard B. Loyd, Jr", true);
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'klin-zha-board.htm' : 'klin-zha.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("GG13", -274, 245, 44, 33, -177);
    view.defPosition("GG24", -181, 245, 44, 33, -177);
    view.defPosition("GG35", -90, 245, 44, 33, -177);
    view.defPosition("GG46", 0, 245, 44, 33, -177);
    view.defPosition("GG57", 90, 245, 44, 33, -177);
    view.defPosition("GG68", 181, 245, 44, 33, -177);
    view.defPosition("GG79", 274, 245, 44, 33, -177);
    view.defPosition("GG14", -227, 220, 44, 33, -177);
    view.defPosition("GG25", -135, 220, 44, 33, -177);
    view.defPosition("GG36", -45, 220, 44, 33, -177);
    view.defPosition("GG47", 45, 220, 44, 33, -177);
    view.defPosition("GG58", 135, 220, 44, 33, -177);
    view.defPosition("GG69", 227, 220, 44, 33, -177);
    view.defPosition("GF14", -228, 166, 44, 33, -177);
    view.defPosition("GF25", -135, 166, 44, 33, -177);
    view.defPosition("GF36", -45, 166, 44, 33, -177);
    view.defPosition("GF47", 45, 166, 44, 33, -177);
    view.defPosition("GF58", 135, 166, 44, 33, -177);
    view.defPosition("GF69", 228, 166, 44, 33, -177);
    view.defPosition("GF15", -181, 142, 44, 33, -177);
    view.defPosition("GF26", -90, 142, 44, 33, -177);
    view.defPosition("GF37", 0, 142, 44, 33, -177);
    view.defPosition("GF48", 90, 142, 44, 33, -177);
    view.defPosition("GF59", 181, 142, 44, 33, -177);
    view.defPosition("GE15", -181, 88, 44, 33, -177);
    view.defPosition("GE26", -90, 88, 44, 33, -177);
    view.defPosition("GE37", 0, 88, 44, 33, -177);
    view.defPosition("GE48", 90, 88, 44, 33, -177);
    view.defPosition("GE59", 181, 88, 44, 33, -177);
    view.defPosition("GE16", -135, 64, 44, 33, -177);
    view.defPosition("GE27", -45, 64, 44, 33, -177);
    view.defPosition("GE38", 45, 64, 44, 33, -177);
    view.defPosition("GE49", 135, 64, 44, 33, -177);
    view.defPosition("GD16", -137, 10, 44, 33, -177);
    view.defPosition("GD27", -45, 10, 44, 33, -177);
    view.defPosition("GD38", 45, 10, 44, 33, -177);
    view.defPosition("GD49", 137, 10, 44, 33, -177);
    view.defPosition("GD17", -90, -13, 44, 33, -177);
    view.defPosition("GD28", 0, -13, 44, 33, -177);
    view.defPosition("GD39", 90, -13, 44, 33, -177);
    view.defPosition("GC17", -91, -69, 44, 33, -177);
    view.defPosition("GC28", 0, -69, 44, 33, -177);
    view.defPosition("GC39", 91, -69, 44, 33, -177);
    view.defPosition("GC18", -45, -92, 44, 33, -177);
    view.defPosition("GC29", 45, -92, 44, 33, -177);
    view.defPosition("GB18", -45, -148, 44, 33, -177);
    view.defPosition("GB29", 45, -148, 44, 33, -177);
    view.defPosition("GB19", 0, -170, 44, 33, -177);
    view.defPosition("GA19", 0, -226, 44, 33, -177);

    view.defPosition("FF14", -228, 206, 44, 33, -117);
    view.defPosition("FF25", -135, 206, 44, 33, -117);
    view.defPosition("FF36", -45, 206, 44, 33, -117);
    view.defPosition("FF47", 45, 206, 44, 33, -117);
    view.defPosition("FF58", 135, 206, 44, 33, -117);
    view.defPosition("FF69", 228, 206, 44, 33, -117);
    view.defPosition("FF15", -181, 182, 44, 33, -117);
    view.defPosition("FF26", -90, 182, 44, 33, -117);
    view.defPosition("FF37", 0, 182, 44, 33, -117);
    view.defPosition("FF48", 90, 182, 44, 33, -117);
    view.defPosition("FF59", 181, 182, 44, 33, -117);
    view.defPosition("FE15", -181, 128, 44, 33, -117);
    view.defPosition("FE26", -90, 128, 44, 33, -117);
    view.defPosition("FE37", 0, 128, 44, 33, -117);
    view.defPosition("FE48", 90, 128, 44, 33, -117);
    view.defPosition("FE59", 181, 128, 44, 33, -117);
    view.defPosition("FE16", -135, 104, 44, 33, -117);
    view.defPosition("FE27", -45, 104, 44, 33, -117);
    view.defPosition("FE38", 45, 104, 44, 33, -117);
    view.defPosition("FE49", 135, 104, 44, 33, -117);
    view.defPosition("FD16", -137, 50, 44, 33, -117);
    view.defPosition("FD27", -45, 50, 44, 33, -117);
    view.defPosition("FD38", 45, 50, 44, 33, -117);
    view.defPosition("FD49", 137, 50, 44, 33, -117);
    view.defPosition("FD17", -90, 27, 44, 33, -117);
    view.defPosition("FD28", 0, 27, 44, 33, -117);
    view.defPosition("FD39", 90, 27, 44, 33, -117);
    view.defPosition("FC17", -91, -29, 44, 33, -117);
    view.defPosition("FC28", 0, -29, 44, 33, -117);
    view.defPosition("FC39", 91, -29, 44, 33, -117);
    view.defPosition("FC18", -45, -52, 44, 33, -117);
    view.defPosition("FC29", 45, -52, 44, 33, -117);
    view.defPosition("FB18", -45, -108, 44, 33, -117);
    view.defPosition("FB29", 45, -108, 44, 33, -117);
    view.defPosition("FB19", 0, -130, 44, 33, -117);
    view.defPosition("FA19", 0, -186, 44, 33, -117);

    view.defPosition("EE15", -181, 167, 44, 33, -57);
    view.defPosition("EE26", -90, 167, 44, 33, -57);
    view.defPosition("EE37", 0, 167, 44, 33, -57);
    view.defPosition("EE48", 90, 167, 44, 33, -57);
    view.defPosition("EE59", 181, 167, 44, 33, -57);
    view.defPosition("EE16", -135, 143, 44, 33, -57);
    view.defPosition("EE27", -45, 143, 44, 33, -57);
    view.defPosition("EE38", 45, 143, 44, 33, -57);
    view.defPosition("EE49", 135, 143, 44, 33, -57);
    view.defPosition("ED16", -137, 89, 44, 33, -57);
    view.defPosition("ED27", -45, 89, 44, 33, -57);
    view.defPosition("ED38", 45, 89, 44, 33, -57);
    view.defPosition("ED49", 137, 89, 44, 33, -57);
    view.defPosition("ED17", -90, 66, 44, 33, -57);
    view.defPosition("ED28", 0, 66, 44, 33, -57);
    view.defPosition("ED39", 90, 66, 44, 33, -57);
    view.defPosition("EC17", -91, 10, 44, 33, -57);
    view.defPosition("EC28", 0, 10, 44, 33, -57);
    view.defPosition("EC39", 91, 10, 44, 33, -57);
    view.defPosition("EC18", -45, -13, 44, 33, -57);
    view.defPosition("EC29", 45, -13, 44, 33, -57);
    view.defPosition("EB18", -45, -69, 44, 33, -57);
    view.defPosition("EB29", 45, -69, 44, 33, -57);
    view.defPosition("EB19", 0, -91, 44, 33, -57);
    view.defPosition("EA19", 0, -147, 44, 33, -57);

    view.defPosition("DD16", -137, 128, 44, 33, 3);
    view.defPosition("DD27", -45, 128, 44, 33, 3);
    view.defPosition("DD38", 45, 128, 44, 33, 3);
    view.defPosition("DD49", 137, 128, 44, 33, 3);
    view.defPosition("DD17", -90, 105, 44, 33, 3);
    view.defPosition("DD28", 0, 105, 44, 33, 3);
    view.defPosition("DD39", 90, 105, 44, 33, 3);
    view.defPosition("DC17", -91, 49, 44, 33, 3);
    view.defPosition("DC28", 0, 49, 44, 33, 3);
    view.defPosition("DC39", 91, 49, 44, 33, 3);
    view.defPosition("DC18", -45, 26, 44, 33, 3);
    view.defPosition("DC29", 45, 26, 44, 33, 3);
    view.defPosition("DB18", -45, -30, 44, 33, 3);
    view.defPosition("DB29", 45, -30, 44, 33, 3);
    view.defPosition("DB19", 0, -52, 44, 33, 3);
    view.defPosition("DA19", 0, -108, 44, 33, 3);

    view.defPosition("CC17", -91, 88, 44, 33, 63);
    view.defPosition("CC28", 0, 88, 44, 33, 63);
    view.defPosition("CC39", 91, 88, 44, 33, 63);
    view.defPosition("CC18", -45, 65, 44, 33, 63);
    view.defPosition("CC29", 45, 65, 44, 33, 63);
    view.defPosition("CB18", -45, 9, 44, 33, 63);
    view.defPosition("CB29", 45, 9, 44, 33, 63);
    view.defPosition("CB19", 0, -13, 44, 33, 63);
    view.defPosition("CA19", 0, -69, 44, 33, 63);

    view.defPosition("BB18", -45, 49, 44, 33, 123);
    view.defPosition("BB29", 45, 49, 44, 33, 123);
    view.defPosition("BB19", 0, 27, 44, 33, 123);
    view.defPosition("BA19", 0, -29, 44, 33, 123);

    view.defPosition("AA19", 0, 10, 44, 33, 183);

    view.defPosition("G1", -328, 8, 44, 33, -177);
    view.defPosition("G2", -448, 164, 44, 33, -177);
    view.defPosition("G3", -388, 164, 44, 33, -177);
    view.defPosition("G4", -448, 8, 44, 33, -177);
    view.defPosition("G5", -448, 242, 44, 33, -177);
    view.defPosition("G6", -448, 86, 44, 33, -177);
    view.defPosition("G7", -388, 86, 44, 33, -177);
    view.defPosition("G8", -328, 86, 44, 33, -177);
    view.defPosition("G9", -388, 8, 44, 33, -177);
    view.defPosition("G10", -268, 8, 44, 33, -177);

    view.defPosition("Y1", 328, 8, 44, 33, -177);
    view.defPosition("Y2", 388, 164, 44, 33, -177);
    view.defPosition("Y3", 448, 164, 44, 33, -177);
    view.defPosition("Y4", 448, 8, 44, 33, -177);
    view.defPosition("Y5", 448, 242, 44, 33, -177);
    view.defPosition("Y6", 328, 86, 44, 33, -177);
    view.defPosition("Y7", 388, 86, 44, 33, -177);
    view.defPosition("Y8", 448, 86, 44, 33, -177);
    view.defPosition("Y9", 388, 8, 44, 33, -177);
    view.defPosition("Y10", 268, 8, 44, 33, -177);
}
