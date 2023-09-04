(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "northern-extension") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(10, "../sounds/wind.wav");
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.chain(board.moves)
   .filter(function(move) {
        return move.actions.length > 1;
    })
   .each(function(move) {
        var actions = [];
        var last  = null;
        _.each(move.actions, function(a) {
            if (a[0] !== null) {
                if (a[1] !== null) {
                    actions.push(a);
                    if (last !== null) {
                        var piece = board.getPiece(last);
                        if (piece !== null) {
                            piece = piece.promote(0);
                            actions.push([ [last], [last], [piece], a[3] ]);
                        }
                        last = null;
                    }
                } else {
                    last = a[0][0];
                    var piece = board.getPiece(last);
                    if (piece === null) {
                        move.failed = true;
                    } else {
                        if (piece.type == 0) {
                            actions.push(a);
                            last = null;
                        }
                    }
                }
            } else {
                move.failed = true;
            }
        });
        move.actions = actions;
    });
  CheckInvariants(board);
}

})();
