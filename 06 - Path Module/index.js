const path = require('path');
console.log(path.dirname('/home/wohlig/Learning Node/06 - Path Module/index.js')); // return path of file

console.log(path.extname('/home/wohlig/Learning Node/06 - Path Module/index.js')); //return the extension of file

console.log(path.basename('/home/wohlig/Learning Node/06 - Path Module/index.js')); //return file name with extension

console.log(path.parse('/home/wohlig/Learning Node/06 - Path Module/index.js')); //return all info like root, dir, base, ext, name.

const myPath = path.parse('/home/wohlig/Learning Node/06 - Path Module/index.js');
console.log(myPath.name) //return only name without extension