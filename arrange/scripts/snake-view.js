(function() {

function View() {
  this.isConfigured = false;
  this.allReady     = false;
  this.res          = [];
  this.tile         = [];
  this.background   = null;
}

View.prototype.addRes = function(name, id) {
  var res = document.getElementById(name);
  var ix  = this.res.length;
  this.res.push(res);
  if (id) {
      this.tile[id] = ix;
  } else {
      this.background = res;
  }
}

View.prototype.configure = function() {
  if (!this.isConfigured) {
      this.addRes("background");
      this.addRes("wall", MySnake.WALL);
      this.addRes("cherry", MySnake.CHERRY);
      this.addRes("bee", MySnake.BEE);

      this.addRes("head-snh", MySnake.HEAD_1_S_N);
      this.addRes("head-weh", MySnake.HEAD_1_W_E);
      this.addRes("head-nsh", MySnake.HEAD_1_N_S);
      this.addRes("head-ewh", MySnake.HEAD_1_E_W);

      this.addRes("head-sn", MySnake.HEAD_2_S_N);
      this.addRes("head-we", MySnake.HEAD_2_W_E);
      this.addRes("head-ns", MySnake.HEAD_2_N_S);
      this.addRes("head-ew", MySnake.HEAD_2_E_W);

      this.addRes("body-sn", MySnake.BODY_S_N);
      this.addRes("body-we", MySnake.BODY_W_E);
      this.addRes("body-ns", MySnake.BODY_N_S);
      this.addRes("body-ew", MySnake.BODY_E_W);

      this.addRes("body-se", MySnake.BODY_S_E);
      this.addRes("body-nw", MySnake.BODY_W_N);
      this.addRes("body-nw", MySnake.BODY_N_W);
      this.addRes("body-se", MySnake.BODY_E_S);

      this.addRes("body-ws", MySnake.BODY_S_W);
      this.addRes("body-ws", MySnake.BODY_W_S);
      this.addRes("body-en", MySnake.BODY_N_E);
      this.addRes("body-en", MySnake.BODY_E_N);

      this.addRes("tail-sn", MySnake.TAIL_1_S_N);
      this.addRes("tail-we", MySnake.TAIL_1_W_E);
      this.addRes("tail-ns", MySnake.TAIL_1_N_S);
      this.addRes("tail-ew", MySnake.TAIL_1_E_W);

      this.addRes("tail-snh", MySnake.TAIL_2_S_N);
      this.addRes("tail-weh", MySnake.TAIL_2_W_E);
      this.addRes("tail-nsh", MySnake.TAIL_2_N_S);
      this.addRes("tail-ewh", MySnake.TAIL_2_E_W);

      this.isConfigured = true;
  }
}

View.prototype.isReady = function() {
  if (this.allReady) return true;
  for (var i = 0; i < this.res.length; i++) {
       var res = this.res[i];
       if (!res.complete || (res.naturalWidth == 0)) return false;
  }
  this.allReady = true;
  return true;
}

View.prototype.drawTile = function(ctx, id, x, y, ttl) {
  var res = this.res[ this.tile[id] ];
  if (!_.isUndefined(res)) {
      var isChanged = false;
      if ((id == MySnake.CHERRY) && (ttl <= MySnake.ONE_SECOND * 3)) {
          isChanged = true;
          ctx.save();
          ctx.globalAlpha = 0.5;
      }
      ctx.drawImage(res, x * MySnake.TILE_SIZE, y * MySnake.TILE_SIZE);
      if (isChanged) {
          ctx.restore();
      }
  }
}

View.prototype.drawAll = function() {
  if (this.isReady()) {
      var ctx = Canvas.getContext("2d");
      ctx.clearRect(0, 0, Canvas.width, Canvas.height);
      ctx.drawImage(this.background, 0, 0);
      var model = MySnake.model;
      model.draw(this, ctx);
  }
}

MySnake.view = new View();
MySnake.view.configure();

})();
