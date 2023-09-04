(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "game-capture") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var pos = null;
      _.each(move.actions, function(a) {
          if (a[1] === null) return;
          pos = a[1][0];
      });
      if (pos === null) return;
      var b = board.apply(move);
      var captured = [];
      _.each(design.allDirections(), function(dir) {
          var group = [];
          var p = design.navigate(1, pos, dir);
          while (p !== null) {
              var piece = b.getPiece(p);
              if (piece === null) return;
              if (piece.player == board.player) {
                  if ((piece.type == 1) || (piece.type == 2)) return;
                  break;
              }
              if ((piece.type != 1) && (piece.type != 2)) return;
              group.push(p);
              p = design.navigate(1, p, dir);
          }
          captured = _.union(captured, group);
      });
      var f = true;
      _.each([1, 3, 4, 7], function(dir) {
          var p = design.navigate(1, pos, dir);
          if (p === null) return;
          var piece = b.getPiece(p);
          if (piece === null) {
              f = false;
              return;
          }
          if (piece.player == board.player) return;
          var group = [p]; var dame = 0;
          for (var i = 0; i < group.length; i++) {
              _.each([1, 3, 4, 7], function(d) {
                   var q = design.navigate(1, group[i], d);
                   if (q === null) return;
                   if (_.indexOf(group, q) >= 0) return;
                   var x = b.getPiece(q);
                   if (x === null) {
                       dame++;
                       return;
                   }
                   if (x.player == board.player) return;
                   group.push(q);
              });
          }
          if (dame == 0) {
              captured = _.union(captured, group);
              f = false;
          }
      });
      if (f) {
          var group = [pos]; var dame = 0;
          for (var i = 0; i < group.length; i++) {
              _.each([1, 3, 4, 7], function(d) {
                   var q = design.navigate(1, group[i], d);
                   if (q === null) return;
                   if (_.indexOf(group, q) >= 0) return;
                   var x = b.getPiece(q);
                   if (x === null) {
                       dame++;
                       return;
                   }
                   if (x.player != board.player) return;
                   group.push(q);
              });
          }
          if (dame == 0) {
              move.failed = true;
          }
      }
      _.each(captured, function(p) {
          move.capturePiece(p);
      });
  });
  CheckInvariants(board);
}

})();
