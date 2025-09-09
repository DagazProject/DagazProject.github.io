(function() {

var STRONG_FACTOR   = 4;
var WEAK_FACTOR     = 2;
var MATERIAL_FACTOR = 1;
var MOBILITY_FACTOR = 10;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "reversi-3d-extension") {
      checkVersion(design, name, value);
  }
}

var isValid = function(design, board, player, pos) {
  for (var dir = 0; dir < design.dirs.length; dir++) {
       var p = design.navigate(player, pos, dir);
       if (p === null) continue;
       var piece = board.getPiece(p);
       if ((piece === null) || (piece.player == player)) continue;
       while (p !== null) {
           p = design.navigate(player, p, dir);
           if (p !== null) {
               piece = board.getPiece(p);
               if (piece === null) break;
               if (piece.player == player) return true;
           }
       }
  }
  return false;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var fc = 0; var ec = 0; var fm = 0; var em = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) {
          if (MOBILITY_FACTOR > 0) {
              if (isValid(design, board, player, pos)) fm++;
              if (isValid(design, board, design.nextPlayer(player), pos)) em++;
          }
      } else {
          var v = design.price[piece.type];
          if (design.inZone(0, player, pos)) {
              v = v * STRONG_FACTOR;
          }
          if (design.inZone(1, player, pos)) {
              v = (v / WEAK_FACTOR) | 0;
          }
          if (piece.player == player) {
              fc += v;
          } else {
              ec += v;
          }
      }
  });
  return (fc - ec) * MATERIAL_FACTOR + (fm - em) * MOBILITY_FACTOR;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  return move.actions.length;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var fc = 0; var ec = 0;
  var positions = [];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) {
          positions.push(pos);
      } else {
          if (piece.player == player) {
              fc++;
          } else {
              ec++;
          }
      }
  });
  var f = true;
  _.each(positions, function(pos) {
      if (f) {
          if (isValid(design, board, player, pos)) f = false;
          if (isValid(design, board, design.nextPlayer(player), pos)) f = false;
      }
  });
  if (f) {
      if (fc == ec) return 0;
      if (fc > ec) {
          return 1;
      } else {
          return -1;
      }
  }
  return checkGoals(design, board, player);
}

var checkDirection = function(design, board, pos, d1, d2, d3, captured) {
  while (pos !== null) {
      pos = design.navigate(board.player, pos, d1);
      if (!_.isUndefined(d2)) {
          if (pos === null) break;
          pos = design.navigate(board.player, pos, d2);
          if (!_.isUndefined(d3)) {
              if (pos === null) break;
              pos = design.navigate(board.player, pos, d3);
          }
      }
      if (pos !== null) {
          var piece = board.getPiece(pos);
          if (piece === null) return false;
          if (piece.player == board.player) return captured.length > 0;
          captured.push(pos);
      }
  }
  return false;
}

var checkDirections = function(move, design, board, pos, d1, d2, d3) {
  var captured = [];
  if (checkDirection(design, board, pos, d1, d2, d3, captured)) {
      _.each(captured, function(pos) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              piece = piece.changeOwner(board.player);
              move.movePiece(pos, pos, piece);
          }
      });
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isDropMove()) return;
      var pos = move.actions[0][1][0];
      _.each([1, 2], function(d1) {
          checkDirections(move, design, board, pos, d1);
      });
      _.each([0, 3], function(d1) {
          checkDirections(move, design, board, pos, d1);
          _.each([1, 2], function(d2) {
              checkDirections(move, design, board, pos, d1, d2);
              _.each([4, 5], function(d3) {
                  checkDirections(move, design, board, pos, d1, d2, d3);
              });
          });
      });
      _.each([4, 5], function(d1) {
          checkDirections(move, design, board, pos, d1);
          _.each([0, 1, 2, 3], function(d2) {
              checkDirections(move, design, board, pos, d1, d2);
          });
      });
      if (move.actions.length <= 1) {
          move.failed = true;
          return;
      }
  });
  CheckInvariants(board);
}

})();
