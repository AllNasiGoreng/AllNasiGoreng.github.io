window.onload = function () {
    'use strict';
    
    var button = document.getElementsByName("submit")[0];

    button.addEventListener('click', validate, false);

    function validate() {
        var vorname = document.forms['feedback']['vorname'].value,
        nachname = document.forms['feedback']['nachname'].value,
        email = document.forms['feedback']['email'].value;
        
        var message = "",
            atLeastOneInvalid = 0;

                var containsNumbers = 0,
            numbers = /^[0-9]+$/;
        //emptyness
        if (vorname === "" || numbers.test(vorname)) {
            console.log(vorname);
            message = message + "Dein Vorname ist ungültig. ";
            atLeastOneInvalid = 1;
        }
        
        if (nachname === "" || numbers.test(nachname)) {
            console.log(nachname);
            message = message + "Dein Nachname ist ungültig. ";
            atLeastOneInvalid = 1;
        }
        
        if (email === "") {
            console.log(email);
            message = message + "Gib bitte deine Emailadresse an. ";
            atLeastOneInvalid = 1;
        }
        
        //alert message
        if (atLeastOneInvalid === 1) {
            alert(message);
        }

    }
};
