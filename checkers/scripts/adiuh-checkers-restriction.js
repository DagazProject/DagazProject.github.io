(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "adiuh-checkers-restriction") {
      checkVersion(design, name, value);
  }
}

var findDirection = function(from, to) {
  var dx = Dagaz.Model.getX(to) - Dagaz.Model.getX(from);
  var dy = Dagaz.Model.getY(to) - Dagaz.Model.getY(from);
  if ((dx > 0) && (dy > 0) && (dx == dy))  return 0;
  if ((dx < 0) && (dy > 0) && (dx == -dy)) return 1;
  if ((dx > 0) && (dy < 0) && (dx == -dy)) return 2;
  if ((dx < 0) && (dy < 0) && (dx == dy))  return 3;
  return null;
}

var getStartPos = function(move) {
  var r = null;
  _.each(move.actions, function(a) {
      if (r !== null) return;
      if (a[0] === null) return;
      if (a[1] === null) return;
      if (a[0][0] == a[1][0]) return;
      r = a[0][0];
  });
  return r;
}

var getCapture = function(move) {
  for (var i = 0; i < move.actions.length; i++) {
      var a = move.actions[i];
      if (a[1] === null) {
          if (a[0] !== null) return a[0][0];
      } else {
          if ((a[0] !== null) && (a[0][0] == a[1][0])) return a[0][0];
      }
  }
  return null;
}

var samePiece = function(move, moves) {
  var pos = getStartPos(move);
  var cap = getCapture(move);
  if ((pos === null) || (cap === null)) return false;
  for (var i = 0; i < moves.length; i++) {
       if ((getStartPos(moves[i]) == pos) && (getCapture(moves[i]) == cap)) return true;
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pos = board.getValue(0);
  if (pos !== null) {
      var moves = [];
      _.each(board.moves, function(move) {
          from = null; to = null;
          _.each(move.actions, function(a) {
               if (a[0] === null) return;
               if (a[1] === null) return;
               if (a[0][0] == a[1][0]) return;
               if (from === null) from = a[0][0];
               to = a[1][0];
          });
          if (from === null) return;
          if (to === null) return;
          if (from == pos) {
              var restricted = board.getValue(1);
              var dir = findDirection(from, to);
              if ((restricted != null) && (dir !== null)) {
                  var p = design.navigate(1, from, dir);
                  while (p !== null) {
                      if (p == restricted) {
                          return;
                      }
                      p = design.navigate(1, p, dir);
                  }
              }
              moves.push(move);
          }
      });
      if (moves.length > 0) {
          board.moves = moves;
      }
  }
  var moves = [];
  _.each(board.moves, function(move) {
      if (move.mode != 2) return;
      moves.push(move);
  });
  if (moves.length > 0) {
      var m = [];
      _.each(board.moves, function(move) {
          if (samePiece(move, moves)) return;
          m.push(move);
      });
      board.moves = _.union(moves, m);
  }
  CheckInvariants(board);
}

})();
