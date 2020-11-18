const http = require("http");

http
  .createServer((req, res) => {
    res.write("Ola k ase?");
    res.end();
  })
  .listen(3000);
