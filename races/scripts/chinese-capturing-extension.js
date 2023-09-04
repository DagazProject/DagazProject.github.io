(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chinese-capturing-extension") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  return move.actions.length * 100;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var c = [0, 0, 0, 0, 0, 0];
  var f = true;
  _.each(design.allPositions(), function(pos) {
      if (board.getPiece(pos) === null) return;
      for (var p = 1; p <= 6; p++) {
          if (design.inZone(1, p, pos)) {
               c[p - 1]++;
          }
      }
      if (f) {
          for (var dir = 0; dir < 6; dir++) {
               var p = design.navigate(1, pos, dir);
               if ((p !== null) && (board.getPiece(p) !== null)) {
                    p = design.navigate(0, pos, dir);
                    if ((p !== null) && (board.getPiece(p) === null)) {
                        f = false;
                        return;
                    }
               }
          }
      }
  });
  if (c[player - 1] == 6) return 1;
  if (f) {
      if (c[player - 1] == _.max(c)) return 1;
  }
  return checkGoals(design, board, player);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var t = null; var actions = []; var captured = [];
      _.each(move.actions, function(a) {
           if ((a[0] !== null) && (a[1] === null)) {
               var piece = board.getPiece(a[0]);
               if (piece !== null) {
                   if (t === null) {
                       t = design.navigate(board.player, a[0], 6);
                       while (t !== null) {
                           if (board.getPiece(t) === null) break;
                           t = design.navigate(board.player, t, 12);
                       }
                   } else {
                       t = design.navigate(board.player, t, 12);
                   }
                   if (t !== null) {
                       a[1] = [t];
                       a[2] = [piece.promote(1)];
                       captured.push(a);
                   } else {
                       actions.push(a);
                   }
               }
           } else {
               actions.push(a);
           }
      });
      _.each(captured, function(a) {
           actions.push(a);
      });
      move.actions = actions;
  });
  CheckInvariants(board);
}

})();
