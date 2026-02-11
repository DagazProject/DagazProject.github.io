(function() {

Dagaz.View.NO_PIECE = 0;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "3d-maze-extension") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(1, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(2, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(3, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(4, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(5, "../sounds/slide.ogg", true);
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  if ((board.getPiece(12) !== null) && (board.getPiece(141) !== null) && (board.getPiece(262) !== null)) {
      return 1;
  }
  return checkGoals(design, board, player);
}

function getMode(x, y, z) {
  if (z >  0.9) return 0;
  if (z < -0.9) return 1;
  if (y >  0.9) return 2;
  if (y < -0.9) return 3;
  if (x >  0.9) return 4;
  if (x < -0.9) return 5;
  return -1;
}

var getPlanes = function(mode) {
  if (mode == 0) return [0, 1];
  if (mode == 1) return [0, 1];
  if (mode == 2) return [1, 2];
  if (mode == 3) return [1, 2];
  if (mode == 4) return [0, 2];
  if (mode == 5) return [0, 2];
  return [];
}

var getDir = function(mode, plane) {
  if (mode == 0 && plane == 0) return 3; // n
  if (mode == 0 && plane == 1) return 3; // n
  if (mode == 1 && plane == 0) return 0; // s
  if (mode == 1 && plane == 1) return 0; // s
  if (mode == 2 && plane == 1) return 2; // w
  if (mode == 2 && plane == 2) return 3; // n
  if (mode == 3 && plane == 1) return 1; // e
  if (mode == 3 && plane == 2) return 0; // s
  if (mode == 4 && plane == 0) return 2; // w
  if (mode == 4 && plane == 2) return 2; // w
  if (mode == 5 && plane == 0) return 1; // e
  if (mode == 5 && plane == 2) return 1; // e
  return null;
}

var getPosition = function(board, ix) {
  for (var pos = ix * 121; pos < (ix + 1) * 121; pos++) {
       var piece = board.getPiece(pos);
       if (piece !== null && piece.type > 0) return pos;
  }
  return null;
}

Dagaz.View.getMove = function(camera, x, y, z, pos, board) {
  const mode = getMode(x, y, z);
  if (mode < 0) return null;
  for (let i = 0; i < board.moves.length; i++) {
       const m = board.moves[i];
       if (m.mode == mode) {
           return m;
       }
  }
  return null;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  for (var mode = 0; mode < 6; mode++) {
       var m = Dagaz.Model.createMove(mode);
       const planes = getPlanes(mode);
       _.each(planes, function(ix) {
             const dir = getDir(mode, ix);
             if (dir === null) return;
             var pos = getPosition(board, ix);
             if (pos === null) return;
             var p = design.navigate(1, pos, dir);
             if (p === null) return;
             if (board.getPiece(p) !== null) return;
             var piece = board.getPiece(pos);
             if (piece === null) return;
             m.movePiece(pos, p, piece);
       });
       if (m.actions.length == 2) {
           board.moves.push(m);
       }
  }
  CheckInvariants(board);
}

})();
