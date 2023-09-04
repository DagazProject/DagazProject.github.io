(function() {

Dagaz.Model.WIDTH             = 8;
Dagaz.Model.VIEW_MOVES_LENGTH = 2;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "rithmomachia-ambush") {
      checkVersion(design, name, value);
  }
}

var isC = function(piece) {
  if (Dagaz.Model.isC(piece.type)) return true;
  if (!Dagaz.Model.isP(piece.type)) return false;
  for (var ix = 0; ix < 6; ix++) {
       var t = piece.getValue(ix);
       if ((t !== null) && Dagaz.Model.isC(t)) return true;
  }
  return false;
}

var isT = function(piece) {
  if (Dagaz.Model.isT(piece.type)) return true;
  if (!Dagaz.Model.isP(piece.type)) return false;
  for (var ix = 0; ix < 6; ix++) {
       var t = piece.getValue(ix);
       if ((t !== null) && Dagaz.Model.isT(t)) return true;
  }
  return false;
}

var isS = function(piece) {
  if (Dagaz.Model.isS(piece.type)) return true;
  if (!Dagaz.Model.isP(piece.type)) return false;
  for (var ix = 0; ix < 6; ix++) {
       var t = piece.getValue(ix);
       if ((t !== null) && Dagaz.Model.isS(t)) return true;
  }
  return false;
}

var getDirs = function(dir) {
  r = [dir];
  if (dir == 1) {
      r.push(0); r.push(2);
  }
  if (dir == 3) {
      r.push(0); r.push(5);
  }
  if (dir == 4) {
      r.push(2); r.push(6);
  }
  if (dir == 7) {
      r.push(5); r.push(6);
  }
  return r;
}

var getTargets = function(design, board, pos, piece) {
  var r = [];
  if (isC(piece)) {
      _.each([0, 2, 5, 6], function(o) {
          var p = design.navigate(1, pos, o);
          if (p === null) return;
          r.push(p);
      });
  }
  if (isT(piece)) {
      _.each([1, 3, 4, 7], function(o) {
          var p = design.navigate(1, pos, o);
          if (p === null) return;
          if (board.getPiece(p) !== null) return;
          _.each(getDirs(o), function(d) {
              var q = design.navigate(1, p, d);
              if (q === null) return;
              r.push(q);
          });
      });
  }
  if (isS(piece)) {
      _.each([1, 3, 4, 7], function(o) {
          var p = design.navigate(1, pos, o);
          if (p === null) return;
          if (board.getPiece(p) !== null) return;
          p = design.navigate(1, p, o);
          if (p === null) return;
          if (board.getPiece(p) !== null) return;
          _.each(getDirs(o), function(d) {
              var q = design.navigate(1, p, d);
              if (q === null) return;
              r.push(q);
          });
      });
  }
  return r;
}

var isCaptured = function(pos, move) {
  for (var i = 0; i < move.actions.length; i++) {
       if ((move.actions[i][0] !== null) &&
           (move.actions[i][1] === null) &&
           (move.actions[i][0][0] == pos)) return true;
  }
  return false;
}

var getEqual = function(design, piece, target, r) {
  if (design.price[piece.type] == design.price[target.type]) {
      r.push(target.type);
      return;
  }
  if (Dagaz.Model.isP(piece.type)) {
      for (var i = 0; i < 6; i++) {
           var p = piece.getValue(i);
           if ((p !== null) && 
               (design.price[p] == design.price[target.type])) {
                r.push(target.type);
                return;
           }
           if (Dagaz.Model.isP(target.type)) {
                for (var j = 0; j < 6; j++) {
                     var q = target.getValue(j);
                     if ((q !== null) && (design.price[p] == design.price[q])) r.push(q);
                }
           }
      }
  }
  if (Dagaz.Model.isP(target.type)) {
      for (var j = 0; j < 6; j++) {
           var q = target.getValue(j);
           if ((q !== null) && (design.price[piece.type] == design.price[q])) r.push(q);
      }
  }
}

var checkAmbush = function(x, y, z) {
  if (x + y == z) return true;
  if (x + z == y) return true;
  if (y + z == x) return true;
  if (x * y == z) return true;
  if (x * z == y) return true;
  if (y * z == x) return true;
  return false;
}

var isAmbush = function(design, z, a, b) {
  if (checkAmbush(z, design.price[a.type], design.price[b.type])) return true;
  if (Dagaz.Model.isP(a.type)) {
      for (var i = 0; i < 6; i++) {
           var x = a.getValue(i);
           if (x !== null) {
               if (checkAmbush(z, design.price[x], design.price[b.type])) return true;
               if (Dagaz.Model.isP(b.type)) {
                   for (var j = 0; j < 6; j++) {
                        var y = b.getValue(j);
                        if ((y !== null) && checkAmbush(z, design.price[x], design.price[y])) return true;
                   }
               }
           }
      }
  }
  if (Dagaz.Model.isP(b.type)) {
      for (var j = 0; j < 6; j++) {
           var y = b.getValue(j);
           if ((y !== null) && checkAmbush(z, design.price[a.type], design.price[y])) return true;
      }
  }
  return false;
}

var getAmbush = function(design, target, a, b, r) {
  if (isAmbush(design, design.price[target.type], a, b)) {
      r.push(target.type);
      return;
  }
  if (Dagaz.Model.isP(target.type)) {
      for (var i = 0; i < 6; i++) {
           var q = target.getValue(i);
           if ((q !== null) && isAmbush(design, design.price[q], a, b)) r.push(q);
      }
  }
}

var getDistance = function(p, q) {
  var px = Dagaz.Model.getX(p); var py = Dagaz.Model.getY(p);
  var qx = Dagaz.Model.getX(q); var qy = Dagaz.Model.getY(q);
  var dx = Math.abs(px - qx);
  var dy = Math.abs(py - qy);
  if (dx == 0) return dy + 1;
  if (dy == 0) return dx + 1;
  return null;
}

var checkErruption = function(x, y, z) {
  if (x * y == z) return true;
  if (x * z == y) return true;
  if (y * z == x) return true;
  return false;
}

var getErruption = function(design, board, p, q, piece, target, r) {
  var d = getDistance(p, q);
  if (d === null) return;
  if (checkErruption(d, design.price[piece.type], design.price[target.type])) {
      r.push(target.type);
      return;
  }
  if (Dagaz.Model.isP(piece.type)) {
      for (var i = 0; i < 6; i++) {
           var x = piece.getValue(i);
           if ((x !== null) && checkErruption(d, design.price[x], design.price[target.type])) {
               r.push(target.type);
               return;
           }
           if (Dagaz.Model.isP(target.type)) {
               for (var j = 0; j < 6; j++) {
                    var y = target.getValue(j);
                    if ((y !== null) && checkErruption(d, design.price[x], design.price[y])) r.push(y);
               }
           }
      }
  }
  if (Dagaz.Model.isP(target.type)) {
      for (var j = 0; j < 6; j++) {
           var y = target.getValue(j);
           if ((y !== null) && checkErruption(d, design.price[piece.type], design.price[y])) r.push(y);
      }
  }
}

var indexOf = function(arr, x) {
  return _.indexOf(_.map(arr, function(a) {return +a;}), +x);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;
  _.each(board.moves, function(move) {
      var src = move.actions[0][0][0];
      var dst = move.actions[0][1][0];
      var piece = board.getPiece(src);
      if (piece === null) return;
      var b = board.apply(move);
      _.each(getTargets(design, b, dst, piece), function(p) {
          if ((p == src) || isCaptured(p, move)) return;
          var target = board.getPiece(p);
          if ((target === null) || (target.player == board.player)) return;
          var c = [];
          getEqual(design, piece, target, c);
          if (indexOf(c, target.type) >= 0) {
              move.capturePiece(p);
              return;
          }
          var ambush = [];
          _.each(design.allPositions(), function(q) {
              if (q == dst) return;
              var x = b.getPiece(q);
              if ((x === null) || (x.player != board.player)) return;
              if (indexOf(getTargets(design, b, q, x), p) < 0) return;
              getAmbush(design, target, piece, x, ambush);
          });
          if (indexOf(ambush, target.type) >= 0) {
              move.capturePiece(p);
              return;
          }
          _.each(ambush, function(p) {
              c.push(p);
          });
          var erruption = [];
          getErruption(design, b, dst, p, piece, target, erruption);
          if (indexOf(erruption, target.type) >= 0) {
              move.capturePiece(p);
              return;
          }
          _.each(erruption, function(p) {
              c.push(p);
          });
          if (c.length > 0) {
              var s = 0; var cn = 0; var v = 0;
              for (var ix = 0; ix < 6; ix++) {
                   var t = target.getValue(ix);
                   if (t !== null) {
                       if (indexOf(c, t) >= 0) {
                           target = target.setValue(ix, null);
                       } else {               
                           s += design.price[t];
                           v += t;
                           cn++;
                       }
                   }
              }
              var player = design.nextPlayer(board.player);
              _.each(design.allPositions(), function(p) {
                  if (!design.inZone(0, player, p)) return;
                  var piece = board.getPiece(p);
                  if (piece === null) return;
                  if ((cn < 2) || (indexOf(c, piece.type) >= 0))  {
                      move.capturePiece(p);
                  }
              });
              if (cn == 0) {
                  move.capturePiece(p);
                  return;
              }
              if (cn > 1) {
                  var x = target.promote(design.getPieceType("P" + s));
                  var ix = 0;
                  for (var i = 0; i < 6; i++) {
                       var v = target.getValue(i);
                       if (v !== null) {
                           x = x.setValue(ix++, v);
                       }
                  }
                  target = x;
              } else {
                  target = target.promote(v);
              }
              move.movePiece(p, p, target);
          }
      });
  });
  CheckInvariants(board);
}

})();
