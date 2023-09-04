(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ultima-custodian") {
      checkVersion(design, name, value);
  }
}

var checkDirection = function(design, board, player, pos, dir, types, move) {
  var enemy = design.navigate(1, pos, dir);
  if (enemy === null) return null;
  var piece = board.getPiece(enemy);
  if (piece === null) return;
  if (piece.player == player) return;
  if (types.length > 0) {
      if (_.indexOf(types, +piece.type) < 0) return;
  }
  var friend = design.navigate(1, enemy, dir);
  if (friend === null) return null;
  piece = board.getPiece(friend);
  if (piece === null) return;
  if (piece.player != player) return;
  move.capturePiece(enemy);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var n = design.getDirection("n"); var w = design.getDirection("w");
  var s = design.getDirection("s"); var e = design.getDirection("e");
  _.each(board.moves, function(move) {
      var action = null;
      _.each(move.actions, function(a) {
          if ((action === null) && (a[0] !== null) && (a[1] !== null)) {
              action = a;
          }
      });
      if (action !== null) {
          var pos = action[0][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && ((piece.type == 6) || (piece.type == 2))) {
              var dx = Dagaz.Model.getX(pos) - Dagaz.Model.getX(action[1][0]);
              var dy = Dagaz.Model.getY(pos) - Dagaz.Model.getY(action[1][0]);
              if ((dx == 0) || (dy == 0)) {
                  pos = action[1][0];
                  var types = [];
                  if (piece.type == 2) {
                      types.push(6);
                  }
                  checkDirection(design, board, board.player, pos, n, types, move);
                  checkDirection(design, board, board.player, pos, e, types, move);
                  checkDirection(design, board, board.player, pos, w, types, move);
                  checkDirection(design, board, board.player, pos, s, types, move);
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
