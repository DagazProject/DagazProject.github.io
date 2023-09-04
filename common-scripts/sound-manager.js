Dagaz.Sounds = [];

Dagaz.Sounds.move  = 0;
Dagaz.Sounds.drop  = 1;
Dagaz.Sounds.win   = 2;
Dagaz.Sounds.lose  = 3;
Dagaz.Sounds.draw  = 4;
Dagaz.Sounds.page  = 5;
Dagaz.Sounds.start = 6;
Dagaz.Sounds.hint  = 7;
Dagaz.Sounds.popup = 8;

Dagaz.Controller.soundOff = false;

(function() {

var sounds  = [];
var current = null;

function Sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

Dagaz.Controller.addSound = function(ix, src) {
    sounds[ix] = src;
}
Dagaz.Controller.play = function(ix) {
    if (Dagaz.Controller.soundOff) return;
    Dagaz.Controller.stop();
    if ((current === null) && !_.isUndefined(sounds[ix])) {
         current = new Sound(sounds[ix]);
         current.play();
    }
}

Dagaz.Controller.stop = function() {
    if (current !== null) {
        current.stop();
        current = null;
    }
}

Dagaz.Controller.sound = function() {
    if (Dagaz.Controller.soundOff) {
        sound.innerHTML = "no Sound";
        Dagaz.Controller.soundOff = false;
        localStorage.setItem('dagaz.sound', 'on');
    } else {
        sound.innerHTML = "Sound";
        Dagaz.Controller.soundOff = true;
        localStorage.setItem('dagaz.sound', 'off');
    }
}

Dagaz.Controller.checkSound = function() {
   var result = localStorage.getItem('dagaz.sound');
   if (result == 'off') {
       sound.innerHTML = "Sound";
       Dagaz.Controller.soundOff = true;
   } else {
       sound.innerHTML = "no Sound";
       Dagaz.Controller.soundOff = false;
   }
}

})();

Dagaz.Controller.checkSound();

Dagaz.Controller.addSound(Dagaz.Sounds.move, "../sounds/clack.wav");
Dagaz.Controller.addSound(Dagaz.Sounds.drop, "../sounds/on.wav");
Dagaz.Controller.addSound(Dagaz.Sounds.win,  "../sounds/tadam.wav");
Dagaz.Controller.addSound(Dagaz.Sounds.lose, "../sounds/loss.wav");
Dagaz.Controller.addSound(Dagaz.Sounds.draw, "../sounds/draw.ogg");
Dagaz.Controller.addSound(Dagaz.Sounds.page, "../sounds/page.wav");
Dagaz.Controller.addSound(Dagaz.Sounds.hint, "../sounds/bird.wav");
Dagaz.Controller.addSound(Dagaz.Sounds.popup, "../sounds/popup.wav");
