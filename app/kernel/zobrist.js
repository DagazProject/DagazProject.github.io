(function() {

var hash = null;

var getRandomByte = function() {
  return _.random(0, 255);
}

var getRandomValue = function() {
  var r = getRandomByte();
  for (var i = 0; i < 3; i++) {
      r = r << 8;
      r = r | getRandomByte();
  }
  return r;
}

var getValue = function(type, player, pos) {
  if (hash === null) {
      hash = [];
  }
  if (_.isUndefined(hash[type])) {
      hash[type] = [];
  }
  if (_.isUndefined(hash[type][player])) {
      hash[type][player] = [];
  }
  if (_.isUndefined(hash[type][player][pos])) {
      hash[type][player][pos] = getRandomValue();
  }
  return hash[type][player][pos];
}

games.model.zupdate = function(value, piece, pos) {
  return value ^ getValue(piece.type, piece.player, pos);
}

})();
