(function() {

Dagaz.Model.easy = null;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "find-pair-extension") {
      if (value == "easy") Dagaz.Model.easy = true;
  } else {
      checkVersion(design, name, value);
  }
}

var getEasy = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&]easy=y/);
  if (result) {
      return true;
  } else {
      return false;
  }
}

var isEasy = function() {
  if (Dagaz.Model.easy === null) {
      Dagaz.Model.easy = getEasy();
  }
  return Dagaz.Model.easy;
}

var isPaired = function(board, opened) {
  if (opened.length != 2) return false;
  var x = board.getPiece(opened[0]);
  var y = board.getPiece(opened[1]);
  if ((x === null) || (y == null)) return false;
  if (x.type != y.type) return false;
  if (x.type == 11) return true;  
  return isEasy() || (Math.abs(x.player - y.player) == 2);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var opened = [];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type >= 10) && (+piece.type % 2 == 1)) {
          opened.push(pos);
      }
  });
  _.each(board.moves, function(move) {
      if (move.mode == 0) {
          if (opened.length <= 1) return;
          var f = isPaired(board, opened);
          _.each(opened, function(pos) {
              if (f) {
                  move.capturePiece(pos);
              } else {
                  var piece = board.getPiece(pos);
                  if (piece !== null) {
                      move.movePiece(pos, pos, piece.promote(+piece.type - 1));
                  }
              }
          });
          if (f) {
              move.mode  = 2;
              move.sound = 1;
          }
      } else {
          if (!isPaired(board, opened)) {
              move.failed = true;
          }
          var p = move.actions[0][0][0];
          _.each(opened, function(pos) {
              if (pos != p) {
                  move.capturePiece(pos);
              }
          });
      }
  });
  CheckInvariants(board);
}

})();
