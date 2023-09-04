(function() {

var capturePieces = false;
var orthodox = false;
var separate = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "dual-go-extension") {
      if (value == "capture") capturePieces = true;
      if (value == "orthodox") orthodox = true;
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
                if (piece !== null) {
                    if ((player !== null) && (player != piece.player)) return null;
                    player = piece.player;
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

var go = Dagaz.Controller.go;

Dagaz.Controller.go = function(url, scoring) {
  var design = Dagaz.Model.design;
  var board = Dagaz.Controller.app.board;
  var black = []; var white = [];
  if (scoring) {
      _.each(design.allPositions(), function(pos) {
          if (board.getPiece(pos) !== null) return;
          var r = getTerritory(design, board, pos);
          if (r === null) return;
          if (r.player == 1) {
              black = _.union(black, r.positions);
          } else {
              white = _.union(white, r.positions);
          }
      });
  }
  url = url + "?setup="; 
  var prev = null; var cnt = 0;
  _.each(design.allPositions(), function(pos) {
      var s = "";
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var type = piece.player - 1;
          s = s + type + ":1";
      } else {
          if (_.indexOf(_.difference(black, white), pos) >= 0) {
              s = s + "2:1";
          }
          if (_.indexOf(_.difference(white, black), pos) >= 0) {
              s = s + "3:1";
          }
      }
      if ((prev === null) || (prev != s)) {
          if (prev !== null) {
              url = url + prev;
              if (cnt > 0) {
                  url = url + "+" + cnt;
              }
              url = url + ";";
          }
          prev = s;
          cnt = 0;
      } else {
          cnt++;
      }
  });
  url = url + prev;
  if (cnt > 0) {
      url = url + "+" + cnt;
  }
  url = url + ";";
  go(url);
}

var isDead = function(design, board, player, group, dirs) {
  var dame = 0;
  for (var i = 0; i < group.length; i++) {
      _.each(dirs, function(dir) {
          var pos = design.navigate(1, group[i], dir);
          if ((pos === null) || (_.indexOf(group, pos) >= 0)) return;
          var piece = board.getPiece(pos);
          if (piece === null) {
              dame++;
              return;
          }
          if (piece.player != player) return;
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
      var oSuicide = false; var dSuicide = false;
      board.setPiece(pos, piece);
      if (isDead(design, board, piece.player, [pos], [1, 3, 4, 7])) oSuicide = true;
      if (isDead(design, board, piece.player, [pos], [0, 2, 5, 6])) dSuicide = true;
      var captured = [];
      _.each([1, 3, 4, 7], function(dir) {
          var p = design.navigate(1, pos, dir);
          if (p === null) return;
          var piece = board.getPiece(p);
          if (piece === null) return;
          if (piece.player == board.player) return;
          var group = [p];
          if (!isDead(design, board, piece.player, group, [1, 3, 4, 7])) return;
          captured = _.union(captured, group);
          oSuicide = false;
      });
      _.each([0, 2, 5, 6], function(dir) {
          var p = design.navigate(1, pos, dir);
          if (p === null) return;
          var piece = board.getPiece(p);
          if (piece === null) return;
          if (piece.player == board.player) return;
          var group = [p];
          if (!isDead(design, board, piece.player, group, [0, 2, 5, 6])) return;
          captured = _.union(captured, group);
          dSuicide = false;
      });
      _.each(captured, function(p) {
          if (!orthodox) {
              oSuicide = false;
              dSuicide = false;
          }
          var piece = board.getPiece(p);
          if (piece === null) return;
          if (piece.player == board.player) return;
          if (capturePieces) {
              move.capturePiece(p);
          } else {
              move.movePiece(p, p, piece.changeOwner(board.player));
          }
      });
      if (oSuicide || dSuicide) {
          move.failed = true;
      }
      board.setPiece(pos, null);
  });
  CheckInvariants(board);
}

})();
