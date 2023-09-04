(function() {

Dagaz.AI.inProgress = false;
Dagaz.AI.SERVICE = "https://games.dtco.ru/api/";
Dagaz.AI.sid = null;

var result = null;

var showResult = function() {
  var view = Dagaz.Controller.app.view;
  var b = []; var s = [];
  for (var i = 0; i < result.length; i++) {
       var pos = Dagaz.Model.stringToPos(result[i].move);
       if (Math.abs(result[i].weight) > 500) {
           b.push(pos);
       } else {
           s.push(pos);
       }
  }
  view.markPositions(5, b); 
  view.markPositions(6, s);
}

Dagaz.AI.clearAdvisor = function() {
  var view = Dagaz.Controller.app.view;
  view.markPositions(5, []);
  view.markPositions(6, []);
}

Dagaz.AI.getSid = function(callback, ctx, setup) {
  $.ajax({
     url: Dagaz.AI.SERVICE + "ai",
     type: "GET",
     crossDomain: true,
     dataType: "json",
     success: function(data) {
         Dagaz.AI.sid = data.sid;
         Dagaz.AI.inProgress = false;
         if (callback) {
             callback(ctx, setup);
         }
     },
     error: function() {
         console.log('Auth: Error!');
         window.location = '/';
     },
     statusCode: {
        500: function() {
             console.log('Auth: Internal Error!');
             window.location = '/';
        }
     }
  });
}

Dagaz.AI.advisor = function(setup) {
  if (result !== null) {
      showResult();
      result = null;
      return true;
  }
  if (Dagaz.AI.inProgress) return false;
  Dagaz.AI.inProgress = true;
  if (Dagaz.AI.sid === null) {
      Dagaz.AI.getSid();
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
         variant_id: 225,
         coeff: 2
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

})();
