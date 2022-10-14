const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('Home Page');
    }
    else if(req.url == '/about'){
        res.end('About Page');
    }
    else if(req.url == '/contact'){
        res.end('Contact Page');
    }
    else{
        res.writeHead(404,{'Context-type':'text/http'});
        res.end('404 error, page not found');
    }
});

server.listen(8000,()=>{
    console.log('At console but listening on port no 8000')
})




// const http = require('http');

// const server = http.createServer((req , res)=>{
//     // res.end('Hello from the other side');
//     if(req.url == '/'){
//         res.end('Home Page')
//     }
//     else if(req.url == '/about'){
//         res.end('About Page')
//     }
//     else if(req.url == '/contact'){
//         res.end('Contact Page')
//     }
//     else{
//         res.writeHead(404,{'Content-type':'text'});
//         res.end('404 error page not found');
//     }
// });

// server.listen(8000, ()=>{
//     console.log('listening to the port no 8000');
// })
