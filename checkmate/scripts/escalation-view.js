(function() {

var RES = ["L0", "L1", "L2", "L3", "R0", "R1", "R2", "R3"];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "escalation-view") {
      checkVersion(design, name, value);
  }
}

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
  var v = model.getValue(0);
  if (v === null) return;
  for (var i = 0; i < RES.length; i++) {
       if (v % 2 == 1) {
           var glyph = view.piece[RES[i]];
           ctx.drawImage(glyph.h, x, y, glyph.dx, glyph.dy);
       }
       v = (v / 2) | 0;
  }
}

})();
