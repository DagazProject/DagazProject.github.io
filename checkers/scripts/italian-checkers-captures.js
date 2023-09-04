(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "maximal-captures") {
     checkVersion(design, name, value);
  }
}

var getRank = function(board, move) {
  for (var i = 0; i < move.actions.length; i++) {
     if ((move.actions[i][0] !== null) && (move.actions[i][1] !== null)) {
         var piece = board.getPiece(move.actions[i][0][0]);
         if (piece === null) return null;
         return +piece.type;
     }
  }
  return null;
}

var getCapturing = function(board, move) {
  var r = null;
  for (var i = 0; i < move.actions.length; i++) {
     if ((move.actions[i][0] !== null) && (move.actions[i][1] === null)) {
         var piece = board.getPiece(move.actions[i][0][0]);
         if (piece === null) return null;
         var t = +piece.type;
         if ((r === null) || (t > r)) r = t;
     }
  }
  return r;
}

var calcCapturing = function(board, move, rank) {
  var r = 0;
  for (var i = 0; i < move.actions.length; i++) {
     if ((move.actions[i][0] !== null) && (move.actions[i][1] === null)) {
         var piece = board.getPiece(move.actions[i][0][0]);
         if (piece === null) return null;
         var t = +piece.type;
         if (t == rank) r++;
     }
  }
  return r;
}

var getOrder = function(board, move) {
  for (var i = 0; i < move.actions.length; i++) {
     if ((move.actions[i][0] !== null) && (move.actions[i][1] === null)) {
         var piece = board.getPiece(move.actions[i][0][0]);
         if (piece === null) return null;
         if (+piece.type == 1) return i;
     }
  }
  return null;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var mx = 1;
  for (var i = 0; i < board.moves.length; i++) {
      if (board.moves[i].actions.length > mx) mx = board.moves[i].actions.length;
  }
  if (mx > 1) {
      var moves = [[], []];
      for (var i = 0; i < board.moves.length; i++) {
          if (board.moves[i].actions.length == mx) {
              var r = getRank(board, board.moves[i]);
              if (r !== null) moves[r].push(board.moves[i]);
          }
      }
      for (var i = 1; i >= 0; i--) {
          if (moves[i].length > 0) {
              board.moves = moves[i];
              break;
          }
      }
      if (board.moves.length > 1) {
          var moves = [[], []];
          for (var i = 0; i < board.moves.length; i++) {
              var r = getCapturing(board, board.moves[i]);
              if (r !== null) moves[r].push(board.moves[i]);
          }
          for (var i = 1; i >= 0; i--) {
              if (moves[i].length > 0) {
                  var x = 0;
                  for (var j = 0; j < moves[i].length; j++) {
                      var t = calcCapturing(board, moves[i][j], i);
                      if (t > x) x = t;
                  }
                  var m = [];
                  for (var j = 0; j < moves[i].length; j++) {
                      if (calcCapturing(board, moves[i][j], i) == x) m.push(moves[i][j]);
                  }
                  board.moves = m;
                  break;
              }
          }
          if (board.moves.length > 1) {
              var x = null; var m = [];
              for (var i = 0; i < board.moves.length; i++) {
                  var r = getOrder(board, board.moves[i]);
                  if (r !== null) {
                      if ((x === null) || (r < x)) x = r;
                      m.push(board.moves[i]);
                  }
              }
              if ((m.length > 0) && (x !== null)) {
                  var moves = [];
                  for (var i = 0; i < m.length; i++) {
                      var r = getOrder(board, board.moves[i]);
                      if (r == x) moves.push(m[i]);
                  }
                  if (moves.length > 0) board.moves = moves;
              }
          }
      }
  }
  CheckInvariants(board);
}

})();
