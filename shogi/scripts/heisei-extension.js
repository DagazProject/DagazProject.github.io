(function() {

Dagaz.View.KO_ALPHA = 0.05;

var dropLimit   = null;
var sharedLimit = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "heisei-extension") {
      dropLimit = Math.abs(value);
      sharedLimit = (value < 0);
  } else {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.moveToString = function(move) {
  var r = "";
  _.each(move.actions, function(a) {
      if (a[1] === null) return;
      if (r != "") {
          r = r + " ";
      }
      if (a[0] != null) {
          r = r + Dagaz.Model.posToString(a[0][0]);
          if (a[1] !== null) {
              r = r + '-';
          }
      }
      if (a[1] !== null) {
          r = r + Dagaz.Model.posToString(a[1][0]);
      }
      if ((a[2] !== null) && ((a[0] != null) || (a[1] !== null))) {
          r = r + " " + a[2][0].toString();
      }
  });
  return r;
}

var isFriendNeighbour = function(design, board, player, pos) {
  var r = false;
  _.each(design.allDirections(), function(dir) {
      var p = design.navigate(player, pos, dir);
      if (p !== null) {
          var piece = board.getPiece(p);
          if ((piece !== null) && (piece.player == player)) {
              r = true;
          }
      }
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var ko = [];
  _.each(board.moves, function(move) {
      if (move.isDropMove()) {
          var pos = move.actions[0][1][0];
          if (isFriendNeighbour(design, board, board.player, pos)) {
              if (dropLimit !== null) {
                  var player = board.player - 1;
                  if (sharedLimit) {
                      player = 0;
                  }
                  var v = board.getValue(player);
                  if ((v !== null) && (v >= dropLimit)) {
                      move.failed = true;
                      return;
                  }
                  move.addValue(player, 1);
              }
              ko.push(pos);
          } else {
              move.failed = true;
          }
          if (move.actions[0][2] !== null) {
              var piece = move.actions[0][2][0];
              if (!design.inZone(0, board.player, pos)) {
                  if (_.indexOf([13, 24, 26, 12, 15, 6, 9, 8], +piece.type) >= 0) {
                      move.failed = true;
                  }
              } else {
                  if (_.indexOf([23, 25], +piece.type) >= 0) {
                      move.failed = true;
                  }
              }
              if (_.indexOf([0, 28], +piece.type) >= 0) {
                  if (design.navigate(board.player, pos, 7) === null) {
                      move.failed = true;
                  }
              }
          }
      }
  });
  if (ko.length > 0) {
      board.ko = ko;
  }
  CheckInvariants(board);
}

})();
