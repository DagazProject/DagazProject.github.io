(function() {

Dagaz.View.SPEED      = 0.450;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "rubik-3x3x3-extension") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../../sounds/slide.ogg", true);
}

const ROTATE = [                                     
  [7, 11, 15, 19, 3, 10, 14, 23, 2, 6, 18, 22, 1, 5, 17, 21, 0, 9, 13, 20, 4, 8, 12, 16],
  [16, 12, 8, 4, 20, 13, 9, 0, 21, 17, 5, 1, 22, 18, 6, 2, 23, 14, 10, 3, 19, 15, 11, 7],
  [13, 5, 18, 10, 8, 21, 2, 15, 16, 0, 23, 7, 4, 20, 3, 19, 12, 1, 22, 11, 9, 17, 6, 14],
  [9, 17, 6, 14, 12, 1, 22, 11, 4, 20, 3, 19, 16, 0, 23, 7, 8, 21, 2, 15, 13, 5, 18, 10],
  [1, 3, 0, 2, 6, 4, 7, 5, 9, 11, 8, 10, 14, 12, 15, 13, 17, 19, 16, 18, 22, 20, 23, 21],
  [2, 0, 3, 1, 5, 7, 4, 6, 10, 8, 11, 9, 13, 15, 12, 14, 18, 16, 19, 17, 21, 23, 20, 22],
];

Dagaz.View.getAxis = function(move) {
  if (move.mode == 0) return new THREE.Vector3(-1, 0,  0).normalize();
  if (move.mode == 3) return new THREE.Vector3(0,  0,  1).normalize();
  return null;
}

function getDir(x, z) {
  if (z >  0.9) return 0;
  if (z < -0.9) return 0;
  if (x >  0.9) return 3;
  if (x < -0.9) return 3;
  return -1;
}

Dagaz.View.getMove = function(camera, x, y, z, pos, board) {
  const mode = getDir(x, z);
  if (mode < 0) return null;
  for (let i = 0; i < board.moves.length; i++) {
     const m = board.moves[i];
     if (m.mode != mode) continue;
     for (let j = 0; j < m.actions.length; j++) {
          if (j > 3) break;
          const a = m.actions[j];
          if (a[0] === null) continue;
          if (a[1] === null) continue;
          if (a[0][0] == pos) return m;
     }
  }
  return null;
}

function rotate(piece, dir) {
  const t = ROTATE[dir][piece.type];
  return piece.promote(ROTATE[dir][t]);
}

function gen(board, dir, a1, a2, a3) {
  const m = Dagaz.Model.createMove(dir);
  m.movePiece(a1, a2, rotate(board.getPiece(a1), dir));
  m.movePiece(a2, a1, rotate(board.getPiece(a2), dir));
  m.movePiece(a3, a3, rotate(board.getPiece(a3), dir));
  board.moves.push(m);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;

  gen(board, 0, 8, 2, 5);
  gen(board, 0, 7, 1, 4);
  gen(board, 0, 6, 0, 3);

  gen(board, 3, 8, 6, 7);
  gen(board, 3, 5, 3, 4);
  gen(board, 3, 2, 0, 1);

  CheckInvariants(board);
}

})();
