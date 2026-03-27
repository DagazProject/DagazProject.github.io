"use strict";

(function() {

Dagaz.AI.WORKER_NAME = 'scripts/garbochess-worker.js';
Dagaz.AI.WORKER_TIME = 1000;

let g_backgroundEngine = null;
let inProgress = false;

function Ai(parent) {
  this.parent = parent;
}

const findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "external") || (type == "smart") /*|| (type == "1")*/ || (type == "2")) {
      return new Ai(parent);
  } else {
      return findBot(type, params, parent);
  }
}

function stop() {
    if (g_backgroundEngine !== null) {
        g_backgroundEngine.terminate();
        g_backgroundEngine = null;
        Dagaz.View.switchControl(4, 0);
    }
    inProgress = false;
}

function start(fen, isAdvisor) {
    if (g_backgroundEngine !== null) return;
    g_backgroundEngine = new Worker(Dagaz.AI.WORKER_NAME);
    g_backgroundEngine.onmessage = onMessage;
    g_backgroundEngine.error = function (e) {
       console.log("Error from background worker:" + e.message)
    }
    fen = fen.replaceAll('+', ' ');
    g_backgroundEngine.postMessage("position " + fen);
    if (isAdvisor && !_.isUndefined(Dagaz.AI.ADVISOR_TIME)) {
        g_backgroundEngine.postMessage("search " + Dagaz.AI.ADVISOR_TIME);
    } else {
        g_backgroundEngine.postMessage("search " + Dagaz.AI.WORKER_TIME);
    }
    Dagaz.View.switchControl(4, 1);
}

function onMessage(msg) {
    if (msg.data.match("^pv") == "pv") {
        console.log(msg.data.substr(3, msg.data.length - 3));
    } else if (msg.data.match("^message") == "message") {
        stop();
        console.log(msg.data.substr(8, msg.data.length - 8));
    } else {
        stop();
        const move = msg.data;
        console.log(move);
        if (Dagaz.AI.callback) {
            Dagaz.AI.callback(move);
        }
    }
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.timestamp = Date.now();
  ctx.board = board;
}

Ai.prototype.stop = function() {
  stop();
}

Ai.prototype.getMove = function(ctx, isAdvisor) {
  if (_.isUndefined(isAdvisor)) isAdvisor = false;
  const moves = Dagaz.AI.generate(ctx, ctx.board);
  if (moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  if (moves.length == 1) {
      return {
           done: true,
           move: moves[0],
           time: Date.now() - ctx.timestamp,
           ai:  "once"
      };
  }
  if (inProgress) {
      return {
           done: false,
           time: Date.now() - ctx.timestamp,
           ai:  "worker"
      };
  }
  const setup = Dagaz.Model.getSetup(ctx.design, ctx.board);
  const result = setup.match(/[?&]setup=(.*)/);
  if (result) {      
      inProgress = true;
      const fen = result[1];
      start(fen, isAdvisor);
      return {
           done: false,
           time: Date.now() - ctx.timestamp,
           ai:  "worker"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
