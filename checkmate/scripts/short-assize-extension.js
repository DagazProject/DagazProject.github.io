(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "short-assize-extension") {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.go = function(url, turn) {
  var app = Dagaz.Controller.app;
  var board = app.board;
  var t = +turn;
  if (turn == 14) {
      if (_.indexOf([7, 8, 9, 10, 11, 12, 13, 15], +board.turn) >= 0) t++;
  } else {
      if (board.turn == 8) t++;
  }
  window.location = url + "?turn=" + t;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.type == 6)) {
               piece = Dagaz.Model.createPiece(4, board.player);
               move.dropPiece(pos, piece);
          }
      }
  });
  CheckInvariants(board);
}

})();
