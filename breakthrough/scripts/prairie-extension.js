(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "prairie-extension") {
     checkVersion(design, name, value);
  }
}

var getX = function(pos) {
  return pos % 11;
}

var getY = function(pos) {
  return (pos / 11) | 0;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = null;
  var design = Dagaz.Model.design;
  var dogs   = [];
  var king   = 5;
  var sign   = false;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.type == 1) {
              dogs.push(getX(pos));
          }
          if (piece.type == 2) {
              king = getX(pos);
          }
      }
  });
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == 0)) {
          var x = getX(pos);
          var y = getY(pos);
          if (_.indexOf(dogs, x) < 0) {
              y = y * 2 - (10 - Math.abs(x - king));
              if ((r === null) || (r < y)) {
                  r = y;
              }
          }
          if (piece.player !== player) sign = true;
      }
  });
  if (r === null) r = 0;
  if (sign) r = -r;
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var design = Dagaz.Model.design;
  var r = null;
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(0, player, pos)) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              if (piece.player == player) {
                  r = 1;
              } else {
                  r = -1;
              }
          }
      }
  });
  if (r !== null) {
      return r;
  }
  return checkGoals(design, board, player);
}

})();
