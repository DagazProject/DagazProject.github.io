(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "king-adiuh-goal") {
      checkVersion(design, name, value);
  }
}

var findPiece = function(design, board, player, type) {
  var positions = design.allPositions();
  for (var i = 0; i < positions.length; i++) {
       var piece = board.getPiece(positions[i]);
       if ((piece !== null) && (piece.type == type) && (piece.player == player)) {
           return positions[i];
       }
  }
  return null;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      var v = piece.getValue(0);
      if (v === null) {
          v = 1;
      } else {
          v++;
      }
      if (pos >= Dagaz.Model.BOARD_SIZE / 2) {
          v = -v;
      }
      if (player == 1) {
          r += v;
      } else {
          r -= v;
      }
      if (piece.player == player) {
          r++;
      } else {
          r--;
      }
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var w = 0; var b = 0; var f = true;
/*var pos = findPiece(design, board, player, 4);
  if (pos !== null) {
      _.each(design.allDirections(), function(dir) {
          var p = design.navigate(player, pos, dir);
          if (p === null) return;
          var piece = board.getPiece(p);
          if (piece === null) return;
          if (piece.type != 4) return;
          f = false;
      });
  }*/
  var g = false;
  board.generate(design);
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      if (move.actions.length == 1) {
          var pos = null;
          _.each(move.actions, function(a) {
              if (pos !== null) return;
              if (a[0] === null) return;
              if (a[1] === null) return;
              pos = a[0][0];
          });
          if (pos === null) return;
          var piece = board.getPiece(pos);
          if (piece === null) return;
          if (piece.type == 4) return;
      }
      g = true;
  });
  if (f && g) return checkGoals(design, board, player);
  w = 0; var b = 0;
  for (var pos = 0; pos < Dagaz.Model.BOARD_SIZE; pos++) {
       var piece = board.getPiece(pos);
       if (piece !== null) {
           var c = 1;
           var s = piece.getValue(0);
           if (s !== null) {
               c += s.length;
           }
           if (pos < Dagaz.Model.BOARD_SIZE / 2) {
               w += c;
           } else {
               b += c;
           }
       }
  }
  var r = null;
  if (w == b) r = 0;
  if (w > b) {
      if (player == 1) {
          r = 1;
      } else {
          r = -1;
      }
  } 
  if (w < b) {
      if (player == 1) {
          r = -1;
      } else {
          r = 1;
      }
  }
  if (r !== null) return {
      message: ' (' + w + ':' + b + ')',
      result: r
  };
  return checkGoals(design, board, player);
}

})();
