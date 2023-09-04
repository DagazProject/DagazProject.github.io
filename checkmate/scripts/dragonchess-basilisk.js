(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dragonchess-basilisk") {
     checkVersion(design, name, value);
  }
}

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y, setup) {
  var design = Dagaz.Model.design;
  var app = Dagaz.Controller.app;
  var isSaved = false;
  var p = design.navigate(1, setup.pos, 9);
  if ((p !== null) && (app.board.getPiece(setup.pos) !== null)) {
      var enemy = app.board.getPiece(p);
      if ((enemy !== null) && (enemy.player != app.board.getPiece(setup.pos).player) && (enemy.type == 21)) {
          ctx.save();
          ctx.globalAlpha = 0.5;
          isSaved = true;
      }
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
      var pos = design.navigate(board.player, move.actions[0][0][0], 9);
      if (pos === null) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player == board.player) return;
      if (piece.type != 21) return;
      move.failed = true;
  });
  CheckInvariants(board);
}

})();
