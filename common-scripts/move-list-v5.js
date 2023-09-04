(function() {

function MoveList(board) {
  this.board    = board;
  this.moves    = board.moves;
  this.move     = null;
  this.position = null;
  this.stops    = null;
}

Dagaz.Model.getMoveList = function(board) {
  board.generate();
  return new MoveList(board);
}

MoveList.prototype.isPassForced = function() {
  return false;
}

MoveList.prototype.isEmpty = function() {
  return this.moves.length == 0;
}

MoveList.prototype.getMoves = function() {
  if (this.move !== null) {
      return [ this.move ];
  }
  return this.moves;
}

MoveList.prototype.isDone = function() {
  return this.move !== null;
}

MoveList.prototype.canPass = function() {
  return false;
}

MoveList.prototype.getTargets = function() {
  return [];
}

MoveList.prototype.getStarts = function() {
  var result = [];
  _.each(this.moves, function(move) {
      if ((move.actions.length > 0) && (move.actions[0][0] === null) && (move.actions[0][1] !== null)) {
          result.push(move.actions[0][1][0]);
      }
  }, this);
  result = _.uniq(_.union(result, this.getCaptures()));
  return result;
}

MoveList.prototype.filterDrops = function(moves, ix) {
  return moves;
}

MoveList.prototype.getStops = function() {
  return this.getStarts();
}

MoveList.prototype.getCaptures = function() {
  return [];
}

MoveList.prototype.getDrops = function() {
  return this.getStarts();
}

MoveList.prototype.getDropPieces = function(pos) {
  var result = [];
  _.each(this.moves, function(move) {
      if ((move.actions.length > 0) && (move.actions[0][0] === null) && (move.actions[0][1] !== null) && (move.actions[0][2] !== null)) {
           result.push(move.actions[0][2][0]);
      }
  });
  return _.sortBy(result, function(piece) {
      return piece.type;
  });
}

MoveList.prototype.setPosition = function(pos) {
  if (this.move !== null) return this.move;
  var result = Dagaz.Model.createMove();
  if (_.indexOf(this.getStops(), pos) >= 0) {
      _.each(this.moves, function(move) {
          if ((move.actions.length > 0) && (move.actions[0][0] === null) && (move.actions[0][1] !== null) && (move.actions[0][1][0] == pos)) {
              result = move;
              this.move = result;
          }
      }, this);
  }
  this.stops = null;
  return result;
}

})();
