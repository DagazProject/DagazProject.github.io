(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "l-game-view") {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.notValidMove = function(move, pos) {
  for (var i = 0; i < move.actions.length; i++) {
       var a = move.actions[i];
       if ((a[0] !== null) && (a[1] === null) && (a[0][0] == pos)) return false;
       if ((a[0] === null) && (a[1] !== null) && (a[1][0] == pos)) return false;
  }
  return true;
}

Dagaz.Model.getTiles = function(board, pos) {
  if (!_.isUndefined(board.tiles)) return board.tiles;
  var design = Dagaz.Model.design;
  board.tiles = [];
  _.each(design.allPositions(), function(p) {
      var t = board.getPiece(p);
      if (t === null) return;
      if (t.player != board.player) return;
      if (t.type != 1) return;
      board.tiles.push(p);
  });
  return board.tiles;
}

var checkDir = function(design, board, player, pos, dir) {
  var p = design.navigate(1, pos, dir);
  if (p === null) return '0';
  var piece = board.getPiece(p);
  if (piece === null) return '0';
  if (piece.type == 0) return '0';
  if (piece.player != player) return '0';
  return '1';
}

var showPiece = Dagaz.View.showPiece;

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  var design = Dagaz.Model.design;
  var board = Dagaz.Controller.app.board;
  var isSaved = false;
  if (model.type > 0) {
      if (_.indexOf(view.strike, pos) >= 0) {
          ctx.save();
          ctx.globalAlpha = 0.7;
          isSaved = true;
      }
      var s = 'B';
      if (model.player > 1) {
          s = 'R';
      }
      s = s + checkDir(design, board, model.player, pos, 2); // w
      s = s + checkDir(design, board, model.player, pos, 1); // e
      s = s + checkDir(design, board, model.player, pos, 0); // s
      s = s + checkDir(design, board, model.player, pos, 3); // n
      var r = view.piece[s];
      if (r) {
          ctx.drawImage(r.h, x, y, r.dx, r.dy);
      }
      if (isSaved) {
          ctx.restore();
      }
  } else {
      showPiece(view, ctx, frame, pos, piece, model, x, y);
  }
}

})();
