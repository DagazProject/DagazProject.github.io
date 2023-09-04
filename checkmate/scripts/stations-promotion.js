(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "stations-promotion") {
     checkVersion(design, name, value);
  }
}

var getDir = function(type) {
  if (_.indexOf([1, 7, 10, 12, 15], type) >= 0) return 'N';
  else if (_.indexOf([2, 8, 13, 17], type) >= 0) return 'NE';
  else if (_.indexOf([5, 20], type) >= 0) return 'SE';
  else if (_.indexOf([4, 11, 18], type) >= 0) return 'S';
  else if (_.indexOf([6, 19], type) >= 0) return 'SW';
  else return 'NW';
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
      }
      if (a[1] !== null) {
          r = r + Dagaz.Model.posToString(a[1][0]);
      }
      if ((a[2] !== null) && ((a[0] != null) || (a[1] !== null))) {
          if (a[2][0].type > 0) r = r + ":" + getDir(+a[2][0].type);
      }
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type == 0) return;
      var pieces = [];
      if ((piece.type >= 1) && (piece.type <= 6)) {
          pieces.push(piece.promote(design.getPieceType("DNN")));
          pieces.push(piece.promote(design.getPieceType("DNNE")));
          pieces.push(piece.promote(design.getPieceType("DNSE")));
          pieces.push(piece.promote(design.getPieceType("DNS")));
          pieces.push(piece.promote(design.getPieceType("DNSW")));
          pieces.push(piece.promote(design.getPieceType("DNNW")));
      }
      if ((piece.type >= 7) && (piece.type <= 9)) {
          pieces.push(piece.promote(design.getPieceType("CRN")));
          pieces.push(piece.promote(design.getPieceType("CRNW")));
          pieces.push(piece.promote(design.getPieceType("CRNE")));
      }
      if ((piece.type >= 10) && (piece.type <= 11)) {
          pieces.push(piece.promote(design.getPieceType("DSN")));
          pieces.push(piece.promote(design.getPieceType("DSS")));
      }
      if ((piece.type >= 12) && (piece.type <= 14)) {
          pieces.push(piece.promote(design.getPieceType("CTN")));
          pieces.push(piece.promote(design.getPieceType("CTNW")));
          pieces.push(piece.promote(design.getPieceType("CTNE")));
      }
      if (piece.type >= 15) {
          pieces.push(piece.promote(design.getPieceType("FTN")));
          pieces.push(piece.promote(design.getPieceType("FTNE")));
          pieces.push(piece.promote(design.getPieceType("FTSE")));
          pieces.push(piece.promote(design.getPieceType("FTS")));
          pieces.push(piece.promote(design.getPieceType("FTSW")));
          pieces.push(piece.promote(design.getPieceType("FTNW")));
      }
      move.actions[0][2] = pieces;
  });
  CheckInvariants(board);
}

})();
