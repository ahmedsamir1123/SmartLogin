"use strict";
var incorrect = document.querySelector("#inCorrect")

var uName = document.querySelector("#uName");
var uEmail = document.querySelector("#uEmail");
var uPassword = document.querySelector("#uPassword");

var registerList
var emailValidat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (localStorage.Register != null) {
    registerList = JSON.parse(localStorage.Register)
} else {
    registerList = []
}


function Register() {
    var registerDetails = {
        uName: uName.value,
        uEmail: uEmail.value,
        uPassword: uPassword.value

    }
    const indexOfEmail = registerList.findIndex(item => item.uEmail === registerDetails.uEmail);

    if (emailValidat.test(registerDetails.uEmail) == true && registerDetails.uPassword != "" && registerDetails.uName != "") {


        if (indexOfEmail > -1) {
            incorrect.classList.replace("text-success", "text-danger")
            incorrect.innerHTML = "Email already exists"


        }
        else {


            registerList.push(registerDetails)
            localStorage.setItem('Register', JSON.stringify(registerList))
            incorrect.classList.replace("text-danger", "text-success")
            incorrect.innerHTML = "success"
        }


    }
    else {
        incorrect.classList.replace("text-success", "text-danger")

        incorrect.innerHTML = "All inputs is required"

    }






}

function login() {

    var loginName = document.querySelector("#loginName").value;
    var loginPassword = document.querySelector("#loginPassword").value;
    console.log(loginName);

    if (emailValidat.test(loginName) == true && loginPassword != "") {
        for (var i = 0; i < registerList.length; i++) {

            if (registerList[i].uEmail.includes(loginName) == true && registerList[i].uPassword == loginPassword) {


                window.location.href = "home.html";

                localStorage.setItem('uname', JSON.stringify(registerList[i].uName))


            } else {
                incorrect.innerHTML = "incorrect email or password"
            }
        }
    }
    else {
        incorrect.innerHTML = "All inputs is required"

    }


}

showDate()


function showDate() {
    var userName = localStorage.getItem('uname')
    var template = "Welcome " + userName

    document.querySelector("#template").innerHTML = template
}


function logOut() {
    localStorage.removeItem("uname")
    window.location.href = "index.html";

}

