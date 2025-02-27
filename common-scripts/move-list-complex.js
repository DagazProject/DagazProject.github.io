(function() {

function MoveList(board) {
  this.board = board;
  this.moves = board.moves;
  this.src   = null;
  this.dst   = null;
  this.tile  = null;
  this.ix    = 0;
}

Dagaz.Model.getMoveList = function(board) {
  board.generate();
  return new MoveList(board);
}

MoveList.prototype.isComplex = function() {
  return this.tile !== null;
}

MoveList.prototype.isEmpty = function() {
  return this.moves.length == 0;
}

function isDropMove(m) {
  for (var j = 0; j < m.actions.length; j++) {
      var a = m.actions[j];
      if ((a[0] === null) && (a[1] !== null)) return true;
  }
  return false;
}

MoveList.prototype.dropsPresent = function() {
  for (var i = 0; i < this.moves.length; i++) {
       if (isDropMove(this.moves[i])) return true;
  }
  return false;
}

function getTile(move, pos) {
  for (var i = 0; i < move.actions.length; i++) {
       var a = move.actions[i];
       if ((a[0] === null) && (a[1] !== null) && (a[1][0] == pos) && (a[2] !== null)) {
           return a[2][0].getValue(0);
       }
  }
  return null;
}

Dagaz.Model.notValidMove = function(move, pos) {
  return false;
}

MoveList.prototype.getMoves = function() {
  if (this.src !== null) {
      if (_.isUndefined(this.list)) {
          this.list = [];
          _.each(this.moves, function(move) {
              if (this.isComplex()) {
                  if (Dagaz.Model.notValidMove(move, this.src)) return;             
                  if ((this.dst !== null) && (this.tile !== null)) {
                      var tile = getTile(move, this.dst);
                      if ((tile === null) || (tile != this.tile)) return;
                  }
              } else {
                  if (move.actions.length != 1) return;
                  if (move.actions[0][0] === null) return;
                  if (move.actions[0][1] === null) return;
                  if ((this.src !== null) && (move.actions[0][0][0] != this.src)) return;
                  if ((this.dst !== null) && (move.actions[0][1][0] != this.dst)) return;
              }
              this.list.push(move);
          }, this);
      }
      return this.list;
  }
  return this.moves;
}

MoveList.prototype.getDrops = function() {
  if (_.isUndefined(this.drops)) {
      var r = [];
      _.each(this.moves, function(move) {
          if (!isDropMove(move)) return;
          _.each(move.actions, function(a) {
              if (a[0] !== null) return;
              if (a[1] === null) return;
              r.push(a[1][0]);
          });
      });
      this.drops = _.uniq(r);
  }
  return this.drops;
}

MoveList.prototype.getStarts = function() {
  if (_.isUndefined(this.starts)) {
      var r = [];
      if (this.dropsPresent()) {
          r = Dagaz.Model.getTiles(this.board);
      }
      _.each(this.moves, function(move) {
          if (isDropMove(move)) return;
          var pos = null;
          _.each(move.actions, function(a) {
              if (pos !== null) return;
              if (a[0] !== null) {
                  pos = +a[0][0];
              }
          });
          if (pos !== null) r.push(pos);
      });
      this.starts = _.uniq(r);
  }
  return this.starts;
}

MoveList.prototype.getTargets = function() {
  if (_.isUndefined(this.stops)) {
      var r = [];
      if (this.src !== null) {
          var moves = this.getMoves();
          if (this.isComplex()) {
              if (moves.length == 1) {
                 _.each(moves[0].actions, function(a) {
                     if (a[0] !== null) return;
                     if (a[1] === null) return;
                     r.push(+a[1][0]);
                 });
              }
          } else {
             _.each(moves, function(move) {
                 if (isDropMove(move)) return;
                 var pos = null;
                 _.each(move.actions, function(a) {
                     if (pos !== null) return;
                     if (a[0] === null) return;
                     if (a[1] === null) return;
                     pos = +a[1][0];
                 });
                 if (pos !== null) r.push(pos);
             });
          }
      }
      this.stops = _.uniq(r);
  }
  return this.stops;
}

MoveList.prototype.clear = function() {
  delete this.list;
  delete this.drops;
  delete this.starts;
  delete this.stops;
}

MoveList.prototype.solve = function(pos) {
  var positions = Dagaz.Model.getTiles(this.board, pos);
  var tiles = _.map(positions, function(p) {
      return this.board.getPiece(p).getValue(0);
  }, this);
  this.clear();
  if (this.getMoves().length == 0) {
      _.each(tiles, function(t) {
         if (this.getMoves().length > 0) return;
         this.tile = t;
         this.clear();
      }, this);
  }
}

MoveList.prototype.setPosition = function(pos) {
  // End Move or Drop
  if ((this.src !== null) && (this.isComplex() || (_.indexOf(this.getTargets(), +pos) >= 0))) {
      this.dst = +pos;
      if (this.isComplex()) {
          this.solve(pos);
      } else {
          this.clear();
      }
      return;
  }
  if (!this.isComplex()) {
      // Start drop
      if (_.indexOf(Dagaz.Model.getTiles(this.board, pos), +pos) >= 0) {
          this.src = +pos;
          this.dst = +pos;
          this.tile = this.board.getPiece(pos).getValue(0);
          this.solve(pos);
          return;
      }
      // Start move
      if (_.indexOf(this.getStarts(), +pos) >= 0) {
          if (this.src == pos) {
              this.src = null;
          } else {
              this.src = +pos;
          }
          this.dst = null;
          this.clear();
          return;
      }
  }
}

})();
