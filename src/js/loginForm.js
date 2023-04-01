"use strict"

const inputLogin = document.querySelector("#inputLogin")
const userBlur = document.querySelector("#userBlur")

function usernameBlur() {
    if (inputLogin.value.length === 0) {
        userBlur.classList.remove("hidden")
        userBlur.classList.add("text-red-600")
        inputLogin.classList.remove("border-blue-200")
        inputLogin.classList.add("border-red-500")
    }
    else {
        userBlur.classList.remove("text-red-400")
    }
}

inputLogin.addEventListener("blur",usernameBlur)