let form = document.querySelector("form");
let password = document.getElementById("password");
let confirmPass = document.getElementById("confirmPass");
let termSection = document.getElementById("termSection");
let errorText = document.querySelector(".error");
let buttonSubmit = document.querySelector(".buttonSubmit");
let buttonClear = document.querySelector(".buttonClear");

form.addEventListener("submit", validation);
buttonClear.addEventListener("click", clearFunction);

function validation(event){
    event.preventDefault();
    clearError();
    if (termSection.checked === false){
        window.alert("You must agreed the terms of service.");
        
    }
    if (password.value.length < 10) {
        errorText.style.display = "block";
        errorText.innerText = ("Your password is too short! Please provide a password that is at least 10 characters long.");
        password.style.border = "3px solid red";
        password.style.borderRadius = "5px";
        password.style.boxShadow = "0 0 5px blue"
        
    }
    if (password.value !== confirmPass.value) {
        errorText.style.display = "block";
        errorText.innerText = "Your passwords does not match. You must confirm the same passwords.";
        confirmPass.style.border = "3px solid red";
        confirmPass.style.borderRadius = "5px";
        confirmPass.style.boxShadow = "0 0 5px blue"
    }
    else {
        window.alert("Submission send!")
    }
}

function clearFunction () {
    form.reset()
}