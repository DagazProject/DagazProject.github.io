(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "bushi-coalition") {
      checkVersion(design, name, value);
  }
}

Dagaz.AI.isFriend = function(player, opponent) {
  return (player % 2) == (opponent % 2);
}

})();
