(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "go-view") {
      checkVersion(design, name, value);
  }
}

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  var val = null;
  if (model) {
      val = model.getValue(0);
  }
  if ((val !== null) && (val < 4)) {
       ctx.save();
       var scale = 0.9;
       if (val == 2) scale = 0.7;
       if (val == 1) scale = 0.5;
       ctx.translate(x + frame.dx / 2, y + frame.dy / 2); 
       ctx.scale(scale, scale);
       ctx.translate(-x - frame.dx /2, -y - frame.dy /2);
       ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
       ctx.restore();
       return;
 }
  ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
}

})();
