window.onload = function () {
    'use strict';
    var vorname = document.forms['feedback']['vorname'].value,
        nachname = document.forms['feedback']['nachname'].value,
        email = document.forms['feedback']['email'].value,
        button = document.getElementsByName("submit")[0];

    button.addEventListener('click', validate, false);

    function validate() {
        var message = "",
            atLeastOneInvalid = 0;

        //emptyness
        if (vorname === "") {
            message = message + "Gib bitte deinen Vornamen an. ";
            atLeastOneInvalid = 1;
        }
        if (nachname === "") {
            message = message + "Gib bitte deinen Nachnamen an. ";
            atLeastOneInvalid = 1;
        }
        if (email === "") {
            message = message + "Gib bitte deine Emailadresse an. ";
            atLeastOneInvalid = 1;
        }

        //symbols
        //vorname nachname
        var containsNumbers = 0;
        for (var i = 0; i < vorname.length; i++) {
            if(isNaN(vorname[i]) != true) {
                containsNumbers = 1;
                break;
            }
        }
        if(containsNumbers) {
            atLeastOneInvalid = 1;
            message = message + "Dein Vorname ist ungültig";
        }

        //alert message
        if (atLeastOneInvalid) {
            alert(message);
        }

    }

    /*
    function allLetter(a) {
        var letters = /^[A-Za-z]+$/;
        if (a.value.match(letters)) {
            return true;
        } else {
            alert("Bitte keine Zahl eintippen.");
            return false;
        }
    }*/


}
