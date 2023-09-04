(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "watermelon-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.actions.length > 0) {
          var pos = move.actions[0][1][0];
          var b = board.apply(move);
          var captured = []; var dame = 0;
          _.each(design.allDirections(), function(dir) {
              var p = design.navigate(board.player, pos, dir);
              if (p === null) return;
              var piece = b.getPiece(p);
              if (piece === null) {
                  dame++;
                  return;
              }
              if (piece.player == board.player) return;
              var group = [p]; var isAlive = false;
              for (var i = 0; i < group.length; i++) {
                  _.each(design.allDirections(), function(d) {
                       var q = design.navigate(board.player, group[i], d);
                       if (q === null) return;
                       if (_.indexOf(group, q) >= 0) return;
                       if (_.indexOf(captured, q) >= 0) return;
                       var piece = b.getPiece(q);
                       if (piece === null) {
                           isAlive = true;
                           return;
                       }
                       if (piece.player == board.player) return;
                       group.push(q);
                  });
              }
              if (!isAlive) {
                  captured = _.union(captured, group);
              }
          });
          if (captured.length > 0) {
              _.each(captured, function(p) {
                  move.capturePiece(p);
              });
              return;
          }
          if (dame > 0) return;
          group = [pos]; var isAlive = false;
          for (var i = 0; i < group.length; i++) {
              _.each(design.allDirections(), function(d) {
                   var q = design.navigate(board.player, group[i], d);
                   if (q === null) return;
                   if (_.indexOf(group, q) >= 0) return;
                   var piece = b.getPiece(q);
                   if (piece === null) {
                       isAlive = true;
                       return;
                   }
                   if (piece.player != board.player) return;
                   group.push(q);
              });
          }
          if (!isAlive) move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
