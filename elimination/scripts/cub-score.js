(function() {

Dagaz.View.WIDTH = 423;

Dagaz.Model.isScored = true;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "cub-score") {
     checkVersion(design, name, value);
  }
}

Dagaz.View.showBoard = function(board, ctx) {
  var r = board.getValue(0);
  var b = board.getValue(1);
  if ((r === null) || (b === null)) return;
  var m = ((b * Dagaz.View.WIDTH)/(r + b)) | 0;
  ctx.save();
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, 316 + 2, m, 6);
  ctx.fillStyle = 'red';
  ctx.fillRect(m, 316 + 2, Dagaz.View.WIDTH - m, 6);
  if ((r > 0) && (b > 0) && (r != b)) {
      if (b > r) ctx.fillStyle = 'blue';
      ctx.beginPath();
      ctx.arc(m, 316 + 5, 3, 0, 2 * Math.PI);
      ctx.fill();
  }
  ctx.restore();
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  board.generate(design);
  if (board.moves.length == 0) {
      var w = board.getValue(0);
      var b = board.getValue(1);
      var r = null;
      if (w == b) r = 0;
      if (w > b) {
          if (player == 1) {
              r = 1;
          } else {
              r = -1;
          }
      } 
      if (w < b) {
          if (player == 1) {
              r = -1;
          } else {
              r = 1;
          }
      }
      if (r !== null) return {
          message: ' (' + w + ':' + b + ')',
          result: r
      };
  }
  return checkGoals(design, board, player);
}


})();
