function showSignUp() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signUpForm").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("signUpForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}

function signup() {

    let name = document.getElementById("signupName").value;
    let phoneNo = document.getElementById("signupNumber").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    if(name === "" || phoneNo === "" || email === "" || password === "") {
        alert("Please fill all the credentials...");
        return;
    }

    localStorage.setItem("Name", name);
    localStorage.setItem("Phone_No", phoneNo);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);

    alert("SignUp successfully");
}

function login() {
    
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedEmail = localStorage.getItem("Email");
    let storedPassword = localStorage.getItem("Password");

    if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "home.html";
    }
    else {
        alert("Invalid Credentials");
    }
}