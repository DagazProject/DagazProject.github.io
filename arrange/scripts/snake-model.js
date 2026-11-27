(function() {

function Model() {
  this.units    = [];
  this.snakes   = [];
  this.next     = [];
  this.props    = [];

  this.props[0] = 100;
  this.props[1] = 20;
  this.props[2] = 5;

  this.next[MySnake.HEAD_1_S_N] = MySnake.HEAD_2_S_N;
  this.next[MySnake.HEAD_1_W_E] = MySnake.HEAD_2_W_E;
  this.next[MySnake.HEAD_1_N_S] = MySnake.HEAD_2_N_S;
  this.next[MySnake.HEAD_1_E_W] = MySnake.HEAD_2_E_W;

  this.next[MySnake.HEAD_2_S_N] = MySnake.BODY_S_N;
  this.next[MySnake.HEAD_2_W_E] = MySnake.BODY_W_E;
  this.next[MySnake.HEAD_2_N_S] = MySnake.BODY_N_S;
  this.next[MySnake.HEAD_2_E_W] = MySnake.BODY_E_W;

  this.next[MySnake.BODY_S_N]   = MySnake.TAIL_1_S_N;
  this.next[MySnake.BODY_W_E]   = MySnake.TAIL_1_W_E;
  this.next[MySnake.BODY_N_S]   = MySnake.TAIL_1_N_S;
  this.next[MySnake.BODY_E_W]   = MySnake.TAIL_1_E_W;

  this.next[MySnake.BODY_S_E]   = MySnake.TAIL_1_W_E;
  this.next[MySnake.BODY_W_S]   = MySnake.TAIL_1_N_S;
  this.next[MySnake.BODY_N_W]   = MySnake.TAIL_1_E_W;
  this.next[MySnake.BODY_E_N]   = MySnake.TAIL_1_S_N;

  this.next[MySnake.BODY_S_W]   = MySnake.TAIL_1_E_W;
  this.next[MySnake.BODY_W_N]   = MySnake.TAIL_1_S_N;
  this.next[MySnake.BODY_N_E]   = MySnake.TAIL_1_W_E;
  this.next[MySnake.BODY_E_S]   = MySnake.TAIL_1_N_S;

  this.next[MySnake.TAIL_1_S_N] = MySnake.TAIL_2_S_N;
  this.next[MySnake.TAIL_1_W_E] = MySnake.TAIL_2_W_E;
  this.next[MySnake.TAIL_1_N_S] = MySnake.TAIL_2_N_S;
  this.next[MySnake.TAIL_1_E_W] = MySnake.TAIL_2_E_W;
}

Model.prototype.clear = function() {
  this.units    = [];
  this.snakes   = [];
}

Model.prototype.getUnit = function(x, y) {
  for (var i = 0; i < this.units.length; i++) {
       if ((this.units[i].x == x) && (this.units[i].y == y)) {
           return this.units[i];
       }
  }
  return null;
}

Model.prototype.addUnit = function(x, y, type, ttl) {
   if (this.getUnit(x, y) !== null) return false;
   this.units.push({
       type: type,
       x:    x,
       y:    y,
       ttl:  ttl
   });
   return true;
}

Model.prototype.navigate = function(x, y, dx, dy) {
   var nx = x + dx;
   if (nx < 0) nx += MySnake.SIZE_X;
   if (nx >= MySnake.SIZE_X) nx -= MySnake.SIZE_X;
   var ny = y + dy;
   if (ny < 0) ny += MySnake.SIZE_Y;
   if (ny >= MySnake.SIZE_Y) ny -= MySnake.SIZE_Y;
   return {
       x: nx,
       y: ny
   };
}

Model.prototype.getDirection = function(dx, dy) {
  if (dy < 0) return 0;
  if (dx > 0) return 1;
  if (dy > 0) return 2;
  return 3;
}

Model.prototype.addSnake = function(player, x, y, dx, dy) {
   if (player < 0) return false;
   if (!_.isUndefined(this.snakes[player])) return false;
   if ((Math.abs(dx) > 1) || (Math.abs(dy) > 1)) return false;
   if ((dx != 0) && (dy != 0)) return false;
   if ((dx == 0) && (dy == 0)) return false;
   var direction = this.getDirection(dx, dy);
   if (!this.addUnit(x, y, MySnake.HEAD_1_S_N + direction, 1)) return false;
   var body = this.navigate(x, y, -dx, -dy);
   if (!this.addUnit(body.x, body.y, MySnake.BODY_S_N + direction, 2)) return false;
   var tail = this.navigate(body.x, body.y, -dx, -dy);
   if (!this.addUnit(tail.x, tail.y, MySnake.TAIL_1_S_N + direction, 1)) return false;
   this.snakes[player] = {
      player:   player,
      x:        x, 
      y:        y, 
      dx:       dx, 
      dy:       dy,
      commands: [],
      body:     [ this.getUnit(body.x, body.y) ],
      tail:     tail
   };
   return true;
}

Model.prototype.checkSnake = function(player, x, y, dx, dy) {
   if (player < 0) return false;
   if (!_.isUndefined(this.snakes[player])) return false;
   if ((Math.abs(dx) > 1) || (Math.abs(dy) > 1)) return false;
   if ((dx != 0) && (dy != 0)) return false;
   if ((dx == 0) && (dy == 0)) return false;
   var direction = this.getDirection(dx, dy);
   if (this.getUnit(x, y) !== null) return false;
   var body = this.navigate(x, y, -dx, -dy);
   if (this.getUnit(body.x, body.y) !== null) return false;
   var tail = this.navigate(body.x, body.y, -dx, -dy);
   if (this.getUnit(tail.x, tail.y) !== null) return false;
   return true;
}

Model.prototype.getTurn = function(snake, dx, dy) {
   if ((Math.abs(dx) > 1) || (Math.abs(dy) > 1)) return null;
   if ((dx != 0) && (dy != 0)) return null;
   if ((dx == 0) && (dy == 0)) return null;
   if ((snake.dx != 0) && (dx != 0)) return null;
   if ((snake.dy != 0) && (dy != 0)) return null;
   if ((snake.dx + snake.dy) * (dx + dy) > 0) return 1;
   return 0;
}

var getSetup = function() {
  var str = window.location.search.toString();
  var re  = /^\?setup=(.*)$/;
  str = str.replace(re, "$1");
  var result = [];
  if (str) {
      var type = 0;
      for (var i = 0; i < str.length; i++) {
           var c = str.charCodeAt(i);
           var num = null;
           if ((c >= "0".charCodeAt(0)) && (c <= "9".charCodeAt(0))) {
               num = c - "0".charCodeAt(0);
           }
           if ((c >= "A".charCodeAt(0)) && (c <= "Z".charCodeAt(0))) {
               num = c - "A".charCodeAt(0) + 10;
           }
           if (num !== null) {
               for (var j = 0; j < num; j++) {
                    result.push(type);
               }
           }
           if (type == 0) {
               type = 1;
           } else {
               type = 0;
           }
      }
  }
  return result;
}

Model.prototype.configure = function(conf) {
  var setup = getSetup();
  for (var y = 0; y < MySnake.SIZE_Y; y++) {
       for (var x = 0; x < MySnake.SIZE_X; x++) {
            if (setup.length > 0) {
                if (setup.shift() != 0) {
                    this.addUnit(x, y, MySnake.WALL, 0);
                }
            }
       }
  }
  while (true) {
       var x = _.random(10, MySnake.SIZE_X - 10);
       var y = _.random(0, MySnake.SIZE_Y - 1);
 	   if (this.checkSnake(0, x, y, 1, 0)) {
           this.addSnake(0, x, y, 1, 0);
		   break;
	   }
  }
}

Model.prototype.addCherry = function() {
  var cnt = 0;
  _.each(this.units, function(unit) {
      if ((unit.type == MySnake.CHERRY) || (unit.type == MySnake.BEE)) cnt++;
  });
  var p = this.props[cnt];
  if (!_.isUndefined(p)) {
      if (_.random(0, 1000) <= p) {
          var x = _.random(0, MySnake.SIZE_X - 1);
          var y = _.random(0, MySnake.SIZE_Y - 1);
          var ttl = _.random(MySnake.ONE_SECOND * 5, MySnake.ONE_SECOND * 15);
          var t = _.random(0, 10);
		  if (t <= 6) {
              this.addUnit(x, y, MySnake.CHERRY, ttl);
		  } else {
              this.addUnit(x, y, MySnake.BEE, ttl);
		  }
      }
  }
}

var getDir = function(type) {
  if ((type == MySnake.BODY_S_N) || (type == MySnake.BODY_W_N) || (type == MySnake.BODY_E_N)) {
      return 0;
  }
  if ((type == MySnake.BODY_W_E) || (type == MySnake.BODY_S_E) || (type == MySnake.BODY_N_E)) {
      return 1;
  }
  if ((type == MySnake.BODY_N_S) || (type == MySnake.BODY_E_S) || (type == MySnake.BODY_W_S)) {
      return 2;
  }
  return 3;
}

Model.prototype.beeMove = function() {
	_.each(this.units, function(u) {
		if (u.type == MySnake.BEE) {
			var t = _.random(0, 10);
			if (t < 5) {
			    var dx = _.random(-1, 1);
			    var dy = _.random(-1, 1);
			    if (this.getUnit(u.x + dx, u.y + dy) === null) {
				    u.x += dx;
				    u.y += dy;
			    }
			}
		}
	}, this);
}

Model.prototype.tick = function(controller) {
  var snakes = [];
  _.each(this.snakes, function(snake) {
      var isAlive = true;
      var u = this.getUnit(snake.x, snake.y);
      if ((u !== null) && (u.type >= MySnake.HEAD_2_S_N) && (u.type <= MySnake.HEAD_2_E_W)) {
          var direction = this.getDirection(snake.dx, snake.dy);
          var turn = null;
          if (snake.commands.length > 0) {
              var command = snake.commands.shift();
              turn = this.getTurn(snake, command.dx, command.dy);
          }
          if (turn !== null) {
              u.type = MySnake.BODY_S_E + turn * 4 + direction;
              snake.dx = command.dx;
              snake.dy = command.dy;
          } else {        
              u.type = MySnake.BODY_S_N + direction;
          }
          u.ttl = snake.body.length * 2 + 1;
          var p = this.navigate(snake.x, snake.y, snake.dx, snake.dy);
          var t = this.getUnit(p.x, p.y);
          if ((snake.body.length > 0) && (t === null)) {
              var dir = getDir(snake.body[0].type);
              snake.body[0].type = MySnake.TAIL_1_S_N + dir;
              snake.body[0].ttl  = 2;
          }
          snake.body.push(u);
          snake.x = p.x;
          snake.y = p.y;
          direction = this.getDirection(snake.dx, snake.dy);
          if (t === null) {
              this.addUnit(p.x, p.y, MySnake.HEAD_1_S_N + direction, 2);
              snake.tail = snake.body.shift();
          } else {
              if (t.type == MySnake.CHERRY) {
                  t.type = MySnake.HEAD_1_S_N + direction;
                  t.ttl  = 2;
                  _.each(snake.body, function(body) {
                      body.ttl += 2;
                  });
                  if (!_.isUndefined(snake.tail)) {
                      snake.tail.ttl += 2;
                  }
              } else {
                  isAlive = false;
                  _.each(snake.body, function(body) {
                      body.type = 0;
                      body.ttl  = 1;
                  });
                  controller.die(snake.player);
              }
          }
      }
      if (isAlive) snakes.push(snake);
  }, this);
  this.snakes = snakes;
  var units = [];
  _.each(this.units, function(u) {
      if (u.ttl == 0) {
          units.push(u);
          return;
      }
      if (u.ttl != 1) {
          u.ttl--;
          units.push(u);
      } else {
          if (!_.isUndefined(this.next[u.type])) {
              u.type = this.next[u.type];
              units.push(u);
          }
      }
  }, this);
  this.units = units;
  this.addCherry();
  this.beeMove();
}

Model.prototype.draw = function(view, ctx) {
  for (var i = 0; i < this.units.length; i++) {
       view.drawTile(ctx, this.units[i].type, this.units[i].x, this.units[i].y, this.units[i].ttl);
  }
}

Model.prototype.send = function(player, dx, dy) {
  if (!_.isUndefined(this.snakes[player])) {
      this.snakes[player].commands.push({
         dx: dx,
         dy: dy
      });
  }
}

MySnake.model = new Model();
MySnake.model.configure();

})();
