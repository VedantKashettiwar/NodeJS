const fs = require('fs'); 

const bioData ={
    name:'Vedant',
    age: 22,
    DOB:'16-Apr-2022'
}; //js object

// const jsonData = JSON.stringify(bioData) //object to JSON

// fs.writeFile('cJson.json',jsonData,(err)=>{
//     console.log('done');
// }); //createing new file cJson and adding data 

fs.readFile('cJson.json','utf-8',(err,data)=>{
    const orgData = JSON.parse(data); //converting JSON to object
    console.log(data); //printing data from json
    console.log(orgData); //printing object
}); 