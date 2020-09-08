const http = require('http');

const server =  http.createServer((req,res)=>{
    console.log(req);
    // process.exit();
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

