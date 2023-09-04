(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "shatra-promotion") {
     checkVersion(design, name, value);
  }
}

var isCantCapture = function(design, board, a, b, piece) {
  if (piece.type == 4) return false;
  var dx = Math.abs(Dagaz.Model.getX(a) - Dagaz.Model.getX(b));
  var dy = Math.abs(Dagaz.Model.getY(a) - Dagaz.Model.getY(b));
  if ((dx == 0) || (dy == 0)) {
      return piece.type == 2;
  }
  if (dx == dy) {
      return piece.type == 3;
  }
  if ((dx != 2) || (dy != 2)) {
      return piece.type < 2;
  }
  return true;
}

var calcPieces = function(design, board, player, type) {
  var cnt = 0;
  _.each(design.allPositions(), function(p) {
      var piece = board.getPiece(p);
      if ((piece !== null) && (piece.player == player) && (piece.type == type)) {
          cnt++;
      }
  });
  return cnt;
}

var promotePiece = function(design, board, player, piece) {
  var type = 4;
  var cnt  = calcPieces(design, board, player, type);
  if (cnt >= 1) {
      type = 3;
      cnt  = calcPieces(design, board, player, type);
      if (cnt >= 2) {
          type = 2;
          cnt  = calcPieces(design, board, player, type);
          if (cnt >= 2) type = 0;
      }
  }
  if (piece.type == type) return piece;
  return piece.promote(type);
}

var moves = function(a) {
  return (a[0] !== null) && (a[1] !== null);
}

var isPrefix = function(a, b) {
  if (a.length > b.length) return false;
  for (var i = 0; i < a.length; i++) {
       if (a[i][0][0] != b[i][0][0]) return false;
       if (a[i][1][0] != b[i][1][0]) return false;
  }
  return true;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var piece = null; 
      if (move.actions.length == 1) {
          var a = move.actions[0];
          if ((a[0] !== null) && (a[1] !== null) && (a[2] !== null)) {
              piece = board.getPiece(a[0][0]);
              if ((piece !== null) && (piece.type != a[2][0].type)) {
                   a[2] = [ promotePiece(design, board, board.player, a[2][0]) ];
              }
          }
          return;
      }
      var r = null; var f = true;
      _.each(move.actions, function(a) {
           if ((a[0] !== null) && (a[1] !== null)) {
                if (piece === null) piece = board.getPiece(a[0][0]);
                if (piece !== null) {
                    if ((r == null) && isCantCapture(design, board, a[0][0], a[1][0], piece)) {
                        r = a[3];
                    }
                    if (f && (a[2] !== null) && (a[2][0].type != piece.type)) {
                        piece = promotePiece(design, board, board.player, a[2][0]);
                        f = false;
                    }
                }
                a[2] = [ piece ];
           }
      });
      if (r !== null) {
          move.actions = _.filter(move.actions, function(a) {
              return a[3] < r;
          });
      }
  });
  for (var i = 0; i < board.moves.length; i++) {
      for (var j = 0; j < board.moves.length; j++) {
          var a = _.filter(board.moves[i].actions, moves);
          var b = _.filter(board.moves[j].actions, moves);
          if ((i != j) && isPrefix(a, b)) {
              if (board.moves[i].length < board.moves[j].length) board.moves[i].failed = true;
              if ((board.moves[i].length == board.moves[j].length) && (i < j)) board.moves[i].failed = true;
          }
      }
  }
  CheckInvariants(board);
}

})();
