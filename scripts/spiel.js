window.onload = function () {

    instructions = document.getElementById("instructions");

    if (window.innerWidth > 670) {
        var intervallID = null,
            food = document.getElementById("food"),
            points = 0,
            pText = document.getElementById("punkte"),
            x = 240,
            y = 140,
            left = x + "px",
            top = y + "px";

        food.style.left = left;
        food.style.top = top;

        //react to mobile??
        instructions.innerHTML = "Bewege den Mauszeiger über das Nasi Goreng, um es einzusammeln.";

        function updatePoints() {
            pText.innerHTML = "Punkte: " + points;
        }

        food.addEventListener("mouseover", startPlay, false);

        function startPlay() {
            if (intervallID === null) {
                intervallID = setInterval(function () {
                    //animation

                    left = x + "px";
                    top = y + "px";

                    x = Math.random() * 480;
                    y = Math.random() * 280;

                    food.style.left = left;
                    food.style.top = top;
                }, 650);
            } else {
                points += 1;
                updatePoints();

            }
        }
    } else {
        instructions.innerHTML = "Dieses Spiel ist leider nicht auf mobilen oder zu kleinen Bildschirmen verfügbar.";
    }
};
