(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fool-deck") {
      checkVersion(design, name, value);
  }
}

function getOrder(turn) {
  if (turn == 2) {
      return [1, 3, 2];
  } else if (turn == 5) {
      return [2, 1, 3];
  } else {
      return [3, 2, 1];
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (_.indexOf([2, 5, 8], +board.turn) >= 0) {
      var order = getOrder(board.turn);
      var src = 114;
      while (src >= 96) {
          if (board.getPiece(src) !== null) break;
          src--;
      }
      var m = Dagaz.Model.createMove(3, 10);
      _.each(order, function(player) {
          if (src < 96) return;
          if (Dagaz.Model.getCount(board, player) > 5) return;
          var layout = Dagaz.Model.getLayout(player, 6);
          if (layout === null) return;
          var ix = 0;
          for (var pos = 0; pos < 80; pos++) {
               var piece = board.getPiece(pos);
               if (piece === null) continue;
               if (piece.player != player) continue;
               if (pos == layout[ix]) {
                   ix++;
                   continue;
               }
               m.movePiece(pos, layout[ix++], piece.changeOwner(player));
          }
          while (src >= 96) {
               if (ix > 5) break;
               var p = src--;
               var piece = board.getPiece(p);
               if (piece === null) continue;
               m.movePiece(p, layout[ix++], piece.changeOwner(player));
          }
      });
      if (board.turn == 8) {
          m.goTo(0);
      }
      board.moves.push(m);
  }
  CheckInvariants(board);
}

})();
