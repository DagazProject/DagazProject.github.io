(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "maharadja-extension") {
     checkVersion(design, name, value);
  }
}

Dagaz.Model.moveToString = function(move) {
  var r = "";
  _.each(move.actions, function(a) {
      if (a[1] === null) return;
      if (r != "") {
          r = r + " ";
      }
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
  });
  return r;
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

var checkDirection = function(design, board, player, pos, dir) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  while (piece === null) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  return piece.player != player;
}

var checkLeap = function(design, board, player, pos, o, d) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  return piece.player != player;
}

var checkPositions = function(design, board, player, positions) {
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  for (var i = 0; i < positions.length; i++) {
       var pos = positions[i];
       if (checkDirection(design, board, player, pos, n)) return true;
       if (checkDirection(design, board, player, pos, s)) return true;
       if (checkDirection(design, board, player, pos, w)) return true;
       if (checkDirection(design, board, player, pos, e)) return true;
       if (checkDirection(design, board, player, pos, nw)) return true;
       if (checkDirection(design, board, player, pos, se)) return true;
       if (checkDirection(design, board, player, pos, sw)) return true;
       if (checkDirection(design, board, player, pos, ne)) return true;
       if (checkLeap(design, board, player, pos, n, nw)) return true;
       if (checkLeap(design, board, player, pos, n, ne)) return true;
       if (checkLeap(design, board, player, pos, s, sw)) return true;
       if (checkLeap(design, board, player, pos, s, se)) return true;
       if (checkLeap(design, board, player, pos, w, nw)) return true;
       if (checkLeap(design, board, player, pos, w, sw)) return true;
       if (checkLeap(design, board, player, pos, e, ne)) return true;
       if (checkLeap(design, board, player, pos, e, se)) return true;
  }
  return false;
}

var getPiece = function(board, action) {
  if (action[0] === null) return null;
  if (action[1] === null) return null;
  return board.getPiece(action[0][0]);
}

var changePieces = function(design, board, move) {
  _.each(move.actions, function(action) {
      if (action[0] == null) return;
      if (action[1] == null) return;
      var piece = board.getPiece(action[0][0]);
      if (piece !== null) {
          piece = piece.setValue(0, true);
          action[2] = [ piece ];
      }
  });
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;
  var king   = design.getPieceType("King");
  var rook   = design.getPieceType("Rook");
  _.each(board.moves, function(move) {
      var list = [];
      var b = board.apply(move);
      var pos = findPiece(design, b, board.player, king);
      if (pos !== null) {
          list.push(pos);
      }
      if (move.actions.length == 2) {
          var k = getPiece(board, move.actions[0]);
          var r = getPiece(board, move.actions[1]);
          if ((k.type == king) &&
              (r.type == rook)) {
              if (k.getValue(0) || r.getValue(0)) {
                  move.failed = true;
              }
              list.push(move.actions[0][0][0]);
              list.push(move.actions[1][1][0]);
          }
      }
      if (checkPositions(design, b, board.player, list)) {
          move.failed = true;
          return;
      }
      changePieces(design, board, move);
  });
  CheckInvariants(board);
}

})();
