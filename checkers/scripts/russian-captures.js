(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "russian-captures") {
      checkVersion(design, name, value);
  }
}

var getCaptures = function(move) {
  var r = []; var f = true;
  _.each(move.actions, function(a) {
      if (a[0] === null) return;
      if (a[1] !== null) {
          if (f) {
              r.push(a[0][0]);
              f = false;
          }
          return;
      }
      r.push(a[0][0]);
  });
  return r;
}

var isPrefix = function(a, b) {
  if (a.length == 0) return false;
  if (a.length >= b.length) return false;
  for (var i = 0; i < a.length; i++) {
      if (a[i] != b[i]) return false;
  }
  return true;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  for (var i = 0; i < board.moves.length; i++) {
      if (!_.isUndefined(board.moves[i].failed)) continue;
      var captures = getCaptures(board.moves[i]);
      if (captures.length >= 3) {
          for (var j = 0; j < board.moves.length; j++) {
               if ((j != i) && isPrefix(getCaptures(board.moves[j]), captures)) {
                   board.moves[j].failed = true;
               }
          }
      }
  }
  CheckInvariants(board);
}

})();
