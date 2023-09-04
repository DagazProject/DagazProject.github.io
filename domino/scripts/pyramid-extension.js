(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "pyramid-extension") {
     checkVersion(design, name, value);
  }
}

Dagaz.Controller.skip = function(board) {
  var design = Dagaz.Model.design;
  var r = false;
  _.each(design.allPositions(), function (pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = piece.getValue(0);
          if ((v !== null) && (v > 0)) {
              r = true;
          }
      }
  });
  return r;
}

var isOpenedDir = function(design, board, pos, dir) {
  var p = design.navigate(1, pos, dir);
  if (p === null) return true;
  return board.getPiece(p) === null;
}

var isOpened = function(design, board, pos) {
  if (isOpenedDir(design, board, pos, 0) && isOpenedDir(design, board, pos, 1)) return true;
  return isOpenedDir(design, board, pos, 2) && isOpenedDir(design, board, pos, 3);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode == 0) return;
      var b = board.apply(move);
      _.each(design.allPositions(), function(pos) {
          var piece = b.getPiece(pos);
          if ((piece !== null) && (piece.player == 2) && isOpened(design, b, pos)) {
              piece = piece.changeOwner(1);
              move.movePiece(pos, pos, piece);
          }
      });
  });
  CheckInvariants(board);
}

})();
