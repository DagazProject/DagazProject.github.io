(function() {

Dagaz.Model.deferredStrike = true;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "deferred-captures") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(10, "../sounds/wind.wav");
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  _.chain(board.moves)
   .filter(function(move) {
        return move.actions.length > 0;
    })
   .each(function(move) {
        var mx = _.chain(move.actions)
         .map(function(action) {
              return action[3];
          }).max().value();
          var actions = [];
          _.each(move.actions, function(action) {
              var pn = action[3];
              if ((action[0] !== null) && (action[1] === null)) {
                  pn = mx;
              }
              actions.push([ action[0], action[1], action[2], pn ]);
          });
          move.actions = actions;
    });
  CheckInvariants(board);
}

})();
