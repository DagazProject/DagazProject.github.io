(function() {

var MAXVALUE            = 1000000;
var IN_ZONE_BONUS       = 1000;
var SINGLE_GALA_PENALTY = 1000;
var NO_WAY_PENALTY      = 100;
var PATH_WEIGHT         = 200;
var MOBILITY_WEIGHT     = 10;

Dagaz.AI.NOISE_FACTOR   = 20;
Dagaz.AI.MIN_WEIGHT     = -MAXVALUE;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "gala-extension") {
     checkVersion(design, name, value);
  }
}

var findPath = function(design, board, player, pos) {
  var level = [];
  var positions = [ pos ];
  level[pos] = 0;
  for (var i = 0; i < positions.length; i++) {
       var p = positions[i];
       var l = level[p];
       if (design.inZone(0, player, p)) {
           if (l > 0) {
               return l;
           } else {
               return -IN_ZONE_BONUS;
           }
       }
       _.each(design.allDirections(), function(dir) {
            var pos = design.navigate(player, p, dir);
            if ((pos !== null) && (board.getPiece(pos) === null) && (_.indexOf(positions, pos) < 0)) {
                 level[pos] = l + 1;
                 positions.push(pos);
            }
       });
  }
  return NO_WAY_PENALTY;
}

var material = function(design, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = design.price[piece.type];
          if (piece.player != player) {
              v = -v;
          }
          r += v;
      }
  });
  return r;
}

var moveEval = function(design, board, move) {
  if (_.isUndefined(move.material)) {
      var b = board.apply(move);
      b.generate(design);
      var x = null;
      _.each(b.moves, function(m) {
           var board = b.apply(m);
           var eval  = material(design, board, board.player);
           if (_.isUndefined(move.material) || (move.material > eval)) {
               move.material = eval;
               x = board;
           }
      });
      if (x !== null) {
          x.generate(design);
          move.mobility = x.moves.length;
      }
  }
  var r = move.material;
  if (!_.isUndefined(move.mobility)) {
      r += move.mobility * MOBILITY_WEIGHT;
  }
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  return moveEval(design, board, move) -
         material(design, board, move);
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = moveEval(design, board, board.move);
  var galas = [];
  for (var pos = 0; pos < design.positions.length; pos++) {
       var piece = board.getPiece(pos);
       if ((piece !== null) && (piece.player == player)) {
           if (piece.type == 0) {
               galas.push(pos);
           }
           if (galas.length > 1) break;
       }
  }
  if (galas.length == 0) return -MAXVALUE;
  if (galas.length == 1) {
      r -= SINGLE_GALA_PENALTY;
  }
  _.each(galas, function(pos) {
      r -= findPath(design, board, player, pos) * PATH_WEIGHT;
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("Gala");
  var fa     = 0;
  var ea     = 0;
  var fc     = 0;
  var ec     = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == king)) {
          if (design.inZone(0, player, pos)) {
              if (piece.player == player) {
                  fc++;
              } else {
                  ec++;
              }
          }
          if (piece.player == player) {
              fa++;
          } else {
              ea++;
          }
      }
  });
  if ((fc == 2) || (ea == 0)) {
      return 1;
  }
  if ((ec == 2) || (fa == 0)) {
      return -1;
  }
  if ((fa == 1) && (ea == 1)) {
      return 0;
  }
  return checkGoals(design, board, player);
}

var noEnemy = function(design, board) {
  var r = true;
  _.chain(design.allPositions())
   .filter(function(pos) {
        return design.inZone(0, board.player, pos);
    })
   .each(function(pos) {
        var piece = board.getPiece(pos);
        if ((piece !== null) && (piece.player != board.player)) {
            r = false;
        }
    });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var horsa  = design.getPieceType("Horsa");
  var korna  = design.getPieceType("Korna");
  var kampa  = design.getPieceType("Kampa");
  _.each(board.moves, function(m) {
      if ((m.actions.length == 1) && (m.actions[0][0] !== null) && (m.actions[0][1] !== null)) {
          var pos    = m.actions[0][0][0];
          var target = m.actions[0][1][0];
          var piece  = board.getPiece(pos);
          if ((piece !== null) && design.inZone(0, board.player, target)) {
              if ((piece.type == horsa) || (piece.type == korna)) {
                  m.failed = true;
              }
              if ((piece.type == kampa) && noEnemy(design, board)) {
                  m.failed = true;
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
