(function() {

var WIDTH = 640;
var HEIGHT = 32;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "filler-goal") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(2,  "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
    Dagaz.Controller.addSound(10, "../sounds/fire.wav", true);
    Dagaz.Controller.addSound(11, "../sounds/freeze.wav", true);
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  return move.actions.length;
}

var getScore = function(design, board) {
  if (_.isUndefined(board.score)) {
      board.score = [0, 0, 0];
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece === null) return;
          if (piece.type > 7) return;
          board.score[2]++;
          if (piece.player > 2) return;
          if (piece.type > 6) return;
          board.score[piece.player - 1]++;
      });
  }
  return board.score;
}

Dagaz.View.showBoard = function(board, ctx) {
  var design = Dagaz.Model.design;
  var score = getScore(design, board);
  var a = score[1];
  var b = score[0];
  var m = ((b * WIDTH)/(a + b)) | 0;
  ctx.save();
  ctx.fillStyle = '#0080FF';
  ctx.fillRect(0, 0, m, HEIGHT);
  ctx.fillStyle = '#FF00FF';
  ctx.fillRect(m, 0, WIDTH - m, HEIGHT);
  if (a != b) {
      if (b > a) ctx.fillStyle = '#0080FF';
      ctx.beginPath();
      ctx.arc(m, 16, 16, 0, 2 * Math.PI);
      ctx.fill();
  }
  ctx.restore();
}


var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var score = getScore(design, board);
  var win = (score[2] / 2) | 0;
  if (score[0] > win) {
      if (player == 1) {
          return 1;
      } else {
          return -1;
      }
  }
  if (score[1] > win) {
      if (player == 2) {
          return 1;
      } else {
          return -1;
      }
  }
  return checkGoals(design, board, player);
}

})();
