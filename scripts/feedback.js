window.onload = function() {
    'use strict';
<<<<<<< Updated upstream
    var vorname = document.forms['feedback']['vorname'].value,
        nachname = document.forms['feedback']['nachname'].value,
        button = document.getElementsByName("submit")[0];

    button.addEventListener('click', validate, false);
    
    function validate() {
        if(vorname == "") {
            alert("Gib bitte deinen Vornamen an");
        }
    }
    
    /*
    function allLetter(a) {
        var letters = /^[A-Za-z]+$/;
        if (a.value.match(letters)) {
=======
    var a = document.forms['feedback'].elements['vorname'].value;
    function allLetters(a){
        var letters = /^[A-Za-z]+$/;
        if(a.match(letters)){
>>>>>>> Stashed changes
            return true;
        } else {
            alert("Bitte keine Zahl eintippen.");
            return false;
        }
    }*/
    
    
}
