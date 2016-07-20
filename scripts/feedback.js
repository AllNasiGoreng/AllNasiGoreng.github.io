function validateForm() {
    'use strict';
    var a = document.forms['feedback'].elements['vorname'].value;
    function allLetter(a) {
        var letters = /^[A-Za-z]+$/;
        if(a.value.match(letters)){
            return true;
        }else{
            alert("Bitte keine Zahl eintippen.");
            return false;
        }
    }
}