(function() {

var DIR_NAMES   = {
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7
};

var exec = function(command) {
  var app = Dagaz.Controller.app;
  if (app.list && (app.state == 1)) {
      var design = Dagaz.Model.design;
      var moves = [];
      _.each(app.list.moves, function(m) {
          if ((m.actions.length > 0) && (m.actions[0][1] !== null)) {
               var pos = m.actions[0][1][0];
               if ((pos == command) || (pos == command +7)) {
                   moves.push(m);
               }
          }
      });
      if (moves.length == 1) {
          app.move  = moves[0];
          app.board = app.board.apply(app.move);
          app.state = 4; // STATE.EXEC
          delete app.list;
      }
  }
}

var onkeyup = window.onkeyup;

window.onkeyup = function(event) {
  var command = DIR_NAMES[event.key];
  if (_.isUndefined(event.key)) {
      command = DIR_NAMES[event.keyIdentifier];
  }
  if (command) {
      exec(command - 1);
  }
  if (onkeyup) {
      onkeyup(event);
  }
}

})();
