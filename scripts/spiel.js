//Spiel, nach dem Tutorial auf http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/
//VORBEREITEN: funktionen, canvas, context, points, pointText, player, food
"use strict";

window.onload = function () {
    var canvas = document.getElementById("c"),
        ctx = canvas.getContext("2d"),

        breite = canvas.width,
        hoehe = canvas.height,

        points = 0; //zählt punktestand

    function getRandomX() {
        return Math.floor(Math.random() * (breite - (breite / 5)));
    }

    function getRandomY() {
        return Math.floor(Math.random() * (hoehe - (hoehe / 5)));
    }

    var player = { //unbeweglich
            x: breite / 2.5,
            y: hoehe / 1.65
        },

        food = { //bewegt sich wenn angeklickt und muss gefangen werden
            x: getRandomX(),
            y: getRandomY()
        },

        // IMAGES

        //Player
        playerReady = false,
        playerImage = new Image();

    playerImage.onload = function () {
        playerReady = true;
    };

    playerImage.src = "gameAssets/player.png";

    //Food
    var foodReady = false,
        foodImage = new Image();

    foodImage.onload = function () {
        foodReady = true;
    };

    foodImage.src = "gameAssets/food.png";

    //USER INPUT VERWERTEN: onmousedown - onmouseup

    /*
        var mousedown = {};

        foodImage.onclick = function () {
            console.log("clicked");
        };
        
    foodImage.onmousedown = function () {
        mousedown.down = true;
        window.console.log("down");
    };

    foodImage.onmouseup = function () {
        delete mousedown.down;
        window.console.log("up");
    };
    */

    //START

    var start = function () { //foodanfangsposition setzen
            food.x = getRandomX();
            food.y = getRandomY();
        },

        //AKTUALISIEREN

        update = function () {
            //Update Points
            points += 1;

            //Update Position of Food
            food.x = getRandomX();
            food.y = getRandomY();

        },

        //RENDERN
        render = function () {
            //clear

            ctx.clearRect(0, 0, breite, hoehe);

            //player, food


            if (playerReady) {
                ctx.drawImage(playerImage, player.x, player.y);
            }

            if (foodReady) {
                ctx.drawImage(foodImage, food.x, food.y);
            }

            //points
            ctx.fillStyle = "#fff";
            ctx.font = "16px Roboto";
            ctx.textAlign = "left";
            ctx.textBaseline = "top";
            ctx.fillText("Happyness: " + points, 10, 10);
        },

        //GAME LOOP
        main = function () {
            window.onclick = update;
            render();

            //redo
            window.requestAnimationFrame(main);
        },

        //Browser support
        w = window;
    window.requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

    start();
    main();

};
