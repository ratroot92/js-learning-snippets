const numbers = [1, 2, 3];
// Adding 
const end = [...numbers, 4] // end 
console.log("end ==> ", end)

const start = [4, ...numbers,] // start 
console.log("start ==> ", start)

let indexOfTwo = numbers.indexOf(2)
// copy all the items before 2 
// slice returns a new array 
const afterTwo = [...numbers.slice(0, indexOfTwo), 4, ...numbers.slice(indexOfTwo)] //after 2 
console.log("added after 2 ==> ", afterTwo)
