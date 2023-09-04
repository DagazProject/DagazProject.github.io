(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "mana-invariant") {
     checkVersion(design, name, value);
  }
}

var locateZone = function(design, board) {
  var p = null;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if ((piece.type == 1) || (piece.type == 3)) p = pos;
      }
  });
  var r = null;
  if (p !== null) {
      for (var z = 0; z < 3; z++) {
           if (design.inZone(z, board.player, p)) {
               r = z;
           }
      }
  }
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var z = locateZone(design, board);
  var f = false;
  if (z !== null) {
      _.each(board.moves, function(move) {
          if (!f && _.isUndefined(move.failed) && (move.actions.length > 0)) {
              var pos = move.actions[0][0][0];
              if (design.inZone(z, board.player, pos)) f = true;
          }
      });
  }
  if (f) {
      _.each(board.moves, function(move) {
          if (_.isUndefined(move.failed) && (move.actions.length > 0)) {
              var pos = move.actions[0][0][0];
              if (!design.inZone(z, board.player, pos)) move.failed = true;
          }
      });
  }
  CheckInvariants(board);
}

})();
