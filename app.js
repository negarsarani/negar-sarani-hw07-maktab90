"use strict";
document
  .querySelector(".button-register")
  .addEventListener("click", registerbtn);
const form = document.querySelector(".form");
const emptyValue = document.querySelectorAll(".empty-value");
const notice = document.querySelectorAll(".notice");

function registerbtn(Event) {
  const array = [...emptyValue];
  Event.preventDefault();
  const mapInput = array.map((a) => a.value);

  for (let index = 0; index < mapInput.length; index++) {
    if (mapInput[index] !== "" || mapInput[index].length !== 0) {
      if (notice[index].classList.length === 1) {
        notice[index].classList.add("display-notice");
      }

      console.log("a");
    } else {
      notice[index].classList.remove("display-notice");
      console.log("b");
    }
  }
}
