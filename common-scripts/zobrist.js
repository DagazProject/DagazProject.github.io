(function() {

getRandomByte = function() {
  return _.random(0, 255);
}

function ZobristHash() {
  this.lh = []; this.hh = [];
  this.lp = []; this.hp = [];
}

ZobristHash.prototype.getRandomValue = function() {
  var r = getRandomByte();
  for (var i = 0; i < 3; i++) {
      r = r << 8;
      r = r | getRandomByte();
  }
  return r;
}

ZobristHash.prototype.update = function(value, player, piece, pos) {
  if (_.isUndefined(this.lh[piece])) {
      this.lh[piece] = [];
  }
  if (_.isUndefined(this.lh[piece][player])) {
      this.lh[piece][player] = [];
  }
  if (_.isUndefined(this.lh[piece][player][pos])) {
      this.lh[piece][player][pos] = this.getRandomValue();
  }
  return value ^ this.lh[piece][player][pos];
}

ZobristHash.prototype.hpdate = function(value, player, piece, pos) {
  if (_.isUndefined(this.hh[piece])) {
      this.hh[piece] = [];
  }
  if (_.isUndefined(this.hh[piece][player])) {
      this.hh[piece][player] = [];
  }
  if (_.isUndefined(this.hh[piece][player][pos])) {
      this.hh[piece][player][pos] = this.getRandomValue();
  }
  return value ^ this.hh[piece][player][pos];
}

ZobristHash.prototype.zplayer = function(value, player) {
  if (_.isUndefined(this.lp[player])) {
      this.lp[player] = this.getRandomValue();
  }
  return value ^ this.lp[player];
}
 
ZobristHash.prototype.hplayer = function(value, player) {
  if (_.isUndefined(this.hp[player])) {
      this.hp[player] = this.getRandomValue();
  }
  return value ^ this.hp[player];
}
 
Dagaz.Model.getZobristHash = function() {
  if (_.isUndefined(Dagaz.Model.zobrist)) {
      Dagaz.Model.zobrist = new ZobristHash();
  }
  return Dagaz.Model.zobrist;
}

Dagaz.Model.getPieceType = function(piece) {
  return piece.type;
}

Dagaz.Model.zupdate = function(value, piece, pos) {
  var z = Dagaz.Model.getZobristHash();
  return z.update(value, piece.player, Dagaz.Model.getPieceType(piece), pos);
}

Dagaz.Model.hupdate = function(value, piece, pos) {
  var z = Dagaz.Model.getZobristHash();
  return z.hpdate(value, piece.player, Dagaz.Model.getPieceType(piece), pos);
}

Dagaz.Model.zplayer = function(value, player) {
  var z = Dagaz.Model.getZobristHash();
  return z.zplayer(value, player);
}

Dagaz.Model.hplayer = function(value, player) {
  var z = Dagaz.Model.getZobristHash();
  return z.hplayer(value, player);
}

})();
