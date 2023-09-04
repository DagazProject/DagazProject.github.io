(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "pasang-restriction") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (!_.isUndefined(board.move) && !_.isUndefined(board.parent) && (board.move.actions.length > 0) && (board.move.actions[0][0] !== null) && (board.move.actions[0][1] !== null)) {
      var src   = board.move.actions[0][0][0];
      var dst   = board.move.actions[0][1][0];
      var piece = board.parent.getPiece(src);
      var delta = Math.abs(Dagaz.Model.getX(src) - Dagaz.Model.getX(dst));
      if ((piece !== null) && (piece.type > 0) && (delta > 0)) {
          _.each(board.moves, function(move) {
              if (move.isSimpleMove()) {
                  var src   = move.actions[0][0][0];
                  var dst   = move.actions[0][1][0];
                  var piece = board.getPiece(src);
                  if ((piece !== null) && (piece.type > 0)) {
                      if (delta != Math.abs(Dagaz.Model.getX(src) - Dagaz.Model.getX(dst))) {
                          move.failed = true;
                      }
                  }
              }
          });
      }
  }
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.type > 0)) {
              pos = move.actions[0][1][0];
              if (!design.inZone(0, board.player, pos)) {
                  move.failed = true;
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
