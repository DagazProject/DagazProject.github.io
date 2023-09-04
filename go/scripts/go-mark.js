(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "go-mark") {
     checkVersion(design, name, value);
  }
}

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  var r = piece;
  const app = Dagaz.Controller.app;
  if (app.board && app.board.lastt && (app.board.lastt == pos)) {
      if (model.player == 1) {
          r = view.piece["BM"];
      } else {
          r = view.piece["WM"];
      }
  }
  ctx.drawImage(r.h, x, y, piece.dx, piece.dy);
}

})();
