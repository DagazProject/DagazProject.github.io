(function() {

var inProcessing = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "patrol-chess-invariant") {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.findPiece = function(design, board, player, type) {
  var positions = design.allPositions();
  for (var i = 0; i < positions.length; i++) {
       var piece = board.getPiece(positions[i]);
       if ((piece !== null) && (piece.type == type) && (piece.player == player)) {
           return positions[i];
       }
  }
  return null;
}

var checkDirection = function(design, board, player, pos, dir, leapers, riders, defended) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece !== null) {
      if (piece.player == player) return false;
      if (!inProcessing && (_.indexOf(defended, p) < 0)) return false;
      return (_.indexOf(leapers, +piece.type) >= 0) || (_.indexOf(riders, +piece.type) >= 0);
  }
  while (piece === null) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  if (piece.player == player) return false;
  if (!inProcessing && (_.indexOf(defended, p) < 0)) return false;
  return _.indexOf(riders, +piece.type) >= 0;
}

var checkLeap = function(design, board, player, pos, o, d, knight, defended) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (!inProcessing && (_.indexOf(defended, p) < 0)) return false;
  return (piece.player != player) && (piece.type == knight);
}

Dagaz.Model.checkPositions = function(design, board, player, positions) {
  var defended = Dagaz.Model.getDefended(board);
  var king   = design.getPieceType("King");
  var pawn   = design.getPieceType("Pawn");
  var rook   = design.getPieceType("Rook");
  var knight = design.getPieceType("Knight");
  var bishop = design.getPieceType("Bishop");
  var queen  = design.getPieceType("Queen");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  for (var i = 0; i < positions.length; i++) {
       var pos = positions[i];
       if (checkDirection(design, board, player, pos, n,  [king], [rook, queen], defended)) return true;
       if (checkDirection(design, board, player, pos, s,  [king], [rook, queen], defended)) return true;
       if (checkDirection(design, board, player, pos, w,  [king], [rook, queen], defended)) return true;
       if (checkDirection(design, board, player, pos, e,  [king], [rook, queen], defended)) return true;
       if (checkDirection(design, board, player, pos, nw, [king, pawn], [bishop, queen], defended)) return true;
       if (checkDirection(design, board, player, pos, ne, [king, pawn], [bishop, queen], defended)) return true;
       if (checkDirection(design, board, player, pos, sw, [king], [bishop, queen], defended)) return true;
       if (checkDirection(design, board, player, pos, se, [king], [bishop, queen], defended)) return true;
       if (checkLeap(design, board, player, pos, n, nw, knight, defended)) return true;
       if (checkLeap(design, board, player, pos, n, ne, knight, defended)) return true;
       if (checkLeap(design, board, player, pos, s, sw, knight, defended)) return true;
       if (checkLeap(design, board, player, pos, s, se, knight, defended)) return true;
       if (checkLeap(design, board, player, pos, w, nw, knight, defended)) return true;
       if (checkLeap(design, board, player, pos, w, sw, knight, defended)) return true;
       if (checkLeap(design, board, player, pos, e, ne, knight, defended)) return true;
       if (checkLeap(design, board, player, pos, e, se, knight, defended)) return true;
  }
  return false;
}

var isDefended = function(design, board, pos, player) {
  inProcessing = true;
  var enemy = design.nextPlayer(player);
  var r = Dagaz.Model.checkPositions(design, board, enemy, [pos]);
  inProcessing = false;
  return r;
}

Dagaz.Model.getDefended = function(board) {
  if (_.isUndefined(board.defended)) {
      var design = Dagaz.Model.design;
      board.defended = [];
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece === null) return;
          if (isDefended(design, board, pos, piece.player)) {
              board.defended.push(pos);
          }
      });
  }
  return board.defended;
}

var changePieces = function(design, board, move) {
  _.each(move.actions, function(action) {
      var piece = null;
      if (action[0] !== null) {
          piece = board.getPiece(action[0][0]);
      } else {
          piece = board.getPiece(action[1][0]);
      }
      if (action[2] !== null) {
          piece = action[2][0];
      }
      if (piece !== null) {
          piece = piece.setValue(0, true);
      }
      action[2] = [ piece ];
  });
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var defended = Dagaz.Model.getDefended(board);
  _.each(board.moves, function(move) {
      if ((move.actions.length == 1) && (board.getPiece(move.actions[0][1][0]) !== null)) {
          var pos = move.actions[0][0][0];
          if (_.indexOf(defended, +pos) < 0) {
              move.failed = true;
              return;
          }
      }
      var b = board.apply(move);
      var list = [];
      var king = design.getPieceType("King");
      var pos  = Dagaz.Model.findPiece(design, b, board.player, king);
      if (pos !== null) list.push(pos);
      if (move.actions.length == 2) {
          var k = board.getPiece(move.actions[0][0][0]);
          var r = board.getPiece(move.actions[1][0][0]);
          if (k.getValue(0) || r.getValue(0)) {
              move.failed = true;
              return;
          }
          list.push(move.actions[0][0][0]);
          list.push(move.actions[1][1][0]);
      }
      if (Dagaz.Model.checkPositions(design, b, board.player, list)) {
          move.failed = true;
          return;
      }
      changePieces(design, board, move);
  });
  CheckInvariants(board);
}

})();
