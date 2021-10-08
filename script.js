console.clear();

var inputField = document.getElementById("input-field");

inputField.onkeyup = function(event) {
  var input = inputField.value;
  if (event.keyCode == 13 && input === "") {
    inputField.classList.add("bounce");
    setTimeout(function() {
      //remove the class so animation can occur as many times as user triggers event, delay must be longer than the animation duration and any delay.
      inputField.classList.remove("bounce");
    }, 1000); 
  }  
}

