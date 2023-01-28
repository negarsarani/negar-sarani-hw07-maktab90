"use stirct"
const array = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];;


function uniqueArray(array) {
    const createSet = new Set(array);
    console.log(createSet);
}
uniqueArray(array)