(function() {

var isProcessing = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "sittuyin-invariant") {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.go = function(url, turn) {
  var app = Dagaz.Controller.app;
  var board = app.board;
  var t = +turn;
  if (turn == 16) {
      if (_.indexOf([8, 9, 10, 11, 12, 13, 14, 15, 17], +board.turn) >= 0) t++;
  } else {
      if (board.turn == 9) t++;
  }
  window.location = url + "?turn=" + t;
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

var checkDirection = function(design, board, player, pos, dir, leapers, riders) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece !== null) {
      if (piece.player == player) return false;
      return (_.indexOf(leapers, +piece.type) >= 0) || (_.indexOf(riders, +piece.type) >= 0);
  }
  while (piece === null) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  if (piece.player == player) return false;
  return _.indexOf(riders, +piece.type) >= 0;
}

var checkLeap = function(design, board, player, pos, o, d, knight) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  return (piece.player != player) && (piece.type == knight);
}

var checkPositions = function(design, board, player, positions) {
  var king   = design.getPieceType("Min-gyi");
  var pawn   = design.getPieceType("Ne");
  var rook   = design.getPieceType("Yahhta");
  var knight = design.getPieceType("Myin");
  var bishop = design.getPieceType("Sin");
  var queen  = design.getPieceType("Sit-ke");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  for (var i = 0; i < positions.length; i++) {
       var pos = positions[i];
       if (checkDirection(design, board, player, pos, n,  [king, bishop], [rook])) return true;
       if (checkDirection(design, board, player, pos, s,  [king], [rook])) return true;
       if (checkDirection(design, board, player, pos, w,  [king], [rook])) return true;
       if (checkDirection(design, board, player, pos, e,  [king], [rook])) return true;
       if (checkDirection(design, board, player, pos, nw, [king, pawn, bishop, queen], [])) return true;
       if (checkDirection(design, board, player, pos, ne, [king, pawn, bishop, queen], [])) return true;
       if (checkDirection(design, board, player, pos, sw, [king, bishop, queen], [])) return true;
       if (checkDirection(design, board, player, pos, se, [king, bishop, queen], [])) return true;
       if (checkLeap(design, board, player, pos, n, nw, knight)) return true;
       if (checkLeap(design, board, player, pos, n, ne, knight)) return true;
       if (checkLeap(design, board, player, pos, s, sw, knight)) return true;
       if (checkLeap(design, board, player, pos, s, se, knight)) return true;
       if (checkLeap(design, board, player, pos, w, nw, knight)) return true;
       if (checkLeap(design, board, player, pos, w, sw, knight)) return true;
       if (checkLeap(design, board, player, pos, e, ne, knight)) return true;
       if (checkLeap(design, board, player, pos, e, se, knight)) return true;
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("Min-gyi");
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      var list = [];
      var pos  = findPiece(design, b, board.player, king);
      if (pos !== null) {
          list.push(pos);
      }
      if (checkPositions(design, b, board.player, list)) {
          move.failed = true;
          return;
      }
      if (isProcessing) return;
      isProcessing = true;
      b.generate(design);
      isProcessing = false;
      if (b.moves.length == 0) {
          pos = findPiece(design, b, b.player, king);
          list = [];
          if (pos !== null) {
              list.push(pos);
              if (!checkPositions(design, b, b.player, list)) move.failed = true;
          }
      }
  });
  CheckInvariants(board);
}

})();
