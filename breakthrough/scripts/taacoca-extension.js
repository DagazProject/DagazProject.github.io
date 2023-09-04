(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "taacoca-extension") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(2,  "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
}

Dagaz.Model.blinkFailed = function(self) {
  var r = true;
  if (!_.isUndefined(self.blink)) {
      _.each(self.moves, function(move) {
         var f = true;
         var starts = _.map(move.actions, function(a) {
             return a[0][0];
         });
         _.each(self.blink, function(pos) {
             if (_.indexOf(starts, pos) < 0) f = false;
         }, self);
         if (f) r = false;
      }, self);
  }
  return r;
}

Dagaz.Model.closure = function(board, move, group) {
  return group;
}

var isBadPair = function(design, a, b) {
  if (!a.isSimpleMove()) return true;
  if (!b.isSimpleMove()) return true;
  if (a.actions[0][0][0] == b.actions[0][0][0]) return true;
  var p = design.findDirection(a.actions[0][0][0], a.actions[0][1][0]);
  if (p === null) return true;
  var q = design.findDirection(b.actions[0][0][0], b.actions[0][1][0]);
  if (q === null) return true;
  return p != q;
}

var isDiscarded = function(design, board, i, j, k) {
  if (isBadPair(design, board.moves[i], board.moves[j])) return true;
  if (!_.isUndefined(k)) {
      if (isBadPair(design, board.moves[i], board.moves[k])) return true;
      if (isBadPair(design, board.moves[j], board.moves[k])) return true;
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var moves  = [];
  var cnt = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player == board.player)) cnt++;
  });
  for (var i = 0; i < board.moves.length; i++) {
      if (cnt > 1) {
          for (var j = i + 1; j < board.moves.length; j++) {
              if (isDiscarded(design, board, i, j)) continue;
              if (cnt > 2) {
                  for (var k = j + 1; k < board.moves.length; k++) {
                      if (isDiscarded(design, board, i, j, k)) continue;
                      var move = Dagaz.Model.createMove(board.moves[i].mode);
                      move.actions.push(board.moves[i].actions[0]);
                      move.actions.push(board.moves[j].actions[0]);
                      move.actions.push(board.moves[k].actions[0]);
                      moves.push(move);
                  }
              } else {
                  var move = Dagaz.Model.createMove(board.moves[i].mode);
                  move.actions.push(board.moves[i].actions[0]);
                  move.actions.push(board.moves[j].actions[0]);
                  moves.push(move);
              }
          } 
      } else {
          moves.push(board.moves[i]);
      }
  }  
  board.moves = moves;
  CheckInvariants(board);
}

})();
