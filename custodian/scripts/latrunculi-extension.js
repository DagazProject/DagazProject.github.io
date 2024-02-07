(function() {

Dagaz.View.STRIKE_ALPHA = 0.2;
Dagaz.Model.CORNER_ZONE = [0, 11, 84, 95];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "latrunculi-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][1][0];
      var captured = [];
      _.each(design.allDirections(), function(d) {
          var p = design.navigate(1, pos, d);
          if (p === null) return;
          var piece = board.getPiece(p);
          if (piece === null) return;
          if (piece.player == board.player) return;
          captured.push({
              pos: p,
              dir: d
          });
      });
      if (captured.length == 0) return;
      _.each(captured, function(c) {
          var f = false;
          if (_.indexOf(Dagaz.Model.CORNER_ZONE, c.pos) < 0) {
              var p = design.navigate(1, c.pos, c.dir);
              if (p === null) return;
              var piece = board.getPiece(p);
              if (piece === null) return;
              if (piece.player != board.player) return;
              f = true;
          } else {
              _.each(design.allDirections(), function(d) {
                  var p = design.navigate(1, c.pos, d);
                  if (p === null) return;
                  var piece = board.getPiece(p);
                  if (piece === null) return;
                  if (piece.player != board.player) return;
                  f = true;
              });
          }
          if (!f) return;
          var piece = board.getPiece(c.pos);
          if (piece === null) return;
          if (piece.type == 0) {
              move.capturePiece(c.pos);
          } else {
              move.movePiece(c.pos, c.pos, piece.promote(2));
          }
      });
  });
  CheckInvariants(board);
}

})();
