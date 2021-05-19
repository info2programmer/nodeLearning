const unirest = require("unirest");
const http = require("http");
const fs = require("fs");
const requests = require("requests");

const homeFile = fs.readFileSync("index.html", "utf-8");

const replaceVal = (tempVal, orgVal) =>{
	let temperature  = tempVal.replace("{%tempval%}",orgVal.ob.tempC)
	temperature  = temperature.replace("{%currentTemp%}",orgVal.ob.tempC)
	temperature = temperature.replace("{%location%}",orgVal.place.name)
	temperature = temperature.replace("{%daystatus%}",orgVal.ob.isDay)
	return temperature
}


const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "15816161a3msh38a2652ef05cf7ap190626jsn99a160e6fdd5",
          "x-rapidapi-host": "aerisweather1.p.rapidapi.com",
          "useQueryString": true,
        },
      };
      requests("https://aerisweather1.p.rapidapi.com/observations/kolkata,in",options)
        .on("data", (chunk) => {
		  const apiData = JSON.parse(chunk)
		  const arrData = [apiData.response]
		  const realTimeData = arrData.map((val)=>replaceVal(homeFile,val)).join("")
		  res.write(realTimeData)
        })
        .on("end", function (err) {
          if (err) return console.log("connection closed due to errors", err);
          res.end()
        });
      break;

    default:
      res.writeHead(400, { "Content-type": "text/html" });
      res.end("<h1>Page Not Found</h1>");
      break;
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is running on 8000 port");
});

// var req = unirest("GET", "https://aerisweather1.p.rapidapi.com/observations/kolkata,in");

// req.headers({
// 	"x-rapidapi-key": "15816161a3msh38a2652ef05cf7ap190626jsn99a160e6fdd5",
// 	"x-rapidapi-host": "aerisweather1.p.rapidapi.com",
// 	"useQueryString": true
// });

// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });
