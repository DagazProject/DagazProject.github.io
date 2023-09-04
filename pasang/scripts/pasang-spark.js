(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "pasang-spark") {
      checkVersion(design, name, value);
  }
}

Dagaz.View.showBoard = function(board, ctx) {
  var a = board.getValue(1);
  var b = board.getValue(2);
  if ((a === null) || (b === null)) return;
  var m = ((b * 363)/(a + b)) | 0;
  ctx.save();
  ctx.fillStyle = 'red';
  ctx.fillRect(0, 365, m, 6);
  ctx.fillStyle = 'blue';
  ctx.fillRect(m, 365, 363 - m, 6);
  if (a != b) {
      if (b > a) ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.arc(m, 368, 3, 0, 2 * Math.PI);
      ctx.fill();
  }
  ctx.restore();
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var ko = [];
  _.each(board.moves, function(move) {
      if (!move.failed && (move.actions.length > 0) && (move.actions[0][0] !== null)) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.type > 0)) {
              if (_.indexOf(ko, pos) < 0) {
                 ko.push(pos);
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
