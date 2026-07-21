(function() {

Dagaz.Model.FOOL_THROW = true;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fool-throw") {
      checkVersion(design, name, value);
  }
}

function getCnt(board, player) {
  var r = 0;
  for (var pos = 40; pos < 80; pos++) {
       var piece = board.getPiece(pos);
       if (piece === null) continue;
       if (piece.player != player) continue;
       r++;
  }
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (board.turn >= 9) {
      if (Dagaz.Model.isCovered(board)) {
          for (var src = 80; src < 96; src++) {
               var piece = board.getPiece(src);
               if (piece === null) continue;
               var m = Dagaz.Model.createMove(2, 10);
               m.movePiece(src, 115, piece);
               for (var pos = 80; pos < 96; pos++) {
                    if (pos == src) continue;
                    var piece = board.getPiece(pos);
                    if (piece === null) continue;
                    m.movePiece(pos, 115, piece);
               }
               m.capturePiece(115);
               if (board.turn == 9) {
                   m.goTo(2);
               } else if (board.turn == 10) {
                   m.goTo(5);
               }
               board.moves.push(m);
          }
          var cnt = getCnt(board, (board.turn == 9) ? 2 : 3);
          var dst = Dagaz.Model.getAvail(board);
          var ranks = Dagaz.Model.getRanks(board);
          if ((dst !== null) && (cnt > 0)) {
              for (var src = 20; src < 40; src++) {
                   var piece = board.getPiece(src);
                   if (piece === null) continue;
                   if (_.indexOf(ranks, (piece.type / 4) | 0) < 0) continue;
                   var m = Dagaz.Model.createMove(2, 10);
                   m.movePiece(src, dst, piece);
                   if (board.turn == 9) {
                       m.goTo(1);
                   } else if (board.turn == 10) {
                       m.goTo(4);
                   }
                   board.moves.push(m);
              }
          }
      }
  }
  CheckInvariants(board);
}

})();
