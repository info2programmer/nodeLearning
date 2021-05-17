const http = require("http");
// const url = require("url");
const fs = require('fs');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Hello from home page");
      break;
    case "/about":
      res.end("Hello from about page");
      break;
    case "/contact":
      res.end("Hello from contact page");
      break;

      case "/userapi":
      fs.readFile(`${__dirname}/UserApi/userapi.json`,"utf-8",(err,data)=>{
        if(err){
          res.end(`Error ${err}`);
        }
        else{
          res.end(data)
        }
      })
      break;

    default:
        res.writeHead(400, {"Content-type" : "text/html"})
      res.end("<h1>Page Not Found</h1>");
      break;
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is running on 8000 port");
});
