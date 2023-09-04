(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "seega-invariant") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (!_.isUndefined(board.move) && _.isUndefined(board.isInternal)) {
      if (board.move.isPass() && !_.isUndefined(board.parent) && (board.parent !== null)) {
          var b = board.parent;
          if (!_.isUndefined(b.move) && (b.move.actions.length > 1) && (b.move.actions[0][0] !== null) && (b.move.actions[0][1] !== null)) {
              var src = b.move.actions[0][0][0];
              var pos = b.move.actions[0][1][0];
              _.each(board.moves, function(move) {
                   if ((move.actions.length > 0) && (move.actions[0][0] !== null) && (move.actions[0][1] !== null)) {
                       if ((move.actions[0][0][0] != pos) || (move.actions[0][1][0] == src) || (move.actions.length <= 1)) {
                           move.failed = true;
                       }
                   }
              });
          }
      }
      if (board.move.actions.length > 1) {
          var b = board.apply(Dagaz.Model.createMove(1));
          b.isInternal = true;
          b.generate();
          var x = _.chain(b.moves).map(function(m) {return m.actions.length;}).max().value();
          if (x > 1) {
              _.each(board.moves, function(move) {
                  move.failed = true;
              });
          }
      }
  }
  CheckInvariants(board);
}

})();
