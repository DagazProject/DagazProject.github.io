(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fool-prepare") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pieces = [];
  var type = null;
  for (var pos = 0; pos < 20; pos++) {
       var piece = board.getPiece(pos);
       if (piece === null) continue;
       pieces.push(pos);
       type = (piece.type / 4) | 0;
/*     var m = Dagaz.Model.createMove(0);
       m.movePiece(pos, pos + 20, piece, 1, 1);
       board.moves.push(m);*/
  }
  for (var pos = 20; pos < 40; pos++) {
       var piece = board.getPiece(pos);
       if (piece === null) continue;
       var t = (piece.type / 4) | 0;
       var m = Dagaz.Model.createMove(0);
       m.movePiece(pos, pos - 20, piece, 1, 1);
       if ((pieces.length > 0) && (t != type)) {
           _.each(pieces, function(p) {
               var x = board.getPiece(p);
               if (x === null) return;
               m.movePiece(p, p + 20, x, 1, 1);
           });
       }
       m.goTo(board.turn);
       board.moves.push(m);
  }
  _.each(pieces, function(src) {
       var piece = board.getPiece(src);
       if (piece === null) return;
       var dst = 80;
       var m = Dagaz.Model.createMove(0);
       while (board.getPiece(dst) !== null) dst++;
       m.movePiece(src, dst++, piece);
       _.each(pieces, function(pos) {
           if (pos == src) return;
           var piece = board.getPiece(pos);
           if (piece === null) return;
           m.movePiece(pos, dst++, piece);
       });
       board.moves.push(m);
  });
  CheckInvariants(board);
}

})();
