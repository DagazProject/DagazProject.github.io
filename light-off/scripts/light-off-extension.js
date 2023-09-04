(function() {

var wazirMode  = false;
var fersMode   = false;
var knightMode = false;
var rookMode   = false;
var bishopMode = false;
var hexMode    = false;

if (!_.isUndefined(Dagaz.Controller.play)) {
    Dagaz.Controller.addSound(Dagaz.Sounds.move, "../sounds/off.wav");
    Dagaz.Controller.addSound(Dagaz.Sounds.drop, "../sounds/on.wav");
    Dagaz.Controller.addSound(Dagaz.Sounds.win,  "../sounds/win.wav");
}

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "light-off-extension") {
      if (value == "wazir") {
          wazirMode = true;
      }
      if (value == "fers") {
          fersMode = true;
      }
      if (value == "king") {
          wazirMode = true;
          fersMode = true;
      }
      if (value == "knight") {
          knightMode = true;
      }
      if (value == "rook") {
          rookMode = true;
      }
      if (value == "bishop") {
          bishopMode = true;
      }
      if (value == "queen") {
          rookMode = true;
          bishopMode = true;
      }
      if (value == "hex") {
          hexMode = true;
      }
  } else {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var positions = _.chain(design.allPositions())
   .filter(function(pos) {
       return board.getPiece(pos) !== null;
    })
   .filter(function(pos) {
       return board.getPiece(pos).type == 0;
    })
   .value();
  if (positions.length == 0) {
      return 1;
  } else {
      return checkGoals(design, board, player);
  }
}

Dagaz.Model.moveToString = function(move) {
  if (move.actions[0]) {
      var action = move.actions[0];
      return Dagaz.Model.posToString(action[0][0]);
  }
  return "";
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var slide = [];
  if (rookMode) {
      slide.push(design.getDirection("n"));
      slide.push(design.getDirection("w"));
      slide.push(design.getDirection("s"));
      slide.push(design.getDirection("e"));
  }
  if (bishopMode) {
      slide.push(design.getDirection("nw"));
      slide.push(design.getDirection("sw"));
      slide.push(design.getDirection("se"));
      slide.push(design.getDirection("ne"));
  }
  var step = [];
  if (wazirMode) {
      step.push(design.getDirection("n"));
      step.push(design.getDirection("w"));
      step.push(design.getDirection("s"));
      step.push(design.getDirection("e"));
  }
  if (fersMode) {
      step.push(design.getDirection("nw"));
      step.push(design.getDirection("sw"));
      step.push(design.getDirection("se"));
      step.push(design.getDirection("ne"));
  }
  if (knightMode) {
      step.push(design.getDirection("nne"));
      step.push(design.getDirection("nee"));
      step.push(design.getDirection("nnw"));
      step.push(design.getDirection("nww"));
      step.push(design.getDirection("sse"));
      step.push(design.getDirection("see"));
      step.push(design.getDirection("ssw"));
      step.push(design.getDirection("sww"));
  }
  if (hexMode) {
      step.push(design.getDirection("nw"));
      step.push(design.getDirection("ne"));
      step.push(design.getDirection("s"));
  }
  _.each(board.moves, function(move) {
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece !== null) {
          move.sound = piece.type;
      }
      _.each(slide, function(dir) {
           var p = design.navigate(board.player, pos, dir);
           while (p !== null) {
               var piece = board.getPiece(p);
               if (piece !== null) {
                   move.movePiece(p, p, piece.promote(piece.type == 0 ? 1 : 0));
               }
               p = design.navigate(board.player, p, dir);
           }
      });
      _.each(step, function(dir) {
           var p = design.navigate(board.player, pos, dir);
           if (p !== null) {
               var piece = board.getPiece(p);
               if (piece !== null) {
                   move.movePiece(p, p, piece.promote(piece.type == 0 ? 1 : 0));
               }
           }
      });
  });
  CheckInvariants(board);
}

})();
