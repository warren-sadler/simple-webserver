// Simple web application for demonstrating the basics of AWS(EC2)
const { hostname } = require("os");
const http = require("http");
const MESSAGE = "Hello World!";
const PORT = 8080;
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(MESSAGE);
  })
  .listen(PORT, hostname, () => {
    console.log(`Server running @http://${hostname()}:${PORT}`);
  });
