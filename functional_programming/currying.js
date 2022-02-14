const { pipe, compose } = require('lodash/fp')
const input = `           JAVASCRIPT        `;

const trim = str => str.trim()

const wrapInDiv = str => `<div>${str}</div>`

const wrapInSpan = str => `<span>${str}</span>`

// Non Curried Version 
// const wrap = (type, str) => `<${type}>${str}<${type}/>`

// Currried version 
const wrap = type => str => `<${type}>${str}<${type}/>`

const toLowerCase = str => str.toLowerCase()

// output of the each function becomes the input of the next function
// that is called pipeing
// const transform = pipe(trim, toLowerCase, wrap("div"))
// we can send a string in pipe function it always expects a fucntion 


const transform = pipe(trim, toLowerCase, wrap("span"))
console.log("operation ==>", transform(input))