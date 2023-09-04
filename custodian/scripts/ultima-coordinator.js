(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ultima-coordinator") {
      checkVersion(design, name, value);
  }
}

var checkPos = function(design, board, player, pos, types, move) {
  var piece = board.getPiece(pos);
  if ((piece !== null) && (piece.player != player)) {
      if ((types.length == 0) || (_.indexOf(types, +piece.type) >= 0)) {
          move.capturePiece(pos);
      }
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var action = null;
      _.each(move.actions, function(a) {
          if ((action === null) && (a[0] !== null) && (a[1] !== null)) {
              action = a;
          }
      });
      if (action !== null) {
          var pos   = action[0][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && ((piece.type == 4) || (piece.type == 2))) {
              var king = null;
              _.each(design.allPositions(), function(pos) {
                  if (king === null) {
                      var piece = board.getPiece(pos);
                      if ((piece !== null) && (piece.player == board.player) && (piece.type == 0)) {
                          king = pos;
                      }
                  }
              });
              pos = action[1][0];
              if (king !== null) {
                  var cx = Dagaz.Model.getX(pos); var kx = Dagaz.Model.getX(king); 
                  var cy = Dagaz.Model.getY(pos); var ky = Dagaz.Model.getY(king); 
                  if ((cx != kx) && (cy !== ky)) {
                      var types = [];
                      if (piece.type == 2) {
                          types.push(4);
                      }
                      checkPos(design, board, board.player, ky * Dagaz.Model.WIDTH + cx, types, move);
                      checkPos(design, board, board.player, cy * Dagaz.Model.WIDTH + kx, types, move);
                  }
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
