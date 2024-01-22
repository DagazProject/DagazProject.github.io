(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "omega-fool-extension") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
  Dagaz.Controller.addSound(10,  "../sounds/magic.wav");
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("King");
  var fk     = false;
  var ek     = false;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == king)) {
          if (piece.player == player) {
              fk = true;
          } else {
              ek = true;
          }
      }
  });
  if (!ek) return 1;
  if (!fk) return -1;
  return checkGoals(design, board, player);
}

var isFoolSpawn = function(board, pos) {
  var ix = (board.player - 1) * 2;
  var v = board.getValue(ix);
  if (v === null) return false;
  if (v >= 200) return false;
  return v == pos;
}

var isValidFoolMove = function(board, type) {
  var ix = (2 - board.player) * 2;
  var v = board.getValue(ix + 1);
  if (v === null) return false;
  return v == type;
}

var isImmobilized = function(design, board, player, pos) {
  var r = false;
  for (var dir = 0; dir < design.dirs.length; dir++) {
       var p = design.navigate(player, pos, dir);
       if (p !== null) {
           var piece = board.getPiece(p);
           if ((piece !== null) && (piece.type == 8)) {
               if (piece.player == player) return false;
               r = true;
           }
       }
  }
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isDropMove()) {
          var pos = move.actions[0][1][0];
          if (!isFoolSpawn(board, pos)) {
              move.failed = true;
              return;
          } else {
              board.ko = [ pos ];
              move.playSound(10, 500);
          }
          var ix = (board.player - 1) * 2;
          move.setValue(ix, 200);
      } else {
          _.each(move.actions, function(a) {
              if ((a[0] !== null) && (a[1] !== null)) {
                   var piece = board.getPiece(a[0][0]);
                   if (piece.getValue(0) === null) {
                       a[2] = [ piece.setValue(0, 1) ];
                   }
              }
          });
          if (move.mode < 8) {
              if (!isValidFoolMove(board, move.mode)) {
                  move.failed = true;
                  return;
              }
              var pos = null;
              _.each(move.actions, function(a) {
                  if (pos !== null) return;
                  if (a[0] === null) return;
                  if (a[1] === null) return;
                  pos = a[0][0];
              });
              if (pos !== null) {
                  var ix = (board.player - 1) * 2;
                  var v = board.getValue(ix);
                  if ((v === null) || (v < 200)) {
                      move.setValue(ix, pos);
                  }
                  move.setValue(ix + 1, +move.mode);
              }
          } else {
              var pos = null;
              _.each(move.actions, function(a) {
                  if ((a[0] !== null) && (a[1] !== null) && isImmobilized(design, board, board.player, a[0][0])) {
                      move.failed = true;
                      return;
                  }
                  if (pos !== null) return;
                  if (a[0] === null) return;
                  if (a[1] === null) return;
                  pos = a[0][0];
              });
              if (pos !== null) {
                  var piece = board.getPiece(pos);
                  if (piece === null) return;
                  var ix = (board.player - 1) * 2;
                  var v = board.getValue(ix);
                  if ((v === null) || (v < 200)) {
                      move.setValue(ix, pos);
                  }
                  move.setValue(ix + 1, +piece.type);
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
