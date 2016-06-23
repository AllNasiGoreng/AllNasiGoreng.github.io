//Spiel

document.onload = function () {
    //import sprites: canvas, nasi goreng, animal, text:points
    var canvas = document.getElementById("game"),
        
        points = 0, //Punktestand
        
        text = canvas.getContext("2d"); //Punktestandanzeige
    text.font = "20px Arial";
    text.fillText("Points: " + points, 10, 10);
    
};