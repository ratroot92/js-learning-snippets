
/**
 * Currying is Technique
 * take a function that has N args
 * and convert it into a function that has 1 arg
 * N args ==> single arg
 */


/**
 * before applying currying 
 * function add(a, b) {
 *   return a + b
 *        }
 */


// after 
function add(a) {
    return function (b) {
        return a + b

    }
}

// write the above curried function with arrow function 

const arrowAdd = a => b => a + b

/**
 * Test LIke This 
 */
console.log("------------------------------")
const add1 = add(1);
console.log("add1(5) ==>", add1(5)) // gives 6 
console.log("add1(10) ==>", add1(10)) //gives 11
console.log("------------------------------")

console.log("******************************")

console.log("------------------------------")
console.log("add(1)(5) ==>", add(1)(5))
console.log("add(1)(10) ==>", add(1)(10))
console.log("------------------------------")



// write 