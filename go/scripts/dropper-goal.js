(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dropper-goal") {
      checkVersion(design, name, value);
  }
}

var analyze = function(design, board) {
  var done = []; var r = [];
  _.each(design.allPositions(), function(pos) {
      if (_.indexOf(done, pos) >= 0) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      var group = [pos];
      for (var i = 0; i < group.length; i++) {
          done.push(group[i]);
          _.each([1, 3, 4, 7], function(dir) {
              var p = design.navigate(1, group[i], dir);
              if (p === null) return;
              if (_.indexOf(group, p) >= 0) return;
              var x = board.getPiece(p);
              if (x === null) return;
              if (x.player != piece.player) return;
              group.push(p);
          });
      }
      r.push({
          p: piece.player,
          g: group
      });
  });
  return r;
}

var getScore = function(stat, player, limit) {
  var r = 0;
  _.each(stat, function (s) {
      if (s.p != player) return;
      if (!_.isUndefined(limit)) {
          if (s.g.length >= limit) return;
      }
      if (r < s.g.length) {
          r = s.g.length;
      }
  });
  return r;
}

Dagaz.View.showBoard = function(board, ctx) {
  if (_.isUndefined(board.score)) {
      board.score = [];
      var design = Dagaz.Model.design;
      var stat = analyze(design, board);
      board.score[0] = getScore(stat, 1); 
      board.score[1] = getScore(stat, 2);
  }
  if (board.score[0] == 0) return;
  if (board.score[1] == 0) return;
  var m = ((board.score[1] * Dagaz.View.WIDTH)/(board.score[0] + board.score[1])) | 0;
  ctx.save();
  ctx.fillStyle = 'red';
  ctx.fillRect(0, Dagaz.View.WIDTH + 2, m, 6);
  ctx.fillStyle = 'blue';
  ctx.fillRect(m, Dagaz.View.WIDTH + 2, Dagaz.View.WIDTH - m, 6);
  if (board.score[0] != board.score[1]) {
      if (board.score[1] > board.score[0]) ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.arc(m, Dagaz.View.WIDTH + 5, 3, 0, 2 * Math.PI);
      ctx.fill();
  }
  ctx.restore();
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  board.generate(design);
  if (board.moves.length == 0) {
      var stat = analyze(design, board);
      var b = getScore(stat, 1); var w = getScore(stat, 2);
      while (w == b) {
          b = getScore(stat, 1, b); 
          w = getScore(stat, 2, w);
      }
      console.log(b + '/' + w);
      if (b == w) return 0;
      if (b > w) {
          return (player == 1) ? 1 : -1;
      } else {
          return (player == 2) ? 1 : -1;
      }
  }
  return checkGoals(design, board, player);
}

})();
