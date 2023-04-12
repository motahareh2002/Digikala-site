"use strict"

const $ = document ;
let phoneOrEmailUserForLogin = $.querySelector(".phoneOrEmailUserForLogin")
let inputCodeLogin = $.querySelector("#inputCodeLogin")
let timeOutForLogin = $.querySelector(".timeOutForLogin")
let confirmationBtn = $.querySelector("#confirmationBtn")
let phoneOrEmail = localStorage.getItem("phoneOrEmail")
let submit = $.querySelector("#submit")
phoneOrEmailUserForLogin.innerHTML = phoneOrEmail;
let timeMin = 2
let timeSec = 30
setInterval(()=>{
    if(timeSec == 0 && timeMin > 0){
        
        timeMin -= 1 
        timeSec = 59
    }
    if(timeMin == 0) {
            timeMin = 0 ;
            timeSec = 0
    }
    else{
        timeSec--
    }
    
    timeOutForLogin.innerHTML = (timeSec < 10 ? "0" + timeSec : timeSec) + " : " + (timeMin < 10 ? "0" + timeMin : timeMin) + " "
},1000)



confirmationBtn.addEventListener("click",()=>{
    if(inputCodeLogin.value !== 0 && inputCodeLogin.value.length === 6){
        submit.href = "./index.html"
    }
    else{
        alert("invalid code")
    }
})
