// script.js
document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
    var body = document.body;
  
    toggleButton.addEventListener("click", function() {
      body.classList.toggle("dark-mode");
    });
  });
  