const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
  }
  if (req.url === "/about") {
    res.end("Welcome to about page");
  }
  res.end("Route not found..");
});

// run server
server.listen(8000);
