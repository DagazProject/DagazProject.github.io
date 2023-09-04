(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "cheskers-invariant") {
     checkVersion(design, name, value);
  }
}

var getType = function(board, move) {
  var r = null;
  _.each(move.actions, function(a) {
      if ((r === null) && (a[0] !== null) && (a[1] !== null)) {
          var piece = board.getPiece(a[0][0]);
          if (piece !== null) {
               r = +piece.type;
          }
      }
  });
  return r;
}

var isCapturing = function(board, move) {
  if (!move.isSimpleMove()) return true;
  var pos = move.actions[0][1][0];
  return board.getPiece(pos) !== null;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var types  = [];
  types.push(design.getPieceType("Bishop")); 
  types.push(design.getPieceType("Camel"));
  var isPriority = false;
  _.each(board.moves, function(move) {
      if (isCapturing(board, move)) {
          if (_.indexOf(types, getType(board, move)) < 0) isPriority = true;
      }
  });
  if (isPriority) {
     _.each(board.moves, function(move) {
          if (!isCapturing(board, move)) {
              move.failed = true;
          }
     });
  }
  CheckInvariants(board);
}

})();
