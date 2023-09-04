(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ko") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var ko = [];
  if ((board.parent !== null) && !_.isUndefined(board.move)) {
      _.each(board.move.actions, function(a) {
          if ((a[0] !== null) && (a[1] === null)) {
              ko.push(a[0][0]);
          }
      });
  }
  if (ko.length !== null) {
      _.each(board.moves, function(move) {
          if (move.isDropMove()) {
              var pos = move.actions[0][1][0];
              if (_.indexOf(ko, pos) >= 0) {
                  move.failed = true;
              }
          }
      });
      board.ko = ko;
  }
  CheckInvariants(board);
}

})();
