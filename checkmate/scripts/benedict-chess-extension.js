(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "benedict-chess-extension") {
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

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var king = design.getPieceType("King");
  var pos = Dagaz.Model.findPiece(design, board, board.player, king);
  if (pos === null) return 1;
  return checkGoals(design, board, player);
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

var doStep = function(design, board, pos, player, d, move) {
  var p = design.navigate(player, pos, d);
  if (p === null) return false;
  var t = board.getPiece(p);
  if (t === null) return false;
  if (t.player == player) return false;
  move.movePiece(p, p, t.changeOwner(player));
}

var doLeap = function(design, board, pos, player, o, d, move) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var t = board.getPiece(p);
  if (t === null) return false;
  if (t.player == player) return false;
  move.movePiece(p, p, t.changeOwner(player));
}

var doSlide = function(design, board, pos, player, d, move) {
  var p = design.navigate(player, pos, d);
  if (p === null) return false;
  var t = board.getPiece(p);
  while (t === null) {
      p = design.navigate(player, p, d);
      if (p === null) return false;
      t = board.getPiece(p);
  }
  if (t.player == player) return false;
  move.movePiece(p, p, t.changeOwner(player));
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  var pawn   = design.getPieceType("Pawn");   var rook   = design.getPieceType("Rook");
  var knight = design.getPieceType("Knight"); var bishop = design.getPieceType("Bishop");
  var queen  = design.getPieceType("Queen");  var king   = design.getPieceType("King");
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      _.each(move.actions, function(a) {
          var pos = a[1][0];
          var piece = b.getPiece(pos);
          if (piece === null) return;
          if (piece.type == pawn) {
              doStep(design, b, pos, board.player, nw, move);
              doStep(design, b, pos, board.player, ne, move);
          }
          if (piece.type == rook) {
              doSlide(design, b, pos, board.player, n, move);
              doSlide(design, b, pos, board.player, e, move);
              doSlide(design, b, pos, board.player, w, move);
              doSlide(design, b, pos, board.player, s, move);
          }
          if (piece.type == knight) {
              doLeap(design, b, pos, board.player, n, nw, move);
              doLeap(design, b, pos, board.player, n, ne, move);
              doLeap(design, b, pos, board.player, s, sw, move);
              doLeap(design, b, pos, board.player, s, se, move);
              doLeap(design, b, pos, board.player, w, nw, move);
              doLeap(design, b, pos, board.player, w, sw, move);
              doLeap(design, b, pos, board.player, e, ne, move);
              doLeap(design, b, pos, board.player, e, se, move);
          }
          if (piece.type == bishop) {
              doSlide(design, b, pos, board.player, nw, move);
              doSlide(design, b, pos, board.player, ne, move);
              doSlide(design, b, pos, board.player, sw, move);
              doSlide(design, b, pos, board.player, se, move);

          }
          if (piece.type == queen) {
              doSlide(design, b, pos, board.player, n, move);
              doSlide(design, b, pos, board.player, e, move);
              doSlide(design, b, pos, board.player, w, move);
              doSlide(design, b, pos, board.player, s, move);
              doSlide(design, b, pos, board.player, nw, move);
              doSlide(design, b, pos, board.player, ne, move);
              doSlide(design, b, pos, board.player, sw, move);
              doSlide(design, b, pos, board.player, se, move);
          }
          if (piece.type == king) {
              doStep(design, b, pos, board.player, n, move);
              doStep(design, b, pos, board.player, e, move);
              doStep(design, b, pos, board.player, w, move);
              doStep(design, b, pos, board.player, s, move);
              doStep(design, b, pos, board.player, nw, move);
              doStep(design, b, pos, board.player, ne, move);
              doStep(design, b, pos, board.player, sw, move);
              doStep(design, b, pos, board.player, se, move);
          }
      });
      if (move.mode == 1) {
          var k = board.getPiece(move.actions[0][0][0]);
          var r = board.getPiece(move.actions[1][0][0]);
          if (k.getValue(0) || r.getValue(0)) {
              move.failed = true;
              return;
          }
      }
      changePieces(design, board, move);
  });
  CheckInvariants(board);
}

})();
