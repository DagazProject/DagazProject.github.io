(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ttc-extension") {
      checkVersion(design, name, value);
  }
}

var getRank = function(piece) {
  var t = +piece.type;
  if (t >= 6) {
      t -= 6;
  }
  return t + 1;
}

var setRank = function(piece, rank) {
  return piece.promote(rank - 1);
}

var getShadow = function(piece) {
  var v = piece.getValue(0);
  if (v === null) return null;
  var t = v % 10;
  var p = ((v / 10) | 0) + 1;
  return Dagaz.Model.createPiece(t, p);
}

var dropShadow = function(piece) {
  piece = piece.setValue(0, null);
  if (piece.type >= 6) {
      piece = piece.promote(piece.type - 6);
  }
  return piece;
}

var setShadow = function(piece, shadow) {
  if (shadow === null) {
      return dropShadow(piece);
  }
  if (piece.type < 6) {
      piece = piece.promote(+piece.type + 6);
  }
  var t = +shadow.type;
  if (t >= 6) {
      t -= 6;
  }
  piece = piece.setValue(0, ((shadow.player - 1) * 10) + t);
  return piece;
}

var splitPiece = function(design, pos, piece, move) {
  var shadow = getShadow(piece);
  if ((shadow === null) || (shadow.player != piece.player)) return piece;
  move.dropPiece(pos, shadow);
  return dropShadow(piece);
}

var toReserve = function(design, board, piece, move, res) {
  var p = design.navigate(piece.player, 0, 9);
  while (p !== null) {
      if ((_.indexOf(res, p) < 0) && (board.getPiece(p) === null)) {
          move.dropPiece(p, piece);
          res.push(p);
          return true;
      }
      p = design.navigate(piece.player, p, 9);
  }
  return false;
}

var combinePiece = function(design, board, pos, piece, target, move) {
  var res = [];
  var shadow = getShadow(target);
  if ((shadow !== null) && (shadow.player != board.player)) {
      if (!toReserve(design, board, shadow, move, res)) move.failed = true;
      shadow = null;
  }
  target = dropShadow(target);
  if (target.type == 5) {
      if (target.player == board.player) move.failed = true;
      target = target.changeOwner(board.player);
      if (!toReserve(design, board, target, move, res)) move.failed = true;
      return piece;
  }
  if (shadow !== null) {
      if (target.player != board.player) {
          target = target.changeOwner(board.player);
          if (!toReserve(design, board, target, move, res)) move.failed = true;
          return setShadow(piece, shadow);
      }
  } else {
      if (piece.getValue(0) !== null) {
          shadow = target;
          target = getShadow(piece);
          piece = dropShadow(piece);
      }
  }
  if ((shadow !== null) && (target.player == board.player)) {
      var a = getRank(target) + getRank(shadow); 
      if (a >= 6) {
          if (a > 6) {
              shadow = setRank(shadow, a - 6);
              if (!toReserve(design, board, shadow, move, res)) move.failed = true;
          }
          target = setRank(target, 6);
          if (!toReserve(design, board, piece, move, res)) move.failed = true;
          piece = target;
          target = null;
      } else {
          shadow = null;
          target = setRank(target, a);
      }
  }
  return setShadow(piece, target);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode == 0) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if (piece === null) return;
          piece = splitPiece(design, pos, piece, move);
          pos = move.actions[0][1][0];
          var target = board.getPiece(pos);
          if (target !== null) {
              if ((target.type >= 6) && (piece.type >= 6)) {
                  move.failed = true;
                  return;
              }
              piece = combinePiece(design, board, pos, piece, target, move);
          }      
          move.actions[0][2] = [piece];
      }
      if (move.mode == 1) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if (piece === null) return;
          pos = move.actions[0][1][0];
          var target = board.getPiece(pos);
          if ((target === null) || (target.type >= 6)) {
              move.failed = true;
              return;
          }
          move.actions[0][2] = [setShadow(target, piece)];
      }
      if (move.mode == 2) {
          if (move.actions[0][0][0] == move.actions[0][1][0]) {
              move.failed = true;
              return;
          }
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if (piece === null) return;
          var shadow = getShadow(piece);
          if (shadow !== null) {
              move.dropPiece(pos, shadow);
          }
          pos = move.actions[0][1][0];
          piece = board.getPiece(pos);
          if ((piece === null) || (piece.type == 5) || (piece.type == 11)) {
              move.failed = true;
              return;
          }
          shadow = getShadow(piece);
          piece = dropShadow(piece);
          if (piece.player == board.player) {
              piece = piece.promote(+piece.type + 1);
          } else {
              if (piece.type == 0) {
                  piece = shadow;
                  shadow = null;
              } else {
                  piece = piece.promote(piece.type - 1);
              }
          }
          if (piece !== null) {
              move.actions[0][2] = [setShadow(piece, shadow)];
          } else {
              move.capturePiece(pos);
          }
      }
  });
  CheckInvariants(board);
}

})();
