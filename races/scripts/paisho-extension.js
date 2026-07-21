(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "paisho-extension") {
     checkVersion(design, name, value);
  }
}

var isAttacking = function(attacker, attacking) {
  if ((attacking == 5) || (attacking == 0) || (attacker == 0)) return true;
  return attacker < attacking;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var s = null; var e = null; var n = 0;
      _.each(move.actions, function(a) {
          if ((a[0] !== null) && (a[1] !== null)) {
              if (s === null) {
                  s = a[0][0];
              }
              e = a[1][0];
              n = a[3];
          }
      });
      if ((s !== null) && (e !== null)) {
          var piece = board.getPiece(s);
          if ((piece !== null) && (piece.type < 5)) {
              _.each(design.allDirections(), function(dir) {
                  var pos = design.navigate(1, e, dir);
                  if ((pos !== null) && (pos != s)) {
                      var target = board.getPiece(pos);
                      if ((target !== null) && (target.player != piece.player) && isAttacking(+piece.type, +target.type)) {
                          move.capturePiece(pos, n);
                          if (+target.type == 0) {
                              _.each(design.allPositions(), function(p) {
                                   if (design.inZone(1, target.player, p) && (board.getPiece(p) === null)) {
                                       move.dropPiece(p, target, n);
                                   }
                              });
                          }
                      }
                  }
              });
          }
      }
  });
  CheckInvariants(board);
}

})();
