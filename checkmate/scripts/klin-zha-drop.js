(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "klin-zha-drop") {
     checkVersion(design, name, value);
  }
}

var getZones = function(design, board) {
  var r = [4, 5, 6];
  for (var zone = 4; zone < 7; zone++) {
      for (var pos = 0; pos < design.positions.length; pos++) {
           if (!design.inZone(zone, 1, pos)) continue;
           var piece = board.getPiece(pos);
           if (piece === null) continue;
           if (piece.player == board.player) return [zone];
           r = _.without(r, zone);
      }
  }
  return r;
}

var inZones = function(design, dst, z) {
  for (var zone = 4; zone < 7; zone++) {
       if (_.indexOf(z, zone) < 0) continue;
       if (design.inZone(zone, 1, dst)) return true;
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = false;
  _.each(design.allPositions(), function(src) {
      if (!design.inZone(3, board.player, src)) return;
      var piece = board.getPiece(src);
      if (piece === null) return;
      if (piece.player != board.player) return;
      var z = getZones(design, board);
      _.each(design.allPositions(), function(dst) {
          if (board.getPiece(dst) !== null) return;
          if (!design.inZone(0, board.player, dst)) return;
          if (!inZones(design, dst, z)) return;
          var m = Dagaz.Model.createMove(2);
          m.movePiece(src, dst, piece);
          board.moves.push(m);
          f = true;
      });
  });
  if (f) {
      _.each(board.moves, function(move) {
          if (move.mode == 2) return;
          move.failed = true;
      });
  }
  CheckInvariants(board);
}

})();
