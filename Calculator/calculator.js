const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.htm");
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalc.htm");
});

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result is " + result);
});

app.post("/bmicalculator", function(req, res) {
  var w = parseFloat(req.body.Weight);
  var h = parseFloat(req.body.Height);
  var n = w / ( h * h);
  res.send("Your BMI is " + n);
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
