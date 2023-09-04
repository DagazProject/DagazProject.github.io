(function() {

Dagaz.Model.WIDTH = 8;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "evoluchess-king") {
      checkVersion(design, name, value);
  }
}

var findPiece = function(design, board, player, type) {
  var positions = design.allPositions();
  for (var i = 0; i < positions.length; i++) {
       var piece = board.getPiece(positions[i]);
       if ((piece !== null) && (piece.type == type) && (piece.player == player)) {
           return positions[i];
       }
  }
  return null;
}

var checkOpposite = function(design, board, pos, dir) {
  var p = design.navigate(board.player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece !== null) {
          if (piece.player == board.player) return;
          if (piece.type != 0) return;
          var move = Dagaz.Model.createMove(2);
          move.movePiece(pos, p, board.getPiece(pos));
          board.moves.push(move);
          return;
      }
      p = design.navigate(board.player, p, dir);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pos = findPiece(design, board, board.player, 0);
  if (pos !== null) {
      checkOpposite(design, board, pos, 7);
      var group = [pos];
      for (var i = 0; i < group.length; i++) {
          _.each(design.allDirections(), function(dir) {
               var p = design.navigate(board.player, group[i], dir);
               if (p === null) return;
               if (_.indexOf(group, p) >= 0) return;
               if (!design.inZone(1, board.player, p)) return;
               if (Math.abs(Dagaz.Model.getX(p) - Dagaz.Model.getX(pos)) > 2) return;
               var piece = board.getPiece(p);
               if (piece !== null) {
                   if (piece.player == board.player) return;
                   if (piece.type == 6) return;
               }
               group.push(p);
          });
      }
      _.each(group, function(p) {
          if (p == pos) return;
          var move = Dagaz.Model.createMove(2);
          move.movePiece(pos, p, board.getPiece(pos));
          board.moves.push(move);
      });
  }
  CheckInvariants(board);
}

})();
