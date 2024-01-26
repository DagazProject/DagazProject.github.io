(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tafl-invariant") {
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

var getPos = function(move) {
  var p = null; var n = 0;
  _.each(move.actions, function(a) {
      if (n < a[3]) n = a[3];
      if (a[0] === null) return;
      if (a[1] === null) return;
      p = a[1][0];
  });
  return {
      pos: p,
      rn: n
  };
}

var isCaptured = function(design, board, pos, target, dir) {
  if (_.indexOf(Dagaz.Model.NEIGB, target) >= 0) {
      var cnt = 0;
      _.each(design.allDirections(), function(d) {
          var p = design.navigate(1, target, d);
          if (p == pos) {
              cnt++;
              return;
          }
          var piece = board.getPiece(p);
          if (piece === null) {
              if (Dagaz.Model.CENTR == p) cnt++;
          } else {
              if (piece.player == board.player) cnt++;
          }
      });
      if (cnt == 4) return true;
  } else {
      var p = design.navigate(1, target, dir);
      if (p === null) return false;
      var piece = board.getPiece(p);
      if (piece === null) {
          if (_.indexOf(Dagaz.Model.RESTR, p) >= 0) return true;
      } else {
          if (piece.player == board.player) return true;
      }
  }
  return false;
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
  if (king === null) {      
      if (board.player == 1) {
          _.each(board.moves, function(move) {
               var r = getPos(move);
               if (r.pos === null) return;
               _.each(design.allDirections(), function(dir) {
                   var p = design.navigate(1, r.pos, dir);
                   if (p === null) return;
                   var piece = board.getPiece(p);
                   if (piece === null) return;
                   if (piece.type != 1) return;
                   if (!isCaptured(design, board, r.pos, p, dir)) return;
                   move.movePiece(p, p, piece.promote(2), r.rn);
               });
          });
      }
  } else {
      var enemies = [];
      _.each([0, 2], function(dir) {
          var p = design.navigate(1, king, dir);
          var q = design.navigate(0, king, dir);
          if ((p === null) || (q === null)) return;
          if (_.indexOf(Dagaz.Model.NEIGB, king) >= 0) {
              enemies.push(p);
              enemies.push(q);
              return;
          }
          if (isEnemy(board, p) && isEnemy(board, q)) {
              enemies.push(p);
              enemies.push(q);
          }
      });
      _.each(board.moves, function(move) {
          var captured = []; var rn = 0;
          _.each(move.actions, function(a) {
              if (rn < a[3]) rn = a[3];
              if (a[0] === null) return;
              if (a[1] !== null) return;
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
