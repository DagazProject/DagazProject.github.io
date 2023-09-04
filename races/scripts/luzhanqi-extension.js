(function() {

var bombOnce = false;

var left  = [38, 37, 36, 35, 34, 33, 30, 5, 4, 3, 2, 1, 0];
var right = [62, 61, 60, 59, 58, 57, 32, 29, 28, 27, 26, 25, 24];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "luzhanqi-extension") {
      if (value == "once") bombOnce = true;
  } else {
      checkVersion(design, name, value);
  }
}

Dagaz.View.shiftX = function(pos) {
  if (_.indexOf(left, +pos) >= 0) return -6;
  if (_.indexOf(right, +pos) >= 0) return 6;
  return 0;
}

var checkAttack = function(attacker, attacking) {
  if (attacker == 9) return 0;
  if (attacking >= 11) return 1;
  if (attacking == 10) {
     if (attacker == 8) return 1;
     if (bombOnce) return 0;
     return -1;
  }
  if (attacker > attacking) return -1;
  if (attacker == attacking) return 0;
  return 1;
}

var showFlag = function(design, board, player, move) {
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != player) return;
      if (piece.type == 11) {
          move.movePiece(pos, pos, piece.promote(12));
      }
  });
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var piece = null;
      _.each(move.actions, function(a) {
          if ((a[0] === null) || (a[1] === null)) return;
          if (piece === null) {
              piece = board.getPiece(a[0][0]);
          }
          var enemy = board.getPiece(a[1][0]);
          if ((piece === null) || (enemy === null)) return;
          if (design.inZone(0, board.player, a[1][0])) {
              move.failed = true;
              return;
          }
          var r = checkAttack(+piece.type, +enemy.type);
          if ((r >= 0) && (enemy.type == 0)) {
              showFlag(design, board, enemy.player, move);
          }
          if (r > 0) return;
          if (r < 0) {
              a[2] = [enemy];
          } else {
              move.capturePiece(a[1][0]);
          }
      });
  });
  CheckInvariants(board);
}

})();
