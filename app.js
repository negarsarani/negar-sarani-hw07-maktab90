"use stirct"
let map = new Map();
map.set("name", "John");

let keys = [...map.keys()];

console.log(keys);
keys.push("more" , "less");


const [...arrayMap] = map
console.log(arrayMap);
arrayMap.push(keys)



//To solve the error, convert the value to an array before calling the method, or make sure to only call the push() method on valid arrays.
