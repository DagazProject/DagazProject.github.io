(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "resurrection-kill") {
      checkVersion(design, name, value);
  }
}

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y, setup) {
  var design = Dagaz.Model.design;
  var app = Dagaz.Controller.app;
  var isSaved = false;
  var p = design.navigate(1, setup.pos, 9);
  if (p !== null) {
      ctx.save();
      if (app.board.getPiece(p) !== null) {
          ctx.globalAlpha = 0;
      } else {
          ctx.globalAlpha = 0.4;
      }
      isSaved = true;
  }
  ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
  if (isSaved) {
      ctx.restore();
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type == 0) return;
      var p = design.navigate(board.player, pos, 8);
      if (p === null) return;
      move.movePiece(pos, p, piece);
  });
  CheckInvariants(board);
}

})();
