let userNameInput = document.getElementById("name");
let userEmailInput = document.getElementById("user-email");
let userPassInput = document.getElementById("user-pass");
let signUpBtn = document.getElementById("sign-up-btn");
let signIn = document.getElementById("signIn");
let reapeted = document.getElementById("reapeted-email");
let accountsList = [];

if (localStorage.getItem("accountContainer") !== null) {
    accountsList = JSON.parse(localStorage.getItem("accountContainer"));
}


signUpBtn.addEventListener("click", function () {
    registration();


});

signIn.addEventListener("click", function () {
    window.location = '/index.html'
})


function registration() {
    if (validationName() && validationEmail() && validationPass()) {
        let account = {
            name: userNameInput.value,
            email: userEmailInput.value,
            password: userPassInput.value
        }
        if (isExist(account) == true) {
            reapeted.classList.remove("d-none");
        }
        else {
            accountsList.push(account);

            localStorage.setItem("accountContainer", JSON.stringify(accountsList));
            clearForm();

            let success = document.getElementById("success");
            success.classList.remove("d-none");
            reapeted.classList.add("d-none");
        }


    }
    else {
        success.classList.add("d-none");
    }

}
function isExist(account) {
    for (let i = 0; i < accountsList.length; i++) {
        if (accountsList[i].email.toLowerCase() === account.email.toLowerCase()) {
            userEmailInput.classList.remove("is-valid");
            userEmailInput.classList.add("is-invalid");
            return true;
        }
    }
}

function clearForm() {
    userNameInput.value = null;
    userEmailInput.value = null;
    userPassInput.value = null;
    userNameInput.classList.remove("is-valid");
    userEmailInput.classList.remove("is-valid");
    userPassInput.classList.remove("is-valid");
}


function validationName() {
    let text = userNameInput.value;
    let regex = /^[a-zA-Z _-]{3,15}$/;
    let msgName = document.getElementById("error");
    if (regex.test(text)) {
        msgName.classList.add("d-none");
        userNameInput.classList.add("is-valid")
        userNameInput.classList.remove("is-invalid")
        return true;
    }
    else {
        msgName.classList.remove("d-none");
        userNameInput.classList.remove("is-valid");
        userNameInput.classList.add("is-invalid");
        return false;
    }
}
function validationEmail() {
    let text = userEmailInput.value;
    let regex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
    let msgEmail = document.getElementById("error");

    if (regex.test(text)) {
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        msgEmail.classList.add("d-none");
        return true;
    }

    else {
        userEmailInput.classList.remove("is-valid");
        userEmailInput.classList.add("is-invalid");
        msgEmail.classList.remove("d-none");
        return false;
    }
}
function validationPass() {
    let text = userPassInput.value;
    let regex = /^[0-9a-z_-]{3,15}$/;
    let msgPass = document.getElementById("error");
    if (regex.test(text)) {
        userPassInput.classList.add("is-valid");
        userPassInput.classList.remove("is-invalid");
        msgPass.classList.add("d-none");
        return true;
    }
    else {
        userPassInput.classList.remove("is-valid");
        userPassInput.classList.add("is-invalid");
        msgPass.classList.remove("d-none");
        return false;
    }
}
