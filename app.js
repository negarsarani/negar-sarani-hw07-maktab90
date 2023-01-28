"use strict"
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

//the richest person

function topslaray() {
    const x = Object.entries(salaries);
    const getData = x.sort(
        (a, b) => a[1] - b[1]
    )
    console.log(`the richest person is : ${getData[0][0]} with ${getData[0][1]} salary`);
}
console.log(topslaray()); 