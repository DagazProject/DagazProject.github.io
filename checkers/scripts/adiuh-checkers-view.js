(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "adiuh-checkers-view") {
      checkVersion(design, name, value);
  }
}

var showDigits = function(view, ctx, x, y, v) {
  for (var i = 0; i < v.length; i++) {
       var r = view.piece[v[i]];
       if (r) {
           ctx.drawImage(r.h, x, y, r.dx, r.dy);
       }
       x += 22;
  }
}

Dagaz.View.showBoard = function(board, ctx) {
  var design = Dagaz.Model.design;
  var w = 0; var b = 0;
  for (var pos = 0; pos < Dagaz.Model.BOARD_SIZE; pos++) {
       var piece = board.getPiece(pos);
       if (piece !== null) {
           var c = 1;
           var s = piece.getValue(0);
           if (s !== null) {
               c += s.length;
           }
           if (pos < Dagaz.Model.BOARD_SIZE / 2) {
               w += c;
           } else {
               b += c;
           }
       }
  }
  w = w.toString(10);
  b = b.toString(10);
  var view = Dagaz.Controller.app.view;
  showDigits(view, ctx, 0, 5, b);
  showDigits(view, ctx, 548 - (w.length * 22), 5, w);
}

})();
