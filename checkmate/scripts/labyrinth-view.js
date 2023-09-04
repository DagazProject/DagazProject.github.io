(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "labyrinth-view") {
      checkVersion(design, name, value);
  }
}

Dagaz.View.drawPawn = function(ctx, region, pos, x, y) {
  var piece = pos.setup.piece;
  ctx.save();
  ctx.globalAlpha = 0.5;
  ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
  ctx.restore();
}

})();
