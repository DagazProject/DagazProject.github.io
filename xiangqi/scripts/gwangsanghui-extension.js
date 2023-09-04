(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "gwangsanghui-extension") {
     checkVersion(design, name, value);
  }
}

var changePiecesByType = function(move, board, player, types) {
  var design = Dagaz.Model.design;
  _.each(design.allPositions(), function(p) {
      var piece = board.getPiece(p);
      if ((piece !== null) && (piece.player != player) && (_.indexOf(types, +piece.type) >= 0)) {
          piece = piece.changeOwner(player).setValue(0, 1);
          move.movePiece(p, p, piece);
      }
  });
}

var changePiecesByTag = function(move, board, player, types) {
  var design = Dagaz.Model.design;
  _.each(design.allPositions(), function(p) {
      var piece = board.getPiece(p);
      if ((piece !== null) && (piece.player != player) && (_.indexOf(types, +piece.type) >= 0)) {
          var value = piece.getValue(0);
          if ((value !== null) && (value == 1)) {
              piece = piece.changeOwner(player).setValue(0, 0);
              move.movePiece(p, p, piece);
          }
      }
  });
}

var setTag = function(move, piece, tag) {
  piece = piece.setValue(0, tag);
  move.actions[0][2] = [ piece ];
}

var clearTags = function(move, board, player) {
  var design = Dagaz.Model.design;
  _.each(design.allPositions(), function(p) {
      var piece = board.getPiece(p);
      if (piece !== null) {
          var value = piece.getValue(0);
          if ((value !== null) && (value > 0)) {
              piece = piece.setValue(0, 0);
              move.movePiece(p, p, piece);
          }
      }
  });
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var ek     = design.getPieceType("EastGeneral");
  var wk     = design.getPieceType("WestGeneral");
  var eg     = design.getPieceType("EastGuard");
  var wg     = design.getPieceType("WestGuard");
  var ee     = design.getPieceType("EastElephant");
  var we     = design.getPieceType("WestElephant");
  var er     = design.getPieceType("EastChariot");
  var wr     = design.getPieceType("WestChariot");
  var ec     = design.getPieceType("EastCannon");
  var wc     = design.getPieceType("WestCannon");
  var eh     = design.getPieceType("EastHorse");
  var wh     = design.getPieceType("WestHorse");
  _.each(board.moves, function(m) {
      if ((m.actions.length == 1) && (m.actions[0][0] !== null) && (m.actions[0][1] !== null)) {
          var pos     = m.actions[0][0][0];
          var target  = m.actions[0][1][0];
          var piece   = board.getPiece(pos);
          var enemy   = board.getPiece(target);
          var noMagic = true;
          if ((piece !== null) && (enemy !== null)) {
              if (enemy.type == ek) {
                  changePiecesByType(m, board, board.player, [eg, ee, er, ec, eh]);
                  setTag(m, piece, 2);
              }
              if (enemy.type == wk) {
                  changePiecesByType(m, board, board.player, [wg, we, wr, wc, wh]);
                  setTag(m, piece, 3);
              }
              var value = enemy.getValue(0);
              if (value !== null) {
                  if (value == 2) {
                      changePiecesByTag(m, board, board.player, [eg, ee, er, ec, eh]);
                      noMagic = false;
                  }
                  if (value == 3) {
                      changePiecesByTag(m, board, board.player, [wg, we, wr, wc, wh]);
                      noMagic = false;
                  }
              }
          }
          if (noMagic) {
              clearTags(m, board, board.player);
          }
      }
  });
  CheckInvariants(board);
}

})();
