(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "sovereign-chess-promotion") {
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
              r = r + ' - ';
          }
      }
      if (a[1] !== null) {
          r = r + Dagaz.Model.posToString(a[1][0]);
      }
      if ((a[2] !== null) && ((a[0] != null) || (a[1] !== null))) {
          r = r + " " + a[2][0].toString();
      }
  });
  return r;
}

var PostProcessing = Dagaz.Model.PostProcessing;

Dagaz.Model.PostProcessing = function(board, moves) {
  var design = Dagaz.Model.design;
  var player = board.getValue(board.player);
  if (player === null) {
      player = board.player;
  }
  var king = null;
  _.each(_.range(Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT), function(pos) {
      if (king !== null) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != player) return;
      if (piece.type != design.getPieceType("King")) return;
      king = pos;
  });
  if (king !== null) {
      _.each(moves, function(move) {
          if (move.actions.length < 1) return;
          if (move.actions[0][0] === null) return;
          if (move.actions[0][1] === null) return;
          if (move.actions[0][2] === null) return;
          var piece = board.getPiece(move.actions[0][0][0]);
          if (piece === null) return;
          if (piece.type != design.getPieceType("Pawn")) return;
          piece = move.actions[0][2][0];
          if (piece.type != design.getPieceType("King")) return;
          move.capturePiece(king);
          if (piece.player != player) {
              move.setValue(board.player, piece.player);
          }
      });
  }
  if (!_.isUndefined(PostProcessing)) {
      PostProcessing(board, moves);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pawn   = design.getPieceType("Pawn");
  _.each(board.moves, function(move) {
      if (move.actions.length < 1) return;
      if (move.actions[0][0] === null) return;
      if (move.actions[0][1] === null) return;
      if (move.actions[0][2] === null) return;
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == pawn) && design.inZone(0, 1, move.actions[0][1][0])) {
          piece = move.actions[0][2][0];
          var pieces = [];
          pieces.push(piece.promote(design.getPieceType("Bishop")));
          pieces.push(piece.promote(design.getPieceType("Knight")));
          pieces.push(piece.promote(design.getPieceType("Rook")));
          pieces.push(piece.promote(design.getPieceType("Queen")));
          pieces.push(piece.promote(design.getPieceType("King")));
          move.actions[0][2] = pieces;
      }
  });
  CheckInvariants(board);
}

})();
