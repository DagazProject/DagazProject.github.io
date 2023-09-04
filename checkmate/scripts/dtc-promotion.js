(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dtc-promotion") {
      checkVersion(design, name, value);
  }
}

var getType = function(x)  {
  return x % 10;
}

var getPlayer = function(x)  {
  return ((x / 10) | 0) + 1;
}

var addReserve = function(design, board, move) {
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type != 6) return;
      var v = piece.getValue(0);
      if (v === null) { 
          v = 0;
      }
      move.movePiece(pos, pos, piece.setValue(0, v + 1));
  });
  move.mode = 3;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(design.allPositions(), function(pos) {
      if (!design.inZone(0, board.player, pos)) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != board.player) return;
      if (piece.type != 0) return;
      _.each(design.allPositions(), function(p) {
          var target = board.getPiece(p);
          if (target === null) return;
          if (target.type == 5) return;
          var v = target.getValue(0);
          if (v === null) return;
          var type = getType(v);
          var player = getPlayer(v);
          if (player != board.player) return;
          var m = Dagaz.Model.createMove(2);
          if (target.player == board.player) {              
              m.movePiece(pos, p, target.promote(+target.type + 1).setValue(0, target.getValue(0)));
          } else {
              if (target.type == 0) {
                  m.movePiece(pos, p, Dagaz.Model.createPiece(type, player));
              } else {
                  m.movePiece(pos, p, target.promote(+target.type - 1).setValue(0, target.getValue(0)));
              }
              addReserve(design, board, m);
          }
          var x = piece.getValue(0);
          if (x !== null) {
              m.movePiece(pos, pos, Dagaz.Model.createPiece(getType(x), getPlayer(x)));
          }
          board.moves.push(m);
      });      
      var v = piece.getValue(0);
      if (v === null) return;
      var t = getType(v);
      var player = getPlayer(v);
      var m = Dagaz.Model.createMove(2);
      if (player != board.player) {
          if (t > 0) {
              t--;
          }
          m.movePiece(pos, pos, Dagaz.Model.createPiece(t, player));
          if (getType(v) == 0) {
              m.capturePiece(pos);
          }
          addReserve(design, board, m);
      } else {
          m.movePiece(pos, pos, Dagaz.Model.createPiece(t + 1, player));
      }
      board.moves.push(m);
  });
  CheckInvariants(board);
}

})();
