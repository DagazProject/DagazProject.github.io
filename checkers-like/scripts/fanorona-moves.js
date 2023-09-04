(function() {

Dagaz.Controller.loseRefresh = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.AI.veloPlayer = null;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "fanorona-moves") {
     Dagaz.AI.veloPlayer = value;
  } else {
     checkVersion(design, name, value);
  }
}

Dagaz.Model.continue = function(design, board, text, goal) {
  if (goal < 0) {
      return "fanorona-velo-white.htm";
  } else {
      return "fanorona-velo-black.htm";
  }
}

var checkDual = function(design, board, pos, dir) {
  var p = design.navigate(1, pos, dir);
  if (p === null) return false;
  if (board.getPiece(p) !== null) return false;
  var t = design.navigate(1, p, dir);
  if (t === null) return false;
  var piece = board.getPiece(t);
  if (piece === null) return false;
  if (piece.player == board.player) return false;
  t = design.navigate(0, pos, dir);
  if (t === null) return false;
  piece = board.getPiece(t);
  if (piece === null) return false;
  return piece.player != board.player;
}

var calcDual = function(stack, n) {
  var r = 1;
  for (var i = 0; i <= n; i++) {
      if (stack[i].isDual) r++;
  }
  return r;
}

var checkVelo = function(design, board, move) {
  if (Dagaz.AI.veloPlayer === null) return true;
  cnt = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player == Dagaz.AI.veloPlayer) return;
      cnt++;
  });
  if (cnt <= 5) return true;
  var captured = 0;
  _.each(move.actions, function(a) {
      if (a[0] === null) return;
      if (a[1] !== null) return;
      captured++;
  });
  if (Dagaz.AI.veloPlayer == board.player) {
      return captured != 1;
  } else {
      return captured == 0;
  }
}

var genCaptures = function(design, board, pos, piece, isReversed, history, stack, restricted) {
  var enemy = Dagaz.Model.createPiece(0, design.nextPlayer(board.player));
  _.each(design.allDirections(), function(dir) {
      if (!_.isUndefined(restricted) && (restricted == dir)) return;
      var p = design.navigate(1, pos, dir);
      if (p === null) return;
      if (_.indexOf(history, p) >= 0) return;
      if (board.getPiece(p) !== null) return;
      var t = design.navigate(1, p, dir);
      if (isReversed) {
          t = design.navigate(0, pos, dir);
      }
      if (t === null) return;
      var x = board.getPiece(t);
      if (x === null) return;
      if (x.player == board.player) return;
      history.push(p);
      var s = {
          from: pos,
          to: p,
          isDual: checkDual(design, board, pos, dir),
          capturing: []
      };
      while ((x !== null) && (x.player != board.player)) {
          s.capturing.push(t);
          board.setPiece(t, null);
          t = design.navigate(isReversed ? 0 : 1, t, dir);
          if (t === null) break;
          x = board.getPiece(t);
      }
      stack.push(s);
      var m = Dagaz.Model.createMove(0);
      for (var i = 0; i < stack.length; i++) {
          var rn = calcDual(stack, i - 1);
          m.movePiece(stack[i].from, stack[i].to, piece, i + rn);
          rn = calcDual(stack, i);
          _.each(stack[i].capturing, function(t) {
               m.capturePiece(t, i + rn);
          });
      }
      if (checkVelo(design, board, m)) {
          board.moves.push(m);
      }
      genCaptures(design, board, p, piece, false, history, stack, dir);
      genCaptures(design, board, p, piece, true, history, stack, dir);
      _.each(s.capturing, function(t) {
          board.setPiece(t, enemy);
      });
      stack.pop();
      history.pop();
  });
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  board.moves = [];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != board.player) return;
      genCaptures(design, board, pos, piece, false, [pos], []);
      genCaptures(design, board, pos, piece, true, [pos], []);
  });
  if (board.moves.length == 0) {
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece === null) return;
          if (piece.player != board.player) return;
          _.each(design.allDirections(), function(dir) {
              var p = design.navigate(1, pos, dir);
              if (p === null) return;
              if (board.getPiece(p) !== null) return;
              var m = Dagaz.Model.createMove(1);
              m.movePiece(pos, p, piece);
              board.moves.push(m);
          });
      });
  }
  CheckInvariants(board);
}

})();
