(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ko") {
     checkVersion(design, name, value);
  }
}

var isCaptured = function(move) {
  for (var i = 0; i < move.actions.length; i++) {
       if ((move.actions[i][0] !== null) && (move.actions[i][1] === null)) return true;
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var ko = [];
  if ((board.parent !== null) && !_.isUndefined(board.move) && isCaptured(board.move)) {
      _.each(board.moves, function(move) {
          var f = false;
          _.each(move.actions, function(a) {
              if ((a[0] !== null) && (a[1] === null)) f = true;
          });
          if (f) {
              _.each(move.actions, function(a) {
                   if ((a[0] === null) && (a[1] !== null)) {
                       ko.push(a[1][0]);
                   }
              });
              move.failed = true;
          }
      });
  }
  if (ko.length !== null) {
      board.ko = ko;
  }
  CheckInvariants(board);
}

})();
