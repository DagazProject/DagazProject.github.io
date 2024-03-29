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

var isEngaged = function(len, player, type, dir) {
  if ((len == 1) && (type == 2) && (player == 1)) return _.indexOf([0, 1], dir) >= 0;
  else if ((len == 1) && (type == 2) && (player == 2)) return _.indexOf([4, 5], dir) >= 0;
  else if (len == 1) return _.indexOf([0, 1, 3, 4, 5, 6, 8, 9], type) >= 0;
  else if (len == 2) return _.indexOf([5, 6, 7, 8], type) >= 0;
  else if (len == 3) return _.indexOf([6, 7], type) >= 0;
  else return type == 7;
}

var getPos = function(move) {
  for (var i = 0; i < move.actions.length; i++) {
       var a = move.actions[i];
       if (a[0] !== null) {
           if (a[1] !== null) {
               return a[1][0];
           } else {
               return a[0][0];
           }
       }
  }
  return null;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode < 2) return;
      var pos = getPos(move);
      if (pos === null) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type > 9) return;
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
                       var f = false;
                       _.each(design.allDirections(), function(d) {
                           var q = design.navigate(board.player, p, d);
                           if (q === null) return;
                           var y = board.getPiece(q);
                           if (y === null) return;
                           if (y.player != piece.player) return;
                           if (y.type == 9) f = true;
                       });
                       if (f) {
                           if ((piece.type != 9) && (l == 1)) return;
                       }
                       if (isEngaged(l, board.player, +x.type, dir)) cnt--;
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
