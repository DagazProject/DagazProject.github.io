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

    design.addPlayer("Gold", [1, 0, 3, 2, 5, 4]);
    design.addPlayer("Green", [0, 1, 2, 3, 4, 5]);

    design.addPosition("GG13", [7, 0, 7, 0, 0, 0]);
    design.addPosition("GG24", [7, 6, 7, 0, 6, 0]);
    design.addPosition("GG35", [7, 6, 7, 0, 6, 0]);
    design.addPosition("GG46", [7, 6, 7, 0, 6, 0]);
    design.addPosition("GG57", [7, 6, 7, 0, 6, 0]);
    design.addPosition("GG68", [7, 6, 7, 0, 6, 0]);
    design.addPosition("GG79", [0, 6, 0, 0, 6, 0]);
    design.addPosition("GG14", [-6, -7, 6, -7, 6, -6]);
    design.addPosition("GG25", [-6, -7, 6, -7, 6, -6]);
    design.addPosition("GG36", [-6, -7, 6, -7, 6, -6]);
    design.addPosition("GG47", [-6, -7, 6, -7, 6, -6]);
    design.addPosition("GG58", [-6, -7, 6, -7, 6, -6]);
    design.addPosition("GG69", [-6, -7, 6, -7, 6, -6]);
    design.addPosition("GF14", [6, 0, 6, -6, 0, -6]);
    design.addPosition("GF25", [6, 5, 6, -6, 5, -6]);
    design.addPosition("GF36", [6, 5, 6, -6, 5, -6]);
    design.addPosition("GF47", [6, 5, 6, -6, 5, -6]);
    design.addPosition("GF58", [6, 5, 6, -6, 5, -6]);
    design.addPosition("GF69", [0, 5, 0, -6, 5, -6]);
    design.addPosition("GF15", [-5, -6, 5, -6, 5, -5]);
    design.addPosition("GF26", [-5, -6, 5, -6, 5, -5]);
    design.addPosition("GF37", [-5, -6, 5, -6, 5, -5]);
    design.addPosition("GF48", [-5, -6, 5, -6, 5, -5]);
    design.addPosition("GF59", [-5, -6, 5, -6, 5, -5]);
    design.addPosition("GE15", [5, 0, 5, -5, 0, -5]);
    design.addPosition("GE26", [5, 4, 5, -5, 4, -5]);
    design.addPosition("GE37", [5, 4, 5, -5, 4, -5]);
    design.addPosition("GE48", [5, 4, 5, -5, 4, -5]);
    design.addPosition("GE59", [0, 4, 0, -5, 4, -5]);
    design.addPosition("GE16", [-4, -5, 4, -5, 4, -4]);
    design.addPosition("GE27", [-4, -5, 4, -5, 4, -4]);
    design.addPosition("GE38", [-4, -5, 4, -5, 4, -4]);
    design.addPosition("GE49", [-4, -5, 4, -5, 4, -4]);
    design.addPosition("GD16", [4, 0, 4, -4, 0, -4]);
    design.addPosition("GD27", [4, 3, 4, -4, 3, -4]);
    design.addPosition("GD38", [4, 3, 4, -4, 3, -4]);
    design.addPosition("GD49", [0, 3, 0, -4, 3, -4]);
    design.addPosition("GD17", [-3, -4, 3, -4, 3, -3]);
    design.addPosition("GD28", [-3, -4, 3, -4, 3, -3]);
    design.addPosition("GD39", [-3, -4, 3, -4, 3, -3]);
    design.addPosition("GC17", [3, 0, 3, -3, 0, -3]);
    design.addPosition("GC28", [3, 2, 3, -3, 2, -3]);
    design.addPosition("GC39", [0, 2, 0, -3, 2, -3]);
    design.addPosition("GC18", [-2, -3, 2, -3, 2, -2]);
    design.addPosition("GC29", [-2, -3, 2, -3, 2, -2]);
    design.addPosition("GB18", [2, 0, 2, -2, 0, -2]);
    design.addPosition("GB29", [0, 1, 0, -2, 1, -2]);
    design.addPosition("GB19", [-1, -2, 1, -2, 1, -1]);
    design.addPosition("GA19", [0, 0, 0, -1, 0, -1]);
    design.addPosition("FF14", [6, 0, 6, 0, 0, 0]);
    design.addPosition("FF25", [6, 5, 6, 0, 5, 0]);
    design.addPosition("FF36", [6, 5, 6, 0, 5, 0]);
    design.addPosition("FF47", [6, 5, 6, 0, 5, 0]);
    design.addPosition("FF58", [6, 5, 6, 0, 5, 0]);
    design.addPosition("FF69", [0, 5, 0, 0, 5, 0]);
    design.addPosition("FF15", [-5, -6, 5, -6, 5, -5]);
    design.addPosition("FF26", [-5, -6, 5, -6, 5, -5]);
    design.addPosition("FF37", [-5, -6, 5, -6, 5, -5]);
    design.addPosition("FF48", [-5, -6, 5, -6, 5, -5]);
    design.addPosition("FF59", [-5, -6, 5, -6, 5, -5]);
    design.addPosition("FE15", [5, 0, 5, -5, 0, -5]);
    design.addPosition("FE26", [5, 4, 5, -5, 4, -5]);
    design.addPosition("FE37", [5, 4, 5, -5, 4, -5]);
    design.addPosition("FE48", [5, 4, 5, -5, 4, -5]);
    design.addPosition("FE59", [0, 4, 0, -5, 4, -5]);
    design.addPosition("FE16", [-4, -5, 4, -5, 4, -4]);
    design.addPosition("FE27", [-4, -5, 4, -5, 4, -4]);
    design.addPosition("FE38", [-4, -5, 4, -5, 4, -4]);
    design.addPosition("FE49", [-4, -5, 4, -5, 4, -4]);
    design.addPosition("FD16", [4, 0, 4, -4, 0, -4]);
    design.addPosition("FD27", [4, 3, 4, -4, 3, -4]);
    design.addPosition("FD38", [4, 3, 4, -4, 3, -4]);
    design.addPosition("FD49", [0, 3, 0, -4, 3, -4]);
    design.addPosition("FD17", [-3, -4, 3, -4, 3, -3]);
    design.addPosition("FD28", [-3, -4, 3, -4, 3, -3]);
    design.addPosition("FD39", [-3, -4, 3, -4, 3, -3]);
    design.addPosition("FC17", [3, 0, 3, -3, 0, -3]);
    design.addPosition("FC28", [3, 2, 3, -3, 2, -3]);
    design.addPosition("FC39", [0, 2, 0, -3, 2, -3]);
    design.addPosition("FC18", [-2, -3, 2, -3, 2, -2]);
    design.addPosition("FC29", [-2, -3, 2, -3, 2, -2]);
    design.addPosition("FB18", [2, 0, 2, -2, 0, -2]);
    design.addPosition("FB29", [0, 1, 0, -2, 1, -2]);
    design.addPosition("FB19", [-1, -2, 1, -2, 1, -1]);
    design.addPosition("FA19", [0, 0, 0, -1, 0, -1]);
    design.addPosition("EE15", [5, 0, 5, 0, 0, 0]);
    design.addPosition("EE26", [5, 4, 5, 0, 4, 0]);
    design.addPosition("EE37", [5, 4, 5, 0, 4, 0]);
    design.addPosition("EE48", [5, 4, 5, 0, 4, 0]);
    design.addPosition("EE59", [0, 4, 0, 0, 4, 0]);
    design.addPosition("EE16", [-4, -5, 4, -5, 4, -4]);
    design.addPosition("EE27", [-4, -5, 4, -5, 4, -4]);
    design.addPosition("EE38", [-4, -5, 4, -5, 4, -4]);
    design.addPosition("EE49", [-4, -5, 4, -5, 4, -4]);
    design.addPosition("ED16", [4, 0, 4, -4, 0, -4]);
    design.addPosition("ED27", [4, 3, 4, -4, 3, -4]);
    design.addPosition("ED38", [4, 3, 4, -4, 3, -4]);
    design.addPosition("ED49", [0, 3, 0, -4, 3, -4]);
    design.addPosition("ED17", [-3, -4, 3, -4, 3, -3]);
    design.addPosition("ED28", [-3, -4, 3, -4, 3, -3]);
    design.addPosition("ED39", [-3, -4, 3, -4, 3, -3]);
    design.addPosition("EC17", [3, 0, 3, -3, 0, -3]);
    design.addPosition("EC28", [3, 2, 3, -3, 2, -3]);
    design.addPosition("EC39", [0, 2, 0, -3, 2, -3]);
    design.addPosition("EC18", [-2, -3, 2, -3, 2, -2]);
    design.addPosition("EC29", [-2, -3, 2, -3, 2, -2]);
    design.addPosition("EB18", [2, 0, 2, -2, 0, -2]);
    design.addPosition("EB29", [0, 1, 0, -2, 1, -2]);
    design.addPosition("EB19", [-1, -2, 1, -2, 1, -1]);
    design.addPosition("EA19", [0, 0, 0, -1, 0, -1]);
    design.addPosition("DD16", [4, 0, 4, 0, 0, 0]);
    design.addPosition("DD27", [4, 3, 4, 0, 3, 0]);
    design.addPosition("DD38", [4, 3, 4, 0, 3, 0]);
    design.addPosition("DD49", [0, 3, 0, 0, 3, 0]);
    design.addPosition("DD17", [-3, -4, 3, -4, 3, -3]);
    design.addPosition("DD28", [-3, -4, 3, -4, 3, -3]);
    design.addPosition("DD39", [-3, -4, 3, -4, 3, -3]);
    design.addPosition("DC17", [3, 0, 3, -3, 0, -3]);
    design.addPosition("DC28", [3, 2, 3, -3, 2, -3]);
    design.addPosition("DC39", [0, 2, 0, -3, 2, -3]);
    design.addPosition("DC18", [-2, -3, 2, -3, 2, -2]);
    design.addPosition("DC29", [-2, -3, 2, -3, 2, -2]);
    design.addPosition("DB18", [2, 0, 2, -2, 0, -2]);
    design.addPosition("DB29", [0, 1, 0, -2, 1, -2]);
    design.addPosition("DB19", [-1, -2, 1, -2, 1, -1]);
    design.addPosition("DA19", [0, 0, 0, -1, 0, -1]);
    design.addPosition("CC17", [3, 0, 3, 0, 0, 0]);
    design.addPosition("CC28", [3, 2, 3, 0, 2, 0]);
    design.addPosition("CC39", [0, 2, 0, 0, 2, 0]);
    design.addPosition("CC18", [-2, -3, 2, -3, 2, -2]);
    design.addPosition("CC29", [-2, -3, 2, -3, 2, -2]);
    design.addPosition("CB18", [2, 0, 2, -2, 0, -2]);
    design.addPosition("CB29", [0, 1, 0, -2, 1, -2]);
    design.addPosition("CB19", [-1, -2, 1, -2, 1, -1]);
    design.addPosition("CA19", [0, 0, 0, -1, 0, -1]);
    design.addPosition("BB18", [2, 0, 2, 0, 0, 0]);
    design.addPosition("BB29", [0, 1, 0, 0, 1, 0]);
    design.addPosition("BB19", [-1, -2, 1, -2, 1, -1]);
    design.addPosition("BA19", [0, 0, 0, -1, 0, -1]);
    design.addPosition("AA19", [0, 1, 2, 3, 4, 5]);
    design.addPosition("G1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G10", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y10", [0, 0, 0, 0, 0, 0]);

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

    design.addPiece("Goal", 0);

    design.addPiece("Vanguard", 1);

    design.addPiece("Vanguard-carrier", 2);

    design.addPiece("Power-Vanguard", 3);

    design.addPiece("Power-Vanguard-carrier", 4);

    design.addPiece("Lancer", 5);

    design.addPiece("Lancer-carrier", 6);

    design.addPiece("Fencer", 7);

    design.addPiece("Fencer-carrier", 8);

    design.addPiece("Swift", 9);

    design.addPiece("Swift-carrier", 10);

    design.addPiece("Flier", 11);

    design.addPiece("Flier-carrier", 12);

    design.addPiece("Blockader", 13);

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

    view.defBoardTriangular(631, 547, 1, -180, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board-7", opacity);
    view.defBoardTriangular(540, 469, 1, -120, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board-6", opacity);
    view.defBoardTriangular(452, 391, 1, -60,  [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board-5", opacity);
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
 
    view.defPosition("GG13", -156, 150, 25, 25, -177);
    view.defPosition("GG24", -104, 150, 25, 25, -177);
    view.defPosition("GG35", -52, 150, 25, 25, -177);
    view.defPosition("GG46", 0, 150, 25, 25, -177);
    view.defPosition("GG57", 52, 150, 25, 25, -177);
    view.defPosition("GG68", 104, 150, 25, 25, -177);
    view.defPosition("GG79", 156, 150, 25, 25, -177);
    view.defPosition("GG14", -130, 134, 25, 25, -177);
    view.defPosition("GG25", -78, 134, 25, 25, -177);
    view.defPosition("GG36", -26, 134, 25, 25, -177);
    view.defPosition("GG47", 26, 134, 25, 25, -177);
    view.defPosition("GG58", 78, 134, 25, 25, -177);
    view.defPosition("GG69", 130, 134, 25, 25, -177);
    view.defPosition("GF14", -130, 100, 25, 25, -177);
    view.defPosition("GF25", -78, 100, 25, 25, -177);
    view.defPosition("GF36", -26, 100, 25, 25, -177);
    view.defPosition("GF47", 26, 100, 25, 25, -177);
    view.defPosition("GF58", 78, 100, 25, 25, -177);
    view.defPosition("GF69", 130, 100, 25, 25, -177);
    view.defPosition("GF15", -104, 84, 25, 25, -177);
    view.defPosition("GF26", -52, 84, 25, 25, -177);
    view.defPosition("GF37", 0, 84, 25, 25, -177);
    view.defPosition("GF48", 52, 84, 25, 25, -177);
    view.defPosition("GF59", 104, 84, 25, 25, -177);
    view.defPosition("GE15", -104, 50, 25, 25, -177);
    view.defPosition("GE26", -52, 50, 25, 25, -177);
    view.defPosition("GE37", 0, 50, 25, 25, -177);
    view.defPosition("GE48", 52, 50, 25, 25, -177);
    view.defPosition("GE59", 104, 50, 25, 25, -177);
    view.defPosition("GE16", -78, 34, 25, 25, -177);
    view.defPosition("GE27", -26, 34, 25, 25, -177);
    view.defPosition("GE38", 26, 34, 25, 25, -177);
    view.defPosition("GE49", 78, 34, 25, 25, -177);
    view.defPosition("GD16", -78, 0, 25, 25, -177);
    view.defPosition("GD27", -26, 0, 25, 25, -177);
    view.defPosition("GD38", 26, 0, 25, 25, -177);
    view.defPosition("GD49", 78, 0, 25, 25, -177);
    view.defPosition("GD17", -52, -16, 25, 25, -177);
    view.defPosition("GD28", 0, -16, 25, 25, -177);
    view.defPosition("GD39", 52, -16, 25, 25, -177);
    view.defPosition("GC17", -52, -50, 25, 25, -177);
    view.defPosition("GC28", 0, -50, 25, 25, -177);
    view.defPosition("GC39", 52, -50, 25, 25, -177);
    view.defPosition("GC18", -26, -66, 25, 25, -177);
    view.defPosition("GC29", 26, -66, 25, 25, -177);
    view.defPosition("GB18", -26, -100, 25, 25, -177);
    view.defPosition("GB29", 26, -100, 25, 25, -177);
    view.defPosition("GB19", 220, 50, 25, 25, -177);
    view.defPosition("GA19", 0, -150, 25, 25, -177);

    view.defPosition("FF14", -130, 125, 25, 25, -117);
    view.defPosition("FF25", -78, 125, 25, 25, -117);
    view.defPosition("FF36", -26, 125, 25, 25, -117);
    view.defPosition("FF47", 26, 125, 25, 25, -117);
    view.defPosition("FF58", 78, 125, 25, 25, -117);
    view.defPosition("FF69", 130, 125, 25, 25, -117);
    view.defPosition("FF15", -104, 109, 25, 25, -117);
    view.defPosition("FF26", -52, 109, 25, 25, -117);
    view.defPosition("FF37", 0, 109, 25, 25, -117);
    view.defPosition("FF48", 52, 109, 25, 25, -117);
    view.defPosition("FF59", 104, 109, 25, 25, -117);
    view.defPosition("FE15", -104, 75, 25, 25, -117);
    view.defPosition("FE26", -52, 75, 25, 25, -117);
    view.defPosition("FE37", 0, 75, 25, 25, -117);
    view.defPosition("FE48", 52, 75, 25, 25, -117);
    view.defPosition("FE59", 104, 75, 25, 25, -117);
    view.defPosition("FE16", -78, 59, 25, 25, -117);
    view.defPosition("FE27", -26, 59, 25, 25, -117);
    view.defPosition("FE38", 26, 59, 25, 25, -117);
    view.defPosition("FE49", 78, 59, 25, 25, -117);
    view.defPosition("FD16", -78, 25, 25, 25, -117);
    view.defPosition("FD27", -26, 25, 25, 25, -117);
    view.defPosition("FD38", 26, 25, 25, 25, -117);
    view.defPosition("FD49", 78, 25, 25, 25, -117);
    view.defPosition("FD17", -52, 9, 25, 25, -117);
    view.defPosition("FD28", 0, 9, 25, 25, -117);
    view.defPosition("FD39", 52, 9, 25, 25, -117);
    view.defPosition("FC17", -52, -25, 25, 25, -117);
    view.defPosition("FC28", 0, -25, 25, 25, -117);
    view.defPosition("FC39", 52, -25, 25, 25, -117);
    view.defPosition("FC18", -26, -41, 25, 25, -117);
    view.defPosition("FC29", 26, -41, 25, 25, -117);
    view.defPosition("FB18", -26, -75, 25, 25, -117);
    view.defPosition("FB29", 26, -75, 25, 25, -117);
    view.defPosition("FB19", 0, -95, 25, 25, -117);
    view.defPosition("FA19", 0, -125, 25, 25, -117);

    view.defPosition("EE15", -104, 100, 25, 25, 57);
    view.defPosition("EE26", -52, 100, 25, 25, 57);
    view.defPosition("EE37", 0, 100, 25, 25, 57);
    view.defPosition("EE48", 52, 100, 25, 25, 57);
    view.defPosition("EE59", 104, 100, 25, 25, 57);
    view.defPosition("EE16", -78, 84, 25, 25, 57);
    view.defPosition("EE27", -26, 84, 25, 25, 57);
    view.defPosition("EE38", 26, 84, 25, 25, 57);
    view.defPosition("EE49", 78, 84, 25, 25, 57);
    view.defPosition("ED16", -78, 50, 25, 25, 57);
    view.defPosition("ED27", -26, 50, 25, 25, 57);
    view.defPosition("ED38", 26, 50, 25, 25, 57);
    view.defPosition("ED49", 78, 50, 25, 25, 57);
    view.defPosition("ED17", -52, 34, 25, 25, 57);
    view.defPosition("ED28", 0, 34, 25, 25, 57);
    view.defPosition("ED39", 52, 34, 25, 25, 57);
    view.defPosition("EC17", -52, 0, 25, 25, 57);
    view.defPosition("EC28", 0, 0, 25, 25, 57);
    view.defPosition("EC39", 52, 0, 25, 25, 57);
    view.defPosition("EC18", -26, -16, 25, 25, 57);
    view.defPosition("EC29", 26, -16, 25, 25, 57);
    view.defPosition("EB18", -26, -50, 25, 25, 57);
    view.defPosition("EB29", 26, -50, 25, 25, 57);
    view.defPosition("EB19", 0, -70, 25, 25, 3);
    view.defPosition("EA19", 0, -100, 25, 25, 57);

    view.defPosition("DD16", -78, 75, 25, 25, 3);
    view.defPosition("DD27", -26, 75, 25, 25, 3);
    view.defPosition("DD38", 26, 75, 25, 25, 3);
    view.defPosition("DD49", 78, 75, 25, 25, 3);
    view.defPosition("DD17", -52, 59, 25, 25, 3);
    view.defPosition("DD28", 0, 59, 25, 25, 3);
    view.defPosition("DD39", 52, 59, 25, 25, 3);
    view.defPosition("DC17", -52, 25, 25, 25, 3);
    view.defPosition("DC28", 0, 25, 25, 25, 3);
    view.defPosition("DC39", 52, 25, 25, 25, 3);
    view.defPosition("DC18", -26, 9, 25, 25, 3);
    view.defPosition("DC29", 26, 9, 25, 25, 3);
    view.defPosition("DB18", -26, -25, 25, 25, 3);
    view.defPosition("DB29", 26, -25, 25, 25, 3);
    view.defPosition("DB19", 0, -45, 25, 25, 3);
    view.defPosition("DA19", 0, -75, 25, 25, 3);

    view.defPosition("CC17", -52, 50, 25, 25, 63);
    view.defPosition("CC28", 0, 50, 25, 25, 63);
    view.defPosition("CC39", 52, 50, 25, 25, 63);
    view.defPosition("CC18", -26, 34, 25, 25, 63);
    view.defPosition("CC29", 26, 34, 25, 25, 63);
    view.defPosition("CB18", -26, 0, 25, 25, 63);
    view.defPosition("CB29", 26, 0, 25, 25, 63);
    view.defPosition("CB19", 0, -20, 25, 25, 63);
    view.defPosition("CA19", 0, -50, 25, 25, 63);

    view.defPosition("BB18", -26, 25, 25, 25, 123);
    view.defPosition("BB29", 26, 25, 25, 25, 123);
    view.defPosition("BB19", 0, 5, 25, 25, 123);
    view.defPosition("BA19", 0, -25, 25, 25, 123);

    view.defPosition("AA19", 0, 0, 25, 25, 183);

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
