(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "cyclic-checkers-restrictions") {
      checkVersion(design, name, value);
  }
}

var getPath = function(move, board) {
  var r = []; 
  var f = true; var x = false;
  _.each(move.actions, function(a) {
      if (x) return;
      if (a[0] === null) return;
      if (a[1] !== null) return;
      var piece = board.getPiece(a[0][0]);
      if ((piece !== null) && (a[1] === null)) {
          if (piece.player == board.player) {
              x = true;
              return;
          }
      }
      if (f) {
          if (r.length == 0) r.push(a[0][0]);
          f = false;
          return;
      }
      r.push(a[0][0]);
  });
  return r;
}

var isPrefix = function(x, y) {
  if (x.length >= y.length) return false;
  for (var i = 0; i < x.length; i++) {
      if (x[i] != y[i]) return false;
  }
  return true;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.actions.length < 2) return;
      var p = getPath(move, board);
      _.each(board.moves, function(m) {
          if (m.actions.length < 2) return;
          var q = getPath(m, board);
          if (isPrefix(q, p)) {
              m.failed = true;
          }
      });
  });
  CheckInvariants(board);
}

})();
