(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "renju-extension") {
     checkVersion(design, name, value);
  }
}

var go = Dagaz.Controller.go;

Dagaz.Controller.go = function(url) {
  var design = Dagaz.Model.design;
  var board = Dagaz.Controller.app.board;
  url = url + "?setup="; 
  var prev = null; var cnt = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      var s = "";
      if (piece !== null) {
          var type = piece.player - 1;
          s = s + type + ":1";
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

Dagaz.Model.getLine = function(design, board, player, pos, dir, ix) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return 0;
  var piece = board.getPiece(p);
  if (piece === null) return 0;
  if (piece.player != board.player) return 0;
  return +piece.getValue(ix);
}

var updateLine = function(design, board, player, pos, ix, vl, dir, move) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if ((piece === null) || (piece.player != board.player)) break;
      piece = piece.setValue(ix, vl);
      move.movePiece(p, p, piece);
      p = design.navigate(player, p, dir);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var dirs   = [];
  dirs.push(design.getDirection("n")); dirs.push(design.getDirection("ne"));
  dirs.push(design.getDirection("e")); dirs.push(design.getDirection("se"));
  _.each(board.moves, function(move) {
      if (_.isUndefined(move.failed) && move.isDropMove()) {
          var pos   = move.actions[0][1][0];
          var piece = move.actions[0][2][0];
          for (var ix = 0; ix < dirs.length; ix++) {
               var vl = 1;
               vl += Dagaz.Model.getLine(design, board, board.player, pos, dirs[ix], ix);
               vl += Dagaz.Model.getLine(design, board, 0, pos, dirs[ix], ix);
               updateLine(design, board, board.player, pos, ix, vl, dirs[ix], move);
               updateLine(design, board, 0, pos, ix, vl, dirs[ix], move);
               piece = piece.setValue(ix, vl);
          }
          move.actions[0][2] = [ piece ];
      }
  });
  CheckInvariants(board);
}

})();
