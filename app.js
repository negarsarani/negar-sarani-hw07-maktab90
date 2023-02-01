"use strict";
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
  Negar: 300,
};

//the richest person

function topslaray() {
  const x = Object.entries(salaries);
  const getData = x.sort((a, b) => b[1] - a[1]);
  const [name, salary] = getData[0];
  const filterData = getData.filter((a) => {
    return a[1] === salary;
  });
  console.log(filterData);
  console.log(getData);
}
topslaray()
