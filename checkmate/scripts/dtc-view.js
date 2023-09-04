(function() {

var drawCnt = function(ctx, view, v, x, y) {
  if (v < 10) x -= 5;
  var n = v % 10;
  var glyph = view.findPiece("d" + n);
  if (glyph === null) return;
  ctx.drawImage(glyph.h, x, y, glyph.dx, glyph.dy);
  x -= 11;
  n = (v / 10) | 0;
  if (n == 0) return;
  glyph = view.findPiece("d" + n);
  if (glyph === null) return;
  ctx.drawImage(glyph.h, x, y, glyph.dx, glyph.dy);
}

Dagaz.View.drawRes = function(ctx, region, pos, x, y) {
  var design = Dagaz.Model.design;
  var piece = pos.setup.piece;
  var model = pos.setup.model;
  var view = region.view;
  if (!piece || !model) return;
  ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
  var glyph = view.findPiece(design.pieceNames[model.type - 6] + design.playerNames[model.player]);
  if (glyph === null) return;
  ctx.drawImage(glyph.h, x + 12, y + 2, glyph.dx, glyph.dy);
  var v = model.getValue(0);
  if (v === null) {
      v = 0;
  }
  drawCnt(ctx, view, v, x + 29, y + 40);
}

Dagaz.View.drawPiece = function(ctx, region, pos, x, y) {
  var design = Dagaz.Model.design;
  var piece = pos.setup.piece;
  var model = pos.setup.model;
  var view = region.view;
  if (!piece || !model) return;
  var l = region.locatePosition(pos);
  if (l === null) return;
  x += (l.dx - piece.dx) / 2 | 0;
  y += (l.dy - piece.dy) / 2 | 0;
  var sy = 12;
  var v = model.getValue(0);
  if (v !== null) {
      piece = view.findPiece("two");
      sy = 2;
  }
  ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
  var glyph = view.findPiece(model.getType() + model.getOwner());
  if (glyph === null) return;
  ctx.drawImage(glyph.h, x + 12, y + sy, glyph.dx, glyph.dy);
  if (v !== null) {
      var t = v % 10;
      var p = ((v / 10) | 0) + 1;
      var glyph = view.findPiece("Small" + design.pieceNames[t] + design.playerNames[p]);
      if (glyph !== null) {
          ctx.drawImage(glyph.h, x + 21, y + 39, glyph.dx, glyph.dy);
      }
  }
}

})();
