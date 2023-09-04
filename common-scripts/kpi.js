(function() {

var last  = "default";
var limit = 500;

Dagaz.KPI.open = function(scope, stage) {
  if (_.isUndefined(Dagaz.KPI.slots)) {
      Dagaz.KPI.slots = [];
  }
  if (_.isUndefined(Dagaz.KPI.scope)) {
      Dagaz.KPI.scope = [];
  }
  if (!Dagaz.KPI.scope[scope]) {
      Dagaz.KPI.scope[scope] = [];
  }
  var timestamp = new Date();
  if (!stage) {
      last = scope;
  } else {
      if (Dagaz.KPI.scope[scope].start) {
          var time = timestamp.getTime() - Dagaz.KPI.scope[scope].start.getTime();
          Dagaz.KPI.set("time", time, scope);
      }
      Dagaz.KPI.scope[scope].stage = stage;
  }
  Dagaz.KPI.scope[scope].start = timestamp;
}

Dagaz.KPI.stage = function(stage, scope) {
  if (!scope) {
      scope = last;
  }
  Dagaz.KPI.open(scope, stage);
}

Dagaz.KPI.close = function(scope, stage) {
  if (Dagaz.KPI.scope[scope]) {
      var timestamp = new Date();
      var time = timestamp.getTime() - Dagaz.KPI.scope[scope].start.getTime();
      Dagaz.KPI.set("time", time, scope, stage);
      delete Dagaz.KPI.scope[scope];
  }
}

Dagaz.KPI.set = function(name, value, scope, stage) {
  if (!scope) {
      scope = last;
  }
  if (Dagaz.KPI.scope[scope] && Dagaz.KPI.scope[scope].stage) {
      if (!stage) {
          stage = Dagaz.KPI.scope[scope].stage;
      }
      var key = scope + "." + stage + "." + name;
      if (!Dagaz.KPI.slots[key]) {
          Dagaz.KPI.slots[key] = [];
          Dagaz.KPI.slots[key].cnt = 1;
          Dagaz.KPI.slots[key].sum = value;
          Dagaz.KPI.slots[key].min = value;
          Dagaz.KPI.slots[key].max = value;
      } else {
          Dagaz.KPI.slots[key].cnt++;
          Dagaz.KPI.slots[key].sum += value;
          if (value < Dagaz.KPI.slots[key].min) {
              Dagaz.KPI.slots[key].min = value;
          }
          if (value > Dagaz.KPI.slots[key].max) {
              Dagaz.KPI.slots[key].max = value;
          }
      }
  }
}

Dagaz.KPI.dump  = function() {
  if (Dagaz.KPI.slots) {
      _.each(_.keys(Dagaz.KPI.slots), function(key) {
          var s = Dagaz.KPI.slots[key];
          if (s.sum > limit) {
              console.log("KPI [" + key + "] = " + s.cnt + ", " + s.sum + ", " + s.min + ", " + s.max);
          }
      });
  }
  Dagaz.KPI.slots = [];
}

})();
