let logOutBtn = document.getElementById("logout-btn");
let welcomeMsg = document.getElementById("welcomeMsg");



window.addEventListener("load", function () {
    displayUser();
})


function displayUser() {
    if (localStorage.getItem("userName") !== null) {
        welcomeMsg.innerHTML = `Welcome ${JSON.parse(localStorage.getItem("userName"))}`;
    }

}

logOutBtn.addEventListener("click", function () {
    window.location = 'index.html';
})