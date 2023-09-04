(function() {

Dagaz.View.HINT_STEPS = 2;

var N = 19;
var E = 13;
var S = 16;
var W = 10;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "terrace-extension") {
      checkVersion(design, name, value);
  }
}

var addMove = function(design, board, pos, piece, d, a) {
  var hints = [];
  var p = design.navigate(1, pos, d);
  var last = pos;
  while (p !== null) {
      var t = board.getPiece(p);
      var q = design.navigate(1, p, 22);
      if (q !== null) {
          hints.push(q);
      }
      if ((t !== null) && (t.player != board.player)) break;
      last = p;
      p = design.navigate(1, p, d);
  }
  p = design.navigate(1, last, a);
  while (p !== null) {
      var t = board.getPiece(p);
      if (t === null) {
          var m = Dagaz.Model.createMove(0, 1);
          m.movePiece(pos, p, piece);
/*        m.hints = [];
          _.each(hints, function(h) {
              m.hints.push(h);
          });*/
          board.moves.push(m);
      } else {
          if (t.player != board.player) break;
      }
      hints.push(p);
      p = design.navigate(1, p, a);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != board.player) return;
      addMove(design, board, pos, piece, N, E);
      addMove(design, board, pos, piece, N, W);
      addMove(design, board, pos, piece, S, E);
      addMove(design, board, pos, piece, S, W);
      addMove(design, board, pos, piece, E, N);
      addMove(design, board, pos, piece, E, S);
      addMove(design, board, pos, piece, W, N);
      addMove(design, board, pos, piece, W, S);
  });
  CheckInvariants(board);
}

})();
