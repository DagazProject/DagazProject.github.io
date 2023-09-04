(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "altai-shatra-invariant") {
     checkVersion(design, name, value);
  }
}

var checkMove = function(move) {
  var pos = null;
  var isCapturing = false;
  _.each(move.actions, function(a) {
      if (a[0] !== null) {
          if ((a[1] !== null) && (pos === null)) pos = a[0][0];
          if (a[1] === null) isCapturing = true;
      }
  });
  return {
     p: pos,
     c: isCapturing
  };
}

var isKing = function(design, board, pos, start) {
  if (design.inZone(2, 1, pos) || design.inZone(2, 2, pos)) return true;
  var piece = board.getPiece(start);
  if (piece === null) return false;
  return +piece.type == 1;
}

var prefix = function(move, rn) {
  var r = Dagaz.Model.createMove(move.mode);
  _.each(move.actions, function(a) {
      if (a[3] > rn) return;
      r.actions.push(a);
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var moves = []; var kings = [];
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      var r = checkMove(move);
      if (r.c) {
          moves.push(move);
          _.each(move.actions, function(a) {
              if ((a[0] === null) || (a[1] === null)) return;
              if (isKing(design, board, a[1][0], r.p)) {
                  var m = prefix(move, a[3]);
                  if (!m.isPass()) {
                      moves.push(m);
                  }
              }
          });
          if (isKing(design, board, r.p, r.p)) {
              kings.push(r.p);
          }
      }
  });
  if (moves.length > 0) {
      _.each(board.moves, function(move) {
          if (!_.isUndefined(move.failed)) return;
          var r = checkMove(move);
          if (r.c || (r.p === null)) return;
          if (_.indexOf(kings, r.p) >= 0) {
              moves.push(move);
          }
      });
      board.moves = moves;
  }
  CheckInvariants(board);
}

})();
