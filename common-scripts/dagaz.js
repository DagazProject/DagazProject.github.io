var Dagaz  = {
  Model:      {},
  View:       {},
  AI:         {},
  KPI:        {},
  Controller: {}
};

Dagaz.Controller.persistense = "none";
Dagaz.Controller.loseRefresh = true;
Dagaz.Controller.randomized  = false;
Dagaz.Controller.noDropIndex = false;
Dagaz.Controller.cyclicDropIndex = false;
Dagaz.Controller.turnChanged = false;

Dagaz.AI.selector = false;

Dagaz.Controller.Done = function(board) {}

Dagaz.Controller.go = function(url) {
  window.location = url;
}

Dagaz.KPI.open  = function(scope, stage) {}
Dagaz.KPI.stage = function(stage, scope) {}
Dagaz.KPI.close = function(scope, stage) {}
Dagaz.KPI.set   = function(name, value, scope, stage) {}
Dagaz.KPI.dump  = function() {}

Dagaz.AI.findBot = function(type, params, parent) {
  return parent;
}

Dagaz.AI.isFriend = function(player, opponent) {
  return player == opponent;
}

Dagaz.AI.createContext = function(design) {
  return {
     design: design
  };
}

Dagaz.Model.Determinate = function(moves) {
  return _.chain(moves)
   .map(function(move) {
       return move.determinate();
    })
   .flatten()
   .value();
}

Dagaz.AI.generate = function(ctx, board) {
  if (!_.isUndefined(board.moves)) {
      return board.moves;
  }
  board.generate(ctx.design);
  board.moves = Dagaz.Model.Determinate(board.moves);
  if (!_.isUndefined(Dagaz.Model.PostProcessing)) {
      Dagaz.Model.PostProcessing(board, board.moves);
  }
  return board.moves;
}

Dagaz.AI.reject = function(ctx, move) {
  ctx.childs = _.filter(ctx.childs, function(child) {
      return child.move.toString() != move.toString();
  });
};
