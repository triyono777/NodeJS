const http = require('http'); // karena diambil dari global
const routes = require('./routes'); // diambil dari local,memakai titik slash


const server = http.createServer(routes);  // karena routes juga berisi function
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