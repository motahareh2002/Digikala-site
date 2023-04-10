"use strict"

const inputLogin = document.querySelector("#inputLogin")
const userBlur = document.querySelector("#userBlur")
const regester = document.querySelector("#regester")
function usernameBlur() {
    if (inputLogin.value.length === 0) {
        userBlur.classList.remove("hidden")
        // userBlur.innerHTML = 'لطفا این قسمت را خالی نگذارید'
        userBlur.classList.add("text-red-600")
        inputLogin.classList.remove("border-blue-200")
        inputLogin.classList.add("border-red-500")
    }
    else {
        userBlur.classList.add("hidden")
        const email_re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const phone_re = /^09(1[0-9]|3[1-9]|2[1-9]|0[0-9])-?[0-9]{3}-?[0-9]{4}$/;
        userBlur.classList.remove("text-red-400")
        if(/^\d+$/.test(inputLogin.value) === true) {
            if(phone_re.test(inputLogin.value) === false) {
                regester.innerHTML = "شماره موبایل نادرست است."
                regester.classList.remove("hidden")
            }
            else{
                regester.classList.add("hidden")
            }
        } else {
            // when input contains numbers and strings (username).
            if(email_re.test(inputLogin.value) === false) {
                // errorMessages['phone_number_username'] = "Username does not have valid pattern.";
                regester.innerHTML = " ایمیل نادرست است."
                regester.classList.remove("hidden")
            }
            else{
                regester.classList.add("hidden")
            }
        }
    }
}

inputLogin.addEventListener("blur",usernameBlur)