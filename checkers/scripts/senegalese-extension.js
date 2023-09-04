(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "senegalese-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(m) {
      var action = null;
      _.chain(m.actions)
       .filter(function(a) {
            return (a[0] !== null) && (a[1] !== null);
        })
       .each(function(a) {
            action = a;
        });
      if ((action !== null) && design.inZone(0, board.player, action[1][0])) {
          m.capturePiece(action[1][0], action[3]);
      }
  });
  CheckInvariants(board);
}

})();
