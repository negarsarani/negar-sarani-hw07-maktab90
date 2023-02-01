"use strict"
function sort(arrayInput , arrayInput1){
  const getInputs = [...arrayInput, ...arrayInput1]
 return getInputs.sort((a, b) => {
      return a - b
  })
}
console.log(sort([8,3,6,1],[4,5,2]));


