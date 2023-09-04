(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ming-mang-extension") {
      checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  return move.actions.length;
}

var eval = Dagaz.AI.eval;

Dagaz.AI.eval = function(design, params, board, player) {
  var r = eval(design, params, board, board.player);
  var cover = board.getCover(design);
  var cnt = null;
  _.each(cover, function(list) {
      var cn = 0;
      _.each(list, function(pos) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              if (piece.player == board.player) {
                  r--;
              } else {
                  cn++;
              }
          }
      });
      if ((cnt === null) || (cnt < cn)) {
           cnt = cn;
      }
  });
  r += cnt * 3;
  if (board.player != player) {
      return -r;
  } else {
      return r;
  }
}

var done = function(design, board, player, pos, dir, trace, captured) {
  var p = design.navigate(player, pos, dir);
  if (p !== null) {
      var piece = board.getPiece(p);
      if (piece !== null) {
          if (piece.player == player) {
              _.each(trace, function(pos) {
                  if (_.indexOf(captured, pos) < 0) {
                      captured.push(pos);
                  }
              });
          } else {
              trace.push(p);
              done(design, board, player, p, dir, trace, captured);
              trace.pop();
          }
      }
  }
}

var capture = function(design, board, player, pos, dir, dirs, trace, captured) {
  var p = design.navigate(player, pos, dir);
  if (p !== null) {
      var piece = board.getPiece(p);
      if (piece !== null) {
          if (piece.player == player) {
              _.each(trace, function(pos) {
                  if (_.indexOf(captured, pos) < 0) {
                      captured.push(pos);
                  }
              });
          } else {
              trace.push(p);
              capture(design, board, player, p, dir, dirs, trace, captured);
              if (trace.length > 1) {
                  _.each(dirs, function(dir) {
                      var pos = design.navigate(player, p, dir);
                      if (pos !== null) {
                          var piece = board.getPiece(pos);
                          if ((piece !== null) && (piece.player != player)) {
                              trace.push(pos);
                              done(design, board, player, pos, dir, trace, captured);
                              trace.pop();
                          }
                      }
                  });
              }
              trace.pop();
          }
      }
  }
}

var checkCapturing = function(design, board, pos, player, captured) {
  var trace = [];
  capture(design, board, player, pos, 3, [0, 1], trace, captured);
  capture(design, board, player, pos, 1, [3, 2], trace, captured);
  capture(design, board, player, pos, 2, [0, 1], trace, captured);
  capture(design, board, player, pos, 0, [3, 2], trace, captured);
}

Dagaz.Model.GetCover = function(design, board) {
  if (_.isUndefined(board.cover)) {
      board.cover = [];
      _.each(design.allPositions(), function(pos) {
           board.cover[pos] = [];
           if (board.getPiece(pos) === null) {
               var neighbors = [];
               var attackers = [];
               _.each(design.allDirections(), function(dir) {
                   var p = design.navigate(1, pos, dir);
                   if (p !== null) {
                       var piece = board.getPiece(p);
                       if (piece !== null) {
                           neighbors.push(piece.player);
                           attackers.push(piece.player);
                       } else {
                           while (p !== null) {
                               piece = board.getPiece(p);
                               if (piece !== null) {
                                   attackers.push(piece.player);
                                   break;
                               }
                               p = design.navigate(1, p, dir);
                           }
                       }
                   }
               });
               if (neighbors.length > 1) {
                   var captured = [];
                   if ((_.indexOf(attackers, 1) >= 0) && (_.indexOf(neighbors, 2) >= 0)) {
                       checkCapturing(design, board, pos, 1, captured);
                   }
                   if ((_.indexOf(attackers, 2) >= 0) && (_.indexOf(neighbors, 1) >= 0)) {
                       checkCapturing(design, board, pos, 2, captured);
                   }
                   if (captured.length > 0) {
                       board.cover[pos] = _.uniq(captured);
                   }
               }
           }
      });
  }
  return board.cover;
}

Dagaz.AI.setContext = function(board) {
  board.cover = [];
}

var Extension = Dagaz.Model.Extension;

Dagaz.Model.Extension = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][1][0];
          var captured = [];
          var trace = [];
          capture(design, board, board.player, pos, 3, [0, 1], trace, captured);
          capture(design, board, board.player, pos, 1, [3, 2], trace, captured);
          capture(design, board, board.player, pos, 2, [0, 1], trace, captured);
          capture(design, board, board.player, pos, 0, [3, 2], trace, captured);
          _.each(captured, function(pos) {
              var piece = board.getPiece(pos);
              if (piece !== null) {
                  move.movePiece(pos, pos, piece.changeOwner(board.player));
              }
          });
      }
  });
  Extension(board);
}

})();
