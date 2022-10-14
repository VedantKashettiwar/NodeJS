const EventEmitter = require('events');

const event = new EventEmitter();

//  event.on('sayMyName',()=>{
//     console.log('Your first name is Vedant');
//  })
//  event.on('sayMyName',()=>{
//     console.log('Your middle name is Santosh');
//  })
//  event.on('sayMyName',()=>{
//     console.log('Your last name is Kashettiwar');
//  })

// event.emit('sayMyName');



event.on('checkPage',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})


event.emit('checkPage',200,'ok');