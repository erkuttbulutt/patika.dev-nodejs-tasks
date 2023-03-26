const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Bir istek gönderildi.");
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Contect-Type": "text/html" });
    res.write("<h1>Index sayfasi</h1>");
  } else if (url === "/about") {
    res.writeHead(200, { "Contect-Type": "text/html" });
    res.write("<h1>About sayfasi</h1>");
  } else if (url === "/contact") {
    res.writeHead(200, { "Contect-Type": "text/html" });
    res.write("<h1>Contact sayfasi</h1>");
  } else {
    res.writeHead(404, { "Contect-Type": "text/html" });
    res.write("<h1>404</h1>");
  }

  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Sunucu port ${port}de başlatıldı.`);
});
