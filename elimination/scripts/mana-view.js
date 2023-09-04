(function() {

Dagaz.View.KO_ALPHA = 0.3;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "mana-view") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var ko = [];
  _.each(board.moves, function(move) {
      if (_.isUndefined(move.failed) && (move.mode < 3)) {
          var pos = move.actions[0][0][0];
          if (_.indexOf(ko, pos) < 0) {            
              ko.push(pos);
          }
      }
  });
  if (ko.length > 0) {
      board.ko = ko;
  }
  CheckInvariants(board);
}

})();
