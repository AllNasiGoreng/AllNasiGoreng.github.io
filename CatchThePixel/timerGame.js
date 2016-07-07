window.onload = function () {

    var intervallID = null;
    var playMe = document.getElementById("playMe");
    var points = 0;
    var pText = document.getElementsByTagName("h2")[0];
    var pH = 280;
    var pW = 480;
    
    var x = 240;
    var y = 140;
    var left = x + "px";
    var top = y + "px";
    playMe.style.left = left;
    playMe.style.top = top;

    function updatePoints() {
        pText.innerHTML = "Points: " + points;
    }

    playMe.addEventListener("click", startPlay, false);

    function startPlay() {
        if (intervallID === null) {
            intervallID = setInterval(function () {
                var left = x + "px";
                var top = y + "px";

                if(x > 0 && x <= pW && y > 0 && y <= pH) {
                    x = Math.random() * pW;
                    y = Math.random() * pH;
                }
                /*
                if(x < 0) { x = x + 20 }
                if(y < 0) { y = y + 20 }
                if(x > pW) { x = x - 20 }
                if(y > pH) { y = y - 20 }*/
                

                playMe.style.left = left;
                playMe.style.top = top;
            }, 650);
        } else {
            //clearInterval(intervallID);
            //intervallID = null;
            points ++;
            updatePoints();
            
        }
    }
};
