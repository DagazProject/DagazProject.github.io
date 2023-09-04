(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "litter-invariant") {
     checkVersion(design, name, value);
  }
}

var kingFound = function(design, board, pos, dir) {
  var p = design.navigate(1, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece !== null) {
          var q = p - 64;
          piece = board.getPiece(q);
          return (piece !== null) && (piece.type == 6);
      }
      p = design.navigate(1, p, dir);
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      var b = board.apply(move);
      var kings = [];
      for (var pos = 64; pos < 128; pos++) {
           var piece = b.getPiece(pos);
           if (piece !== null) {
               var p = pos - 64;
               piece = b.getPiece(p);
               if ((piece !== null) && (piece.type == 6)) kings.push(pos);
           }
      }
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
