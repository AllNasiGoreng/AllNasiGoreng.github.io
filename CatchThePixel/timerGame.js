window.onload = function () {

    var intervallID = null,
        playMe = document.getElementById("playMe"),
        points = 0,
        pText = document.getElementsByTagName("h2")[0],
        x = 240,
        y = 140,
        left = x + "px",
        top = y + "px";
    playMe.style.left = left;
    playMe.style.top = top;

    function updatePoints() {
        pText.innerHTML = "Points: " + points;
    }

    playMe.addEventListener("mouseover", startPlay, false);

    function startPlay() {
        if (intervallID === null) {
            intervallID = setInterval(function () {
                left = x + "px";
                top = y + "px";

                x = Math.random() * 480;
                y = Math.random() * 280;

                playMe.style.left = left;
                playMe.style.top = top;
            }, 650);
        } else {
            points += 1;
            updatePoints();

        }
    }
};
