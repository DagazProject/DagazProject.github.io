(function() {

var checkVersion = Dagaz.Model.checkVersion;

var inversed = false;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "stavropol-adiuh-extension") {
      if (value == "inversed") {
          inversed = true;
      }
  } else {
      checkVersion(design, name, value);
  }
}

var isRestricted = function(design, player, pos, dir, from) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      if (p == from) return true;
      p = design.navigate(player, p, dir);
  }
  return false;
}

var isAttacked = function(design, board, player, pos, dir, isKing) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) {
      if (!isKing) return false;
      while (piece === null) {
          p = design.navigate(player, p, dir);
          if (p === null) return false;
          piece = board.getPiece(p);
      }
  }
  if (piece.player == player) return false;
  p = design.navigate(player, p, dir);
  if (p === null) return false;
  return board.getPiece(p) === null;
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
  var p = +model.type;
  value.push(p);
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
          if (t < 2) {
              if (f) {
                  p = view.piece["White WhiteMan"];
              } else {
                  p = view.piece["Black BlackMan"];
              }
          } else {
              if (f) {
                  p = view.piece["White WhiteKing"];
              } else {
                  p = view.piece["Black BlackKing"];
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
  var design = Dagaz.Model.design;
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
        if (val !== null) {
            piece = move.actions[0][2][0];
            if (piece !== null) {
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
                            dst = dst + p.type;
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
                                target = Dagaz.Model.createPiece(src, (src % 2) + 1);
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
  _.each(board.moves, function(move) {
      if (move.actions.length < 2) {
          move.setValue(0, null);
          move.setValue(1, null);
          return;
      }
      from = null; to = null;
      _.each(move.actions, function(a) {
           if (a[0] === null) return;
           if (a[1] === null) return;
           if (a[0][0] == a[1][0]) return;
           if (from === null) from = a[0][0];
           to = a[1][0];
      });
      if (from === null) return;
      if (to === null) return;
      var piece = board.getPiece(from);
      if (piece === null) return;
      var b = board.apply(move);
      var f = false;
      var isKing = piece.type > 1;
      if (design.inZone(piece.player == 1 ? 0 : 1, board.player, to)) {
          isKing = true;
      }
      _.each(design.allDirections(), function(dir) {
          if (f) return;
          if (isRestricted(design, piece.player, to, dir, from)) return;
          if (!isAttacked(design, b, piece.player, to, dir, isKing)) return;
          f = true;
      });
      if (f) {
          move.goTo(board.turn);
          move.setValue(0, to);
          move.setValue(1, from);
          if (piece.type > 1) {
              move.mode = 2;
          }
      } else {
          move.setValue(0, null);
          move.setValue(1, null);
          if ((piece.type > 1) && !design.inZone(piece.player == 1 ? 0 : 1, board.player, to)) {
              _.each(move.actions, function(a) {
                  if (a[0] === null) return;
                  if (a[1] === null) return;
                  if (a[2] === null) return;
                  if (a[0][0] == a[1][0]) return;
                  var p = a[2][0];
                  var v = p.getValue(0);
                  p = p.promote(piece.player == 1 ? 0 : 1);
                  if (v !== null) {
                      p = p.setValue(0, v);
                  }
                  a[2] = [p];
              });
          }
      }
  });
  CheckInvariants(board);
}

})();
