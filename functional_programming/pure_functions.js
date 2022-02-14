/**
 * PURE FUNCTIONS 
 * 1- SAME (ARGS) == SAME (RESULTS)
 * 2- HAS NO SIDEEFFECTS (doesnot affect global vaiables )
 */



/**
 * PURE FUNCTIONS  BENIFITS 
 * 1- Self documented 
 * 2- Easily tesable 
 * 3- Concurrent 
 * 4- Cacheable
 */


/**
 * Non pure function 
 * always returns a new value with same arguement
 */
function myFunction(number) {
    return number * Math.random()
}


/**
 * Pure function 
 * always returns same value for same arg
 */
function myFunction1(number) {
    return number * 2;
}


/**
 * Conclusion 
 * 1-In pure functions we cannot use random values 
 * 2-In Pure functions no current date time can be used 
 * 3-we cannot read or change global state  / DOM /  files /  database 
 * 4-cannot muatate params / args 
 * Reducers should always be pure
 */




/**
 * It is impure function 
 * as you can minAge is not defined here 
 * hence it could be defined globally and hence 
 * for same arg the value could change at any time 
 */

function impureiSEligible(age) {
    return age > minAge;
}

/**
 * To make it pure pass minimum age as param
 */

function pureIsEgligible(age, minAge) {
    return age > minAge;
}


/**
 * Pure functions does not mutate the params 
 * example string in JS and other languages are immutable 
 */

let name = "Mosh";
let newName = name.toUpperCase() // we will get the new string 
// orignal string is not affected 

// but in case of obejct 
let book = {}
book.title = "..."