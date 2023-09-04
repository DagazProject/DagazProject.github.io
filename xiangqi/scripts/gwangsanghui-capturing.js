(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "gwangsanghui-capturing") {
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
  });
  return r;
}

var getCapturing = function(design, board, player, pos, zone, capturing) {
  if (!design.inZone(zone, player, pos)) return;
  _.each(design.allPositions(), function(p) {
       if (!design.inZone(zone, player, p)) return;
       var piece = board.getPiece(p);
       if (piece === null) return;
       if (piece.player != player) return;
       capturing.push(p);
  });
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design  = board.game.design;
  var general = design.getPieceType("General");
  if (!_.isUndefined(board.move) && (board.parent !== null) && board.move.isSimpleMove()) {
      var pos = board.move.actions[0][1][0];
      var capturing = [];
      getCapturing(design, board, board.player, pos, 0, capturing);
      getCapturing(design, board, board.player, pos, 1, capturing);
      var piece = board.parent.getPiece(pos);
      if ((piece !== null) && (piece.type == general) && (capturing.length > 0)) {
          _.each(board.moves, function(move) {
               if (!move.isSimpleMove()) return;
               if (move.actions[0][1][0] == pos) return;
               _.each(capturing, function(p) {
                   if (move.actions[0][0][0] == p) {
                       var piece = board.getPiece(move.actions[0][1][0]);
                       if (piece !== null) {
                           move.actions[0][2] = [piece];
                       } else {
                           move.capturePiece(move.actions[0][1][0]);
                       }
                   } else {
                       move.capturePiece(p);
                   }
               });
          });
      }
  }
  CheckInvariants(board);
}

})();
