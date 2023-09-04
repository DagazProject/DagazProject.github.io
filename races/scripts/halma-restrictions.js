(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "halma-restrictions") {
      checkVersion(design, name, value);
  }
}

var getMove = function(move) {
  var r = null;
  for (var i = 0; i < move.actions.length; i++) {
      if ((move.actions[i][0] !== null) && (move.actions[i][1] !== null)) {
          if (r === null) {
              r = {
                  start: move.actions[i][0][0]
              };
          }
          r.end = move.actions[i][1][0];
      }
  }
  return r;
}

var getMiddle = function(a, b) {
  var dx = Math.abs(Dagaz.Model.getX(a) - Dagaz.Model.getX(b));
  var dy = Math.abs(Dagaz.Model.getY(a) - Dagaz.Model.getY(b));
  if ((dx < 2) && (dy < 2)) return null;
  var x = ((Dagaz.Model.getX(a) + Dagaz.Model.getX(b)) / 2) | 0;
  var y = ((Dagaz.Model.getY(a) + Dagaz.Model.getY(b)) / 2) | 0;
  return Dagaz.Model.WIDTH * y + x;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var moves  = [];
  _.each(board.moves, function(move) {
      var m = getMove(move);
      if (m !== null) {
          if (design.inZone(0, board.player, m.start) && !design.inZone(0, board.player, m.end)) {
              move.failed = true;
              return;
          }
          if (!design.inZone(1, board.player, m.start) && design.inZone(1, board.player, m.end)) {
              move.failed = true;
              return;
          }
          if (design.inZone(1, board.player, m.start) && !design.inZone(1, board.player, m.end)) {
              var pos = getMiddle(move.actions[0][0][0], move.actions[0][1][0]);
              if (pos !== null) {
                  var piece = board.getPiece(pos);
                  if ((piece !== null) && (piece.player != board.player)) {
                      moves.push(move);
                  }
              }
          }
      }
  });
  if (moves.length > 0) {
      board.moves = moves;
  }
  CheckInvariants(board);
}

})();
