(function() {

var checkVersion = Dagaz.Model.checkVersion;
var distinctMode = false;
var uniqueMode   = true;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "sliding-puzzle") {
      if (value == "distinct") {
          distinctMode = true;
      }
      if (value == "unique") {
          uniqueMode = true;
      }
      if (value == "all") {
          distinctMode = false;
      }
  } else {
      if (name == "distinct-moves") {
          distinctMode = value == "true";
          return;
      }
      checkVersion(design, name, value);
  }
}

var simpleHeuristic = function(move) {
  return move.actions.length;
}

Dagaz.AI.heuristic = function(board, move) {
  return simpleHeuristic(move);
}

var isEqual = function(a, b) {
  if ((a == 0) || (b == 0)) return false;
  return a == b;
}

var isEmpty = function(board, pos, value) {
  var piece = board.getPiece(pos);
  if (piece === null) return true;
  return isEqual(piece.getValue(0), value);
}

var isSubset = function(x, y) {
  for (var i = 0; i < x.actions.length; i++) {
       var action = x.actions[i];
       if (_.chain(y.actions)
            .filter(function(a) {
                return a[0][0] == action[0][0] &&
                       a[1][0] == action[1][0];
             })
            .size()
            .value() == 0) return false;
  }
  return true;
}

Dagaz.Model.getPieceTypes = function(piece, board) {
  var tag = piece.getValue(0);
  return _.chain(board.pieces)
   .compact()
   .filter(function(piece) {
        return piece.getValue(0) == tag;
    })
   .map(function(piece) {
        return +piece.type;
    })
   .uniq()
   .value();
}

Dagaz.Model.moveToString = function(move) {
  if (move.actions[0]) {
      var action = move.actions[0];
      return Dagaz.Model.posToString(action[0][0]) + "-" + 
             Dagaz.Model.posToString(action[1][0]);
  }
  return "";
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  _.chain(board.moves)
   .filter(function(move) {
       if (move.actions.length != 1) return false;
       var action = move.actions[0];
       if (!action[0]) return false;
       if (!action[1]) return false;
       if (action[0][0] == action[1][0]) return false;
       if (board.getPiece(action[0][0]) === null) return false;
       return true;
    })
   .each(function(move) {
       var design = board.game.design;
       var action = move.actions[0];
       var from   = action[0][0];
       var delta  = action[1][0] - from;
       var piece  = board.getPiece(from);
       var value  = piece.getValue(0);
       if (isEmpty(board, action[1][0], value)) {
       _.chain(_.range(design.positions.length))
        .filter(function(pos) {
            return pos != from;
         })
        .filter(function(pos) {
            if (board.getPiece(pos) === null) return false;
            return isEqual(board.getPiece(pos).getValue(0), value);
         })
        .each(function(pos) {
            var target = pos + delta;
            if ((Dagaz.find(design.positions[pos], delta) < 0) ||
                (target < 0) || 
                (target >= design.positions.length) ||
                !isEmpty(board, target, value)) {
                move.failed = true;
            } else {
                move.movePiece(pos, target, null, 1);
            }
         });
       } else {
            move.failed = true;
       }
    });
  if (distinctMode) {
      var moves = [];
      _.chain(board.moves)
       .filter(function(move) {
            return (_.isUndefined(move.failed));
        })
       .each(function(move) {
           if (_.chain(moves)
            .filter(function(m) {
                return isSubset(m, move) && isSubset(move, m);
             })
            .size()
            .value() == 0) {
                moves.push(move);
           }
        });
      board.moves = moves;
  }
  CheckInvariants(board);
}

Dagaz.View.showHint = function(view) {}

Dagaz.Model.getPieceType = function(piece) {
  if (uniqueMode) {
      return piece.getValue(1);
  } else {
      return +piece.type;
  }
}

})();
