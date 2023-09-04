"use strict";

(function() {

Dagaz.Model.WIDTH  = 19;
Dagaz.Model.HEIGHT = 19;

let result = null;

function Ai(parent) {
  this.parent = parent;
}

let findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "common") || (type == "1") || (type == "2")) {
      return new Ai(parent);
  } else {
      return findBot(type, params, parent);
  }
}

function sendResult(ctx, result) {
  if (result.length == 0) return;
  let ix = 0;
  if (result.length > 1) ix = _.random(0, result.length - 1);
  const app = Dagaz.Controller.app;
  const player = app.design.playerNames[app.board.player];
  console.log("Player: " + player);
  let move = null;
  _.each(app.board.moves, function(m) {
      let x = m.toString() + ' ';
      if (x.startsWith(result[ix].move.toString() + ' ')) {
          move = m;
      }
  });
  if (move === null) return;
  app.boardApply(move);
  var s = move.toString();
  if (!_.isUndefined(Dagaz.Model.getSetup)) {
      s = Dagaz.Model.getSetup(app.design, app.board);
      console.log("Setup: " + s);
  }
  Dagaz.Model.Done(app.design, app.board);
  app.move = move;
  app.state = 4;
}

function advisor(ctx, setup) {
  if (result !== null) {
      sendResult(ctx, result);
      result = null;
      return true;
  }
  if (Dagaz.AI.inProgress) return false;
  Dagaz.AI.inProgress = true;
  if (Dagaz.AI.sid === null) {
      Dagaz.AI.getSid(advisor, ctx, setup);
      return false;
  }
  console.log('sid = ' + Dagaz.AI.sid + ', setup = ' + setup);
  $.ajax({
     url: Dagaz.AI.SERVICE + "ai",
     type: "PUT",
     crossDomain: true,
     data: {
         sid: Dagaz.AI.sid,
         setup: setup,
         variant_id: 2,
         coeff: 5
     },
     dataType: "json",
     success: function(data) {
         if (data.length > 0) {
             result = data;
         }
         Dagaz.AI.inProgress = false;
     },
     statusCode: {
        404: function() {
             result = null;
             Dagaz.AI.inProgress = false;
        },
        500: function() {
             console.log('Auth: Internal Error!');
             window.location = '/';
        }
     }
  });
  return false;
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.timestamp = Date.now();
  ctx.board  = board;
  Dagaz.AI.inProgress = false;
  result = null;
}

Ai.prototype.getMove = function(ctx) {
  const moves = Dagaz.AI.generate(ctx, ctx.board);
  const board = Dagaz.AI.getBoard(ctx.board);
  ctx.forbidden = []; let hints = [];
  const stat = Dagaz.AI.checkForbidden(board, ctx.forbidden, hints, []);
  hints = _.difference(hints, ctx.forbidden);
  if (hints.length > 0) {
      let ix = 0;
      if (hints.length > 1) ix = _.random(0, hints.length - 1);
      const move = Dagaz.Model.posToString(hints[ix]);
      for (let i = 0; i < ctx.board.moves.length; i++) {
           if (ctx.board.moves[i].toString() == move) {
               return {
                   done: true,
                   move: ctx.board.moves[i],
                   time: Date.now() - ctx.timestamp,
                   ai:   "internal"
               };
           }
      }
  }
  const setup = Dagaz.Model.getSetup(ctx.design, ctx.board);
  advisor(ctx, setup);
}

})();
