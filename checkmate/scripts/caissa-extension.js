(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "caissa-extension") {
      checkVersion(design, name, value);
  }
}

var Extension = Dagaz.Model.Extension;

Dagaz.Model.Extension = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if (piece !== null) {
              if (piece.type == 1) {
                  var hole = Dagaz.Model.createPiece(0, board.player);
                  move.dropPiece(pos, hole);
              } else {
                  var target = move.actions[0][1][0];
                  var piece  = board.getPiece(target);
                  if ((piece !== null) && (piece.type != 1)) {
                       move.dropPiece(pos, piece);
                  }
              }
          }
      }
  });
  Extension(board);
}

})();
