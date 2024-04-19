let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");


signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});

document.addEventListener("DOMContentLoaded", function() {
    let loginButton = document.querySelector(".clkbtn");
  
    loginButton.addEventListener("click", function(event) {
      event.preventDefault(); // Evita que el formulario se envíe automáticamente
      
      let emailInput = document.querySelector(".email");
      let passwordInput = document.querySelector(".password");
      
      if (!emailInput.value.trim() || !passwordInput.value.trim()) {
        alert("Por favor, completa todos los campos.");
      }
    });
  });

  

  