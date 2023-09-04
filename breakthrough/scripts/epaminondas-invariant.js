(function() {

var crossing = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "epaminondas-invariant") {
     if (value == "crossing") crossing = true;
  } else {
      checkVersion(design, name, value);
  }
}

var sign = function(x) {
  if (x < 0) {
      return -1;
  } else if (x > 0) {
      return 1;
  } else {
      return 0;
  }
}

var countPieces = function(design, board, player, pos, dir, move) {
  var r = 1;
  pos = design.navigate(player, pos, dir);
  while (pos !== null) {
      var piece = board.getPiece(pos);
      if ((piece === null) || (piece.player != player)) break;
      if (!crossing) {
          move.capturePiece(pos);
      }
      pos = design.navigate(player, pos, dir);
      r++;
  }
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      _.each(move.actions, function(a) {
          if (_.isUndefined(move.failed) && (a[0] !== null) && (a[1] !== null)) {
              var s  = a[0][0];
              var d  = a[1][0];
              if (crossing && design.inZone(0, board.player, d)) {
                  var piece = board.getPiece(d);
                  if ((piece !== null) && (piece.player != board.player)) {
                      move.failed = true;
                      return;
                  }
              }
              var dx    = Dagaz.Model.getX(d) - Dagaz.Model.getX(s);
              var dy    = Dagaz.Model.getY(d) - Dagaz.Model.getY(s);
              var delta = Math.max(Math.abs(dx), Math.abs(dy));
              var len   = move.actions.length;
              if (delta > len) {
                  move.failed = true;
                  return;
              }
              var piece = board.getPiece(d);
              if ((piece !== null) && (piece.player != board.player)) {
                  var dir = design.findDirection(s, s + Dagaz.Model.WIDTH * sign(dy) + sign(dx));
                  if (dir !== null) {
                      var cnt = countPieces(design, board, piece.player, d, dir, move);
                      if (cnt >= len) {
                          move.failed = true;
                      }
                  }
              }
          }
      });
  });
  CheckInvariants(board);
}

})();
