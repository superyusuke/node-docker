const http = require("http");

const server = http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!\n");
});

require('./sniffer').sniffOn(server)

server.listen(8124);
console.log("Server running at http://127.0.0.1:8124 in container");
console.log("Server running at http://localhost:8000/ in host");
