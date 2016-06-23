//Spiel

window.onload = function () {
    
    //VORBEREITEN: canvas, context, points, pointText, player, food

    var canvas = document.getElementsByTagName("canvas"),
        ctx = canvas.getContext("2d"),

        points = 0,

        pointText = {
            x: 30,
            y: 30,
            tex: "points: " + points
        },

        player = {
            x: canvas.width / 2.5,
            y: canvas.height / 1.5
        },

        food = {
            x: canvas.width / 4,
            y: 30,
            speed: 50
        };

    //USER INPUT VERWERTEN: onmousedown - onmouseup

    //START

    var start = function () {
        food.x = 30;
        food.y = 50;
    };

    //AKTUALISIEREN

    var update = function () {
        if (/*food geklickt*/) {
            //Update Points
            points++;
            pointText.tex = "points: " + points;
            
            //Update Position of Food
            food.x = /*random*/;
            food.y = /*random*/;
        }
    }
    
    //RENDERN


};
