(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chessball-extension") {
     checkVersion(design, name, value);
  }
}

var sign = function(x) {
  if (x < 0) return -1;
  if (x > 0) return 1;
  return 0;
}

var badDir = function(piece, dx, dy, nx, ny) {
  if ((dx == nx) && (dy == ny)) return false;
  if (piece.type == 2) {
      if ((dx == -nx) && (dy == -ny)) return false;
      if ((dx ==  dy) && (nx == -ny)) return false;
      if ((dx == -dy) && (nx ==  ny)) return false;
      if ((dx == 0) && (ny == 0)) return false;
      if ((dy == 0) && (nx == 0)) return false;
  }
  if (piece.type == 3) {
      if ((dx == 0) && (dy < 0)) {
         if ((nx < 0) && (ny < 0)) return false;
         if ((nx > 0) && (ny < 0)) return false;
      }
      if ((dx > 0) && (dy == 0)) {
         if ((nx > 0) && (ny < 0)) return false;
         if ((nx > 0) && (ny > 0)) return false;
      }
      if ((dx == 0) && (dy > 0)) {
         if ((nx > 0) && (ny > 0)) return false;
         if ((nx < 0) && (ny > 0)) return false;
      }
      if ((dx < 0) && (dy == 0)) {
         if ((nx < 0) && (ny > 0)) return false;
         if ((nx < 0) && (ny < 0)) return false;
      }
      if ((dx < 0) && (dy < 0)) {
         if ((nx < 0) && (ny == 0)) return false;
         if ((nx == 0) && (ny < 0)) return false;
      }
      if ((dx > 0) && (dy < 0)) {
         if ((nx == 0) && (ny < 0)) return false;
         if ((nx > 0) && (ny == 0)) return false;
      }
      if ((dx > 0) && (dy > 0)) {
         if ((nx > 0) && (ny == 0)) return false;
         if ((nx == 0) && (ny > 0)) return false;
      }
      if ((dx < 0) && (dy > 0)) {
         if ((nx == 0) && (ny > 0)) return false;
         if ((nx < 0) && (ny == 0)) return false;
      }
  }
  return true;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if ((move.actions.length > 0) && (move.actions[0][0] !== null) && (move.actions[0][1] !== null)) {
           var pos = move.actions[0][0][0];
           var piece = board.getPiece(pos);
           if (piece !== null) {
               p = move.actions[0][1][0];
               if (piece.type > 1) {
                   if (design.inZone(0, 1, p) || design.inZone(0, 2, p)) {
                       move.failed = true;
                       return;
                   }
               }
               var target = board.getPiece(p);
               if ((target !== null) && (target.type == 0)) {
                   if ((move.actions.length < 2) || 
                       design.inZone(0, design.nextPlayer(board.player), move.actions[1][1][0])) {
                       move.failed = true;
                       return;
                   }
                   move.dropPiece(p, piece, 2);
                   var dx = sign(Dagaz.Model.getX(p) - Dagaz.Model.getX(pos));
                   var dy = sign(Dagaz.Model.getY(p) - Dagaz.Model.getY(pos));
                   pos = move.actions[1][1][0];
                   var nx = sign(Dagaz.Model.getX(pos) - Dagaz.Model.getX(p));
                   var ny = sign(Dagaz.Model.getY(pos) - Dagaz.Model.getY(p));
                   if (badDir(piece, dx, dy, nx, ny)) {
                       move.failed = true;
                       return;
                   }
               }
           }
      }
  });
  CheckInvariants(board);
}

})();
