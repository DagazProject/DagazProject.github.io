(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "find-pair-goal") {
      checkVersion(design, name, value);
  }
}

var getNum = function(board, from, to) {
  var r = 0;
  for (var pos = from; pos <= to; pos++) {
       var piece = board.getPiece(pos);
       if (piece !== null) {
           r = r * 10;
           r = r + piece.type;
       }
  }
  return r;
}

var setNum = function(board, from, to, val, move) {
  for (var pos = to; pos >= from; pos--) {
       var t = val % 10;
       val = (val / 10) | 0;
       var piece = board.getPiece(pos);
       if ((piece !== null) && (piece.type != t)) {
           move.movePiece(pos, pos, piece.promote(t));
       }   
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var positions = [];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type >= 10)) {
          positions.push(pos);
      }
  });
  if (positions.length == 0) return 1;
  return checkGoals(design, board, player);
}

var notChained = function(board) {
  if (board === null) return true;
  if (_.isUndefined(board.move)) return true;
  return board.move.mode == 0;
}

var getChainBonus = function(board) {
  var b = board;
  if (notChained(b)) {
      b = b.parent;
  }
  if (notChained(b)) return 0;
  var r = 1;
  while (b !== null) {
      b = b.parent;
      if ((b !== null) && notChained(b)) {
           b = b.parent;
      }
      if (notChained(b) || (r > 100)) break;
      r = r * 2;
  }
  return r;
}

var getFinalBonus = function(design, board, num) {
  var opened = 0; var closed = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type >= 10)) {
           if (piece.type % 2 == 1) {
               opened++;
           } else {
               closed++;
           }
      }
  });
  if ((opened == 2) && (closed == 0)) {
      return num * 8;
  }
  return 0;
}

var getBoardSign = function(design, board) {
  var r = null;
  _.each(design.allPositions(), function(pos) {
      if (r !== null) return;
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type >= 10) && (piece.type % 2 == 1)) {
          r = { rank: piece.type };
          if (!Dagaz.Model.easy) {
              if (piece.player == 5) {
                  r.color = 0;
              } else {
                  r.color = piece.player;
                  if (r.color > 2) {
                      r.color -= 2;
                  }
              }
          }
      }
  });
  return r;
}

var getBonusFactor = function(design, board) {
  x = getBoardSign(design, board);
  if (x === null) return 1;
  var y = null;
  var b = board.parent;
  while (b !== null) {
      if (!_.isUndefined(b.move) && (b.move.mode > 0) && (b.parent !== null)) {
          y = getBoardSign(design, b.parent);
          break;
      }
      b = b.parent;
  }
  if (y === null) return 1;
  var r = 1;
  if ((x.rank == 11) || (y.rank == 11) || (Math.abs(x.rank - y.rank) < 2)) {
      r = r * 2;
  }
  if ((!Dagaz.Model.easy) && (x.color != y.color)) {
      r = r * 2;
  }
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var num = getNum(board, 0, 2);
  var score = getNum(board, 3, 6);
  _.each(board.moves, function(move) {
      if (move.mode != 1) {
          if (num == 0) {
              move.failed = true;
              return;
          }
          setNum(board, 0, 2, num - 1, move);
      }
      if (move.mode > 0) {
          var v = getBonusFactor(design, board);
          v += getChainBonus(board);
          v += getFinalBonus(design, board, num);
          if (!Dagaz.Model.easy) {
              v = v * 2;
          }
          setNum(board, 3, 6, score + v, move);
      }
  });
}

})();
