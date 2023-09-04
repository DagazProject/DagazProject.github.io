(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "sovereign-chess-pawn") {
     checkVersion(design, name, value);
  }
}

var isRestricted = function(design, pos, dir) {
  if (design.inZone(15, 1, pos)) { // sw-zone
      if (dir == 7) { // n
          if (!design.inZone(14, 1, pos)) return false; // h-zone
      }
      if (dir == 3) { // e
          if (!design.inZone(13, 1, pos)) return false; // v-zone
      }
      if (dir == 6) { // nw
          if (design.inZone(14, 1, pos)) return true; // h-zone
      }
      if (dir == 0) { // se
          if (design.inZone(13, 1, pos)) return true; // v-zone
      }
      return (dir != 5); // ne
  }
  if (design.inZone(16, 1, pos)) { // nw-zone
      if (dir == 1) { // s
          if (!design.inZone(14, 1, pos)) return false; // h-zone
      }
      if (dir == 3) { // e
          if (!design.inZone(13, 1, pos)) return false; // v-zone
      }
      if (dir == 5) { // ne
          if (design.inZone(13, 1, pos)) return true; // v-zone
      }
      if (dir == 2) { // sw
          if (design.inZone(14, 1, pos)) return true; // h-zone
      }
      return (dir != 0); // se
  }
  if (design.inZone(17, 1, pos)) { // ne-zone
      if (dir == 1) { // s
          if (!design.inZone(14, 1, pos)) return false; // h-zone
      }
      if (dir == 4) { // w
          if (!design.inZone(13, 1, pos)) return false; // v-zone
      }
      if (dir == 0) { // se
          if (design.inZone(14, 1, pos)) return true; // h-zone
      }
      if (dir == 6) { // nw
          if (design.inZone(13, 1, pos)) return true; // v-zone
      }
      return (dir != 2); // sw
  }
  if (design.inZone(18, 1, pos)) { // se-zone
      if (dir == 7) { // n
          if (!design.inZone(14, 1, pos)) return false; // h-zone
      }
      if (dir == 4) { // w
          if (!design.inZone(13, 1, pos)) return false; // v-zone
      }
      if (dir == 2) { // sw
          if (design.inZone(13, 1, pos)) return true; // v-zone
      }
      if (dir == 5) { // ne
          if (design.inZone(14, 1, pos)) return true; // h-zone
      }
      return (dir != 6); // nw, sw, ne
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      if (move.actions.length < 1) return;
      if (move.actions[0][0] === null) return;
      if (move.actions[0][1] === null) return;
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type != 0) return;
      var dir = design.findDirection(pos, move.actions[0][1][0]);
      if (dir === null) return;
      if (isRestricted(design, pos, dir)) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
