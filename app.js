const http = require('http');
const { title } = require('process');

const server =  http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    // process.exit();
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

