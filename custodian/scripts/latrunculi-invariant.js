(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "latrunculi-invariant") {
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

var isEnemy = function(board, pos) {
  var piece = board.getPiece(pos);
  if (piece === null) {
      if (_.indexOf(Dagaz.Model.RESTR, pos) >= 0) return true;
  } else {
      if (piece.player != board.player) return true;
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var king = findPiece(design, board, board.player, 2);
  if (king !== null) {      
      var enemies = [];
      if (_.indexOf(Dagaz.Model.CORNER_ZONE, king) < 0) {
          _.each([0, 1], function(dir) {
              var p = design.navigate(1, king, dir);
              var q = design.navigate(0, king, dir);
              if ((p === null) || (q === null)) return;
              if (isEnemy(board, p) && isEnemy(board, q)) {
                  enemies.push(p);
                  enemies.push(q);
              }
          });
      } else {
          _.each(design.allDirections(), function(dir) {
              var p = design.navigate(1, king, dir);
              if (p === null) return;
              if (isEnemy(board, p)) {
                  enemies.push(p);
              }
          });
      }
      _.each(board.moves, function(move) {
          var captured = []; var rn = 0;
          _.each(move.actions, function(a) {
              if (rn < a[3]) rn = a[3];
              if (a[0] === null) return;
              if (a[1] !== null) {
                  if (a[1][0] != a[0][0]) return;
              }
              if (_.indexOf(enemies, a[0][0]) < 0) return;
              captured.push(a[0][0]);
          });
          if (captured.length == 0) {
              move.failed = true;
              return;
          }
          var piece = board.getPiece(king);
          if (piece !== null) {
              move.movePiece(king, king, piece.promote(1), rn);
          }
      });
  }
  CheckInvariants(board);
}

})();
