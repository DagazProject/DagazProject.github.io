(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "annan-shogi-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var s = design.getDirection("s");
  _.each(board.moves, function(move) {
      if ((move.mode > 0) && (move.actions.length > 0) && (move.actions[0][0] !== null) && (move.actions[0][1] !== null)) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          var p = design.navigate(board.player, pos, s);
          if (p !== null) {
              var friend = board.getPiece(p);
              if ((friend !== null) && (friend.player == board.player)) {
                  piece = friend;
              }
          }
          if (piece !== null) {
              var t = +piece.type;
              if ((t == 0) || (t >= 10)) t = 10;
              if (t != move.mode) {
                  move.failed = true;
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
