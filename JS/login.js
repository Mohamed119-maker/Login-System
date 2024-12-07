let loginEmailInput = document.getElementById("login-email");
let loginPassInput = document.getElementById("login-pass");
let loginBtn = document.getElementById("login-btn");
let error = document.getElementById("error");
let incorrect = document.getElementById("alert");
let accountsList = [];

if (localStorage.getItem("accountContainer") !== null) {
    accountsList = JSON.parse(localStorage.getItem("accountContainer"));
}



loginBtn.addEventListener("click", function () {
    login();
})

function login() {
    if (validationEmail() && validationPass()) {
        let term = loginEmailInput.value;
        let pass = loginPassInput.value;
        for (let i = 0; i < accountsList.length; i++) {
            if (accountsList[i].email.toLowerCase() === term.toLowerCase() && accountsList[i].password.toLowerCase() === pass.toLowerCase()) {

                window.location.href = 'home.html';
                localStorage.setItem("userName", JSON.stringify(accountsList[i].name))
            }
            else {
                error.classList.remove("d-none");
                incorrect.classList.add("d-none");
            }
        }

    }
    else {
        incorrect.classList.remove("d-none");
        error.classList.add("d-none");
    }

}


function validationEmail() {
    let text = loginEmailInput.value;
    let regex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
    let msgEmail = document.getElementById("error");

    if (regex.test(text)) {

        return true;
    }

    else {

        return false;
    }
}
function validationPass() {
    let text = loginPassInput.value;
    let regex = /^[0-9a-z_-]{3,15}$/;
    let msgPass = document.getElementById("error");
    if (regex.test(text)) {
        return true;
    }
    else {
        return false;
    }
}

function clearForm() {
    loginEmailInput.value = null;
    loginPassInput.value = null;
}
