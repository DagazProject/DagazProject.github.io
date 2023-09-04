(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "abalone-extension") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(2,  "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
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
          var player = piece.player;
          if (piece.type > 0) {
              if (player == 1) {
                  player = 2;
              } else {
                  player = 1;
              }
          }
          var type = (player - 1);
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

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;
  _.each(board.moves, function(move) {
      if ((move.actions.length > 0) && (move.actions[0][0] !== null) && 
          (move.actions[0][1] !== null) && (board.getPiece(move.actions[0][1][0]) !== null)) {
          var pos = move.actions[0][0][0];
          var dir = design.findDirection(pos, move.actions[0][1][0]);
          if (dir !== null) {
              var c = 0;
              while (pos !== null) {
                  var piece = board.getPiece(pos);
                  if (piece === null) return;
                  if (piece.player != board.player) break;
                  pos = design.navigate(board.player, pos, dir);
                  c++;
                  if (c > 3) {
                      move.failed = true;
                      return;
                  }
              }
              if (pos === null) {
                  move.failed = true;
                  return;
              }
              while (pos !== null) {
                  var piece = board.getPiece(pos);
                  if (piece === null) break;
                  if (piece.player == board.player) {
                      move.failed = true;
                      return;
                  }
                  pos = design.navigate(board.player, pos, dir);
                  c--;
              }
              if (c <= 0) {
                  move.failed = true;
              }
          } else {
              move.failed = true;
          }
      }
  });
  var bc = design.getDirection("bc");
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      if (move.actions.length > 0) {
          var a = move.actions[move.actions.length - 1];
          if ((a[0] === null) || (a[1] === null)) return;
          if (board.getPiece(a[1][0]) === null) return;
          var pos = design.navigate(board.player, 0, bc);
          while (pos !== null) {
              var piece = board.getPiece(pos);
              if ((piece === null) || (piece.type == 2)) {
                  piece = Dagaz.Model.createPiece(1, board.player);
                  move.dropPiece(pos, piece);
                  return;
              }
              pos = design.navigate(board.player, pos, bc);
          }
      }
  });
  CheckInvariants(board);
}

})();
