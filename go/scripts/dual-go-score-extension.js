(function() {

var separate = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "dual-go-score-extension") {
      if (value == "separate") separate = true;
  } else {
      checkVersion(design, name, value);
  }
}

var getTerritoryDirs = function(design, board, group, dirs) {
  var player = null;
  for (var i = 0; i < group.length; i++) {
       for (var j = 0; j < dirs.length; j++) {
            var pos = design.navigate(1, group[i], dirs[j]);
            if ((pos !== null) && (_.indexOf(group, pos) < 0)) {
                var piece = board.getPiece(pos);
                if ((piece !== null) && (piece.type < 2)) {
                    if ((player !== null) && (player != +piece.type + 1)) return null;
                    player = +piece.type + 1;
                } else {
                    group.push(pos);
                }
            }
       }
  }
  return {
       player: player,
       positions: group
  }
}

var getTerritory = function(design, board, pos) {
  var o = getTerritoryDirs(design, board, [pos], [1, 3, 4, 7]);
  var d = getTerritoryDirs(design, board, [pos], [0, 2, 5, 6]);
  if (o === null) return separate ? d : null;
  if (d === null) return separate ? o : null;
  if (o.player != d.player) return null;
  if (separate) {
      return {
          player: o.player,
          positions: _.union(o.positions, d.positions)
      };
  } else {
      return {
          player: o.player,
          positions: _.intersection(o.positions, d.positions)
      }
  }
}

var PostProcessing = Dagaz.Model.PostProcessing;

Dagaz.Model.PostProcessing = function(board, moves) {
  var design = Dagaz.Model.design;
  _.each(moves, function(move) {
      var b = board.apply(move);
      var black = []; var white = [];
      _.each(design.allPositions(), function(pos) {
          var piece = b.getPiece(pos);
          if ((piece !== null) && (piece.type < 2)) return;
          var r = getTerritory(design, b, pos);
          if (r === null) return;
          if (r.player == 1) {
              black = _.union(black, r.positions);
          } else {
              white = _.union(white, r.positions);
          }
      });
      var target = null;
      if (move.mode == 1) {
          target = move.actions[0][0][0];
      }
      _.each(design.allPositions(), function(pos) {
          var piece = b.getPiece(pos);
          if (piece === null) {
              if (_.indexOf(_.difference(black, white), pos) >= 0) {
                  if ((target !== null) && (target == pos)) {
                      move.actions[0][1] = [move.actions[0][0][0]];
                      move.actions[0][2] = [Dagaz.Model.createPiece(2, 1)];
                  } else {
                      move.dropPiece(pos, Dagaz.Model.createPiece(2, 1));
                  }
              }
              if (_.indexOf(_.difference(white, black), pos) >= 0) {
                  if ((target !== null) && (target == pos)) {
                      move.actions[0][1] = [move.actions[0][0][0]];
                      move.actions[0][2] = [Dagaz.Model.createPiece(3, 1)];
                  } else {
                      move.dropPiece(pos, Dagaz.Model.createPiece(3, 1));
                  }
              }
          } else {
              if (piece.type >= 2) {
                  if (_.indexOf(_.difference(black, white), pos) >= 0) return;
                  if (_.indexOf(_.difference(white, black), pos) >= 0) return;
                  move.capturePiece(pos);
              }
          }
      });
  });
  if (!_.isUndefined(PostProcessing)) {
      PostProcessing(board, moves);
  }
}

var isDead = function(design, board, player, group, dirs) {
  var dame = 0;
  for (var i = 0; i < group.length; i++) {
      _.each(dirs, function(dir) {
          var pos = design.navigate(1, group[i], dir);
          if ((pos === null) || (_.indexOf(group, pos) >= 0)) return;
          var piece = board.getPiece(pos);
          if ((piece === null) || (piece.type > 1)) {
              dame++;
              return;
          }
          if (+piece.type + 1 != player) return;
          group.push(pos);
      });
  }
  return dame == 0;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isDropMove()) return;
      var pos = move.actions[0][1][0];
      var piece = move.actions[0][2][0];
      var player = +piece.type + 1;
      var oSuicide = false; var dSuicide = false;
      board.setPiece(pos, piece);
      if (isDead(design, board, player, [pos], [1, 3, 4, 7])) oSuicide = true;
      if (isDead(design, board, player, [pos], [0, 2, 5, 6])) dSuicide = true;
      var captured = [];
      _.each([1, 3, 4, 7], function(dir) {
          var p = design.navigate(1, pos, dir);
          if (p === null) return;
          var piece = board.getPiece(p);
          if (piece === null) return;
          if (piece.type > 1) return;
          if (+piece.type + 1 == player) return;
          var group = [p];
          if (!isDead(design, board, +piece.type + 1, group, [1, 3, 4, 7])) return;
          captured = _.union(captured, group);
          oSuicide = false;
      });
      _.each([0, 2, 5, 6], function(dir) {
          var p = design.navigate(1, pos, dir);
          if (p === null) return;
          var piece = board.getPiece(p);
          if (piece === null) return;
          if (piece.type > 1) return;
          if (+piece.type + 1 == player) return;
          var group = [p];
          if (!isDead(design, board, +piece.type + 1, group, [0, 2, 5, 6])) return;
          captured = _.union(captured, group);
          dSuicide = false;
      });
      _.each(captured, function(p) {
          var piece = board.getPiece(p);
          if (piece === null) return;
          if (piece.type > 1) return;
          if (+piece.type + 1 == player) return;
          move.movePiece(p, p, Dagaz.Model.createPiece(player + 1, 1));
      });
      if (oSuicide || dSuicide) {
          move.failed = true;
      }
      board.setPiece(pos, null);
  });
  CheckInvariants(board);
}

})();
