(function() {

games = {
  model: {
    passTurn: false,
    passPartial: false,
    sharedPieces: false,
    deferredCaptures: false
  },
  view:  []
};

function TMove(mode) {
  this.actions = [];
  this.mode    = mode;
}

TMove.prototype.copy = function() {
  var r = new TMove(this.mode);
  _.each(this.actions, function(a) {
      r.actions.push(a);
  });
  return r;
}

TMove.prototype.clone = function(part) {
  var r = new TMove(this.mode);
  _.each(this.actions, function(a) {
      if ((a[0] !== null) && (a[1] !== null) && (a[3] == part)) return;
      r.actions.push(a);
  });
  return r;
}

TMove.prototype.toString = function(design) {
  var r = ""; var p = null;
  for (var i = 0; i < this.actions.length; i++) {
       var a = this.actions[i];
       if ((a[0] !== null) && (a[1] !== null)) {
           if ((p === null) || (p != a[0])) {
                if (r != "") r = r + " ";
                r = r + design.posToString(a[0]);
           }
           r = r + "-" + design.posToString(a[1]);
           p = a[1];
       }
  }
  return r;
}

TMove.prototype.isPass = function() {
  return this.actions.length == 0;
}

TMove.prototype.isDropMove = function() {
  if (this.actions.length != 1) return false;
  return (this.actions[0][0] === null) && (this.actions[0][1] !== null) && (this.actions[0][2] !== null);
}

TMove.prototype.isSimpleMove = function() {
  if (this.actions.length != 1) return false;
  return (this.actions[0][0] !== null) && (this.actions[0][1] !== null);
}

TMove.prototype.movePiece = function(from, to, piece, part) {
  if (_.isUndefined(part)) part = 1;
  this.actions.push([from, to, piece, part]);
}

TMove.prototype.capturePiece = function(from, part) {
  if (_.isUndefined(part)) part = 1;
  this.actions.push([from, null, null, part]);
}

TMove.prototype.dropPiece = function(to, piece, part) {
  if (_.isUndefined(part)) part = 1;
  this.actions.push([null, to, piece, part]);
}

TMove.prototype.applyTo = function(obj) {
  _.each(this.actions, function(a) {
      if (a[0] !== null) {
          obj.setPiece(a[0], null);
      }
      if ((a[1] !== null) && (a[2] !== null)) {
          obj.setPiece(a[1], a[2]);
      }
      if ((a[0] !== null) && (a[1] !== null) && !_.isUndefined(obj.setLastFrom)) {
          obj.setLastFrom(a[0]);
      }
  });
}

function TMoveContext(design, board, pos, piece) {
  this.design  = design;
  this.board   = board;
  this.from    = pos;
  this.pos     = pos;
  this.mode    = null;
  this.parent  = null;
  this.part    = 1;
  this.piece   = piece;
  this.move    = new TMove(this.mode);
  this.succeed = false;
  this.changes = [];
  this.marks   = [];
}

TMoveContext.prototype.copy = function() {
  var r = new TMoveContext(this.design, this.board, this.pos, this.piece);
  r.parent = this;
  r.part   = this.part + 1;
  r.move   = this.move.copy();
  r.mode   = this.mode;
  return r;
}

TMoveContext.prototype.setPiece = function(pos, piece) {
  this.changes.push({
     p: pos,
     x: piece
  });
}

TMoveContext.prototype.getPiece = function(pos) {
  for (var i = 0; i < this.changes.length; i++) {
      if (this.changes[i].p == pos) return this.changes[i].x;
  }
  if (this.parent !== null) {
      return this.parent.getPiece(pos);
  }
  return this.board.getPiece(pos);
}

TMoveContext.prototype.mark = function() {
  this.marks.push(this.pos);
}

TMoveContext.prototype.back = function() {
  if (this.marks.length > 0) {
      this.pos = this.marks[this.marks.length - 1];
  }
}

TMoveContext.prototype.pop = function() {
  if (this.marks.length > 0) {
      this.pos = this.marks.pop();
  }
}

TMoveContext.prototype.take = function() {
  this.hand = {
     start: this.pos,
     piece: this.board.getPiece(this.pos)
  };
}

TMoveContext.prototype.put = function() {
  if (!_.isUndefined(this.hand)) {
      this.piece = this.hand.piece;
      this.move.movePiece(this.hand.start, this.pos, this.hand.piece, this.part);
      delete this.hand;
      this.succeed = true;
  }
}

TMoveContext.prototype.getParam = function(params, ix) {
  if (_.isUndefined(params)) return null;
  if (_.isArray(params)) return params[ix];
  return params;
}

TMoveContext.prototype.go = function(params, ix) {
  var dir = this.getParam(params, ix);
  if (dir === null) return false;
  var player = this.board.player;
  if (!_.isUndefined(this.hand)) {
      player = this.hand.piece.player;
  }
  var p = this.design.navigate(player, this.pos, dir);
  if (p === null) return false;
  this.pos = p;
  return true;
}

TMoveContext.prototype.opposite = function(params, ix) {
  var dir = this.getParam(params, ix);
  if (dir === null) return null;
  return this.design.opposite(dir);
}

TMoveContext.prototype.isLastFrom = function(params, ix) {
  var pos = this.getParam(params, ix);
  if (pos === null) {
      pos = this.pos;
  }
  if ((this.parent !== null) && (this.parent.parent !== null)) {
      if (pos == this.parent.parent.from) return true;
  }
  return this.board.isLastFrom(pos);
}

TMoveContext.prototype.isEmpty = function() {
  if (games.model.deferredCaptures) {
      for (var i = 0; i < this.move.actions.length; i++) {
           var a = this.move.actions[i];
           if ((a[0] !== null) && (a[1] === null) && (a[0] == this.pos)) return false;
      }
  }
  return this.getPiece(this.pos) === null;
}

TMoveContext.prototype.isEnemy = function() {
  var piece = this.getPiece(this.pos);
  if (piece === null) return false;
  return piece.player != this.board.player;
}

TMoveContext.prototype.isFriend = function() {
  var piece = this.getPiece(this.pos);
  if (piece === null) return false;
  return piece.player == this.board.player;
}

TMoveContext.prototype.isPiece = function(params, ix) {
  var t = this.getParam(params, ix);
  if (t === null) {
      return !this.isEmpty();
  }
  var piece = this.getPiece(this.pos);
  if (piece === null) return false;
  return piece.type == t;
}

TMoveContext.prototype.inZone = function(params, ix) {
  var zone = this.getParam(params, ix);
  if (zone === null) return null;
  var player = this.board.player;
  if (!_.isUndefined(this.hand)) {
      player = this.hand.piece.player;
  }
  return this.design.inZone(player, this.pos, zone);
}

TMoveContext.prototype.promote = function(params, ix) {
  if (_.isUndefined(this.hand)) return false;
  var type = this.getParam(params, ix);
  if (type === null) return false;
  this.hand.piece = this.hand.piece.promote(type);
  return true;
}

TMoveContext.prototype.capture = function() {
  this.setPiece(this.pos, null);
  this.move.capturePiece(this.pos, this.part);
}

TMoveContext.prototype.end = function(params, ix) {
  var hand = this.hand;
  this.put();
  this.mode = this.getParam(params, ix);
  if (this.succeed) {
      if (this.mode !== null) {
          var ctx = this.copy();
          this.board.forks.push(ctx);
      } else {
          this.board.moves.push(this.move);
      }
  }
  this.move = this.move.clone(this.part);
  this.hand = hand;
}

function TPiece(type, player) {
  this.type   = type;
  this.player = player;
}

TPiece.prototype.toString = function(design) {
  return design.playerNames[this.player] + " " + design.pieceNames[this.type];
}

TPiece.prototype.getValue = function(ix) {
  if (_.isUndefined(this.values)) return null;
  if (_.isUndefined(this.values[ix])) return null;
  return this.values[ix];
}

TPiece.prototype.setValue = function(ix, value) {
  var v = this.getValue(ix);
  if ((v === null) && (value === null)) return this;
  if ((v !== null) && (value !== null) && (v == value)) return this;
  var r = new TPiece(this.type, this.player);
  if (_.isUndefined(r.values)) {
      r.values = [];
  }
  if (!_.isUndefined(this.values)) {
      _.each(_.keys(this.values), function(i) {
          r.values[i] = this.values[i];
      }, this);
  }
  if (value !== null) {
      r.values[ix] = value;
  } else {
      delete r.values[ix];
  }
  return r;
}

TPiece.prototype.promote = function(type) {
  if (type == this.type) return this;
  return new TPiece(type, this.player);
}

TPiece.prototype.changeOwner = function(player) {
  if (player == this.player) return this;
  return new TPiece(this.type, player);
}

function TBoard(design) {
  this.design = design;
  this.pieces = [];
  this.turn   = 0;
  this.player = design.currPlayer(this.turn);
  this.z      = 0;
}

TBoard.prototype.copy = function() {
  var r = new TBoard(this.design);
  r.parent = this;
  r.turn   = this.turn;
  r.player = this.player;
  _.each(_.keys(this.pieces), function(pos) {
      r.pieces[pos] = this.pieces[pos];
  }, this);
  r.z = this.z;
  return r;
}

TBoard.prototype.clear = function() {
  this.pieces = [];
  this.z = 0;
  delete this.moves;
}

TBoard.prototype.setLastFrom = function(pos) {
  this.lastFrom = pos; 
}

TBoard.prototype.isLastFrom = function(pos) {
  if (!_.isUndefined(this.lastFrom)) {
       return this.lastFrom == pos;
  }
  return false;
}

TBoard.prototype.getPiece = function(pos) {
  if (_.isUndefined(this.pieces[pos])) {
      return null;
  } else {
      return this.pieces[pos];
  }
}

TBoard.prototype.setPiece = function(pos, piece) {
  if (!_.isUndefined(games.model.zupdate) && !_.isUndefined(this.pieces[pos])) {
      this.z = games.model.zupdate(this.z, this.pieces[pos], pos);
  }
  if (piece === null) {
     delete this.pieces[pos];
  } else {
     this.pieces[pos] = piece;
     if (!_.isUndefined(games.model.zupdate)) {
         this.z = games.model.zupdate(this.z, piece, pos);
     }
  }
}

TBoard.prototype.completeMove = function(parent) {
  var r = false;
  _.each(this.design.moves, function(t) {
      if (t.t != parent.piece.type) return;
      if (t.m != parent.mode) return;
      var ctx = parent.copy();
      ctx.hand = {
          start: parent.pos,
          piece: parent.piece
      };
      ctx.mode = null;
      t.f(ctx, t.p);
      if (ctx.succeed) {
          r = true;
      }
  }, this);
  return r;
}

TBoard.prototype.generate = function() {
  if (_.isUndefined(this.moves)) {
      this.forks = [];
      this.moves = [];
      var groups = _.groupBy(this.design.moves, function(t) {
          if (this.design.modes.length == 0) return 0;
          return _.indexOf(this.design.modes, t.m);
      }, this);
      var cnt = this.design.modes.length;
      if (cnt == 0) cnt = 1;
      for (var i = 0; i < cnt; i++) {
           var completed = false;
           _.each(this.design.allPositions(), function(pos) {
               var piece = this.getPiece(pos);
               if (piece === null) return;
               if (!games.model.sharedPieces && (piece.player != this.player)) return;
               _.each(groups[i], function(t) {
                  if (t.t != piece.type) return;
                  var ctx = new TMoveContext(this.design, this, pos, piece);
                  ctx.move.mode = t.m;
                  ctx.take(); ctx.setPiece(pos, null);
                  t.f(ctx, t.p);
                  if (ctx.succeed) {
                      completed = true;
                  }
               }, this);
           }, this);
           if (completed) break;
      }
      for (var i = 0; i < this.forks.length; i++) {
           var ctx = this.forks[i];
           var f = true;
           if (this.completeMove(ctx)) f = false;
           if (games.model.passPartial || f) {
               this.moves.push(ctx.move);
           }
      }
      delete this.forks;
      if (!_.isUndefined(games.model.extension)) {
           games.model.extension(this);
      }
      if (games.model.passTurn && (this.moves.length == 0)) {
          this.moves.push(new TMove(0));
      }
  }
}

TBoard.prototype.apply = function(move) {
  var r = this.copy();
  r.turn = r.design.nextTurn(this);
  r.player = r.design.currPlayer(r.turn);
  move.applyTo(r);
  r.move = move;
  return r;
}

function TDesign() {
  this.dirs          = [];
  this.players       = [];
  this.playerNames   = [];
  this.positions     = [];
  this.positionNames = [];
  this.modes         = [];
  this.zones         = [];
  this.zoneNames     = [];
  this.pieceNames    = [];
  this.price         = [];
  this.moves         = [];
  this.initial       = [];
}

games.model.getDesign = function() {
  if (_.isUndefined(games.model.design)) {
      games.model.design = new TDesign();
  }
  return games.model.design;
}

TDesign.prototype.createPiece = function(type, player) {
  return new TPiece(type, player);
}

TDesign.prototype.checkVersion = function(name, value) {
  if (name == "pass-turn") {
      games.model.passTurn = (value == "true");
  }
  if (name == "pass-partial") {
      games.model.passPartial = (value == "true");
  }
  if (name == "shared-pieces") {
      games.model.sharedPieces = (value == "true");
  }
  if (name == "deferred-captures") {
      games.model.deferredCaptures = (value == "true");
  }
}

TDesign.prototype.posToString = function(pos) {
   if (_.isUndefined(this.positionNames[pos])) return "?";
   return this.positionNames[pos];
}

TDesign.prototype.stringToPos = function(name) {
   var pos = _.indexOf(this.positionNames, name);
   if (pos < 0) return null;
   return pos;
}

TDesign.prototype.addDirection = function(name) {
  this.dirs.push(name);
}

TDesign.prototype.addPlayer = function(name, symmetry) {
  var ix = this.playerNames.length;
  if (this.playerNames.length == 0) {
      this.playerNames.push("opposite");
  }
  this.players[ix] = symmetry;
  this.playerNames.push(name);
}

TDesign.prototype.addTurn = function(player, modes) {
  if (_.isUndefined(this.turns)) {
      this.turns = [];
  }
  if (!_.isUndefined(modes) && !_.isArray(modes)) {
      modes = [modes];
  }
  this.turns.push({
      p: player,
      m: modes
  });
}

TDesign.prototype.repeatMark = function() {
  if (_.isUndefined(this.turns)) {
      this.turns = [];
  }
  this.repeat = this.turns.length;
}

TDesign.prototype.addPosition = function(name, dirs) {
  if ((this.positions.length == 0) && (name != "start")) {
       this.positionNames.push("start");
       this.positions.push(_.map(_.range(dirs.length), function(n) {return 0;}));
  }
  this.positionNames.push(name);
  this.positions.push(dirs);
}

TDesign.prototype.addZone = function(name, player, positions) {
  var zone = _.indexOf(this.zoneNames, name);
  if (zone < 0) {
      zone = this.zoneNames.length;
      this.zoneNames.push(name);
  }
  if (_.isUndefined(this.zones[zone])) {
      this.zones[zone] = [];
  }
  this.zones[zone][player] = _.map(positions, function(name) {
      return this.stringToPos(name);
  }, this);
}

TDesign.prototype.addPriority = function(mode) {
  this.modes.push(mode);
}

TDesign.prototype.addPiece = function(name, type, price) {
  this.pieceNames[type] = name;
  this.price[type] = price ? price : 1;
}

TDesign.prototype.getPieceType = function(name) {
  var r = _.indexOf(this.pieceNames, name);
  if (r < 0) return null;
  return r;
}

TDesign.prototype.addMove = function(type, fun, params, mode, sound) {
  this.moves.push({
      t: type,
      f: fun,
      p: params,
      s: sound,
      m: mode
  });
}

games.model.BuildDesign = function(design) {}

TDesign.prototype.getInitBoard = function() {
  if (_.isUndefined(this.board)) {
      games.model.BuildDesign(this);
      this.board = new TBoard(this);
      _.each(this.initial, function(s) {
           this.board.setPiece(s.p, s.t);
      }, this);
  }
  return this.board;
}

TDesign.prototype.setup = function(player, type, positions) {
  var t = _.indexOf(this.pieceNames, type);
  var p = _.indexOf(this.playerNames, player);
  if ((t < 0) || (p < 0)) return;
  var piece = new TPiece(t, p);
  if (!_.isArray(positions)) {
      positions = [positions];
  }
  _.chain(positions)
   .map(function(name) {
      return this.stringToPos(name);
    }, this)
   .each(function(pos) {
      this.initial.push({
         p: pos,
         t: piece
      });
    }, this);
}

TDesign.prototype.allDirections = function() {
  return _.range(this.dirs.length);
}

TDesign.prototype.allPlayers = function() {
  return _.range(1, this.playerNames.length);
}

TDesign.prototype.allPositions = function() {
  return _.range(1, this.positions.length);
}

TDesign.prototype.getDirection = function(name) {
  var dir = _.indexOf(this.dirs, name);
  if (dir < 0) {
      return null;
  }
  return dir;
}

TDesign.prototype.navigate = function(player, pos, dir) {
  if (!_.isUndefined(this.players[player])) {
      dir = this.players[player][dir];
  }
  if (this.positions[pos][dir] != 0) {
      return + pos + this.positions[pos][dir];
  } else {
      return null;
  }
}

TDesign.prototype.opposite = function(dir, player) {
  if (_.isUndefined(player)) {
      player = 0;
  }
  return this.players[player][dir];
}

TDesign.prototype.getZone = function(name) {
  var zone = _.indexOf(this.zoneNames, name);
  if (zone < 0) return null;
  return zone;
}

TDesign.prototype.inZone = function(player, pos, zone) {
  if (!_.isUndefined(this.zones[zone])) {
      if (!_.isUndefined(this.zones[zone][player])) {
          return _.indexOf(this.zones[zone][player], pos) >= 0;
      }
  }
  return false;
}

TDesign.prototype.nextPlayer = function(player) {
  if (player + 1 >= this.playerNames.length) {
      return 1;
  } else {
      return player + 1;
  }
}

TDesign.prototype.nextTurn = function(board) {
  var turn = board.turn + 1;
  if (_.isUndefined(this.turns)) {
      if (turn >= this.players.length - 1) {
          turn = 0;
          if (!_.isUndefined(this.repeat)) {
              turn += this.repeat;
          }
      }
  } else {
      if (turn >= this.turns.length) {
          turn = 0;
          if (!_.isUndefined(this.repeat)) {
              turn += this.repeat;
          }
      }
  }
  return turn;
}

TDesign.prototype.currPlayer = function(turn) {
  if (_.isUndefined(this.turns)) {
      return turn + 1;
  } else {
      return this.turns[turn].player;
  }
}

})();
