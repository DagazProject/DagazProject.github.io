(function() {

var strictMode = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "bahrain-dama-extension") {
     strictMode (value == "strict");
  } else {
     checkVersion(design, name, value);
  }
}

var isAttacking = function(design, board, player, pos, dir, opposite) {
  var p = design.navigate(player, pos, opposite);
  if (p === null) return false;
  if (board.getPiece(p) !== null) return false;
  p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if ((piece !== null) && (piece.player != player)) return true;
  while (p !== null) {
      piece = board.getPiece(p);
      if (piece !== null) {
          if (piece.player == player) return false;
          return piece.type == 1;
      }
      p = design.navigate(player, p, dir);
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var kish = [];
  var design = Dagaz.Model.design;
  var n = design.getDirection("n"); var w = design.getDirection("w");
  var s = design.getDirection("s"); var e = design.getDirection("e");
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player == board.player)) {
          if (isAttacking(design, board, board.player, pos, n, s) || 
              isAttacking(design, board, board.player, pos, w, e) || 
              isAttacking(design, board, board.player, pos, e, w)) {
              kish.push(pos);
          }
      }
  });
  if (kish.length > 0) {
      _.each(board.moves, function(move) {
          if (strictMode) {
              var pos = null;
              for (var i = 0; i < move.actions.length; i++) {
                  var a = move.actions[i];
                  if ((a[0] !== null) && (a[1] !== null) && (pos === null)) {
                      pos = a[0][0];
                  }
                  if ((a[0] !== null) && (a[1] === null)) {
                      pos = null;
                      break;
                  }
              }
              if ((pos !== null) && (_.indexOf(kish, pos) < 0)) {
                  move.failed = true;
              }
          } else {
              var b = board.apply(move);
              var k = [];
              _.each(design.allPositions(), function(pos) {
                  var piece = b.getPiece(pos);
                  if ((piece !== null) && (piece.player == board.player)) {
                      if (isAttacking(design, b, board.player, pos, n, s) || 
                          isAttacking(design, b, board.player, pos, w, e) || 
                          isAttacking(design, b, board.player, pos, e, w)) {
                          k.push(pos);
                      }
                  }
              });
              if (_.intersection(kish, k).length == kish.length) {
                  move.failed = true;
              }
          }
      });
  }
  CheckInvariants(board);
}

})();
