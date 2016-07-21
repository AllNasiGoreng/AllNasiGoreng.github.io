window.onload = function () {
    'use strict';

    var instructions = document.getElementById("instructions");

    //this will happen if the game is started via the go button
    function startGame() {

        var gameIntervallID = null, //intervall for updating the game
            food = document.getElementById("food"), //food, which is to catch
            points = 0,
            pText = document.getElementById("punkte"),
            //position of food
            x = 240,
            y = 140,
            left = x + "px",
            top = y + "px",
            player = document.getElementById("player"), //player, will just be animated
            pace = 650; //speed for how often game is updated

        function updatePosition() {
            //food gets new random position
            x = Math.random() * 480;
            y = Math.random() * 280;

            left = x + "px";
            top = y + "px";

            food.style.left = left;
            food.style.top = top;
        }

        function play() {
            if (gameIntervallID === null) {
                gameIntervallID = setInterval(function () {
                    updatePosition();
                }, pace);
            } else {
                //animation of animal
                player.style.backgroundImage = "url('../gameAssets/player2.png')";
                setTimeout(function () {
                    player.style.backgroundImage = "url('../gameAssets/player.png')";
                }, 1000);

                //update points
                points += 1;
                pText.innerHTML = "Punkte: " + points;

                //update speed of nasi goreng moving
                if (pace > 300) {
                    pace = pace - 1;
                }

                updatePosition();

            }
        }

        food.style.left = left;
        food.style.top = top;
        
        play();

        food.addEventListener("mouseover", play, false);

        food.style.visibility = "visible";
        pText.style.visibility = "visible";
        player.style.visibility = "visible";
    }

    if (window.innerWidth > 670) {
        var startButton = document.getElementById("startButton");

        instructions.innerHTML = "Klicke auf 'Go!' um das Spiel zu starten. Bewege den Mauszeiger über das Nasi Goreng, um es einzusammeln.";

        startButton.onclick = function () {
            startButton.style.display = "none";
            instructions.innerHTML = "Bewege den Mauszeiger über das Nasi Goreng, um es einzusammeln.";
            startGame();
        };


    } else {
        instructions.innerHTML = "Dieses Spiel ist leider nicht auf mobilen oder zu kleinen Bildschirmen verfügbar.";
    }
};
