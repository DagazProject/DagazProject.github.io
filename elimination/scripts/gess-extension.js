(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "gess-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var moves  = [];
  _.each(board.moves, function(move) {
      if ((move.actions.length > 1) && (move.actions[1][0] !== null) && (move.actions[1][1] !== null)) {
          var pos = move.actions[1][0][0] - Dagaz.Model.BOARD_SIZE;
          var target = move.actions[1][1][0] - Dagaz.Model.BOARD_SIZE;
          var dir = design.findDirection(pos, target);
          if (dir !== null) {
              var c = 2;
              var piece = board.getPiece(pos);
              var capturing = [];
              var captured  = [];
              if (piece !== null) {
                  c = 17;
                  if (!design.inZone(0, board.player, target)) {
                      captured.push(target);
                      move.movePiece(pos, target, piece);
                  } else {
                      capturing.push(pos);
                  }
              } else {
                  if (board.getPiece(target) !== null) {
                      move.capturePiece(target);
                  }
              }
              var init = [pos];
              _.each(design.allDirections(), function(d) {
                  var p = design.navigate(board.player, pos, d);
                  if (p !== null) {
                      init.push(p);
                  }
              });
              _.each(design.allDirections(), function(d) {
                  var p = design.navigate(board.player, pos, d);
                  if (p === null) return;
                  var q = design.navigate(board.player, p, dir);
                  if ((q === null) || design.inZone(0, board.player, q)) {
                      capturing.push(p);
                      return;
                  }
                  var piece = board.getPiece(p);
                  if (piece !== null) {
                      captured.push(q);
                      move.movePiece(p, q, piece);
                  } else {
                      if ((_.indexOf(init, q) < 0) && (board.getPiece(q) !== null)) {
                          move.capturePiece(q);
                      }
                  }
              });
              _.each(_.difference(capturing, captured), function(q) {
                  move.capturePiece(q);
              });
              moves.push(move);
              var isBreaked = false;
              if ((board.getPiece(target) !== null) && (_.indexOf(init, target) < 0)) {
                  isBreaked = true;
              }
              _.each(design.allDirections(), function(d) {
                  var q = design.navigate(board.player, target, d);
                  if ((q === null) || design.inZone(0, board.player, q)) return;
                  if ((board.getPiece(q) !== null) && (_.indexOf(init, q) < 0)) {
                       isBreaked = true;
                  }
              });
              for (;c > 0; c--) {
                  if (isBreaked) break;
                  target = design.navigate(board.player, target, dir);
                  if (target === null) break;
                  if (design.inZone(0, 1, target)) break;
                  var m = Dagaz.Model.createMove(move.mode);
                  var piece = Dagaz.Model.createPiece(1, board.player);
                  m.dropPiece(pos + Dagaz.Model.BOARD_SIZE, piece);
                  m.movePiece(pos + Dagaz.Model.BOARD_SIZE, target + Dagaz.Model.BOARD_SIZE, piece);
                  var piece = board.getPiece(pos);
                  var capturing = [];
                  var captured  = [];
                  if (piece !== null) {
                      if (!design.inZone(0, board.player, target)) {
                          captured.push(target);
                          m.movePiece(pos, target, piece);
                      } else {
                          capturing.push(pos);
                      }
                  } else {
                      if (board.getPiece(target) !== null) {
                          m.capturePiece(target);
                      }
                  }
                  if ((board.getPiece(target) !== null) && (_.indexOf(init, target) < 0)) {
                      isBreaked = true;
                  }
                  _.each(design.allDirections(), function(d) {
                      var p = design.navigate(board.player, pos, d);
                      if (p === null) return;
                      var q = design.navigate(board.player, target, d);
                      if ((q === null) || design.inZone(0, board.player, q)) {
                          capturing.push(p);
                          return;
                      }
                      if ((board.getPiece(q) !== null) && (_.indexOf(init, q) < 0)) {
                          isBreaked = true;
                      }
                      var piece = board.getPiece(p);
                      if (piece !== null) {
                          captured.push(q);
                          m.movePiece(p, q, piece);
                      } else {
                          if ((_.indexOf(init, q) < 0) && (board.getPiece(q) !== null)) {
                              m.capturePiece(q);
                          }
                      }
                  });
                  _.each(_.difference(capturing, captured), function(q) {
                      m.capturePiece(q);
                  });
                  moves.push(m);
              }
          }
      }
  });
  board.moves = moves;
  CheckInvariants(board);
}

})();
