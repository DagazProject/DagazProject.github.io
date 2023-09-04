(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tibetian-checkers-restriction") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var e = 0; var f = false;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) {
          e++;
          return;
      }
      if (piece.type == 0) return;
      f = true;
  });
  var moves = [];
  _.each(board.moves, function(move) {
      if (move.isDropMove() != f) return;
      if (f && (e == 1)) {
          _.each(design.allPositions(), function(pos) {
              var piece = board.getPiece(pos);
              if (piece === null) return;
              if (piece.type == 0) return;
              move.capturePiece(pos);
          });
      }
      moves.push(move);
  });
  board.moves = moves;
  CheckInvariants(board);
}

})();
