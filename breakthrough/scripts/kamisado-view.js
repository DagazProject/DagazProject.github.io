(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "kamisado-view") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var ko = [];
  _.each(board.moves, function(move) {
      if (_.isUndefined(move.failed)) {
          var pos = move.actions[0][0][0];
          if (_.indexOf(ko, pos) < 0) {            
              ko.push(pos);
          }
      }
  });
  if (ko.length == 1) {
      board.ko = ko;
  }
  CheckInvariants(board);
}

})();
