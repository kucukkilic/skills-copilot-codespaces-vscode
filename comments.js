// Create web server
// Create a web server that listens to requests on port 3000. The server should respond with a file named comments.js that is in the same directory as the server file.
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  const filePath = path.join(__dirname, 'comments.js');
  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
