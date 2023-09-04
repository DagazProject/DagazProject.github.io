(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chess-go-restriction") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = false; var a = true;
  _.each(board.moves, function(move) {
      if (move.mode != 1) return;
      var piece = move.actions[0][2][0];
      if (piece.type == 7) {
          f = true;
      }
  });
  if (!_.isUndefined(board.move) && (board.move.mode == 1))  {
      if (board.move.actions[0][2][0].type == 7) a = false;
  }
  if (f) {
      board.moves = _.filter(board.moves, function(move) {
          if (move.mode != 1) return a;
          var piece = move.actions[0][2][0];
          return piece.type == 7;
      });
  }
  CheckInvariants(board);
}

})();
