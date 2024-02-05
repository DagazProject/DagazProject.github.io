(function() {

Dagaz.AI.AI_FRAME      = 2000;
Dagaz.AI.MIN_DEEP      = 6;

var MAX_FORCED_FACTOR  = 1;

var unpromote = false;
var inversed  = false;
var blink = 1;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "columns-checkers-extension") {
      if (value == "deferred") {
          Dagaz.Model.deferredStrike = true;
      }
      if (value == "inversed") {
          inversed = true;
      }
      if (value == "unpromote") {
          unpromote = true;
      }
  } else {
      checkVersion(design, name, value);
  }
}

var getPrice = function(design, piece) {
  var r = design.price[piece.type];
  var v = piece.getValue(0);
  if (v !== null) {
      for (var i = 0; i < v.length; i++) {
           var t = (v[i] / 2) | 0;
           r += (design.price[t] / 2) | 0;
      }
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
              var bonus = 6;
              if (_.indexOf([1, 23, 24, 39, 40, 62], +pos) >= 0) {
                  bonus -= 3;
              }
              if (_.indexOf([7, 8, 55, 56], +pos) >= 0) {
                  bonus -= 4;
              }
              if (_.indexOf([3, 5, 17, 46, 58, 60], +pos) >= 0) {
                  bonus -= 2;
              }
              if (design.inZone(1, board.player, pos)) {
                  bonus -= 4;
              }
              if ((piece.type == 1) && (_.indexOf([7, 14, 21, 28, 35, 42, 49, 56], +pos) >= 0)) {
                  bonus -= 2;
              }
              v += bonus;
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
  if (board.player != player) {
      r = -r;
  }
  return r;
}

var getValue = function(piece, ix) {
  var r = [];
  var v = piece.getValue(ix);
  if (v !== null) {
      _.each(v, function(x) {
          r.unshift(x);
      });
  }
  return r;
}

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  var dx = 0;
  var value = [];
  if (model) {
      value = getValue(model, 0);
  }
  var p = +model.type * 2;
  p += +model.player - 1;
  value.push(p);
  if (Dagaz.Model.showBlink && (_.indexOf(view.current, pos) >= 0)) {
      dx = blink;
      blink = -blink;
  }
  if (value !== null) {
      var offset = 8;
      if (value.length > 10) offset = 7;
      if (value.length > 12) offset = 6;
      if (value.length > 14) offset = 5;
      if (value.length > 16) offset = 4;
      if (value.length > 20) offset = 3;
      var s = value.length * 5;
      if (s > 15) s = 15;
      y += s;
      while (value.length > 0) {
          var p = null;
          var t = value.shift();
          var f = ((t % 2) == 0);
          if (inversed) {
              f = !f;
          }
          t = (t / 2) | 0;
          if (t == 0) {
              if (f) {
                  p = view.piece["White Man"];
              } else {
                  p = view.piece["Black Man"];
              }
          } else {
              if (f) {
                  p = view.piece["White King"];
              } else {
                  p = view.piece["Black King"];
              }
          }
          if (p !== null) {
              ctx.drawImage(p.h, x + dx, y, piece.dx, piece.dy);
          }
          y -= offset;
      }
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  _.chain(board.moves)
   .filter(function(move) {
        return move.actions.length == 1;
    })
   .each(function(move) {
        var pos = move.actions[0][0][0];
        var piece = board.getPiece(pos);
        if (piece === null) {
            move.failed = true;
            return;
        }
        var val = piece.getValue(0);
        if ((val !== null) && (piece.type == 0)) {
            piece = move.actions[0][2][0];
            if ((piece !== null) && (piece.type == 1)) {
                move.actions[0][2][0] = piece.setValue(0, val);
            }
        }
    });
  _.chain(board.moves)
   .filter(function(move) {
        return move.actions.length > 1;
    })
   .each(function(move) {
        var actions  = [];
        var captured = [];
        var piece = null;
        var last  = null;
        var maxpn = null;
        _.each(move.actions, function(action) {
            if (action[0] !== null) {
                if (action[1] !== null) {
                    if (piece === null) {
                        piece = board.getPiece(action[0][0]);
                        if (piece === null) {
                            move.failed = true;
                        }
                    }
                    if (action[2] !== null) {
                        var v = piece.getValue(0);
                        piece = action[2][0];
                        if (v !== null) {
                            piece = piece.setValue(0, v);
                        }
                    }
                    maxpn = action[3];
                    var target = null;
                    if (last !== null) {
                        var p = board.getPiece(last);
                        if (p !== null) {
                            var dst = piece.getValue(0);
                            if (dst === null) {
                                dst = "";
                            }
                            var t = p.type;
                            if (unpromote) {
                                t = 0;
                            }
                            dst = dst + ((+t * 2) + (p.player - 1));
                            var src = p.getValue(0);
                            if ((src === null) || (src == "")) {
                                if (Dagaz.Model.deferredStrike) {
                                    captured.push(last);
                                } else {
                                    actions.push([ [last], null, null, maxpn ]);
                                }
                                last = null;
                            } else {
                                var acc = "";
                                while (src.length > 1) {
                                    acc = src.slice(-1) + acc;
                                    src = src.substr(0, src.length - 1);
                                }
                                target = Dagaz.Model.createPiece((src / 2) | 0, (src % 2) + 1);
                                if (acc.length > 0) {
                                    target = target.setValue(0, acc);
                                }
                            }
                            piece = piece.setValue(0, dst);
                        }
                    }
                    actions.push([ action[0], action[1], [piece], maxpn ]);
                    if (target !== null) {
                        actions.push([ [last], [last], [target], maxpn ]);
                        last = null;
                    }
                } else {
                    last = action[0][0];
                }
            } else {
                move.failed = true;
            }
        });
        _.each(captured, function(pos) {
            actions.push([ [pos], null, null, maxpn ]);
        });
        move.actions = actions;
    });
  CheckInvariants(board);
}

})();
