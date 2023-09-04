(function() {

Dagaz.AI.AI_FRAME     = 1000;
Dagaz.AI.MIN_DEEP     = 5;
Dagaz.AI.MAX_DEEP     = 20;
Dagaz.AI.CHECK_GOALS  = true;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.moveToString = function(move) {
  var r = "";
  for (var i = 0; i < move.actions.length; i++) {
      var a = move.actions[i];
      if (a[0] === null) continue;
      if (a[1] === null) continue;
      r = Dagaz.Model.posToString(a[0][0]) + Dagaz.Model.posToString(a[1][0]);
      break;
  }
  return r;
}

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "doubutsu-shogi-extension") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(2,  "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
}

var checkKing = function(design, board, player, pos, dir, type, list) {
  if (_.indexOf(list, +type) < 0) return false;
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  return piece.type == 0;
}

var checkPos = function(design, board, player, pos, dir, type, list, acc) {
  if (_.indexOf(list, +type) < 0) return false;
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  acc.push(p);
}

var checkDirection = function(design, board, player, pos, dir, types, from) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return 0;
  if (from) {
      if (p == from) return 0;
  }
  var piece = board.getPiece(p);
  if (piece == null) return 0;
  if (_.indexOf(types, +piece.type) < 0) return 0;
  if (piece.player != player) {
      return 1;
  } else {
      return -1;
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  board.generate();
  if (board.moves.length == 0) {
      if (board.player != player) {
          return 1;
      } else {
          return -1;
      }
  }
  return checkGoals(design, board, player);
}

var findPiece = function(design, board, player, type) {
  var positions = design.allPositions();
  for (var i = 0; i < positions.length; i++) {
       var piece = board.getPiece(positions[i]);
       if ((piece !== null) && (piece.type == type) && (piece.player == player)) {
           return positions[i];
       }
  }
  return null;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("King");
  var za     = design.getPieceType("Za");
  var sang   = design.getPieceType("Sang");
  var jang   = design.getPieceType("Jang");
  var hu     = design.getPieceType("Hu");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      var pos = findPiece(design, b, board.player, king);
      if (pos === null) {
          move.failed = true;
          return;
      }
      if ((checkDirection(design, b, board.player, pos, n,  [king, za, jang, hu]) > 0) ||
          (checkDirection(design, b, board.player, pos, s,  [king, jang, hu]) > 0) ||
          (checkDirection(design, b, board.player, pos, w,  [king, jang, hu]) > 0) ||
          (checkDirection(design, b, board.player, pos, e,  [king, jang, hu]) > 0) ||
          (checkDirection(design, b, board.player, pos, nw, [king, sang, hu]) > 0) ||
          (checkDirection(design, b, board.player, pos, ne, [king, sang, hu]) > 0) ||
          (checkDirection(design, b, board.player, pos, sw, [king, sang]) > 0) ||
          (checkDirection(design, b, board.player, pos, se, [king, sang]) > 0)) {
          move.failed = true;
          return;
      }
      if ((move.actions.length == 1) && (move.actions[0][0] !== null) && (move.actions[0][1] !== null)) {
          var from  = move.actions[0][0][0];
          var to    = move.actions[0][1][0];
          var piece = board.getPiece(from);
          if ((piece !== null) && (piece.type == za)) {
              var pos = design.navigate(board.player, from, n);
              if (pos != to) {
                  pos = design.navigate(board.player, to, n);
                  if (pos === null) {
                      move.failed = true;
                  }
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
