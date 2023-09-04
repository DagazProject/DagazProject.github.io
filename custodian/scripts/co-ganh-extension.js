(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "co-ganh-extension") {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.moveToString = function(move) {
  if (move.actions.length == 0) return "pass";
  return Dagaz.Model.posToString(move.actions[0][0][0]) + Dagaz.Model.posToString(move.actions[0][1][0]);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.actions.length < 1) return;
      var b = board.apply(move);
      var pos = move.actions[0][1][0];
      var captured = [];
      var from = move.actions[0][0][0];
      _.each(design.allDirections(), function(dir) {
          var p = design.navigate(board.player, pos, dir);
          if ((p === null) || (p == from)) return;
          var q = design.navigate(0, pos, dir);
          if ((q === null) || (q == from)) return;
          var x = b.getPiece(p); var y = b.getPiece(q);
          if ((x === null) || (x.player == board.player)) return;
          if ((y === null) || (y.player == board.player)) return;
          if (_.indexOf(captured, p) < 0) captured.push(p);
          if (_.indexOf(captured, q) < 0) captured.push(q);
      });
      var piece = Dagaz.Model.createPiece(0, board.player);
      _.each(captured, function(pos) {
          move.movePiece(pos, pos, piece);
      });
  });
  _.each(board.moves, function(move) {
      if (move.actions.length < 1) return;
      var b = board.apply(move);
      var captured = [];
      _.each(design.allPositions(), function(pos) {
          if (_.indexOf(captured, pos) >= 0) return;
          var piece = b.getPiece(pos);
          if (piece === null) return;
          if (piece.player == board.player) return;
          var group = [pos]; var dame = 0;
          for (var i = 0; i < group.length; i++) {
               _.each(design.allDirections(), function(d) {
                   var q = design.navigate(board.player, group[i], d);
                   if (q === null) return;
                   if (_.indexOf(group, q) >= 0) return;
                   var piece = b.getPiece(q);
                   if (piece === null) {
                       dame++;
                       return;
                   }
                   if (piece.player == board.player) return;
                   group.push(q);
               });
          }
          if (dame == 0) {
              captured = _.union(captured, group);
          }
      });
      var piece = Dagaz.Model.createPiece(0, board.player);
      _.each(captured, function(pos) {
          move.movePiece(pos, pos, piece);
      });
  });
  CheckInvariants(board);
}

})();
