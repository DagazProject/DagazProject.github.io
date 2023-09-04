(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "sovereign-chess-castling") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var player = board.getValue(board.player);
  if (player === null) {
      player = board.player;
  }
  var king = null;
  _.each(_.range(Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT), function(pos) {
      if (king !== null) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != player) return;
      if (piece.type != 5) return;
      king = pos;
  });
  if ((king !== null) && (board.getPiece(king).getValue(0) === null)) {
      var colors = [player];
      Dagaz.Model.expandColors(design, board, colors);
      var rooks = [];
      _.each([3, 4], function(d) { // e, w
          var p = design.navigate(1, king, d);
          while (p !== null) {
              var piece = board.getPiece(p);
              if (piece !== null) {
                  if (_.indexOf(colors, piece.player) < 0) return;
                  if (piece.type != 1) return;
                  if (piece.getValue(0) !== null) return;
                  rooks.push({
                      pos: p,
                      dir: d
                  });
                  return;
              }
              p = design.navigate(1, p, d);
          }
      });
      _.each(rooks, function(r) {
          var p = design.navigate(1, king, r.dir);
          var m = Dagaz.Model.createMove(0);
          m.movePiece(r.pos, king, board.getPiece(r.pos).setValue(0, 1));
          m.movePiece(king, p, board.getPiece(king).setValue(0, 1));
          m.mode = 1;
          board.moves.push(m);
          p = design.navigate(1, p, r.dir);
          while (p !== null) {
              if (board.getPiece(p) !== null) return;
              m = Dagaz.Model.createMove(0);
              m.movePiece(king, p, board.getPiece(king).setValue(0, 1));
              m.movePiece(r.pos, design.navigate(0, p, r.dir), board.getPiece(r.pos).setValue(0, 1));
              m.mode = 1;
              board.moves.push(m);
              p = design.navigate(1, p, r.dir);
          }
      });
  }
  _.each(board.moves, function(move) {
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          if (a[1] === null) return;
          if (a[2] === null) return;
          a[2] = [a[2][0].setValue(0, 1)];
      });
  });
  CheckInvariants(board);
}

})();
