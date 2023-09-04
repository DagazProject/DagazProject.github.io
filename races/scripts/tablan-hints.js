(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tablan-hints") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][0][0];
      while (pos !== null) {
          pos = design.navigate(board.player, pos, 0);
          if (pos == move.actions[0][1][0]) break;
          if (pos !== null) {
              var h = design.navigate(board.player, pos, 2);
              if (h !== null) {
                 if (_.isUndefined(move.hints)) {
                     move.hints = [];
                 }
                 move.hints.push(h);
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
