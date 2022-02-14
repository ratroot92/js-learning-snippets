const person = {
    name: "John", address: {
        country: "USA",
        city: "Sans Fransisco"
    }
};
// GOAL 
// create a copy object and change properties dont mutate the orignal object 


// Method 1 and Method 2 follows shallow copy 
// should be kept in mind that nested properties changes will still 
// affect the original object 

// method 1 
// this gonna copy all the properties of this object 
// as the third arguemnt we can provide updated properties 
const updated = Object.assign({}, person, { name: "Ahmed1", age: 30 })


// method 2 
// spread opertaor 
// const spread = { ...person, name: "Ahmed2", age: 40 } // shallow copy 
const spread = {
    ...person,
    address: {
        ...person.address,
        city: "new Ciy"
    }
    ,
    name: "new Name "
}
spread.address.city = "new city"
console.log("spread ==> ", spread)
console.log("orignal ==> ", person)
