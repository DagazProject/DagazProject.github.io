(function() {

function MoveList(board) {
  this.board = board;
}

Dagaz.Model.getMoveList = function(board) {
  board.generate();
  return new MoveList(board);
}

MoveList.prototype.getPosition = function() {
  if (_.isUndefined(this.position)) return null;
  return this.position;
}

MoveList.prototype.isPassForced = function() {
  return false;
}

MoveList.prototype.getMoves = function() {
  if (_.isUndefined(this.moves)) {
      this.moves = [];
      _.each(this.board.moves, function(move) {
           if (!_.isUndefined(move.failed)) return;
           var r = true;           
           if (!_.isUndefined(this.blink)) {
               r = false;
               _.each(move.actions, function(a) {
                   if ((a[0] !== null) && (a[1] !== null)) { 
                       if (_.indexOf(this.blink, a[0][0]) >= 0) r = true;
                   }
               }, this);
           }
           if (r) {
               this.moves.push(move);
           }
      }, this);
  }
  return this.moves;
}

MoveList.prototype.isEmpty = function() {
  return this.getMoves().length == 0;
}

MoveList.prototype.isDone = function() {
  return this.getMoves().length == 1;
}

MoveList.prototype.canPass = function() {
  return false;
}

MoveList.prototype.getTargets = function() {
  return [];
}

MoveList.prototype.getCaptures = function() {
  return [];
}

MoveList.prototype.getDrops = function() {
  return [];
}

MoveList.prototype.getDropPieces = function(pos) {
  return null;
}

MoveList.prototype.getCurrent = function() {
  if (_.isUndefined(this.blink)) return [];
      else return this.blink;
}

MoveList.prototype.getStarts = function() {
  if (_.isUndefined(this.starts)) {
      this.starts = [];
      _.each(this.board.moves, function(move) {
          if (!_.isUndefined(move.failed)) return;
          _.each(move.actions, function(a) {
              if ((a[0] !== null) && (a[1] !== null)) {
                  this.starts.push(a[0][0]);
              }
          }, this);
      }, this);
  }
  return this.starts;
}

Dagaz.Model.closure = function(board, move, group) {
  var r = [];
  _.each(group, function(pos) {
      r.push(pos);
  });
  for (var i = 0; i < r.length; i++) {
      var pos = r[i];
      _.each(move.actions, function(a) {
          if ((a[0] !== null) && (a[1] !== null) && (a[0][0] == pos)) {
              var p = a[1][0];
              var piece = board.getPiece(p);
              if ((piece !== null) && (piece.player == board.player) && 
                  (_.indexOf(r, p) < 0)) {
                  r.push(p);
              }
          }
      });
  }
  return r;
}

MoveList.prototype.isBlinked = function(move, isStrong) {
  var r = false;
  if (!_.isUndefined(this.blink)) {
       var starts = [];
       _.each(move.actions, function(a) {
            if ((a[0] !== null) && (a[1] !== null)) {
                var pos = a[0][0];
                var piece = this.board.getPiece(pos);
                if ((piece !== null) && (piece.player == this.board.player)) {
                    starts.push(pos);
                }
            }
       }, this);
       var blink = Dagaz.Model.closure(this.board, move, this.blink);
       if (!isStrong || (blink.length == starts.length)) {
           if (_.intersection(blink, starts).length == blink.length) {
               r = true;
           }
       }
  }
  return r;
}

MoveList.prototype.getStops = function() {
  if (_.isUndefined(this.stops)) {
      this.stops = [];
      if (!_.isUndefined(this.position)) {
          _.each(this.getMoves(), function(move) {
              if (!this.isBlinked(move, true)) return;
              _.each(move.actions, function(a) {
                  if ((a[0] !== null) && (a[1] !== null)) {
                      if (a[0][0] != this.position) return;
                      this.stops.push(a[1][0]);
                  }
              }, this);
          }, this);
      }
  }
  return this.stops;
}

Dagaz.Model.blinkFailed = function(self) {
  var r = true;
  var moves = [];
  _.each(self.getMoves(), function(move) {
      if (self.isBlinked(move, false)) {
          r = false;
          moves.push(move);
      }
  }, self);
  return r;
}

MoveList.prototype.filterDrops = function(moves, ix) {
  return moves;
}

MoveList.prototype.markPosition = function(pos) {
  if (_.indexOf(this.getStarts(), pos) >= 0) {
      if (_.indexOf(this.blink, pos) >= 0) {
          delete this.position;
          delete this.blink;         
      } else {
          if (_.isUndefined(this.blink)) {
              this.blink = [];
          }
          this.blink.push(pos);
          if (Dagaz.Model.blinkFailed(this)) {
              this.blink = [ pos ];    
          }
          this.position = pos;
      }
      delete this.moves;
      delete this.stops;
  }
}

MoveList.prototype.setPosition = function(pos) {
  var result = null;
  if ((_.indexOf(this.getStops(), pos) >= 0) && !_.isUndefined(this.position)) {
      _.each(this.getMoves(), function(move) {
         if (!this.isBlinked(move, true)) return;
         _.each(move.actions, function(a) {
            if ((a[0] !== null) && (a[1] !== null)) {
                if ((a[0][0] == this.position) && (a[1][0] == pos)) {
                    result = move;
                }
            }
         }, this);
      }, this);
      if (result !== null) {
          this.moves  = [ result ];
          this.starts = [];
          delete this.position;
          delete this.blink;
          delete this.stops;
      }
  } else {
      this.markPosition(pos);
  }
  if (result === null) {
      result = Dagaz.Model.createMove();
  }
  return result;
}

})();
