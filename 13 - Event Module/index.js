const EventEmitter = require('events');

const event = new EventEmitter();

 event.on('sayMyName',()=>{
    console.log('Your first name is Vedant');
 })
 event.on('sayMyName',()=>{
    console.log('Your middle name is Santosh');
 })
 event.on('sayMyName',()=>{
    console.log('Your last name is Kashettiwar');
 })

event.emit('sayMyName');



// event.on('checkPage',(sc,msg)=>{
//     console.log(`status code is ${sc} and the page is ${msg}`);
// })


// event.emit('checkPage',200,'ok');



// const http =require('http');
// const EventEmitter = require('events');
// const event = new EventEmitter();
// let count = 0;
// event.on('Hello',()=>{
//     count ++;
//     console.log(`Count is ${count}`)
// })

// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         event.emit('Hello');
//         res.end('home page')
//     }
//     else if(req.url === '/about'){
//         event.emit('Hello');
//         res.end('about page')
//     }
//     else if(req.url === '/search'){
//         event.emit('Hello');
//         res.end('search page')
//     }
//     else{
//         res.writeHead(404,{'context-type':'text/http'});
//         res.end('404, Page not found')
//     }
// });

// server.listen(8000,()=>{
//     console.log('Server Startes')
// })


