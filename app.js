const http = require('http');
const { title } = require('process');
const fs = require('fs');

const server =  http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    // process.exit();

    if(req.url==='/'){
        res.write('<html>');
        res.write('<head><title>enter message</title></head>');
       res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
       return res.end();
    }

if(req.url==='/message'&& req.method==='POST'){
    const body = [];
    req.on('data',(chunks)=>{
        console.log(chunks);
        body.push(chunks);

    });
    req.on('end',()=>{
        const parseBody = Buffer.concat(body).toString();
       const message = parseBody.split('=')[1];
       fs.writeFileSync('message.txt',message);
    });
    res.statusCode == 302;
    res.setHeader('Location','/');
   return res.end();

}
  

    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>first node</title></head>');
    res.write('<body><h1>hello from node.js</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);

///differentn way create function

//// named function
// function rqListener (req,res) {
    
// }
// http.createServer(rqListener);


//// anonymous function
// http.createServer(function(req,res){});


//// arrow function
// http.createServer((req,res)=>{
//     console.log(req);
// });

