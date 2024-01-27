const http = require('node:http');//thư viện cài đặt node.js
const hostname = '127.0.0.1'; //localhost
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n Hoi dan it voi Eric');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});