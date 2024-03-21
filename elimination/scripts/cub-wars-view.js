(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "cub-wars-view") {
     checkVersion(design, name, value);
  }
}

Dagaz.View.showPieceHint = function(view, ctx, piece) {
  var design = Dagaz.Model.design;
  var pos = Dagaz.Model.stringToPos("X1");
  if (pos === null) return;
  var frame = view.pos[pos];
  if (!frame) return;
  var r = view.piece[piece.name + " Hint"];
  if (!r) return;
  ctx.drawImage(r.h, frame.x, frame.y, r.dx, r.dy);
}

})();
