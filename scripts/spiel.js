//Spiel, nach dem Tutorial auf http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/

window.onload = function () {

    //VORBEREITEN: funktionen, canvas, context, points, pointText, player, food

    var canvas = document.getElementsByTagName("canvas"),
        ctx = canvas.getContext("2d"),

        breite = canvas.width,
        hoehe = canvas.height,

        points = 0, //zählt punktestand

        player = { //unbeweglich
            x: breite / 2.5,
            y: hoehe / 1.5
        },

        food = { //bewegt sich wenn angeklickt und muss gefangen werden
            x: getRandomX(),
            y: getRandomY(),
            speed: 50
        };
    
    function getRandomX() {
        Math.floor(Math.random() * breite);
    }

    function getRandomY() {
        Math.floor(Math.random() * hoehe);
    }
    // IMAGES

    //Hintergrund
    var backgroundReady = false,
        backgroundImage = new Image();
    
    backgroundImage.onload = function () {
        backgroundReady = true;
    };
    
    backgroundImage.src = "gameAssets/background.png";

    //Player
    var playerReady = false,
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

    var mousedown = {};

    food.addEventListener("mousedown", function () {
        mousedown.down = true;
    }, false);

    food.addEventListener("mouseup", function () {
        delete mousedown.down;
    }, false);

    //START

    var start = function () { //foodanfangsposition setzen
        food.x = getRandomX();
        food.y = getRandomY();
    };

    //AKTUALISIEREN

    var update = function () {
        if (mousedown.down) {
            //Update Points
            points += 1;

            //Update Position of Food
            food.x = getRandomX();
            food.y = getRandomY();
        }
    };

    //RENDERN
    var render = function () {
        //background, player, food
        if (backgroundReady) {
            ctx.drawImage(backgroundImage, 0, 0);
        }

        if (playerReady) {
            ctx.drawImage(playerImage, player.x, player.y);
        }

        if (foodReady) {
            ctx.drawImage(foodImage, food.x, food.y);
        }

        //points
        ctx.fillStyle = "#fff";
        ctx.font = "20px Roboto";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("Happyness: " + points);
    };

};
