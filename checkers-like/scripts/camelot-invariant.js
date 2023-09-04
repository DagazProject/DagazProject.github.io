(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "camelot-invariant") {
      checkVersion(design, name, value);
  }
}

var isEq = function(a, b) {
  if ((a[0] === null) && (b[0] !== null)) return false;
  if ((a[1] === null) && (b[1] !== null)) return false;
  if ((a[0] !== null) && (b[0] === null)) return false;
  if ((a[1] !== null) && (b[1] === null)) return false;
  if ((a[0] !== null) && (b[0] !== null) && (a[0][0] != b[0][0])) return false;
  if ((a[1] !== null) && (b[1] !== null) && (a[1][0] != b[1][0])) return false;
  return true;
}

var isPrefix = function(m, move) {
  if (m.actions.length >= move.actions.length) return false;
  for (var i = 0; i < m.actions.length; i++) {
      if (!isEq(m.actions[i], move.actions[i])) return false;
  }
  return true;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var moves = []; var isCapturing = false;
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      var src = null; var dst = null;
      if ((move.actions[0][0] !== null) &&
          (move.actions[0][1] === null)) {
          isCapturing = true;
      }
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          if (a[1] === null) return;
          dst = a[1][0];
          if (src !== null) return;
          src = a[0][0];
      });
      if (design.inZone(0, board.player, src) && 
         !design.inZone(0, board.player, dst)) {
          move.failed = true;
          return;
      }
      if (design.inZone(1, board.player, src) && 
         !design.inZone(1, board.player, dst)) {
         moves.push(move);
      }
  });
  if (moves.length > 0) {
      board.moves = moves;
      CheckInvariants(board);
      return;
  }
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      var f = true;
      _.each(move.actions, function(a) {
          if (!f) return;
          if (a[0] === null) return;
          if (a[1] !== null) return;
          f = false;
      });
      if (f) {
          if (isCapturing) move.failed = true;
          return;
      }
      _.each(board.moves, function(m) {
          if (!_.isUndefined(m.failed)) return;
          if (isPrefix(m, move)) {
              m.failed = true;
          }
      });
  });
  CheckInvariants(board);
}

})();
