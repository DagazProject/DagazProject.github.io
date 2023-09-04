(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "sovereign-chess-restriction") {
      checkVersion(design, name, value);
  }
}

var getColors = function(design, board, val) {
  if (val === null) return {
      friend: [1],
      enemy:  []
  };
  if (val == 0) return {
      friend: [1, 2],
      enemy:  []
  };
  var ix = board.player;
  var f = board.getValue(ix);
  if (f === null) {
      f = ix;
  }
  ix = (ix == 1) ? 2 : 1;
  var e = board.getValue(ix);
  if (e === null) {
      e = ix;
  }
  return {
      friend: [f],
      enemy:  [e]
  };
}

Dagaz.Model.expandColors = function(design, board, colors, restricted) {
  for (var ix = 0; ix < colors.length; ix++) {
       _.each(_.range(Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT), function(pos) {
           var piece = board.getPiece(pos);
           if (piece === null) return;
           if (piece.player != colors[ix]) return;
           for (var player = 1; player <= 12 ; player++) {
                if ((_.indexOf(colors, player) < 0) && design.inZone(player, 1, pos) && (_.indexOf(restricted, player) < 0)) {
                    colors.push(player);
                }
           }
       });
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var v = board.getValue(0);
  var colors = getColors(design, board, v);
  Dagaz.Model.expandColors(design, board, colors.friend, colors.enemy);
  Dagaz.Model.expandColors(design, board, colors.enemy, colors.friend);
  var all = _.union(colors.friend, colors.enemy);
  _.each(board.moves, function(move) {
      if (move.actions.length < 1) return;
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (_.indexOf(colors.friend, piece.player) < 0) {
          move.failed = true;
          return;
      }
      pos = move.actions[0][1][0];
      var target = board.getPiece(pos);
      if ((target !== null) && (_.indexOf(colors.enemy, target.player) < 0)) {
          move.failed = true;
          return;
      }
      _.each(all, function(c) {
          if (_.indexOf(colors.enemy, c) == 0) return;
          if (design.inZone(c, 1, pos)) {
              if (design.inZone(c, 1, move.actions[0][0][0])) return;
              if ((board.getPiece(pos) === null) || (_.indexOf(colors.friend, c) == 0)) move.failed = true;
          }
      });
      if (design.inZone(piece.player, 1, pos)) move.failed = true;
      if (v === null) {
          move.setValue(0, piece.player);
          return;
      }
  });
  CheckInvariants(board);
}

})();
