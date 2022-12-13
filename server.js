const http = require('http');
const PORT=9000;

http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('<h1>Hello Node!!!!</h1>\n');
 }).listen(PORT);
 
 // Console will print the message
 console.log(`Server running at http://127.0.0.1:${PORT}`);