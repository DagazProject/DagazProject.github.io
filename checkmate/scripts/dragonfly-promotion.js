(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dragonfly-promotion") {
     checkVersion(design, name, value);
  }
}

Dagaz.Model.moveToString = function(move) {
  var r = "";
  for (var i = 0; i < Math.min(move.actions.length, 1); i++) {
      var a = move.actions[i];
      if (a[0] != null) {
          r = r + Dagaz.Model.posToString(a[0][0]);
          if (a[1] !== null) {
              r = r + '-';
          }
      }
      if (a[1] !== null) {
          r = r + Dagaz.Model.posToString(a[1][0]);
      }
      if ((a[2] !== null) && ((a[0] != null) || (a[1] !== null))) {
          r = r + " " + a[2][0].getType();
      }
      break;
  }
  return r;
}

findReserve = function(board, list, type) {
  for (var i = 0; i < list.length; i++) {
       var piece = board.getPiece(list[i]);
       if ((piece !== null) && (piece.type == type)) return i;
  }
  return -1;
}

var PostProcessing = Dagaz.Model.PostProcessing;

Dagaz.Model.PostProcessing = function(board, moves) {
  var design = Dagaz.Model.design;
  var list = [];
  for (var pos = Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT; pos < design.positions.length; pos++) {
       var piece = board.getPiece(pos);
       if ((piece !== null) && (piece.player != board.player) && (findReserve(board, list, pos) < 0)) {
           list.push(pos);
       }
  }
  _.each(moves, function(move) {
      if (move.mode == 1) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if (piece === null) return;
          if (move.actions[0][2] === null);
          if (piece.type == move.actions[0][2][0].type) return;
          var ix = findReserve(board, list, move.actions[0][2][0].type);
          if (ix < 0) return;
          move.capturePiece(list[ix]);
      }
  });
  if (!_.isUndefined(PostProcessing)) {
      PostProcessing(board, moves);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pawn   = design.getPieceType("Pawn");
  var list = []; var types = [];
  for (var pos = Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT; pos < design.positions.length; pos++) {
       var piece = board.getPiece(pos);
       if ((piece !== null) && (piece.player != board.player) && (findReserve(board, list, pos) < 0)) {
           if (_.indexOf(types, +piece.type) >= 0) continue;
           list.push(pos);
           types.push(+piece.type);
       }
  }
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.type == pawn) && 
              (move.actions[0][2] !== null) && 
              (move.actions[0][2][0].type != pawn)) {
              piece = move.actions[0][2][0];
              var pieces = [];
              for (var i = 0; i < list.length; i++) {
                   var x = board.getPiece(list[i]);
                   if (x !== null) {
                       pieces.push(piece.promote(x.type));
                       move.mode = 1;
                   }
              }
              if (pieces.length == 0) move.failed = true;
              move.actions[0][2] = pieces;
          }
      }
  });
  CheckInvariants(board);
}

})();
