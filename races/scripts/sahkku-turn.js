(function() {

var isInternal = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "sahkku-turn") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (!isInternal && (_.indexOf([3, 7], board.turn) >= 0)) {
      _.each(board.moves, function(move) {
          var b = board.apply(move);
          b.turn = board.turn;
          isInternal = true;
          b.generate(design);
          isInternal = false;
          if (b.moves.length > 0) {
              move.goTo(board.turn);
          }
      });
  }
  CheckInvariants(board);
}

})();
