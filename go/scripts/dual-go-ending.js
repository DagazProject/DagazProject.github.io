(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dual-go-ending") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (!_.isUndefined(board.move) && board.move.isPass() && (board.parent !== null)) {
      if (!_.isUndefined(board.parent.move) && board.parent.move.isPass()) {
           _.delay(Dagaz.Controller.go, 500, 'dual-go-score.htm', true);
      }
  }
  CheckInvariants(board);
}

})();
