(function() {

Dagaz.Model.showLose = false;

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(10, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(11, "../sounds/shoot.wav", true);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var up = design.getDirection("up");
  var down = design.getDirection("down");
  _.chain(board.moves)
   .filter(function(move) {
       return move.actions.length == 1;
    })
   .each(function(move) {
       var from = move.actions[0][0][0];
       var to   = move.actions[0][1][0];
       var dir  = design.findDirection(from, to);
       if (dir !== null) {
           var d = design.navigate(1, from, down);
           var p = design.navigate(1, from, up);
           while ((d === null) && (p !== null)) {
               var piece = board.getPiece(p);
               if (piece !== null) {
                   var t = design.navigate(1, p, dir);
                   if (t !== null) {
                       t = design.navigate(1, t, dir);
                   }
                   if (t !== null) {
                       if ((piece.type == 1) && design.inZone(1, board.player, t)) {
                            piece = piece.promote(6);
                       }
                       move.movePiece(p, t, piece.setValue(0, true));
                   }
               }
               p = design.navigate(board.player, p, up);
           }
       }
    });
  CheckInvariants(board);
}

})();
