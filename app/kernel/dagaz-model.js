import Dagaz from './dagaz.js';
import _ from 'underscore';

Dagaz.Model.passTurn        = 0;
Dagaz.Model.passPartial     = false;
Dagaz.Model.sharedPieces    = false;
Dagaz.Model.smartFrom       = false;
Dagaz.Model.smartTo         = false;
Dagaz.Model.recycleCaptures = false;
Dagaz.Model.sharedDesign    = true;

function Design() {
   this.directions = [];
   this.players    = [];
   this.symmetries = [];
   this.positions  = [];
   this.zones      = [];
   this.znames     = [];
   this.modes      = [];
   this.graph      = [];
   this.attrs      = [];
   this.graph.push([]);
}

Dagaz.Model.BuildDesign = function(design, player) {}

var getDesign = function(player) {
   if (_.isUndefined(Dagaz.Model.design)) {
       Dagaz.Model.design = [];
   }
   var ix = player - 1;
   if (Dagaz.Model.sharedDesign) {
       ix = 0;
   }
   if (_.isUndefined(Dagaz.Model.design[ix])) {
       Dagaz.Model.design[ix] = new Design();
       Dagaz.Model.BuildDesign(Dagaz.Model.design[ix], player);
   }
   return Dagaz.Model.design[ix];
}

Design.prototype.createMove = function(mode) {
   return new Move(mode);
}

Dagaz.Model.setOption = function(design, name, value) {
   if (name == "shared-design") {
       if (value == "false") {
           Dagaz.Model.sharedDesign = false;
       }
       return;
   }
   if (name == "pass-turn") {
       if (value == "true") {
           Dagaz.Model.passTurn = 1;
       }
       if (value == "forced") {
           Dagaz.Model.passTurn = 2;
       }
       return;
   }
   if (name == "pass-partial") {
       Dagaz.Model.passPartial = (value == "true");
       return;
   }
   if (name == "shared-pieces") {
       Dagaz.Model.sharedPieces = (value == "true");
       return;
   }
   if (name == "smart-moves") {
       if ((value == "from") || (value == "true")) {
           Dagaz.Model.smartFrom = true;
       }
       if ((value == "to") || (value == "true")) {
           Dagaz.Model.smartTo = true;
       }
       return;
   }
   if (name == "recycle-captures") {
       Dagaz.Model.recycleCaptures = (value == "true");
       return;
   }
   console.warn("Option [" + name + " = " + value + "] not supported.");
}

Design.prototype.setOption = function(name, value) {
   Dagaz.Model.setOption(this, name, value);
}

Design.prototype.op = Design.prototype.setOption;

Design.prototype.addDirection = function(name) {
   this.directions.push(name);
}

Design.prototype.di = Design.prototype.addDirection;

Design.prototype.addPosition = function(name, dirs) {
   this.positions.push(name);
   if (!_.isArray(dirs)) {
       console.error("Direction list for [" + name + "] position is not array.");
   }
   this.graph(dirs);
}

Design.prototype.ps = Design.prototype.addPosition;

Design.prototype.addPlayer = function(name, dirs) {
   this.players.push(name);
   if (!_.isArray(dirs)) {
       console.error("Symmetry for [" + name + "] player is not array.");
   }
   this.symmetries.push(dirs);
}

Design.prototype.pl = Design.prototype.addPlayer;

Design.prototype.allDirections = function() {
   return _.range(this.directions.length);
}

Design.prototype.allPositions = function() {
   return _.range(1, this.graph.length);
}

Design.prototype.posToString = function(pos) {
   if (pos < this.positions.length) {
       return this.positions[pos];
   } else {
       return "?";
   }
}

Design.prototype.stringToPos = function(name) {
   var pos = _.indexOf(this.positions, name);
   if (pos < 0) {
       return null;
   } else {
       return pos;
   }
}

Design.prototype.opposite = function(dir) {
   if (this.symmetries.length == 0) return null;
   if (this.symmetries[0].length <= dir) return null;
   return this.symmetries[0][dir];
}

Design.prototype.navigate = function(player, pos, dir) {
   if (_.isUndefined(this.graph[pos]) || _.isUndefined(this.graph[pos][dir])) {
       console.warn("Invalid parameters in [design.navigate] pos = [" + pos + "], dir = [" + dir + "]");
   }
   if (this.graph[pos][dir] != 0) {
       return +pos + this.graph[pos][dir];
   } else {
       return null;
   }
}

Design.prototype.addZone = function(name, player, positions) {
   if (!_.isArray(positions)) {
       console.error("Positions for [" + name + "/" + player + "] zone is not array.");
   }
  var zone = _.indexOf(this.znames, name);
  if (zone < 0) {
      zone = this.znames.length;
      this.znames.push(name);
  }
  if (_.isUndefined(this.zones[zone])) {
      this.zones[zone] = [];
  }
  this.zones[zone][player] = positions;
}

Design.prototype.zn = Design.prototype.addZone;

Design.prototype.inZone = function(player, pos, zone) {
  if (!_.isUndefined(this.zones[zone]) && !_.isUndefined(this.zones[zone][player])) {
      return _.indexOf(this.zones[zone][player], pos) >= 0;
  } else {
      return false;
  }
}

Design.prototype.addPriority = function(modes) {
  if (_.isArray(modes)) {
      this.modes.push(modes);
  } else {
      this.modes.push([modes]);
  }
}

Design.prototype.pr = Design.prototype.addPriority;

Design.prototype.addAttribute = function(type, name, val) {
  if (_.isUndefined(this.attrs[name])) {
      this.attrs[name] = [];
  }
  this.attrs[name][type] = val;
}

Design.prototype.at = Design.prototype.addAttribute;

function Move(mode) {
   this.mode  = mode;
   this.parts = [];
   this.part  = 0;
}

Move.prototype.isPass = function() {
   return this.parts.length == 0;
}

Move.prototype.closePart = function() {
   if (!_.isUndefined(this.current)) {
       console.warn("Move [" + this.toString() + "] is not completed");
   }
   this.part++;
}

Move.prototype.getPart = function() {
   if (_.isUndefined(this.parts[this.part])) {
       this.parts[this.part] = [];
   }
   return this.parts[this.part];
}

Move.prototype.capturePiece = function(pos) {
   var part = this.getPart();
   part.push(new Action(pos));
}

Move.prototype.dropPiece = function(pos, pieces) {
   var part = this.getPart();
   if (_.isArray(pieces)) {
       part.push(new Action(null, pos, pieces));
   } else {
       part.push(new Action(null, pos, [pieces]));
   }
}

Move.prototype.startMove = function(pos) {
   var part = this.getPart();
   this.current = new Action(pos);
   part.push(this.current);
}

Move.prototype.endMove = function(pos, pieces) {
   if (!_.isUndefined(this.current)) {
       this.current.to = pos;
       if (_.isArray(pieces)) {
           this.current.pieces = pieces;
       } else {
           this.current.pieces = [pieces];
       }
       delete this.current;
   }
}

function Action(from, to, pieces) {
   this.from = from;
   this.to   = _.isUndefined(to) ? null : to;
   if (!_.isUndefined(pieces)) {
       this.pieces = pieces;
   }
}

Action.prototype.isMove = function() {
   return (this.from !== null) && (this.to !== null);
}

Action.prototype.isCapture = function() {
   return (this.from !== null) && (this.to === null);
}

Action.prototype.isDrop = function() {
   return (this.from === null) && (this.to !== null);
}

export default getDesign;
