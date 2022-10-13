// const add = require('./oper'); //1st way to import exported module. (use when you are importing only one file)
// console.log(add(5,10));

// const oper = require('./oper'); //2nd way it create object of function (use when you are importing more than one function)
// console.log(oper.add(5,10));
// console.log(oper.sub(5,10));


const {add,sub,mul,div} =require('./oper') //3rd way (use when you are importing more than one function)
console.log(add(5,10));
console.log(sub(5,10));
console.log(mul(5,10));
console.log(div(5,10));