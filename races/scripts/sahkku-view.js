(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "sahkku-view") {
      checkVersion(design, name, value);
  }
}

var noPiece = function(design, board, pos) {
  var p = design.navigate(board.player, pos, 6);
  while (p !== null) {
      if (board.getPiece(p) !== null) return false;
      pos = p;
      p = design.navigate(board.player, pos, 6);
  }
  return true;
}

Dagaz.View.deltaY = function(pos) {
  var design = Dagaz.Model.design;
  var board = Dagaz.Controller.app.board;
  if (design.inZone(3, board.player, +pos) && noPiece(design, board, +pos)) return 34;
  if (design.inZone(4, board.player, +pos) && noPiece(design, board, +pos)) return -33;
  return 0;
}

var showPiece = Dagaz.View.showPiece;

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  var isSaved = false;
  if (model.type < 4) {
      var v = model.getValue(0);
      if ((v !== null) && (v == 0)) {
          ctx.save();
          ctx.globalAlpha = 0.5;
          isSaved = true;
      }
  }
  showPiece(view, ctx, frame, pos, piece, model, x, y);
  if (isSaved) {
      ctx.restore();
  }
}

})();
