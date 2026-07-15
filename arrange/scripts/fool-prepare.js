(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fool-prepare") {
      checkVersion(design, name, value);
  }
}

function getCnt(board) {
  var r = 0;
  for (var player = 2; player <= 3; player++) {
       for (var p = 40; p < 80; p++) {
            var piece = board.getPiece(p);
            if (piece === null) continue;
            if (piece.player != player) continue;
            r++;
       }
       if (r > 0) break;
  }
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pieces = [];
  var type = null;
  if (board.turn == 0) {
      for (var pos = 0; pos < 20; pos++) {
           var piece = board.getPiece(pos);
           if (piece === null) continue;
           pieces.push(pos);
           type = (piece.type / 4) | 0;
      }
      for (var pos = 20; pos < 40; pos++) {
           var piece = board.getPiece(pos);
           if (piece === null) continue;
           var t = (piece.type / 4) | 0;
           var m = Dagaz.Model.createMove(4, 10);
           m.movePiece(pos, pos - 20, piece, 1, 1);
           if (((pieces.length > 0) && (t != type)) || (getCnt(board) <= pieces.length)) {
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
           var m = Dagaz.Model.createMove(0, 10);
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
  } else {
      for (var src = 40; src < 80; src++) {
           var piece = board.getPiece(src);
           if (piece === null) continue;
           if (piece.player != board.player) continue;
           type = (piece.type / 4) | 0;
           var dst = 80;
           var m = Dagaz.Model.createMove(0, 10);
           m.movePiece(src, dst++, piece.changeOwner(1));
           for (var pos = 40; pos < 80; pos++) {
                if (pos == src) continue;
                var piece = board.getPiece(pos);
                if (piece === null) continue;
                if (piece.player != board.player) continue;
                if (((piece.type / 4) | 0) != type) continue;
                m.movePiece(pos, dst++, piece.changeOwner(1));
           }
           board.moves.push(m);
      }
  }
  CheckInvariants(board);
}

})();
