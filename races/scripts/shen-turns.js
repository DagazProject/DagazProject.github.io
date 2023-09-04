(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "shen-turns") {
     checkVersion(design, name, value);
  }
}

var getDice = function(board, pos) {
  var r = 0;
  for (var i = 0; i < 4; i++) {
       var piece = board.getPiece(pos + i);
       if (piece === null) return null;
       if (piece.type == 1) r++;
  }
  if (r == 0) {
      r = 5;
  }
  return r;
}

var clearDices = function(board, move) {
  for (var pos = 0; pos < 8; pos++) {
       var piece = board.getPiece(pos);
       if (piece !== null) {
           move.capturePiece(pos);
       }
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode == 7) {
          var b = board.apply(move);
          var x = getDice(b, 0);
          var y = getDice(b, 4);
          if ((x === null) || (y === null)) return;
          if (y == x) {
              move.actions = [];
              clearDices(board, move);
              move.goTo(0);
              return;
          }
          if (y < x) {
              move.goTo(13);
              return;
          }
      }
  });
  CheckInvariants(board);
}

})();
