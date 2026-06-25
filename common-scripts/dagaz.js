var Dagaz  = {
  Model:      {},
  View:       {},
  AI:         {},
  KPI:        {},
  Controller: {}
};

Dagaz.Controller.persistense     = "none";
Dagaz.Controller.loseRefresh     = true;
Dagaz.Controller.randomized      = false;
Dagaz.Controller.noDropIndex     = false;
Dagaz.Controller.cyclicDropIndex = false;
Dagaz.Controller.turnChanged     = false;
Dagaz.Controller.NO_STARTS_CACHE = false;

Dagaz.AI.selector = false;

Dagaz.Controller.humanPlayer = (function() {
  var result = window.location.search.match(/[?&]player=(\d+)/);
  return result ? +result[1] : 1;
})();

Dagaz.Controller.aiTimeout = function() {
  var result = window.location.search.match(/[?&]time=(\d+)/);
  return result ? (+result[1] * 1000) : null;
}

Dagaz.Controller.Done = function(board) {}

function urlParam(name, sep) {
  if (_.isUndefined(sep)) sep = '&';
  var re = new RegExp("[?&]" + name + "=(\\d+)");
  var r = window.location.search.match(re);
  if (r) {
      return sep + name + "=" + r[1];
  }
  return "";
}

Dagaz.Controller.go = function(url, sep) {
  if (_.isUndefined(sep)) sep = '?';
  url = url + urlParam("player", sep);
  url = url + urlParam("time");
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
