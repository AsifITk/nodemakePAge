const http = require("http");
const fs = require("fs");
let visited = 0;

const server = http.createServer((req, res) => {
  //   console.log("request was made: " + req.url);
  if (req.url == "/end") {
    server.close();
  }
  // res.setHeader("Content-Type", "text/html");
  // res.write("<h1>Hello World</h1>");
  // res.write("<p>This is my first node.js app<p>");
  // res.write("<div>This is my first node.js app<div>");
  // res.end();

  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-type": "text/html" });
      var fileContents = fs.readFileSync("./views/index.html", {
        encoding: "utf8",
      });
      res.write(fileContents);
      res.write(` <div class="container">
      <h2>Home</h2>
      <h5 class='visited'>Visited: ${visited} times</h5>
    </div>`);

      res.end();
      visited++;

      break;
    case "/index.html":
      res.writeHead(200, { "Content-type": "text/html" });
      var fileContents = fs.readFileSync("./views/index.html", {
        encoding: "utf8",
      });
      res.write(fileContents);
      res.write(` <div class="container">
      <h2>Home</h2>
      <h5 class='visited'>Visited: ${visited} times</h5>
    </div>`);

      res.end();
      visited++;

      break;
    case "/product.html":
      res.writeHead(200, { "Content-type": "text/html" });
      var fileContents = fs.readFileSync("./views/product.html", {
        encoding: "utf8",
      });

      res.write(fileContents);
      res.write(` <div class="container">
      <h2>Products</h2>
      <h5 class='visited'>Visited ${visited} Times</h5>
    </div>`);

      res.end();
      visited++;

      break;
    case "/contacts.html":
      res.writeHead(200, { "Content-type": "text/html" });
      var fileContents = fs.readFileSync("./views/contacts.html", {
        encoding: "utf8",
      });

      res.write(fileContents);
      res.write(` <div class="container">
      <h2>Contacts</h2>
      <h5 class='visited'>Visited ${visited} times</h5>
    </div>`);

      res.end();
      visited++;
      break;

    case "/styles.css":
      res.writeHead(200, { "Content-type": "text/css" });
      var fileContents = fs.readFileSync("./views/styles.css", {
        encoding: "utf8",
      });
      res.write(fileContents);
      res.end();

      break;
    case "/script.js":
      res.writeHead(200, { "Content-type": "application/javascript" });
      var fileContents = fs.readFileSync("./views/script.js", {
        encoding: "utf8",
      });
      res.write(fileContents);
      res.end();

      break;

    default:
      break;
  }
});

server.on("error", (err) => {
  console.log(err);
});
server.on("close", () => {
  console.log("server is closed");
});
const PORT = 8000;
server.listen(PORT, () => {
  console.log("server is running on port: " + PORT);
});

module.exports = {
  visited: visited,
};
