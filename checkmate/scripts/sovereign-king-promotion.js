(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "sovereign-chess-promotion") {
     checkVersion(design, name, value);
  }
}

var isMoved = function(pos, move) {
  var r = false;
  _.each(move.actions, function(a) {
      if (a[0] === null) return;
      if (a[1] === null) return;
      if (a[0][0] == pos) r = true;
  });
  return r;
}

var showPiece = Dagaz.View.showPiece;

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y, setup) {
  var isSaved = false;
  if ((setup.pos >= Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT) && !model.isVisible) {
      ctx.save();
      isSaved = true;
      ctx.globalAlpha = 0;
  }
  showPiece(view, ctx, frame, pos, piece, model, x, y, setup);
  if (isSaved) {
      ctx.restore();
  }
}

var getColors = function(board) {
  var p = board.player;
  var f = board.getValue(p);
  if (f === null) f = p;
  if (p == 1) {
      p = 2;
  } else {
      p = 1;
  }
  var e = board.getValue(p);
  if (e === null) e = p;
  return {
      friend: [f],
      enemy:  [e]
  };
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var c = getColors(board);
  var king = null; var opposite = null;
  _.each(_.range(Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type != 5) return;
      if (_.indexOf(c.friend, piece.player) >= 0) {
          king = pos;
      } else {
          opposite = pos;
      }
  });
  Dagaz.Model.expandColors(design, board, c.friend, c.enemy);
  Dagaz.Model.expandColors(design, board, c.enemy, c.friend);
  if (king !== null) {
      for (var pos = Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT; pos < Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT + Dagaz.Model.HEIGHT; pos++) {
          var piece = board.getPiece(pos);
          if (piece === null) continue;
          piece.isVisible = false;
          if (_.indexOf(c.friend, piece.player) <= 0) continue;
          var m = Dagaz.Model.createMove(0);
          m.movePiece(pos, king, piece);
          m.dropPiece(pos, piece);
          m.setValue(board.player, piece.player);
          board.moves.push(m);
          piece.isVisible = true;
      }
  }
  if (opposite !== null) {
      if (board.turn == 1) {
          var pos = Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT;
          var piece = board.getPiece(pos);
          if (piece !== null) {
              piece.isVisible = true;
              var m = Dagaz.Model.createMove(0);
              m.movePiece(pos, opposite, piece);
              m.dropPiece(pos, piece);
              m.setValue(0, piece.player);
              m.setValue(1, 2);
              m.setValue(2, 1);
              board.moves.push(m);
          }
      }
  }
  CheckInvariants(board);
}

})();
