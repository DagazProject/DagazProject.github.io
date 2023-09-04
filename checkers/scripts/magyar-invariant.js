(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "magyar-invariant") {
     checkVersion(design, name, value);
  }
}

var isEq = function(x, y) {
  if ((x === null) && (y === null)) return true;
  if ((x === null) && (y !== null)) return false;
  if ((x !== null) && (y === null)) return false;
  return x[0] == y[0];
}

var isEqualActions = function(a, b) {
  return isEq(a[0], b[0]) && isEq(a[1], b[1]) && (a[3] == b[3]);
}

var isPrefix = function(x, y) {
  if (x.actions.length >= y.actions.length) return false;
  for (var i = 0; i < x.actions.length; i++) {
       if (!isEqualActions(x.actions[i], y.actions[i])) return false;
  }
  return true;
}

var prefixFound = function(moves, move) {
  for (var i = 0; i < moves.length; i++) {
       if (_.isUndefined(moves[i].failed) && isPrefix(move, moves[i])) return true;
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = false;
  _.each(board.moves, function(move) {
      var piece = null;
      _.each(move.actions, function(a) {
          if ((a[0] !== null) && (a[1] !== null)) {
              if (piece === null) {
                  piece = board.getPiece(a[0][0]);
                  if ((piece === null) || (piece.type == 0)) return;
                  if (piece.player != board.player) {
                      move.failed = true;
                      return;
                  }
              }
              if ((piece !== null) && (piece.type == 1)) {
                  var pos = a[1][0] - Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT;
                  if ((pos < 0) || (board.getPiece(pos) === null)) {
                      move.failed = true;
                      return;
                  }
              }
          }
      });
      if (_.isUndefined(move.failed) && (move.actions.length > 1)) f = true;
  });
  if (f) {
      _.each(board.moves, function(move) {
          if (move.isSimpleMove()) move.failed = true;
      });
  }
  _.each(board.moves, function(move) {
     if (_.isUndefined(move.failed) && prefixFound(board.moves, move)) {
          move.failed = true;
     }
  });
  CheckInvariants(board);
}

})();
