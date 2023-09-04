(function() {

var horde = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 46, 47, 48, 49, 50, 51, 62, 63, 64, 65, 66, 67];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "surakarta-extension") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(2,  "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
    Dagaz.Controller.addSound(10, "../sounds/roll.wav", true);
}

var navigate = function(design, pos, dirs) {
  var r = design.navigate(1, pos, dirs.dir);
  if (r === null) {
      r = design.navigate(1, pos, dirs.alt);
      var d = dirs.dir; dirs.dir = dirs.alt; 
      dirs.alt = d;
  }
  return r;
}

var tryMove = function(design, board, pos, v, h) {
  var m = Dagaz.Model.createMove(0);
  m.hints = []; var dirs = { dir: v, alt: h};
  var f = true;
  var p = navigate(design, pos, dirs);
  while ((p !== null) && (p != pos)) {
      if (_.indexOf(horde, p) >= 0) {
          f = false;
      }
      var piece = board.getPiece(p);
      if (piece !== null) {
          if (piece.player == board.player) return null;
          if (f) return null;
          m.sound = 10;
          m.movePiece(pos, p, board.getPiece(pos));
          return m;
      }
      m.hints.push(p);
      var p = navigate(design, p, dirs);
  }
  return null;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece === null) || (piece.player != board.player)) return;
      var a = tryMove(design, board, pos, 8, 9);
      var b = tryMove(design, board, pos, 10, 11);
      if (a !== null) {
          board.moves.push(a);
      }
      if (b !== null) {
          if (a !== null) {
              if (a.actions[0][1][0] == b.actions[0][1][0]) return;
          }
          board.moves.push(b);
      }
      a = tryMove(design, board, pos, 9, 8);
      b = tryMove(design, board, pos, 11, 10);
      if (a !== null) {
          board.moves.push(a);
      }
      if (b !== null) {
          if (a !== null) {
              if (a.actions[0][1][0] == b.actions[0][1][0]) return;
          }
          board.moves.push(b);
      }
  });
  CheckInvariants(board);
}

})();
