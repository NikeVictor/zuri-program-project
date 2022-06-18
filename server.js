const http = require('http');
const fs = require('fs');


const port = 8080;

const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/') {
      const htmlFile = 'view/home.html';
      res.statusCode = 200;
      fs.createReadStream(htmlFile).pipe(res);
  }
  else if (req.url === "/home") {
    const htmlFile = 'view/home.html';
    res.statusCode = 200;
    fs.createReadStream(htmlFile).pipe(res);
}
  else if (req.url === "/contact") {
      const htmlFile = 'view/contact.html';
      res.statusCode = 200;
      fs.createReadStream(htmlFile).pipe(res);
  }
  else if (req.url === "/about") {
    const htmlFile = 'view/about.html';
    res.statusCode = 200;
    fs.createReadStream(htmlFile).pipe(res);
}
});

server.listen(port, () => {
  console.log(`The serer is running at port number:${port}`);
});