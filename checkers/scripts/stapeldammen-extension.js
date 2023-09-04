(function() {

Dagaz.AI.MIN_DEEP      = 6;
var MAX_FORCED_FACTOR  = 2;

var blink = 1;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "stapeldammen-extension") {
     checkVersion(design, name, value);
  }
}

var getPrice = function(design, piece) {
  var r = design.price[piece.type] * 10;
  var v = piece.getValue(0);
  if (v !== null) {
      r += v.length;
  }
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  _.each(move.actions, function(a) {
      if (a[0] !== null) {
          if (a[1] !== null) {
              if (design.inZone(0, board.player, a[1][0])) r += 1000;
          } else {
              var piece = board.getPiece(a[0][0]);
              if (piece !== null) {
                  r += getPrice(design, piece);
              }
          }
      }
  });
  return r;
}

Dagaz.AI.isForced = function(design, board, move) {
  if (_.isUndefined(move.isForced)) {
      move.isForced = false;
      var b = board.apply(move);
      var c = 0;
      _.each(design.allPositions(), function(pos) {
          var piece = b.getPiece(pos);
          if ((piece !== null) && (piece.type == 0) && (piece.player == b.player)) {
              _.each(design.allDirections(), function(dir) {
                   var p = design.navigate(b.player, pos, dir);
                   if (p !== null) {
                       piece = b.getPiece(p);
                       if ((piece !== null) && (piece.type == 0) && (piece.player != b.player)) {
                            p = design.navigate(b.player, p, dir);
                            if ((p !== null) && (b.getPiece(p) === null)) c++;
                       }
                   }
              });
          }
      });
      if ((c > 0) && (c <= MAX_FORCED_FACTOR)) {
          move.isForced = true;
      }
  }
  return move.isForced;
}

Dagaz.AI.getEval = function(design, board) {
  if (_.isUndefined(board.eval)) {
      board.eval = 0;
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              var v = getPrice(design, piece);
              if (!Dagaz.AI.isFriend(board.player, piece.player)) {
                  v = -v;
              }
              board.eval += v;
          }
      });
  }
  return board.eval;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = Dagaz.AI.getEval(design, board);
  if (!Dagaz.AI.isFriend(player, board.player)) {
      r = -r;
  }
  return r;
}

var nextPlayer = function(player) {
  if (player == 1) {
      return 2;
  } else {
      return 1;
  }
}

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  var dx = 0;
  var value = null;
  if (model) {
      value = model.getValue(0);
  }
  if (Dagaz.Model.showBlink && (_.indexOf(view.current, pos) >= 0)) {
      dx = blink;
      blink = -blink;
  }
  if ((value !== null) && (value != "")) {
      var stack = [];
      while (value > 0) {
          stack.push(+value.substr(value.length - 1, 1));
          value = value.substr(0, value.length - 1);
      }
      var s = stack.length * 5;
      if (s > 15) s = 15;
      y += s;
      while (stack.length > 0) {
          var player = stack.pop();
          var p = view.piece["Red Man"];
          if (player == 1) {
              p = view.piece["White Man"];
          }
          ctx.drawImage(p.h, x + dx, y, piece.dx, piece.dy);
          y -= 5;
      }
  }
  ctx.drawImage(piece.h, x + dx, y, piece.dx, piece.dy);
}

var pushToBottom = function(piece) {
  var value  = piece.getValue(0);
  var player = nextPlayer(piece.player);
  if (value === null) {
      value = "" + player;
  } else {
      value = "" + player + value;
  }
  return piece.setValue(0, value);
}

var popFromTop = function(piece) {
  var value = piece.getValue(0);
  if ((value === null) || (value == "")) return null;
  var player = value.substr(value.length - 1, 1);
  value = value.substr(0, value.length - 1);
  var r = Dagaz.Model.createPiece(0, +player);
  if (value > 0) {
      r = r.setValue(0, value);
  }
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var actions   = [];
      var capturing = null;
      var piece     = null;
      _.each(move.actions, function(a) {
          if (a[0] !== null) {
              if (a[1] !== null) {
                  if (piece === null) {
                      piece = board.getPiece(a[0][0]);
                  }
                  if (capturing !== null) {
                      var enemy = board.getPiece(capturing[0][0]);
                      if (enemy !== null) {
                          piece = pushToBottom(piece);
                          a[2]  = [ piece ];
                          enemy = popFromTop(enemy);
                          if (enemy !== null) {
                              capturing[1] = capturing[0];
                              capturing[2] = [ enemy ];
                          }
                      }
                      actions.push(a);
                      actions.push(capturing);
                      capturing = null;                          
                  } else {
                      actions.push(a);
                  }
              } else {
                  capturing = a;
              }
          }
      });
      move.actions = actions;
  });
  CheckInvariants(board);
}

})();
