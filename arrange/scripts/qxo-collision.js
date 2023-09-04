(function() {

Dagaz.View.KO_ALPHA = 0.5;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "qxo-collision") {
     checkVersion(design, name, value);
  }
}

var locatePair = function(design, board, piece, except) {
  var r = null;
  _.each(design.allPositions(), function(pos) {
      if ((r === null) && (pos != except)) {
          var target = board.getPiece(pos);
          if ((target !== null) && (target.type == piece.type) && (target.player == piece.player)) {
               r = pos;
          }
      }
  });
  return r;
}

var checkCollision = function(design, board, pos, collision) {
  if (_.indexOf(collision, pos) >= 0) return true;
  collision.push(pos);
  var piece = board.getPiece(pos);
  if (piece !== null) {
      var pair = locatePair(design, board, piece, pos);
      if (pair !== null) {
          collision.push(pair);
          pair = design.navigate(1, pair, 9);
          if (pair !== null) {
              var p = design.navigate(1, pair, 8);
              while (p !== null) {
                  var target = board.getPiece(p);
                  if ((target !== null) && ((target.type != piece.type) || (target.player != piece.player))) {
                      if (checkCollision(design, board, p, collision)) return true;
                  }
                  p = design.navigate(1, p, 8);
              }
          }
          collision.pop();
      }
  }
  collision.pop();
  return false;
}

var getCollision = function(design, board) {
  if (_.isUndefined(board.collision)) {
      board.collision = [];
      _.each(design.allPositions(), function(pos) {
           if (board.collision.length == 0) {
               var p = design.navigate(1, pos, 8);
               while (p !== null) {
                   var piece = board.getPiece(p);
                   if ((piece !== null) && checkCollision(design, board, p, board.collision)) break;
                   p = design.navigate(1, p, 8);
               }
           }
      });
  }
  return board.collision;
}

var collapse = function(design, board, start, move) {
  var group = [start];
  for (var i = 0; i < group.length; i++) {
       var pos = design.navigate(1, group[i], 9);
       if (pos !== null) {
           if (i > 0) {
               var piece = board.getPiece(group[i]);
               if (piece !== null) {
                   piece = piece.promote(+piece.type - Dagaz.Model.PIECE_CNT);
                   move.movePiece(group[i], pos, piece);
               }
           }
           var p = design.navigate(1, pos, 8);
           while (p !== null) {
               if (p != group[i]) {
                    var piece = board.getPiece(p);
                    if (piece !== null) {
                        var pair = locatePair(design, board, piece, p);
                        if ((pair !== null) && (_.indexOf(group, pair) < 0)) {
                            group.push(pair);
                        }
                        move.capturePiece(p);
                    }
               }
               p = design.navigate(1, p, 8);
           }
       }
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var ko = [];
  if (!_.isUndefined(board.move) && (board.move.mode == Dagaz.Model.PIECE_CNT)) {
      board.moves = [];
  } else {
      var collision = getCollision(design, board);
      if (collision.length > 0) {
          _.each(board.moves, function(move) {
              if (move.isSimpleMove()) {
                  var pos = move.actions[0][0][0];
                  var piece = board.getPiece(pos);
                  if (_.indexOf(collision, pos) < 0) {
                      move.failed = true;
                      return;
                  }
                  if (piece !== null) {
                      move.actions[0][2] = [piece.promote(+piece.type - Dagaz.Model.PIECE_CNT)];
                      collapse(design, board, pos, move);
                  }
                  ko.push(pos);
              } else {
                  move.failed = true;
              }
          });
      } else {
          _.each(board.moves, function(move) {
              if (move.mode == Dagaz.Model.PIECE_CNT) {
                  move.failed = true;
              }
          });
      }
  }
  if (ko.length > 0) {
      board.ko = ko;
  }
  CheckInvariants(board);
}

})();
