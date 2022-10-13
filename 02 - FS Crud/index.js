const fs = require('fs');

// fs.mkdirSync('thapa'); //it will create a folder

// fs.writeFileSync('thapa/bio.txt','Welcome'); //it will create a file in thapa folder and the data

// fs.appendFileSync('thapa/bio.txt',' Vedant'); //this will append a data into bio file

// const data = fs.readFileSync('thapa/bio.txt','utf-8'); //it will encode the data from binary to understanding language 'utf8' is a encoder
// console.log(data)

// fs.renameSync('thapa/bio.txt','thapa/mybio.txt'); //this will rename the file name from bio.txt to mybio.txt

// fs.unlinkSync('thapa/mybio.txt'); // it will delete the mybio file


fs.rmdirSync('thapa'); //this will also delete folder