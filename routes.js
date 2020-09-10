
const fs = require('fs');
// function requestHandle(req,res){}    // cara biasa

const requestHandler =(req,res) => {
    const method= req.method;
    const url= req.url;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunks) => {
            console.log(chunks);
            body.push(chunks);
    
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode == 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    
    
    }
    
    
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>first node</title></head>');
    res.write('<body><h1>hello from node.js</h1></body>');
    res.write('</html>');
    res.end();
    
}; 

// module.exports ada 2 cara

 // supaya bisa dipanggil di class lain atau diimport (require) class lain

//  module.exports = requestHandler;

 // bisa juga dibuat multi variable / dijadikan sebagai object

// module.exports  = {
//     handler:requestHandler,
//     someText:'hardcode text',
// };  


// bisa juga memakai cara ini
// module.exports.handler = requestHandler;
// module.exports.someText= 'hardcode text';
 
// bisa juga pakai shotrcut exports (khusus node.js)
exports.handler = requestHandler;
exports.someText= 'hardcode text';