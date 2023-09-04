(function() {

var DIRS = [
  [0, 1, 3], // se -> [se, s, e]
  [1, 2, 0], // s  -> [s, sw, se]
  [2, 1, 5], // sw -> [sw, s, w]
  [3, 0, 4], // e  -> [e, ne, se]
  [4, 7, 3], // ne -> [ne, n, e]
  [5, 6, 2], // w  -> [w, nw, sw]
  [6, 7, 5], // nw -> [nw, n, w]
  [7, 6, 4]  // n  -> [n, nw, ne]
];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "elementals-ice") {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.Done = function(design, board) {
  var ko = [];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      var v = piece.getValue(0);
      if (+v) {
          ko.push(pos);
      }
  });
  if (ko.length > 0) {
      board.ko = ko;
  }
}

var getStartPos = function(move) {
  for (var i = 0; i < move.actions.length; i++) {
       if ((move.actions[i][0] !== null) && (move.actions[i][1] !== null)) {
           return move.actions[i][0][0];
       }
  }
  return null;
}

var isCaptured = function(pos, move) {
  for (var i = 0; i < move.actions.length; i++) {
       if ((move.actions[i][0] !== null) && (move.actions[i][1] !== null)) {
            if (move.actions[i][1][0] == pos) return true;
       }
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 3) return;
      var pos = move.actions[0][0][0];
      var x = Dagaz.Model.getX(pos);
      var y = Dagaz.Model.getY(pos);
      pos = move.actions[0][1][0];
      if (board.getPiece(pos) !== null) return;
      var dx = Math.sign(Dagaz.Model.getX(pos) - x);
      var dy = Math.sign(Dagaz.Model.getY(pos) - y);
      var inc = (dy * Dagaz.Model.WIDTH) + dx;
      var dir = design.findDirection(pos - inc, pos);
      if (dir === null) return;
      _.each(DIRS[dir], function(d) {
          var p = design.navigate(1, pos, d);
          var piece = board.getPiece(p);
          if (piece === null) return;
          if (piece.player == board.player) return;
          piece = piece.setValue(0, pos + 1);
          move.movePiece(p, p, piece);
          move.sound = 10;
      });
  });
  _.each(board.moves, function(move) {
      var pos = getStartPos(move);
      if (pos === null) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      _.each(design.allPositions(), function(p) {
          if (isCaptured(p, move)) return;
          var piece = board.getPiece(p);
          if (piece === null) return;
          var v = piece.getValue(0);
          if (!v) return;
          if (v != pos + 1) return;
          piece = piece.setValue(0, null);
          move.movePiece(p, p, piece);
      });
      var v = piece.getValue(0);
      if (+v) {
          move.failed = true;
          return;
      }
      var captured = [];
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          if (a[1] === null) return;
          if (board.getPiece(a[1][0]) === null) return;
          captured.push(a[1][0]);
      });
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece === null) return;
          var v = piece.getValue(0);
          if (!v) return;
          if (_.indexOf(captured, v - 1) < 0) return;
          piece = piece.setValue(0, null);
          move.movePiece(pos, pos, piece);
      });
  });
  CheckInvariants(board);
}

})();
