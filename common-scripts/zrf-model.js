(function() {

var Z2J_VERSION = 2;

Dagaz.Model.IGNORE_DROP_LASTT = false;

Dagaz.Model.deferredStrike  = false;
Dagaz.Model.discardCascades = false;
Dagaz.Model.forkMode        = false;
Dagaz.Model.passPartial     = false;
Dagaz.Model.passTurn        = 0;
Dagaz.Model.sharedPieces    = false;
Dagaz.Model.recycleCaptures = false;
Dagaz.Model.smartFrom       = false;
Dagaz.Model.smartTo         = false;
Dagaz.Model.showGoals       = true;
Dagaz.Model.showCaptures    = true;
Dagaz.Model.showMoves       = true;
Dagaz.Model.showHints       = false;
Dagaz.Model.stalemateDraw   = false;
Dagaz.Model.showBlink       = true;
Dagaz.Model.chessCapturing  = true;
Dagaz.Model.progressive     = false;
Dagaz.Model.progressiveUrl  = null;
Dagaz.Model.silent          = false;
Dagaz.Model.showDrops       = -1;
Dagaz.Model.dragNdrop       = true;
Dagaz.Model.detectLoops     = false;
Dagaz.Model.advisorWait     = null;
Dagaz.Model.remapPromote    = false;
Dagaz.Model.passForcedDraw  = true;
Dagaz.Model.animateRedo     = false;
Dagaz.Model.completePartial = false;
Dagaz.Model.zrfCompatible   = false;
Dagaz.Model.showLose        = true;

Dagaz.Model.checkVersion = function(design, name, value) {  
  if (name == "z2j") {
     if (value > Z2J_VERSION) {
         design.failed = true;
     }
  } else {
     if ((name != "zrf")                && 
         (name != "pass-turn")          &&
         (name != "pass-partial")       &&
         (name != "moves-limit")        &&
         (name != "discard-cascades")   &&
         (name != "animate-captures")   &&
         (name != "animate-drops")      &&
         (name != "highlight-goals")    &&
         (name != "prevent-flipping")   &&
         (name != "progressive-levels") &&
         (name != "selection-screen")   &&
         (name != "show-moves-list")    &&
         (name != "show-captures")      &&
         (name != "show-drops")         &&
         (name != "smart-moves")        &&
         (name != "show-hints")         &&
         (name != "stalemate-draw")     &&
         (name != "recycle-captures")   &&
         (name != "shared-pieces")      &&
         (name != "show-blink")         &&
         (name != "drag-n-drop")        &&
         (name != "detect-loops")       &&
         (name != "advisor-wait")       &&
         (name != "promote-dialog")     &&
         (name != "complete-partial")   &&
         (name != "animate-redo")       &&
         (name != "show-lose")          &&
         (name != "silent-?-moves")) {
         design.failed = true;
     }
     if (name == "show-lose") {
         if (value == "false") Dagaz.Model.showLose = false;
     }
     if (name == "complete-partial") {
         if (value == "true") Dagaz.Model.completePartial = true;
     }
     if (name == "animate-redo") {
         if (value == "false") Dagaz.Model.animateRedo = false;
         if (value == "true")  Dagaz.Model.animateRedo = true;
     }
     if (name == "promote-dialog") {
         if (value == "remap") Dagaz.Model.remapPromote = true;
     }
     if (name == "advisor-wait") {
         Dagaz.Model.advisorWait = +value * 1000;
     }
     if (name == "detect-loops") {
         if (value == "true")    Dagaz.Model.detectLoops = true;
     }
     if (name == "drag-n-drop") {
         if (value == "false")   Dagaz.Model.dragNdrop = false;
     }
     if (name == "show-drops") {
         if (!_.isNaN(value))    Dagaz.Model.showDrops = +value;
         if (value == "false")   Dagaz.Model.showDrops = 0;
         if (value == "true")    Dagaz.Model.showDrops = -1;
         if (value == "all")     Dagaz.Model.showDrops = -2;
     }
     if (name == "progressive-levels") {
         Dagaz.Model.progressive = (value == "true");
         if ((value == "selector") && (Dagaz.Model.maxSetupSelector > Dagaz.Model.getSetupSelector())) {
             Dagaz.Model.progressive = true;
         }
         if (value == "silent") {
             Dagaz.Model.progressive = true;
             Dagaz.Model.silent      = true;
         }
         if ((value != "selector") && (value != "silent") && (value != "true")) {
             Dagaz.Model.progressive = true;
             Dagaz.Model.progressiveUrl = value;
         }
     }
     if (name == "show-blink") {
         Dagaz.Model.showBlink = (value == "true");
     }
     if (name == "show-captures") {
         Dagaz.Model.showCaptures = (value == "true");
     }
     if (name == "shared-pieces") {
         Dagaz.Model.sharedPieces = (value == "true");
     }
     if (name == "show-moves-list") {
         Dagaz.Model.showMoves = (value == "true");
     }
     if (name == "highlight-goals") {
         Dagaz.Model.showGoals = (value == "true");
     }
     if (name == "smart-moves") {
         if ((value == "from") || (value == "true")) {
            Dagaz.Model.smartFrom = true;
         }
         if ((value == "to") || (value == "true")) {
            Dagaz.Model.smartTo = true;
         }
     }
     if ((name == "recycle-captures") && (value == "true")) {
         Dagaz.Model.recycleCaptures = true;
     }
     if ((name == "discard-cascades") && (value == "true")) {
         Dagaz.Model.discardCascades = true;
     }
     if ((name == "pass-partial") && (value == "true")) {
         Dagaz.Model.passPartial = true;
     }
     if ((name == "pass-turn") && (value == "true")) {
         Dagaz.Model.passTurn = 1;
     }
     if ((name == "pass-turn") && (value == "forced")) {
         Dagaz.Model.passTurn = 2;
     }
     if (name == "moves-limit") {
         Dagaz.Model.movesLimit = value;
     }
     if ((name == "show-hints") && (value == "false")) {
         Dagaz.Model.showHints = false;
     }
     if ((name == "stalemate-draw") && (value == "true")) {
         Dagaz.Model.stalemateDraw = true;
     }
  }
}

Dagaz.Model.checkOption = function(design, name, value) {
  if (design.options[name] == value) {
      return true;
  }
}

Dagaz.Model.ZRF_JUMP      = 0;
Dagaz.Model.ZRF_IF        = 1;
Dagaz.Model.ZRF_FORK      = 2;
Dagaz.Model.ZRF_FUNCTION  = 3;
Dagaz.Model.ZRF_IN_ZONE   = 4;
Dagaz.Model.ZRF_GET_FLAG  = 5;
Dagaz.Model.ZRF_SET_FLAG  = 6;
Dagaz.Model.ZRF_GET_PFLAG = 7;
Dagaz.Model.ZRF_SET_PFLAG = 8;
Dagaz.Model.ZRF_GET_ATTR  = 9;
Dagaz.Model.ZRF_SET_ATTR  = 10;
Dagaz.Model.ZRF_PROMOTE   = 11;
Dagaz.Model.ZRF_MODE      = 12;
Dagaz.Model.ZRF_ON_BOARDD = 13;
Dagaz.Model.ZRF_ON_BOARDP = 14;
Dagaz.Model.ZRF_PARAM     = 15;
Dagaz.Model.ZRF_LITERAL   = 16;
Dagaz.Model.ZRF_VERIFY    = 20;
Dagaz.Model.ZRF_SET_POS   = 21;
Dagaz.Model.ZRF_NAVIGATE  = 22;
Dagaz.Model.ZRF_OPPOSITE  = 23;
Dagaz.Model.ZRF_FROM      = 24;
Dagaz.Model.ZRF_TO        = 25;
Dagaz.Model.ZRF_CAPTURE   = 26;
Dagaz.Model.ZRF_FLIP      = 27;
Dagaz.Model.ZRF_END       = 28;

Dagaz.Model.ZRF_NOT       = 0;
Dagaz.Model.ZRF_IS_EMPTY  = 1;
Dagaz.Model.ZRF_IS_ENEMY  = 2;
Dagaz.Model.ZRF_IS_FRIEND = 3;
Dagaz.Model.ZRF_IS_LASTF  = 4;
Dagaz.Model.ZRF_IS_LASTT  = 5;
Dagaz.Model.ZRF_MARK      = 6;
Dagaz.Model.ZRF_BACK      = 7;
Dagaz.Model.ZRF_PUSH      = 8;
Dagaz.Model.ZRF_POP       = 9;
Dagaz.Model.ZRF_IS_PIECE  = 10;
Dagaz.Model.ZRF_CREATE    = 11;

Dagaz.Model.commands = {};

Dagaz.Model.commands[Dagaz.Model.ZRF_JUMP] = function(gen, param) {
   return param - 1;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_IF] = function(gen, param) {
   if (gen.stack.length == 0) {
       return null;
   }
   var f = gen.stack.pop();
   if (f) {
      return param - 1;
   } else {
      return 0;
   }
}

Dagaz.Model.commands[Dagaz.Model.ZRF_FORK] = function(gen, param) {
   var g = gen.clone();
   g.cmd += param - 1;
   gen.board.addFork(g);
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_FUNCTION] = function(gen, param) {
  var game = gen.board.game;
  if (!_.isUndefined(game.functions[param])) {
     return (game.functions[param])(gen);
  }
  return null;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_IN_ZONE] = function(gen, param) {
   var player = gen.board.player;
   if (gen.pos === null) {
       return null;
   }
   gen.stack.push(gen.design.inZone(param, player, gen.pos));
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_GET_FLAG] = function(gen, param) {
   gen.stack.push(gen.getValue(param, -1));
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_SET_FLAG] = function(gen, param) {
   if (gen.stack.length == 0) {
       return null;
   }
   value = gen.stack.pop();
   gen.setValue(param, -1, value);
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_GET_PFLAG] = function(gen, param) {
   if (gen.pos === null) {
       return null;
   }
   gen.stack.push(gen.getValue(param, gen.pos));
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_SET_PFLAG] = function(gen, param) {
   if (gen.pos === null) {
       return null;
   }
   if (gen.stack.length == 0) {
       return null;
   }
   value = gen.stack.pop();
   gen.setValue(param, gen.pos, value);
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_GET_ATTR] = function(gen, param) {
   if (gen.pos === null) {
       return null;
   }
   var value = gen.getAttr(param, gen.pos);
   if (value === null) {
       return null;
   }
   gen.stack.push(value);
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_SET_ATTR] = function(gen, param) {
   if (gen.pos === null) {
       return null;
   }
   if (gen.stack.length == 0) {
       return null;
   }
   var value = gen.stack.pop();
   gen.setAttr(param, gen.pos, value);
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_PROMOTE] = function(gen, param) {
   if (_.isUndefined(gen.piece)) {
       return null;
   }
   gen.piece = gen.piece.promote(param);
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_MODE] = function(gen, param) {
   gen.mode = param;
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_ON_BOARDD] = function(gen, param) {
   var player = gen.board.player;
   var pos = gen.pos;
   if (pos === null) {
       return null;
   }
   pos = gen.design.navigate(player, pos, param);
   if (pos !== null) {
       gen.stack.push(true);
   } else {
       gen.stack.push(false);
   }
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_ON_BOARDP] = function(gen, param) {
   if ((param >= 0) && (param < gen.design.positions.length)) {
       gen.stack.push(true);
   } else {
       gen.stack.push(false);
   }
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_PARAM] = function(gen, param) {
   var value = gen.params[param];
   gen.stack.push(value);
   return 0;
}

Dagaz.Model.commands[Dagaz.Model.ZRF_LITERAL] = function(gen, param) {
   gen.stack.push(param);
   return 0;
}

Dagaz.Model.functions = {};

Dagaz.Model.functions[Dagaz.Model.ZRF_VERIFY] = function(gen) {
   if (gen.stack.length == 0) {
       return null;
   }
   var f = gen.stack.pop();
   if (f) {
       return 0;
   } else {
       return null;
   }
}

Dagaz.Model.functions[Dagaz.Model.ZRF_SET_POS] = function(gen) {
   if (gen.stack.length == 0) {
       return null;
   }
   var pos = gen.stack.pop();
   if (pos < gen.design.positions.length) {
      gen.pos = pos;
      return 0;
   } else {
      return null;
   }
}

Dagaz.Model.functions[Dagaz.Model.ZRF_NAVIGATE] = function(gen) {
   if (gen.stack.length == 0) {
       return null;
   }
   var dir = gen.stack.pop();
   var player = gen.board.player;
   var pos = gen.pos;
   if (pos === null) {
       return null;
   }
   pos = gen.design.navigate(player, pos, dir);
   if (pos === null) {
       return null;
   }
   if (pos < gen.design.positions.length) {
      gen.pos = pos;
      return 0;
   } else {
      return null;
   }
}

Dagaz.Model.functions[Dagaz.Model.ZRF_OPPOSITE] = function(gen) {
   if (gen.stack.length == 0) {
       return null;
   }
   var dir = gen.stack.pop();
   if (_.isUndefined(gen.design.players[0])) {
       return null;
   }
   if (_.isUndefined(gen.design.players[0][dir])) {
       return null;
   }
   dir = gen.design.players[0][dir];
   gen.stack.push(dir);
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_FROM] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   if (gen.getPiece(gen.pos) === null) {
       return null;
   }
   gen.from  = gen.pos;
   gen.piece = gen.getPiece(gen.pos);
   delete gen.initial;
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_TO] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   if (_.isUndefined(gen.piece)) {
       return null;
   }
   if (Dagaz.Model.chessCapturing && !_.isUndefined(gen.cover) && !_.isUndefined(gen.from)) {
        gen.cover[gen.pos].push(gen.from);
        gen.serial[gen.pos].push(gen.serial);
   }
   if (_.isUndefined(gen.from)) {
       gen.dropPiece(gen.pos, gen.piece);
   } else {
       gen.movePiece(gen.from, gen.pos, gen.piece);
   }
   delete gen.from;
   delete gen.piece;
   if (Dagaz.Model.detectLoops && (gen.pos !== null)) {
       if (!gen.notLooped()) {
           gen.move.failed = true;
       }
   }
   gen.generated = true;
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_CAPTURE] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   if (gen.getPiece(gen.pos) === null) {
       return 0;
   }
   if (!gen.capturePiece(gen.pos)) {
       return null;
   }
   if (!_.isUndefined(gen.cover) && !_.isUndefined(gen.from)) {
       gen.cover[gen.pos].push(gen.from);
       gen.serial[gen.pos].push(gen.serial);
   }
   gen.generated = true;
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_FLIP] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   if (gen.getPiece(gen.pos) === null) {
       return null;
   }
   var piece = gen.getPiece(gen.pos).flip();
   gen.movePiece(gen.pos, gen.pos, piece);
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_END] = function(gen) {
   var board = gen.board;
   if (gen.generated) {
       if (gen.moveType == 2) {
           board.changeMove(gen.move);
       }
       if (gen.moveType == 1) {
           board.addMove(gen.move);
       }
   }
   gen.moveType = 0;
   gen.completed = true;
   return null;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_NOT] = function(gen) {
   if (gen.stack.length == 0) {
       return null;
   }
   var f = gen.stack.pop();
   gen.stack.push(!f);
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_IS_EMPTY] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   if (isCaptured(gen.move, gen.pos)) {
       gen.stack.push(false);
       return 0;
   }
   var piece = gen.getPiece(gen.pos);
   gen.stack.push(piece === null);
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_IS_PIECE] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   if (gen.stack.length == 0) {
       return null;
   }
   var type = gen.stack.pop();
   var piece = gen.getPiece(gen.pos);
   if (piece === null) {
       gen.stack.push(false);
   } else {
       gen.stack.push(piece.type == type);
   }
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_CREATE] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   if (gen.stack.length == 0) {
       return null;
   }
   if (_.isUndefined(gen.initial) && (gen.from == gen.pos)) {
       gen.initial = gen.pos;
   }
   var type = gen.stack.pop();
   var piece = new ZrfPiece(type, gen.board.player);
   gen.dropPiece(gen.pos, piece);
   return 0;
}

Dagaz.Model.isFriend = function(piece, player) {
   if (piece === null) return false;
   return (piece.player == player);
}

Dagaz.Model.functions[Dagaz.Model.ZRF_IS_ENEMY] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   var piece  = gen.getPiece(gen.pos);
   if (piece === null) {
       gen.stack.push(false);
       return 0;
   }
   var player = gen.board.player;
   gen.stack.push(!Dagaz.Model.isFriend(piece, player));
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_IS_FRIEND] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   var piece  = gen.getPiece(gen.pos);
   if (piece === null) {
       gen.stack.push(false);
       return 0;
   }
   var player = gen.board.player;
   gen.stack.push(Dagaz.Model.isFriend(piece, player));
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_IS_LASTF] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   gen.stack.push(gen.isLastFrom(gen.pos));
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_IS_LASTT] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   gen.stack.push(gen.isLastTo(gen.pos));
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_MARK] = function(gen) {
   if (gen.pos === null) {
       return null;
   }
   gen.setMark();
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_BACK] = function(gen) {
   var pos = gen.getMark();
   if (pos !== null) {
      gen.pos = pos;
   } else {
      return null;
   }
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_PUSH] = function(gen) {
   gen.marks.push(gen.pos);
   return 0;
}

Dagaz.Model.functions[Dagaz.Model.ZRF_POP] = function(gen) {
   if (gen.marks.length == 0) {
       return null;
   }
   gen.pos = gen.marks.pop();
   return 0;
}

if (!_.isUndefined(Array.indexOf)) {
   Dagaz.find = function(array, value) {
      return Array.prototype.indexOf.call(array, value);
   }
} else {
   Dagaz.find = function(array, value) {
      return _.indexOf(array, value);
   }
}

if (!_.isUndefined(Int32Array)) {
   Dagaz.int32Array = function(array) {
      var a = new Int32Array(array.length);
      a.set(array);
      return a;
   }
} else {
   Dagaz.int32Array = function(array) {
      return array;
   }
}

Dagaz.Model.posToString = function(pos, design) {
   if (_.isUndefined(design)) {
       design = Dagaz.Model.getDesign();
   }
   if (pos < design.positionNames.length) {
       return design.positionNames[pos];
   } else {
       return "?";
   }
}

Dagaz.Model.stringToPos = function(name, design) {
   if (_.isUndefined(design)) {
       design = Dagaz.Model.getDesign();
   }
   var pos = Dagaz.find(design.positionNames, name);
   if (pos >= 0) {
       return pos;
   } else {
       return null;
   }
}

Dagaz.Model.zupdate = function(value, piece, pos) {
  return value;
}

Dagaz.Model.hupdate = function(value, piece, pos) {
  return value;
}

Dagaz.Model.zplayer = function(value, player) {
  return value;
}

Dagaz.Model.hplayer = function(value, player) {
  return value;
}

function ZrfDesign() {
  this.playerNames    = [];
  this.players        = [];
  this.positionNames  = [];
  this.positions      = [];
  this.zoneNames      = [];
  this.zones          = [];
  this.pieceNames     = [];
  this.pieces         = [];
  this.attrs          = [];
  this.dirs           = [];
  this.templates      = [];
  this.options        = [];
  this.modes          = [];
  this.price          = [];
  this.goals          = [];
  this.values         = [];
  this.failed         = false;
}

Dagaz.Model.getDesign = function() {
  if (_.isUndefined(Dagaz.Model.design)) {
      Dagaz.Model.design = new ZrfDesign();
  }
  return Dagaz.Model.design;
}

ZrfDesign.prototype.setValue = function(name, value) {
  this.values[name] = value;
}

ZrfDesign.prototype.allPositions = function() {
  return _.range(this.positions.length);
}

ZrfDesign.prototype.allDirections = function() {
  return _.range(this.dirs.length);
}

ZrfDesign.prototype.allPlayers = function() {
  return _.range(1, this.playerNames.length);
}

ZrfDesign.prototype.reserve = function(player, piece, cnt, selector) {
  if (!_.isUndefined(selector) && (selector != Dagaz.Model.getSetupSelector())) {
      return;
  }
  var o = Dagaz.find(this.playerNames, player);
  var t = Dagaz.find(this.pieceNames, piece);
  if ((o < 0) || (t < 0)) {
      this.failed = true;
  } else {
      if (_.isUndefined(this.reserve[t])) {
          this.reserve[t] = [];
      }
      this.reserve[t][o] = cnt;
  }
}

ZrfDesign.prototype.setup = function(player, piece, pos, selector, attrs) {
  if (!_.isUndefined(selector) && (selector != Dagaz.Model.getSetupSelector())) {
      return;
  }
  if (_.isArray(pos)) {
      _.each(pos, function(p) {
         this.setup(player, piece, Dagaz.Model.stringToPos(p, this));
      }, this);
      return;
  }
  var o = Dagaz.find(this.playerNames, player);
  var t = Dagaz.find(this.pieceNames, piece);
  if ((o < 0) || (t < 0)) {
      this.failed = true;
  } else {
      var board = Dagaz.Model.getInitBoard();
      var piece = Dagaz.Model.createPiece(t, o);
      if (!_.isUndefined(attrs)) {
          if (!_.isArray(attrs)) attrs = [attrs];
          for (var i = 0; i < attrs.length; i++) {
               piece = piece.setValue(i, attrs[i]);
          }
      }
      board.setPiece(pos, piece);
  }
}

ZrfDesign.prototype.goal = function(n, player, piece, pos) {
  var o = Dagaz.find(this.playerNames, player);
  if (_.isUndefined(this.goals[o])) {
      this.goals[o] = [];
  }
  this.goals[o].push({
      num: n,
      piece: Dagaz.find(this.pieceNames, piece),
      positions: pos
  });
}

Dagaz.Model.getPieceTypes = function(piece) {
  return [ piece.type ];
}

ZrfDesign.prototype.getGoalPositions = function(player, pieces) {
  if (!_.isUndefined(this.goals[player])) {
      return _.chain(this.goals[player])
       .filter(function(goal) {
            return goal.num == 0;
        })
       .filter(function(goal) {
            return _.indexOf(pieces, goal.piece) >= 0;
        })
       .map(function(goal) {
            return goal.positions;
        })
       .flatten()
       .uniq()
       .value();
  } else {
       return [];
  }
}

ZrfDesign.prototype.getTemplate = function(ix) {
  if (_.isUndefined(this.templates[ix])) {
      this.templates[ix] = Dagaz.Model.createTemplate();
  }
  return this.templates[ix];
}

ZrfDesign.prototype.addCommand = function(ix, name, param) {
  var template = this.getTemplate(ix);
  template.addCommand(name, param);
}

ZrfDesign.prototype.addPriority = function(mode) {
  this.modes.push(mode);
}

ZrfDesign.prototype.addAttribute = function(type, name, val) {
  if (_.isUndefined(this.attrs[name])) {
      this.attrs[name] = [];
  }
  this.attrs[name][type] = val;
}

ZrfDesign.prototype.getAttribute = function(type, name) {
  if (_.isUndefined(this.attrs[name])) {
      return null;
  }
  if (_.isUndefined(this.attrs[name][type])) {
      return null;
  }
  return this.attrs[name][type];
}

ZrfDesign.prototype.addPiece = function(name, type, price) {
  this.pieceNames[type] = name;
  this.price[type] = _.isUndefined(price) ? 1 : price;
}

ZrfDesign.prototype.addMove = function(type, template, params, mode, sound, selector) {
  if (!_.isUndefined(selector) && (selector != Dagaz.Model.getSetupSelector())) {
      return;
  }
  if (_.isUndefined(this.pieces[type])) {
      this.pieces[type] = [];
  }
  if (!_.isUndefined(this.templates[template])) {
      this.pieces[type].push({
         type: 0,
         template: this.templates[template],
         params: params,
         sound: sound,
         mode: mode
      });
  }
}

ZrfDesign.prototype.addDrop = function(type, template, params, mode, sound, selector) {
  if (!_.isUndefined(selector) && (selector != Dagaz.Model.getSetupSelector())) {
      return;
  }
  if (_.isUndefined(this.pieces[type])) {
      this.pieces[type] = [];
  }
  if (!_.isUndefined(this.templates[template])) {
      this.pieces[type].push({
         type: 1,
         template: this.templates[template],
         params: params,
         sound: sound,
         mode: mode
      });
  }
}

ZrfDesign.prototype.checkVersion = function(name, value, selector) {
  if (!_.isUndefined(selector) && (selector != Dagaz.Model.getSetupSelector())) {
      return;
  }
  console.log("checkVersion: " + name + "=" + value);
  this.options[name] = value;
  Dagaz.Model.checkVersion(this, name, value);
}

ZrfDesign.prototype.checkOption = function(name, value) {
  return Dagaz.Model.checkOption(this, name, value);
}

ZrfDesign.prototype.getPieceType = function(name) {
  var r = Dagaz.find(this.pieceNames, name);
  if (r < 0) {
      return null;
  }
  return r;
}

ZrfDesign.prototype.getDirection = function(name) {
  var r = Dagaz.find(this.dirs, name);
  if (r < 0) {
      return null;
  }
  return r;
}

ZrfDesign.prototype.addDirection = function(name) {
  this.dirs.push(name);
}

ZrfDesign.prototype.opposite = function(dir) {
  return this.players[0][dir];
}

ZrfDesign.prototype.addPlayer = function(player, symmetries, selector) {
  if (!_.isUndefined(selector) && (selector != Dagaz.Model.getResourceSelector())) return;
  var ix = this.playerNames.length;
  if (this.playerNames.length == 0) {
      ix = 0;
      this.playerNames.push("opposite");
  }
  this.players[ix] = Dagaz.int32Array(symmetries);
  this.playerNames.push(player);
}

ZrfDesign.prototype.getPlayersCount = function() {
  return this.playerNames.length - 1;
}

ZrfDesign.prototype.addTurn = function(player, modes, selector) {
  if (!_.isUndefined(selector) && (selector != Dagaz.Model.getResourceSelector())) return;
  if (_.isUndefined(this.turns)) {
      this.turns = [];
  }
  if (!_.isUndefined(modes) && !_.isArray(modes)) {
      modes = [modes];
  }
  this.turns.push({
      random: false,
      player: player,
      modes:  modes
  });
}

ZrfDesign.prototype.addRandom = function(player, modes, selector) {
  if (!_.isUndefined(selector) && (selector != Dagaz.Model.getResourceSelector())) return;
  if (_.isUndefined(this.turns)) {
      this.turns = [];
  }
  this.turns.push({
      random: true,
      player: player,
      modes:  modes
  });
}

ZrfDesign.prototype.repeatMark = function() {
  if (_.isUndefined(this.turns)) {
      this.turns = [];
  }
  this.repeat = this.turns.length;
}

ZrfDesign.prototype.isPuzzle = function() {
  if (!_.isUndefined(this.turns) && (this.turns.length == 1)) return true;
  return _.chain(_.keys(this.playerNames)).max().value() == 1;
}

ZrfDesign.prototype.nextPlayer = function(player) {
  if (player + 1 >= this.playerNames.length) {
      return 1;
  } else {
      return player + 1;
  }
}

ZrfDesign.prototype.nextTurn = function(board) {
  var turn = board.turn + 1;
  if (_.isUndefined(this.turns)) {
      if (turn >= this.playerNames.length - 1) {
          turn = 0;
          if (this.repeat) {
              turn += this.repeat;
          }
      }
  } else {
      if (turn >= this.turns.length) {
          turn = 0;
          if (this.repeat) {
              turn += this.repeat;
          }
      }
  }
  return turn;
}

ZrfDesign.prototype.currPlayer = function(turn) {
  if (_.isUndefined(this.turns)) {
      return turn + 1;
  } else {
      return this.turns[turn].player;
  }
}

ZrfDesign.prototype.isValidMode = function(turn, mode) {
  if (_.isUndefined(this.turns) || 
      _.isUndefined(this.turns[turn]) ||
      _.isUndefined(this.turns[turn].modes)) {
      return true;
  } else {
      return _.indexOf(this.turns[turn].modes, mode) >= 0;
  }
}

ZrfDesign.prototype.prevPlayer = function(player) {
  if (player == 1) {
      return this.playerNames.length;
  } else {
      return player - 1;
  }
}

ZrfDesign.prototype.prevTurn = function(board) {
  if (_.isUndefined(this.turns)) {
      if (board.turn == 0) {
          return this.playerNames.length - 2;
      }
  } else {
      if ((board.turn == 0) || (board.turn == this.repeat)) {
          return this.turns.length - 1;
      }
  }
  return board.turn - 1;
}

function ZrfGrid(design) {
  this.design = design;
  this.scales = [];
  this.dirs   = [];
}

ZrfGrid.prototype.addScale = function(scale) {
  this.scales.push(scale.split('/'));
}

ZrfGrid.prototype.addDirection = function(name, offsets) {
  if (_.indexOf(this.dirs, name) < 0) {
      this.design.addDirection(name);
  }
  var ix = _.indexOf(this.design.dirs, name);
  if (ix >= 0) {
      this.dirs[ix] = offsets;
  }
}

ZrfDesign.prototype.addPosition = function(name, links, selector) {
  if (!_.isUndefined(selector) && (selector != Dagaz.Model.getSetupSelector())) {
      return;
  }
  if (_.isUndefined(links)) {
      links = _.map(_.range(this.dirs.length), function(dir) {
          return 0;
      });
  }
  if (_.isArray(name)) {
      _.each(name, function(n) {
          this.addPosition(n, links);
      }, this);
      return;
  }
  this.positionNames.push(name);
  this.positions.push(Dagaz.int32Array(links));
}

ZrfDesign.prototype.isKilledPos = function(pos) {
  if (pos >= this.positions.length) return true;
  var links = this.positions[pos];
  for (var i = 0; i < links.length; i++) {
      if (links[i] != 0) return false;
  }
  return true;
}

ZrfDesign.prototype.linkPosition = function(dir, from, to) {
  if (dir >= this.dirs.length) return;
  if ((from >= this.positions.length) || (to >= this.positions.length) || (from == to)) return;
  this.positions[from][dir] = to - from;
}

ZrfDesign.prototype.linkPositions = function(commands, selector) {
  if (!_.isUndefined(selector) && (selector != Dagaz.Model.getResourceSelector())) return;
  _.each(commands, function(c) {
     this.linkPosition(c.dir, c.from, c.to);
  }, this);
}

ZrfDesign.prototype.unlinkPosition = function(dir, from) {
  if (dir >= this.dirs.length) return;
  if (from >= this.positions.length) return;
  this.positions[from][dir] = 0;
}

ZrfDesign.prototype.unlinkPositions = function(commands, selector) {
  if (!_.isUndefined(selector) && (selector != Dagaz.Model.getResourceSelector())) return;
  _.each(commands, function(c) {
     var dirs = _.range(this.dirs.length);
     if (!_.isUndefined(c.dir)) {
         dirs = [c.dir];
     }
     if (!_.isUndefined(c.from)) {
         _.each(dirs, function(dir) {
            if (!_.isUndefined(c.to)) {
                var p = this.navigate(1, c.from, dir);
                if ((p !== null) && (p != c.to)) return;
            }
            this.unlinkPosition(dir, c.from);
         }, this);
     } else {
         if (_.isUndefined(c.to)) return;
         _.each(this.allPositions(), function(from) {
            if (from == c.to) return;
            _.each(dirs, function(dir) {
                var p = this.navigate(1, from, dir);
                if (p === null) return;
                if (p != c.to) return;
                this.unlinkPosition(dir, from);
            }, this);
         });
     }
  }, this);
}

ZrfDesign.prototype.killPosition = function(pos) {
  for (var dir = 0; dir < this.dirs.length; dir++) {
       this.unlinkPosition(dir, pos);
  }
  this.unlinkPositions({
       to: pos
  });
}

ZrfDesign.prototype.killPositions = function(positions, selector) {
  if (!_.isUndefined(selector) && (selector != Dagaz.Model.getResourceSelector())) return;
  _.each(positions, function(pos) {
     this.killPosition(pos);
  }, this);
}

ZrfDesign.prototype.addGrid = function() {
  return new ZrfGrid(this);
}

var addPositions = function(self, ix, name, point) {
  if (ix < 0) {
      var offsets = _.map(_.range(self.dirs.length), function(dir) {
          return 0;
      });
      _.each(_.keys(self.dirs), function(dir) {
          var o = 0;
          for (var c = self.scales.length - 1; c >= 0; c--) {
               if (c < self.scales.length - 1) {
                   o = o * self.scales[c].length;
               }
               var v = self.dirs[dir][c];
               var x = point[c] + v;
               if (x < 0) return;
               if (x >= self.scales[c].length) return;
               o += v;
          }
          offsets[dir] = o;
      });
      self.design.addPosition(name, offsets);
      return;
  }
  for (var i = 0; i < self.scales[ix].length; i++) {
      point.unshift(i);
      addPositions(self, ix - 1, self.scales[ix][i] + name, point);
      point.shift();
  }
}

ZrfGrid.prototype.addPositions = function() {
  addPositions(this, this.scales.length - 1, "", []);
}

ZrfDesign.prototype.findDirection = function(from, to) {
  if (from >= this.positions.length) return null;
  var dir = Dagaz.find(this.positions[from], to - from);
  if (dir < 0) return null;
  return dir;
}

ZrfDesign.prototype.opposite = function(dir, player) {
   if (_.isUndefined(player)) {
       player = 0;
   }
   return this.players[player][dir];
}

ZrfDesign.prototype.navigate = function(player, pos, dir) {
  if (!_.isUndefined(this.players[player])) {
      dir = this.players[player][dir];
  }
  if (this.positions[pos][dir] != 0) {
      return + pos + this.positions[pos][dir];
  } else {
      return null;
  }
}

ZrfDesign.prototype.getZone = function(name) {
  var zone = Dagaz.find(this.zoneNames, name);
  if (zone < 0) return null;
  return zone;
}

ZrfDesign.prototype.addZone = function(name, player, positions, selector) {
  if (!_.isUndefined(selector) && (selector != Dagaz.Model.getResourceSelector())) return;
  var zone = Dagaz.find(this.zoneNames, name);
  if (zone < 0) {
      zone = this.zoneNames.length;
      this.zoneNames.push(name);
  }
  if (_.isUndefined(this.zones[zone])) {
      this.zones[zone] = [];
  }
  this.zones[zone][player] = Dagaz.int32Array(positions);
}

ZrfDesign.prototype.zonePositions = function(zone, player) {
  if (!_.isUndefined(this.zones[zone])) {
      if (!_.isUndefined(this.zones[zone][player])) {
          return this.zones[zone][player];
      }
  }
  return [];
}

ZrfDesign.prototype.inZone = function(zone, player, pos) {
  if (!_.isUndefined(this.zones[zone])) {
      if (!_.isUndefined(this.zones[zone][player])) {
          return Dagaz.find(this.zones[zone][player], pos) >= 0;
      }
  }
  return false;
}

function ZrfMoveTemplate() {
  this.commands = [];
}

Dagaz.Model.createTemplate = function() {
  return new ZrfMoveTemplate();
}

ZrfMoveTemplate.prototype.addCommand = function(name, param) {
  if (!_.isUndefined(Dagaz.Model.commands[name])) {
      if (_.isUndefined(Dagaz.Model.cache)) {
          Dagaz.Model.cache = [];
      }
      if (_.isUndefined(Dagaz.Model.cache[name])) {
          Dagaz.Model.cache[name] = [];
      }
      var offset = param;
      if (_.isUndefined(Dagaz.Model.cache[name][offset])) {
          Dagaz.Model.cache[name][offset] = function(x) {
              return (Dagaz.Model.commands[name])(x, offset);
          }
      }
      this.commands.push(Dagaz.Model.cache[name][offset]);
  }
}

function ZrfMoveGenerator(design, mode, serial, sound) {
  this.move     = new ZrfMove(mode, serial, sound);
  this.start    = mode;
  this.moveType = 1;
  this.template = null;
  this.params   = null;
  this.mode     = null;
  this.board    = null;
  this.pos      = null;
  this.parent   = null;
  this.pieces   = [];
  this.values   = [];
  this.attrs    = [];
  this.stack    = [];
  this.marks	= [];
  this.cmd      = 0;
  this.level    = 1;
  this.serial   = serial;
  this.design   = design;
  this.steps    = [];
}

Dagaz.Model.createGen = function(template, params, design, mode, serial, sound) {
  if (_.isUndefined(design)) {
      design = Dagaz.Model.getDesign();
  }
  var r = new ZrfMoveGenerator(design, mode, serial, sound);
  r.template = template;
  r.params   = Dagaz.int32Array(params);
  return r;
}

ZrfMoveGenerator.prototype.init = function(board, pos) {
  this.board    = board;
  this.pos      = +pos;
  if (Dagaz.Model.detectLoops) {
      this.steps.push(this.pos);
  }
}

ZrfMoveGenerator.prototype.clone = function() {
  var r = new ZrfMoveGenerator(this.design, this.start, this.serial, this.sound);
  r.template = this.template;
  r.params   = this.params;  
  r.level    = this.level;
  r.parent   = this.parent;
  r.cmd      = this.cmd;
  r.mode     = this.mode;
  r.board    = this.board;
  r.pos      = this.pos;
  if (!_.isUndefined(this.cover)) {
      r.cover   = this.cover;
      r.serial  = this.serial;
  }
  if (!_.isUndefined(this.initial)) {
      r.initial = this.initial;
  }
  _.each(this.marks, function(it) { r.marks.push(it); });
  _.each(this.stack, function(it) { r.stack.push(it); });
  _.each(_.keys(this.pieces), function(pos) {
      r.pieces[pos] = this.pieces[pos];
  }, this);
  _.each(_.keys(this.values), function(name) {
      r.values[name] = [];
      _.each(_.keys(this.values[name]), function(pos) {
           r.values[name][pos] = this.values[name][pos];
      }, this);
  }, this);
  _.each(_.keys(this.attrs), function(pos) {
      r.attrs[pos] = [];
      _.each(_.keys(this.attrs[pos]), function(name) {
           r.attrs[pos][name] = this.attrs[pos][name];
      }, this);
  }, this);
  if (!_.isUndefined(this.from)) {
      r.from = this.from;
  }
  if (!_.isUndefined(this.piece)) {
      r.piece = this.piece;
  }
  r.move = this.move.clone(r.level);
  return r;
}

var copyArray = function(a) {
  var r = [];
  if (Dagaz.Model.detectLoops) {
      _.each(a, function(x) {
          r.push(x);
      });
  }
  return r;
}

ZrfMoveGenerator.prototype.copy = function(template, params) {
  var r = Dagaz.Model.createGen(template, params, this.design, this.move.mode, this.serial, this.move.sound);
  r.level    = this.level + 1;
  r.parent   = this;
  r.board    = this.board;
  r.pos      = this.pos;
  r.move     = this.move.copy();
  r.steps    = copyArray(this.steps);
  if (Dagaz.Model.detectLoops) {
      r.steps.push(this.pos);
  }
  if (!_.isUndefined(this.cover)) {
      r.cover   = this.cover;
      r.serial  = this.serial;
  }
  if (!_.isUndefined(this.initial)) {
      r.initial = this.initial;
  }
  return r;
}

ZrfMoveGenerator.prototype.notLooped = function() {
  return (this.steps.length < 2) || (_.indexOf(this.steps, this.pos) < 0);
}

ZrfMoveGenerator.prototype.getPos = function() {
  return this.pos;
}

ZrfMoveGenerator.prototype.movePiece = function(from, to, piece) {
  if (!_.isUndefined(this.attrs[to])) {
      for (var name in this.attrs[to]) {
           piece = piece.setValue(name, this.attrs[to][name]);
      }
  }
  this.move.movePiece(from, to, piece, this.level);
  this.lastf = from;
  this.lastt = to;
  if (from != to) {
      this.setPiece(from, null);
  }
  this.setPiece(to, piece);
}

ZrfMoveGenerator.prototype.dropPiece = function(pos, piece) {
  this.move.dropPiece(pos, piece, this.level);
  this.setPiece(pos, piece);
}

var isCaptured = function(move, pos) {
  if (!Dagaz.Model.deferredStrike) return false;
  for (var i = 0; i < move.actions.length; i++) {
       var a = move.actions[i];
       if ((a[0] !== null) && (a[1] === null) && (a[0] == pos)) return true;
  }
  return false;
}

ZrfMoveGenerator.prototype.capturePiece = function(pos) {
  if (isCaptured(this.move, pos)) return false;
  this.move.capturePiece(pos, this.level);
  this.setPiece(pos, null);
  return true;
}

Dagaz.Model.getMark = function(gen) {
  if (gen.marks.length == 0) {
      return null;
  } else {
      var pos = gen.marks.pop();
      gen.marks.push(pos);
      return pos;
  }
}

ZrfMoveGenerator.prototype.getMark = function() {
  return Dagaz.Model.getMark(this);
}

Dagaz.Model.setMark = function(gen) {
  if (gen.marks.length > 0) {
      gen.marks.pop();
  }
  if (gen.pos !== null) {
      gen.marks.push(gen.pos);
  }
}

ZrfMoveGenerator.prototype.setMark = function() {
  Dagaz.Model.setMark(this);
}

ZrfMoveGenerator.prototype.getPieceInternal = function(pos) {
  if (!_.isUndefined(this.pieces[pos])) {
      return this.pieces[pos];
  }
  if (this.parent !== null) {
      return this.parent.getPieceInternal(pos);
  }
  return this.board.getPiece(pos);
}

Dagaz.Model.getPiece = function(gen, pos) {
  if (gen.parent !== null) {
      return gen.parent.getPieceInternal(pos);
  }
  return gen.board.getPiece(pos);
}

ZrfMoveGenerator.prototype.getPiece = function(pos) {
  return Dagaz.Model.getPiece(this, pos);
}

ZrfMoveGenerator.prototype.setPiece = function(pos, piece) {
  this.pieces[pos] = piece;
}

Dagaz.Model.isLastFrom = function(pos, board) {
  if (!_.isUndefined(board.lastf)) {
      return (board.lastf == pos)
  } else {
      return false;
  }
}

ZrfMoveGenerator.prototype.isLastFrom = function(pos) {
  if (this.parent !== null) {
      if (!_.isUndefined(this.parent.lastf)) {
          return (this.parent.lastf == pos);
      } else {
          return false;
      }
  }
  return Dagaz.Model.isLastFrom(pos, this.board);
}

Dagaz.Model.isLastTo = function(pos, board) {
  if (!_.isUndefined(board.lastt)) {
      return (board.lastt == pos)
  } else {
      return false;
  }
}

ZrfMoveGenerator.prototype.isLastTo = function(pos) {
  if (this.parent !== null) {
      if (!_.isUndefined(this.parent.lastt)) {
          return (this.parent.lastt == pos);
      } else {
          return false;
      }
  }
  return Dagaz.Model.isLastTo(pos, this.board);
}

Dagaz.Model.getValueInternal = function(aThis, name, pos) {
  return null;
}

ZrfMoveGenerator.prototype.getValue = function(name, pos) {
  if (!_.isUndefined(this.values[name])) {
      if (!_.isUndefined(this.values[name][pos])) {
          return this.values[name][pos];
      }
  }
  return Dagaz.Model.getValueInternal(this, name, pos);
}

ZrfMoveGenerator.prototype.setValue = function(name, pos, value) {
  if (_.isUndefined(this.values[name])) {
      this.values[name] = [];
  }
  this.values[name][pos] = value;
}

Dagaz.Model.getAttrInternal = function(gen, name, pos) {
  return null;
}

ZrfMoveGenerator.prototype.getAttr = function(name, pos) {
  var piece = this.getPiece(pos);
  if (piece !== null) {
      return piece.getValue(name);
  }
  return Dagaz.Model.getAttrInternal(this, name, pos);
}

ZrfMoveGenerator.prototype.setAttr = function(name, pos, value) {
  if (_.isUndefined(this.attrs[pos])) {
      this.attrs[pos] = [];
  }
  this.attrs[pos][name] = value;
  var piece = this.getPieceInternal(pos);
  if (piece !== null) {
      piece = piece.setValue(name, value);
      this.move.movePiece(pos, pos, piece, this.level);
      this.setPiece(pos, piece);
  }
}

ZrfMoveGenerator.prototype.generate = function() {
  while (this.cmd < this.template.commands.length) {
     var r = (this.template.commands[this.cmd++])(this);
     if (r === null) return;
     this.cmd += r;
     if (this.cmd < 0) return;
  }
  this.cmd = 0;
  this.completed = true;
}

function ZrfPiece(type, player) {
  this.type   = type;
  this.player = player;
}

Dagaz.Model.createPiece = function(type, player) {
  if (_.isUndefined(Dagaz.Model.cachePiece)) {
      Dagaz.Model.cachePiece = [];
  }
  if (_.isUndefined(Dagaz.Model.cachePiece[player])) {
      Dagaz.Model.cachePiece[player] = [];
  }
  if (_.isUndefined(Dagaz.Model.cachePiece[player][type])) {
      Dagaz.Model.cachePiece[player][type] = new ZrfPiece(type, player);
  }
  return Dagaz.Model.cachePiece[player][type];
}

Dagaz.Model.pieceToString = function(piece) {
  return piece.getOwner() + " " + piece.getType();
}

ZrfPiece.prototype.toString = function() {
  return Dagaz.Model.pieceToString(this);
}

ZrfPiece.prototype.getType = function() {
  var design = Dagaz.Model.getDesign();
  return design.pieceNames[this.type];
}

ZrfPiece.prototype.getOwner = function() {
  var design = Dagaz.Model.getDesign();
  return design.playerNames[this.player];
}

ZrfPiece.prototype.getValue = function(name) {
  if (!_.isUndefined(this.values)) {
     if (!_.isUndefined(this.values[name])) {
         return this.values[name];
     }
  }
  var design = Dagaz.Model.getDesign();
  return design.getAttribute(this.type, name);
}

ZrfPiece.prototype.setValue = function(name, value) {
  if (this.getValue(name) == value) {
      return this;
  }
  var piece = new ZrfPiece(this.type, this.player);
  if (_.isUndefined(piece.values)) {
     piece.values = [];
  }
  if (!_.isUndefined(this.values)) {
      for (var ix = 0; ix < this.values.length; ix++) {
         if (!_.isUndefined(this.values[ix])) {
             piece.values[ix] = this.values[ix];
         }
      }
  }
  piece.values[name] = value;
  return piece;
}

ZrfPiece.prototype.promote = function(type) {
  return Dagaz.Model.createPiece(type, this.player);
}

ZrfPiece.prototype.changeOwner = function(player) {
  if (this.player == player) {
      return this;
  } else {
      return Dagaz.Model.createPiece(this.type, player);
  }
}

ZrfPiece.prototype.flip = function() {
  var design = Dagaz.Model.getDesign();
  return Dagaz.Model.createPiece(this.type, design.nextPlayer(this.player));
}

Dagaz.Model.BuildDesign = function(design) {}

Dagaz.Model.InitGame = function() {
  var design = Dagaz.Model.getDesign();
  this.BuildDesign(design);
}

function ZrfBoard(game) {
  this.game     = game;
  this.pieces   = [];
  this.forks    = [];
  this.turn     = 0;
  this.player   = Dagaz.Model.getDesign().currPlayer(this.turn);
  this.changed  = [];
  this.parent   = null;
  this.values   = [];
  this.zSign    = Dagaz.Model.zplayer(0, this.player);
  this.hSign    = Dagaz.Model.hplayer(0, this.player);
  this.level    = 0;
}

ZrfBoard.prototype.assign = function(board) {
  this.zSign    = board.zSign;
  this.hSign    = board.hSign;
  this.pieces   = board.pieces;
  delete this.moves;
}

ZrfBoard.prototype.getValue = function(name) {
  if (_.isUndefined(this.values[name])) {
      return null;
  } else {
      return this.values[name];
  }
}

ZrfBoard.prototype.setValue = function(name, value) {
  if (value === null) {
      delete this.values[name];
  } else {
      this.values[name] = value;
  }
}

ZrfBoard.prototype.traceMoves = function() {
  var signs = [];
  var moves = [];
  var board = this;
  while (board.parent) {
      if (board.zSign != 0) {
          if (_.indexOf(signs, board.zSign) >= 0) {
              var f = true;
              while (f) {
                 moves.pop();
                 f = signs.pop() != board.zSign;
              }
          }
      }
      if (board.move) {
          signs.push(board.zSign);
          moves.push(board.move);
      }
      board = board.parent;
  }
  return moves.reverse();
}

Dagaz.Model.checkGoals = function(design, board, player) {
  var r = null;
  _.each(_.keys(design.goals), function(p) {
      var groups = _.groupBy(design.goals[p], function(goal) {
          return goal.num;
      });
      var goals  = _.map(_.keys(groups), function(num) {
          return groups[num];
      });
      var s = _.reduce(goals, function(acc, goal) {
          if (_.reduce(goal, function(acc, g) {
                   var type = g.piece;
                   if (!_.reduce(g.positions, function(acc, pos) {
                             var piece = board.getPiece(pos);
                             if ((piece !== null) && 
                                 (piece.player == p) &&
                                 (piece.type == type)) return true;
                             return acc;
                          }, false)) return false;
                   return acc;
                }, true)) return true;
          return acc;
      }, false); 
      if (s) {
          r = (p == player) ? 1: -1; 
      }
  });
  return r;
}

ZrfBoard.prototype.checkGoals = function(design, player) {
  if (!player) {
      player = this.player;
  }
  return Dagaz.Model.checkGoals(design, this, player);
}

Dagaz.Model.setup = function(board) {}

ZrfBoard.prototype.setup = function(view, initialize) {
  if (initialize) {
      Dagaz.Model.setup(this);
  }
  view.clear();
  _.each(_.keys(this.pieces), function(pos) {
     var piece = this.pieces[pos];
     if (piece !== null) {
         view.addPiece(piece.toString(), pos, piece);
     }
  }, this);
}

ZrfBoard.prototype.copy = function() {
  var r = new ZrfBoard(this.game);
  r.parent  = this;
  r.player  = this.player;
  r.zSign   = this.zSign;
  r.hSign   = this.hSign;
  r.lastf   = this.lastf;
  r.lastt   = this.lastt;
  r.reserve = [];
  _.each(_.keys(this.reserve), function(t) {
      r.reserve[t] = [];
      _.each(_.keys(this.reserve[t]), function(p) {
         r.reserve[t][p] = this.reserve[t][p];
      }, this);
  }, this);
  _.each(_.keys(this.pieces), function(pos) {
      r.pieces[pos] = this.pieces[pos];
  }, this);
  _.each(_.keys(this.values), function(k) {
      r.values[k] = this.values[k];
  }, this);
  return r;
}

Dagaz.Model.getInitBoard = function() {
  if (_.isUndefined(Dagaz.Model.board)) {
      var design = Dagaz.Model.getDesign();
      Dagaz.Model.board = new ZrfBoard(Dagaz.Model);
      Dagaz.Model.board.reserve = design.reserve;
      Dagaz.Model.board.values = design.values;
  }
  return Dagaz.Model.board;
}

ZrfBoard.prototype.clear = function() {
  this.zSign    = 0;
  this.hSign    = 0;
  this.pieces   = [];
}

ZrfBoard.prototype.addFork = function(gen) {
  if (!_.isUndefined(Dagaz.Model.movesLimit)) {
      if (this.forks.length >= Dagaz.Model.movesLimit) {
          this.failed = true;
          return;
      }
  }
  this.forks.push(gen);
}

ZrfBoard.prototype.getPiece = function(pos) {
  if (_.isUndefined(this.pieces[pos])) {
      return null;
  } else {
      return this.pieces[pos];
  }
}

ZrfBoard.prototype.setPiece = function(pos, piece) {
  if (!_.isUndefined(this.pieces[pos])) {
      var op = this.pieces[pos];
      this.zSign = Dagaz.Model.zupdate(this.zSign, op, pos);
      this.hSign = Dagaz.Model.hupdate(this.hSign, op, pos);
  }
  if (piece === null) {
     delete this.pieces[pos];
  } else {
     this.pieces[pos] = piece;
     this.zSign = Dagaz.Model.zupdate(this.zSign, piece, pos);
     this.hSign = Dagaz.Model.hupdate(this.hSign, piece, pos);
  }
}

ZrfBoard.prototype.addMove = function(move) {
  this.moves.push(move);
}

ZrfBoard.prototype.changeMove = function(move) {
  if (this.moves.length > 0) {
      this.moves.pop();
  }
  this.moves.push(move);
}

ZrfBoard.prototype.getSignature = function() {
  return this.zSign;
}

Dagaz.Model.PostActions = function(board) {
  board.moves = _.filter(board.moves, function(m) { 
       return (_.isUndefined(m.failed));
  });
}

Dagaz.Model.CheckInvariants = function(board) {}
Dagaz.Model.Extension = function(board) {}

Dagaz.Model.getPartList = function(board, gen) {
  return [ gen.lastt ];
}

var addPrior = function(priors, mode, gen) {
  var ix = 0;
  if (gen.design.modes.length > 0) {
      ix = Dagaz.find(gen.design.modes, mode);
      if (Dagaz.Model.zrfCompatible && (ix < 0)) {
          ix = gen.design.modes.length;
      }
  }
  if (ix >= 0) {
      if (_.isUndefined(priors[ix])) {
          priors[ix] = [];
      }
      priors[ix].push(gen);
  }
}

var CompleteMove = function(board, gen, cover, serial) {
  var f = false;
  if (!_.isUndefined(gen.initial)) {
      f = true;
      gen.pos   = gen.initial;
      gen.lastt = gen.initial;
  }
  var positions = Dagaz.Model.getPartList(board, gen);
  if (!Dagaz.Model.passPartial) { var t = 2; } 
      else { var t = 1; }
  while (positions.length > 0) {
       pos = positions.pop();
       var piece = gen.getPieceInternal(pos);
       if (f && (piece === null) && (gen.parent !== null)) {
           piece = gen.parent.getPieceInternal(pos);
           gen.setPiece(pos, piece);
       }
       if ((piece !== null) && (Dagaz.Model.sharedPieces || Dagaz.Model.isFriend(piece, board.player))) {
           _.each(board.game.design.pieces[piece.type], function(move) {
                if ((move.type == 0) && (move.mode == gen.mode) && gen.notLooped()) {
                    var g = gen.copy(move.template, move.params);
                    if (!_.isUndefined(cover)) {
                        g.cover  = cover;
                        g.serial = serial;
                    }
                    g.moveType = t;
                    g.generate();
                    if (g.completed && (g.moveType == 0)) {
                        CompleteMove(board, g, cover, serial);
                        t = 1;
                    }
                }
           }, this);
       }
  }
}

ZrfBoard.prototype.generateInternal = function(callback, cont, cover, serial) {
  var design = this.game.design;
  if (_.isUndefined(this.moves)) {
      this.moves = [];
  } else {
      return;
  }
  var sn = 0;
  if ((this.moves.length == 0) && !design.failed && (this.player > 0)) {
      var priors = [];
      _.chain(_.keys(this.pieces))
       .filter(function(pos)  
          { return !_.isUndefined(cover) ||
                   Dagaz.Model.sharedPieces || 
                   Dagaz.Model.isFriend(this.pieces[pos], this.player); 
          }, this)
       .each(function(pos) {
           var piece = this.pieces[pos];
           _.chain(design.pieces[piece.type])
            .filter(function(move) { return (move.type == 0); })
            .filter(function(move) { 
                return design.isValidMode(this.turn, move.mode); 
             }, this)
            .each(function(move) {
                var g = Dagaz.Model.createGen(move.template, move.params, this.game.design, move.mode, sn++, move.sound);
                if (!_.isUndefined(cover)) {
                    g.cover  = cover;
                    g.serial = serial;
                }
                g.init(this, pos);
                addPrior(priors, move.mode, g);
            }, this);
        }, this);
      if (_.isUndefined(cover)) {
          _.each(design.allPositions(), function(pos) {          
            _.chain(_.range(design.pieces.length))
             .filter(function(tp) { return !Dagaz.Model.noReserve(this, tp); }, this)
             .each(function(tp) {
                   _.chain(design.pieces[tp])
                    .filter(function(move) { return (move.type == 1); })
                    .filter(function(move) { 
                        return design.isValidMode(this.turn, move.mode); 
                     }, this)
                    .each(function(move) {
                        var g = Dagaz.Model.createGen(move.template, move.params, this.game.design, move.mode, sn++, move.sound);
                        g.init(this, pos);
                        g.piece = new ZrfPiece(tp, this.player);
                        addPrior(priors, move.mode, g);
                    }, this);
               }, this);
          }, this);
      }
      this.forks = [];
      if (callback.checkContinue()) {
          for (var i = 0; i <= design.modes.length; i++) {
               var f = false;
               if (!_.isUndefined(priors[i])) {
                   while (priors[i].length > 0) {
                      var g = priors[i].pop();
                      g.generate();
                      if (g.completed && !g.move.isPass()) {
                          if (cont && (g.moveType == 0)) {
                              CompleteMove(this, g, cover, serial);
                          }
                          f = true;
                      }
                   }
               }
               if (f) break;
               if (i >= design.modes.length) break;
          }
          while (this.forks.length > 0) {
               var g = this.forks.pop();
               g.generate();
               if (g.completed) {
                     if (cont && (g.moveType == 0)) {
                        CompleteMove(this, g, cover, serial);
                     }
               }
          }
      }
      Dagaz.Model.Extension(this);
      if (cont) {
          Dagaz.Model.CheckInvariants(this);
          _.each(this.moves, function(move) {
              if (!design.isValidMode(this.turn, move.mode)) {
                  move.failed = true;
              }
          }, this);
          Dagaz.Model.PostActions(this);
          if (Dagaz.Model.passTurn == 1) {
              this.moves.push(new ZrfMove());
          }
          if (Dagaz.Model.passTurn == 2) {
              if (this.moves.length == 0) {
                  this.moves.push(new ZrfMove());
              }
          }
      }
  }
}

ZrfBoard.prototype.generate = function(design) {
  this.generateInternal(this, true);
}

Dagaz.Model.GetCover = function(design, board) {
  if (_.isUndefined(board.cover)) {
      var b = board.copy();
      board.cover  = [];
      board.serial = [];
      for (var pos = 0; pos < design.positions.length; pos++) {
           board.cover[pos]  = [];
           board.serial[pos] = [];
           var piece = b.getPiece(pos);
           if (piece !== null) {
               piece = piece.changeOwner(0);
               b.setPiece(pos, piece);
           }
      }
      b.generateInternal(b, true, board.cover, board.serial);
  }
  return board.cover;
}

ZrfBoard.prototype.getCover = function(design) {
  return Dagaz.Model.GetCover(design, this);
}

ZrfBoard.prototype.checkContinue = function() {
  return true;
}

Dagaz.Model.decReserve = function(board, piece) {
  if (!_.isUndefined(board.reserve[piece.type])) {
      if (!_.isUndefined(board.reserve[piece.type][piece.player]) &&
          (board.reserve[piece.type][piece.player] > 0)) {
          board.reserve[piece.type][piece.player]--;
      }
  }
}

Dagaz.Model.incReserve = function(board, piece) {
  if (!_.isUndefined(board.reserve[piece.type])) {
      if (!_.isUndefined(board.reserve[piece.type][piece.player])) {
          board.reserve[piece.type][piece.player]++;
      }
  }
}

Dagaz.Model.noReserve = function(board, piece) {
  if (!_.isUndefined(board.reserve[piece])) {
      if (!_.isUndefined(board.reserve[piece][board.player])) {
          return (board.reserve[piece][board.player] <= 0);
      }
  }
  return false;
}

ZrfBoard.prototype.movePiece = function(move, from, to, piece) {
  this.lastf = from;
  this.lastt = to;
  this.lastc = to;
  if ((piece === null) && this.parent) {
      piece = this.parent.getPiece(from);
  }
  if (piece === null) {
      piece = this.getPiece(from);
  }
  if (Dagaz.find(this.changed, from) < 0) {
      this.setPiece(from, null);
  }
  this.setPiece(to, piece);
  this.changed.push(to);
}

ZrfBoard.prototype.dropPiece = function(move, pos, piece) {
  if (!Dagaz.Model.IGNORE_DROP_LASTT) {
      this.lastt = pos;
  }
  Dagaz.Model.decReserve(this, piece);
  this.setPiece(pos, piece);
  this.changed.push(pos);
}

ZrfBoard.prototype.capturePiece = function(move, pos) {
  if (Dagaz.Model.recycleCaptures) {
      var piece = this.getPiece(pos);
          if (piece != null) {
              Dagaz.Model.incReserve(this, piece);
          }
  }
  this.setPiece(pos, null);
  this.changed = _.filter(this.changed, function(p) {
     return p != pos; 
  });
}

ZrfBoard.prototype.commit = function(move) {
  this.changed = [];
}

Dagaz.Model.Done = function(design, board) {}

ZrfBoard.prototype.apply = function(move) {
  if (!_.isUndefined(move.result)) return move.result;
  var design = Dagaz.Model.design;
  var r = this.copy();
  r.turn   = design.nextTurn(this);
  r.zSign  = Dagaz.Model.zplayer(r.zSign, this.player);
  r.hSign  = Dagaz.Model.hplayer(r.hSign, this.player);
  r.player = design.currPlayer(r.turn);
  r.level  = this.level + 1;
  move.applyAll(r);
  r.move = move;
  r.zSign  = Dagaz.Model.zplayer(r.zSign, r.player);
  r.hSign  = Dagaz.Model.hplayer(r.hSign, r.player);
  return r;
}

function ZrfMove(mode, serial, sound) {
  this.actions  = [];
  this.serial   = serial;
  if (!_.isUndefined(sound)) {
      this.sound = sound;
  }
  if (_.isUndefined(mode)) {
      this.mode = 0;
  } else {
      this.mode = mode;
  }
}

Dagaz.Model.createMove = function(mode, sound) {
  var r = new ZrfMove(mode);
  r.sound = sound;
  return r;
}

Dagaz.Model.compareMove = function(move, notation) {
  return (move.toString() == notation);
}

var cartesian = function(r, prefix, arr) {
   if (arr.length > 0) {
       _.each(_.first(arr), function (n) {
          var x = _.clone(prefix);
          x.push(n);
          cartesian(r, x, _.rest(arr));
       });
   } else {
       r.push(prefix);
   }
}

_.mixin({
  cartesian: function(x) {
     var r = [];
     cartesian(r, [], x);
     return r;
  }
});

ZrfMove.prototype.getZ = function() {
  if (_.isUndefined(this.zSign)) {
      _.each(this.actions, function(a) {
          if (a[2] === null) return;
          if (a[0] !== null) {
              this.zSign = Dagaz.Model.zupdate(this.zSign, a[2][0], a[0][0]);
          }
          if (a[1] !== null) {
              this.zSign = Dagaz.Model.zupdate(this.zSign, a[2][0], a[1][0]);
          }
      }, this);
  }
  return this.zSign;
}

ZrfMove.prototype.getControlList = function() {
  return _.chain(this.actions)
   .map(function (action) {
        return _.chain(_.range(3))
         .map(function (ix) {
              if (action[ix] === null) {
                  return 0;
              } else {
                  return action[ix].length;
              }
          })
         .filter(function (n) { return n > 1; })
         .value();
    })
   .flatten()
   .map(function (n) { return _.range(n); })
   .cartesian()
   .value();
}

var pushItem = function(r, list, control, ix) {
   if ((list === null) || (list.length < 1) || 
       (list.length == 1) || (ix >= control.length)) {
       r.push(list);
       return ix;
   }
   if (list[control[ix]] === null) {
       r.push(null);
   } else {
       r.push([list[control[ix]]]);
   }
   return ix + 1;
}

var isValidAction = function(action) {
   return (action[0] !== null) || (action[1] !== null);
}

var isValidMove = function(move) {
   return 1 >= _.chain(move.actions)
    .filter(function (action) {
        return (action[1] === null);
     })
    .map(function (action) {
        return action[0][0];
     })
    .countBy()
    .values()
    .max()
    .value();
}

ZrfMove.prototype.determinate = function() {
  var c = this.getControlList();
  if (c.length > 1) {
      return _.chain(c)
       .map(function (l) {
           var r = new ZrfMove(this.mode);
           r.serial = this.serial;
           var pos = 0;
           _.each(this.actions, function (action) {
              var x = [];
              _.each(_.range(3), function (ix) {
                 pos = pushItem(this, action[ix], l, pos);
              }, x);
              x.push(action[3]);
              if (isValidAction(x)) {
                  this.actions.push(x);
              }
           }, r);
           return r;
        }, this)
       .filter(isValidMove)
       .value();
  } else {
      return [ this ];
  }
}

ZrfMove.prototype.copy = function() {
  var r = new ZrfMove(this.mode);
  r.actions = _.filter(this.actions);
  r.serial  = this.serial;
  r.sound   = this.sound;
  return r;
}

ZrfMove.prototype.clone = function(level) {
  var r = new ZrfMove(this.mode);
  r.serial = this.serial;
  r.sound  = this.sound;
  var o = true;
  r.actions = _.chain(this.actions)
   .filter(function(action) {
        if ((action[0] !== null) && (action[1] !== null) && o) {
            if (Dagaz.Model.discardCascades) {
                o = false;
            }
            return true;
        }
        if (Dagaz.Model.forkMode || (Math.abs(action[3]) < level)) {
            return true;
        }
        return false;
    })
   .value();
  return r;
}

Dagaz.Model.moveToString = function(move, part) {
  if (move.actions.length == 0) {
      return "Pass";
  }
  var r = "";
  var l = "";
  var n = function(action) {
        var p = action[3];
        if (p < 0) {
            p = -p;
        }
        if (part == 0) {
            p = 0;
        }
        return (p == part);
  };
  _.chain(move.actions)
   .filter(n)
   .filter(function(action) {
       return (action[0] !== null) && (action[1] !== null) && 
              (action[0] != action[1]) && (action[0][0] != action[1][0]);
    })
   .each(function(action) {
       if (l !== action[0][0]) {
           if (r.length > 0) {
               r = r + " ";
           }
           r = r + Dagaz.Model.posToString(action[0][0]);
       }
       r = r + " - ";
       r = r + Dagaz.Model.posToString(action[1][0]);
       l = action[1][0];
    });
  _.chain(move.actions)
   .filter(n)
   .filter(function(action) {
       return (action[0] !== null) && (action[1] === null);
    })
   .each(function(action) {
       if (r.length > 0) {
           r = r + " ";
       }
       r = r + "x ";
       r = r + Dagaz.Model.posToString(action[0][0]);
       l = action[0][0];
    });
  _.chain(move.actions)
   .filter(n)
   .filter(function(action) {
       return (action[0] === null) && (action[1] !== null);
    })
   .each(function(action) {  
       if (r.length > 0) {
           r = r + " ";
       }
       if ((action[2] !== null)) {
           r = r + action[2][0].toString() + " ";
       }
       r = r + Dagaz.Model.posToString(action[1][0]);
       l = "";
    });
  return r;
}

ZrfMove.prototype.toString = function(part) {
  return Dagaz.Model.moveToString(this, part ? part : 0 );
}

ZrfMove.prototype.isAttacked = function(pos) {
  return _.chain(this.actions)
   .filter(function(action) {
       var fp = action[0];
       var tp = action[1];
       if ((fp !== null) && (fp[0] == pos) && (tp === null)) {
          return true;
       }
       if ((tp !== null) && (tp[0] == pos) && (fp !== null) && (fp[0] != tp[0])) {
          return true;
       }
       return false;
    })
   .size()
   .value() > 0;
}

ZrfMove.prototype.applyTo = function(obj, part) {
  if (!part) part = 1;
  var r = false;
  var n = function (action) {
      return (action[3] == part);
    };
  _.chain(this.actions)
   .filter(n)
   .filter(function (action) {
      return (action[0] !== null) && (action[1] !== null);
    })
   .each(function (action) {
      obj.movePiece(this, action[0][0], action[1][0], (action[2] === null) ? null : action[2][0], action[3]);
      r = true;
    }, this);
  _.chain(this.actions)
   .filter(n)
   .filter(function (action) {
      return (action[0] === null) && (action[1] !== null) && (action[2] !== null);
    })
   .each(function (action) {
      obj.dropPiece(this, action[1][0], action[2][0], action[3]);
      r = true;
    }, this);
  _.chain(this.actions)
   .filter(n)
   .filter(function (action) {
      return (action[0] !== null) && (action[1] === null);
    })
   .each(function (action) {
      obj.capturePiece(this, action[0][0], action[3]);
      r = true;
    }, this);
  _.chain(this.actions)
   .filter(n)
   .filter(function (action) {
      return (action[0] === null) && (action[1] === null) && (action[2] !== null);
    })
   .each(function (action) {
      if (!_.isUndefined(action[2][0].exec)) {
          action[2][0].exec(obj);
      }
    });
  if (r) {
      obj.commit(this);
  }
  return r;
}

ZrfMove.prototype.applyAll = function(obj) {
  var mx = _.chain(this.actions)
   .map(function(action) {
      return action[3];
    })
   .push(0)
   .max()
   .value();
  if (mx > 0) {
      _.chain(_.range(1, mx + 1))
       .each(function (part) {
          this.applyTo(obj, part);
       }, this);
  }
}

ZrfMove.prototype.movePiece = function(from, to, piece, part) {
  if (!part) part = 1;
  if (piece === null) {
      this.actions.push([ [from], [to], null, part]);
  } else {
      this.actions.push([ [from], [to], [piece], part]);
  }
}

ZrfMove.prototype.dropPiece = function(pos, piece, part) {
  if (!part) part = 1;
  this.actions.push([null, [pos], [piece], part]);
}

ZrfMove.prototype.capturePiece = function(pos, part) {
  if (!part) part = 1;
  this.actions.push([ [pos], null, null, part]);
}

ZrfMove.prototype.getTarget = function() {
  for (var i = 0; i < this.actions.length; i++) {
       var a = this.actions[i];
       if ((a[0] !== null) && (a[1] !== null)) {
           return a[1][0];
       }
  }
  return null;
}

ZrfMove.prototype.setLast = function(lastf, lastt, part) {
  if (!part) part = 1;
  this.actions.push([ null, null, [{
      exec: function(obj) {
          obj.lastf = lastf;
          obj.lastt = lastt;
      }
  }], part]);
}

ZrfMove.prototype.setReserve = function(type, player, value, part) {
  if (!part) part = 1;
  this.actions.push([ null, null, [{
      exec: function(obj) {
          if (obj.reserve) {
              obj.reserve[type][player] = value;
          }
      }
  }], part]);
}

ZrfMove.prototype.addReserve = function(type, player, value, part) {
  if (!part) part = 1;
  this.actions.push([ null, null, [{
      exec: function(obj) {
          if (obj.reserve) {
              obj.reserve[type][player] += value;
          }
      }
  }], part]);
}

ZrfMove.prototype.setValue = function(name, value, part) {
  if (!part) part = 1;
  this.actions.push([ null, null, [{
      exec: function(obj) {
          if (obj.setValue) {
              obj.setValue(name, value);
          }
      }
  }], part]);
}

ZrfMove.prototype.addValue = function(name, value, part) {
  if (!part) part = 1;
  this.actions.push([ null, null, [{
      exec: function(obj) {
          if (obj.getValue && obj.setValue) {
              var acc = obj.getValue(name);
              if (!acc) acc = 0;
              acc += value;
              obj.setValue(name, acc);
          }
      }
  }], part]);
}

ZrfMove.prototype.goTo = function(turn, part) {
  if (!part) part = 1;
  this.actions.push([ null, null, [{
      exec: function(obj) {
          var design = Dagaz.Model.design;
          if (!_.isUndefined(obj.turn) && !_.isUndefined(obj.player)) {
              obj.turn = turn;
              obj.player = design.currPlayer(turn);
          }
      }
  }], part]);
}

ZrfMove.prototype.playSound = function(ix, delay, part) {
  if (!part) part = 1;
  if (!_.isUndefined(Dagaz.Controller.play)) {
      this.actions.push([ null, null, [{
          exec: function() {
             if (_.isUndefined(delay)) {
                 Dagaz.Controller.play(ix);
             } else {
                 _.delay(Dagaz.Controller.play, delay, ix);
             }
          }
      }], part]);
  }
}

ZrfMove.prototype.isPass = function() {
  return this.actions.length == 0;
}

ZrfMove.prototype.clarify = function(move) {
  _.each(move.actions, function(s) {
      if ((s[0] !== null) && (s[1] !== null)) {
          _.each(this.actions, function(d) {
               if ((d[0] !== null) && (d[1] !== null) && (d[0][0] == s[0][0]) && (d[1][0] == s[1][0])) {
                    d[2] = s[2];
               }
          });
      }
  }, this);
}

ZrfMove.prototype.isSimpleMove = function() {
  return (this.actions.length == 1) && (this.actions[0][0] !== null) && (this.actions[0][1] !== null);
}

ZrfMove.prototype.isDropMove = function() {
  var r = false;
  for (var i = 0; i < this.actions.length; i++) {
       if ((this.actions[i][0] !== null) && (this.actions[i][1] !== null)) return false;
       if (this.actions[i][1] !== null) return true;
  }
  return r;
}

ZrfMove.prototype.isCaptureMove = function() {
  var r = false;
  for (var i = 0; i < this.actions.length; i++) {
       if (this.actions[i][1] !== null) return false;
       if (this.actions[i][0] !== null) return true;
  }
  return r;
}

ZrfMove.prototype.join = function(move) {
  _.each(move.actions, function(a) {
     this.actions.push(a);  
  }, this);
}

Dagaz.Model.getX = function(pos) {
  return pos % Dagaz.Model.WIDTH;
}

Dagaz.Model.getY = function(pos) {
  return (pos / Dagaz.Model.WIDTH) | 0;
}

Dagaz.Model.continue = function(design, board, str, result) {
  if (!_.isUndefined(result) && (result < 1)) return str;
  var re  = /^(\D*)(\d+)(.*)$/;
  var num = str.replace(re, "$2");
  if (num) {
      var len = num.length;
      num = +num + 1;
      while (num.toString().length < len) {
          num = "0" + num;
      }
      return str.replace(re, "$1" + num + "$3");
  }
  return null;
}

Dagaz.Model.getSetupSelector = function(val) {
  if (_.isUndefined(Dagaz.Model.setupSelector)) {
      var str = window.location.search.toString();
      var result = str.match(/[?&]selector=([^&]*)/);
      if (result) {
          Dagaz.Model.setupSelector = +result[1];
      }
  }
  if (_.isUndefined(Dagaz.Model.setupSelector)) {
      if (!_.isUndefined(val) && (val > 1)) {
          Dagaz.Model.setupSelector = _.random(1, val);
      } else {
          Dagaz.Model.setupSelector = 1;
      }
  }
  return Dagaz.Model.setupSelector;
}

ZrfDesign.prototype.setupSelector = function(val) {
  Dagaz.Model.maxSetupSelector = val;
  Dagaz.Model.getSetupSelector(val);
}

Dagaz.Model.getResourceSelector = function() {
  return Dagaz.Model.setupSelector;
}

})();
