const add = (a,b)=>{return a+b};
const sub = (a,b)=>{return a-b};
const mul = (a,b)=>{return a*b};
const div = (a,b)=>{return a/b};

// module.exports = add; //1st method 

// module.exports.add = add; //2nd method
// module.exports.sub = sub;

// module.exports.add = add; //3rd method
// module.exports.sub = sub;
// module.exports.mul = mul;
// module.exports.div = div;

module.exports = { add, sub, mul, div }; //4th method