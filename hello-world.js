//First App
console.log("Hello World");

//Second App

var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    response.end("<h1>Hello Node!!!!</h1>\n");
  })
  .listen(3000);

console.log("Server running at http://127.0.0.1:3000/");

//Third App

var fs = require("fs");

fs.appendFile("welcome.txt", "Hello Node", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

fs.readFile("hello.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});
