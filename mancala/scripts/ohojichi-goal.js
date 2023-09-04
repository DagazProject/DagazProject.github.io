(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ohojichi-goal") {
     checkVersion(design, name, value);
  }
}

var seed = function(data, pos) {
  var r = false;
  var cnt = data[pos];
  data[pos] = 0;
  for (var ix = pos + 1; cnt > 0; cnt--, ix++) {
       if (ix >= data.length) ix = 0;
       data[ix]++;
       r = (data[ix] == 4);
  }
  return r;
}

var find = function(queue) {
  while (queue.length > 0) {
       var node = queue.shift();
       for (var ix = 0; ix < node.data.length; ix++) {
            if (node.data[ix] > 0) {
                var data = [];
                _.each(node.data, function(x) {data.push(x)});
                var r = seed(data, ix);
                var n = {
                    parent: node,
                    data:   data,
                    index:  ix
                };
                if (r) return n;
                queue.push(n);
            }
       }
  }
}

var getResult = function(node) {
  var r = null;
  while (!_.isUndefined(node.parent)) {
      r = node.index;
      node = node.parent;
  }
  return r;
}

var getStartPos = function(design, board) {
  if (_.isUndefined(board.startPos)) {
      var data = [];
      var positions = [];
      var ns = design.getDirection("ns");
      var nx = design.getDirection("nx");
      var p  = design.navigate(board.player, 0, ns);
      var q  = p;
      while (p !== null) {
          var piece = board.getPiece(q);
          if (piece !== null) {
              data.push(Math.abs(+piece.getValue(0)));
          } else {
              data.push(0);
          }
          positions.push(q);
          q = design.navigate(board.player, q, nx);
          if (q == p) break;
      }
      var queue = [ { data: data } ];
      var ix = getResult(find(queue));
      board.startPos = positions[ix];
  }
  return board.startPos;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  if (move.actions.length > 0) {
      if (move.mode == 0) {
          var pos = move.actions[0][0][0];
          if (pos == getStartPos(design, board)) {
              r += 100;
          }
      } else {
          var pos = move.actions[0][1][0];
          var piece = board.getPiece(pos);
          if (piece !== null) {
              var value = piece.getValue(0);
              if ((value !== null) && (Math.abs(value) == 3)) {
                  r += 100;
              }
          }
      }
  }
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var f = 0; var e = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.player == player) {
              f++;
          } else {
              e++;
          }
      }
  });
  if (f == 0) return 1;
  if (e == 0) return -1;
  return checkGoals(design, board, player);
}

})();
