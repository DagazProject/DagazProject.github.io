(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "cyvasse-engage") {
      checkVersion(design, name, value);
  }
}

var isWater = function(board, pos) {
  var piece = board.getPiece(pos - 108);
  if (piece === null) return false;
  return piece.type == 11;
}

var isEngaged = function(len, type) {
  if (len == 1) return _.indexOf([0, 1, 2, 3, 4, 5, 6, 8, 9], type) >= 0;
  else if (len == 2) _.indexOf([5, 6, 7, 8], type) >= 0;
  else if (len == 3) _.indexOf([6, 7], type) >= 0;
  else return type == 7;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      if (move.mode < 2) return;
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type > 9) {
          move.failed = true;
          return;
      }
      var cnt = design.price[piece.type];
      if (cnt < 1) return;
      _.each(design.allDirections(), function(dir) {
          if (cnt < 1) return;
          var p = design.navigate(board.player, pos, dir);
          for (l = 1; l < 5; l++) {
              if (p === null) return;
              if (!isWater(board, p)) {
                   var x = board.getPiece(p);
                   if (x !== null) {
                       if (x.type == 10) return;
                       if (x.player == piece.player) return;
                       if (isEngaged(l, +x.type)) {
                           cnt--;
                           return;
                       }
                   }
              }
              p = design.navigate(board.player, p, dir);
          }
      });
      if (cnt > 0) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
