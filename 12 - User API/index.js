const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('You are in homepage')
    }
    else if(req.url == '/about'){
        res.end('You are in about page')
    }
    else if(req.url == '/contact'){
        res.end('You are in contact page')
    }
    else if(req.url == '/userapi'){
        fs.readFile(`${__dirname}/Api/api.json`,'utf-8',(err,data)=>{
            const Jsobj = JSON.parse(data)
            const Str=JSON.stringify(Jsobj[0])
            res.end(Str)
        })
    }
    else{
        res.writeHead(404,{'Context-type':'text/api'});
        res.end('404, Page not found')
    }
});

server.listen(8000,()=>{
    console.log('server started');
})