(function() {

Dagaz.Model.noRecursive = true;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "no-impasse") {
      checkVersion(design, name, value);
  }
}

var noDead = function(design, board, player) {
  if (board.player != player) return true;
  board.generate(design);
  if (board.moves.length == 0) return false;
  if ((board.moves.length == 1) && board.moves[0].isPass()) return false;
  for (var i = 0; i < board.moves.length; i++) {
     if (noDead(design, board.apply(board.moves[i]), player)) return true;
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var moves = [];
  _.each(board.moves, function(move) {
      if ((move.mode > 0) && Dagaz.Model.noRecursive) {
           Dagaz.Model.noRecursive = false;
           if (noDead(design, board.apply(move), board.player)) {
               moves.push(move);
           }
           Dagaz.Model.noRecursive = true;
      }
  });
  if (moves.length > 0) {
      board.moves = moves;
  }
  CheckInvariants(board);
}

})();
