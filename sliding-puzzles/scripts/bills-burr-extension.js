(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "bills-burr-extension") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
}

function getDir(x, y, z) {
  if (z >  0.9) return 3;
  if (z < -0.9) return 0;
  if (y >  0.9) return 5;
  if (y < -0.9) return 4;
  if (x >  0.9) return 2;
  if (x < -0.9) return 1;
  return -1;
}

var getMovesFromPos = function(board, pos) {
  var r = [];
  _.each(board.moves, function(move) {
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          if (a[0][0] != pos) return;
          r.push(move);
      });
  });
  return r;
}

Dagaz.View.getMove = function(camera, x, y, z, pos, board) {
  var dir = getDir(x, y, z);
  var moves = getMovesFromPos(board, pos);
  var r = null;
  _.each(moves, function(move) {
      if (move.mode != dir) return;
      r = move;
  });
  return r;
}

var getPositions = function(design, board, type) {
  var r = [];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type == type) r.push(pos);
  });
  return r;
}

var createMove = function(design, board, positions, dir) {
  var m = Dagaz.Model.createMove(dir);
  for (var i = 0; i < positions.length; i++) {
       var pos = positions[i];
       var piece = board.getPiece(pos);
       if (piece === null) return null;
       var p = design.navigate(1, pos, dir);
       if (p === null) return null;
       var target = board.getPiece(p);
       if (target !== null) {
           if (target.type != piece.type) return null;
       }
       m.movePiece(pos, p, piece);
  }
  return m;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  for (var t = 0; t < 6; t++) {
       var positions = getPositions(design, board, t);
       if (positions.length == 0) continue;
       for (var dir = 0; dir < 6; dir++) {
            var m = createMove(design, board, positions, dir);
            if (m !== null) {
                board.moves.push(m);
            }
       }
  }
  CheckInvariants(board);
}

})();
