// const fs = require('fs');

// creating a new file 
// fs.writeFileSync('read.txt','welcome to my channel')

// fs.writeFileSync('read.txt','vedant, welcome to my channel')  //now this will overwrite a data


// fs.appendFileSync('read.txt',' how are you I am fine thank you :)') //this will append the data 


// const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);

// <Buffer 76 65 64 61 6e 74 2c 20 77 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 63 68 61 6e 6e 65 6c 20 0a 0a 20 68 6f 77 20 61 72 65 20 79 6f 75 20 49 20 61 6d 20 ... 17 more bytes>
// org_data = buf_data.toString();
// console.log(org_data)  //this will convert binary data to string that human can uderstand.


// to rename the file 
// fs.renameSync('read.txt','readwrite.txt');



const fs = require('fs');

// fs.writeFileSync('pracRead.txt','Hii');
// fs.writeFileSync('pracRead.txt','Welcome');

// fs.appendFileSync('pracRead.txt',' Vedant...!')

// const bin_data = fs.readFileSync('pracRead.txt');
// console.log(bin_data);
// const humanRead = bin_data.toString()
// console.log(humanRead)


// fs.renameSync('pracRead.txt','pracNewRead.txt');


