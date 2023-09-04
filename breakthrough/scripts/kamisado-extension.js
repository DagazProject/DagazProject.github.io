(function() {

var MAXVALUE       = 1000000;

Dagaz.Model.WIDTH  = 8;
Dagaz.Model.HEIGHT = 8;

Dagaz.View.showHint = function(view) {}

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "kamisado-extension") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(2,  "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
}

var getColor = function(design, player, pos) {
  for (var i = 0; i < 8; i++) {
       if (design.inZone(i, player, pos)) {
           return i;
       }
  }
  return null;
}

var trace = function(design, board, player, pos, colors) {
  var f = false;
  _.each([3, 4, 7], function(dir) {
      if (!f) {
          var p = design.navigate(player, pos, dir);
          while (p !== null) {
             if (board.getPiece(p) !== null) break;
             if (design.inZone(8, player, p)) {
                 f = true;
                 return;
             }
             var c = getColor(design, player, p);
             if (_.indexOf(colors, c) < 0) {
                 colors.push(c);
             }
             p = design.navigate(player, p, dir);
          }
      }
  });
  return f;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  if (_.isUndefined(move.weight)) {
      move.weight = 1;
      if (move.isSimpleMove()) {
          var color = getColor(design, board.player, move.actions[0][1][0]);
          if (color !== null) {
              var enemy = null;
              _.each(design.allPositions(), function(pos) {
                  if (enemy !== null) return;
                  var piece = board.getPiece(pos);
                  if ((piece !== null) && (piece.player != board.player) && (((+piece.type / 2) | 0) == color)) {
                      enemy = pos;
                  }
              });
              var piece = board.getPiece(enemy);
              if (piece !== null) {
                  var colors = [];
                  var b = board.apply(move);
                  if (trace(design, b, piece.player, enemy, colors)) {
                      // TODO: Отсеивать ходы с отрицательной эвристикой
                      move.weight = -1;
                  } else {
                      move.weight = 10 - colors.length;
                  }
              }
          }
      }
  }
  return move.weight;
}

Dagaz.AI.getEval = function(design, board) {
  if (_.isUndefined(board.eval)) {
      board.eval = 0;
      var color = null;
      if (!_.isUndefined(board.lastt)) {
          color = getColor(design, board.player, board.lastt);
      }
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              var v = 0;
              if (design.inZone(8, piece.player, pos)) {
                  v = MAXVALUE;
              }
              var colors = [];
              if (trace(design, board, piece.player, pos, colors)) {
                  if ((color !== null) && (piece.player == board.player) && (((+piece.type / 2) | 0) == color)) {
                      v += 1000;
                  } else {
                      v += 100;
                  }
              } else {
                  v += colors.length;
              }
              if (piece.player == board.player) {
                  board.eval += v;
              } else {
                  board.eval -= v;
              }
          }
      });
  }
  return board.eval;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = Dagaz.AI.getEval(design, board);
  if (player != board.player) {
      r = -r;
  }
  return r;
}

var toChar = function(n) {
  if (n < 10) {
      return String.fromCharCode("0".charCodeAt(0) + n);
  } else {
      return String.fromCharCode("A".charCodeAt(0) + n - 10);
  }
}

var toStr = function(n) {
  var r = "";
  if (n == 0) return "0";
  while (n > 0) {
      r = toChar(n % 36) + r;
      n = (n / 36) | 0;
  }
  return r;
}

Dagaz.Model.continue = function(design, board, text) {
  var str = "?setup=";
  var offset = (Dagaz.Model.HEIGHT - 1) * Dagaz.Model.WIDTH;
  _.chain(design.allPositions())
   .filter(function(pos) {
        var piece = board.getPiece(pos);
        if (piece === null) return false;
        return piece.player == 1;
    })
   .sortBy(function(pos) {
        var x = Dagaz.Model.getX(pos);
        var y = Dagaz.Model.HEIGHT - Dagaz.Model.getY(pos);
        return (y * Dagaz.Model.WIDTH) + x;
    })
   .each(function(pos) {
        var piece = board.getPiece(pos);
        if (piece !== null) {
            var type = +piece.type;
            if ((type % 2 == 0) && design.inZone(8, 1, pos)) {
                type++;
            }
            str = str + toChar(type);
            str = str + toStr(offset);
            str = str + ";";
            offset++;
        }
    });
  str = str + "-";
  offset = Dagaz.Model.WIDTH - 1;
  _.chain(design.allPositions())
   .filter(function(pos) {
        var piece = board.getPiece(pos);
        if (piece === null) return false;
        return piece.player == 2;
    })
   .sortBy(function(pos) {
        var x = Dagaz.Model.WIDTH - Dagaz.Model.getX(pos);
        var y = Dagaz.Model.getY(pos);
        return (y * Dagaz.Model.WIDTH) + x;
    })
   .each(function(pos) {
        var piece = board.getPiece(pos);
        if (piece !== null) {
            var type = +piece.type;
            if ((type % 2 == 0) && design.inZone(8, 2, pos)) {
                type++;
            }
            str = str + toChar(type);
            str = str + toStr(offset);
            str = str + ";";
            offset--;
        }
    });
  if (board.player == 1) {
     str = str + ";&turn=1";
  } else {
     str = str + ";&turn=0";
  }
  return str;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var color  = -1;
  if (!_.isUndefined(board.lastt)) {
      color = getColor(design, board.player, board.lastt);
      var piece = board.getPiece(board.lastt);
      if ((piece !== null) && (piece.player == board.player)) {
          var enemy = _.chain(_.keys(board.pieces))
           .filter(function(pos) {
               return board.getPiece(pos) !== null;
            })
           .filter(function(pos) {
               var piece = board.getPiece(pos);
               return ((+piece.type / 2) | 0) == color;
            })
           .filter(function(pos) {
               return board.getPiece(pos).player != board.player;
            })
           .first()
           .value();
          color = getColor(design, board.player, enemy); 
      }
  }
  if (color >= 0) {
      _.chain(board.moves)
       .filter(function(move) {
            return move.actions.length > 0;
        })
       .filter(function(move) {
            return move.actions[0][0] !== null;
        })
       .each(function(move) {
            var pos = move.actions[0][0][0];
            var piece = board.getPiece(pos);
            if ((piece !== null) && (((+piece.type / 2) | 0) != color)) {
                move.failed = true;
            }
        });
  }
  _.chain(board.moves)
   .filter(function(move) {
        return !move.failed;
    })
   .each(function(move) {
        var value = board.getValue(0);
        if (value !== null) {
            if (value != board.player) {
                move.failed = true;
            }
            if (move.actions.length == 1) {
                move.setValue(0, null);
            }
        }
        if (move.actions.length == 2) {
            move.setValue(0, board.player);
        }
    });
  CheckInvariants(board);
}

})();
