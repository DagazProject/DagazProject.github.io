(function() {

var SIZE         = 15;
var MAXVALUE     = 1000000;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "thud-extension") {
     checkVersion(design, name, value);
  }
}

var getX = function(pos) {
  return pos % SIZE;
}

var getY = function(pos) {
  return (pos / SIZE) | 0;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var dwarfs = [];
  var trolls = [];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.type == 0) {
              dwarfs.push(pos);
          } else {
              trolls.push(pos);
          }
      }
  });
  var r = null;
  if (dwarfs.length == 0) {
      r = MAXVALUE;
  }
  if (trolls.length == 0) {
      r = -MAXVALUE;
  }
  if (r === null) {
      r = trolls.length * design.price[1] - dwarfs.length * design.price[0];
      _.each(trolls, function(a) {
          var mn = null;
          _.each(dwarfs, function(b) {
               var dx = getX(b) - getX(a);
               var dy = getY(b) - getY(a);
               var s  = dx * dx + dy * dy;
               if ((mn === null) || (mn > s)) {
                   mn = s;
               }
          });
          if (mn <= 2) {
               r -= MAXVALUE;
          }
      });
  }
  if (player == 1) {
      r = -r;
  }
  return r;
}

var sign = function(x) {
  if (x > 0) return 1;
  if (x < 0) return -1;
  return 0;
}

var badDistance = function(design, board, player, pos, dir, distance) {
  while (distance > 0) {
      pos = design.navigate(player, pos, dir);
      if (pos === null) return true;
      var piece = board.getPiece(pos);
      if (piece === null) return true;
      if (piece.player != player) return true;
      distance--;
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(m) {
      if (m.isSimpleMove()) {
          var pos      = m.actions[0][0][0];
          var target   = m.actions[0][1][0];
          var dx       = getX(target) - getX(pos);
          var dy       = getY(target) - getY(pos);
          var distance = Math.max(Math.abs(dx), Math.abs(dy));
          var dir      = design.findDirection(pos + sign(dy) * SIZE + sign(dx), pos);
          var piece    = board.getPiece(pos);
          if ((piece !== null) && (dir !== null)) {
              if (piece.type == 0) {
                  if ((board.getPiece(target) !== null) && (distance > 1)) {
                      if (badDistance(design, board, board.player, pos, dir, distance - 1)) {
                          m.failed = true;
                      }
                  }
              } else {
                  var f = true;
                  _.each(design.allDirections(), function(d) {
                      var p = design.navigate(board.player, target, d);
                      if (p !== null) {
                          var piece = board.getPiece(p);
                          if ((piece !== null) && (piece.type == 0)) {
                              f = false;
                              m.capturePiece(p);
                          }
                      }
                  });
                  if (distance > 1) {
                      if (f || badDistance(design, board, board.player, pos, dir, distance - 1)) {
                          m.failed = true;
                      }
                  }
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
