(function() {

Dagaz.Model.passForcedDraw = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chaturaji-extension") {
      checkVersion(design, name, value);
  }
}

Dagaz.AI.isFriend = function(player, opponent) {
  return (player % 2) == (opponent % 2);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = true;
  _.each(board.moves, function(move) {
      if (move.mode < 2) {
          f = false;
          return;
      }
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (Dagaz.AI.isFriend(piece.player, board.player)) {
          move.failed = true;
          return;
      }
      move.addValue(board.player - 1, design.price[piece.type]);
      if (piece.type != 4) return;
      pos = design.navigate(board.player, 0, 8);
      while (pos !== null) {
          var place = board.getPiece(pos);
          if (place === null) {
              move.dropPiece(pos, piece.promote(9));
              return;
          }
          if (place.player == piece.player) return;
          pos = design.navigate(board.player, pos, 8);
      }
  });
  _.each(board.moves, function(move) {
      if (move.mode != 1) return;
      var pos = move.actions[0][0][0];
      for (var p = Dagaz.Model.stringToPos("x1"); p < design.positions.length; p++) {
          if ((pos != p) && (board.getPiece(p) !== null)) {
               move.capturePiece(p);
          }
      }
  });
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != board.player) return;
      if (piece.type != 9) return;
      for (var p = 0; p < 64; p++) {
           if (board.getPiece(p) === null) {
               var move = Dagaz.Model.createMove(6);
               move.movePiece(pos, p, piece.promote(4));
               if (piece.getValue(0) === null) {
                   var f = true;
                   _.each(design.allPositions(), function(q) {
                       if (q == pos) return;
                       var x = board.getPiece(q);
                       if (x === null) return;
                       if (x.type != 9) return;
                       move.movePiece(q, q, x.setValue(0, 1));
                       f = false;
                   });
                   if (f) return;
               }
               for (var d = Dagaz.Model.stringToPos("x1"); d < design.positions.length; d++) {
                    var dice = board.getPiece(d);
                    if (dice !== null) {
                        move.capturePiece(d);
                    }
               }
               board.moves.push(move);
           }
      }
  });
  CheckInvariants(board);
}

})();
