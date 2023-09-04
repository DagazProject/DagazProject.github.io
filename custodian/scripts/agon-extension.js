(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "agon-extension") {
      checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var r = null;
  for (var pos = 0; pos < design.positions.length; pos++) {
      if (design.inZone(0, player, pos) || design.inZone(1, player, pos)) {
          var piece = board.getPiece(pos);
          if (piece === null) return checkGoals(design, board, player);
          if ((r !== null) && (r != piece.player)) return checkGoals(design, board, player);
          r = piece.player;
      }
  }
  if (r !== null) {
      if (r == player) {
          return 1;
      } else {
          return -1;
      }
  }
  return checkGoals(design, board, player);
}

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  var isSaved = false;
  if ((model.type == 1) || (model.type == 3)) {
      ctx.save();
      ctx.globalAlpha = 0.5;
      isSaved = true;
  }
  ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
  if (isSaved) {
      ctx.restore();
  }
}

var findQueen = function(design, board, player) {
  var positions = design.allPositions();
  for (var i = 0; i < positions.length; i++) {
       var piece = board.getPiece(positions[i]);
       if ((piece !== null) && (piece.type == 0) && (piece.player == player)) {
           return positions[i];
       }
  }
  return null;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var queen  = findQueen(design, board, board.player);
  _.each(board.moves, function(move) {
      if (queen !== null) {
          if (move.isSimpleMove()) {
              var piece = board.getPiece(move.actions[0][0][0]);
              if (piece !== null) {
                  if (piece.type == 1) {
                      piece = piece.changeOwner(design.nextPlayer(piece.player));
                  }
                  if (+piece.type % 2 == 1) {
                      piece = piece.promote(+piece.type - 1);
                      move.actions[0][2] = [ piece ];
                  }
                  var pos = move.actions[0][1][0];
                  for (var dir = design.getDirection("cn"); dir < design.dirs.length; dir++) {
                      var target = design.navigate(board.player, pos, dir);
                      if (target !== null) {
                          var enemy = board.getPiece(target);
                          if ((enemy !== null) && (enemy.player != piece.player) && (+enemy.type % 2 == 0)) {
                               var p = design.navigate(board.player, target, dir);
                               if (p !== null) {
                                   var friend = board.getPiece(p);
                                   if ((friend !== null) && (friend.type == piece.type) && (+piece.type % 2 == 0)) {
                                       if (enemy.type == 0) {
                                           enemy = enemy.changeOwner(piece.player);
                                       }
                                       enemy = enemy.promote(+enemy.type + 1);
                                       move.movePiece(target, target, enemy);
                                   }
                               }
                          }
                      }
                  }
              }
          }
      } else {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
