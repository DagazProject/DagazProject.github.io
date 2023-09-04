(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "euclid-extension") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var enemies = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player != player)) {
          enemies++;
      }
  });
  if (enemies < 2) {
      return 1;
  } else {
      return checkGoals(design, board, player);
  }
}

var getX = function(pos) {
  return pos % 8;
}

var getY = function(pos) {
  return (pos / 8) | 0;
}

var getPos = function(x, y) {
  return (y * 8) + x;
}

var findPiece = function(design, board, player, type) {
  var positions = design.allPositions();
  for (var i = 0; i < positions.length; i++) {
       var piece = board.getPiece(positions[i]);
       if ((piece !== null) && (piece.type == type) && (piece.player == player)) {
           return positions[i];
       }
  }
  return null;
}

var checkPos = function(move, board, player, pos) {
  var piece = board.getPiece(pos);
  if ((piece !== null) && (piece.type == 0) && (piece.player != player)) {
      move.capturePiece(pos);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.chain(board.moves)
   .filter(function(move) {
       return move.actions.length == 1;
    })
   .each(function(move) {
       _.chain(move.actions)
        .filter(function(action) {
             return (action[0] !== null) && (action[1] !== null);
         })
        .each(function(action) {
             var piece = board.getPiece(action[0][0]);
             if ((piece !== null) && (piece.type == 0)) {
                 var px  = getX(action[1][0]); var py  = getY(action[1][0]);
                 var pos = findPiece(design, board, board.player, 1);
                 if (pos !== null) {
                     var kx = getX(pos); var ky = getY(pos);
                     if ((kx != px) || (ky != py)) {
                         checkPos(move, board, board.player, getPos(kx, py));
                         checkPos(move, board, board.player, getPos(px, ky));
                     }
                 }
             }
         });
    });
  CheckInvariants(board);
}

})();
