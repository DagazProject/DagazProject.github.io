(function() {

var MIN_TURNS = 100;
var MAX_TURNS = 200;

Dagaz.Model.setup = function(board) {
  var design = Dagaz.Model.design;
  var cnt = _.random(MIN_TURNS, MAX_TURNS);
  var b = board;
  while (cnt > 0) {
      b.generate(design);
      var ix = _.random(0, b.moves.length - 1);
      b = b.apply(b.moves[ix]);
      cnt--;
  }
  board.assign(b);
}

})();
