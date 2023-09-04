(function() {

Dagaz.Model.WIDTH = 10;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "stapeldammen-restrictions") {
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

var samePiece = function(move, moves) {
  var pos = getStartPos(move);
  if (pos === null) return false;
  for (var i = 0; i < moves.length; i++) {
       if (getStartPos(moves[i]) == pos) return true;
  }
  return false;
}

var isRestricted = function(design, player, pos, dir, from) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      if (p == from) return true;
      p = design.navigate(player, p, dir);
  }
  return false;
}

var isAttacked = function(design, board, player, pos, dir) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  p = design.navigate(player, p, dir);
  if (p === null) return false;
  return board.getPiece(p) === null;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.actions.length < 2) {
          move.setValue(0, null);
          move.setValue(1, null);
          return;
      }
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
      var piece = board.getPiece(from);
      if (piece === null) return;
      var b = board.apply(move);
      var f = false;
      _.each(design.allDirections(), function(dir) {
          if (f) return;
          if (isRestricted(design, board.player, to, dir, from)) return;
          if (!isAttacked(design, b, board.player, to, dir)) return;
          f = true;
      });
      if (f) {
          move.goTo(board.turn);
          move.setValue(0, to);
          move.setValue(1, from);
          move.mode = 2;
      } else {
          move.setValue(0, null);
          move.setValue(1, null);
      }
  });
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
