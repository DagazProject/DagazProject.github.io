(function() {

Dagaz.AI.MT = function() {
    var N = 624;
    var M = 397;
    var MAG01 = [0x0, 0x9908b0df];
    
    this.mt = new Array(N);
    this.mti = N + 1;

    this.setSeed = function() {
       var a = arguments;
       switch (a.length) {
           case 1: if (a[0].constructor === Number) {
                       this.mt[0]= a[0];
                       for (var i = 1; i < N; ++i) {
                            var s = this.mt[i - 1] ^ (this.mt[i - 1] >>> 30);
                            this.mt[i] = ((1812433253 * ((s & 0xffff0000) >>> 16))
                                                << 16)
                                                + 1812433253 * (s & 0x0000ffff)
                                                + i;
                       }
                       this.mti = N;
                       return;
                   }

                   this.setSeed(19650218);

                   var l = a[0].length;
                   var i = 1;
                   var j = 0;

                   for (var k = N > l ? N : l; k != 0; --k) {
                        var s = this.mt[i - 1] ^ (this.mt[i - 1] >>> 30)
                                this.mt[i] = (this.mt[i]
                                               ^ (((1664525 * ((s & 0xffff0000) >>> 16)) << 16)
                                               + 1664525 * (s & 0x0000ffff)))
                                               + a[0][j]
                                               + j;
                                if (++i >= N) {
                                    this.mt[0] = this.mt[N - 1];
                                    i = 1;
                                }
                                if (++j >= l) {
                                    j = 0;
                                }
                   }

                   for (var k = N - 1; k != 0; --k) {
                        var s = this.mt[i - 1] ^ (this.mt[i - 1] >>> 30);
                                this.mt[i] = (this.mt[i]
                                               ^ (((1566083941 * ((s & 0xffff0000) >>> 16)) << 16)
                                               + 1566083941 * (s & 0x0000ffff)))
                                               - i;
                                if (++i >= N) {
                                    this.mt[0] = this.mt[N-1];
                                    i = 1;
                                }
                   }

                   this.mt[0] = 0x80000000;
                   return;
           default:
                   var seeds = new Array();
                   for (var i = 0; i < a.length; ++i) {
                        seeds.push(a[i]);
                   }
                   this.setSeed(seeds);
                   return;
       }
    }

    this.setSeed(0x1BADF00D);

    this.next = function (bits)	{
       if (this.mti >= N) {
           var x = 0;

           for (var k = 0; k < N - M; ++k) {
                x = (this.mt[k] & 0x80000000) | (this.mt[k + 1] & 0x7fffffff);
                this.mt[k] = this.mt[k + M] ^ (x >>> 1) ^ MAG01[x & 0x1];
           }
           for (var k = N - M; k < N - 1; ++k) {
                x = (this.mt[k] & 0x80000000) | (this.mt[k + 1] & 0x7fffffff);
                this.mt[k] = this.mt[k + (M - N)] ^ (x >>> 1) ^ MAG01[x & 0x1];
           }
           x = (this.mt[N - 1] & 0x80000000) | (this.mt[0] & 0x7fffffff);
           this.mt[N - 1] = this.mt[M - 1] ^ (x >>> 1) ^ MAG01[x & 0x1];

           this.mti = 0;
       }

       var y = this.mt[this.mti++];
       y ^= y >>> 11;
       y ^= (y << 7) & 0x9d2c5680;
       y ^= (y << 15) & 0xefc60000;
       y ^= y >>> 18;
       return (y >>> (32 - bits)) & 0xFFFFFFFF;
   }
}

function ZobristHash() {
   this.mt = new Dagaz.AI.MT(0x1badf00d);
   this.lh = []; this.hh = [];
   this.lp = []; this.hp = [];
}

Dagaz.Model.getZobristHash = function() {
  if (_.isUndefined(Dagaz.Model.zobrist)) {
      Dagaz.Model.zobrist = new ZobristHash();
  }
  return Dagaz.Model.zobrist;
}

ZobristHash.prototype.lpos = function(value, player, type, pos) {
  if (_.isUndefined(this.lh[type])) {
      this.lh[type] = [];
  }
  if (_.isUndefined(this.lh[type][player])) {
      this.lh[type][player] = [];
  }
  if (_.isUndefined(this.lh[type][player][pos])) {
      this.lh[type][player][pos] = this.mt.next(31);
  }
  return value ^ this.lh[type][player][pos];
}

ZobristHash.prototype.hpos = function(value, player, type, pos) {
  if (_.isUndefined(this.hh[type])) {
      this.hh[type] = [];
  }
  if (_.isUndefined(this.hh[type][player])) {
      this.hh[type][player] = [];
  }
  if (_.isUndefined(this.hh[type][player][pos])) {
      this.hh[type][player][pos] = this.mt.next(31);
  }
  return value ^ this.hh[type][player][pos];
}

ZobristHash.prototype.lplayer = function(value, player) {
  if (_.isUndefined(this.lp[player])) {
      this.lp[player] = this.mt.next(31);
  }
  return value ^ this.lp[player];
}

ZobristHash.prototype.hplayer = function(value, player) {
  if (_.isUndefined(this.hp[player])) {
      this.hp[player] = this.mt.next(31);
  }
  return value ^ this.hp[player];
}

Dagaz.Model.getPieceType = function(piece) {
  return piece.type;
}

Dagaz.Model.zupdate = function(value, piece, pos) {
  var z = Dagaz.Model.getZobristHash();
  return z.lpos(value, piece.player, Dagaz.Model.getPieceType(piece), pos);
}

Dagaz.Model.hupdate = function(value, piece, pos) {
  var z = Dagaz.Model.getZobristHash();
  return z.hpos(value, piece.player, Dagaz.Model.getPieceType(piece), pos);
}

Dagaz.Model.zplayer = function(value, player) {
  var z = Dagaz.Model.getZobristHash();
  return z.lplayer(value, player);
}

Dagaz.Model.hplayer = function(value, player) {
  var z = Dagaz.Model.getZobristHash();
  return z.hplayer(value, player);
}

})();
