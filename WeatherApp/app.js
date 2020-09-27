const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.htm");
});

app.post("/", function(req, res){
  const query = req.body.CityName;
  const apiKey = "e32f5711a7f07673a03bf833bb1a9b79";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
  https.get(url, function(response) {

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      //console.log(weatherData);
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write( "<h1>The weather is currently '" + weatherData.weather[0].description + "'</h1><img src = " + imgURL + "><br>Temperature in " + query + " is " + temp + "°C but Feels Like " + weatherData.main.feels_like + "°C");
      res.send();
    })
  })
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
