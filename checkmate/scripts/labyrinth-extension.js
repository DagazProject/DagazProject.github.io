(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "labyrinth-extension") {
     checkVersion(design, name, value);
  }
}

var addSlide = function(design, board, pos, dir, positions) {
  var p = design.navigate(board.player, pos, dir);
  while (p !== null) {
      if (board.getPiece(p) !== null) return;
      if (_.indexOf(positions, p) < 0) {
          positions.push(p);
      }
      p = design.navigate(board.player, p, dir);
  }
}

var addStep = function(design, board, pos, dir, positions) {
  var p = design.navigate(board.player, pos, dir);
  if (p === null) return;
  if (board.getPiece(p) !== null) return;
  if (_.indexOf(positions, p) < 0) {
      positions.push(p);
  }
}

var animate = function(design, view, pos, src, dst, move) {
  var p = view.root.findAndLocate(pos);
  var s = view.root.findAndLocate(src);
  var d = view.root.findAndLocate(dst);
  if ((s === null) || (d === null)) return;
  var dx = ((d.x - s.x) / Dagaz.View.STEP_CNT) | 0; var x = s.x;
  var dy = ((d.y - s.y) / Dagaz.View.STEP_CNT) | 0; var y = s.y;
  for (var i = 0; i < Dagaz.View.STEP_CNT; i++) {
      x += dx; y += dy;
      move.hints.push({
           x: x - p.x,
           y: y - p.y
      });
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var view   = Dagaz.Controller.app.view;
  var moves  = [];
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != board.player) return;
      _.each(design.allPositions(), function(p) {
          if (p === pos) return;
          var piece = board.getPiece(p);
          if (piece === null) return;
          if (piece.player != board.player) return;
          if (piece.type != 0) return;
          var positions = [];
          if (_.indexOf([1, 4], move.mode) >= 0) {
              addSlide(design, board, p,  8, positions);
              addSlide(design, board, p,  9, positions);
              addSlide(design, board, p, 10, positions);
              addSlide(design, board, p, 11, positions);
          }
          if (_.indexOf([3, 4], move.mode) >= 0) {
              addSlide(design, board, p, 12, positions);
              addSlide(design, board, p, 13, positions);
              addSlide(design, board, p, 14, positions);
              addSlide(design, board, p, 15, positions);
          }
          if (move.mode == 2) {
              addStep(design, board, p, 16, positions);
              addStep(design, board, p, 17, positions);
              addStep(design, board, p, 18, positions);
              addStep(design, board, p, 19, positions);
              addStep(design, board, p, 20, positions);
              addStep(design, board, p, 21, positions);
              addStep(design, board, p, 22, positions);
              addStep(design, board, p, 23, positions);
          }
          if (move.mode == 5) {
              addStep(design, board, p,  8, positions);
              addStep(design, board, p,  9, positions);
              addStep(design, board, p, 10, positions);
              addStep(design, board, p, 11, positions);
              addStep(design, board, p, 12, positions);
              addStep(design, board, p, 13, positions);
              addStep(design, board, p, 14, positions);
              addStep(design, board, p, 15, positions);
          }
          _.each(positions, function(q) {
              var m = Dagaz.Model.createMove(move.mode);
              m.movePiece(move.actions[0][0][0], q, move.actions[0][2][0]);
              m.hints = [];
              animate(design, view, move.actions[0][0][0], move.actions[0][0][0], move.actions[0][1][0], m);
              animate(design, view, move.actions[0][0][0], p, q, m);
              moves.push(m);
          });
      });
      move.failed = true;
  });
  _.each(moves, function(move) {
      board.moves.push(move);
  });
  CheckInvariants(board);
}

})();
