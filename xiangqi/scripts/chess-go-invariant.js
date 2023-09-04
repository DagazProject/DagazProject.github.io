(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chess-go-invariant") {
     checkVersion(design, name, value);
  }
}

var kingFound = function(design, board, pos, dir) {
  var p = design.navigate(board.player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if ((piece !== null) && (piece.type != 0)) {
          return piece.type == 7;
      }
      p = design.navigate(board.player, p, dir);
  }
  return false;
}

var convertMove = function(board, move) {
  var m = Dagaz.Model.createMove(0);
  _.each(move.actions, function(a) {
      m.actions.push(a);
      if (a[0] === null) return;
      if (a[1] === null) return;
      var piece = board.getPiece(a[1][0]);
      if (piece === null) return;
      if (piece.type != 7) return;
      m.movePiece(a[1][0], a[0][0], piece);
  });
  return m;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      var b = board.apply(convertMove(board, move));
      var kings = [];
      _.each(design.allPositions(), function(pos) {
          var piece = b.getPiece(pos);
          if (piece === null) return;
          if (piece.type != 7) return;
          kings.push(pos);
      });
      if (kings.length != 2) return;
      if ((Dagaz.Model.getX(kings[0]) == Dagaz.Model.getX(kings[1]))) {
          var pos = _.min(kings, function(pos) {
              return Dagaz.Model.getY(pos);
          });
          if (kingFound(design, b, pos, 1)) move.failed = true;
      }
      if ((Dagaz.Model.getY(kings[0]) == Dagaz.Model.getY(kings[1]))) {
          var pos = _.min(kings, function(pos) {
              return Dagaz.Model.getX(pos);
          });
          if (kingFound(design, b, pos, 3)) move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
