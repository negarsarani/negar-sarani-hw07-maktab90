"use strict";
document
  .querySelector(".button-register")
  .addEventListener("click", registerbtn);
const form = document.querySelector(".form");
const emptyValue = document.querySelectorAll(".empty-value");
const notice = document.querySelectorAll(".notice");
const checkPass = document.querySelector(".checkPass");

const firstName = document.querySelector(".input-firstName");
const Middlename = document.querySelector(".input-Middlename");
const Lastname = document.querySelector(".input-Lastname");
const phone = document.querySelector(".phoneInput");
const phoneNo = document.querySelector(".input-phoneNo");
const currentAdress = document.querySelector(".input-Current-Adress");
const email = document.querySelector(".input-email");
const password = document.querySelector(".password");
const RePassword = document.querySelector(".RePassword");


function checkPassword() {
  password.value == RePassword.value
    ? checkPass.classList.add("display-notice")
    : checkPass.classList.remove("display-notice");
}


function registerbtn(Event) {
  const array = [...emptyValue];
  Event.preventDefault();
  
  const mapInput = array.map((a) => a.value);
  
  for (let index = 0; index < mapInput.length; index++) {
    checkPassword();
    if (mapInput[index] !== "" || mapInput[index].length !== 0) {
      if (notice[index].classList.length === 1) {
        notice[index].classList.add("display-notice");
      }
    } else {
      notice[index].classList.remove("display-notice");
    }
  }
  let obj={
    firstName : firstName.value,
    Middlename : Middlename.value,
    Lastname : Lastname.value,
    phone : phone.value,
    phoneNo : phoneNo.value,
    currentAdress : currentAdress.value,
    email : email.value,
    password : password.value,
    RePassword : RePassword.value,
  } 
  console.log(obj);
}
