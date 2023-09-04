(function() {

Dagaz.View.KO_ALPHA = 0.7;
Dagaz.View.CLEAR_KO = true;
Dagaz.Model.passForcedDraw = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "oblong-restrictions") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(10, "../sounds/dice.wav", true);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var ko = [];
  if (!_.isUndefined(board.move) && board.move.isDropMove()) {
      var dice = design.price[board.move.actions[0][2][0].type];
      var pos = board.move.actions[0][1][0];
      _.each(board.moves, function(move) {
          if ((move.mode > 0) && (move.mode < 7) && (move.mode != dice)) {
               move.failed = true;
               return;
          }
          if (move.isSimpleMove() && (move.mode != 7)) {
               var p = move.actions[0][0][0];
               if (_.indexOf(ko, p) < 0) {
                   ko.push(p);
               }
          }
          move.capturePiece(pos);
      });
  }
  if (ko.length > 0) {
      board.ko = ko;
  }
  CheckInvariants(board);
}

})();
