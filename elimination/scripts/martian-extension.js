(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "martian-extension") {
      checkVersion(design, name, value);
  }
}

Dagaz.AI.isFriend = function(player, opponent) {
  return (player % 2) == (opponent % 2);
}

Dagaz.View.showBoard = function(board, ctx) {
  var a = board.getValue(1);
  var b = board.getValue(0);
  if ((a === null) && (b === null)) return;
  ctx.save();
  ctx.fillStyle = '#FFC44E';
  if ((a === null) || (b === null)) {
      if (a !== null) ctx.fillStyle = '#7700B2';
      ctx.fillRect(18, 407, Dagaz.View.WIDTH, 6);
  } else {
      var m = ((b * Dagaz.View.WIDTH)/(a + b)) | 0;
      if (m < 20) m = 20;
      if (Dagaz.View.WIDTH - m < 20) m = Dagaz.View.WIDTH - 20;
      ctx.fillRect(18, 407, m, 6);
      ctx.fillStyle = '#7700B2';
      ctx.fillRect(m + 18, 407, Dagaz.View.WIDTH - m, 6);
      if (a != b) {
          if (b > a) ctx.fillStyle = '#FFC44E';
          ctx.beginPath();
          ctx.arc(m + 18, 410, 3, 0, 2 * Math.PI);
          ctx.fill();
      }
  }
  ctx.restore();
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode == 0) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if (piece === null) return;
          pos = move.actions[0][1][0];
          for (var player = 1; player <= 4; player++) {
               if ((piece.player != player) && design.inZone(0, player, pos)) {
                   move.actions[0][2] = [piece.changeOwner(player)];
               }
          }
          piece = board.getPiece(pos);
          if (piece === null) return;
          if (piece.player == board.player) return;
          move.addValue(board.player % 2, +piece.type + 1);
      }
  });
  CheckInvariants(board);
}

})();
