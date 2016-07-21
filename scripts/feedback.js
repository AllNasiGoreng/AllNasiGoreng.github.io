window.onload = function () {
    'use strict';

    var button = document.getElementsByName("submit")[0];

    button.onclick = validate;

    function validate() {
        var vorname = document.forms['feedback']['vorname'].value,
            nachname = document.forms['feedback']['nachname'].value,
            email = document.forms['feedback']['email'].value,
            message = "",
            atLeastOneInvalid = 0,
            containsNumbers = 0,
            numbers = /[0-9]+/;
        
        //emptyness
        if (vorname === "" || numbers.test(vorname)) {
            message = message + "Dein Vorname ist ungültig. ";
            atLeastOneInvalid = 1;
        }

        if (nachname === "" || numbers.test(nachname)) {
            message = message + "Dein Nachname ist ungültig. ";
            atLeastOneInvalid = 1;
        }

        if (email === "") {
            message = message + "Gib bitte deine Emailadresse an. ";
            atLeastOneInvalid = 1;
        }

        //alert message
        if (atLeastOneInvalid) {
            alert(message);
        }

    }
};
