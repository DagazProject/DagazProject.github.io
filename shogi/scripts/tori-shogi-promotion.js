(function() {

var promote = [];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tori-shogi-promotion") {
      promote[1] = 2; // Falcon -> FalconP
      promote[7] = 8; // Swallow -> SwallowP
      checkVersion(design, name, value);
  }
}

Dagaz.Model.moveToString = function(move) {
  var r = "";
  for (var i = 0; i < move.actions.length; i++) {
      var a = move.actions[i];
      if (a[0] === null) continue;
      if (a[1] === null) continue;
      r = Dagaz.Model.posToString(a[0][0]) + Dagaz.Model.posToString(a[1][0]);
      break;
  }
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var n = design.getDirection("n");
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos    = move.actions[0][0][0];
          var target = move.actions[0][1][0];
          if ((design.inZone(1, board.player, pos) || design.inZone(1, board.player, target)) && design.inZone(0, board.player, pos)) {
              var piece = board.getPiece(pos);
              if ((piece !== null) && !_.isUndefined(promote[+piece.type])) {
                   var promoted = piece.promote(promote[+piece.type]);
                   move.actions[0][2] = [ promoted ];
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
