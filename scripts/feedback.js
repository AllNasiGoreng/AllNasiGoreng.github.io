//Benutzerdaten entgegen nehmen

 function removeElementsByClass(className){
        elements = document.getElementsByClassName(className);
        while(elements.length > 0){
          elements[0].parentNode.removeChild(elements[0]);
        }
      }    
    
      function flagError(field, prependText){
        var message = prependText + " kann nicht leer sein!";
        form[field].insertAdjacentHTML('afterend', '<span class="error">' + message + '</span>');
      } // error Nachtricht
    
      function checkEmpty(field, prependText){
        if (form[field].value === ""){
          flagError(field, prependText);        
          isValidSubmission = false;
        }
      }
    
      function validateForm() {
        removeElementsByClass("error");
        
        checkEmpty("vorname", "Vorname"); //Vorname validieren
        checkEmpty("nachname", "Nachname"); //Nachname validieren
        checkEmpty("email", "E-mail"); //E-mail validieren
        
        return isValidSubmission;
      }
      
      var form = document.getElementById("feedback"),
          isValidSubmission = true;
          
      form.onsubmit = validateForm;