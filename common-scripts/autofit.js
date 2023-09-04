(function(){
    var windowWidth = 0, 
    windowHeight = 0,
    canvasWidth=0,
    canvasHeight=0,
    canvasAspect=0;
        //canvasFit
  
    function isSquare(box) {return box.width === box.height;}
    function isLandscape(box) {return box.width > box.height;}
    function isPortrait(box) {return box.width < box.height;}
    function aspectRatio(box) {return box.width / box.height;}

    var FitCalc = function(boundary, box) {
        if (isLandscape(boundary) && isLandscape(box)) {
            return aspectRatio(box) > aspectRatio(boundary)
              ? {
                  width: boundary.width,
                  height: (boundary.width / box.width) * box.height,
                }
              : {
                  width: (boundary.height / box.height) * box.width,
                  height: boundary.height,
                };
          }
        
          if (isPortrait(boundary) && isPortrait(box)) {
            return aspectRatio(box) > aspectRatio(boundary)
              ? {
                  width: boundary.width,
                  height: (boundary.width / box.width) * box.height,
                }
              : {
                  width: (boundary.height / box.height) * box.width,
                  height: boundary.height,
                };
          }
        
          if (isPortrait(boundary) && isLandscape(box)) {
            return {
              width: boundary.width,
              height: (boundary.width / box.width) * box.height,
            };
          }
        
          if (isSquare(boundary) && isLandscape(box)) {
            return {
              width: boundary.width,
              height: (boundary.width / box.width) * box.height,
            };
          }
        
          if (isLandscape(boundary) && isPortrait(box)) {
            return {
              height: boundary.height,
              width: (boundary.height / box.height) * box.width,
            };
          }
        
          if (isSquare(boundary) && isPortrait(box)) {
            return {
              width: (boundary.height / box.height) * box.width,
              height: boundary.height,
            };
          }
        
          if (isLandscape(boundary) && isSquare(box)) {
            return {
              width: (boundary.height / box.height) * box.width,
              height: boundary.height,
            };
          }
        
          if (isPortrait(boundary) && isSquare(box)) {
            return {
              width: boundary.width,
              height: (boundary.width / box.width) * box.height,
            };
          }
        
          // Both are square
          return boundary;
    }

    var FitBox = function() {
        windowWidth = window.innerWidth ;
        windowHeight = window.innerHeight ;
        if(windowWidth < windowHeight) {
            windowWidth -= 40;
            windowHeight *= 0.8;
        }else{
            windowWidth *= 0.8;
            windowHeight -= 60;
        }
//      console.log(windowWidth,windowHeight,canvasWidth,canvasHeight, canvasAspect);
        var boundary = FitCalc({width:windowWidth,height:windowHeight},{width:canvasWidth,height:canvasHeight});
//      console.log(boundary);
        document.getElementById("canvasFit").style.width = boundary.width;
        document.getElementById("canvasFit").style.height = boundary.height;

        var rotatePlace = document.getElementById("rotatePlace");
        if(ScreenOrientation && ScreenOrientation.unlock) { ScreenOrientation.unlock();}
        if(window.screen.unlockOrientation) { window.screen.unlockOrientation();}
        if(Math.abs(canvasAspect-1) <0.1) {
            //square, remove rotate device request
//          rotatePlace.classList.add("not-need");
        }else{
            //need rotate device instead, detect better side for playing
            if(canvasAspect > 1) { //width instead
//              rotatePlace.classList.add("perfect-width");
                if(ScreenOrientation && ScreenOrientation.lock) { ScreenOrientation.lock('landscape');}
                if(window.screen.lockOrientation) { window.screen.lockOrientation("landscape");}
            }else{//height instead
//              rotatePlace.classList.add("perfect-height");
                if(ScreenOrientation && ScreenOrientation.lock) { ScreenOrientation.lock('portrait');}
                if(window.screen.lockOrientation) { window.screen.lockOrientation("portrait");}
            }
        }
    }

    window.onload = function() {
        canvasWidth = document.getElementById("Canvas").width;
        canvasHeight = document.getElementById("Canvas").height;
        canvasAspect = canvasWidth/canvasHeight;
       
        FitBox();
    }

    window.onresize = function() {
        FitBox();
    }

    window.addEventListener("orientationchange",function(){
        FitBox();
    });

})();