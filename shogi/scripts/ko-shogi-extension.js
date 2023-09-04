(function() {

var immunity = [];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "ko-shogi-extension") {
      immunity[8]  = [41, 42, 44, 46];                     // TF <-- LB, SB, C, GC
      immunity[41] = [44, 46];                             // GC <-- LB, SB
      immunity[56] = [44, 46];                             // CU <-- LB, SB
      immunity[57] = [41, 42, 44, 46, 47, 48, 56, 59, 60]; // IB <-- LB, SB, C, GC, EC, CG, CH, CU, CC
      immunity[58] = [41, 42, 44, 46, 47, 48];             // SU <-- LB, SB, C, GC, EC, CG
      immunity[59] = [44, 46];                             // CC <-- LB, SB
      immunity[61] = [41, 42, 44, 46, 47, 48];             // UU <-- LB, SB, SC, C, GC, EC, CG
      immunity[60] = [44, 46];                             // CH <-- LB, SB
      immunity[62] = [44, 46];                             // SH <-- LB, SB
  } else {
      checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var gf = true; var tf = 0;
  var ge = true; var te = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if ((piece.type == 0) || (piece.type == 1)) {
              if (piece.player == player) {
                  gf = false;
              } else {
                  ge = false;
              }
          }
          if ((piece.type == 38) || (piece.type == 39)) {
              if (piece.player == player) {
                  tf++;
              } else {
                  te++;
              }
          }
      }
  });
  if (gf && (tf < 2)) return -1;
  if (ge && (te < 2)) return 1;
  return checkGoals(design, board, player);
}

var getX = function(pos) {
  return pos % 19;
}

var getY = function(pos) {
  return (pos / 19) | 0;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var src = null;
      var dst = null;
      var lst = null;
      var prt = 1;
      _.each(move.actions, function(a) {
          if ((a[0] !== null) && (a[1] !== null)) {
              if (src === null) {
                  src = a[0][0];
              }
              dst = a[1][0];
              prt = a[3];
              lst = a;
              if ((src !== null) && (dst !== null)) {
                  var piece  = board.getPiece(src);
                  var target = board.getPiece(dst);
                  if ((piece !== null) && (target !== null)) {
                      if (!_.isUndefined(immunity[target.type]) && (_.indexOf(immunity[target.type], +piece.type) >= 0)) {
                          move.failed = true;
                      }
                      var pos = a[0][0];
                      var dx = Math.abs(getX(pos) - getX(dst));
                      var dy = Math.abs(getY(pos) - getY(dst));
                      if ((dx == 0) || (dy == 0) || (dx == dy)) {
                          // 8, 41, 56, 57, 58, 59, 60, 61, 62 <-- 43, 45
                          if ((_.indexOf([43, 45], +piece.type) >= 0) && (_.indexOf([8, 41, 56, 57, 58, 59, 60, 61, 62], +target.type) >= 0)) {
                              move.failed = true;
                          }
                          // 8 <-- 47, 48 (> 5)
                          if ((Math.max(dx, dy) <= 5) && (target.type == 8) && (_.indexOf([47, 48], +piece.type) >= 0)) {
                              move.failed = true;
                          }
                      }
                      // IL, SM, TF, TP <-- IL, SM, TF, TP (only)
                      if ((Math.max(dx, dy) > 1) && (_.indexOf([6, 7, 8, 9], +piece.type) >= 0)) {
                           if (_.indexOf([6, 7, 8, 9], +target.type) < 0) {
                                move.failed = true;
                           }
                      }
                  }
              }
          }
      });
      if ((src !== null) && (dst !== null)) {
          var piece = board.getPiece(src);
          if ((piece !== null) && (piece.type == 35)) {
              if (move.actions.length == 5) {
                  var positions = [ src ];
                  _.each(move.actions, function(a) {
                      if ((a[0] !== null) && (a[1] !== null)) {
                          if (_.indexOf(positions, a[1][0]) < 0) {
                              positions.push(a[1][0]);
                          } else {
                              move.failed = true;
                          }
                      }
                  });
              } else {
                  move.failed = true;
              }
          }
          var isFired = false;
          _.each(design.allDirections(), function(dir) {
              var pos = design.navigate(board.player, dst, dir);
              if (pos !== null) {
                  var piece = board.getPiece(pos);
                  if ((piece !== null) && (piece.type == 10) && (piece.player != board.player)) {
                      isFired = true;
                  }
              }
          });
          if (!isFired && (piece !== null) && (piece.type == 10)) {
               _.each(design.allDirections(), function(dir) {
                    var pos = design.navigate(board.player, dst, dir);
                    if (pos !== null) {
                        var piece = board.getPiece(pos);
                        if ((piece !== null) && (piece.player != board.player)) {
                            move.capturePiece(pos, prt);
                        }
                    }
               });
          }
          if (isFired) {
               move.capturePiece(dst, prt);
               if (lst !== null) {
                   var piece = board.getPiece(src);
                   if (piece !== null) {
                       lst[2] = [ piece.promote(64) ];
                   }
               }
          }
      }
  });
  CheckInvariants(board);
}

})();
