(function() {

const PATTERN_SIZE = 6;

var patterns = [[
  [ 0,10, 0, 0, 0, 0,
    0, 9, 0, 0, 0, 0,
    8, 7, 6, 0, 0, 0,
    0, 5, 0, 0, 0, 0,
    4, 3, 2, 0, 0, 0,
    0, 1, 0, 0, 0, 0
  ],
  [ 0, 0, 6, 0, 2, 0,
   10, 9, 7, 5, 3, 1,
    0, 0, 8, 0, 4, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0
  ],
  [ 0, 4, 0, 8, 0, 0,
    1, 3, 5, 7, 9,10,
    0, 2, 0, 6, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0
  ],
  [ 0, 1, 0, 0, 0, 0,
    2, 3, 4, 0, 0, 0,
    0, 5, 0, 0, 0, 0,
    6, 7, 8, 0, 0, 0,
    0, 9, 0, 0, 0, 0,
    0,10, 0, 0, 0, 0
  ]
], [
  [10, 9, 8, 0, 0, 0,
    7, 6, 5, 0, 0, 0,
    4, 3, 2, 0, 0, 0,
    0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0
  ],
  [ 8, 5, 2, 0, 0, 0,
    9, 6, 3, 1, 0, 0,
   10, 7, 4, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0
  ],
  [ 0, 4, 7,10, 0, 0,
    1, 3, 6, 9, 0, 0,
    0, 2, 5, 8, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0
  ],
  [ 0, 1, 0, 0, 0, 0,
    2, 3, 4, 0, 0, 0,
    5, 6, 7, 0, 0, 0,
    8, 9,10, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0
  ]
]];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "hippos-and-crocodiles-extension") {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.getTiles = function(board, pos) {
  var design = Dagaz.Model.design;
  return design.allPositions();
}

var addPattern = function(design, board, sx, sy, p, o, a, move) {
  for (var y = 0; y < PATTERN_SIZE; y++) {
       for (var x = 0; x < PATTERN_SIZE; x++) {
            if (p[y * PATTERN_SIZE + x] == 0) continue;
            if ((x + sx >= 20) || (y + sy >= 10)) return false;
            var pos = (y + sy) * 20 + x + sx;
            var piece = board.getPiece(pos);
            if (piece !== null) return false;
            piece = Dagaz.Model.createPiece(o + p[y * PATTERN_SIZE + x], board.player).setValue(0, a);
            move.dropPiece(pos, piece);
       }
  }
  return true;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var v = board.getValue(0);
  if ((v !== null) && (board.player != 1)) {
      v = design.nextPlayer(v);
  }
  for (var y = 0; y < 10 - 2; y++) {
      for (var x = 0; x < 20 - 2; x++) {
           for (var i = 0; i < 2; i++) {
                if (v !== null) {
                    if (i + 1 != v) continue;
                }
                for (var j = 0; j < 4; j++) {
                     var move = Dagaz.Model.createMove(j + 1);
                     if (addPattern(design, board, x, y, patterns[i][j], (i * 4 + j) * 10, j + 1, move)) {
                         for (var pos = 0; pos < 20 * 10; pos++) {
                              var piece = board.getPiece(pos);
                              if (piece === null) continue;
                              var m = piece.getValue(0);
                              if (m === null) continue;
                              if (m != j + 1) continue;
                              if ((i == 0) && (piece.type >= 40)) continue;
                              if ((i == 1) && (piece.type < 40)) continue;
                              move.movePiece(pos, pos, piece);
                         }
                         if (v === null) {
                              move.setValue(0, i + 1);
                         }
//                       console.log('x = ' + x + ', y = ' + y + ', player = ' + (i + 1) + ', mode = ' + (j + 1));
//                       console.log(move);
                         board.moves.push(move);
                     }
                }
           }
      }
  }
  CheckInvariants(board);
}

})();
