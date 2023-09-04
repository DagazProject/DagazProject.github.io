(function() {

Dagaz.View.CLEAR_KO = true;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "pasang-extension") {
      checkVersion(design, name, value);
  }
}

var checkDir = function(design, board, pos, dir) {
  while (pos !== null) {
      if (board.getPiece(pos) === null) return true;
      pos = design.navigate(board.player, pos, dir);
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var w = design.getDirection("w"); var gr = design.getDirection("gr"); 
  var e = design.getDirection("e"); var sd = design.getDirection("sd"); 
  _.each(board.moves, function(move) {
      if (move.isSimpleMove() && (move.actions[0][2] !== null)) {
          var pos    = move.actions[0][0][0];
          var piece  = board.getPiece(pos);
          var target = move.actions[0][2][0];
          if ((piece !== null) && (piece.type > 0) && (target.type == 0)) {
              move.actions[0][2] = [ target.changeOwner(board.player) ];
          }
      }
      var s = 0;
      _.each(move.actions, function(a) {
          if ((a[0] !== null) && (a[1] === null)) {
              var pos = move.actions[1][0];
              var piece = board.getPiece(pos);
              if (piece !== null) {
                  s += +piece.type;
              }
              if (checkDir(design, board, pos, w) || 
                  checkDir(design, board, pos, e) || 
                  checkDir(design, board, pos, sd)) {
                  move.failed = true;
                  return;
              }
              for (var i = 0; i < 4; i++) {
                  pos = design.navigate(board.player, pos, gr);
                  var piece = board.getPiece(pos);
                  if (piece !== null) {
                      s += +piece.type;
                  }
                  move.capturePiece(pos);
              }
          }
      });
      if (s > 0) {
          move.addValue(board.player, s);
      }
  });
  CheckInvariants(board);
}

})();
