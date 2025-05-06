(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "flippers-extension") {
     checkVersion(design, name, value);
  }
}

const ROTATE = [                                     
  [16, 12, 8, 4, 20, 13, 9, 0, 21, 17, 5, 1, 22, 18, 6, 2, 23, 14, 10, 3, 19, 15, 11, 7], // s = 0
  [13, 5, 18, 10, 8, 21, 2, 15, 16, 0, 23, 7, 4, 20, 3, 19, 12, 1, 22, 11, 9, 17, 6, 14], // e = 1
  [9, 17, 6, 14, 12, 1, 22, 11, 4, 20, 3, 19, 16, 0, 23, 7, 8, 21, 2, 15, 13, 5, 18, 10], // w = 2
  [7, 11, 15, 19, 3, 10, 14, 23, 2, 6, 18, 22, 1, 5, 17, 21, 0, 9, 13, 20, 4, 8, 12, 16]  // n = 3
];

Dagaz.View.getRotate = function(move) {
  const pos = +move.actions[0][0][0];
  let a = null; let o = null;
  if (move.mode == 0) a = new THREE.Vector3(1,  0,  0).normalize();
  if (move.mode == 1) a = new THREE.Vector3(0,  0, -1).normalize();
  if (move.mode == 2) a = new THREE.Vector3(0,  0,  1).normalize();
  if (move.mode == 3) a = new THREE.Vector3(-1, 0,  0).normalize();
  let m = move.mode;
  if ((m == 0) || (m == 3)) {
      if (_.indexOf([3, 4, 5], pos) >= 0) m = (m == 0) ? 3 : 0;
      o = new THREE.Vector3(0,  0.5, (m == 0) ? -4.2 : 4.2);
  } else {
      if (_.indexOf([1, 4, 7], pos) >= 0) m = (m == 1) ? 2 : 1;
      o = new THREE.Vector3((m == 1) ? -4.2 : 4.2, 0.5, 0);
  }
  return {
      axis: a,
      offset: o
  };
}

Dagaz.View.getMove = function(camera, x, y, z, pos, board) {
  for (let i = 0; i < board.moves.length; i++) {
      const m = board.moves[i];
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

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(m) {
      if (!m.isSimpleMove()) return;
      var pos = m.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      m.actions[0][2] = [ piece.promote(ROTATE[m.mode][piece.type]) ];
  });
  CheckInvariants(board);
}

})();
