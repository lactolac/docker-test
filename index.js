const http = require("http");

http
  .createServer((req, res) => {
    res.write("Ola k ase !!!!!!!?  NADAAAAAAAAAAAAAAAAAAAAAA !!!");
    res.end();
  })
  .listen(3000);
