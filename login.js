function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}

var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

function showLoadingScreen() {
    document.getElementById("loadingScreen").style.display = "flex";
}

function hideLoadingScreen() {
    document.getElementById("loadingScreen").style.display = "none";
}

function showWelcomeMessage(username) {
    document.getElementById("welcomeUsername").innerText = username;
    document.getElementById("welcomeMessage").style.display = "block";
    setTimeout(() => {
        document.getElementById("welcomeMessage").style.display = "none";
    }, 2000);
}

function registerUser() {
    var username = document.getElementById("registerUsername").value;
    var password = document.getElementById("registerPassword").value;

    showLoadingScreen();

    setTimeout(() => {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        hideLoadingScreen();
        alert("Registration successful!");
    }, 1000);
}

function loginUser() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    showLoadingScreen();

    setTimeout(() => {
        var storedUsername = localStorage.getItem("username");
        var storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            hideLoadingScreen();
            document.getElementById("formBox").style.display = "none";
            document.getElementById("navMenu").classList.remove("hide-menu");
            showWelcomeMessage(username);
        } else {
            hideLoadingScreen();
            alert("Invalid username or password.");
        }
    }, 1000);
}