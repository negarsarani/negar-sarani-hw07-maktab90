"use strict"
let arrayInput = [8, 3, 6, 1];
let arrayInput1 = [5, 10, 4, 15];

const getInputs = [...arrayInput, ...arrayInput1]
console.log(getInputs.sort((a, b) => {
    return a - b
}));


