(function() {

const TRUMP_COEFF    = 10;
const FWD_COEFF      = 1;
const ATTACK_COEFF   = 1;
const PROTECT_COEFF  = 1;
const TRICK_COEFF    = 1;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fool-ai") {
     checkVersion(design, name, value);
  }
}

function getRanks(board, move, trump) {
  var r = 0;
  for (var i = 0; i < move.actions.length; i++) {
       var a = move.actions[i];
       if (a[0] === null) continue;
       if (a[1] === null) continue;
       var piece = board.getPiece(a[0][0]);
       if (piece === null) continue;
       var n = (piece.type / 4) | 0;
       if ((piece.type % 4) == trump) {
           n = n * TRUMP_COEFF;
       }
       r = r + n;
  }
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  var trump = Dagaz.Model.getTrump(board, move);
  if (move.mode = 0) {
      var rank = getRanks(board, move, trump);
      return 1000 - (rank * ATTACK_COEFF);
  }
  if (move.mode = 1) {
      var rank = getRanks(board, move, trump);
      return 1000 - (rank * PROTECT_COEFF);
  }
  if (move.mode = 2) {
      var rank = getRanks(board, move, trump);
      return 500 + (rank * TRICK_COEFF);
  }
  if (move.mode = 5) {
      var rank = getRanks(board, move, trump);
      return 1000 - (rank * FWD_COEFF);
  }
  return r;
}

})();
